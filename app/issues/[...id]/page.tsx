import React from "react";

const IssueDetailsPage = async ({ params }: { params: { id: string } }) => {
  return <div>IssueDetailsPage {params.id}</div>;
};

export default IssueDetailsPage;
