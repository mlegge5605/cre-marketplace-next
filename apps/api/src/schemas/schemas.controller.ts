import { Body, Controller, Get, Post } from '@nestjs/common';
import { SchemasService } from './schemas.service';

@Controller('schemas')
export class SchemasController {
  constructor(private s: SchemasService) {}
  @Get() list(){ return this.s.list(); }
  @Post() save(@Body() body: any){
    return this.s.upsert(body.category, body.fields);
  }
}
