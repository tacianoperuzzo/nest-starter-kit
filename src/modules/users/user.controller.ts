import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CurrentUser } from 'src/core/auth/decorators/current-user.decorator';
import { IsPublic } from 'src/core/auth/decorators/is-public.decorator';
import { CreateUserDto } from './dtos/createUser.dto';
import { UserEntity } from './entities/user.entity';
import { UserService } from './user.service';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @IsPublic()
  @Post('register')
  async registerUser(@Body() createUserDto: CreateUserDto) {
    if (await this.userService.isUserExists(createUserDto.email)) {
      throw new HttpException(
        'User with this email already exists',
        HttpStatus.BAD_REQUEST,
      );
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { passwordHash, ...user } = await this.userService.createUser(
      createUserDto,
    );
    return user;
  }

  @ApiBearerAuth()
  @Get('find/:id')
  findOne(@Param('id') id: number) {
    return this.userService.findOne(id);
  }

  @Get('me')
  getMe(@CurrentUser() user: UserEntity) {
    return user;
  }

  @ApiBearerAuth()
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }
}
