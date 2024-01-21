import { Heading3, GridCategory } from '@/components';

interface Props {
  title: string;
  animes: Anime[];
}

interface Anime {
  title: string;
  rating: number;
  poster: string;
}

export const Category = ({ title, animes }: Props) => {
  return (
    <section>
      <Heading3>{title}:</Heading3>
      <GridCategory animes={animes} />
    </section>
  );
};
