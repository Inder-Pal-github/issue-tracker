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
  const [loading, setIsLoading] = useState(false);

  const getIssues = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get("/api/issues");
      console.log(data);
      setIssues(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  };
  useEffect(() => {
    getIssues();
  }, []);
  return (
    <div>
      <Box className="flex justify-center items-center">
        {loading && <Spinner />}
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
