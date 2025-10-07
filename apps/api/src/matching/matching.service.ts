import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class MatchingService {
  constructor(private prisma: PrismaService) {}
  async recommendations(jobId: string){
    const job = await this.prisma.job.findUnique({ where: { id: jobId } });
    if (!job) return [];
    const providers = await this.prisma.user.findMany({ where: { role: 'SERVICE_PROVIDER' }, take: 10 });
    return providers.map(p => ({ id: p.id, name: p.name ?? p.email, score: Math.round(Math.random()*100)/100 }))
      .sort((a,b)=>b.score-a.score);
  }
}
