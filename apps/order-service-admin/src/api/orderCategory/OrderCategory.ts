import { Order } from "../order/Order";

export type OrderCategory = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  description: string | null;
  order?: Order | null;
};
