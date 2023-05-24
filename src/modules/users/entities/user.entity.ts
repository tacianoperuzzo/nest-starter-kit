import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  public name: string;

  @Column({
    name: 'password',
  })
  passwordHash: string;

  @Column()
  public email: string;
}
