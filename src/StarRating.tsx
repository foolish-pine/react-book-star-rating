import { Star } from "./Star";

type Props = {
  totalStars?: number;
  selectedStars: number;
  onRate: (rateNum: number) => void;
};

export const StarRating = ({
  totalStars = 5,
  selectedStars = 0,
  onRate,
}: Props) => {
  return (
    <div>
      {[...Array(totalStars)].map((_, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => onRate(i + 1)}
        />
      ))}
      <p>
        {selectedStars} or {totalStars} stars
      </p>
    </div>
  );
};
