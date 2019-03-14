import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.css']
})
export class RoutesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
import { Routes } from '@angular/router';
import { ExecuterComponent } from '../executer/executer.component';
import { MainComponent } from '../main/main.component';
import { RegistrationComponent } from '../registration/registration.component';
import { SubmissionComponent } from '../submission/submission.component';

export const routes: Routes = [
  {
    path: 'executer',
    component: ExecuterComponent,
  },
  {
    path: 'main',
    component: MainComponent,
  },
  {
    path: 'registration',
    component: RegistrationComponent,
  },{
    path: 'submission',
    component: SubmissionComponent,
  }
];
