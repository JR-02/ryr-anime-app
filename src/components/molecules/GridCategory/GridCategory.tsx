import { CardAnimePoster } from '@/components';

interface Props {
  animes: Anime[];
}

interface Anime {
  title: string;
  rating: number;
  poster: string;
}

export const GridCategory = ({ animes }: Props) => {
  return (
    <section className='grid gap-5 grid-flow-col overflow-x-scroll scrollbar-bottom pb-4 [&>a]:w-[180px]'>
      {animes.map(({ title, poster, rating }: Anime) => (
        <CardAnimePoster
          title={title}
          image={poster}
          rating={rating}
          key={title}
        />
      ))}
    </section>
  );
};
