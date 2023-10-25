"use client";
import React, { Key, useEffect, useState } from "react";
import { Box, Button, Text } from "@radix-ui/themes";
import Link from "next/link";
import axios from "axios";
import Spinner from "../components/Spinner";
import Issue from "../components/Issue";

 export interface I_Issue {
  id: number;
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  status: "OPEN" | "CLOSED" | "IN_PROGRESS";
}

const IssuesPage = () => {
  const [issues, setIssues] = useState([]);

  const getIssues = async () => {
    try {
      const { data } = await axios.get("/api/issues");
      console.log(data);
      setIssues(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getIssues();
  }, []);
  return (
    <div>
      <Box className="flex justify-center items-center">
        {!issues && <Spinner />}
      </Box>
      {issues &&
        issues?.map((issue: I_Issue, i) => {
          return <Issue key={i} {...issue} />;
        })}
      <Button>
        <Link href="/issues/new">New Issue</Link>
      </Button>
    </div>
  );
};

export default IssuesPage;
