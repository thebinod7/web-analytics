import { Injectable } from '@nestjs/common';
import { UUID } from 'crypto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}
  async create() {}

  upsertUser() {}

  upsertPage() {}

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(uuid: UUID) {
    return this.prisma.user.findUnique({ where: { uuid } });
  }

  update(id: number) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
