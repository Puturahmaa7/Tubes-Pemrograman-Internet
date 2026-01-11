"use client";

import { useEffect } from "react";

export default function AutoRefreshLeaderboard({
  interval = 30000,
  onRefresh,
}: {
  interval?: number;
  onRefresh: () => void;
}) {
  useEffect(() => {
    const timer = setInterval(onRefresh, interval);
    return () => clearInterval(timer);
  }, [interval, onRefresh]);

  return null;
}
