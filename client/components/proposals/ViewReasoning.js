"use client";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
} from "@heroui/react";

import {
  Brain,
  CheckCircle,
  Clock,
  FileSpreadsheet,
  FileText,
  Loader2,
  Users,
  Vote,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import Badge from "../ui/Badge";
import useSnapshot from "@/hooks/useSnapshot";
import { formatDistance } from "date-fns";
import useTally from "@/hooks/useTally";

export default function ViewReasoning({ proposal }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scores, setScores] = useState(null);
  const [totalScore, setTotalScore] = useState(0);
  const [loading, setLoading] = useState(false);
  const { getScores } = useSnapshot();
  const { getVotesTally } = useTally();

  useEffect(() => {
    if (!proposal) return;
    if (!isOpen) return;

    setScores(null);
    setTotalScore(0);

    if (proposal.platform === "snapshot") {
      const fetchScores = async () => {
        setLoading(true);
        try {
          const scores = await getScores(proposal.id);
          setScores(scores);
          setTotalScore(scores.scores.reduce((acc, score) => acc + score, 0));
        } catch (error) {
          console.error("Error fetching scores:", error);
        } finally {
          setLoading(false);
        }
      };
      fetchScores();
    }

    if (proposal.platform === "tally") {
      const fetchVotesTally = async () => {
        setLoading(true);
        try {
          const votesTally = await getVotesTally(proposal.id);
          setScores(votesTally);
          setTotalScore(
            votesTally.scores.reduce((acc, score) => acc + score, 0)
          );
        } catch (error) {
          console.error("Error fetching votes tally:", error);
        } finally {
          setLoading(false);
        }
      };
      fetchVotesTally();
    }
  }, [isOpen]);

  return (
    <>
      <Button
        className="text-black bg-[var(--foreground)]"
        variant="outline"
        onPress={() => setIsOpen(true)}
      >
        View Reasoning
      </Button>

      <Modal
        isOpen={isOpen}
        onOpenChange={() => setIsOpen(false)}
        className="font-inter border border-[var(--foreground)] rounded-lg max-w-[700px] h-[80vh]"
        onClose={() => setIsOpen(false)}
        closeButton={<div></div>}
      >
        <ModalContent>
          <>
            <ModalHeader className="flex flex-col border-b border-[var(--foreground)]">
              <div className="flex items-center gap-2 flex-wrap w-full ">
                <h3 className="text-2xl font-bold">{proposal.title}</h3>
                {proposal.decisions[0].status === "decided" && (
                  <Badge className="bg-[var(--foreground)] text-black gap-1">
                    <CheckCircle className="h-3 w-3" />
                    <span className="text-xs font-normal">
                      {
                        proposal.choices[
                          proposal.decisions[0].primaryDecision - 1
                        ]
                      }
                    </span>
                  </Badge>
                )}
              </div>
              <div className="font-normal text-sm mt-2">
                {proposal.shortDescription}
              </div>

              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mt-3 font-normal">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {proposal.endDate * 1000 - Date.now() > 0
                    ? formatDistance(proposal.endDate * 1000, Date.now()) +
                      " left"
                    : "Ended"}
                </div>
                <div className="flex items-center gap-1">
                  <Vote className="h-4 w-4" />
                  <span className="capitalize">{proposal.platform}</span>
                </div>
              </div>
            </ModalHeader>
            <ModalBody className="">
              <div className="h-full w-full overflow-y-auto relative hide-scroll">
                <div className="flex flex-col absolute pb-20 pt-3 ">
                  {proposal.decisions[0].status === "decided" && (
                    <>
                      <div className="flex">
                        <div className="mr-4 flex flex-col items-center">
                          <div className="flex h-10 w-10 p-2 items-center justify-center rounded-full bg-slate-100 border border-slate-200">
                            <Brain className="h-5 w-5 text-slate-700" />
                          </div>
                          <div className="mt-2 h-full w-0.5 bg-slate-200"></div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-base font-medium ">
                            Knowledge Base
                          </h3>
                          <p className="mt-1 text-sm text-white/80">
                            Rationale based on knowledge base
                          </p>
                          <div className="mt-3 rounded-lg border border-[var(--foreground)]  p-4">
                            <div className="text-sm text-white leading-relaxed">
                              {proposal.decisions[0].kbReason}
                            </div>
                          </div>
                        </div>
                      </div>

                      {proposal.decisions[0].communityReason && (
                        <div className="flex mt-5">
                          <div className="mr-4 flex flex-col items-center">
                            <div className="flex h-10 w-10 p-2 items-center justify-center rounded-full bg-blue-100 border border-blue-200">
                              <Users className="h-5 w-5 text-blue-700" />
                            </div>
                            <div className="mt-2 h-full w-0.5 bg-slate-200"></div>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-base font-medium ">
                              Community
                            </h3>
                            <p className="mt-1 text-sm text-white/80">
                              Rationale based on community feedback
                            </p>
                            <div className="mt-3 rounded-lg border border-[var(--foreground)] p-4">
                              <div className="text-sm text-white leading-relaxed">
                                {proposal.decisions[0].communityReason}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      <div className="flex mt-5">
                        <div className="mr-4 flex flex-col items-center">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 border border-purple-200">
                            <FileText className="h-5 w-5 text-purple-700" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-base font-medium ">
                            Final Rationale
                          </h3>
                          <p className="mt-1 text-sm text-white/80">
                            Rationale based on final decision
                          </p>
                          <div className="mt-3 rounded-lg border border-[var(--foreground)] p-4">
                            <div className="text-sm text-white leading-relaxed">
                              {proposal.decisions[0].primaryReason}
                            </div>
                          </div>

                          <div className="mt-3 italic opacity-60">
                            {proposal.endDate * 1000 - 86400000 - Date.now() > 0
                              ? "Melra will vote on this proposal in " +
                                formatDistance(
                                  Date.now() -
                                    proposal.endDate * 1000 -
                                    86400000,
                                  Date.now()
                                )
                              : proposal.decisions[0].executed === "executed"
                              ? "Melra has voted on this proposal"
                              : proposal.endDate * 1000 - Date.now() > 0
                              ? "Melra will vote on this proposal in " +
                                formatDistance(
                                  proposal.endDate * 1000,
                                  Date.now()
                                )
                              : "Melra has failed to vote on this proposal"}
                          </div>
                        </div>
                      </div>
                    </>
                  )}

                  <div className="mt-8 rounded-lg border border-[var(--foreground)] p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <FileSpreadsheet className="h-5 w-5" />
                      <h3 className="font-medium text-white">
                        Proposal Summary
                      </h3>
                    </div>
                    <div className="text-sm text-white">{proposal.summary}</div>
                  </div>

                  {loading && (
                    <div className="flex mt-5 items-center gap-2">
                      <Loader2 className="h-5 w-5 animate-spin" />

                      <div className="flex-1">
                        <h3 className="text-base font-medium ">
                          Loading Proposal Data ...
                        </h3>
                      </div>
                    </div>
                  )}

                  {!loading && proposal.platform && (
                    <div className="mt-8 rounded-lg border border-[var(--foreground)] p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <Vote className="h-5 w-5" />
                        <h3 className="font-medium text-white">Votes</h3>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                        {proposal.choices.map((choice, index) => (
                          <div
                            key={index}
                            className="rounded-lg p-3 text-center bg-[var(--foreground)] text-background"
                          >
                            {totalScore > 0 ? (
                              <div className="text-lg font-bold">
                                {(
                                  (scores.scores[index] / totalScore) *
                                  100
                                ).toFixed(2)}
                                %
                              </div>
                            ) : (
                              <div className="text-lg font-bold">0 %</div>
                            )}
                            <div className="text-xs font-medium">{choice}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex justify-end absolute bottom-0 right-0 bg-gradient-to-t from-background to-transparent w-full">
                <Button
                  variant="outline"
                  onPress={() => setIsOpen(false)}
                  className="text-[var(--foreground)] border border-[var(--foreground)] mb-4 mr-5 bg-background mt-10"
                >
                  Close
                </Button>
              </div>
            </ModalBody>
          </>
        </ModalContent>
      </Modal>
    </>
  );
}
