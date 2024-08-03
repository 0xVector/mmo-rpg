# mmo-rpg

#### A basic browser-based multiplayer game with client and server written in TypeScript.

*Access the pre-built web client at **[https://0xvector.me/mmo-rpg](https://0xvector.me/mmo-rpg)** to try out the game without building it yourself!*

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

1. [Install bun](https://bun.sh/) on your machine (also required for server) with `npm install -g bun`.
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
- ~~make slimes follow players~~ & deal damage
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
- testing! (unit, possibly e2e - both client & server)
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

The client is written in TypeScript with [Excalibur.js](https://excaliburjs.com/). It comes with a simple HTTP server that can be run with Bun or NodeJS to server the client page. It uses the native browser WebSocket implementation.

### Technical

The client utilizes the common ExcaliburJS project structure. The main entrypoint is the `game.ts` file, where the engine and all dependencies are instantiated.

#### Actors

Actors are all the moving parts in ExcaliburJS. Here, they are in an inheritance structure resembling that of [server](./server/), but with its own important distinctions.

There are the entities, with the `CustomEntity` base type, which defines the minimal properties of every entity (the main part is having an UUID, which is addressed as `netId` in client to distinguish it from the internal ExcaliburJS actor `id`). The most notable difference from the server implementation is that there are two different player classes. `Player` is the base player and by default represents other players on the map. `PlayerOwn` is the own, controllable player that inherits from `Player`.

The second kind of actors are items, which is just a basic type for objects on the map, such as rocks. This is an area of future interest.

#### Scenes

Only a single `World` scene is used.

#### GameManager

`GameManager` is the manager class responsible for most of the communication, as well as game logic. It seems to be responsible for too many parts of the client logic and should be separated in the future into a communication and pure game part.  
One of its main responsibilities is providing handlers for WebSocket request events. These events are a sort of a merge between the server request DTOs and internal events. They define the shape for inbound requests from the server, but are also used internally.  
Its second responsibility is holding the game client state and providing some low-level methods allowing the parts with the higher level game logic to make changes to the state.

#### WebSocket manager
`WSManager` is a class responsible for just the lowest-level communication on the WebSocket layer. It holds the `WebSocket` instance of the underlying browser WebSocket implementation representing the client's connection to the server in its state, processes incoming requests and provides a way to register handlers for them.

## Documentation

See the typedoc [here](https://0xvector.me/mmo-rpg/client).

## Libraries

See the respective `package.json` for now.

## Acknowledgements

I used sprites from the free asset pack [Mystic woods](https://game-endeavor.itch.io/mystic-woods) (thanks!).