import Link from "next/link";
import React from "react";

import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import IssueStatusBadge from "@/components/general/IssueStatusBadge";
import IssueAction from "./IssueAction";
import { Status } from "@/lib/generated/prisma";
const IssuePage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const params = await searchParams;
  const statusParam = params.status;
  const validStatuses: Status[] = ["OPEN", "IN_PROGRESS", "CLOSED"];
  const filterStatus = validStatuses.includes(statusParam as Status)
    ? (statusParam as Status)
    : undefined;

  const issues = await prisma.issue.findMany({
    where: { status: filterStatus },
  });

  if (!issues) notFound();
  return (
    <div className="mt-4">
      <IssueAction />
      <h1>List of Issues</h1>

      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>IssueDate</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {issues.map((issue) => (
              <TableRow key={issue.id}>
                <TableCell>
                  <Link href={`/issues/${issue.id}`}>{issue.title}</Link>
                </TableCell>
                <TableCell>
                  <IssueStatusBadge status={issue.status} />
                </TableCell>
                <TableCell>{issue.createdAt.toLocaleString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default IssuePage;
