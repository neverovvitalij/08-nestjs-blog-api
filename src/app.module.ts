import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [ConfigModule.forRoot(), PrismaModule, UsersModule, PostsModule],
})
export class AppModule {}
