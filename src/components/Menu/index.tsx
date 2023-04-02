import React from "react";
import { useQuery } from "@apollo/client";

import { GET_MENU_ITEMS } from "../../api/queries/menu";

import Spinner from "../Spinner";
import Menu from "./components/Menu";

const MenuContainer = () => {
  const { loading, error, data } = useQuery(GET_MENU_ITEMS);

  if (loading) return <Spinner />;

  if (error || !data) {
    return <p>Sorry, the error occurred. Try to reload the page again!</p>;
  }

  return <Menu items={data.menuItems.data} />;
};

export default MenuContainer;
