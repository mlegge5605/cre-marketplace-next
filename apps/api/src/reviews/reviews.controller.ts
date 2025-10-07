import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ReviewsService } from './reviews.service';

@Controller('reviews')
export class ReviewsController {
  constructor(private r:ReviewsService){}
  @Post() create(@Body() body:any){ return this.r.create(body); }
  @Get(':userId') list(@Param('userId') userId:string){ return this.r.forUser(userId); }
}
