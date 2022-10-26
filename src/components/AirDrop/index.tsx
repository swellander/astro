import { Web3Wrapper } from "../Web3Wrapper";
import DropConfig from "../DropConfig";
import RecipientForm from "../RecipientForm";

function AirDrop() {
  return (
    <Web3Wrapper>
      <DropConfig />
      <RecipientForm />
    </Web3Wrapper>
  );
}

export default AirDrop;
