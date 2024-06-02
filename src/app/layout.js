import { Roboto } from "next/font/google";
import "./globals.css";
import { NextAuthProvider } from "./Providers";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}