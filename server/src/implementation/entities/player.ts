import { Entity, EntityType } from "./entity";

/** Represents a player entity in the game
 * 
 * Player is any player character spawned in the game. The player can be controlled
 * by a connected client.
 *
 * @param id: A unique identifier (UUID) for the entity
 * @param name: The name of the player
 * @param x: The x-coordinate of the player's position
 * @param y: The y-coordinate of the player's position
 * @param facing: The direction the player is facing
 * @param isRunning: Whether the player is running
 * @param isAttacking: Whether the player is attacking
 */
export class Player extends Entity {
  public name: string;
  public facing: "up" | "down" | "left" | "right" = "down";
  public isRunning: boolean = false;
  public isAttacking: boolean = false;

  constructor(id: string, name: string, x: number = 0, y: number = 0) {
    super(EntityType.PLAYER, id, x, y);
    this.name = name;
  }
}
