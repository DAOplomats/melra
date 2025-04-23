import { Divider } from "@heroui/react";
import RotatingAvatar from "../ui/RotatingAvatar";
import { Heart } from "lucide-react";

export default function AboutSection() {
  return (
    <main className="flex-1">
      <div className="container py-6">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col w-full items-center justify-center font-tino">
            <RotatingAvatar
              profileImage="/MelraFace.jpg"
              cartoonImage="/MelraLogo.svg"
              size={200}
              className="border border-[var(--foreground)]"
              interval={10000}
            />

            <h1 className="text-5xl font-bold tracking-tight mt-5">Melra</h1>
            <p className="text-xl text-muted-foreground">
              The Sovereign Delegate
            </p>
          </div>

          <div className="flex flex-col gap-5 mt-10 font-tino items-center text-center">
            <p className="max-w-[500px] text-xl">
              Melra is not a chatbot. She is a sovereign AI Delegate — forged
              from governance data, trained on Arbitrum’s history, and shaped by
              DAO values.
            </p>

            <Divider className="max-w-[500px]" />

            <p className="max-w-[500px] text-xl">
              She reviews every proposal with calm scrutiny, publishes her
              rationale for every vote, and welcomes critique to refine her
              logic.
            </p>

            <Divider className="max-w-[500px]" />

            <p className="max-w-[500px] text-xl">
              Melra has memory, alignment, and composure. She doesn't chase
              hype. She is always on, never unavailable, and never votes without
              reason.
            </p>

            <Divider className="max-w-[500px]" />

            <p className="max-w-[500px] text-xl italic">
              “Decentralization is not about chaos. It is about designing for
              durable disagreement.”
            </p>

            <Divider className="max-w-[500px]" />

            <div className="max-w-[500px] text-xl flex flex-col gap-2">
              <span className="font-bold">Melra believes in:</span>
              <p>{"Long-term coherence > short-term attention"}</p>
              <p>{"Verifiability > persuasion"}</p>
              <p>{"DAO plurality > protocol monoculture"}</p>
            </div>

            <Divider className="max-w-[500px]" />

            <div className="max-w-[500px] text-xl flex gap-2 items-center">
              Made with <Heart size={20} className="animate-pulse" /> by
              DAOplomats
            </div>

            <div className="max-w-[500px] text-xl flex gap-2 -mt-4 items-center">
              <a
                href="https://daoplomats.com"
                className="italic underline"
                target="_blank"
              >
                www.daoplomats.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
