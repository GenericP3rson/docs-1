---
title: CLI Installation
---

## Requirements
- have [Taskfile](https://taskfile.dev/installation/) installed
- have [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) installed
- have the [Go](https://go.dev/doc/install) programming langague installed

## Running Speedway UI

### Install all the front end dependencies
```bash
npm install
```

### Build the frontend
```bash
npm run build
```

### Serve the backend
```bash
task server:start:release
```

### Open your Browser to [localhost:4040](http://localhost:4040)

## Running Speedway CLI
### Build the Speedway CLI
```bash
go build -o speedway cmd/speedway-cli/main.go
```

### Run the help command
```bash
./speedway help
```

# Known Issues
<details>
    <summary>Cannot use types other than string in objects or it casues issues with validation</summary>
    Workaround: Use strings for all datatypes
</details>
<details>
    <summary>The server sometimes fails due to `Concurrent Map Writes`</summary>
    Workaround: Restart the server and repeat the action
</details>

## Contributing
<summary>Building For Backend Dev</summary>
To build for dev, run `task server:start:debug` instead of `task server:start:release`

<summary>Running the Mock Backend</summary>

### Running the UI: Mock Server Mode
This mode is ideal for UI development. Changes to the code will reflect on the browser automatically and there is no need to build. Any data generated will be local only. Behavior may not perfectly match the Sonr Speedway Backend.

**Tun the Frontend:**
```
npm install
npm start
```

**on a second terminal, run the development server:**
```
cd server-in-memory
npm install
npm start
```

The UI should open automatically on your browser, but if that's not the case, it can be found under `localhost:3000`

**to reset the local data, go to:**
```
localhost:4040/reset
```
