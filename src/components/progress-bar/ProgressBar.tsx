import { FC } from "react";

import { ProgressBarStyle } from "./progress-bar.style";

interface IconPetroProps {
  height?: number;
  bgOutLine?: string;
  bgContent?: string;
  process?: number;
}

const ProgressBar: FC<IconPetroProps> = ({
  height,
  bgOutLine,
  bgContent,
  process,
}) => {
  return (
    <ProgressBarStyle
      className="w-100"
      height={height}
      bgOutLine={bgOutLine}
      bgContent={bgContent}
      process={process}
    >
      <div className="w-100 relative progress-outline">
        <div className="absolute progress-content" />
      </div>
    </ProgressBarStyle>
  );
};

ProgressBar.defaultProps = {
  height: 5,
  bgOutLine: "#E2E2EA",
  bgContent: " #0062FF",
  process: 60,
};

export default ProgressBar;
