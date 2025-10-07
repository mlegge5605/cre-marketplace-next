import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { BidsService } from './bids.service';

@Controller('bids')
export class BidsController {
  constructor(private b:BidsService){}
  @Get() list(@Query('jobId') jobId?:string){ return this.b.list(jobId); }
  @Post() create(@Body() body:any){ return this.b.create({ jobId: body.jobId, providerId: body.providerId, amount: body.amount }); }
}
