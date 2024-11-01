import { dir } from "i18next";
import { languages } from "./i18n/settings";


export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}
export default async function RootLayout({ children, params }) {
  const { lng } = await params; // Переконайтесь, що params завантажений асинхронно

  return (
    <html lang={lng}>
      <head />
      <body>{children}</body>
    </html>
  );
}




