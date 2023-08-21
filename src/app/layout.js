import "./globals.css";

export const metadata = {
  title: "Let's Animate!",
  description: "Study animation libraries for React.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
