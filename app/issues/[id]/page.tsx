import React from "react";
import { prisma } from "@/lib/prisma";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import IssueStatusBadge from "@/components/general/IssueStatusBadge";
import { format } from "date-fns";

// Fetch issue from database
async function getIssue(id: string) {
  const issue = await prisma.issue.findUnique({
    where: {
      id,
    },
  });
  if (!issue) {
    throw new Error("Issue not found");
  }

  return issue;
}

const IssueDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const issue = await getIssue(id);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle>{issue.title}</CardTitle>
              <CardDescription className="mt-2">
                {issue.description}
              </CardDescription>
            </div>
            <IssueStatusBadge status={issue.status} />
          </div>
        </CardHeader>

        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            Created At:{" "}
            {format(new Date(issue.createdAt), "MMMM d, yyyy HH:mm")}
          </p>
          <div className="flex gap-4">
            <Button variant="default" size="sm">
              Update
            </Button>
            <Button variant="destructive" size="sm">
              Delete
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default IssueDetailsPage;
