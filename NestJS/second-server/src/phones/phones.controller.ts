import { Controller, Param, Get, Inject, Post, Body, UseInterceptors, UploadedFile, Res, Query } from "@nestjs/common";
import { PhonesService } from "./phones.service";
import { FileInterceptor } from '@nestjs/platform-express';
import * as fs from 'fs';
import { PhonesSchema } from "./schema/phones.schema";
import { async } from "rxjs/internal/scheduler/async";
import { Response } from 'express';
import * as util from 'util';


@Controller('phones')
export class PhonesController {
  constructor(
    private PhonesService: PhonesService
    ) {}


  @UseInterceptors(FileInterceptor('file', {
    dest: 'src/phone-images/'
  }))
  @Post('upload')
  async uploadFile(@Body() data: {data: string}, @UploadedFile() file: any) {
    const path = `${file.destination}${file.originalname}`
    console.log(file);
    const rstream = fs.createReadStream(file.path);
    const wstream = fs.createWriteStream(path);
    rstream.pipe(wstream);
    const phone: PhonesSchema = JSON.parse(data.data);
    phone.imgPath = path.replace(/src\//, '');
    return this.PhonesService.createPhones(phone)
  }
  
  @Post('createphone')
  async createPhones (@Body() phone: PhonesSchema) {
    return this.PhonesService.createPhones(phone)
  }

  @Get('getimage')
  async getFile (@Query() path: {imgPath:string}, @Res() res: Response): Promise<any> { 
    res.sendFile(path.imgPath, {root: 'src'}); 
  }
}
