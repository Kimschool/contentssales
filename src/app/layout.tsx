import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "WEAVUS CONTENT · From Story to Business",
  description:
    "콘텐츠를 비즈니스로 — 팬덤 IP 기획, 제작, 글로벌 유통, 수익화까지. WEAVUS 콘텐츠.",
  icons: {
    icon: "/icon.svg"
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
