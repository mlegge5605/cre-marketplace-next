import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PaymentsService {
  constructor(private prisma: PrismaService) {}
  async fund(jobId:string, amount:number){
    return this.prisma.transaction.create({ data: { jobId, type: 'ESCROW', amount, status: 'PENDING' } });
  }
  async release(jobId:string, amount:number){
    return this.prisma.transaction.create({ data: { jobId, type: 'RELEASE', amount, status: 'SUCCEEDED' } });
  }
}
