import React, { useState } from "react";
import { getFormattedDate } from "../utils/dateFormatter";
import { I_Issue } from "../issues/page";
import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  Popover,
  TextArea,
} from "@radix-ui/themes";

const Issue = ({
  title,
  description,
  status,
  createdAt,
  updatedAt,
}: I_Issue) => {
  const [comment, setComment] = useState("");
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
      <div>
        <Popover.Root>
          <Popover.Trigger>
            <Button>Comment📝</Button>
          </Popover.Trigger>
          <Popover.Content style={{ width: 360 }}>
            <Flex direction="column" gap="3">
                <TextArea
                  placeholder="Write a comment..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                ></TextArea>
              <Popover.Close>
                <Button size="1">Comment</Button>
              </Popover.Close>
            </Flex>
          </Popover.Content>
        </Popover.Root>
      </div>
      <div className="flex justify-between">
        <Badge variant="outline">
          CreatedAt: {getFormattedDate(createdAt)}
        </Badge>
        <Badge variant="outline">UpdatedAt:{getFormattedDate(updatedAt)}</Badge>
      </div>
    </div>
  );
};

export default Issue;
