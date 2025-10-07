import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class MessagesService {
  constructor(private prisma: PrismaService) {}
  send(data:any){ return this.prisma.message.create({ data }); }
  thread(jobId:string){ return this.prisma.message.findMany({ where: { jobId }, orderBy: { createdAt: 'asc' } }); }
}
