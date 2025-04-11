import Block from "./Header/Block";
import MainBlock from "./Header/MainBlock";

export default function Header() {
  return (
    <div className="h-screen w-screen flex items-center justify-center relative overflow-x-hidden ">
      <div className="flex gap-5 overflow-hidden h-full items-center justify-center relative">
        <div
          className="w-full h-full absolute z-10"
          style={{
            background:
              "radial-gradient(ellipse 60% 60% at center, transparent 0%, #18171b 80%)",
          }}
        ></div>
        <div className="flex flex-col gap-5">
          <Block
            title="TMC ARB Recommendation"
            description="he TMC recommends a YES vote to deploy a stablecoin strategy for 15M ARB. This involves converting the ARB to stablecoins and allocating them to three partners (Karpatkey, Avantgarde & Myso, Gauntlet) for management using established low-risk protocols with an expected yield of 8-12%. Each manager would receive a 33% equal split. This vote is separate from a planned vote regarding ARB token strategy. If approved, the foundation would convert 15M ARB into stablecoins, If not approved, the ARB will not be converted. A full report will be available three months after. The selection was based on experience, risk management, alignment with DAO goals, expected returns, and transparency."
            decision="FOR"
            opacity={0.4}
          />
          <Block
            title="GMC's Preferred Allocations"
            description="The Growth Management Committee (GMC) of the Arbitrum DAO proposes allocating 7,500 ETH from the DAO's treasury to generate low-risk yield and spur ecosystem growth. They recommend allocating: * 5,000 ETH to Lido for staking into wstETH, which will then be deposited into Aave V3 on Arbitrum. 4,200 stETH (in wstETH) of the Lido allocation will be put toward encouraging LRT borrowing against wstETH on Aave in collaboration with Lido, Aave, Renzo, and Kelp, with incentive programs designed for depositors. * 2,500 ETH to Fluid to support ETH-based DEX and lending liquidity on Arbitrum. * 800 stETH to Camelot, deposited into the wstETH/ETH liquidity pool on Camelot V3. The GMC selected these protocols (Lido, Aave, Fluid, Camelot) for their stability, strong partnerships, and ability to maximize reach and impact within the Arbitrum ecosystem while prioritizing low risk. LlamaRisk has assessed the risks associated with each allocation. If the DAO approves this proposal with a 3% quorum, the Arbitrum Foundation will begin deployment."
            decision="For, Deploy Capital"
            opacity={0.4}
          />
          <Block
            title="TMC ARB Recommendation"
            description="he TMC recommends a YES vote to deploy a stablecoin strategy for 15M ARB. This involves converting the ARB to stablecoins and allocating them to three partners (Karpatkey, Avantgarde & Myso, Gauntlet) for management using established low-risk protocols with an expected yield of 8-12%. Each manager would receive a 33% equal split. This vote is separate from a planned vote regarding ARB token strategy. If approved, the foundation would convert 15M ARB into stablecoins, If not approved, the ARB will not be converted. A full report will be available three months after. The selection was based on experience, risk management, alignment with DAO goals, expected returns, and transparency."
            decision="FOR"
            opacity={0.4}
          />
        </div>
        <div className="flex flex-col gap-5">
          <Block
            title="GMC's Preferred Allocations"
            description="The Growth Management Committee (GMC) of the Arbitrum DAO proposes allocating 7,500 ETH from the DAO's treasury to generate low-risk yield and spur ecosystem growth. They recommend allocating: * 5,000 ETH to Lido for staking into wstETH, which will then be deposited into Aave V3 on Arbitrum. 4,200 stETH (in wstETH) of the Lido allocation will be put toward encouraging LRT borrowing against wstETH on Aave in collaboration with Lido, Aave, Renzo, and Kelp, with incentive programs designed for depositors. * 2,500 ETH to Fluid to support ETH-based DEX and lending liquidity on Arbitrum. * 800 stETH to Camelot, deposited into the wstETH/ETH liquidity pool on Camelot V3. The GMC selected these protocols (Lido, Aave, Fluid, Camelot) for their stability, strong partnerships, and ability to maximize reach and impact within the Arbitrum ecosystem while prioritizing low risk. LlamaRisk has assessed the risks associated with each allocation. If the DAO approves this proposal with a 3% quorum, the Arbitrum Foundation will begin deployment."
            decision="For, Deploy Capital"
            opacity={0.4}
          />
          <Block
            title="TMC ARB Recommendation"
            description="The Treasury Management Committee (TMC) recommends voting NO to deploying 10M ARB tokens into on-chain strategies managed by Karpatkey and Avantgarde/Myso.Here's why:Risk outweighs potential returns:The TMC finds the proposed ARB strategies lack sufficient risk management and clear operational details, resulting in low yield projections. The projected yields (7-30%) are dependent on option liquidity and counter-parties which are not assured. Lack of Transparency: Key operational details such as ARB option liquidity, allocation splits, and execution mechanisms are insufficiently detailed or publicly verifiable. Better to wait: The TMC believes it's prudent to hold the ARB tokens and revisit deployment with more robust proposals later. Edit V3 clarified the decision and feedback: The TMC provided specific feedback to both Karpatkey and Avantgarde on their respective strategies, citing concerns about the scalability of covered call strategies, the minimal yield of lending-based approaches, and the lack of real-world liquidity data for large ARB notional amounts. Voting NO means the ARB ð will be held and the RFP process will be re-held in 3 months."
            decision="No, Deploy Nothing"
            opacity={0.4}
          />
          <Block
            title="GMC's Preferred Allocations"
            description="The Growth Management Committee (GMC) of the Arbitrum DAO proposes allocating 7,500 ETH from the DAO's treasury to generate low-risk yield and spur ecosystem growth. They recommend allocating: * 5,000 ETH to Lido for staking into wstETH, which will then be deposited into Aave V3 on Arbitrum. 4,200 stETH (in wstETH) of the Lido allocation will be put toward encouraging LRT borrowing against wstETH on Aave in collaboration with Lido, Aave, Renzo, and Kelp, with incentive programs designed for depositors. * 2,500 ETH to Fluid to support ETH-based DEX and lending liquidity on Arbitrum. * 800 stETH to Camelot, deposited into the wstETH/ETH liquidity pool on Camelot V3. The GMC selected these protocols (Lido, Aave, Fluid, Camelot) for their stability, strong partnerships, and ability to maximize reach and impact within the Arbitrum ecosystem while prioritizing low risk. LlamaRisk has assessed the risks associated with each allocation. If the DAO approves this proposal with a 3% quorum, the Arbitrum Foundation will begin deployment."
            decision="For, Deploy Capital"
            opacity={0.4}
          />
        </div>
        <div className="flex flex-col gap-5">
          <Block
            title="TMC ARB Recommendation"
            description="The Treasury Management Committee (TMC) recommends voting NO to deploying 10M ARB tokens into on-chain strategies managed by Karpatkey and Avantgarde/Myso.Here's why:Risk outweighs potential returns:The TMC finds the proposed ARB strategies lack sufficient risk management and clear operational details, resulting in low yield projections. The projected yields (7-30%) are dependent on option liquidity and counter-parties which are not assured. Lack of Transparency: Key operational details such as ARB option liquidity, allocation splits, and execution mechanisms are insufficiently detailed or publicly verifiable. Better to wait: The TMC believes it's prudent to hold the ARB tokens and revisit deployment with more robust proposals later. Edit V3 clarified the decision and feedback: The TMC provided specific feedback to both Karpatkey and Avantgarde on their respective strategies, citing concerns about the scalability of covered call strategies, the minimal yield of lending-based approaches, and the lack of real-world liquidity data for large ARB notional amounts. Voting NO means the ARB ð will be held and the RFP process will be re-held in 3 months."
            decision="No, Deploy Nothing"
            opacity={0.4}
          />

          <Block
            title="Oversight and Transparency Committee Elections"
            description="The proposal announces the start of the Snapshot voting stage to elect the initial three members of the Oversight and Transparency Committee (OAT) for the OpCo (a DAO-adjacent entity focused on strategy execution). A call was held for candidates to present themselves, and related materials (recording, transcript, chat log) are provided. The proposal outlines responsible voting policies, particularly regarding self-voting for candidates, to ensure fairness and prevent collusion. Violations will lead to disqualification. Finally, it lists the twelve eligible candidates who will be included in the Snapshot vote."
            decision="Frisson (Frisson)"
            opacity={0.4}
          />

          <MainBlock />

          <Block
            title="Register the Sky Custom Gateway contracts"
            description="This proposal requests the Arbitrum DAO to update the Arbitrum Bridge's Router configuration to recognize and utilize the Sky Custom Gateways for bridging USDS and sUSDS tokens between Ethereum and Arbitrum. Currently, the bridge doesn't route these tokens through the Sky Custom Gateways, resulting in a suboptimal user experience and the deactivation of bridging USDS/sUSDS through the UI. Updating the router will ensure users get the official USDS and sUSDS tokens when bridging through the Arbitrum Bridge UI. The Sky Custom Gateways are already live, audited, and allow for future token support and upgrades. The proposal involves calling the `setGateways` method on the L1GatewayRouter contract on Ethereum and requires collaboration between the Sky team and Offchain Labs. There are no direct costs associated with the proposal beyond the required technical effort."
            decision="FOR"
            opacity={0.4}
          />

          <Block
            title="TMC ARB Recommendation"
            description="The Treasury Management Committee (TMC) recommends voting NO to deploying 10M ARB tokens into on-chain strategies managed by Karpatkey and Avantgarde/Myso.Here's why:Risk outweighs potential returns:The TMC finds the proposed ARB strategies lack sufficient risk management and clear operational details, resulting in low yield projections. The projected yields (7-30%) are dependent on option liquidity and counter-parties which are not assured. Lack of Transparency: Key operational details such as ARB option liquidity, allocation splits, and execution mechanisms are insufficiently detailed or publicly verifiable. Better to wait: The TMC believes it's prudent to hold the ARB tokens and revisit deployment with more robust proposals later. Edit V3 clarified the decision and feedback: The TMC provided specific feedback to both Karpatkey and Avantgarde on their respective strategies, citing concerns about the scalability of covered call strategies, the minimal yield of lending-based approaches, and the lack of real-world liquidity data for large ARB notional amounts. Voting NO means the ARB ð will be held and the RFP process will be re-held in 3 months."
            decision="No, Deploy Nothing"
            opacity={0.4}
          />
        </div>
        <div className="flex flex-col gap-5">
          <Block
            title="TMC Recommendation"
            description="avatar Here's a summary of the proposal: **TLDR:** The Treasury Management Committee (TMC) recommends the DAO vote to deploy a strategy for converting 15M ARB to stablecoins and managing them, but NOT to deploy a strategy for allocating 10M ARB to on-chain ARB-only strategies. They feel the stablecoin strategies presented are acceptable in terms of risk, return, and DAO alignment, while the ARB strategies lack sufficient risk management and transparency, and don't justify the returns. The vote will be a Ranked Choice Vote, where option #3 (Deploy Stable, Hold ARB) is what the TMC is recommending. If the ARB strategy is rejected, they will revisit the allocation in 3 months with a new RFP process. If the stable strategy is deployed, they will initiate a three month phase to convert 15M ARB into stablecoins."
            decision="#3 Only Deploy Stable Strategy"
            opacity={0.4}
          />

          <Block
            title="TMC Recommendation"
            description="avatar Here's a summary of the proposal: **TLDR:** The Treasury Management Committee (TMC) recommends the DAO vote to deploy a strategy for converting 15M ARB to stablecoins and managing them, but NOT to deploy a strategy for allocating 10M ARB to on-chain ARB-only strategies. They feel the stablecoin strategies presented are acceptable in terms of risk, return, and DAO alignment, while the ARB strategies lack sufficient risk management and transparency, and don't justify the returns. The vote will be a Ranked Choice Vote, where option #3 (Deploy Stable, Hold ARB) is what the TMC is recommending. If the ARB strategy is rejected, they will revisit the allocation in 3 months with a new RFP process. If the stable strategy is deployed, they will initiate a three month phase to convert 15M ARB into stablecoins."
            decision="#3 Only Deploy Stable Strategy"
            opacity={0.4}
          />
          <Block
            title="TMC Stablecoin Recommendation"
            description="he TMC recommends a YES vote to deploy a stablecoin strategy for 15M ARB. This involves converting the ARB to stablecoins and allocating them to three partners (Karpatkey, Avantgarde & Myso, Gauntlet) for management using established low-risk protocols with an expected yield of 8-12%. Each manager would receive a 33% equal split. This vote is separate from a planned vote regarding ARB token strategy. If approved, the foundation would convert 15M ARB into stablecoins, If not approved, the ARB will not be converted. A full report will be available three months after. The selection was based on experience, risk management, alignment with DAO goals, expected returns, and transparency."
            decision="YES, Deploy Stablecoin Strategy"
            opacity={0.4}
          />
          <Block
            title="TMC Recommendation"
            description="avatar Here's a summary of the proposal: **TLDR:** The Treasury Management Committee (TMC) recommends the DAO vote to deploy a strategy for converting 15M ARB to stablecoins and managing them, but NOT to deploy a strategy for allocating 10M ARB to on-chain ARB-only strategies. They feel the stablecoin strategies presented are acceptable in terms of risk, return, and DAO alignment, while the ARB strategies lack sufficient risk management and transparency, and don't justify the returns. The vote will be a Ranked Choice Vote, where option #3 (Deploy Stable, Hold ARB) is what the TMC is recommending. If the ARB strategy is rejected, they will revisit the allocation in 3 months with a new RFP process. If the stable strategy is deployed, they will initiate a three month phase to convert 15M ARB into stablecoins."
            decision="#3 Only Deploy Stable Strategy"
            opacity={0.4}
          />

          <Block
            title="TMC Recommendation"
            description="avatar Here's a summary of the proposal: **TLDR:** The Treasury Management Committee (TMC) recommends the DAO vote to deploy a strategy for converting 15M ARB to stablecoins and managing them, but NOT to deploy a strategy for allocating 10M ARB to on-chain ARB-only strategies. They feel the stablecoin strategies presented are acceptable in terms of risk, return, and DAO alignment, while the ARB strategies lack sufficient risk management and transparency, and don't justify the returns. The vote will be a Ranked Choice Vote, where option #3 (Deploy Stable, Hold ARB) is what the TMC is recommending. If the ARB strategy is rejected, they will revisit the allocation in 3 months with a new RFP process. If the stable strategy is deployed, they will initiate a three month phase to convert 15M ARB into stablecoins."
            decision="#3 Only Deploy Stable Strategy"
            opacity={0.4}
          />
        </div>
        <div className="flex flex-col gap-5">
          <Block
            title="TMC ARB Recommendation"
            description="he TMC recommends a YES vote to deploy a stablecoin strategy for 15M ARB. This involves converting the ARB to stablecoins and allocating them to three partners (Karpatkey, Avantgarde & Myso, Gauntlet) for management using established low-risk protocols with an expected yield of 8-12%. Each manager would receive a 33% equal split. This vote is separate from a planned vote regarding ARB token strategy. If approved, the foundation would convert 15M ARB into stablecoins, If not approved, the ARB will not be converted. A full report will be available three months after. The selection was based on experience, risk management, alignment with DAO goals, expected returns, and transparency."
            decision="FOR"
            opacity={0.4}
          />
          <Block
            title="TMC Recommendation"
            description="avatar Here's a summary of the proposal: **TLDR:** The Treasury Management Committee (TMC) recommends the DAO vote to deploy a strategy for converting 15M ARB to stablecoins and managing them, but NOT to deploy a strategy for allocating 10M ARB to on-chain ARB-only strategies. They feel the stablecoin strategies presented are acceptable in terms of risk, return, and DAO alignment, while the ARB strategies lack sufficient risk management and transparency, and don't justify the returns. The vote will be a Ranked Choice Vote, where option #3 (Deploy Stable, Hold ARB) is what the TMC is recommending. If the ARB strategy is rejected, they will revisit the allocation in 3 months with a new RFP process. If the stable strategy is deployed, they will initiate a three month phase to convert 15M ARB into stablecoins."
            decision="FOR"
            opacity={0.4}
          />
          <Block
            title="TMC ARB Recommendation"
            description="he TMC recommends a YES vote to deploy a stablecoin strategy for 15M ARB. This involves converting the ARB to stablecoins and allocating them to three partners (Karpatkey, Avantgarde & Myso, Gauntlet) for management using established low-risk protocols with an expected yield of 8-12%. Each manager would receive a 33% equal split. This vote is separate from a planned vote regarding ARB token strategy. If approved, the foundation would convert 15M ARB into stablecoins, If not approved, the ARB will not be converted. A full report will be available three months after. The selection was based on experience, risk management, alignment with DAO goals, expected returns, and transparency."
            decision="FOR"
            opacity={0.4}
          />
        </div>
      </div>
    </div>
  );
}
