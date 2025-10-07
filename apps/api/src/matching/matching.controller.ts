import { Controller, Get, Param } from '@nestjs/common';
import { MatchingService } from './matching.service';

@Controller('jobs/:id/recommendations')
export class MatchingController {
  constructor(private m: MatchingService){}
  @Get() list(@Param('id') id:string){ return this.m.recommendations(id); }
}
