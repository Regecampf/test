/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { OrderCategoryService } from "../orderCategory.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { OrderCategoryCreateInput } from "./OrderCategoryCreateInput";
import { OrderCategory } from "./OrderCategory";
import { OrderCategoryFindManyArgs } from "./OrderCategoryFindManyArgs";
import { OrderCategoryWhereUniqueInput } from "./OrderCategoryWhereUniqueInput";
import { OrderCategoryUpdateInput } from "./OrderCategoryUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class OrderCategoryControllerBase {
  constructor(
    protected readonly service: OrderCategoryService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: OrderCategory })
  @nestAccessControl.UseRoles({
    resource: "OrderCategory",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createOrderCategory(
    @common.Body() data: OrderCategoryCreateInput
  ): Promise<OrderCategory> {
    return await this.service.createOrderCategory({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        description: true,
        name: true,
        order: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [OrderCategory] })
  @ApiNestedQuery(OrderCategoryFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "OrderCategory",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async orderCategories(
    @common.Req() request: Request
  ): Promise<OrderCategory[]> {
    const args = plainToClass(OrderCategoryFindManyArgs, request.query);
    return this.service.orderCategories({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        description: true,
        name: true,
        order: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: OrderCategory })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "OrderCategory",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async orderCategory(
    @common.Param() params: OrderCategoryWhereUniqueInput
  ): Promise<OrderCategory | null> {
    const result = await this.service.orderCategory({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        description: true,
        name: true,
        order: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: OrderCategory })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "OrderCategory",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateOrderCategory(
    @common.Param() params: OrderCategoryWhereUniqueInput,
    @common.Body() data: OrderCategoryUpdateInput
  ): Promise<OrderCategory | null> {
    try {
      return await this.service.updateOrderCategory({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          description: true,
          name: true,
          order: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: OrderCategory })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "OrderCategory",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteOrderCategory(
    @common.Param() params: OrderCategoryWhereUniqueInput
  ): Promise<OrderCategory | null> {
    try {
      return await this.service.deleteOrderCategory({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          description: true,
          name: true,
          order: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
