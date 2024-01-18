import { CardAnimeCategories } from '@/components';
import { animeCategoriesData } from '@/data';

export const GridAnimeCategories = () => {
  return (
    <section className='grid grid-rows-2 gap-5 grid-flow-col overflow-x-scroll scrollbar-bottom pb-4'>
      {animeCategoriesData.map(({ category, image }) => {
        return (
          <CardAnimeCategories
            category={category}
            image={image}
            key={category}
          />
        );
      })}
    </section>
  );
};
