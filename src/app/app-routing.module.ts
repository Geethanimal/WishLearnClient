import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeStaticComponent } from './components/home-static/home-static.component';
import { ChatRoomComponent } from './components/chat-room/chat-room.component';
import { DynamicLiveclassesComponent } from './components/dynamic-liveclasses/dynamic-liveclasses.component';
import { DynamicUserprofileComponent } from './components/dynamic-userprofile/dynamic-userprofile.component';
import { DynamicWallComponent } from './components/dynamic-wall/dynamic-wall.component';
import { LiveVideoComponent } from './components/live-video/live-video.component';
import { LiveclassComponent } from './components/liveclass/liveclass.component';
import { LiveStreamComponent } from './components/live-stream/live-stream.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { PosterComponent } from './components/poster/poster.component';
import { PosterFormComponent } from './components/poster-form/poster-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { StaticAboutusComponent } from './components/static-aboutus/static-aboutus.component';
import { StaticHelpComponent } from './components/static-help/static-help.component';
import { StaticNavComponent } from './components/static-nav/static-nav.component';
import { DynamicNavComponent } from './components/dynamic-nav/dynamic-nav.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ClassListComponent } from './components/class-list/class-list.component';

const routes: Routes = [
 { path: '', redirectTo: 'home', pathMatch: 'full' },
 { path: 'home', component: HomeStaticComponent },
 { path: 'chat-room', component: ChatRoomComponent },
 { path: 'dynamic-liveclass', component: DynamicLiveclassesComponent },
 { path: 'dynamic-userprofile', component: DynamicUserprofileComponent },
 { path: 'dynamic-wall', component: DynamicWallComponent },
 { path: 'live-video', component: LiveVideoComponent },
 { path: 'liveclass', component: LiveclassComponent },
 { path: 'login-form', component: LoginFormComponent },
 { path: 'poster', component: PosterComponent },
 { path: 'poster-form', component: PosterFormComponent },
 { path: 'register-form', component: RegisterFormComponent },
 { path: 'static-aboutus', component: StaticAboutusComponent },
 { path: 'static-help', component: StaticHelpComponent },
 { path: 'static-nav', component: StaticNavComponent },
 { path: 'dynamic-nav', component: DynamicNavComponent },
 { path: 'profile', component: ProfileComponent },
 { path: 'live-stream', component: LiveStreamComponent},
 { path: 'class-list', component: ClassListComponent},
 
];
 
@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule { }