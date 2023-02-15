import { Component, OnInit } from '@angular/core';
import { io } from "socket.io-client";

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit{

  socket: any;

  messages: any;
  form: any;
  input: any;
  room: any;



  ngOnInit(): void {
    this.socket = io('http://localhost:5400');

    this.socket.on("connect", () => {
      const item = document.createElement('li');
      // item.textContent = `You connected with id: ${this.socket.id}`;
      item.textContent = `You are connected!`;
      this.messages.appendChild(item);
      window.scrollTo(0, document.body.scrollHeight);
      
    })
    
    this.messages = document.getElementById('messages');
    this.form = document.getElementById('form');
    this.input = document.getElementById('input');


    this.socket.on('Hello', (data:any)=> console.log(data));

    this.socket.on('chat message', (msg:any) => {
      const item = document.createElement('li');
      // const list = item.classList;
      // list.add('bg-dark m-3 p-2');
      item.textContent = msg;
      item.classList.add('bg-dark')
      item.classList.add('m-3')
      item.classList.add('p-2')
      item.classList.add('shadow-lg')
      item.classList.add('rounded')
      this.messages.appendChild(item);
      window.scrollTo(0, document.body.scrollHeight);
    });

    this.room = 'class1'
    this.socket.emit('join-room',this.room, (msg: any) =>{
      const item = document.createElement('li');
      item.textContent = msg;
      this.messages.appendChild(item);
      window.scrollTo(0, document.body.scrollHeight);
    })

  }

  sendMessage() {
    
    if (this.input.value) {
      this.socket.emit('chat message', this.socket.id + ":   "+ this.input.value, this.room);
      this.input.value = '';
    }
  }

  JoinRoom(){
    this.room = 'class1'
    this.socket.emit('join-room',this.room, (msg: any) =>{
      const item = document.createElement('li');
      item.textContent = msg;
      this.messages.appendChild(item);
      window.scrollTo(0, document.body.scrollHeight);
    })
  }

}
