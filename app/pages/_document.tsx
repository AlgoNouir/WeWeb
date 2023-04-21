// base
import { Html, Head, Main, NextScript } from "next/document";

// my components
import Header from "@/components/headers";

export default function Document() {
    return (
        <Html dir="rtl" lang="en">
            <Head />
            <body>
                <Header />
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
