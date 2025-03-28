export type ButtonProps = {
  children: React.ReactNode;
  type: "primary" | "secondary";
  onClick?: () => void;
};
