import { NextResponse } from "next/server";

export function middleware(request: any) {
  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    const token = request.cookies.get("token");

    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
	matcher: [
		//単一のパス
		'/login',

		//特定のパス以下すべて
		'/dashboard/:path*',
		'/admin/:path*',

		//複数のパスを配列で指定
		['/profile', '/settings' ,'/account'],

		//除外パターン（APIルートや静的ファイルの場合は発火しない）
		'/((?!api|_next/static|_next/image|favicon.ico).*)',

		//ルートパスのみ
		'/',
	],
};