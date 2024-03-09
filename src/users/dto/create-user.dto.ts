import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @ApiProperty({ example: '123', description: 'Unique identifier of the user' })
  sessionId: string;

  @IsString()
  @ApiProperty({
    example: 'https://www.google.com',
    description: 'The page URL',
  })
  pageUrl: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ example: 'USA', description: 'Visitor country' })
  country?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ example: '127.0.0.1', description: 'Visitor IP address' })
  ipAddress?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ example: 'Chrome', description: 'Visitor browser' })
  userAgent?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ example: 'Social media', description: 'Visitor source' })
  visitSource?: string;

  @IsNumber()
  @IsOptional()
  @ApiProperty({ example: 1000, description: 'Duration of the visit' })
  duration?: number;
}
