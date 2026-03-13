"use client";
import { ExpandableTabs } from "@/components/ui/expandable-tabs";
import {
  UserIcon,
  BriefcaseIcon,
  StarIcon,
  MessageCircleIcon,
  FolderIcon
} from "lucide-react";

const tabs = [
  { title: "About", icon: UserIcon },
  { title: "Services", icon: BriefcaseIcon },
  { title: "Work", icon: FolderIcon },
  { title: "Highlights", icon: StarIcon },
  { title: "Contact", icon: MessageCircleIcon },
];

export function MobileNav() {
  const handleChange = (index: number | null) => {
    if (index === null) return;
    const routes = ["#about", "#services", "#work", "#highlights", "#contact"];
    window.location.href = routes[index];
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[5000] lg:hidden">
      <ExpandableTabs
        tabs={tabs}
        onChange={handleChange}
      />
    </div>
  );
}
