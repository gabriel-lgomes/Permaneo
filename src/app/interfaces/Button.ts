import { ComponentProps } from "react";

export type ButtonProps = ComponentProps<"a"> & {
  children: React.ReactNode;
  type: "primary" | "secondary";
  class?: string;
  href: string;
};
