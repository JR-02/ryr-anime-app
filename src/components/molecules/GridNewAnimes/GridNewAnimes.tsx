import { CardAnimePoster } from '@/components';
import { newAnimeData } from '@/data';

export const GridNewAnimes = () => {
  return (
    <section className='grid grid-cols-6 gap-5 justify-items-center'>
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
