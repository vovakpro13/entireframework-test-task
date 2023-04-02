import React, { FC } from "react";

import { MenuItem } from "../../../api/types/menu";

import { MenuWrapper } from "../Styles";
import NavListItem from "./NavListItem";

type Props = {
  items: MenuItem[];
};

const Menu: FC<Props> = ({ items }) => {
  return (
    <MenuWrapper>
      {items.map((item) => (
        <NavListItem key={item.id} item={item} />
      ))}
    </MenuWrapper>
  );
};

export default Menu;
