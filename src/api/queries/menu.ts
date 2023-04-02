import { TypedDocumentNode, gql } from "@apollo/client";
import { MenuItemsData, MenuItemsVars } from "../types/menu";

export const GET_MENU_ITEMS: TypedDocumentNode<
  MenuItemsData,
  MenuItemsVars
> = gql`
  query GetMenuItems(
    $filters: MenuItemFiltersInput
    $pagination: PaginationArg
    $sort: [String]
  ) {
    menuItems(filters: $filters, pagination: $pagination, sort: $sort) {
      data {
        id
        attributes {
          title
          url
        }
      }
    }
  }
`;
