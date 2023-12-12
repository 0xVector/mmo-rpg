import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

abstract class BaseMessageDto {
    @IsString()
    @IsNotEmpty()
    id: string;
}

abstract class BaseMessageResponseDto {
    @IsString()
    @IsNotEmpty()
    id: string;
}

export class JoinDto {
    @IsString()
    @IsNotEmpty()
    playerName: string;
}

export class JoinResponseDto extends BaseMessageResponseDto {
}

export class HeartbeatDto extends BaseMessageDto {
}

export class PlayerUpdateDto extends BaseMessageDto {
    @IsNumber()
    x: number;

    @IsNumber()
    y: number;
}