import Link from "next/link";
import React from "react";
import { buttonVariants } from "@/components/ui/button";
import { Button } from "@/components/ui/button";
const IssuePage = () => {
  return (
    <div className="flex items-center justify-between mt-4">
      <h1>List of Issues</h1>
      <Button>
        <Link href="/issues/create">Create Issue</Link>
      </Button>
    </div>
  );
};

export default IssuePage;
