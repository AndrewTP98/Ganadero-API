import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { response } from 'express';
import { request } from 'http';
import { LoginAuthDto } from 'src/dto/login-auth.dto';
import { RegisterAuthDto } from 'src/dto/register-auth.dto';
import { AuthService } from 'src/service/auth/auth.service';
import { JwtAuthGuard } from 'src/service/auth/jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  register(@Body() registerDto: RegisterAuthDto) {
    return this.authService.register(registerDto);
  }

  @Post('login')
  login(@Body() loginDto: LoginAuthDto) {
    return this.authService.login(loginDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('prueba')
  async mostrar(@Req() response) {
    console.log(await response)
    return 'todo ok';
  }
}
