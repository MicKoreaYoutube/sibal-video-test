'use client'

import { TriangleDownIcon } from "@radix-ui/react-icons"
import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
  Calculator,
  Calendar,
  Smile,
  Menu,
  Search
} from "lucide-react"

import Link from "next/link"

import { siteConfig } from "@/config/site"

import { useState, useEffect } from "react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Input } from "@/components/ui/input"
import { MainNav } from "@/components/main-nav"

import fuseAPI from "fuse.js"

export function SiteHeader() {

  const [isLogin, changeLoginState] = useState(true)

  const [open, setOpen] = useState(false)

  let result
  let arrayResult: string[] = []
  const [sortedResult, setSortedResult] = useState(["test"])

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const data = ["Calendar", "Search Emoji", "Calculator", "Profile", "Billing", "Settings"]
  const fuse = new fuseAPI(data)

  return (
    <header className="bg-accent sticky top-0 z-40 w-full border-b font-RixInooAriDuriR">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="hidden flex-1 items-center justify-end space-x-4 md:flex">
          <CommandDialog open={open} onOpenChange={setOpen}>
            <div className="flex items-center border-b px-3">
              <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
              <Input placeholder="Search anything" className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none border-0 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
                onChange={(e)=>{
                  result = fuse.search(e.target.value)
                  result.forEach((item)=>{
                    arrayResult.push(item.item.toString())
                  })
                  setSortedResult(arrayResult)
                }} />
            </div>
            <ScrollArea className="h-[60vh]">
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                {/*<CommandGroup heading="dashboard" />
                {siteConfig.dashboardSidebarContent?.length ? (
                  siteConfig.dashboardSidebarContent?.map(
                    (item, index) => (
                      <>
                        {item.content?.length ? (
                          <CommandGroup key={index} heading={item.title}>
                            {item.content?.map(
                              (contentItem, contentIndex) => (
                                <CommandItem key={contentIndex}>
                                  <Link href={contentItem.href}>{contentItem.title}</Link>
                                  <CommandShortcut>{contentItem.shortcut}</CommandShortcut>
                                </CommandItem>
                              )
                            )}
                          </CommandGroup>
                        ) : (
                          <CommandGroup heading={item.title}>
                            <CommandItem>
                              <Link href={`/${item.href}`}>{item.title}</Link>
                              <CommandShortcut>{item.shortcut}</CommandShortcut>
                            </CommandItem>
                          </CommandGroup>
                        )}
                      </>
                    )
                  )
                ) : null}
                <CommandSeparator />
                <CommandGroup heading="Docs" />
                {siteConfig.docsSidebarContent?.length ? (
                  siteConfig.docsSidebarContent?.map(
                    (item, index) => (
                      <>
                        {item.content?.length ? (
                          <CommandGroup key={index} heading={item.title}>
                            {item.href ? (
                              <CommandItem>
                                <Link href={`/docs/${item.title}`}>{item.title}</Link>
                              </CommandItem>
                            ) : null}
                            {item.content?.map(
                              (contentItem, contentIndex) => (
                                <CommandItem key={contentIndex}>
                                  <Link href={`/docs/${item.title}/${contentItem.title}`}>{contentItem.title}</Link>
                                </CommandItem>
                              )
                            )}
                          </CommandGroup>
                        ) : (
                          <CommandGroup heading={item.title}>
                            <CommandItem>
                              <Link href={`/docs/${item.title}`}>{item.title}</Link>
                            </CommandItem>
                          </CommandGroup>
                        )}
                      </>
                    )
                  )
                ) : null}*/}
                <CommandGroup heading="Suggestions">
                  <CommandItem>
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>Calendar</span>
                  </CommandItem>
                  <CommandItem>
                    <Smile className="mr-2 h-4 w-4" />
                    <span>Search Emoji</span>
                  </CommandItem>
                  <CommandItem>
                    <Calculator className="mr-2 h-4 w-4" />
                    <span>Calculator</span>
                  </CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Settings">
                  <CommandItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                    <CommandShortcut>⌘P</CommandShortcut>
                  </CommandItem>
                  <CommandItem>
                    <CreditCard className="mr-2 h-4 w-4" />
                    <span>Billing</span>
                    <CommandShortcut>⌘B</CommandShortcut>
                  </CommandItem>
                  <CommandItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                    <CommandShortcut>⌘S</CommandShortcut>
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </ScrollArea>
          </CommandDialog>
          <Button className="w-52 bg-transparent shadow-sm flex justify-between"
            variant="outline"
            onClick={() => {
              setOpen(true)
            }}>
            <span>Search anything</span><span className="border border-input rounded-lg bg-background px-2 py-1">⌘K</span>
          </Button>
          {isLogin ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button>
                  <div className="flex">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    </Avatar>
                    <TriangleDownIcon className="block m-2 h-6 w-6" />
                  </div>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <CreditCard className="mr-2 h-4 w-4" />
                    <span>Billing</span>
                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                    <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Keyboard className="mr-2 h-4 w-4" />
                    <span>Keyboard shortcuts</span>
                    <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <Users className="mr-2 h-4 w-4" />
                    <span>Team</span>
                  </DropdownMenuItem>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                      <UserPlus className="mr-2 h-4 w-4" />
                      <span>Invite users</span>
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent>
                        <DropdownMenuItem>
                          <Mail className="mr-2 h-4 w-4" />
                          <span>Email</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <MessageSquare className="mr-2 h-4 w-4" />
                          <span>Message</span>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <PlusCircle className="mr-2 h-4 w-4" />
                          <span>More...</span>
                        </DropdownMenuItem>
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                  <DropdownMenuItem>
                    <Plus className="mr-2 h-4 w-4" />
                    <span>New Team</span>
                    <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Github className="mr-2 h-4 w-4" />
                  <span>GitHub</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <LifeBuoy className="mr-2 h-4 w-4" />
                  <span>Support</span>
                </DropdownMenuItem>
                <DropdownMenuItem disabled>
                  <Cloud className="mr-2 h-4 w-4" />
                  <span>API</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                  <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button asChild className="rounded-full" variant="outline">
              <Link href="/login">Login</Link>
            </Button>
          )}
        </div>
        <div className="flex flex-1 items-center justify-end md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Are you sure absolutely sure?</SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will permanently delete your account
                  and remove your data from our servers.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
