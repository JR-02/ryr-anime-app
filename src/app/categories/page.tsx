import { MarginPage, Category } from '@/components';
import { categoriesPage } from '@/data';

export const metadata = {
  title: 'R&R:Anime - Categories',
  description: 'R&R:Anime - Categories',
};

export default function CategoryPage() {
  return (
    <main>
      <MarginPage className='flex flex-col gap-6 pt-20'>
        {categoriesPage.map(({ category, animes }) => (
          <Category title={category} animes={animes} key={category} />
        ))}
      </MarginPage>
    </main>
  );
}
