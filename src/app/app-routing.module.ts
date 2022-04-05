import { ProgramComponent } from './program/program.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { EnterComponent } from './enter/enter.component';
import { TeamComponent } from './team/team.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LangComponent } from './program/lang/lang.component';
import { ArabicBasicsComponent } from './arabic-basics/arabic-basics.component';
import { ArabicFontComponent } from './arabic-font/arabic-font.component';
import { EnglishBasicsComponent } from './english-basics/english-basics.component';
import { EnglishConvarsationComponent } from './english-convarsation/english-convarsation.component';
import { ComputerComponent } from './program/computer/computer.component';
import { BasicsComponent } from './program/computer/basics/basics.component';
import { CodingComponent } from './program/computer/coding/coding.component';
import { InternetComponent } from './program/computer/internet/internet.component';
import { HtmlComponent } from './program/computer/html/html.component';
import { UsyMathmComponent } from './program/usy-mathm/usy-mathm.component';
import { UsyMathComponent } from './usy-math/usy-math.component';
import { VedicMathComponent } from './vedic-math/vedic-math.component';
import { ProgramDetailsComponent } from './program/program-details/program-details.component';
import { SkillsComponent } from './program/program-details/skills/skills.component';
import { KidsComponent } from './program/program-details/kids/kids.component';
import { QraanComponent } from './program/qraan/qraan.component';
import { QraanLearningComponent } from './program/qraan/qraan-learning/qraan-learning.component';
const routes: Routes = [{path:'',component:HomeComponent},
  { path: 'program', component:ProgramComponent,children:
  [{path:'lang',component:LangComponent,children:[
    {path:'arabic-font',component:ArabicFontComponent},
    {path:'arabic-basics',component:ArabicBasicsComponent},
     {path:'english-basics',component: EnglishBasicsComponent},
     {path:'english-conv',component:EnglishConvarsationComponent},

  ]},
  {path:'computer',component:ComputerComponent,children:[
    {path:'basics',component:BasicsComponent},
    {path:'coding',component: CodingComponent},
    {path:'internet',component:InternetComponent},
    {path:'arabic-font',component:ArabicFontComponent},
    { path: 'html', component:HtmlComponent},
  ]},
{   path:'usy-math',component:UsyMathmComponent, children:[
  {path:'usy',component:UsyMathComponent},{
    path:'vedic',component:VedicMathComponent
  },
]},
{path:'skills',component:ProgramDetailsComponent,children:[
  {
    path:'drawing',component:KidsComponent},{
      path:'skill',component:SkillsComponent
    },
]},
{path:'quran',component:QraanComponent,children:[
  {path:'quran-learning',component:QraanLearningComponent
},
]}]},
{ path: 'home', component:HomeComponent},
  { path: 'sign', component:SignInComponent},
  { path: 'enter', component:EnterComponent},
  { path: 'team', component:TeamComponent},
  { path: 'contact', component:ContactUsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
