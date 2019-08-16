import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    // this.get();
      this.getTasks();
      this.createTask({title: 'Cleaning', description: 'N/A'});
      this.getTask("5d571179b1898b08dcb205c6");
      this.updateTask("5d571179b1898b08dcb205c6", {title: 'Washing'})
      this.deleteTask("5d571179b1898b08dcb205c6")
  }

  getTasks(){
    this._http.get('/tasks').subscribe(data => console.log("Got our tasks!", data));
 }

  createTask(Task: Object) {
    this._http.post('/new', Task ).subscribe(data => console.log('New Tasks Created.'));
  }

  getTask(id: string) {
    this._http.get(`/task/${id}`).subscribe(data => console.log('Got my task!', data));
  }

  updateTask(id: string, Task: Object) {
    this._http.put(`/update/${id}`, Task).subscribe(data => console.log('updated my task!', data));
  }

  deleteTask(id: string) {
    this._http.delete(`/remove/${id}`).subscribe(data => console.log('Got my task!', data));

  }


}
