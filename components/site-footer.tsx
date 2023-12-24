'use client';

import Link from "next/link"

import { siteConfig } from "@/config/site"

import { buttonVariants, Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Icons } from "@/components/icons"
import { ThemeToggle } from "@/components/theme-toggle"

import { ChevronDown } from "lucide-react"

import { useState } from "react"
import { useInView } from "react-intersection-observer"

export function SiteFooter() {

  const [isOpen, changeOpenState] = useState(false)
  const [FamilySurviceRef, FamilySurviceRefInView] = useInView({
    threshold: 1
  })

  return (
    <footer className="bg-accent z-40 w-full border-t font-RixInooAriDuriR">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center space-x-2">
              <Icons.logo className="h-6 w-6" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">{siteConfig.name}</span>
            </Link>
            <p className="mt-4 max-w-[400px] text-muted-foreground">
              {siteConfig.description}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-24 sm:grid-cols-3">
            {siteConfig.footerContent?.length ? (
              <>
                {siteConfig.footerContent?.map(
                  (item, index) =>
                    <div key={index}>
                      <h2 className="mb-6 text-2xl font-semibold text-foreground uppercase">{item.title}</h2>
                      <ul className="text-muted-foreground font-medium">
                        {item.content?.length ? (
                          <>
                            {item.content?.map(
                              (contentItem, contentIndex) =>
                                <li className="mb-4" key={contentIndex}>
                                  <Link href={contentItem.href} className="hover:underline">{contentItem.title}</Link>
                                </li>
                            )}
                          </>
                        ) : null}
                      </ul>
                    </div>
                )}
              </>
            ) : null}
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-muted-foreground sm:text-center">© 2023 <Link href="/" className="hover:underline">{siteConfig.name}™</Link>. All Rights Reserved.</span>
          <nav className="flex items-center space-x-1">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">패밀리 서비스&nbsp;<ChevronDown className={`h-4 w-4 shrink-0 transition-transform duration-200 ${FamilySurviceRefInView ? "rotate-180" : null}`} /></Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-1 font-RixInooAriDuriR" ref={FamilySurviceRef}>
                <DropdownMenuGroup>
                  <DropdownMenuLabel>패밀리 서비스</DropdownMenuLabel>
                  {siteConfig.FamilySurvice?. length ? (
                      siteConfig.FamilySurvice?.map(
                        (item, index) => 
                        <Link key={index} href={item.href}>
                          <DropdownMenuItem>
                            <span>{item.name}</span>
                          </DropdownMenuItem>
                        </Link>
                      )
                    ) : null}
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link
              href={siteConfig.links.micGithub}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.gitHub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.micInstagram}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </div>
            </Link>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </footer>
  )
}