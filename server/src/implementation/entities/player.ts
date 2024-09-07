import { Creature } from "./creature";
import { EntityType } from "./entity";

/** Represents a player entity in the game
 * 
 * Player is any player character spawned in the game. The player can be controlled
 * by a connected client.
 *
 * @param id: A unique identifier (UUID) for the entity
 * @param name: The name of the player
 * @param x: The x-coordinate of the player's position
 * @param y: The y-coordinate of the player's position
 */
export class Player extends Creature {
  static readonly MAX_HP = 10;

  public name: string;

  constructor(id: string, name: string, x: number = 0, y: number = 0) {
    super(EntityType.PLAYER, id, x, y, Player.MAX_HP);
    this.name = name;
  }
}
