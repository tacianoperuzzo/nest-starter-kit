import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto, UpdateUserDto } from './dtos/createUser.dto';
import { UserEntity } from './entities/user.entity';
import { UserCreateMapper } from './mappers/user-create.mapper';

export class UserService {
  private userCreateMapper: UserCreateMapper;

  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {
    this.userCreateMapper = new UserCreateMapper();
  }

  async createUser(userDto: CreateUserDto): Promise<UserEntity> {
    const user = this.userRepository.create(
      this.userCreateMapper.mapFrom(userDto),
    );
    return await this.userRepository.save(user);
  }

  async isUserExists(email: string): Promise<UserEntity | null> {
    return this.userRepository.findOne({
      where: {
        email: email.toLowerCase(),
      },
    });
  }

  async findOne(id: number) {
    return await this.userRepository.findOne({ where: { id: id } });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await this.userRepository.update(id, updateUserDto);
  }
}
