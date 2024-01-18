import { CardAnimeEpisode } from '@/components';
import { newEpisodeData } from '@/data';

export const GridAnimeEpisodes = () => {
  return (
    <section className='grid gap-5 grid-flow-col overflow-x-scroll scrollbar-bottom pb-4'>
      {newEpisodeData.map(({ title, image, rating }) => (
        <CardAnimeEpisode
          title={title}
          image={image}
          rating={rating}
          key={title}
        />
      ))}
    </section>
  );
};
