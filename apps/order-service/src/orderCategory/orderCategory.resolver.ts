import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { OrderCategoryResolverBase } from "./base/orderCategory.resolver.base";
import { OrderCategory } from "./base/OrderCategory";
import { OrderCategoryService } from "./orderCategory.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => OrderCategory)
export class OrderCategoryResolver extends OrderCategoryResolverBase {
  constructor(
    protected readonly service: OrderCategoryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
