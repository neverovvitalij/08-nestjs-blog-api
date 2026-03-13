import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreatePostDto } from 'src/posts/dto/create-post.dto';
import { Post } from 'src/posts/entities/post.entity';
import { slugify } from 'src/utils/slugify';
import { Prisma } from '@prisma/client';

@Injectable()
export class PostsService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(dto: CreatePostDto): Promise<Post> {
    const slug = slugify(dto.title);
    return this.prismaService.post.create({ data: { ...dto, slug } });
  }

  async getAll(): Promise<Post[]> {
    return this.prismaService.post.findMany();
  }

  async findOne(id: number): Promise<Post | null> {
    return this.prismaService.post.findUnique({ where: { id } });
  }

  async update(id: number, dto: Partial<CreatePostDto>): Promise<Post> {
    const data: Prisma.PostUpdateInput = { ...dto };

    if (dto.title) {
      data.slug = slugify(dto.title);
    }

    return this.prismaService.post.update({
      where: { id },
      data,
    });
  }

  async delete(id: number): Promise<Post> {
    return this.prismaService.post.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  }
}
