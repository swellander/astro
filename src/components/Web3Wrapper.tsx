import type { ReactNode } from "react";
import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultWallets,
  RainbowKitProvider,
  lightTheme,
} from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { infuraProvider } from "wagmi/providers/infura";
import { publicProvider } from "wagmi/providers/public";
// import "./Polyfill";

const { chains, provider } = configureChains(
  [chain.polygonMumbai],
  [
    infuraProvider({ apiKey: import.meta.env.PUBLIC_INFURA_API_KEY }),
    publicProvider(),
  ]
);
const { connectors } = getDefaultWallets({
  appName: "SocialDrop",
  chains,
});
const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

export const Web3Wrapper = (props: { children: ReactNode }) => {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        chains={chains}
        children={props.children}
        theme={lightTheme({
          accentColor: "#01DFA8",
          accentColorForeground: "002E22",
          borderRadius: "medium",
        })}
      />
    </WagmiConfig>
  );
};
