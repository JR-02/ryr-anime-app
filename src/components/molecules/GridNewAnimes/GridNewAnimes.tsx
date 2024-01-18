import { CardAnimePoster } from '@/components';
import { newAnimeData } from '@/data';

export const GridNewAnimes = () => {
  return (
    <section className='grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-5 justify-items-center'>
      {newAnimeData.map(({ title, image, rating }) => (
        <CardAnimePoster
          title={title}
          image={image}
          rating={rating}
          key={title}
          premiere
        />
      ))}
    </section>
  );
};
