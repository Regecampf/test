import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { OrderCategoryListRelationFilter } from "../orderCategory/OrderCategoryListRelationFilter";

export type OrderWhereInput = {
  id?: StringFilter;
  status?: "Option1";
  orderDate?: DateTimeNullableFilter;
  totalAmount?: FloatNullableFilter;
  user?: UserWhereUniqueInput;
  orderCategories?: OrderCategoryListRelationFilter;
};
