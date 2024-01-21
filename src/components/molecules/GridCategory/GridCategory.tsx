import { CardAnimePoster, GridSlider } from '@/components';

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
    <GridSlider className='[&>a]:w-[180px]'>
      {animes.map(({ title, poster, rating }: Anime) => (
        <CardAnimePoster
          title={title}
          image={poster}
          rating={rating}
          key={title}
        />
      ))}
    </GridSlider>
  );
};
