import chevron from "../assets/chevron.svg";

interface Props {
  itemIcon: JSX.Element;
  dropIcon: JSX.Element;
  text: string;
  items: {
    name: string;
    icon: JSX.Element;
  }[];
}

function Select({ itemIcon, dropIcon, text, items }: Props) {
  return (
    <div
      tabIndex={0}
      className="dropdown ml-1 rounded-lg py-2 p-2.5 h-9 bg-gray-900 border-gray-800 border-[0.5px] text-gray-300 cursor-pointer"
    >
      <div className="flex items-center h-full">
        <>
          {itemIcon}
          <label className="cursor-pointer ml-1 mr-2">{text}</label>
          {dropIcon}
        </>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 bg-gray-900 border-lg w-52"
      >
        {items.map(({ name, icon }) => (
          <li className="hover:bg-gray-800 flex">
            {/* {icon} */}
            <a>{name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Select;
