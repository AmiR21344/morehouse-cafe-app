import React from 'react';
import Image from 'next/image';

const Loading = () => {
  return (
    <div className="w-screen h-screen relative">
      <Image
        src="/load_screen.png"
        alt="Loading screen"
        fill
        priority
        className="object-cover"
      />
    </div>
  );
};

export default Loading;