export class Post {
  id: number;
  title: string;
  slug: string;
  content: string | null;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
  authorId: number;
  deletedAt: Date | null;
}
