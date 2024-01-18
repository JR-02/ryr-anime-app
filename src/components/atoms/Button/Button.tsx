interface Props {
  children: string | React.ReactNode;
}

export const Button = ({ children }: Props) => {
  return (
    <button className='flex items-center gap-2 bg-bg100/50 text-tx100 px-4 py-2 rounded hover:scale-105 hover:bg-bg300/50 backdrop-blur-sm duration-200'>
      {children}
    </button>
  );
};
