// app/layout.js
import './globals.css';

export const metadata = {
  title: 'Armor Set Builder',
  description: 'Build the perfect armor set for your desired skills',
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