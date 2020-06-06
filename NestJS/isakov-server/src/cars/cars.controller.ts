import { Controller, Post, Body, Get, Param } from "@nestjs/common";
import { CarService } from "./cars.service";
import * as mongoose from 'mongoose'

@Controller('cars')
export class CarsController {
  constructor(
    private CarService: CarService 
    ) {}

  @Post('createcar')
  async createCar (@Body() car: any) {
    return this.CarService.createCar(car)
  }

}