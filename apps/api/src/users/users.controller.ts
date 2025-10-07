import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
@Controller('users') export class UsersController { constructor(private s:UsersService){}
  @Get() all(){ return this.s.findAll(); }
}
