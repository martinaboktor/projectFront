
import { Routes, RouterLink } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { BackendComponent } from './backend/backend.component';
import { FrontendComponent } from './frontend/frontend.component';
import { ContactComponent } from './contact/contact.component';
import { PortifolioComponent } from './portifolio/portifolio.component';

export const routes: Routes = [
  { path: '', redirectTo: 'demo', pathMatch: 'full' }, 
  { path: 'demo', component: DemoComponent },
  { path: 'backend', component: BackendComponent },
  { path: 'frontend', component: FrontendComponent },
  { path: 'portfolio', component: PortifolioComponent }, 
  { path: 'contact', component: ContactComponent },
];

