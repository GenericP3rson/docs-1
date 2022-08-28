---
title: Speedway Getting Started
---

# Speedway Getting Started
Getting started with Speedway is easy. You can use the Speedway CLI, or the Speedway UI to get started.

## Speedway Project Installation
In order to use Speedway, you must first install the Speedway project from the GitHub Repository. You can do this by running the following command: ```git clone https://github.com/sonr-io/speedway.git```

You may also download the project as a zip file from the GitHub Repository.

## Speedway Cli Installation

**Speedway Installer (MacOS M1)**

**Speedway Installer (MacOS Intel)**

**Speedway Installer (Linux)**

**Install on Homebrew (MacOS)**

## How to build the Cli from source
How to build the Speedway CLI from source

1. Clone the project from GitHub (if you haven't already)

2. CD into the project directory

3. CD into the cli directory ```cd cmd/speedway-cli```

4. Run the build script ```./build.sh```

5. Move the binary to your go bin directory ```mv speedway /usr/local/bin```

## Getting Started with the Speedway UI
Getting started with the Speedway UI is easy. You can use the Speedway UI to create a new account, create or query a schema, build or get an object, and create or get a bucket.

Requirements:
- NodeJS 
- NPM or Yarn
- Go version 1.16 or higher

1. Clone the project from GitHub (if you haven't already)

2. CD into the project directory

3. Install the dependencies ```npm install``` or ```yarn install```

4. After the dependencies are installed, run the build script ```npm run move-build``` or ```yarn move-build```

5. Start the server ```task server:start:release``` or for debug mode ```task server:start:debug```

6. Open your browser and navigate to ```http://localhost:8080``` to view the UI 

### Speedway API
[API Reference](https://docs.sonr.io)

