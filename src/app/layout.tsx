import type { Metadata } from "next";
import "./globals.css";
import AppProvider from "./AppProvider";
import { Roboto } from "next/font/google";
import StoreProvider from "@/redux/StoreProvider";
import ProviderReactQuery from "@/utils/client/ProviderReactQuery";


const roboto = Roboto({
  subsets: ['latin'], // Cấu hình subset phù hợp (latin, vietnamese, etc.)
  weight: ['400', '700'], // Chọn các trọng lượng (weight) cần dùng
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} antialiased`}
      >
        <ProviderReactQuery>
          <StoreProvider>
            <AppProvider>
              {children}
            </AppProvider>
          </StoreProvider>
        </ProviderReactQuery>
      </body>
    </html>
  );
}
