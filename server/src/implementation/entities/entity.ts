export enum EntityType {
  PLAYER = "player",
  SLIME = "slime"
}

export abstract class Entity {
  public id: string;
  public entityType: EntityType;
  public x: number;
  public y: number;

  constructor(id: string, entityType: EntityType, x: number, y: number) {
    this.id = id;
    this.entityType = entityType;
    this.x = x;
    this.y = y;
  }

  public moveTo(x: number, y: number): void {
    this.x = x;
    this.y = y;
  }

  public moveBy(x: number, y: number): void {
    this.moveTo(this.x + x, this.y + y);
  }
}
