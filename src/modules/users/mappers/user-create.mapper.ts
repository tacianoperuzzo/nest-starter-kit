import { Mapper } from 'src/core/base/mapper';
import { CreateUserDto } from '../dtos/createUser.dto';
import { UserEntity } from '../entities/user.entity';
import { hash } from 'bcrypt';

export class UserCreateMapper extends Mapper<CreateUserDto, UserEntity> {
  public async mapFrom(data: CreateUserDto): Promise<UserEntity> {
    const user = new UserEntity();

    user.name = data.name;
    user.email = data.email;
    user.passwordHash = await hash(data.password, 10);

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
