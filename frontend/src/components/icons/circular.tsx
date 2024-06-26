type ChildProps = {
  icon: string;
  green: string;
};

export function Circular(props: ChildProps) {
  const { icon, green } = props;

  return (
    <div>
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`flex ${icon} `}
      >
        <circle cx="24" cy="24" r="23.5" stroke="#0468C8" />
        <circle cx="24" cy="24" r="12" fill="#0468C8" />
      </svg>
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`flex ${green} `}
      >
        <circle cx="24" cy="24" r="24" fill="#18BA51" />
        <mask
          id="mask0_1_1728"
          maskUnits="userSpaceOnUse"
          x="12"
          y="12"
          width="24"
          height="24"
        >
          <rect x="12" y="12" width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_1_1728)">
          <path
            d="M21.5496 29.9996L15.8496 24.2996L17.2746 22.8746L21.5496 27.1496L30.7246 17.9746L32.1496 19.3996L21.5496 29.9996Z"
            fill="white"
          />
        </g>
      </svg>
    </div>
  );
}
