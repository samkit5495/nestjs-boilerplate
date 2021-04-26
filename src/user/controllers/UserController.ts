import { ApiController, Request, Response } from '@libs/core';
import { Controller, Get, Req, Res } from '@nestjs/common';
import { UserService } from '../services';
import { UserDetailTransformer } from '@app/transformer';

@Controller('users')
export class UserController extends ApiController {
  constructor(private users: UserService) {
    super();
  }

  @Get('/')
  async getAll(@Req() req: Request,
               @Res() res: Response,
  ): Promise<Response> {
    const user = await this.users.get();
    return res.success(user);
  }

  // @Get('/profile')
  // @WithAlias('auth.profile')
  // async getProfile(
  //   @Req() req: Request,
  //   @Res() res: Response,
  // ): Promise<Response> {
  //   const user = await this.users.get();
  //   return res.success(
  //     await this.transform(user, new UserDetailTransformer(), { req }),
  //   );
  // }
}
