import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { JobsService } from './jobs.service';

@Controller('jobs')
export class JobsController {
  constructor(private s: JobsService) {}
  @Get() list(){ return this.s.list(); }
  @Get(':id') get(@Param('id') id:string){ return this.s.get(id); }
  @Post() create(@Body() body:any){ return this.s.create({ title: body.title, category: body.category, status: 'OPEN', budgetMin: body.budgetMin, budgetMax: body.budgetMax, city: 'Toronto', dynamicFields: body.dynamicFields || {} }); }
}
