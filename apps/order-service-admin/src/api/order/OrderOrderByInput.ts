import { SortOrder } from "../../util/SortOrder";

export type OrderOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  status?: SortOrder;
  orderDate?: SortOrder;
  totalAmount?: SortOrder;
  userId?: SortOrder;
};
