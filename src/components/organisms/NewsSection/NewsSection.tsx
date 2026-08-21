import { NewsCard } from "../../molecules/NewsCard/NewsCard";
import { SectionHeading } from "../../molecules/SectionHeading/SectionHeading";
import { Button } from "../../atoms/Button/Button";
import { featuredNews, newsGrid } from "../../../data/news";
import type { NewsSectionProps } from "./NewsSection.types";

export const NewsSection = ({ title = "Now in the Marvel Universe" }: NewsSectionProps) => {
  return (
    <section className="bg-marvel-black px-6 py-20 md:px-8 md:py-18">
      <div className="mx-auto max-w-360">
        <SectionHeading title={title} centered />

        <div className="mt-12 grid grid-cols-1 gap-4 lg:mt-14 lg:grid-cols-2 lg:gap-5">
          {/* Featured story */}
          <div className="h-80 lg:h-130">
            <NewsCard
              category={featuredNews.category}
              title={featuredNews.title}
              description={featuredNews.description}
              image={featuredNews.image}
              href={featuredNews.href}
              variant="featured"
              className="h-full"
            />
          </div>

          {/* News grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-5">
            {newsGrid.map((item) => (
              <div key={item.id} className="h-[220px] lg:h-[248px]">
                <NewsCard
                  category={item.category}
                  title={item.title}
                  description={item.description}
                  image={item.image}
                  href={item.href}
                  className="h-full"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex justify-center lg:mt-12">
          <Button variant="ghost" size="md">
            View All News &amp; Updates
          </Button>
        </div>
      </div>
    </section>
  );
};
