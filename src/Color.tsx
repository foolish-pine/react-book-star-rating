import { FaTrash } from "react-icons/fa";
import { StarRating } from "./StarRating";
import { useColors } from "./ColorProvider";

type Props = {
  id: string;
  title: string;
  color: string;
  rating: number;
};

export const Color = ({ id, title, color, rating }: Props) => {
  const { removeColor } = useColors();
  return (
    <section>
      <h1>{title}</h1>
      <button onClick={() => removeColor(id)}>
        <FaTrash />
      </button>
      <div style={{ height: 50, backgroundColor: color }}></div>
      <StarRating id={id} selectedStars={rating} />
    </section>
  );
};
