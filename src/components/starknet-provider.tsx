"use client";
import { ReactNode } from "react";
import { useState } from "react";
import { sepolia,goerli, mainnet } from "@starknet-react/chains";
import {
  StarknetConfig,
  publicProvider,
  argent,
  braavos,
  useInjectedConnectors,
} from "@starknet-react/core";
import { alchemyProvider } from "@starknet-react/core";
import { jsonRpcProvider } from "@starknet-react/core";
import { Chain } from "@starknet-react/chains";

export function StarknetProvider({ children }: { children: React.ReactNode }) {
  const { connectors } = useInjectedConnectors({
    // Show these connectors if the user has no connector installed.
    recommended: [argent(), braavos()],
    // Hide recommended connectors if the user has any connector installed.
    includeRecommended: "onlyIfNoConnectors",
    // Randomize the order of the connectors.
    order: "random",
  });

  // const apiKey = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY as string;

  const provider = publicProvider();

  return (
    <StarknetConfig
      chains={[sepolia]}
      provider={provider}
      connectors={connectors}
    >
      {children}
    </StarknetConfig>
  );
}
