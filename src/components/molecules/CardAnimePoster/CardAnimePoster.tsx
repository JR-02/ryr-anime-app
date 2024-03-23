import Link from 'next/link';
import Image from 'next/image';
import { StarIcon } from '@/icons';

interface Props {
  image: string;
  title: string;
  rating: number;
  premiere?: boolean;
}

export const CardAnimePoster = ({ image, title, rating, premiere }: Props) => {
  return (
    <Link
      href='/'
      className='slide w-full overflow-hidden rounded-md bg-bg200 flex flex-col relative'
    >
      {premiere && (
        <span
          className={`
          -rotate-45 absolute -left-7 top-6 w-32 py-1
          text-tx100 text-xs bg-primary100 font-bold uppercase text-center
        `}
        >
          Estreno
        </span>
      )}
      <Image
        src={image}
        alt={title}
        priority
        width={300}
        height={300}
        className='object-cover h-full w-full'
      />

      <div className='flex flex-col gap-1 mx-2 my-2'>
        <span className='text-tx100 line-clamp-1'>{title}</span>
        <div className='flex gap-2 items-center'>
          <StarIcon width={18} height={18} />
          <span className='text-tx100 opacity-70 text-sm'>{rating}</span>
        </div>
      </div>
    </Link>
  );
};
