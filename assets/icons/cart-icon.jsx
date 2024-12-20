const CartIcon = ({ strokeColor = "#882BEC", background }) => {
  return (
    <svg
      width="44"
      height="45"
      viewBox="0 0 44 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        y="0.5"
        width="44"
        height="44"
        rx="22"
        fill={strokeColor}
        fill-opacity="0.95"
      />
      <path
        d="M17.5 18.17V17.2C17.5 14.95 19.31 12.74 21.56 12.53C24.24 12.27 26.5 14.38 26.5 17.01V18.39"
        stroke={background}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M19.0001 32.5H25.0001C29.0201 32.5 29.7401 30.89 29.9501 28.93L30.7001 22.93C30.9701 20.49 30.2701 18.5 26.0001 18.5H18.0001C13.7301 18.5 13.0301 20.49 13.3001 22.93L14.0501 28.93C14.2601 30.89 14.9801 32.5 19.0001 32.5Z"
        stroke={background}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M25.4955 22.5H25.5045"
        stroke={background}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18.4945 22.5H18.5035"
        stroke={background}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default CartIcon;
