# mmo-rpg - Server

This is the client for the [mmo-rpg project](../) written in [NestJS](https://nestjs.com/). It is designed to be run with [Bun](https://bun.sh), but can also be run with NodeJS (some config tweaking will be required).

The server communicates with the clients by opening WebSocket connections. It implements its own keep-alive and timeout mechanism. The data is sent as JSON according to a pre-defined schema.

The server is for now naive - it presumes that clients only send correct data, so it is susceptible to cheating clients. However, it is not just a simple forwarder of messages between the clients - most of the game logic origins in the server and it is ready to have full data validation (and thus recognise cheating clients).

## Installation

### With Bun

1. [Install bun](https://bun.sh/) on your machine with  with `npm install -g bun` (the same as for client).
2. Clone with `git clone https://github.com/0xVector/mmo-rpg.git`, then `cd mmo-rpg/server`
3. Run `bun install --production` here
4. Build with `bun run start:prod`

The server is now running at `localhost:3000`.

### With NodeJS

Server can be run with only NodeJS, but bun is required as a package manager to install the required dependencies, as there is some problem with dependency resolution when installing using npm.

1. Install bun (same as above).
2. Clone with `git clone https://github.com/0xVector/mmo-rpg.git`, then `cd mmo-rpg/server`
3. Run `bun install` here - the only step that requires bun
4. Build with `npm run build`
5. Start the server with `npm run start:node`

## Documentation

See the typedoc [here](https://0xvector.me/mmo-rpg/server).