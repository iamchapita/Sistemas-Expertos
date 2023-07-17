import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { ChatComponent } from './pages/chat/chat.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BottombarComponent } from './components/bottombar/bottombar.component';
import { ChatListComponent } from './components/chat-list/chat-list.component';
import { ChatDetailsComponent } from './pages/chat-details/chat-details.component';
import { ChatNavbarComponent } from './components/chat-navbar/chat-navbar.component';
import { ChatMessageInputComponent } from './components/chat-message-input/chat-message-input.component';
import { CallListComponent } from './components/call-list/call-list.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, FormLoginComponent, ChatComponent, NavbarComponent, BottombarComponent, ChatListComponent, ChatDetailsComponent, ChatNavbarComponent, ChatMessageInputComponent, CallListComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
