import { Mapper } from 'src/core/base/mapper';
import { CreateUserDto } from '../dtos/createUser.dto';
import { UserEntity } from '../entities/user.entity';

export class UserCreateMapper extends Mapper<CreateUserDto, UserEntity> {
  public mapFrom(data: CreateUserDto): UserEntity {
    const user = new UserEntity();

    user.name = data.name;
    user.email = data.email;

    return user;
  }

  public mapTo(data: UserEntity): CreateUserDto {
    const user = new CreateUserDto();

    user.id = data.id;
    user.name = data.name;
    user.email = data.email;

    return user;
  }
}
