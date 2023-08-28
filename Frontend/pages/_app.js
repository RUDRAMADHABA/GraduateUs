import { HydrationProvider, Server, Client } from "react-hydration-provider";
import "../styles/global.css";
import AppContextProvider from "../context/AppContextProvider";
import { SessionProvider } from "next-auth/react";
import Head from "next/head";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
	<SessionProvider session={session}>
    <Head>
      <link rel="icon" href="logoGU.png"></link>
      <title>Graduate US</title>
    </Head>
    <AppContextProvider>
      <HydrationProvider>
        <main>
          <Server></Server>
          <Client>
            <Component {...pageProps} />
          </Client>
        </main>
      </HydrationProvider>
    </AppContextProvider>
	</SessionProvider>
  );
}

export default MyApp;
