import { CircleCollider, CollisionGroupManager, CollisionType } from "excalibur";
import { CustomEntity } from "../entity";

export class Attack extends CustomEntity {
  private static attackColisionGroup = CollisionGroupManager.create("attacks");

  constructor(x: number, y: number) {
    super("attack", {
      x,
      y,
      width: 16,
      height: 16,
      collider: new CircleCollider({ radius: 40 }),
      collisionType: CollisionType.Passive,
      collisionGroup: Attack.attackColisionGroup
    });
  }
}
