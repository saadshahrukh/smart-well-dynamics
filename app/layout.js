import { Montserrat } from "next/font/google";
import "./styles/globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/swd-fav-icon.png" />
      </head>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
