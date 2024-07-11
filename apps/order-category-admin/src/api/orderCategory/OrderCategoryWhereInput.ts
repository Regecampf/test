import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type OrderCategoryWhereInput = {
  id?: StringFilter;
  description?: StringNullableFilter;
  name?: StringNullableFilter;
  order?: StringNullableFilter;
};
