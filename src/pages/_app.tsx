import "@styles/globals.css";
import type { AppProps } from "next/app";
import AzureAppInsights from "@components/appinsights";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AzureAppInsights>
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    </AzureAppInsights>
  );
}
