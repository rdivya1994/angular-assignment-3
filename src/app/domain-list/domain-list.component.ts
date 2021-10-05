import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-domain-list',
  templateUrl: './domain-list.component.html',
  styleUrls: ['./domain-list.component.css']
})
export class DomainListComponent implements OnInit {
  domains:any;
  
  constructor(private http:HttpClient) { }

  ngOnInit() {
    let resp=this.http.get("http://localhost:3000/domain_list");
    resp.subscribe((data)=>this.domains=data);
 
  }

}
