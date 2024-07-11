import { OrderCategoryWhereInput } from "./OrderCategoryWhereInput";
import { OrderCategoryOrderByInput } from "./OrderCategoryOrderByInput";

export type OrderCategoryFindManyArgs = {
  where?: OrderCategoryWhereInput;
  orderBy?: Array<OrderCategoryOrderByInput>;
  skip?: number;
  take?: number;
};
