import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UUID } from 'crypto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}
  async create(dto: CreateUserDto) {
    const { pageUrl, duration, ...userPayload } = dto;
    const userRow = await this.upsertUser(userPayload);
    const pageRow = await this.upsertPage(pageUrl);
    // Upsert by pageId && userId
    const userPagePayload = {
      userId: userRow.id,
      pageId: pageRow.id,
      duration: duration || 0,
    };
    return this.prisma.userPage.upsert({
      where: {
        unique_user_page: {
          userId: userRow.id,
          pageId: pageRow.id,
        },
      },
      create: userPagePayload,
      update: { ...userPagePayload, visitCount: { increment: 1 } },
    });
  }

  upsertUser(dto: any) {
    return this.prisma.user.upsert({
      where: { sessionId: dto.sessionId },
      create: dto,
      update: dto,
    });
  }

  upsertPage(pageUrl: string) {
    return this.prisma.page.upsert({
      where: { pageUrl },
      create: { pageUrl },
      update: { pageUrl },
    });
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(uuid: UUID) {
    return this.prisma.user.findUnique({ where: { uuid } });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
