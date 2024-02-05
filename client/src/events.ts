export class JoinEvent {
  id: string;
}

export class LeaveEvent {}

abstract class PlayerEvent {
  id: string;
}

export class PlayerSpawnEvent extends PlayerEvent {
  x: number;
  y: number;
}

export class PlayerDespawnEvent extends PlayerEvent {}

export class PlayerMoveEvent extends PlayerEvent {
  x: number;
  y: number;
}
