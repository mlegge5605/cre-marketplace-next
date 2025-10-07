import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { SchedulingService } from './scheduling.service';

@Controller('site-visits')
export class SchedulingController {
  constructor(private s:SchedulingService){}
  @Get(':jobId') list(@Param('jobId') jobId:string){ return this.s.list(jobId); }
  @Post() create(@Body() body:any){ return this.s.create(body); }
}
