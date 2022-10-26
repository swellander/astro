import InputBar from "./InputBar";
import Select from "./Select";
import ethSvg from "../assets/eth.svg";
import chevronSvg from "../assets/chevron.svg";
import twitterSvg from "../assets/twitter.svg";
import emailSvg from "../assets/email.svg";
import githubSvg from "../assets/github.svg";

function RecipientInput() {
  const ethIcon = <img src={ethSvg} />;
  const chevronIcon = <img src={chevronSvg} />;
  const items = [
    {
      name: "Twitter",
      icon: <img src={twitterSvg} />,
    },
    {
      name: "Email",
      icon: <img src={emailSvg} />,
    },
    {
      name: "Github",
      icon: <img src={githubSvg} />,
    },
  ];
  return (
    <InputBar className="mt-4">
      <Select
        itemIcon={ethIcon}
        dropIcon={chevronIcon}
        text="Username"
        items={items}
      />
    </InputBar>
  );
}

export default RecipientInput;
