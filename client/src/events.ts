abstract class Event {
  id: string;
}

export class HeartbeatEvent extends Event {}

export class JoinEvent extends Event{}

export class LeaveEvent extends Event {}

export class PlayerSpawnEvent extends Event {
  x: number;
  y: number;
}

export class PlayerDespawnEvent extends Event {}

export class PlayerMoveEvent extends Event {
  x: number;
  y: number;
}
