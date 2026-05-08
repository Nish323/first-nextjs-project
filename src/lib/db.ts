const posts = [
  {
    slug: "first-post",
    title: "最初の記事",
    content: "これは最初の記事の内容です。",
    createdAt: new Date("2026-05-01"),
  },
  {
    slug: "nextjs-practice",
    title: "Next.jsの練習",
    content: "動的ルーティングとデータ取得の練習です。",
    createdAt: new Date("2026-05-08"),
  },
];

export const db = {
  post: {
    findUnique: async ({
      where,
      select,
    }: {
      where: { slug: string };
      select?: {
        title?: boolean;
        content?: boolean;
        createdAt?: boolean;
      };
    }) => {
      const post = posts.find((post) => post.slug === where.slug);

      if (!post) {
        return null;
      }

      
      const result: {
        title?: string;
        content?: string;
        createdAt?: Date;
      } = {};

      if (select?.title) {
        result.title = post.title;
      }
      if (select?.content) {
        result.content = post.content;
      }
      if (select?.createdAt) {
        result.createdAt = post.createdAt;
      }

      return result;
    },
  },
};