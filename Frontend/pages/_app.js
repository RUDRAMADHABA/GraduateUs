  import { HydrationProvider, Server, Client } from "react-hydration-provider";
  import '../styles/global.css';
  import AppContextProvider from "../context/AppContextProvider";
function MyApp({ Component, pageProps }) {
  return (
	<AppContextProvider>
    <HydrationProvider>
			<main>
				<Server>
				</Server>
				<Client>
        <Component {...pageProps} />
				</Client>
			</main>
		</HydrationProvider>
	</AppContextProvider>
  )
}

export default MyApp
