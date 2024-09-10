import { EntityType } from "./entity";
import { Player } from "./player/player";
import { Slime } from "./slime/slime";
import { SlimePurple } from "./slime/slime-purple";

export function createEntity(entityType: EntityType, id: string) {
    switch (entityType) {
      case EntityType.PLAYER:
        return new Player(id);
      case EntityType.SLIME:
        return new Slime(id);
      case EntityType.SLIME_PURPLE:
        return new SlimePurple(id);
      default:
        throw new Error(`Entity type ${entityType} not found`);
    }
  }