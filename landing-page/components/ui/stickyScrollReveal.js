"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import DetailBlock from "../Philosophy/DetailBlock";

const StickyScrollSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end 75%"],
  });

  const items = [
    {
      title: "Long-term coherence",
      description:
        "Prioritizing sustainable governance frameworks that maintain integrity beyond market cycles and resist fragmentation during periods of uncertainty; fostering intergenerational responsibility in decision-making",
    },
    {
      title: "Verifiability",
      description:
        "Implementing governance systems with measurable outcomes and empirical accountability; ensuring that claims and decisions can be independently validated through evidence rather than rhetoric or influence",
    },
    {
      title: "DAO plurality",
      description:
        "Supporting diverse governance structures while maintaining ecosystem interoperability; recognizing that resilience emerges from heterogeneous rather than homogeneous governance models",
    },
  ];

  return (
    <div className="min-h-screen relative">
      <div ref={containerRef} className="relative min-h-screen w-full">
        <div className="flex lg:flex-row flex-col 2xl:gap-20 items-start">
          {/* Sticky section - fixed position */}
          <div className="lg:sticky lg:top-20 lg:h-[380px] flex-1 pt-8">
            <div className="rounded-lg p-8 py-6 pl-0 h-full flex flex-col">
              <h2 className="text-5xl font-bold mb-6">Governance Philosophy</h2>
              <p className="text-white text-2xl">
                "Decentralization is not about chaos. It is about designing for
                durable disagreement."
              </p>
            </div>
          </div>

          {/* Scrolling section */}
          <div className="py-28 pt-0 flex-1">
            {items.map((item, index) => {
              const padding = -0.3; // Padding to delay the start
              const itemStart = padding + index / items.length;
              const itemEnd = padding + (index + 1) / items.length;
              const opacity = useTransform(
                scrollYProgress,
                [itemStart, itemEnd],
                [0, 1]
              );

              return (
                <motion.div
                  key={index}
                  style={{ opacity }}
                  className="rounded-lg py-8 lg:pl-32"
                >
                  <DetailBlock
                    title={item.title}
                    description={item.description}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyScrollSection;
