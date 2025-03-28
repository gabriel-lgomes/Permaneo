import { CardProps } from "@/app/interfaces/Card";
import Image from "next/image";
import React, { FC } from "react";
import Button from "../Button/Button";
import Link from "next/link";

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
      <Link href={id}>
        <Button type="primary">Acessar Curso</Button>
      </Link>
    </div>
  );
};

export default Card;
