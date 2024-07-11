import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { OrderCategoryService } from "./orderCategory.service";
import { OrderCategoryControllerBase } from "./base/orderCategory.controller.base";

@swagger.ApiTags("orderCategories")
@common.Controller("orderCategories")
export class OrderCategoryController extends OrderCategoryControllerBase {
  constructor(
    protected readonly service: OrderCategoryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
