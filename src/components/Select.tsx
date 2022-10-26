import eth from "../icons/eth.svg";
import chevron from "../icons/chevron.svg";

// interface Props {
//   icon: img
// }

function Select() {
  const eth = <img src={eth} />;
  return (
    // <div className="dropdown ml-1 rounded-lg py-2 p-2.5 h-9 bg-gray-900 border-gray-800 border-[0.5px] flex items-center ">
    //   <img src={eth} />
    //   <p className="ml-1 text-gray-300 text-base font-medium">ETH</p>
    //   <img className="ml-2" src={chevron} />
    //   <ul
    //     tabIndex={0}
    //     className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
    //   >
    //     <li>
    //       <a>Item 1</a>
    //     </li>
    //     <li>
    //       <a>Item 2</a>
    //     </li>
    //   </ul>
    // </div>

    <div
      tabIndex={0}
      className="dropdown ml-1 rounded-lg py-2 p-2.5 h-9 bg-gray-900 border-gray-800 border-[0.5px] text-gray-300 cursor-pointer"
    >
      <div className="flex items-center h-full">
        <label className="cursor-pointer">Click</label>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 bg-gray-900 border-lg w-52"
      >
        <li>
          <a>Item 1</a>
        </li>
        <li>
          <a>Item 2</a>
        </li>
        <li>
          <a>Item 2</a>
        </li>
        <li>
          <a>Item 2</a>
        </li>
        <li>
          <a>Item 2</a>
        </li>
      </ul>
    </div>
  );
}

export default Select;
