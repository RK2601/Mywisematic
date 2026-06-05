import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function LoginForm() {
  return (
    <Card className="overflow-hidden">
      <CardContent className="grid p-0 md:grid-cols-2">
        <div className="flex flex-col justify-between p-6 md:p-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">
              Welcome to Learning Center
            </h2>
            <p className="text-muted-foreground mb-6">
              If you are not able to login, please contact the admin for
              credentials.
              <br />
              admin@wisematic.ca
            </p>
          </div>
          <div>
            <p className="text-muted-foreground">
              Check out our blogs and articles for public content.
            </p>
            <Link href="/blogs" passHref>
              <Button className="w-fit mt-6 rounded-full" variant="outline">
                Blogs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
        <form className="p-6 md:p-8">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col items-center text-center">
              <h1 className="text-2xl font-bold">Login</h1>
              <p className="text-balance text-muted-foreground">
                Enter your credentials to access your account
              </p>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="email" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="password"
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
