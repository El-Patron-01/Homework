import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { allUsers } from './consts';
import { UserService } from './users.service';
import * as mongoose from 'mongoose'
import { ObjectId } from 'mongoose';

@Controller('users')
export class UsersController {
  constructor(
    private UserService: UserService //@Inject('UserService') private UserService: UserService
    ) {}

  @Get(':id')
  getUser (@Param('id') id) {
    id = parseInt(id);
    if (id >= 32 && id <= 34) {
        return allUsers.find(el => el.id === id)
    } else {
        throw new Error('Id should be greater or equal than 32 and less or equal than 34');
    }
  }

  @Post('add')
  putBody (@Body() body: any) {
    allUsers.push(body)
    return allUsers
  }

  @Post('createuser')
  async createUser (@Body() user: any) {
    return this.UserService.createUser(user)
  }

  @Get('find/:id')
  async findUserAndCars (@Param('id') id) {
    id = new mongoose.Types.ObjectId(id)
    id = {_id: id}
    return this.UserService.findUserAndCars(id)
  }

  @Get('')
  getQuery (@Query() query) {
    return allUsers.filter(el => el.id >= query.from && el.id <= query.to)
  }
}
