import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PadreComponent } from './components/padre/padre.component';

const routes: Routes = [
  { path: '',   redirectTo: '/cards', pathMatch: 'full' },
  { path: 'cards', component: PadreComponent },
  { path: '**', component: PadreComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
