import { useState } from "react";
import { useInput } from "./hooks";
import { useColors } from "./ColorProvider";

const DEFAULT_COLOR = "#000000";

export const AddColorForm = () => {
  const { addColor } = useColors();
  const [titleProps, resetTitle] = useInput("");
  const [color, setColor] = useState(DEFAULT_COLOR);

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    addColor(titleProps.value, color);
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
