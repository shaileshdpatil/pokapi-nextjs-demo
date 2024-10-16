import "./globals.css";

export const metadata = {
  title: "Pokemon App",
  description: "Basic Pokemon Search App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
