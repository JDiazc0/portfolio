const DateIcon = ({ styling }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={styling.size}
      height={styling.size}
      viewBox="0 0 24 24">
      <path
        fill="none"
        stroke={styling.stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm12-4v4M8 3v4m-4 4h16m-9 4h1m0 0v3"
      />
    </svg>
  );
};

export default DateIcon;
