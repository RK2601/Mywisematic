import { Badge } from "@/components/ui/badge";

export const FeatureBadge = ({ text }: { text: string }) => (
  <Badge
    variant="outline"
    className="group hover:bg-brand hover:text-white transition-colors duration-300"
  >
    {text}
  </Badge>
);
