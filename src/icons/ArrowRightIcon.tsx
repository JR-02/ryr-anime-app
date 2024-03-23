import { IconsProps } from '@/interfaces';
export const ArrowRightIcon = ({
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
    <path d='m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z' />
  </svg>
);
