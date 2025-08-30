"use client";

import { User } from "@/types/user";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./button";

type RecommendationItemProps = {
  user: User;
};

export const RecommendationItem = ({
  user,
}: RecommendationItemProps) => {
  const [following, setFollowing] = useState(false);

  const handleFollowButton = () => {
    setFollowing(true);
  };

  return (
    <div className="flex items-center">
      <div className="size-10 mr-2 rounded-full overflow-hidden">
        <Link href={`/${user.slug}`}>
          <img
            src={user.avatar}
            alt={user.name}
            className="size-full"
          />
        </Link>
      </div>
      <div className="flex-1 overflow-hidden">
        <Link
          href={`/${user.slug}`}
          className="block truncate"
        >
          {user.name}
        </Link>
        <div className="truncate text-sm text-gray-400">
          @{user.slug}
        </div>
      </div>
      <div className="pl-2 w-20">
        {!following && (
          <Button
            label="Seguir"
            onClick={handleFollowButton}
            size={3}
          />
        )}
      </div>
    </div>
  );
};

export const RecommendationItemSkeleton = () => {
  return (
    <div className="flex items-center">
      <div className="size-10 mr-2 rounded-full overflow-hidden bg-gray-600 animate-pulse" />
      <div className="flex-1 overflow-hidden">
        <div className="h-4 bg-gray-600 rounded w-3/4 mb-1 animate-pulse"></div>
        <div className="h-3 bg-gray-600 rounded w-1/2 animate-pulse"></div>
      </div>
      <div className="pl-2 w-20">
        <div className="h-8 bg-gray-600 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};
