import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ExecuterComponent } from './executer/executer.component';
import { MainComponent } from './main/main.component';
import { RegistrationComponent } from './registration/registration.component';
import { SubmissionComponent } from './submission/submission.component';

const routes: Routes = [
  { path: 'executer', component: ExecuterComponent },
  { path: 'main', component: MainComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'submission', component: SubmissionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
