import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainComponent } from './train/train.component';
import { AddtrainsComponent } from './addtrains/addtrains.component';
import { UpdatetrainsComponent } from './updatetrains/updatetrains.component';
import { HomeComponent } from './home/home.component';
import { ReservationComponent } from './reservation/reservation.component';
import { DetailsComponent } from './details/details.component';
import { AdminComponent } from './admin/admin.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:'',redirectTo:"home",pathMatch:"full"},
  {path:'Trains',component: TrainComponent},
  {path:'update/:id',component: UpdatetrainsComponent},
  {path:'add',component: AddtrainsComponent},
  {path:'home',component: HomeComponent},
  {path: 'reserve',component:ReservationComponent},
  {path: 'details',component:DetailsComponent},
  {path: 'Admin',component:AdminComponent},
  {path: 'schedule',component:ScheduleComponent},
  {path: 'contact',component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
