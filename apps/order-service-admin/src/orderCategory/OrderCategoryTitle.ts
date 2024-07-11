import { OrderCategory as TOrderCategory } from "../api/orderCategory/OrderCategory";

export const ORDERCATEGORY_TITLE_FIELD = "name";

export const OrderCategoryTitle = (record: TOrderCategory): string => {
  return record.name?.toString() || String(record.id);
};
