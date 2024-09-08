import { Direction } from "implementation/entities/creature";
import { EntityType } from "implementation/entities/entity";

/** An event emitted by the server */
abstract class Event {
  /** The UUID of the entity that the event is related to */
  id: string;
}

/** An event emitted when a new entity is spawned */
export class EntitySpawnEvent extends Event {
  entity: EntityType;
  x: number;
  y: number;
}

/** An event emitted when an entity is despawned */
export class EntityDespawnEvent extends Event {}

/** An event emitted whenever an entity moves */
export class EntityMoveEvent extends Event {
  x: number;
  y: number;
  time: number; // Time in seconds for the move to complete
}

/** An event emitted when an Entity updates its state */
export class EntityUpdateEvent extends Event {
  dir: Direction;
  isMoving: boolean;
  isDashing: boolean;
  hp: number;
}

/** An event emitted when an entity attacks */
export class EntityAttackEvent extends Event {}

/** An event emitted when an entity takes damage */
export class EntityDamageEvent extends Event {
  damage: number;
  sourceX: number;
  sourceY: number;
}
