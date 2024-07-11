import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type OrderCategoryCreateInput = {
  name?: string | null;
  description?: string | null;
  order?: OrderWhereUniqueInput | null;
};
