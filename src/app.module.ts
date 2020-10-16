import { AuthModule } from './auth/auth.module';
import { UserModule } from './users/user.module';
import { UserController } from './users/user.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';

const mongoUri =
  'mongodb+srv://devhouse:devhouse@devhouseapicluster.ic5wv.mongodb.net/tasks?retryWrites=true&w=majority';
@Module({
  imports: [
    AuthModule,
    UserModule,
    MongooseModule.forRoot(mongoUri, { useFindAndModify: false }),
    TasksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
