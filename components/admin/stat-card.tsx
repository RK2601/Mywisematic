import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

type StatCardProps = {
  title: string;
  value: number | string;
  icon: LucideIcon;
};

export function StatCard({ title, value, icon: Icon }: StatCardProps) {
  return (
    <Card className="border-white/10 bg-[#12121a]/80 backdrop-blur-sm">
      <CardContent className="flex items-start gap-4 p-6">
        <div className="rounded-lg bg-[#9E6DD2]/20 p-3">
          <Icon className="h-5 w-5 text-[#9E6DD2]" />
        </div>
        <div>
          <p className="text-sm text-zinc-400">{title}</p>
          <p className="mt-1 text-3xl font-bold text-white">{value}</p>
        </div>
      </CardContent>
    </Card>
  );
}
