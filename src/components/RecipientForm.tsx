import InputBar from "./InputBar";
import RecipientInput from "./RecipientInput";

function RecipientForm() {
  return (
    <div className="px-6 py-5 w-[600px] h-[172px] bg-gray-900 rounded-xl flex-col justify-between relative mt-3">
      <p className="text-gray-500 text-[15px]">CHOOSE RECEIVERS</p>
      <RecipientInput />
    </div>
  );
}

export default RecipientForm;
