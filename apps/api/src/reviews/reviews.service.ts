import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class ReviewsService {
  constructor(private prisma: PrismaService) {}
  create(data:any){ return this.prisma.review.create({ data }); }
  forUser(userId:string){ return this.prisma.review.findMany({ where: { toUserId: userId } }); }
}
