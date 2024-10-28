import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { OrderedService } from "./ordered.service";
import { Ordered } from "src/core";

@Controller("ordereds")
export class OrderedController {
  constructor(private readonly orderedService: OrderedService) {}

  @Post()
  async save(@Body() ordered: Ordered) {
    return await this.orderedService.save(ordered);
  }

  @Get()
  async getAllOrdereds() {
    return await this.orderedService.getAll();
  }

  @Get(":id")
  async getOrdered(@Param("id") id: string) {
    return await this.orderedService.getById(id);
  }

  @Delete(":id")
  async excudeOrdered(@Param("id") id: string) {
    return await this.orderedService.exclude(id);
  }
}
