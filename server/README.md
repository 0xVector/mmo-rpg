# mmo-rpg - Server

This is the client for the [mmo-rpg project](../) written in [NestJS](https://nestjs.com/). It is designed to be run with [Bun](https://bun.sh), but can also be run with NodeJS (some config tweaking will be required).

The server communicates with the clients by opening WebSocket connections. The NodeJS WebSocket library [ws](https://github.com/websockets/ws) is used, with options to switch to the native Bun implementation thanks to Nest's platform agnosticism.  
It implements its own keep-alive and timeout mechanism. The data is sent as JSON according to a pre-defined schema.

The server is for now naive - it presumes that clients only send correct data, so it is susceptible to cheating clients. However, it is not just a simple forwarder of messages between the clients - most of the game logic origins in the server and it is ready to have full data validation (and thus recognise cheating clients).

### Technical

The server is divided into several NestJS modules - core, server and updater. There game logic is implemented separately for proper decouplement of the responsibilities into the networking and game part.  
The three NestJS modules utilize the NestJS dependency injection framework - they are not instantiated directly,

#### Core

The core module implements the main WebSocket gateway and is responsible for receiving requests. The gateway is the controller in NestJS terms and it utilizes the corresponding core service to handle the processing of the requests. This service could be potentially completely removed, as for now it is just a redundant layer that passes the calls to the server service, but I'm keeping it there for the sake of proper project structure (each controller having its own service) with being open to change in the future.  
The endpoints in the controller are protected via class-validator, a library validating the request data based on the TypeScript types of the prescribed DTOs. The DTOs describe the shape of the data the gateway expects to receive (and throws exceptions for invalid data).

#### Server

The central part of the server module is the server service. This is the central service holding the server state and a part of the the game logic, with the rest directly in the implementation module. There should be some effort made in the future to separate the rest of the game logic from this service and make it purely concerned with the server state and internal logic.  
The server module also has its own events that are fired upon actions that require notifying the clients. This event-based system (utilizing the event framework from NestJS) is used as a layer of abstraction to separate the client-facing updater module, which is making the requests, from the server.

The server has multiple interesting parts. It handles the registration of new clients and keeps the connected clients and existing entities in its state.  

The server identifies all entities by their UUID. This is used globally, accross all clients, to provide a simple way to address every entity. These are usually automatically generated in the constructor, with the exception of players, which get their UUID assigned directly by the server. 
The server also associates clients with UUIDs. For now, it uses the **same UUID** to address **both** the client and its respective `Player` entity instance.  
It also implements a few low-level methods that the more higher-level game logic can utilize.  
It implements a simple keep-alive protocol: it sends `heartbeat` requests to clients and expects to receive heartbeat responses from them, keeping a track of the last time it received one from each client. Clients not responding in time are kicked.

The way it handles logic that takes place over some time is by a tick system. Specifically, every 200ms, it processes a "tick". This is a low-level abstraction providing some kind of "game turns" upon which the entities and the game logic can operate.

#### Updater

The updater module is a small module that entails the updater service, a service responsible for handling the server events and broadcasting the actual WebSocket requests to clients. Its primary purpose is to remove the responsibility of handling the network communication from the server service, instead allowing it to communicate via the more abstract and platform agnostic form of events.  
For now it still needs broadcast with a call back to the server service, as it is the only one with access to the WebSocket clients, but this should be adressed in the future, perhaps by having a separate service just for the handling of outbound requests and holding the WebSocket client state.

---

Overall, the three modules establish some structure with the aim of fulfilling the single-responsibility principle and providing a reasonable level of abstraction over the different parts of the codebase. There are some classes and modules burdened with too many responsibilities which should be split, and on the other hand, some that seem redundant, so it is open to more work on this structure in the future.

#### Implementation

The implementation of the game logic is not a NestJS module, and it's purposely kept as separated from NestJS as possible. It is meant to implements most of the game logic and provide a structure for the different objects in the game.  
Currently, the most important part are entities - an inheritance structure meant to properly represent the relationships between the "moving parts" in the game. With `Entity` being the base type, defined as anything identifiable having a location on the map, the live parts - players and slimes can be represented with clean relationships. In the future, this class is also supposed to represent a base type for non-living things, such as items and objects on the map (rocks).  
To establish some structure for the mobs in the game, another abstract class `Mob` defines the basic properties that mobs should fulfill. For now, its only inheritor is the concrete `Slime` class.  
The `Player` class holds the player state and its logic. Right now, it is a direct inheritor of `Entity`, but a richer structure seems reasonable here with future growth. The server doesn't make a difference between the individual players, as it automatically attaches one to each connected client.   
`Client` class is also implemented here, even though it may make more sense to decouple it from the implementation of the actual game and put it inside the server module as it becomes more server logic oriented.  
To allow for some interoperability with the server, the `Tickable` interface defines the constraints for anything that wants to consume the periodical calls from server ticks. All entities are by default tickable and ignore ticks, which can be overriden. Not only entities can be tickable, which is why this is an interface and not just a class method of `Entity`.

#### The protocol

There is a simple protocol defined for the communication over the WebSocket connection. It is based on JSON objects with a simple structre:
```json
{
    "event": "event-name",
    "data": {}
}
```
`data` is another JSON object that can contain arbitrary data (as defined by each event separately), with a single constraint - it has to provide an `id` field always matching the UUID of the player (and thus the client) **sending** the request:
```JSON
{
    "id": "uuid",
}
```
The shape of inbound requests from clients is defined by gateway DTOs and enforced by the class-validator library. NestJS automatically directs the requests to their proper handlers based on the `event` field, with the `data` field having to comply with the coresponding DTO.  
The outbound requests look similar, but their expected structure is exactly defined only on client. They utilize the same basic interface of `event` and `data` fields.

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