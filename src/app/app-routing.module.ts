import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LinksComponent } from './links/links.component';
import { UserstateComponent } from './userstate/userstate.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { ChoiceOperationComponent } from './choice-operation/choice-operation.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'links',component:LinksComponent},
  {path:'user',component:UserstateComponent},
  {path:'statistics',component:StatisticsComponent},
  {path:'choice_operations',component:ChoiceOperationComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
