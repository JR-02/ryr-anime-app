import { CardAnimeEpisode, GridSlider } from '@/components';
import { newEpisodeData } from '@/data';

export const GridAnimeEpisodes = () => {
  return (
    <GridSlider>
      {newEpisodeData.map(({ title, image, rating }) => (
        <CardAnimeEpisode
          title={title}
          image={image}
          rating={rating}
          key={title}
        />
      ))}
    </GridSlider>
  );
};
