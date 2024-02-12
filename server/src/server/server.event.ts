import { EntityType } from "implementation/entities/entity"

abstract class Event {
    id: string
}

export class EntitySpawnEvent extends Event {
    entity: EntityType
    x: number
    y: number
}

export class EntityDespawnEvent extends Event {}

export class EntityMoveEvent extends Event {
    x: number
    y: number
    speed: number
}

export class PlayerUpdateEvent extends Event {
    facing: "up" | "down" | "left" | "right"
    isRunning: boolean
    isAttacking: boolean
}