import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';


@Component({
  selector: 'app-dashbored',
  templateUrl: './dashbored.component.html',
  styleUrls: ['./dashbored.component.css']
})
export class DashboredComponent implements OnInit {
  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 7;
  tableSizes: any = [3, 6, 9, 12];
  
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.fetchPosts();
  }
  fetchPosts(): void {
    this.postService.getAllPosts().subscribe(
      (response) => {
        this.POSTS = response;
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  onTableDataChange(event: any) {
    this.page = event;
    this.fetchPosts();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetchPosts();
  }


}
