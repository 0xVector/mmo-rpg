# mmo-rpg

#### A basic browser-based multiplayer game with client and server written in TypeScript.

*Click [**here**]((https://0xvector.me/mmo-rpg)) to access the pre-built web client!*

## Features

The server communicates with clients by establishing WebSocket connections.

The clients automatically joins the game after interacting with the game screen. Inactive clients (eg. closed browser) are kicked. Each new instance (eg. browser tab) established a new connection and is considered as a new client.

### Gameplay
For now, you can run around the map and kill the slimes spawning. PvP is not yet implemented.

### Controlls
- use `WASD` to move around the map
- press `<space>` to attack

## Installation

### Client

1. [Install bun](https://bun.sh/) on your machine (also required for server)
2. Clone with `git clone https://github.com/0xVector/mmo-rpg.git`, then `cd mmo-rpg`
3. Run `bun install --production` here
4. Build the client with `bun run build`
5. Serve the client with `bun run client`

The client is now running at [`http://localhost:8080/index.html`](http://localhost:8080/index.html).

You can also try the [pre-built client](https://0xvector.me/mmo-rpg) served by github pages.

### Server

See the [respective guide](./server/README.md).

## Future plans

### Short-term todo
- slime death animation
- player hp
- make slimes follow players & deal damage
- PvP
- redo some parts of attacking (player state sync feels especially fragile)
- knockback
- make attack animation less weird
- document the code better (so the generated docs are not so empty)
- deploy the static client to github pages

### Features 
- more mobs
- attacking
- map generation
- attacking
- health
- playernames
- configurable settings (port etc.)
- draw own sprites

### Technical

- split server and client to separate repositories
- save server state
- migrate to the native WebSocket implementation of bun (better performance)
- lag mitigation (client-side prediction etc.)
- server side validation of **all** data (anticheat)
- better OOP structure (both client & server)
    - richer entity inheritance etc.
    - split up server service into game logic and server logic
    - split up game manager in client

# Server

See [server](./server/).

# Client

The client is written in TypeScript with [Excalibur.js](https://excaliburjs.com/). It comes with a simple HTTP server that can be run with Bun or NodeJS to server the client page.

## Documentation

See the typedoc [here](https://0xvector.me/mmo-rpg/client).

## Libraries

See the respective `package.json` for now.

## Acknowledgements

I used sprites from the free asset pack [Mystic woods](https://game-endeavor.itch.io/mystic-woods) (thanks!).