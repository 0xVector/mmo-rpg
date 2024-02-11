# mmo-rpg

#### A basic browser-based multiplayer game with client and server written in TypeScript.

## Features

The server communicates with clients by establishing WebSocket connections.

The clients automatically joins the game after interacting with the game screen. The player can move around (`WASD`) the map and chase slimes. Inactive clients (eg. closed browser) are kicked. Each new instance (eg. browser tab) established a new connection and is considered as a new client.

## Installation

### Client

1. [Install bun](https://bun.sh/) on your machine (also required for server)
2. Clone with `git clone https://github.com/0xVector/mmo-rpg.git`, then `cd mmo-rpg`
3. Run `bun install --production` here
4. Build the client with `bun run build`
5. Serve the client with `bun run client`

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
- playernames
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