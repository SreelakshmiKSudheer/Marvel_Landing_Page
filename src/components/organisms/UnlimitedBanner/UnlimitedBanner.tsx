import { ArrowRight, BookOpen } from "lucide-react";
import { Typography } from "../../atoms/Typography/Typography";
import { Button } from "../../atoms/Button/Button";
import { Icon } from "../../atoms/Icon/Icon";
import type { UnlimitedBannerProps } from "./UnlimitedBanner.types";

export const UnlimitedBanner = ({
  title = "The Stories Never End.",
  description = "Thousands of stories are waiting beyond the screen.",
  image = "/images/story/comic.jpeg",
}: UnlimitedBannerProps) => {
  return (
    <section className="px-6 pb-20 sm:px-8 sm:pb-24 lg:px-12 lg:pb-32">
      <div className="relative mx-auto max-w-360 overflow-hidden border border-marvel-white/10">
        <img
          src={image}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-marvel-black via-marvel-black/85 to-marvel-black/40" />

        <div className="relative flex flex-col items-start justify-between gap-8 px-6 py-14 sm:px-10 sm:py-16 lg:flex-row lg:items-center lg:px-16 lg:py-20">
          <div className="max-w-xl">
            <Typography
              variant="heading"
              ashtml="h2"
              className="text-3xl font-black uppercase leading-[0.95] tracking-tight text-marvel-white sm:text-4xl lg:text-5xl"
            >
              {title}
            </Typography>

            <Typography variant="body" ashtml="p" className="mt-4 text-sm text-marvel-silver sm:text-base">
              {description}
            </Typography>

            <div className="mt-8">
              <Button variant="primary" size="lg">
                Explore Marvel Unlimited
                <Icon icon={ArrowRight} size={18} />
              </Button>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-3 self-center border-2 border-marvel-white/20 px-6 py-4 lg:px-8 lg:py-6">
            <Icon icon={BookOpen} size={28} className="text-marvel-red" />
            <span className="font-marvel-display text-2xl font-bold uppercase tracking-wide text-marvel-white sm:text-3xl lg:text-4xl">
              Marvel<span className="text-marvel-red"> Unlimited</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
