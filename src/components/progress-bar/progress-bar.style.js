import styled from "styled-components";

const ProgressBarStyle = styled.div`
  height: ${(props) => `${props.height}px`};

  .progress-outline {
    border-radius: 2.5px;
    height: ${(props) => `${props.height}px`};
    background-color: ${(props) => `${props.bgOutLine}`};

    .progress-content {
      border-radius: 2.5px;
      height: ${(props) => `${props.height}px`};
      background-color: ${(props) => `${props.bgContent}`};

      width: ${(props) => `${props.process}%`};
    }
  }
`;

export { ProgressBarStyle };
