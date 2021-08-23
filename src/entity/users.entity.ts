import { IsNotEmpty } from 'class-validator';
import { Entity, PrimaryGeneratedColumn, Column, Unique, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { User } from '@src/interfaces/users.interface';

@Entity()
@Unique(['email'])
export class UserEntity implements User {
  @PrimaryGeneratedColumn()
  id: number;

  // mysql 5.6 의  key max size 는 767 임
  // varchar * utf8mb4 가 넘지 않도록 주의
  // INNODB utf8 VARCHAR(255)
  // INNODB utf8mb4 VARCHAR(191)
  @Column({ length: 100 })
  @IsNotEmpty()
  email: string;

  @Column()
  @IsNotEmpty()
  password: string;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;
}
