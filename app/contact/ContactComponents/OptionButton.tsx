import { formContentTypes } from "@/types";

const OptionButton = ({ title }: formContentTypes) => {
  return (
    <button className="flex items-center justify-center text-center border border-PrimaryBlack py-[0.88rem] px-[2.88rem] text-PrimaryBlack font-ObjectSans text-sm leading-5">
      {title}
    </button>
  );
};

export default OptionButton;
