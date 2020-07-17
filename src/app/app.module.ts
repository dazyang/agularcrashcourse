import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MediaItemComponent } from "./media-item.component";


@NgModule({
  // bring in other Angular module that the module will need
  imports: [BrowserModule],
  // makes components, directive and pipes available to your module that don't come from another module
  declarations: [
    AppComponent,
    MediaItemComponent],
  // use for the root module and will let angular know which component or components for the bootstrap process
  //(entry point for the app code)
  bootstrap: [AppComponent],
}) // the decorator NgModule will apply to the class, field or methods that comes before
export class AppModule {}
