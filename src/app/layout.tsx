import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
// import { Nav } from "@/components/shared/Nav/Nav";
import SmoothScroll from "../components/shared/SmoothScroll/SmoothScroll";
import { Nav } from "@/components/shared/Nav/Nav";
import Footer from "@/components/shared/Footer/Footer";
import Spotlight from "@/components/home-page/Spotlight/Spotlight";
// import ReactQueryProvider from "./ReactQueryProvider";
// import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: {
    template: `%s | Golden Drips`,
    absolute: "Golden Drips",
  },
  description: "We sell the best honey known to man.",
};

const PPFormulaConsensedExtrabold = localFont({
  src: "../../public/fonts/PPFormulaConsensedExtrabold.woff2",
  variable: "--PPFormulaConsensedExtrabold",
  display: "swap",
});

const SuisseIntlMonoRegular = localFont({
  src: "../../public/fonts/SuisseIntlMonoRegular.woff2",
  variable: "--SuisseIntlMonoRegular",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${PPFormulaConsensedExtrabold.variable} ${SuisseIntlMonoRegular.variable}`}
      >
        {/* <ReactQueryProvider>
          <Toaster
            position='bottom-right'
            toastOptions={{
              className: "toastFont",
              duration: 6000,
              style: {
                border: "2px solid #295f4e",
                borderRadius: "50px",
                textAlign: "center",
                whiteSpace: "nowrap",
              },
            }}
          />
          <SmoothScroll>
            <Nav /> */}
        <SmoothScroll>
          <Nav />
          {children}
          <Spotlight />

          <Footer />
        </SmoothScroll>
        {/* </SmoothScroll> */}
        {/* </ReactQueryProvider> */}
      </body>
    </html>
  );
}
