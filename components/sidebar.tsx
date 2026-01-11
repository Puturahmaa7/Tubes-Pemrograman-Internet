"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

import { ClerkLoading, ClerkLoaded, UserButton } from "@clerk/nextjs";
import { Loader, Heart, Star, ShoppingCart } from "lucide-react";

import { cn } from "@/lib/utils";
import { SidebarItem } from "./sidebar-item";
import { useUser } from "@/app/context/UserContext";

type SidebarProps = {
  className?: string;
};

export const Sidebar = ({ className }: SidebarProps) => {
  const { userData, isLoading, refreshUserData } = useUser();
  const [showLifeDetail, setShowLifeDetail] = useState(false);
  const [localLoading, setLocalLoading] = useState(true);

  const formatTimeRemaining = () => {
    if (!userData.nextLifeAt) return null;

    try {
      const nextLife = new Date(userData.nextLifeAt).getTime();
      const now = new Date().getTime();
      const diff = nextLife - now;

      if (diff <= 0) return "Siap!";

      const minutes = Math.floor(diff / 60000);
      const seconds = Math.floor((diff % 60000) / 1000);

      return `${minutes}:${seconds.toString().padStart(2, "0")}`;
    } catch (error) {
      return null;
    }
  };

  useEffect(() => {
    setLocalLoading(false);

    const handleUserDataUpdated = (event: CustomEvent) => {
      console.log("Sidebar: Received userDataUpdated event", event.detail);
      refreshUserData();
    };

    window.addEventListener(
      "userDataUpdated",
      handleUserDataUpdated as EventListener
    );

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        refreshUserData();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    const interval = setInterval(() => {
      refreshUserData();
    }, 30000);

    return () => {
      clearInterval(interval);
      window.removeEventListener(
        "userDataUpdated",
        handleUserDataUpdated as EventListener
      );
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [refreshUserData]);

  const displayLoading = localLoading || isLoading;

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 z-40 h-screen w-[260px] bg-white border-r border-blue-100 shadow-sm flex flex-col",
        className
      )}
    >
      <div className="flex-shrink-0">
        <Link href="/learn">
          <div className="flex justify-center py-6 border-b border-blue-100 hover:bg-blue-50/50 transition-colors">
            <div className="relative h-14 w-36">
              <Image
                src="/images/Logo.png"
                alt="ABC Fun Learn"
                fill
                className="object-contain"
                sizes="144px"
                priority
              />
            </div>
          </div>
        </Link>
      </div>

      <div className="flex-shrink-0 px-3 py-3 border-b border-blue-100">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between bg-gradient-to-r from-amber-50 to-yellow-50 px-3 py-2 rounded-lg border border-amber-200 hover:from-amber-100 hover:to-yellow-100 transition-all hover:shadow-sm group">
            <div className="flex items-center gap-2">
              <div className="bg-amber-100 p-1.5 rounded-md group-hover:bg-amber-200 transition-colors">
                <Star className="h-4 w-4 text-amber-600" />
              </div>
              <div>
                <p className="text-[10px] text-gray-500">Poin</p>
                {displayLoading ? (
                  <div className="h-4 w-12 bg-gray-200 rounded animate-pulse"></div>
                ) : (
                  <p className="font-bold text-sm text-amber-700">
                    {userData.points.toLocaleString()}
                  </p>
                )}
              </div>
            </div>
            {userData.points >= 1000 && (
              <span className="text-[10px] bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded animate-pulse">
                🔥 Hot!
              </span>
            )}
          </div>

          <div
            className="relative"
            onMouseEnter={() => setShowLifeDetail(true)}
            onMouseLeave={() => setShowLifeDetail(false)}
          >
            <Link
              href="/shop"
              className="flex items-center justify-between bg-gradient-to-r from-red-50 to-pink-50 px-3 py-2 rounded-lg border border-red-200 hover:from-red-100 hover:to-pink-100 transition-all hover:shadow-sm group"
            >
              <div className="flex items-center gap-2">
                <div className="bg-red-100 p-1.5 rounded-md group-hover:bg-red-200 transition-colors">
                  <Heart className="h-4 w-4 text-red-600" fill="#dc2626" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500">Nyawa</p>
                  {displayLoading ? (
                    <div className="h-4 w-12 bg-gray-200 rounded animate-pulse"></div>
                  ) : (
                    <p className="font-bold text-sm text-red-700">
                      {`${userData.lives}/5`}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex items-center">
                {!displayLoading &&
                  userData.lives < 5 &&
                  userData.nextLifeAt && (
                    <span className="text-[10px] bg-red-100 text-red-700 px-1.5 py-0.5 rounded mr-1 animate-pulse">
                      {formatTimeRemaining()}
                    </span>
                  )}
                <ShoppingCart className="h-3.5 w-3.5 text-red-500 group-hover:text-red-600 transition-colors" />
              </div>
            </Link>

            {showLifeDetail && !displayLoading && (
              <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 bg-white p-3 rounded-lg shadow-lg border border-red-100 w-48 z-50">
                <div className="text-xs text-gray-600 mb-2 font-semibold">
                  Status Nyawa
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between">
                    <span className="text-xs text-gray-500">Saat ini:</span>
                    <span className="text-xs font-bold text-red-600">
                      {userData.lives}/5
                    </span>
                  </div>
                  {userData.lives < 5 && userData.nextLifeAt && (
                    <div className="flex justify-between">
                      <span className="text-xs text-gray-500">
                        Nyawa berikutnya:
                      </span>
                      <span className="text-xs font-bold text-green-600">
                        {formatTimeRemaining()}
                      </span>
                    </div>
                  )}
                  <div className="text-xs text-gray-500 mt-2">
                    Klik untuk membeli nyawa di toko
                  </div>
                </div>
                <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-white transform rotate-45 border-l border-t border-red-100"></div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto py-4">
        <nav className="flex flex-col gap-2 px-4">
          <SidebarItem
            label="Peringkat"
            href="/leaderboard"
            iconSrc="/images/Leaderboard.png"
          />
          <SidebarItem
            label="Belajar"
            href="/learn"
            iconSrc="/images/Learn.png"
          />
          <SidebarItem label="Kuis" href="/quiz" iconSrc="/images/Quiz.png" />
          <SidebarItem label="Toko" href="/shop" iconSrc="/images/Tokoo.png" />
        </nav>
      </div>
      <div className="flex-shrink-0 px-4 py-6 border-t border-blue-100">
        <ClerkLoading>
          <div className="flex justify-center">
            <Loader className="h-5 w-5 animate-spin text-blue-400" />
          </div>
        </ClerkLoading>

        <ClerkLoaded>
          <div className="flex justify-center">
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  avatarBox: "h-10 w-10",
                  userButtonPopoverCard:
                    "rounded-2xl shadow-md border border-blue-100",
                },
              }}
            />
          </div>
        </ClerkLoaded>
      </div>
    </aside>
  );
};
