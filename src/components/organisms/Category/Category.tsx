import { TitleSection, GridCategory } from '@/components';

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
    <div>
      <TitleSection>{`${title}:`}</TitleSection>
      <GridCategory animes={animes} />
    </div>
  );
};
