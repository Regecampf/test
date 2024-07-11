import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { OrderCategoryModuleBase } from "./base/orderCategory.module.base";
import { OrderCategoryService } from "./orderCategory.service";
import { OrderCategoryController } from "./orderCategory.controller";
import { OrderCategoryResolver } from "./orderCategory.resolver";

@Module({
  imports: [OrderCategoryModuleBase, forwardRef(() => AuthModule)],
  controllers: [OrderCategoryController],
  providers: [OrderCategoryService, OrderCategoryResolver],
  exports: [OrderCategoryService],
})
export class OrderCategoryModule {}
