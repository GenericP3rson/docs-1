---
title: CLI Installation
---
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