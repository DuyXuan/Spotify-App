import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { TopTracksComponent } from './top-tracks/top-tracks.component';

const routers: Routes = [
  {
    path: ':id',
    component: TopTracksComponent,
  },
];

@NgModule({
  declarations: [AppComponent, TopTracksComponent],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(routers)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
