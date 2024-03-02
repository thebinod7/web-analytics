import { Injectable } from '@nestjs/common';
import * as geoip from 'geoip-lite';
import * as moment from 'moment';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  logUserActivity(req, pageVisited: string, startTime: Date): void {
    const ip = req.clientIp;
    const country = geoip.lookup(ip)?.country;
    const timestamp = moment(startTime).format('YYYY-MM-DD HH:mm:ss');
    const duration = moment().diff(startTime, 'seconds');

    console.log('User Activity Logged:');
    console.log('IP:', ip);
    console.log('Country:', country);
    console.log('Timestamp:', timestamp);
    console.log('Page Visited:', pageVisited);
    console.log('Duration (seconds):', duration);
  }
}
