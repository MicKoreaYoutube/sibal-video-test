'use client'

import { siteConfig } from "@/config/site"

import { DashboardSidebar } from "@/components/sidebar"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <>
      <div className="relative flex flex-row">
        <DashboardSidebar items={siteConfig.dashboardSidebarContent} />
        <div>{children}</div>
      </div>
    </>
  )
}
