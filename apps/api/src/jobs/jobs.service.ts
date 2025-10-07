import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class JobsService {
  constructor(private prisma: PrismaService) {}
  list() { return this.prisma.job.findMany({ orderBy: { createdAt: 'desc' } }); }
  get(id: string) { return this.prisma.job.findUnique({ where: { id } }); }
  create(data: any) { return this.prisma.job.create({ data }); }
}
