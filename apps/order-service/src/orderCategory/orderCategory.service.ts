import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OrderCategoryServiceBase } from "./base/orderCategory.service.base";

@Injectable()
export class OrderCategoryService extends OrderCategoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
