import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './layout/header/header.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { DialogComponent } from './components/dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListOfTodosComponent } from './components/list-of-todos/list-of-todos.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment';
import { TodoTemplateComponent } from './components/list-of-todos/components/todo-template/todo-template.component';
import { YoutubeSearchComponent } from './components/youtube-search/youtube-search.component';
import { HttpClientModule } from '@angular/common/http';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { AllDoneComponent } from './components/all-done/all-done.component';
import { DeleteAllComponent } from './components/delete-all/delete-all.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddTodoComponent,
    DialogComponent,
    ListOfTodosComponent,
    TodoTemplateComponent,
    YoutubeSearchComponent,
    AllDoneComponent,
    DeleteAllComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    DragDropModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    HttpClientModule,
    YouTubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
