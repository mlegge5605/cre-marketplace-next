import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(private m:MessagesService){}
  @Get(':jobId') thread(@Param('jobId') jobId:string){ return this.m.thread(jobId); }
  @Post() send(@Body() body:any){ return this.m.send(body); }
}
