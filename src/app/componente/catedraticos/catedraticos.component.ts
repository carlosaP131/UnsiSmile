import { Component, OnInit } from '@angular/core';
import { CatedraticoService } from 'src/app/fservice/catedraticos.service';

@Component({
  selector: 'app-catedraticos',
  templateUrl: './catedraticos.component.html',
  styleUrls: ['./catedraticos.component.css']
})
export class CatedraticosComponent implements OnInit{
 
  constructor(private service:CatedraticoService){}

  ngOnInit(): void {
      this.getCatedraticos();
  }

  getCatedraticos(): void {
    this.service.getCatedraticos()
    .subscribe(
      data =>{
       // this.listaCatedratico = data
      },
      error =>{
        console.log(error)
      }
    )
  }
}

