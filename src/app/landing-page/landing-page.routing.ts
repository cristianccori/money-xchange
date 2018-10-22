import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from "./landing-page.component";

const LandingPageRoutes: Routes = [
    {
        path: 'landingpage',
        component: LandingPageComponent
    }
];

export const LandingPageRouting = RouterModule.forRoot(LandingPageRoutes);
