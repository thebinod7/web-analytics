import { Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('App')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('analytics')
  getAnalytics(@Req() req): string {
    const startTime = new Date();
    // Simulate page visited
    const pageVisited = 'Home';
    this.appService.logUserActivity(req, pageVisited, startTime);
    return 'Hello World!';
  }
}
