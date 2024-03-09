import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ReportsService {
  constructor(private readonly prisma: PrismaService) {}

  async stats() {
    const data = {
      usersCount: 0,
      visitCount: 0,
    };
    const users = await this.prisma.user.count();
    const result = await this.prisma.userPage.aggregate({
      _sum: { visitCount: true },
    });

    if (result?._sum) data.visitCount = result._sum.visitCount;
    if (users) data.usersCount = users;
    return data;
  }

  findOne(id: number) {
    return `This action returns a #${id} report`;
  }

  async visitByPage() {
    const d = await this.prisma.userPage.groupBy({
      by: ['pageId'],
      _sum: { visitCount: true },
    });
    console.log('D=>', d);
    return d;
  }
}
