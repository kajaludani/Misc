import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TextComponentComponent } from './text-component/text-component.component';
import { FancyTextComponent } from './fancy-text/fancy-text.component';
import { FancyCheckboxComponent } from './fancy-checkbox/fancy-checkbox.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { PlayerSubscribeComponent } from './subscription/player-subscribe/player-subscribe.component';
import { HtmlEditorComponent } from './html-editor/html-editor.component';
import {FormsModule} from '@angular/Forms';
@NgModule({
  declarations: [
    AppComponent,
    TextComponentComponent,
    FancyTextComponent,
    FancyCheckboxComponent,
    SubscriptionComponent,
    PlayerSubscribeComponent,
    HtmlEditorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
