import { Entity, EntityType } from "./entity";

export class Player extends Entity {
  public name: string;
  public facing: "up" | "down" | "left" | "right" = "down";
  public isRunning: boolean = false;

  constructor(id: string, name: string, x: number = 0, y: number = 0) {
    super(id, EntityType.PLAYER, x, y);
    this.name = name;
  }
}
