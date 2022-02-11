import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProgramComponent } from './program/program.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { EnterComponent } from './enter/enter.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TeamComponent } from './team/team.component';
import { UsyMathComponent } from './usy-math/usy-math.component';
import { ProgramDetailsComponent } from './program/program-details/program-details.component';
import { LangComponent } from './program/lang/lang.component';
import { ComputerComponent } from './program/computer/computer.component';
import { UsyMathmComponent } from './program/usy-mathm/usy-mathm.component';
import { VedicMathComponent } from './vedic-math/vedic-math.component';
import { EnglishBasicsComponent } from './english-basics/english-basics.component';
import { EnglishConvarsationComponent } from './english-convarsation/english-convarsation.component';
import { ArabicBasicsComponent } from './arabic-basics/arabic-basics.component';
import { ArabicFontComponent } from './arabic-font/arabic-font.component';
import { BasicsComponent } from './program/computer/basics/basics.component';
import { OfficeComponent } from './program/computer/office/office.component';
import { InternetComponent } from './program/computer/internet/internet.component';
import { HtmlComponent } from './program/computer/html/html.component';
import { KidsComponent } from './program/program-details/kids/kids.component';
import { SkillsComponent } from './program/program-details/skills/skills.component';
import { QraanComponent } from './program/qraan/qraan.component';
import { QraanLearningComponent } from './program/qraan/qraan-learning/qraan-learning.component';
import { CodingComponent } from './program/computer/coding/coding.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProgramComponent,
    HomeComponent,
    FooterComponent,
    SignInComponent,
    EnterComponent,
    ContactUsComponent,
    TeamComponent,
    UsyMathComponent,
    ProgramDetailsComponent,
    LangComponent,
    ComputerComponent,
    UsyMathmComponent,
    VedicMathComponent,
    EnglishBasicsComponent,
    EnglishConvarsationComponent,
    ArabicBasicsComponent,
    ArabicFontComponent,
    BasicsComponent,
    OfficeComponent,
    InternetComponent,
    HtmlComponent,
    KidsComponent,
    SkillsComponent,
    QraanComponent,
    QraanLearningComponent,
    CodingComponent,


  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
