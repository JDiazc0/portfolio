const SunIcon = ({ styling }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={styling.size}
      height={styling.size}
      viewBox="0 0 24 24">
      <g fill="none" stroke={styling.stroke} stroke-width="1">
        <circle cx="12" cy="12" r="3.5" />
        <path
          stroke-linecap="round"
          d="M12 5V3m0 18v-2m4.95-11.95l1.414-1.414M5.636 18.364L7.05 16.95M19 12h2M3 12h2m11.95 4.95l1.414 1.414M5.636 5.636L7.05 7.05"
        />
      </g>
    </svg>
  );
};

export default SunIcon;
