export type SiteConfig = typeof siteConfig

const siteConfig = {
  name: "Next.js Template",
  description:
    "A nextjs template by MicKoreaYoutube based on shadcn-ui",
  mainNav: [
    {
      title: "Home",
      mainLink: {
        logo: true,
        title: "",
        description: "",
        href: "/"
      },
      linkList: [
        {
          title: "11번 링크",
          description: "11번 설명",
          href: "/11"
        },
        {
          title: "12번 링크",
          description: "12번 설명",
          href: "/12"
        },
        {
          title: "13번 링크",
          description: "13번 설명",
          href: "/13"
        },
      ]
    },
    {
      title: "dashboard",
      linkList: [
        {
          title: "21번 링크",
          description: "21번 설명",
          href: "/21"
        },
        {
          title: "22번 링크",
          description: "22번 설명",
          href: "/22"
        },
        {
          title: "23번 링크",
          description: "23번 설명",
          href: "/23"
        },
        {
          title: "24번 링크",
          description: "24번 설명",
          href: "/24"
        },
        {
          title: "25번 링크",
          description: "25번 설명",
          href: "/25"
        },
        {
          title: "26번 링크",
          description: "26번 설명",
          href: "/26"
        },
      ]
    },
    {
      title: "documenation",
      href: "/docs"
    }
  ],
  footerContent: [
    {
      title: "1번줄",
      content: [
        {
          title: "1번 내용",
          href: "/11"
        },
        {
          title: "2번 내용",
          href: "/12"
        },
        {
          title: "3번 내용",
          href: "/13"
        }
      ]
    },
    {
      title: "2번줄",
      content: [
        {
          title: "1번 내용",
          href: "/21"
        },
        {
          title: "2번 내용",
          href: "/22"
        },
        {
          title: "3번 내용",
          href: "/23"
        }
      ]
    },
    {
      title: "3번줄",
      content: [
        {
          title: "1번 내용",
          href: "/31"
        },
        {
          title: "2번 내용",
          href: "/32"
        },
        {
          title: "3번 내용",
          href: "/33"
        }
      ]
    },
  ],
  FamilySurvice: [
    {
      name: "1번 서비스",
      href: "/1s"
    },
    {
      name: "2번 서비스",
      href: "/2s"
    },
    {
      name: "3번 서비스",
      href: "/3s"
    }
  ],
  links: {
    shadcnTwitter: "https://twitter.com/shadcn",
    shadcnGithub: "https://github.com/shadcn/ui",
    shadcnuiDocs: "https://ui.shadcn.com",
    micInstagram: "https://instagram.com/leejunsibal",
    micGithub: "https://github.com/MicKoreaYoutube/mic-next-template"
  },
  dashboardSidebarContent: [
    {
      title: "1번줄",
      content: [
        {
          title: "11번 내용",
          href: "/11",
          shortcut: ""
        },
        {
          title: "12번 내용",
          href: "/12"
        },
        {
          title: "13번 내용",
          href: "/13"
        }
      ]
    },
    {
      title: "2번줄",
      content: [
        {
          title: "21번 내용",
          href: "/21"
        },
        {
          title: "22번 내용",
          href: "/22"
        },
        {
          title: "23번 내용",
          href: "/23"
        }
      ]
    },
    {
      title: "3번줄",
      content: [
        {
          title: "31번 내용",
          href: "/31"
        },
        {
          title: "32번 내용",
          href: "/32"
        },
        {
          title: "33번 내용",
          href: "/33"
        }
      ]
    },
    {
      title: "4번줄",
      href: "/4",
      shortcut: ""
    },
    {
      title: "5번줄",
      content: [
        {
          title: "51번 내용",
          href: "/51"
        },
        {
          title: "52번 내용",
          href: "/52"
        },
        {
          title: "53번 내용",
          href: "/53"
        }
      ]
    },
  ],
  docsSidebarContent: [
    {
      title: "1번줄",
      content: [
        {
          title: "11번 내용",
          doc: "<p className='text-2xl'>시발</p>",
          chapter: ["test1", "test2", "test3"]
        },
        {
          title: "12번 내용",
        },
        {
          title: "13번 내용",
        }
      ]
    },
    {
      title: "2번줄",
      href: true,
      content: [
        {
          title: "21번 내용",
        },
        {
          title: "22번 내용",
        },
        {
          title: "23번 내용",
        }
      ]
    },
    {
      title: "3번줄",
      content: [
        {
          title: "31번 내용",
        },
        {
          title: "32번 내용",
        },
        {
          title: "33번 내용",
          doc: "와 개 좆같다 ㄹㅇ"
        }
      ]
    },
    {
      title: "4번줄",
      href: true,
      doc: "<div className='h-full bg-red-500 text-2xl font-KBO-Dia-Gothic_bold' id='#chapter-test1'>무적 LG!</div>",
      chapter: ["test1", "test2", "test3"]
    },
    {
      title: "5번줄",
      content: [
        {
          title: "51번 내용",
        },
        {
          title: "52번 내용",
        },
        {
          title: "53번 내용",
        }
      ]
    },
  ],
}
if (siteConfig.mainNav[0].mainLink) {
  siteConfig.mainNav[0].mainLink.title = siteConfig.name
  siteConfig.mainNav[0].mainLink.description = siteConfig.description
}

export { siteConfig }

