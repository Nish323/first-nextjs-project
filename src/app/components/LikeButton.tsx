'use client';

import { useState } from 'react';

export default function LikeButton() {
  const [liked, setLiked] = useState(false);

  return (
    <button onClick={() => setLiked(!liked)} className="px-4 py-2 rounded">
      {liked ? '💛' : '🤍'}
    </button>
  );
};