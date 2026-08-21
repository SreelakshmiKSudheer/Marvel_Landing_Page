import { Typography } from "../../atoms/Typography/Typography";
import type { SectionHeadingProps } from "./SectionHeading.types";

export const SectionHeading = ({
  title,
  description,
  centered = false,
}: SectionHeadingProps) => {
  return (
    <div className={`space-y-3 ${centered ? "text-center" : "text-left"}`}>
      <Typography variant="heading" ashtml="h2" className="text-3xl font-black text-marvel-white uppercase tracking-[1.2rem] sm:text-4xl lg:text-5xl">
        {title}
      </Typography>

      {description && (
        <Typography variant="body" ashtml="p" className="mx-auto max-w-2xl text-sm text-marvel-silver sm:text-base">
          {description}
        </Typography>
      )}
    </div>
  );
};