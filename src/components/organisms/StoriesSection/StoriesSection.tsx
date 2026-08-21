import { ContentCard } from "../../molecules/ContentCard/ContentCard";
import { SectionHeading } from "../../molecules/SectionHeading/SectionHeading";

import { storyCategories } from "../../../data/story";

export const StoriesSection = () => {
  return (
    <section className="bg-marvel-black px-6 py-20 md:px-8 md:py-18">
      <div className="mx-auto max-w-360">
        <SectionHeading title="Choose Your Story" centered />


        <div className=" mt-10 px-10 flex flex-col gap-4 sm:flex-row lg:mt-14 h-100 lg:gap-5">
          {storyCategories.map((category) => (
            <div 
              key={category.href} 
              className="
                group/wrapper relative flex-1 overflow-hidden p-px 
                transition-[flex] duration-700 ease-in-out 
                lg:hover:flex-3 
                bg-linear-to-r from-marvel-silver-dark to-marvel-silver 
                shadow-lg shadow-marvel-silver/20 
                h-100 lg:h-full
              "
            >
              <ContentCard
                title={category.title}
                image={category.image}
                href={category.href}
                description={category.description}
                detail={category.detail}
                className="h-full w-full bg-marvel-black"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
