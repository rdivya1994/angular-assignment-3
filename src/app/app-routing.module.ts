import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{DomainListComponent} from '../app/domain-list/domain-list.component';
const routes: Routes = [
  { path: 'domain-list', component:  DomainListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const domainComponent=[DomainListComponent]