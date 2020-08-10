import { Routes, RouterModule } from '@angular/router';
import { MediaItemListComponent } from './media-item-list.component';

const appRoutes: Routes = [
  {
    path: 'add',
    loadChildren: () => import('./new-item.module').then(m => m.NewItemModule)
  },
  { path: ':medium', component: MediaItemListComponent },
  { path: '', redirectTo: 'all', pathMatch: 'full'}
]; //pathMatch tells the router that the path property provided will represent the full match, not just a part of it.


// forRoot expects an array of route objects, it'll takes these routes and set up the router for us
export const routing = RouterModule.forRoot(appRoutes)
