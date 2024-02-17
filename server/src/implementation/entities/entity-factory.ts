import { EntityType } from "./entity";
import { Slime } from "./mobs/slime";

/** Create a new entity of the given type */
export function createEntity(entityType: EntityType, x: number, y: number) {
  switch (entityType) {
    case EntityType.SLIME:
      return new Slime(x, y);
    default:
      throw new Error("Invalid entity type");
  }
}