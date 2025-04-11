"use client";

import { Activity, Clock, ThumbsDown, ThumbsUp, Users } from "lucide-react";
import Badge from "../ui/Badge";
import { Card, CardBody, CardHeader } from "@heroui/react";

// Sample activity data
const activities = [
  {
    id: 1,
    type: "vote",
    proposal: "Treasury Expansion",
    decision: "for",
    timestamp: "2 hours ago",
  },
  {
    id: 2,
    type: "vote",
    proposal: "Governance Change",
    decision: "against",
    timestamp: "5 hours ago",
  },
  {
    id: 3,
    type: "delegation",
    address: "0x1a2...3b4c",
    amount: "50,000",
    timestamp: "1 day ago",
  },
  {
    id: 4,
    type: "vote",
    proposal: "Protocol Upgrade",
    decision: "for",
    timestamp: "1 day ago",
  },
  {
    id: 5,
    type: "delegation",
    address: "0x5d6...7e8f",
    amount: "120,000",
    timestamp: "2 days ago",
  },
  {
    id: 6,
    type: "vote",
    proposal: "Community Fund Allocation",
    decision: "for",
    timestamp: "3 days ago",
  },
  {
    id: 7,
    type: "delegation",
    address: "0x9g0...1h2i",
    amount: "75,000",
    timestamp: "4 days ago",
  },
];

export function RecentActivity() {
  return (
    <Card className="text-white shadow-sm border-[var(--foreground)] border p-2 mt-6">
      <CardHeader className="text-white flex flex-col items-start">
        <div className="text-2xl font-bold">Recent Activity</div>
        <p className="text-base text-muted-foreground">
          Latest actions and decisions by Melra
        </p>
      </CardHeader>
      <CardBody>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="flex flex-col sm:flex-row items-start gap-4 rounded-lg border p-4 border-[var(--foreground)]"
            >
              <div className="rounded-full bg-muted p-2">
                {activity.type === "vote" ? (
                  <Activity className="h-4 w-4" />
                ) : (
                  <Users className="h-4 w-4" />
                )}
              </div>
              <div className="flex-1">
                {activity.type === "vote" ? (
                  <div className="flex flex-col gap-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-medium">
                        Voted on "{activity.proposal}"
                      </span>
                      {activity.decision === "for" ? (
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                          <ThumbsUp className="mr-1 h-3 w-3" />
                          For
                        </Badge>
                      ) : (
                        <Badge className="bg-red-100 text-red-800 hover:bg-red-100">
                          <ThumbsDown className="mr-1 h-3 w-3" />
                          Against
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Melra AI cast a vote based on proposal analysis
                    </p>
                  </div>
                ) : (
                  <div className="flex flex-col gap-1">
                    <span className="font-medium">
                      New delegation from {activity.address}
                    </span>
                    <p className="text-sm text-muted-foreground">
                      {activity.amount} voting power delegated to Melra AI
                    </p>
                  </div>
                )}
              </div>
              <div className="flex items-center text-sm text-muted-foreground mt-2 sm:mt-0">
                <Clock className="mr-1 h-3 w-3" />
                {activity.timestamp}
              </div>
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  );
}
