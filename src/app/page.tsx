export default function Home() {
  return (
    <>
     {/* buttonとテキストのスタイルをtailwindcssで指定 */}
      <div className="py-5">
        <button className="py-2 px-4 bg-blue-500 text-white">
          ボタン
        </button>
      </div>

      {/* 文字色 */}
      <div className="py-5">
        <p className="text-gray-500">グレーの文字</p>
        <p className="text-blue-500">青の文字</p>
        <p className="text-red-500">赤の文字</p>
      </div>

      {/* 背景色 */}
      <div className="py-5">
        <p className="bg-gray-100">薄いグレーの背景</p>
        <p className="bg-blue-100">薄い青の背景</p>
        <p className="bg-red-100">薄い赤の背景</p>
      </div>

      {/* フォントの太さ */}
      <div className="py-5">
        <p className="font-light">細い</p>
        <p className="font-normal">通常</p>
        <p className="font-bold">太い</p>
      </div>

      <div className="py-5">
        <div className="bg-blue-500 text-white w-[350px]">
          <h2 className="text-xl font-bold">タイトル</h2>
          <p className="text-sm">説明文がここに入ります</p>
        </div>
      </div>
    </>
  );
}
