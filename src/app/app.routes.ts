import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { MethodologyComponent } from './components/methodology/methodology.component';
import { SurveyComponent } from './components/survey/survey.component';


const APP_ROUTES: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponent },
  { path: 'methodology/:id', component: MethodologyComponent },
  { path: 'survey', component: SurveyComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});
