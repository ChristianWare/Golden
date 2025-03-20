import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
// import { Nav } from "@/components/shared/Nav/Nav";
// import SmoothScroll from "../components/shared/SmoothScroll/SmoothScroll";
// import ReactQueryProvider from "./ReactQueryProvider";
// import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: {
    template: `%s | Thunder Trails`,
    absolute: "Thunder Trails",
  },
  description: "We sell the best bikes known to man.",
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
        {children}
        {/* </SmoothScroll> */}
        {/* </ReactQueryProvider> */}
      </body>
    </html>
  );
}
