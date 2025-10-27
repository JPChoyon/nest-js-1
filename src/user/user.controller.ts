import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  getAllUsers() {
    return this.userService.getUsers();
  }
  @Get(':id')
  getOneUser(@Param('id') id: number) {
    return this.userService.getOneUser(Number(id));
  }
}
