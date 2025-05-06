"use client";
import React from "react";

import { useQuery } from "@tanstack/react-query";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { User } from "@/lib/generated/prisma";

const AssigneeSelect = () => {
  const { data, isLoading, error } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("/api/user");
      if (!res.ok) throw new Error("Failed to fetch");
      return res.json();
    },
    staleTime: 60 * 1000, // data is cached till 60 seconds
    retry: 3,
  });
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading users</p>;
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="User" />
      </SelectTrigger>
      <SelectContent>
        {data?.map((user: User) => (
          <SelectItem key={user.id} value={user.id}>
            {user.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default AssigneeSelect;
