"use client";
import * as React from "react";

import type { User } from "@prisma/client";
import { cn } from "@/lib/utils";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsTrigger, TabsList, TabsContent } from "../ui/tabs";
import { Separator } from "../ui/separator";

import { Nav } from "./nav";
import {
  SacHeadDashboardLink,
  StudentDashboardLink,
  ClubAdminDashboardLinks,
} from "@/lib/dashboard-links";

import SacHeadProfile from "../sac-head/menu/profile";
import OrganisationPage from "../organisation";

interface LayoutProps {
  user: User;
  defaultLayout: number[] | undefined;
  defaultCollapsed?: boolean;
  navCollapsedSize: number;
  currentPanel: string;
}

export function ClubHeadLayout({
  user,
  defaultLayout = [30, 70],
  defaultCollapsed = false,
  navCollapsedSize,
  currentPanel,
}: LayoutProps) {
  const [isCollapsed, setIsCollapsed] = React.useState(defaultCollapsed);

  return (
    <TooltipProvider delayDuration={0}>
      <ResizablePanelGroup
        direction="horizontal"
        onLayout={(sizes: number[]) => {
          document.cookie = `react-resizable-panels:layout:mail=${JSON.stringify(
            sizes,
          )}`;
        }}
        className="h-full min-h-screen items-stretch"
      >
        <ResizablePanel
          defaultSize={defaultLayout[0]}
          collapsedSize={navCollapsedSize}
          collapsible={true}
          minSize={15}
          maxSize={20}
          onCollapse={() => {
            setIsCollapsed(true);
            document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
              true,
            )}`;
          }}
          onResize={() => {
            setIsCollapsed(false);
            document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
              false,
            )}`;
          }}
          className={cn(
            isCollapsed &&
              "min-w-[50px] transition-all duration-300 ease-in-out",
            "flex flex-col",
          )}
        >
          {isCollapsed ? (
            <h1 className="p-3 text-2xl font-bold italic">CL</h1>
          ) : (
            <h1 className="px-4 py-3 text-2xl font-bold italic">CampusLink</h1>
          )}

          <Nav
            className="my-2"
            isCollapsed={isCollapsed}
            currentPanel={currentPanel}
            links={
              user.role === "SACHEAD"
                ? SacHeadDashboardLink
                : user.role === "STUDENT"
                  ? StudentDashboardLink
                  : ClubAdminDashboardLinks
            }
          />
          <div
            className={cn(
              "flex h-[52px] items-center justify-center border-t",
              isCollapsed ? "h-[52px]" : "px-2 pl-4",
            )}
          >
            <Avatar className="h-8 w-8">
              <AvatarImage src={user?.image || ""} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            {!isCollapsed && <div className="w-full pl-2">{user.email}</div>}
          </div>
        </ResizablePanel>

        <ResizableHandle withHandle />

        <ResizablePanel defaultSize={defaultLayout[1]} minSize={30}>
          {/* <Tabs defaultValue="all">
            <div className="flex items-center px-4 py-2">
              <h1 className="text-xl font-bold">Sac Head</h1>
              <TabsList className="ml-auto">
                <TabsTrigger
                  value="all"
                  className="text-zinc-600 dark:text-zinc-200"
                >
                  All mail
                </TabsTrigger>
                <TabsTrigger
                  value="unread"
                  className="text-zinc-600 dark:text-zinc-200"
                >
                  Unread
                </TabsTrigger>
              </TabsList>
            </div>
          </Tabs> */}
          {/* <Separator /> */}
          <div className="max-h-svh overflow-y-scroll">
            {currentPanel === "profile" ? (
              <SacHeadProfile user={user} />
            ) : (
              <OrganisationPage
                organisationId={user.organisationId as string}
              />
            )}
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </TooltipProvider>
  );
}
