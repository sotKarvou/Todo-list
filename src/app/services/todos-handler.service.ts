import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, Subject } from 'rxjs';
import { collection, query, where } from '@firebase/firestore';

export interface Todo {
  title: string;
  description: string;
  done: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TodosHandlerService {
  constructor(private firestore: AngularFirestore) {}

  getTodos(): Observable<Todo[]> {
    return this.firestore.collection<Todo>('todos').valueChanges();
  }

  postTodo(newTodo: Todo) {
    this.firestore.collection('todos').add({
      title: newTodo.title,
      description: newTodo.description,
      done: newTodo.done,
    });
  }

  markAsDone(title: string) {
    this.firestore
      .collection('todos')
      .ref.where('title', '==', title)
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.size > 0) {
          const docId = querySnapshot.docs[0].id;
          this.firestore
            .collection('todos')
            .doc(docId)
            .update({ done: true })
            .then(() => console.log('Document updated successfully'))
            .catch((error) => console.log(`Error updating document: ${error}`));
        } else {
          console.log(`No document found with title=${title}`);
        }
      })
      .catch((error) => console.log(`Error querying collection: ${error}`));
  }

  deleteTodo(title: string) {
    this.firestore
      .collection('todos')
      .ref.where('title', '==', title)
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.size > 0) {
          const docId = querySnapshot.docs[0].id;
          this.firestore
            .collection('todos')
            .doc(docId)
            .delete()
            .then(() => console.log('Document updated successfully'))
            .catch((error) => console.log(`Error updating document: ${error}`));
        } else {
          console.log(`No document found with title=${title}`);
        }
      })
      .catch((error) => console.log(`Error querying collection: ${error}`));
  }
}
