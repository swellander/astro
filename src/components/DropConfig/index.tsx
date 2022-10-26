// import { useAccount } from "wagmi";

// import ConnectWallet from "./ConnectWallet";
import DropType from "./DropType";

function DropConfig() {
  // const { isConnected } = useAccount();

  return (
    <>
      <div className="p-6 w-[600px] h-[172px] bg-gray-900 rounded-xl flex-col justify-between mt-[3.75rem] relative">
        <DropType isBlurred={false} />
        {/* {!isConnected && <ConnectWallet />} */}
      </div>
    </>
  );
}

export default DropConfig;
