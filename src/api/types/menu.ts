export interface MenuItem {
  id: string;
  attributes: {
    title: string;
    url: string;
  };
}

export interface MenuItemsData {
  menuItems: {
    data: MenuItem[];
  };
}

export interface Filter {
  id: string;
  title: string;
  url: string;
}

export interface Pagination {
  page: number;
  pageSize: number;
  start: number;
  limit: number;
}

export interface MenuItemsVars {
  filters?: Filter[];
  pagination?: Pagination;
  sort?: string[];
}
