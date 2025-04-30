"use client";

import { Button } from "@/components/ui/button";

interface Props {
  issueId: string;
}

export default function IssueDeleteButton({ issueId }: Props) {
  const handleDelete = async () => {
    // TODO: Add server action or API call to delete the issue
    console.log("Delete issue", issueId);
  };

  return (
    <Button variant="destructive" size="sm" onClick={handleDelete}>
      Delete
    </Button>
  );
}
