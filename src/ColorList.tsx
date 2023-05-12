import { Color } from "./Color";
import { useColors } from "./ColorProvider";

type Color = {
  id: string;
  title: string;
  color: string;
  rating: number;
};

export const ColorList = () => {
  const { colors } = useColors();
  if (!colors.length) return <div>No Colors Listed.</div>;

  return (
    <div>
      {colors.map((color: Color) => (
        <Color key={color.id} {...color} />
      ))}
    </div>
  );
};
