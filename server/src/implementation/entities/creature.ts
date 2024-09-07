import { LiveEntity } from "./live-entity";

/** Represent an abstract creature in the game
 * 
 * Creature is a LiveEntity that has direction and other state properties.
 * 
 * @param direction The direction the creature is facing in
 * @param isMoving Whether the creature is moving
 */
export abstract class Creature extends LiveEntity {
    /** The direction the Creature is facing in */
    public dir: Direction = "down";
    /** Whether the Creature is moving */
    public isMoving: boolean = false;
    /** Whether the Creature is dashing */
    public isDashing: boolean = false;
}

export type Direction = "up" | "down" | "left" | "right";