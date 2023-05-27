import {
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { IsPublic } from './decorators/is-public.decorator';
import { RefreshJwtGuard } from './guards/jwt-refresh.guard';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { AuthRequest } from './models/AuthRequest';

@IsPublic()
@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @HttpCode(HttpStatus.OK)
  @Post('login')
  async login(@Request() req: AuthRequest) {
    return await this.authService.login(req.user);
  }

  @ApiBearerAuth()
  @UseGuards(RefreshJwtGuard)
  @IsPublic()
  @Post('refresh')
  async refreshToken(@Request() req: AuthRequest) {
    return this.authService.refreshToken(req.user);
  }
}
