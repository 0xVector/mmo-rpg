import { Direction, EntityType } from "./actors/entities/entity";

abstract class Event {
  id: string;
}

abstract class EntityEvent extends Event {
  entity: EntityType;
}

export class HeartbeatEvent extends Event {}

export class JoinEvent extends Event{}

export class LeaveEvent extends Event {}

export class EntitySpawnEvent extends EntityEvent {
  x: number;
  y: number;
}

export class EntityDespawnEvent extends Event {}

export class EntityMoveEvent extends Event {
  x: number;
  y: number;
  time: number;
}

export class EntityUpdateEvent extends Event {
  dir: Direction;
  isMoving: boolean;
  isDashing: boolean;
  hp: number;
  score: number;
}

export class EntityAttackEvent extends Event {}

export class EntityDamageEvent extends Event {
  damage: number;
  sourceX: number;
  sourceY: number;
}