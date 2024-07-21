import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Addtasks from "./components/Addtasks";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Simple Application",
  description: "todo list",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
		<main className="max-w-4xl mx-auto mt-4">
		<div className="text-center my-5 flex flex-col gap-4">
				<h1 className="text-2xl font-bold">Todo List App</h1>
				<Addtasks/>
		</div>
			{children}
		</main>	
			</body>
    </html>
  );
}
