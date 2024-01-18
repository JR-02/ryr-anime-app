import { StarIcon } from '@/icons';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  title: string;
  image: string;
  rating: number;
}

export const CardAnimeEpisode = ({ title, image, rating }: Props) => {
  return (
    <Link
      href='/'
      className='w-[300px] overflow-hidden rounded-md flex flex-col relative bg-bg200'
    >
      <span className='z-10 absolute w-full text-center uppercase font-semibold text-tx100 bg-accent100'>
        New Episode
      </span>
      <Image
        src={image}
        alt={title}
        width={400}
        height={400}
        className='h-full w-full object-cover aspect-video'
      />

      <span className='z-10 absolute bottom-11 left-2 bg-bg200/60 backdrop-blur-sm p-2 rounded-3xl text-tx100 text-xs flex items-center gap-1'>
        <StarIcon width={14} height={14} />
        {rating}
      </span>

      <span className='text-tx100 line-clamp-1 p-2'>{title}</span>
    </Link>
  );
};
