interface DividerProps {
  className?: string;
}

export const Divider = ({ className = "" }: DividerProps) => {
  return (
    <div
      role="separator"
      className={`h-px w-full bg-marvel-silver/20 ${className}`}
    />
  );
}