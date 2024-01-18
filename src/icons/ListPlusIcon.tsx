import { IconsProps } from '../interfaces/IconsInterfaces';

export const ListPlusIcon = ({
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
    <path d='M19 15v-3h-2v3h-3v2h3v3h2v-3h3v-2h-.937zM4 7h11v2H4zm0 4h11v2H4zm0 4h8v2H4z' />
  </svg>
);
