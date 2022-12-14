import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmConfig } from './config/typeorm.config';
import { User } from './user.entity';

@Module({
  imports: [
      TypeOrmModule.forRoot(typeOrmConfig),
      TypeOrmModule.forFeature([User])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
