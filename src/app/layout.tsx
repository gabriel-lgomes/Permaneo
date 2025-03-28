import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header/Header";
import { CoursesProvider } from "./context/CoursesContext";

export const metadata: Metadata = {
  title: "Teste Grupo Permaneo",
  description: "Teste Grupo Permaneo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body cz-shortcut-listen="true" className="lg:px-0 px-4">
        <CoursesProvider>
          <Header />
          {children}
        </CoursesProvider>
      </body>
    </html>
  );
}
