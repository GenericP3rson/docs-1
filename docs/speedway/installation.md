---
title: Installation
displayed_sidebar: speedwaySidebar
---

## Requirements
- have [TaskFile](https://taskfile.dev/installation/) installed
- have [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) installed
- have the [Go](https://go.dev/doc/install) programming language installed

## Serving the UI

#### 1. Install all the front end dependencies
```bash
npm install
```

#### 2, Build the frontend
```bash
npm run build
```

#### 3. Serve the backend
```bash
task server:start:release
```

#### 4. Open your Browser to [localhost:4040](http://localhost:4040)

## Installing the CLI
#### 1. Build the Speedway CLI
```bash
go build -o speedway cmd/speedway-cli/main.go
```

#### 2. Run the help command
```bash
./speedway help
```
## Building For Backend Dev

To build for dev, run `task server:start:debug` instead of `task server:start:release`

### Running the UI: Mock Server Mode
This mode is ideal for UI development. Changes to the code will reflect on the browser automatically and there is no need to build. Any data generated will be local only. Behavior may not perfectly match the Sonr Speedway Backend.

#### 1. Tun the Frontend
```
npm install
npm start
```

#### 2. On a second terminal, run the development server
```
cd server-in-memory
npm install
npm start
```

The UI should open automatically on your browser, but if that's not the case, it can be found under [`localhost:3000`](http://localhost:3000)

#### 3. To reset the local data, go to
```
localhost:4040/reset
```

## Known Issues

#### Speedway UI: Cannot use types other than string in objects or it causes issues with validation
- Workaround: Use strings for all data-types
- Workaround: Use the cli
- Workaround: Use the <code>--file  &lt;file&gt;</code> flag on the CLI commands

#### The server sometimes fails due to `Concurrent Map Writes`
- Workaround: Restart the server and repeat the action
