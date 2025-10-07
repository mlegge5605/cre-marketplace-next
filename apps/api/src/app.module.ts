import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { UsersModule } from './users/users.module';
import { JobsModule } from './jobs/jobs.module';
import { BidsModule } from './bids/bids.module';
import { SchemasModule } from './schemas/schemas.module';
import { MatchingModule } from './matching/matching.module';
import { DiscoveryModule } from './discovery/discovery.module';
import { SchedulingModule } from './scheduling/scheduling.module';
import { ContractsModule } from './contracts/contracts.module';
import { PaymentsModule } from './payments/payments.module';
import { MessagesModule } from './messages/messages.module';
import { ReviewsModule } from './reviews/reviews.module';

@Module({
  imports: [
    UsersModule, JobsModule, BidsModule, SchemasModule, MatchingModule,
    DiscoveryModule, SchedulingModule, ContractsModule, PaymentsModule,
    MessagesModule, ReviewsModule
  ],
  providers: [PrismaService],
})
export class AppModule {}
