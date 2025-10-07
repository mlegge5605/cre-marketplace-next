import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class BidsService {
  constructor(private prisma: PrismaService) {}
  list(jobId?:string){
    return this.prisma.bid.findMany({ where: jobId ? { jobId } : {}, orderBy: { createdAt: 'desc' } });
  }
  create(data:any){ return this.prisma.bid.create({ data }); }
}
