import { IconBack } from "../../../../components/images";

import { HeaderStyle } from "./header.style";

const Header = () => {
  return (
    <HeaderStyle>
      <div>
        <IconBack />
      </div>
      <h3 className="mb-8">Silver Tier</h3>
      <span>
        In Silver Tier, every $1 in rental fee paid, you get 2 coins to redeem
        exclusive rewards.
      </span>
    </HeaderStyle>
  );
};

export default Header;
