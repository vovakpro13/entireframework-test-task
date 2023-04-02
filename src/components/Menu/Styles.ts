import styled from "styled-components";
import { NavLink, NavLinkProps } from "react-router-dom";
import { ComponentType } from "react";

export const MenuWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: column;

  min-width: 700px;
  margin: 0;
  padding: 0;

  list-style-type: none;
`;

export const MenuListItem = styled.li`
  width: fit-content;
  margin: 0;
  padding: 0;
`;

export const MenuLinkItem: ComponentType<NavLinkProps> = styled(
  NavLink
)<NavLinkProps>`
  display: block;

  height: 60px;
  margin-bottom: 4px;
  padding: 7px 12px 9px;
  overflow: hidden;

  text-align: center;
  text-decoration: none;
  font-size: 44px;
  line-height: 100%;
  color: #ffffff;
  background-color: #252525;

  transition: height 1s, padding 1s, margin-bottom 1s;
  cursor: pointer;

  &.active {
    height: 0;
    padding: 0;
    margin-bottom: 0;
  }
`;
