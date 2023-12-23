import { Controller, Post, Body, Res } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly firebaseAuthService: UsersService) {}

    @Post('register')
    async register(@Res() res: any, @Body() createUserDto: { username: string, email: string; password: string }) {
      const response = await this.firebaseAuthService.createUser(createUserDto.username, createUserDto.email, createUserDto.password);
      return res.status(response.status).send(response.body)
    }
}
