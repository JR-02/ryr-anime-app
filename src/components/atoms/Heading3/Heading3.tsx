interface Props {
  children: string | string[];
}

export const Heading3 = ({ children }: Props) => {
  return (
    <h3 className='text-3xl font-bold text-tx100 mb-4 uppercase italic'>
      {children}
    </h3>
  );
};
