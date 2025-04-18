"use client";

import {
  Activity,
  Bookmark,
  Clock,
  ThumbsDown,
  ThumbsUp,
  Users,
} from "lucide-react";
import Badge from "../ui/Badge";
import { Card, CardBody, CardHeader } from "@heroui/react";
import { useSelector } from "react-redux";

export function RecentActivity() {
  const recentActivities = useSelector((state) => state.user.recentActivities);
  console.log(recentActivities);

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
          {recentActivities &&
            recentActivities.map((activity) => (
              <div
                key={activity.id}
                className="flex flex-col sm:flex-row items-start gap-4 rounded-lg border p-4 border-[var(--foreground)]"
              >
                <div className="rounded-full bg-muted p-2">
                  {activity.tag === "Delegation" && (
                    <Users className="h-4 w-4" />
                  )}

                  {activity.tag === "Proposal" && (
                    <Bookmark className="h-4 w-4" />
                  )}

                  {activity.tag === "Decision" && (
                    <Activity className="h-4 w-4" />
                  )}
                </div>
                <div className="flex-1">
                  {activity.tag === "Delegation" && (
                    <div className="flex flex-col gap-1">
                      <span className="font-medium">
                        New delegation from{" "}
                        {activity.metadata.delegator.slice(0, 6) +
                          "..." +
                          activity.metadata.delegator.slice(-4)}
                      </span>
                      <p className="text-sm text-muted-foreground">
                        {Number(activity.metadata.tokens / 10 ** 18).toFixed(2)}{" "}
                        ARB delegated to Melra
                      </p>
                    </div>
                  )}

                  {activity.tag === "Proposal" && (
                    <div className="flex flex-col gap-1">
                      <span className="font-medium">
                        New proposal on{" "}
                        <span className=" capitalize">
                          {activity.metadata.platform}
                        </span>{" "}
                      </span>
                      <p className="text-sm text-muted-foreground line-clamp-1">
                        {activity.metadata.title}
                      </p>
                    </div>
                  )}

                  {activity.tag === "Decision" && (
                    <div className="flex flex-col gap-1">
                      <span className="font-medium">
                        Decided on "{activity.metadata.title}"
                      </span>
                      <p className="text-sm text-muted-foreground line-clamp-1">
                        Melra has decided to vote "
                        {
                          activity.metadata.choices[
                            Number(activity.metadata.primaryDecision) - 1
                          ]
                        }
                        "
                      </p>
                    </div>
                  )}
                </div>
                <div className="flex items-center text-sm text-muted-foreground mt-2 sm:mt-0">
                  <Clock className="mr-1 h-3 w-3" />
                  {new Date(activity.createdAt).toLocaleString()}
                </div>
              </div>
            ))}
        </div>
      </CardBody>
    </Card>
  );
}
