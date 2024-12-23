import { Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UUID } from 'crypto';
import { UsersService } from './users.service';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create() {
    return this.usersService.create();
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':uuid')
  findOne(@Param('uuid') uuid: UUID) {
    return this.usersService.findOne(uuid);
  }

  @Patch(':id')
  update(@Param('id') id: string) {
    return this.usersService.update(+id);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.usersService.remove(+id);
  // }
}
