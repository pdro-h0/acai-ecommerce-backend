import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ProductModule } from "./product/product.module";
import { OrderedModule } from "./ordered/ordered.module";

@Module({
  imports: [ProductModule, OrderedModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
