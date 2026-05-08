'use client';

import { useState } from 'react';

export default function LikeButton({ postSlug }: { postSlug: string }) {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = async () => {
    try {
      const response = await fetch(`/api/posts/${postSlug}/like`, {
        method: 'POST',
      });

      if (response.ok) {
        setLikes(prev => isLiked ? prev - 1 : prev + 1);
        setIsLiked(!isLiked);
      }
    }catch (error) {
      console.error('Error liking the post:', error);
    }
  }

  return (
    <button  
      onClick={handleLike} 
      className={`px-4 py-2 rounded-lg transition-colors ${
        isLiked 
        ? 'bg-red-500 text-white' 
        : 'bg-gray-200 text-gray-800'
        }`}
      >
      ❤ いいね {likes > 0 && `(${likes})`}
    </button>
  );
};