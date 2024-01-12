import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatTableModule} from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { MemberFormComponent } from './components/member-form/member-form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ToolComponent } from './components/tool/tool.component';
import { ArticleComponent } from './components/article/article.component';
import { EventComponent } from './components/event/event.component';
import { LayoutComponent } from './components/layout/layout.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import {  MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { FirebaseModule } from './Firebase.module';
import { LoginComponent } from './components/login/login.component';
import {MatCardModule} from '@angular/material/card';
import { EventFormComponent } from './components/event-form/event-form.component';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ToolsCreateComponent } from './components/tools-create/tools-create.component';
import {MatSelectModule} from '@angular/material/select';
import {  NgChartsModule } from 'ng2-charts';
import { ArticleFormComponent } from './components/article-form/article-form.component';
import { EnseignantComponent } from './components/enseignant/enseignant.component';
import { EtudiantComponent } from './components/etudiant/etudiant.component';
import { FullMemberComponent } from './components/full-member/full-member.component';
import { AffectArticleToMemberComponent } from './components/affect-article-to-member/affect-article-to-member.component';
import { AffectEventToMemberComponent } from './components/affect-event-to-member/affect-event-to-member.component';
import { AffectToolToMemberComponent } from './components/affect-tool-to-member/affect-tool-to-member.component';


@NgModule({
  declarations: [
    AppComponent,
    MemberFormComponent,
    ConfirmDialogComponent,
    DashboardComponent,
    ToolComponent,
    ArticleComponent,
    EventComponent,
    LayoutComponent,
    LoginComponent,
    EventFormComponent,
    ToolsCreateComponent,
    ArticleFormComponent,
    EnseignantComponent,
    EtudiantComponent,
    FullMemberComponent,
    AffectArticleToMemberComponent,
    AffectEventToMemberComponent,
    AffectToolToMemberComponent,
  ],
  imports: [
    NgChartsModule,
    MatSelectModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatDialogModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatMenuModule,
    FlexLayoutModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FirebaseModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
