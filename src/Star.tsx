import { FaStar } from "react-icons/fa";

type Props = {
  selected?: boolean;
  onSelect: () => void;
};

export const Star = ({ selected = false, onSelect }: Props) => {
  return <FaStar color={selected ? "red" : "gray"} onClick={onSelect} />;
};
