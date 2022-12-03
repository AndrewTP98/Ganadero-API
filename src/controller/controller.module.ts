import { Module } from "@nestjs/common";
import { ServiceModule } from "../service/service.module";
import { AuthController } from './auth/auth.controller';

@Module({
    imports: [ServiceModule],
    controllers: [AuthController],
  })
  export class ControllerModule {}