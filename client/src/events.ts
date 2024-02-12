import { EntityType } from "./actors/entities/entity";

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

export class EntityDespawnEvent extends EntityEvent {}

export class EntityMoveEvent extends EntityEvent {
  x: number;
  y: number;
  speed: number;
}

export class PlayerUpdateEvent extends Event {
  facing: "up" | "down" | "left" | "right";
  isRunning: boolean;
  isAttacking: boolean;
}