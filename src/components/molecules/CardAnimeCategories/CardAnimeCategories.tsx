import Link from 'next/link';
import Image from 'next/image';

interface Props {
  category: string;
  image: string;
}

export const CardAnimeCategories = ({ category, image }: Props) => {
  return (
    <Link
      href='/'
      className='w-[150px] h-auto rounded-md bg-primary100 flex flex-col relative aspect-square justify-center items-center overflow-hidden'
    >
      <Image
        src={image}
        alt={category}
        priority={true}
        width={300}
        height={300}
        className='w-full h-full object-cover grayscale-[100] mix-blend-multiply duration-500'
      />

      <span className='absolute z-10 text-tx100 font-semibold uppercase text-base text-center text-pretty duration-200'>
        {category}
      </span>
    </Link>
  );
};
