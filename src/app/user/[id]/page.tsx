import { notFound } from "next/navigation";

export default async function Profile({ params }: { params: { id: string } }) {
  const user = await params.id;

  if (!user) {
    notFound();
  }

  // ユーザが見つかったときの処理
  // ...
}
