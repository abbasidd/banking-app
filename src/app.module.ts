import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { WalletsModule } from './wallets/wallets.module';
import { TransactionsModule } from './transactions/transactions.module';
import { MerchantsModule } from './merchants/merchants.module';
import { PaymentsModule } from './payments/payments.module';
import { ReviewsService } from './reviews/reviews.service';
import { ReviewsController } from './reviews/reviews.controller';
import { ReviewsModule } from './reviews/reviews.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SessionModule } from './session/session.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'your_username',
      password: 'your_password',
      database: 'your_database_name',
      // entities: [User], // Add other entities here
      synchronize: true,
    }), // Will automatically load ormconfig.json
    // TypeOrmModule.forFeature([User]), // Add other entities here
    UsersModule,
    WalletsModule,
    TransactionsModule,
    MerchantsModule,
    PaymentsModule,
    ReviewsModule,
    SessionModule,
  ],
  controllers: [AppController, ReviewsController],
  providers: [AppService, ReviewsService],
})
export class AppModule {}
