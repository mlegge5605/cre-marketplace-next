import { Body, Controller, Post } from '@nestjs/common';
import { PaymentsService } from './payments.service';

@Controller('payments')
export class PaymentsController {
  constructor(private p:PaymentsService){}
  @Post('fund') fund(@Body() body:any){ return this.p.fund(body.jobId, body.amount); }
  @Post('release') release(@Body() body:any){ return this.p.release(body.jobId, body.amount); }
}
