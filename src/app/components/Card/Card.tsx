import { CardProps } from "@/app/interfaces/Card";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

const Card: FC<CardProps> = ({ title, text, image, id }) => {
  return (
    <div className="flex flex-col gap-4 max-w-md px-6 py-8 rounded-xl bg-secondary">
      <div className="flex items-center gap-4">
        <Image
          src={image}
          alt={title}
          className="rounded-full fit-cover"
          width={50}
          height={50}
        />
        <p className="text-xl">{title}</p>
      </div>
      <p className="lg:min-h-[72px]">{text}</p>
      <Link
        href={id}
        className="bg-primary hover:bg-primary/80 transition-colors rounded-xl text-white text-sm w-fit px-4 py-2"
      >
        Acessar Curso
      </Link>
    </div>
  );
};

export default Card;
