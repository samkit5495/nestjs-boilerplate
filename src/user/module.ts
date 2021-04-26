import { Module } from '@nestjs/common';
import { UserController } from './controllers';
import { UserService } from './services';
import { GreetUser } from './commands';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '@app/user/models';

@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
  controllers: [UserController],
  providers: [
    UserService,
    GreetUser,
  ],
})
export class UserModule {
}
