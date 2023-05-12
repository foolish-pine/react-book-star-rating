import { Star } from "./Star";
import { useColors } from "./ColorProvider";

type Props = {
  id: string;
  totalStars?: number;
  selectedStars: number;
};

export const StarRating = ({
  id,
  totalStars = 5,
  selectedStars = 0,
}: Props) => {
  const { rateColor } = useColors();
  return (
    <div>
      {[...Array(totalStars)].map((_, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => rateColor(id, i + 1)}
        />
      ))}
      <p>
        {selectedStars} or {totalStars} stars
      </p>
    </div>
  );
};
