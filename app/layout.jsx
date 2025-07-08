import "./globals.css";

export const metadata = {
  title: "Крестики-нолики",
  description: "Онлайн игра крестики-нолики",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <div>{children}</div>
        <div id="modals"></div>
      </body>
    </html>
  );
}
