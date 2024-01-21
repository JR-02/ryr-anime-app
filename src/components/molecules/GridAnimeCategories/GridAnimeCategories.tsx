import { CardAnimeCategories, GridSlider } from '@/components';
import { animeCategoriesData } from '@/data';

export const GridAnimeCategories = () => {
  return (
    <GridSlider className='grid-rows-2'>
      {animeCategoriesData.map(({ category, image }) => {
        return (
          <CardAnimeCategories
            category={category}
            image={image}
            key={category}
          />
        );
      })}
    </GridSlider>
  );
};
