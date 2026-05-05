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

      {/* 装飾系のみ */}
      <div className="py-5">
        <div className="bg-blue-500 text-white w-[350px]">
          <h2 className="text-xl font-bold">タイトル</h2>
          <p className="text-sm">説明文がここに入ります</p>
        </div>
      </div>

      {/* パディング（内側の余白） */}
      <div className="py-5">
        <div className="p-4">全方向に16pxのパディング</div>
        <div className="py-4">上下に16pxのパディング</div>
        <div className="px-4">左右に16pxのパディング</div>
        <div className="pt-4">上に16pxのパディング</div>
        <div className="pb-4">下に16pxのパディング</div>
        <div className="pl-4">左に16pxのパディング</div>
        <div className="pr-4">右に16pxのパディング</div>
      </div>

      {/* マージン（外側の余白） */}
      <div className="py-5">
        <div className="m-4">全方向に16pxのマージン</div>
        <div className="my-4">上下に16pxのマージン</div>
        <div className="mx-4">左右に16pxのマージン</div>
        <div className="mt-4">上に16pxのマージン</div>
        <div className="mb-4">下に16pxのマージン</div>
        <div className="ml-4">左に16pxのマージン</div>
        <div className="mr-4">右に16pxのマージン</div>
      </div>

      {/* スペーシングを追加 */}
      <div className="py-5">
        <div className="bg-blue-500 text-white p-4 w-[350px]">
          <h2 className="text-xl font-bold mb-2">タイトル</h2>
          <p className="text-sm">説明文がここに入ります</p>
        </div>
      </div>

      {/* Flexboxレイアウト */}
      <div className="py-5">
        <div className="flex gap-4">
          <div className="bg-gray-200 p-4">1</div>
          <div className="bg-gray-300 p-4">2</div>
          <div className="bg-gray-400 p-4">3</div>
        </div>
        <div className="flex flex-col gap-4 mt-4">
          <div className="bg-gray-200 p-4">1</div>
          <div className="bg-gray-300 p-4">2</div>
          <div className="bg-gray-400 p-4">3</div>
        </div>
        <div className="flex justify-between gap-4 mt-4">
          <div className="bg-gray-200 p-4">1</div>
          <div className="bg-gray-300 p-4">2</div>
          <div className="bg-gray-400 p-4">3</div>
        </div>
        <div className="flex justify-center gap-4 mt-4">
          <div className="bg-gray-200 p-4">1</div>
          <div className="bg-gray-300 p-4">2</div>
          <div className="bg-gray-400 p-4">3</div>
        </div>
        <div className="flex items-center gap-4 mt-4">
          <div className="bg-gray-200 p-4">1</div>
          <div className="bg-gray-300 p-4">2</div>
          <div className="bg-gray-400 p-4">3</div>
        </div>
      </div>

      {/* グリッドレイアウト */}
      <div className="py-5">
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-gray-200 p-4">1</div>
          <div className="bg-gray-300 p-4">2</div>
          <div className="bg-gray-400 p-4">3</div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="bg-gray-200 p-4">1</div>
          <div className="bg-gray-300 p-4">2</div>
          <div className="bg-gray-400 p-4">3</div>
        </div>
      </div>

      {/* 幅の指定 */}
      <div className="py-5">
        <div className="w-64 bg-gray-200 p-4">幅256px</div>
        <div className="w-full bg-gray-300 p-4 mt-4">幅100%</div>
      </div>
      
      {/* 高さの指定 */}
      <div className="py-5">
        <div className="h-16 bg-gray-200 p-4">高さ64px</div>
        <div className="h-full bg-gray-300 p-4 mt-4">高さ100%</div>
      </div>
      
    </>
  );
}
