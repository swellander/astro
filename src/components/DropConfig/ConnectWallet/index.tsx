import Button from "../../Button";
import { useConnectModal } from "@rainbow-me/rainbowkit";

function ConnectWallet() {
  const { openConnectModal } = useConnectModal();
  return (
    <div className="w-full h-full absolute top-0 left-0 p-6 bg-blur">
      <div className="w-[85%]">
        <p className="font-medium leading-6 text-medium text-gray-100">
          Send tokens via @handle
        </p>
        <p className="text-small font-normal leading-5 mt-3 text-gray-400 tracking-tight">
          Connect your wallet to send your first drop to your followers,
          friends, and fans just by using their social handle (Twitter / Email /
          Github)
        </p>
        <Button onClick={openConnectModal} text="Connect my wallet"></Button>
      </div>
    </div>
  );
}

export default ConnectWallet;
