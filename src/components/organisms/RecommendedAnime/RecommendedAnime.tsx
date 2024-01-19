'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

import { Button, MarginPage } from '@/components';
import { ListPlusIcon, PlayIcon } from '@/icons';
import { recommendedAnimeData } from '@/data';

interface animeRecommended {
  title: string;
  titleImage: string;
  description: string;
  image: string;
}

export const RecommendedAnime = () => {
  const [animePosition, setAnimePosition] = useState<number>(0);

  const animeData: animeRecommended = recommendedAnimeData[animePosition];
  const refInterval = useRef<NodeJS.Timeout>();

  useEffect(() => {
    refInterval.current && clearInterval(refInterval.current);

    refInterval.current = setInterval(
      () =>
        setAnimePosition((v: number) => {
          if (v < recommendedAnimeData.length - 1) {
            return v + 1;
          }
          return v;
        }),
      180000
    );
  }, [animePosition]);

  return (
    <section className='h-screen relative text-tx100 mb-10'>
      <div className='absolute z-10 bottom-0 top-0 h-full w-full bg-gradient-to-b from-bg100/90 via-bg100/30 to-bg100' />
      <Image
        src={animeData.image}
        alt={animeData.title}
        width={2000}
        height={2000}
        className='h-full object-cover z-0'
      />
      <MarginPage>
        <div className='absolute top-0 flex flex-col justify-center items-center sm:items-stretch h-full xl:w-[35%] md:w-[40%] sm:w-[50%] w-[90%] z-20 gap-4'>
          {/* <h3 className='text-4xl font-semibold'>{animeData.title}</h3> */}
          <Image
            src={animeData.titleImage}
            alt={animeData.title}
            width={350}
            height={350}
            className='w-full sm:w-[80%]'
          />
          <p className='opacity-90 w-full text-pretty'>
            {animeData.description}
          </p>
          <div className='flex gap-3'>
            <Button>
              <PlayIcon className='fill-tx100' />
              Ver
            </Button>
            <Button>
              <ListPlusIcon className='fill-tx100' />
              Agregar a lista
            </Button>
          </div>
        </div>
      </MarginPage>
    </section>
  );
};
