import { EventEmitter2 } from "@nestjs/event-emitter";
import { Tickable } from "implementation/tickable";
import { EntityMoveEvent } from "server/server.event";
import { ServerService } from "server/server.service";

export enum EntityType {
  PLAYER = "player",
  SLIME = "slime",
  SPAWNER = "spawner"
}

/** Represents an entity in the game
 * 
 * An entity is the most basic server-side game object.
 * It represents any object that has an id, type and coordinates.
 */
export abstract class Entity implements Tickable {
  /** The unique identifier (UUID) for the entity */
  public id: string;
  public entityType: EntityType;
  public x: number;
  public y: number;
  /** Whether the entity is hidden from clients */
  public hidden: boolean;

  /**
   * Create a new entity
   * @param id The unique identifier (UUID) for the entity
   * @param entityType The type of entity
   * @param x The x-coordinate of the entity
   * @param y The y-coordinate of the entity
   */
  constructor(id: string, entityType: EntityType, x: number, y: number) {
    this.id = id;
    this.entityType = entityType;
    this.x = x;
    this.y = y;
    this.hidden = false;
  }

  /**
   * The tick method is called every game tick by the server
   * 
   * Does nothing by default, but can be overridden by subclasses
   * @param tick The current game tick
   * @param server A reference to the server
   * @param emitter A reference to the event emitter
   */
  public tick(tick: number, server: ServerService, emitter: EventEmitter2): void {}

  /**
   * Instantly move the entity to a new position
   * @param x The new x-coordinate
   * @param y The new y-coordinate
   * @returns An event representing the move
   */
  public moveTo(x: number, y: number): EntityMoveEvent {
    this.x = x;
    this.y = y;
    return { id: this.id, x, y, speed: 0 };
  }
}
