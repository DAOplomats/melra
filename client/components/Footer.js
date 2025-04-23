"use client";

import { Heart, Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";

export default function Footer() {
  const router = useRouter();
  return (
    <div className="mt-28 bg-[var(--block)] py-28">
      <div className="flex flex-col gap-10 sm:flex-row sm:items-center w-full justify-between container lg:px-32">
        <div className="flex flex-col">
          <h1 className="text-5xl font-bold">Melra</h1>
          <p className="text-xl mb-2">The Sovereign Delegate</p>

          <p className="text-base">
            "If you believe in accountable AI participation, <br />
            Delegate to Melra."
          </p>

          <div className="flex gap-2 mt-5">
            <Link
              className=" border border-[var(--foreground)] text-[var(--foreground)] p-3 rounded-sm"
              href="mailto:melra@daoplomats.com"
            >
              <Mail size={15} />
            </Link>
            <Link
              className=" border border-[var(--foreground)] text-[var(--foreground)] p-3 rounded-sm"
              href="https://x.com/DAOplomats"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="15"
                height="15"
                viewBox="0 0 50 50"
                fill="#c8b5ff"
              >
                <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"></path>
              </svg>
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-start sm:items-end text-xl">
          <div className="flex items-center gap-2 text-xl">
            Made with{" "}
            <span className="text-[var(--foreground)] animate-ping">
              <Heart size={20} />
            </span>
          </div>{" "}
          by DAOplomats
          <Button
            variant="outline"
            className=" text-base text-[var(--foreground)] border border-[var(--foreground)] rounded-none mt-7"
            size="sm"
            onPress={() => router.push("/delegate")}
          >
            Delegate
          </Button>
          <Button
            variant="outline"
            className=" text-base text-[var(--foreground)] border border-[var(--foreground)] rounded-none mt-3"
            size="sm"
            onPress={() => router.push("/dashboard")}
          >
            Dashboard
          </Button>
        </div>
      </div>
    </div>
  );
}
