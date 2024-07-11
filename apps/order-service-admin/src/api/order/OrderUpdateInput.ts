import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { OrderCategoryUpdateManyWithoutOrdersInput } from "./OrderCategoryUpdateManyWithoutOrdersInput";

export type OrderUpdateInput = {
  status?: "Option1" | null;
  orderDate?: Date | null;
  totalAmount?: number | null;
  user?: UserWhereUniqueInput | null;
  orderCategories?: OrderCategoryUpdateManyWithoutOrdersInput;
};
