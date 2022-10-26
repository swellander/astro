import { useState } from "react";
// import TokenInput from "../TokenInput";

interface Props {
  isBlurred: boolean;
}

function DropType({ isBlurred }: Props) {
  const [isSendingTokens, setIsSendingTokens] = useState(true);

  return (
    <>
      <div
        className={`flex flex-col justify-between h-full ${
          isBlurred && "blur"
        }`}
      >
        <div className={`flex text-[1.25rem] h-[60px] `}>
          <div
            onClick={() => setIsSendingTokens(true)}
            className={`font-semibold flex justify-center text-gray-300 border-2 border-gray-800 rounded-xl w-full items-center cursor-pointer leading-5 ${
              isSendingTokens &&
              "border-green-60 text-green-80 duration-200 bg-primary-100"
            }`}
          >
            <h2 className="leading-tight font-medium">
              <span
                className={`leading-4 text-gray-600 font-normal ${
                  isSendingTokens && "text-primary-300"
                }`}
              >
                Send
              </span>{" "}
              Tokens
            </h2>
          </div>
          <div className="text-gray-500 flex items-center px-4 py-5 font-medium">
            <p>or</p>
          </div>
          <div
            className={`font-semibold flex justify-center text-gray-300 border-2 border-gray-800 rounded-xl w-full items-center cursor-pointer leading-5 ${
              !isSendingTokens &&
              "border-green-60 text-green-80 duration-200 bg-primary-100"
            }`}
            onClick={() => setIsSendingTokens(false)}
          >
            <h2 className="leading-tight font-medium">
              <span
                className={`leading-4 text-gray-600 font-normal ${
                  !isSendingTokens && "text-primary-300"
                }`}
              >
                Send
              </span>{" "}
              NFTs
            </h2>
          </div>
        </div>
        {/* <TokenInput /> */}
      </div>
    </>
  );
}

export default DropType;
