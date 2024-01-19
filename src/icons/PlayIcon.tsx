import { IconsProps } from '@/interfaces';

export const PlayIcon = ({ width, height, fill, className }: IconsProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={width ? width : 24}
    height={height ? height : 24}
    viewBox='0 0 24 24'
    fill={fill ? fill : '#000'}
    className={className ? className : ''}
  >
    <path d='M7 6v12l10-6z' />
  </svg>
);
