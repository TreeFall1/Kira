import { Pixelify_Sans} from "next/font/google";
import "./globals.css";


const pixel = Pixelify_Sans({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-title",
});

export const metadata = {
  title: "Люблю Тебя!!",
  description: "Чмоки Чмоки",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${pixel.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
