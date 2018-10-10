import {Get, Controller, Render} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

    @Get()
    @Render('index.hbs')
    root() {
        return { message: 'Hello world!' };
    }

    @Get("rest")
    rest(): string {
      return this.appService.root();
    }
}
