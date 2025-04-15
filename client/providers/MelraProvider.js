"use client";

import StartContainer from "@/components/ui/StartContainer";
import useInitialize from "@/hooks/useInitialize";
import { Loader2 } from "lucide-react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function MelraProvider({ children }) {
  const { initialize } = useInitialize();
  const isInitializing = useSelector((state) => state.user.isInitializing);

  useEffect(() => {
    initialize();
  }, []);

  if (isInitializing) {
    return (
      <StartContainer>
        <Loader2 className="animate-spin h-7 w-7" />
      </StartContainer>
    );
  } else {
    return <div>{children}</div>;
  }
}
