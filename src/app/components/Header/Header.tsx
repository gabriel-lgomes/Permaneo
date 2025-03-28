import Image from "next/image";
import React, { FC } from "react";

const Header: FC = () => {
  return (
    <header>
      <div className="container mx-auto">
        <div className="flex gap-4 items-center py-8">
          <Image
            src="/grupopermaneo_logo.webp"
            alt="Grupo Permaneo"
            width={70}
            height={70}
            className="rounded-full"
          />
          <h1 className="text-3xl font-black">Grupo Permaneo</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
