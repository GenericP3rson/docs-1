#!/bin/bash

echo "Initializing environment..."
SCRIPTS_DIR=$(dirname "$0")
cd ${SCRIPTS_DIR}/../
PROJECT_DIR=$(pwd);
TMP_DIR=${PROJECT_DIR}/tmp
BIN_DIR=${TMP_DIR}/bin
BUF_CMD="${BIN_DIR}/buf"
BUF_VERSION="1.7.0"
mkdir -p ${BIN_DIR}

echo "Installing dependencies..."
curl -sSL "https://github.com/bufbuild/buf/releases/download/v${BUF_VERSION}/buf-$(uname -s)-$(uname -m)" -o "${BIN_DIR}/buf"
chmod +x "${BIN_DIR}/buf"


echo "Generating protobuf files with buf..."
cd ${PROJECT_DIR}
$(${BUF_CMD} generate buf.build/sonr-io/blockchain)

echo "Cleaning Up..."
cd ${PROJECT_DIR}
# There is definitely a better way to do this, but I'm not sure how to do it. Removing all protos not required by Motor.
rm -rfv ${TMP_DIR}

echo "Generating Markdown Docs..."
cd ${PROJECT_DIR}
npx docusaurus generate-proto-docs
