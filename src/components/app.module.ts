import { Module } from "../core/common/module";
import { ModuleInstance } from "../core/models/module-instance.model";
import { ModuleRoute } from "../core/models/module-route.model";
import { GarageComponent } from "./garage/garage.component";
import { StatisticsComponent } from "./statistics/statistics.component";

export class AppModule extends Module implements ModuleInstance {
  routes: ModuleRoute[] = [
    {
      path: 'garage',
      component: GarageComponent,
    },
    {
      path: 'statistics',
      component: StatisticsComponent,
    },
    {
      path: '*',
      redirectTo: 'garage',
    },
  ];
}