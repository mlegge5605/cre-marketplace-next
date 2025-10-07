import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class ContractsService {
  constructor(private prisma: PrismaService) {}
  async draftFromJob(jobId:string){
    const job = await this.prisma.job.findUnique({ where: { id: jobId } });
    if (!job) throw new Error('Job not found');
    return this.prisma.contract.create({ data: { jobId, status:'DRAFT', clauses: JSON.stringify([{ title:'Payment Terms', body:'Net 15 via escrow release' }]) } });
  }
  sign(id:string){ return this.prisma.contract.update({ where: { id }, data: { status: 'SIGNED', signedAt: new Date() } }); }
}
