"use client";

import { useState } from "react";
import { Tab, Tabs, Button } from "@heroui/react";
import { List } from "./List";

export default function ProposalList() {
  const [tab, setTab] = useState("all");
  return (
    <>
      <Tabs
        aria-label="Tabs radius"
        radius={"lg"}
        className="h-12"
        variant="bordered"
        fullWidth
        classNames={{
          tabList: "relative border-1 border-[var(--foreground)] w-fit",
          tabContent: "cursor-pointer w-24",
        }}
        selectedKey={tab}
        onSelectionChange={setTab}
      >
        <Tab key="all" title="All" className="py-6" />
        <Tab key="active" title="Active" className="py-6" />
        <Tab key="completed" title="Completed" className="py-6" />
      </Tabs>

      <List />
    </>
  );
}
