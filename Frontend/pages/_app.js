  import { HydrationProvider, Server, Client } from "react-hydration-provider";
  import '../styles/global.css';
function MyApp({ Component, pageProps }) {
  return (
    <HydrationProvider>
			<main>
				<Server>
				</Server>
				<Client>
        <Component {...pageProps} />
				</Client>
			</main>
		</HydrationProvider>
  )
}

export default MyApp
