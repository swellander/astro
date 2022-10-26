interface Props {
  text: string;
  onClick: () => any;
}

function Button({ text, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="text-gray-1000 bg-primary-500 px-4 py-2 rounded-lg mt-4"
    >
      {text}
    </button>
  );
}

export default Button;
