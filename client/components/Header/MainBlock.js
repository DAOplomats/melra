"use client";

import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";

export default function MainBlock() {
  const router = useRouter();
  return (
    <div className="border border-[var(--foreground)] rounded-lg p-5 flex flex-col z-10 w-[350px]">
      <div className="flex items-baseline gap-2">
        <h1 className="text-5xl font-bold">Melra</h1>
        <p className="text-xl">/ˈmɛl.rə/</p>
      </div>

      <p className="text-2xl">The Sovereign Delegate</p>

      <p className="mt-2">
        Melra is not a chatbot. She is a sovereign AI Delegate, forged from
        governance data, trained on Arbitrum's history, and shaped by DAO
        values.
      </p>

      <div className="flex items-center justify-end gap-2">
        <Button
          variant="outline"
          className="bg-white text-black rounded-none"
          size="sm"
          onPress={() => router.push("/delegate")}
        >
          Delegate
        </Button>
        <Button
          variant="outline"
          className="bg-white text-black rounded-none"
          size="sm"
          onPress={() => router.push("/dashboard")}
        >
          Dashboard
        </Button>
      </div>
    </div>
  );
}
