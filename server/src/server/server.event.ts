abstract class Event {
    id: string
}

export class PlayerSpawnEvent extends Event {
    x: number
    y: number
}

export class PlayerDespawnEvent extends Event {}

export class PlayerMoveEvent extends Event {
    x: number
    y: number
}

export class PlayerUpdateEvent extends Event {
    facing: "up" | "down" | "left" | "right"
    isRunning: boolean
}