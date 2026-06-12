import {
  BookOpen,
  Briefcase,
  FolderOpen,
  LayoutDashboard,
  LogOut,
  Mail,
  MessageSquare,
  Star,
  Bot,
} from "lucide-react";

export const ADMIN_SESSION_COOKIE = "wisematic_admin_session";

export const ADMIN_NAV = [
  {
    label: "Application",
    items: [
      { title: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
      { title: "Testimonials", href: "/admin/testimonials", icon: Star },
      { title: "Blogs", href: "/admin/blogs", icon: BookOpen },
    ],
  },
  {
    label: "Jobs",
    items: [
      { title: "Job Listing", href: "/admin/job-listing", icon: Briefcase },
      {
        title: "View Applications",
        href: "/admin/view-applications",
        icon: FolderOpen,
      },
    ],
  },
  {
    label: "Support",
    items: [
      {
        title: "Contact Us Submissions",
        href: "/admin/contact-admin",
        icon: Mail,
      },
      { title: "Newsletter", href: "/admin/newsletter-admin", icon: Mail },
      { title: "Chatbot", href: "/admin/chatbot", icon: Bot },
    ],
  },
] as const;

export const PROTECTED_ADMIN_PATHS = [
  "/admin/dashboard",
  "/admin/testimonials",
  "/admin/blogs",
  "/admin/job-listing",
  "/admin/view-applications",
  "/admin/contact-admin",
  "/admin/newsletter-admin",
  "/admin/chatbot",
];

export const LOGOUT_ICON = LogOut;
export const MESSAGE_ICON = MessageSquare;
