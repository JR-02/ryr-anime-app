interface Props {
  className?: string;
}

export const SearchHeader = ({ className }: Props) => {
  return (
    <input
      type='text'
      placeholder='Search anime...'
      className={`p-2 rounded outline-none border-2 border-transparent bg-bg200 text-tx100 ${
        className ? className : ''
      }`}
    />
  );
};
