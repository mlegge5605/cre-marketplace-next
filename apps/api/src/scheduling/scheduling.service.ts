import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class SchedulingService {
  constructor(private prisma: PrismaService) {}
  create(ev:any){ return this.prisma.calendarEvent.create({ data: ev }); }
  list(jobId:string){ return this.prisma.calendarEvent.findMany({ where: { jobId } }); }
}
