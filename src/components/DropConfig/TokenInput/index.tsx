import InputBar from "../../InputBar";
import eth from "../../../icons/eth.svg";
import chevron from "../../../icons/chevron.svg";

function TokenInput() {
  return (
    <InputBar>
      <div className="ml-1 dropdown rounded-lg py-2 p-2.5 h-9 bg-gray-900 border-gray-800 border-[0.5px] flex items-center cursor-pointer">
        <img src={eth} />
        <p className="ml-1 text-gray-300 text-base font-medium">ETH</p>
        <img className="ml-2" src={chevron} />
      </div>
      <input
        placeholder="Enter amount"
        className="ml-4 placeholder:text-gray-700 border-red w-7/12 bg-gray-1000 text-[20px] text-gray-50 outline-0"
        type="text"
      />
    </InputBar>
  );
}

export default TokenInput;
