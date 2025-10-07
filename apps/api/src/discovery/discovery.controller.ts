import { Controller, Get, Param } from '@nestjs/common';
import { DiscoveryService } from './discovery.service';
import { PrismaService } from '../prisma.service';

@Controller('jobs/:id/invite-external')
export class DiscoveryController {
  constructor(private d:DiscoveryService, private prisma:PrismaService){}
  @Get()
  async list(@Param('id') id:string){
    const job = await this.prisma.job.findUnique({ where: { id } });
    if (!job) return [];
    const suggestions = this.d.findExternal(job.category, job.city||'Toronto');
    return suggestions.map(s => ({ ...s, emailDraft: this.d.buildInviteEmail(job, s.company) }));
  }
}
