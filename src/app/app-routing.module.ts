import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { YourGuardGuard } from './your-guard.guard';

const routes: Routes = [
  {
    path: 'first-component/:id', component: FirstComponent,
    children: [
      { path: 'child-a', component: ChildAComponent },
      { path: 'child-b', component: ChildBComponent }
    ]
  },
  { path: 'second-component', component: SecondComponent, canActivate: [YourGuardGuard] },
  { path: '**', component: SecondComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
