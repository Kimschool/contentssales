import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "WEAVUS CONTENT · Sales",
  description: "웹툰 제작과 글로벌 로컬라이징, 팬덤 IP 원스톱 프로덕션"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
