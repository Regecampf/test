import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type OrderCategoryUpdateInput = {
  name?: string | null;
  description?: string | null;
  order?: OrderWhereUniqueInput | null;
};
