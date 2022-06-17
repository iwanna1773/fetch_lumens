import { FC } from "react";

interface IconTab2Props {
  notification?: boolean;
}

const IconTab2: FC<IconTab2Props> = ({ notification }) => (
  <div className="relative">
    <div
      className={`absolute left-60 top-10 ${notification ? `show` : `hide`}`}
    >
      <svg
        width={12}
        height={12}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx={6} cy={6} r={6} fill="#FC5A5A" />
      </svg>
    </div>
    <div>
      <svg
        width={40}
        height={40}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.607 16.067v-.004C8.959 9.22 14.939 4.253 21.65 5.157c5.254.708 9.476 5.275 9.742 10.622.057 1.204.056 2.378.056 3.58 0 .758-.001 1.527.013 2.322v.016c.016.492.142 1.02.355 1.47.49 1.054.993 2.102 1.493 3.144.215.446.428.892.64 1.335V28.359c-.03.062-.07.146-.107.238l-.005.012-.005.013c-.31.811-.94 1.252-1.74 1.252h-.002c-8.057.012-16.114.012-24.182 0h-.002c-.791 0-1.431-.443-1.74-1.252l-.005-.013-.005-.012a6.988 6.988 0 0 0-.107-.242V27.648l.466-.969c.568-1.18 1.142-2.37 1.702-3.572.199-.42.319-.909.32-1.388.014-.76.012-1.49.01-2.206-.003-1.16-.006-2.286.059-3.447ZM23.497 33.69h.001a3.636 3.636 0 0 1-.886 1.072c-.753.633-1.748 1.026-2.724 1.013-.889-.014-1.841-.424-2.575-1.071a3.744 3.744 0 0 1-.824-1.013H23.497Z"
          stroke="#D5D5DC"
          strokeWidth={2.1}
        />
      </svg>
    </div>
  </div>
);

IconTab2.defaultProps = {
  notification: false,
};

export default IconTab2;
