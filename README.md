# mmo-rpg

#### A basic browser-based multiplayer game with client and server written in TypeScript.

## Features

The server communicates with clients by establishing WebSocket connections.

## Installation

### Client

1. [Install bun](https://bun.sh/) on your machine (also required for server)
2. Run `bun install --production` here
3. Build the client with `bun run build`
4. Serve the client with `bun run client`

The client is now running at [`http://localhost:8080/index.html`](http://localhost:8080/index.html).

### Server

See the [respective guide](./server/README.md).

## Future plans

### Features 
- more mobs
- attacking
- map generation
- attacking
- health
- configurable settings (port etc.)

### Technical

- split server and client to separate repositories
- migrate to the native WebSocket implementation of bun (better performance)
- lag mitigation (client-side prediction etc.)
- server side validation of **all** data (anticheat)

# Server

See [server](./server/).

# Client

The client is written in TypeScript with [Excalibur.js](https://excaliburjs.com/). It comes with a simple HTTP server that can be run with Bun or NodeJS to server the client page.

## Documentation

See the typedoc [here](https://0xvector.me/mmo-rpg/client).

## Libraries