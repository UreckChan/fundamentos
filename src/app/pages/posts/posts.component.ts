import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit {
  //Propiedad que almacena/ guarda los datos leidos(Posts)
  data:any[] = [];
  
  //constructor
  constructor(private dataService:DataService){}

  //método ngOnInit
  ngOnInit(): void {
    this.dataService.getPosts().subscribe((posts:any['']) => {
      this.data = posts;
    });
  }
}
