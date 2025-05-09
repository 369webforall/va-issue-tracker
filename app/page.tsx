import React from "react";
import LatestIssue from "./LatestIssue";
import IssueSummary from "./IssueSummary";
import IssueChart from "./IssueChart";
import { prisma } from "@/lib/prisma";
const HomePage = async () => {
  const open = await prisma.issue.count({
    where: {
      status: "OPEN",
    },
  });
  const inprogress = await prisma.issue.count({
    where: {
      status: "IN_PROGRESS",
    },
  });
  const closed = await prisma.issue.count({
    where: {
      status: "CLOSED",
    },
  });
  return (
    <div className="my-6 flex items-center gap-6">
      <div className="flex flex-col gap-6">
        <IssueSummary open={open} inprogress={inprogress} closed={closed} />
        <IssueChart open={open} inprogress={inprogress} closed={closed} />
      </div>
      <LatestIssue />
    </div>
  );
};

export default HomePage;
