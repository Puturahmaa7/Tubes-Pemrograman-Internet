"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

type SidebarItemProps = {
  label: string;
  iconSrc: string;
  href: string;
};

export const SidebarItem = ({ label, iconSrc, href }: SidebarItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Button
      variant={isActive ? "sidebarOutline" : "sidebar"}
      className="h-[52px] justify-start w-full"
      asChild
    >
      <Link href={href} className="flex items-center w-full">
        <Image
          src={iconSrc}
          alt={label}
          width={34}
          height={34}
          className="object-contain"
        />
        <span className="ml-3 font-medium">{label}</span>
      </Link>
    </Button>
  );
};
