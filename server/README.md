# mmo-rpg - Server

This is the client for the [mmo-rpg project](../) written in [NestJS](https://nestjs.com/). It is designed to be run with [Bun](https://bun.sh), but can also be run with NodeJS (some config tweaking will be required).

The server is for now naive - it presumes that clients only send correct data, so it is susceptible to cheating clients. However, it is not just a simple forwarder of messages between the clients - most of the game logic origins in the server and it is ready to have full data validation (and thus recognise cheating clients).

## Installation

1. [Install bun](https://bun.sh/) on your machine (the same as for client, no need to install twice if using the same machine for both client and server).
2. Run `bun install --production` in `./server` (this directory)
3. Build with `bun run start:prod`

The server is now running at `localhost:3000`.

## Documentation

See the typedoc [here]() (coming soon).