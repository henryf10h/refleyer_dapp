"use client";
import { ReactNode } from "react";

import { goerli, mainnet } from "@starknet-react/chains";
import {
  StarknetConfig,
  argent,
  braavos,
  publicProvider,
  useInjectedConnectors,
} from "@starknet-react/core";
import { alchemyProvider } from "@starknet-react/core";


export function StarknetProvider({ children }: { children: ReactNode }) {
  const { connectors } = useInjectedConnectors({
    // Show these connectors if the user has no connector installed.
    recommended: [argent(), braavos()],
    // Hide recommended connectors if the user has any connector installed.
    includeRecommended: "onlyIfNoConnectors",
    // Randomize the order of the connectors.
    order: "random",
  });

  const apiKey = "qIfwWsQsCue-tbtgIVnXSXxELrpZ_98p"

  const provider = alchemyProvider({ apiKey });

  return (
    <StarknetConfig
      chains={[mainnet, goerli]}
      provider={provider}
      connectors={connectors}
    >
      {children}
    </StarknetConfig>
  );
}
