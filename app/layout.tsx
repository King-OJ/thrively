import type { Metadata } from "next";
import { Pacifico } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  variable: "--pacifico",
});

const garnettMedium = localFont({
  src: "../public/font/Garnett-Medium.woff",
  variable: "--garnett-medium",
});

const gtAmericaTrial = localFont({
  src: "../public/font/GT-America-Standard-Thin-Trial.otf",
  variable: "--gtAmericaTrial",
});

const gtAmericaTrialRegular = localFont({
  src: "../public/font/GT-America-Standard-Regular-Trial.otf",
  variable: "--gtAmericaTrialRegular",
});

export const metadata: Metadata = {
  title: "Thrively",
  description: "Discover Insights, Inspiration & Growth in Every Inbox",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${garnettMedium.variable} ${pacifico.variable} ${gtAmericaTrialRegular.variable}  ${gtAmericaTrial.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
