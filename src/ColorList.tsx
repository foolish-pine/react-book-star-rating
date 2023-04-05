import { Color } from "./Color";

type Color = {
  id: string;
  title: string;
  color: string;
  rating: number;
};

type Props = {
  colors: Color[];
  onRemoveColor: (id: string) => void;
  onRateColor: (id: string, rating: number) => void;
};

export const ColorList = ({
  colors = [],
  onRemoveColor,
  onRateColor,
}: Props) => {
  if (!colors.length) return <div>No Colors Listed.</div>;

  return (
    <div>
      {colors.map((color) => (
        <Color
          key={color.id}
          {...color}
          onRemove={onRemoveColor}
          onRate={onRateColor}
        />
      ))}
    </div>
  );
};
