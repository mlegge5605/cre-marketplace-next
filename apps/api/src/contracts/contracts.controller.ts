import { Controller, Get, Param, Post } from '@nestjs/common';
import { ContractsService } from './contracts.service';

@Controller('contracts')
export class ContractsController {
  constructor(private c:ContractsService){}
  @Post('draft/:jobId') draft(@Param('jobId') jobId:string){ return this.c.draftFromJob(jobId); }
  @Post('sign/:id') sign(@Param('id') id:string){ return this.c.sign(id); }
  @Get(':id') get(){ return {}; }
}
