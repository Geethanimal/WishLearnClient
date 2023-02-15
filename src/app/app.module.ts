import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { DynamicWallComponent } from './components/dynamic-wall/dynamic-wall.component';
import { DynamicLiveclassesComponent } from './components/dynamic-liveclasses/dynamic-liveclasses.component';
import { DynamicUserprofileComponent } from './components/dynamic-userprofile/dynamic-userprofile.component';
import { PosterFormComponent } from './components/poster-form/poster-form.component';
import { PosterComponent } from './components/poster/poster.component';
import { LiveclassComponent } from './components/liveclass/liveclass.component';
import { ChatRoomComponent } from './components/chat-room/chat-room.component';
import { LiveVideoComponent } from './components/live-video/live-video.component';
import { StaticAboutusComponent } from './components/static-aboutus/static-aboutus.component';
import { StaticHelpComponent } from './components/static-help/static-help.component';
import { HomeStaticComponent } from './components/home-static/home-static.component';
import { StaticNavComponent } from './components/static-nav/static-nav.component';
import { DynamicNavComponent } from './components/dynamic-nav/dynamic-nav.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LiveStreamComponent } from './components/live-stream/live-stream.component';
import { ClassListComponent } from './components/class-list/class-list.component';
import { CreateClassFormComponent } from './components/create-class-form/create-class-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    RegisterFormComponent,
    DynamicWallComponent,
    DynamicLiveclassesComponent,
    DynamicUserprofileComponent,
    PosterFormComponent,
    PosterComponent,
    LiveclassComponent,
    ChatRoomComponent,
    LiveVideoComponent,
    StaticAboutusComponent,
    StaticHelpComponent,
    HomeStaticComponent,
    StaticNavComponent,
    DynamicNavComponent,
    ProfileComponent,
    LiveStreamComponent,
    ClassListComponent,
    CreateClassFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
