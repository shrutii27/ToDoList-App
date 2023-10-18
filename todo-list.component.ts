import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  itemText: string='';
  todoItems: {
    text: string
  }[]=[];

  addItem(){
    const itemText = this.itemText.trim();
    if (itemText !==''){
      this.todoItems.push({text: itemText});
      this.itemText='';
    }
  }

  removeItem(item: { text: string }) {
    const index = this.todoItems.indexOf(item);
    if(index !== -1){
      this.todoItems.splice(index, 1);
    }
  }

}
