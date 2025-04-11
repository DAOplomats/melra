import {
  Binoculars,
  Blocks,
  BrainIcon,
  ChartColumnDecreasing,
  CpuIcon,
  Search,
} from "lucide-react";
import DynamicBlock from "./Capabilities/DynamicBlock";

export default function Capabilities() {
  const capabilities = [
    {
      title: "Multi-dimensional Analysis",
      description:
        "Reads proposals and evaluates them through a weighted lens (economic, social, technical, game-theoretic)",
      icon: <Search />,
    },
    {
      title: "Transparent Reasoning",
      description:
        "Publishes Chain-of-Thought rationale for every vote with clear decision metrics",
      icon: <ChartColumnDecreasing />,
    },
    {
      title: "Adaptive Learning",
      description:
        "Refines logic via feedback, discourse, and open data from governance forums and outcomes",
      icon: <Blocks />,
    },
    {
      title: "Institutional Memory",
      description:
        "Maintains a public repository of past votes, reasoning, and governance patterns",
      icon: <CpuIcon />,
    },
    {
      title: "Scenario Modeling",
      description:
        "Projects potential outcomes of proposals across multiple timeframes and conditions",
      icon: <Binoculars />,
    },
    {
      title: "Self-consistency",
      description:
        "Regularly audits past decisions against current framework to ensure logical coherence",
      icon: <BrainIcon />,
    },
  ];

  return (
    <div className="container lg:mt-20 mt-0 ">
      <h2 className="text-5xl font-bold mb-3 lg:text-center">Capabilities</h2>
      <p className="text-xl mb-10 lg:text-center">
        Melra brings unique capabilities to Arbitrum governance
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-0">
        {capabilities.map((capability, index) => (
          <DynamicBlock
            key={index}
            title={capability.title}
            description={capability.description}
            icon={capability.icon}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
