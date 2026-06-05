export const StatBadge = ({
  value,
  label,
}: {
  value: string;
  label: string;
}) => (
  <div className="flex flex-col items-center p-4 bg-muted/30 rounded-lg">
    <span className="text-2xl font-bold text-brand">{value}</span>
    <span className="text-sm text-muted-foreground">{label}</span>
  </div>
);
