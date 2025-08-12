"use client";

import Image from 'next/image';
import { useState } from 'react';

// Profile Image Component with fallback
export default function ProfileImage() {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="w-80 h-80 rounded-full bg-gradient-to-br from-[#00FF85] to-[#00CC68] flex items-center justify-center p-1">
      <div className="w-full h-full rounded-full overflow-hidden bg-[#0E0E0E] dark:bg-[#0E0E0E] light:bg-white flex items-center justify-center">
        {!imageError ? (
          <Image
            src="/ln-account.webp"
            alt="Andrea Fazio"
            width={320}
            height={320}
            className="w-full h-full object-cover rounded-full"
            style={{ marginInline: '50px' }}
            priority
            onError={() => setImageError(true)}
          />
        ) : (
          <span className="text-6xl font-bold text-[#00FF85]">AF</span>
        )}
      </div>
    </div>
  );
}
