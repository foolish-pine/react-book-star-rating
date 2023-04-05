import { useState } from "react";
import { useInput } from "./hooks";

const DEFAULT_COLOR = "#000000";

type Props = {
  onNewColor: (title: string, color: string) => void;
};

export const AddColorForm = ({ onNewColor }: Props) => {
  const [titleProps, resetTitle] = useInput("");
  const [color, setColor] = useState(DEFAULT_COLOR);

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onNewColor(titleProps.value, color);
    resetTitle();
    setColor(DEFAULT_COLOR);
  };

  return (
    <form onSubmit={(e) => submit(e)}>
      <input
        {...titleProps}
        type="text"
        placeholder="color title ..."
        required
      />
      <input
        value={color}
        onChange={(event) => setColor(event.target.value)}
        type="color"
        required
      />
      <button>ADD</button>
    </form>
  );
};
