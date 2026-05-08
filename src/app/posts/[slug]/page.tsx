import { db } from '@/lib/db';

async function getBlogPost(slug: string) {
  const post = await db.post.findUnique({
    where: {
      slug: slug,
    },
    select: {
      title: true,
      content: true,
      createdAt: true,
    },
  });

  if (!post) {
    throw new Error('Post not found');
  }

  return post;
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const post = await getBlogPost(slug);

  return (
    <article className="p-4">
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <p className="mt-4">{post.content}</p>
      <div className="mt-2 text-gray-500">
        {post.createdAt ? (
          <>投稿日：{post.createdAt.toLocaleDateString()}</>
        ) : (
          <>投稿日：未定</>
        )}
      </div>
    </article>
  );
}
