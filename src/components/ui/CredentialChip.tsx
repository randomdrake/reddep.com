interface CredentialChipProps {
  label: string;
  value: string;
}

export function CredentialChip({ label, value }: CredentialChipProps) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-surface px-4 py-2 text-sm shadow-sm transition-shadow duration-150 hover:shadow-md">
      <span className="font-semibold text-text-light">{label}</span>
      <span className="text-text-muted">{value}</span>
    </div>
  );
}
