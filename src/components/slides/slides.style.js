import styled from "styled-components";

const SlidesStyle = styled.div`
  .slide-title {
    margin-bottom: 24px;
    .slide-title_text {
      font-family: "Hellix";
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 24px;
      color: #171725;
    }
  }
  .slick-track {
    display: flex;
    .slick-slide {
      height: auto;
      > div {
        display: flex;
        height: 100%;
      }
    }
  }
`;

export { SlidesStyle };
