import { FC } from "react";
import Slider from "react-slick";

import { SlidesStyle } from "./slides.style";

interface IconPetroProps {
  titleSlide?: string;
  children?: any;
}

const settings = {
  className: "slider variable-width",
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  nextArrow: <></>,
  prevArrow: <></>,
};

const Slides: FC<IconPetroProps> = ({ titleSlide, children }) => {
  return (
    <SlidesStyle className="silde">
      <div className="slide-title">
        <span className="slide-title_text">{titleSlide}</span>
      </div>
      <Slider {...settings}>{children}</Slider>
    </SlidesStyle>
  );
};

Slides.defaultProps = {
  titleSlide: "Petrol",
  children: <></>,
};

export default Slides;
