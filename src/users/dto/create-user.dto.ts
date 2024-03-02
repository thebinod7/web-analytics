import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

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
  @ApiProperty({ example: 'USA', description: 'Visitor country' })
  country?: string;

  @IsString()
  @ApiProperty({ example: '127.0.0.1', description: 'Visitor IP address' })
  ipAddress?: string;

  @IsString()
  @ApiProperty({ example: 'Chrome', description: 'Visitor browser' })
  userAgent?: string;

  @IsString()
  @ApiProperty({ example: 'Social media', description: 'Visitor source' })
  visitSource?: string;

  @IsNumber()
  @ApiProperty({ example: 1, description: 'Number of visits' })
  visitCount?: number;

  @IsNumber()
  @ApiProperty({ example: 1000, description: 'Duration of the visit' })
  duration?: number;
}
