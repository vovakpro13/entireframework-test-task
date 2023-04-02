import React, { FC } from "react";

import { MenuLinkItem, MenuListItem } from "../Styles";
import { MenuItem } from "../../../api/types/menu";

interface IProps {
  item: MenuItem;
}

const NavListItem: FC<IProps> = ({ item }) => {
  const {
    attributes: { title, url },
  } = item;

  return (
    <MenuListItem>
      <MenuLinkItem
        to={url}
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        {title}
      </MenuLinkItem>
    </MenuListItem>
  );
};

export default NavListItem;
