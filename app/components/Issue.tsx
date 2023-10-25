import React from "react";
import { getFormattedDate } from "../utils/dateFormatter";
import { I_Issue } from "../issues/page";
import { Badge, Heading } from "@radix-ui/themes";

const Issue = ({
  title,
  description,
  status,
  createdAt,
  updatedAt,
}: I_Issue) => {
  return (
    <div className="border-blue-300 border-2 rounded-md flex flex-col justify-evenly items-stretch p-4 max-w-lg w-full max-h-80 h-60 m-4">
      <div className="flex justify-between">
        <Heading as="h4">{title}</Heading>
        <Badge
          color={
            status === "OPEN"
              ? "green"
              : status === "CLOSED"
              ? "blue"
              : "orange"
          }
          radius="medium"
          variant="soft"
        >
          {status}
        </Badge>
      </div>
      <p>{description}</p>
      <div className="flex justify-between px-4">
        <Badge variant="outline">CreatedAt: {getFormattedDate(createdAt)}</Badge>
        <Badge variant="outline">UpdatedAt:{getFormattedDate(updatedAt)}</Badge>
      </div>
    </div>
  );
};

export default Issue;
