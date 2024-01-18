import { IconsProps } from '@/interfaces';

export const MenuIcon = ({ width, height, fill, className }: IconsProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={width ? width : 24}
    height={height ? height : 24}
    viewBox='0 0 24 24'
    fill={fill ? fill : '#000'}
    className={className ? className : ''}
  >
    <path d='M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z' />
  </svg>
);
