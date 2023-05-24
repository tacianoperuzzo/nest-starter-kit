import { Repository } from '../base/repository';
import { UserEntity } from '../../modules/users/entities/user.entity';

export abstract class UserRepository extends Repository<UserEntity> {}
