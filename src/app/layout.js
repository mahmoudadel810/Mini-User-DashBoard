
import Footer from "../components/footer/index.js";
import Header from "../components/header/index.js";
import "./globals.css";

export const metadata = {
  title: "Users Dashboard",
  description: "Next.js 13 App with Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {/* <I18nextProvider i18n={i18n}> */}
        {children}

        {/* </I18nextProvider> */}
        <Footer />
      </body>
    </html>
  );
}
