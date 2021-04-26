import { Injectable, Inject } from '@nestjs/common';
import { ListensTo } from '@squareboat/nest-events';
import { UserSignedUp } from '../events/UserSignedUp';
import { User } from '../models';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserService {

  constructor(
    @InjectModel(User.name)  private readonly userModel: Model<User>
  ) {}

  async get(): Promise<Record<string, any>> {
    return this.userModel.find({});
  }

  getByToken(bearer: any): any {
    // throw new Error('Method not implemented.');
  }

  @ListensTo('USER_SIGNED_UP')
  userSignedUp(event: UserSignedUp): void {
    console.log('EVENT RECEIVED ===>', event);
    // add your logic here
    return;
  }
}
