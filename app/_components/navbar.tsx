import Navigation from "@/components/ui/navigation";
import { Button } from "@/components//ui/button";
import {
  NavbarCenter,
  Navbar as NavbarComponent,
  NavbarLeft,
  NavbarRight,
} from "@/components/ui/navbar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 -mb-4 px-4 pb-4">
      <div className="fade-bottom absolute left-0 h-24 w-full bg-background/15 backdrop-blur-lg"></div>
      <div className="relative mx-auto max-w-container">
        <NavbarComponent>
          <NavbarLeft>
            <a href="/" className="flex items-center gap-2 text-xl font-bold">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wisematic-FN7FRGx6AadRqwCwc6FXXsHM9GVNFO.png"
                alt="WiseMatic Logo"
                className="h-8 w-8 object-contain"
              />
              WiseMatic
            </a>
          </NavbarLeft>
          <NavbarCenter>
            <Navigation />
          </NavbarCenter>
          <NavbarRight>
            <a href="/blogs" className="hidden text-sm md:block font-semibold">
              Blogs
            </a>
            <Button variant="default" asChild className="hidden md:inline-flex">
              <a href="/learning-center">Learning Center</a>
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="shrink-0 md:hidden"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="grid gap-6 text-lg font-medium">
                  <a
                    href="/"
                    className="flex items-center gap-2 text-xl font-bold"
                  >
                    <span>WiseMatic</span>
                  </a>
                  <a
                    href="/about-us"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    About Us
                  </a>
                  <a
                    href="/services"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Services
                  </a>
                  <a
                    href="/careers"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Careers
                  </a>
                  <a
                    href="/contact-us"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Contact Us
                  </a>
                  <a
                    href="/blogs"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Blogs
                  </a>
                  <a
                    href="/learning-center"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Learning Center
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </NavbarRight>
        </NavbarComponent>
      </div>
    </header>
  );
}
