import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), PrismaModule, UsersModule],
})
export class AppModule {}
