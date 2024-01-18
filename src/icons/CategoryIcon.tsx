import { IconsProps } from '../interfaces/IconsInterfaces';

export const CategoryIcon = ({
  width,
  height,
  fill,
  className,
}: IconsProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={width ? width : 24}
    height={height ? height : 24}
    viewBox='0 0 24 24'
    fill={fill ? fill : '#000'}
    className={className ? className : ''}
  >
    <path d='M4 11h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1zm10 0h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1zM4 21h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1zm13 0c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4z' />
  </svg>
);
