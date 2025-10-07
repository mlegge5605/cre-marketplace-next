import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class SchemasService {
  constructor(private prisma: PrismaService) {}
  list() { return this.prisma.categorySchema.findMany(); }
  upsert(category: string, fields: any) {
    return this.prisma.categorySchema.upsert({ where: { category }, update: { fields }, create: { category, fields } });
  }
}
