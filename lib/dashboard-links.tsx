import { LayoutDashboardIcon, CircleUser, Settings } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface ItemLinks {
  title: string;
  label?: string;
  icon: LucideIcon;
}

export const SacHeadDashboardLink: ItemLinks[] = [
  {
    title: "Organisation",
    label: "",
    icon: Settings,
  },
  {
    title: "Dashboard",
    label: "118",
    icon: LayoutDashboardIcon,
  },
  {
    title: "Profile",
    label: "9",
    icon: CircleUser,
  },
  {
    title: "Settings",
    label: "",
    icon: Settings,
  },
];

export const StudentDashboardLink: ItemLinks[] = [
  {
    title: "student",
    label: "1",
    icon: LayoutDashboardIcon,
  },
  {
    title: "Profile",
    label: "9",
    icon: CircleUser,
  },
  {
    title: "Settings",
    label: "",
    icon: Settings,
  },
];

export const ClubAdminDashboardLinks: ItemLinks[] = [
  {
    title: "admin",
    label: "18",
    icon: LayoutDashboardIcon,
  },
  {
    title: "Profile",
    label: "9",
    icon: CircleUser,
  },
  {
    title: "Settings",
    label: "",
    icon: Settings,
  },
];
