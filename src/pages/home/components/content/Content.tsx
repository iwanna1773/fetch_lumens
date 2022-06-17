import Slides from "../../../../components/slides";
import Card from "../../../../components/card";
import {
  IconPetro,
  IconRentalRebate,
  IconFoodBeverage,
  IconL,
} from "../../../../components/images";

import { ContentStyle } from "./content.style";

const Content = () => {
  return (
    <ContentStyle className="d-flex">
      <Slides>
        <Card />
        <Card
          imageTop={<IconPetro fill="#2CC2B0" />}
          title={
            <div className="d-flex items-center">
              <IconL />
              <span className="color-gey_3 font-semibold pl-8">
                1,000 Coins
              </span>
            </div>
          }
          content="70% discount top-up on your Shell Petrol Card"
          insufficient={true}
        />
      </Slides>

      <Slides titleSlide="Rental Rebate">
        <Card
          imageTop={<IconRentalRebate fill="#A461D8" />}
          title="15 Coins"
          content="Get $500 Rental rebate"
        />
        <Card
          imageTop={<IconRentalRebate />}
          title="20 Coins"
          content="Get $20 Rental rebate"
        />
      </Slides>

      <Slides titleSlide="Food and Beverage">
        <Card
          imageTop={<IconFoodBeverage />}
          title="25 Coins"
          content="NTUC Fairprice $50 Voucher"
        />
        <Card
          imageTop={<IconFoodBeverage fill="#82C43C" />}
          title="5 Coins"
          content="Free Cold Stone Sundae at any flavour!"
        />
      </Slides>
    </ContentStyle>
  );
};

export default Content;
