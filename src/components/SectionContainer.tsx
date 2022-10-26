interface Props {
  className: string;
}

function SectionContainer(props: Props) {
  return (
    <div
      {...props}
      className="p-6 w-[600px] h-[172px] bg-gray-900 rounded-xl flex-col justify-between"
    />
  );
}

export default SectionContainer;
