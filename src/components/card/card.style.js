import styled from "styled-components";

const CardStyle = styled.div`
  width: 200px;
  min-height: 240px;
  border: 1px solid #f1f1f5;
  box-shadow: 0px 12px 18px rgba(23, 23, 37, 0.04);
  border-radius: 4px;
  background: #ffffff;
  margin-right: 24px;

  .card-image {
    height: 98px;
  }

  .card-body {
    padding: 16px;
    .card-title {
      padding-bottom: 8px;

      span {
        line-height: 24px;
        font-weight: 600;
        color: #0062ff;
      }
    }
    .card-content {
      color: #92929d;
    }

    .card-insufficient {
      color: #0062ff;
      font-size: 14px;
    }
  }
`;

export { CardStyle };
