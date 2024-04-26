import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
// import { Wallet } from './wallet.entity';
// import { Transaction } from './transaction.entity';
// import { Review } from './review.entity';
import { Session } from '../session/session.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  UserID: number;

  @Column()
  Email: string;

  @Column()
  Password: string;

  @Column()
  FirstName: string;

  @Column()
  LastName: string;

  @Column()
  Phone: string;

  @Column()
  UserType: string;

  //   @OneToMany(() => Wallet, wallet => wallet.User)
  //   Wallets: Wallet[];

  //   @OneToMany(() => Transaction, transaction => transaction.User)
  //   Transactions: Transaction[];

  //   @OneToMany(() => Review, review => review.User)
  //   Reviews: Review[];

  @OneToMany(() => Session, (session) => session.User)
  Sessions: Session[];
}
