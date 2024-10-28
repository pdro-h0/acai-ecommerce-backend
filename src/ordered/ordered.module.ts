import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { OrderedController } from "./ordered.controller";
import { OrderedService } from "./ordered.service";

@Module({
  imports: [PrismaModule],
  controllers: [OrderedController],
  providers: [OrderedService],
})
export class OrderedModule {}
