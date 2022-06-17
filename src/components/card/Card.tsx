import { FC, ReactElement } from "react";
import { IconPetro } from "../../components/images";

import { CardStyle } from "./card.style";

interface IconPetroProps {
  title?: any;
  imageTop?: ReactElement;
  content?: string;
  insufficient?: boolean;
}

const Card: FC<IconPetroProps> = ({
  title,
  imageTop,
  content,
  insufficient,
}) => {
  const checkShowInsufficient = () => {
    const show = [];
    if (insufficient) {
      show.push(
        <div className="card-insufficient pt-8" key={0}>
          <span>Insufficient coins</span>
        </div>
      );
    }

    return show;
  };

  return (
    <CardStyle>
      <div className="card-image">{imageTop}</div>
      <div className="card-body">
        <div className="card-title">
          <span>{title}</span>
        </div>
        <div className="card-content">
          <span>{content}</span>
        </div>
        {checkShowInsufficient()}
      </div>
    </CardStyle>
  );
};

Card.defaultProps = {
  title: "15 Coins",
  imageTop: <IconPetro />,
  content: "50% discount for every $100 top-up on your Shell Petrol Card",
  insufficient: false,
};

export default Card;
