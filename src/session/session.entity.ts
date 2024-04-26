import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../users/user.entity';

@Entity()
export class Session {
  @PrimaryGeneratedColumn()
  SessionID: number;

  @Column()
  Token: string;

  @Column()
  ExpiryTime: Date;

  @ManyToOne(() => User, (user) => user.Sessions)
  User: User;
}
