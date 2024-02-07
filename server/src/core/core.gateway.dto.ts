import { IsBoolean, IsIn, IsNotEmpty, IsNumber, IsString } from 'class-validator';

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
    facing: "up" | "down" | "left" | "right";

    @IsBoolean()
    isRunning: boolean;
}