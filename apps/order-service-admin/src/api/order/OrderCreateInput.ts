import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { OrderCategoryCreateNestedManyWithoutOrdersInput } from "./OrderCategoryCreateNestedManyWithoutOrdersInput";

export type OrderCreateInput = {
  status?: "Option1" | null;
  orderDate?: Date | null;
  totalAmount?: number | null;
  user?: UserWhereUniqueInput | null;
  orderCategories?: OrderCategoryCreateNestedManyWithoutOrdersInput;
};
