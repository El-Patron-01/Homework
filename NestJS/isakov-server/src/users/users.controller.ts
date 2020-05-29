import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { allUsers } from './consts';

@Controller('users')
export class UsersController {
  constructor() {}

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

  @Get('')
  getQuery (@Query() query) {
    const allUsers = [ { id: 32, name: '1'},{ id: 33, name: '2'}, { id: 34, name: '3'}]
    return allUsers.filter(el => el.id >= query.from && el.id <= query.to)
  }
}
