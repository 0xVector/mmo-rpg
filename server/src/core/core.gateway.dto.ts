import { IsBoolean, IsIn, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Direction } from 'implementation/entities/creature';

class BaseDto {
    @IsString()
    @IsNotEmpty()
    id: string;
}

export class JoinDto {
    @IsString()
    @IsNotEmpty()
    playerName: string;
}

export class JoinResponseDto extends BaseDto {}

export class LeaveDto extends BaseDto {}

export class HeartbeatDto extends BaseDto {}

export class SpawnDto extends BaseDto {}

export class PlayerMoveDto extends BaseDto {
    @IsNumber()
    x: number;

    @IsNumber()
    y: number;
}

export class PlayerUpdateDto extends BaseDto {
    @IsIn(["up", "down", "left", "right"])
    dir: Direction;

    @IsBoolean()
    isMoving: boolean;

    @IsBoolean()
    isDashing: boolean;
}

export class PlayerAttackDto extends BaseDto {}

export class HitDto extends BaseDto {
    @IsString()
    @IsNotEmpty()
    targetId: string;
}