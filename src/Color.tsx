import { FaTrash } from "react-icons/fa";
import { StarRating } from "./StarRating";

type Props = {
  id: string;
  title: string;
  color: string;
  rating: number;
  onRemove: (id: string) => void;
  onRate: (id: string, rating: number) => void;
};

export const Color = ({
  id,
  title,
  color,
  rating,
  onRemove,
  onRate,
}: Props) => {
  return (
    <section>
      <h1>{title}</h1>
      <button onClick={() => onRemove(id)}>
        <FaTrash />
      </button>
      <div style={{ height: 50, backgroundColor: color }}></div>
      <StarRating
        selectedStars={rating}
        onRate={(rating) => onRate(id, rating)}
      />
    </section>
  );
};
