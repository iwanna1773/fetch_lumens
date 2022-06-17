import styled from "styled-components";

const CoinBalanceStyle = styled.div`
  background: linear-gradient(180deg, #171725 50%, #e5e5e5 50%);
  .coin-bg {
    margin: 0px 16px;
    position: relative;
    display: flex;
    min-height: 416px;
    background: #ffffff;
    border: 1px solid #fafafb;
    box-shadow: 0px 12px 18px rgb(23 23 37 / 4%);
    border-radius: 8px;
  }
  .coin-content {
    .coin-title {
      span {
        font-weight: 600;
        font-size: 14px;
        line-height: 24px;
        color: #b5b5be;
      }
    }
    .coin-amount {
      span {
        font-size: 48px;
        line-height: 56px;
        color: #171725;
      }
    }
    .coin-content {
      span {
        color: #92929d;
      }
    }
    .coin-view {
      padding: 16px 0px 24px 0px;
      span {
        color: #0062ff;
      }
    }
    .coin-button {
      padding: 18px 96px;
      background: #171725;
      border-radius: 4px;
      display: flex;
      justify-content: center;
      button {
        background-color: transparent;

        span {
          font-size: 18px;
        }
      }
    }
    .coin-time_update {
      padding-top: 16px;
      span {
        font-size: 14px;
        color: #b5b5be;
      }
    }
  }
`;

export { CoinBalanceStyle };
