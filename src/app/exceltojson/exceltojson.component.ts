import { Component, OnInit } from '@angular/core';
import { TestService } from './test.service';
@Component({
  selector: 'app-exceltojson',
  templateUrl: './exceltojson.component.html',
  styleUrls: ['./exceltojson.component.css']
})
export class ExceltojsonComponent implements OnInit {
  data=""
  constructor(private memberService: TestService) { this.test() }
  test()
  {
    this.memberService.getMembers().subscribe(resp => {
      let data = resp;
      this.data=data;
     
    })
  }
  ngOnInit(): void {
  }

}
