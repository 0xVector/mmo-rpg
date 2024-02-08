import { Actor, ActorArgs } from "excalibur";
import { Spawnable } from "./interfaces/spawnable";

export enum EntityType {
  PLAYER = "player",
  SLIME = "slime"
}

export abstract class CustomEntity extends Actor implements Spawnable {
  public id: string;
  public spawned: boolean = false;

  constructor(id: string, config?: ActorArgs) {
    super(config);
    this.id = id;
  }

  public move(x: number, y: number): void {
    this.pos.x = x;
    this.pos.y = y;
  }

  public despawn(): void {
    this.kill();
  }

  public spawn(x: number, y: number): void {
    this.pos.x = x;
    this.pos.y = y;
    this.spawned = true;
  }
}
