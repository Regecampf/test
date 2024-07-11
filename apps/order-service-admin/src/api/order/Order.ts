import { User } from "../user/User";
import { OrderCategory } from "../orderCategory/OrderCategory";

export type Order = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  status?: "Option1" | null;
  orderDate: Date | null;
  totalAmount: number | null;
  user?: User | null;
  orderCategories?: Array<OrderCategory>;
};
