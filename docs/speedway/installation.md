---
title: Installation
displayed_sidebar: speedwaySidebar
---

## Speedway Project Installation
In order to use Speedway, you must first install the Speedway project from the GitHub Repository. You can do this by running the following command: ```git clone https://github.com/sonr-io/speedway.git```

You may also download the project as a zip file from the GitHub Repository.

## Getting Started with the Speedway UI
Getting started with Speedway is easy. Speedway allows you to interact with the Motor API. Speedway is used to create, update, and delete Speedway resources such as schemas, objects, and buckets. The CLI is also used to query objects and buckets and to perform other operations such as creating an account or logging in.

### Requirements
- NodeJS
- NPM or Yarn
- Go version 1.16 or higher

### Install Speedway UI
1. Clone the project from GitHub (if you haven't already)

2. CD into the project directory

3. Install the dependencies ```npm install``` or ```yarn install```

### Run Speedway UI
1. CD into the project directory (if you haven't already)

2. After the dependencies are installed, run the build script ```npm run move-build``` or ```yarn move-build```

3. Start the server ```task server:start:release``` or for debug mode ```task server:start:debug```

4. Open your browser and navigate to ```http://localhost:8080``` to view the UI

## Getting Started with the Speedway CLI
### Installation:

[Speedway CLI Installation](/docs/speedway/installation.md)

### Commands:

[Speedway CLI Commands](/docs/speedway/installation.md)

### Usage:
```
  speedway [command]
```

# Speedway CLI Installation
## Mac Installation

## Linux Installation

## Windows Installation

## How to Build Speedway CLI from Source
### Mac/Linux
1. Clone the project from GitHub (if you haven't already)

2. CD into the project directory

3. CD into the cli directory ```cd cmd/speedway-cli```

4. Run the build script ```./build.sh```

5. Move the binary to your go bin directory ```mv bin/speedway ~/go/bin/speedway```

6. Run the binary ```speedway```

### Windows
1. Clone the project from GitHub (if you haven't already)

2. CD into the project directory

3. CD into the cli directory ```cd cmd/speedway-cli```

4. Build using Go ```go build -o bin/speedway.exe```

5. Add the binary to your path ```setx path "%path%;C:\Users\%USERNAME%\go\bin"```

6. Run the binary ```speedway```
