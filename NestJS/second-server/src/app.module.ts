import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MulterModule } from '@nestjs/platform-express';
import { PhonesModule } from './phones/phones.module';
import { MulterExtendedModule } from 'nestjs-multer-extended';
import { ConfigService } from 'nestjs-config';


@Module({
  imports: [PhonesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
