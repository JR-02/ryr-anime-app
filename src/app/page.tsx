import {
  NewEpisodes,
  NewAnimes,
  MarginPage,
  RecommendedAnime,
  CategoriesAnime,
} from '@/components';

export const metadata = {
  title: 'R&R:ANIME - La mejor página para ver Anime',
  description:
    'R&R:ANIME es una página para ver Anime de calidad y de manera sencilla',
};

export default function Home() {
  return (
    <main>
      <RecommendedAnime />
      <MarginPage>
        <NewEpisodes />
        <CategoriesAnime />
        <NewAnimes />
      </MarginPage>
    </main>
  );
}
