import { Routes, RouterModule } from '@angular/router';
import { MediaItemFormComponent } from './media-item-form.component';
import { MediaItemListComponent } from './media-item-list.component';

const appRoutes: Routes = [
  { path : 'add', component: MediaItemFormComponent },
  { path: ':medium', component: MediaItemListComponent },
  { path: '', redirectTo: 'all', pathMatch: 'full'}
]; //pathMatch tells the router that the path property provided will represent the full match, not just a part of it.


// forRoot expects an array of route objects, it'll takes these routes and set up the router for us
export const routing = RouterModule.forRoot(appRoutes)
