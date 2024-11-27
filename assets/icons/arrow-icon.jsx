import { cn } from "../../src/lib/utils";

const ArrowIcon = ({ className }) => {
  return (
    <svg
      width="18"
      height="19"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(" stroke-background", className)}
    >
      <path
        d="M4 6.25L7.29289 9.54289C7.62623 9.87623 7.79289 10.0429 8 10.0429C8.20711 10.0429 8.37377 9.87623 8.70711 9.54289L12 6.25"
        stroke="#ffffff"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ArrowIcon;
