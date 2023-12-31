"use client"
import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import client from "../utils/apolloclient"
import { ApolloProvider } from "@apollo/client";
// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };
//this should resolve the bug as it is v13
//metadata causing server side...

export default function RootLayout({ children }) {
  return (
    <ApolloProvider client={client}>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ApolloProvider>
  );
}
