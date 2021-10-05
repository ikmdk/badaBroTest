import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component implements OnInit {
  wheightage=[] as any;
  wheightageInput=[] as any;
  brandRating=0;
  contactRating=0;
  photoClarityRating=0
  submittionRating=0
  compCollegRating=0;
  totalWeightage=0.0
  brand="";
  contact="";
  photoClarity=""
  submittion=""
  compColleg="";

  constructor() {
    this.initializeArr();
    this.CalculateWeightage()
     
   }
   CalculateWeightage()
   {

     this.brandRating=this.wheightage[0]["phoneBrand"][0][this.wheightageInput[0].phoneBrand];
     this.brand=this.wheightageInput[0].phoneBrand
     this.contactRating=this.wheightage[0]["Contact"][0][this.wheightageInput[0].Contact];
     this.contact=this.wheightageInput[0].Contact
     this.photoClarityRating=this.wheightage[0]["PhotoClarity"][0][this.wheightageInput[0].PhotoClarity];
     this.photoClarity=this.wheightageInput[0].PhotoClarity
     this.submittionRating=this.wheightage[0]["NumberOfSubmittion"][0][this.wheightageInput[0].NumberOfSubmittion];
     this.submittion=this.wheightageInput[0].NumberOfSubmittion
     this.compCollegRating=this.wheightage[0]["CompColleg"][0][this.wheightageInput[0].CompColleg];
     this.compColleg=this.wheightageInput[0].CompColleg  
     this.totalWeightage=this.brandRating+this.contactRating+this.photoClarityRating+this.submittionRating+this.compCollegRating
     this.totalWeightage=this.totalWeightage/5;
      
   }
   
  initializeArr()
  {
    this.wheightageInput=[{
      "phoneBrand":"Redmi",
      "Contact":"100-150",
      "PhotoClarity":"60-80",
      "NumberOfSubmittion":"1",
      "CompColleg":"Tyre2"
    }]
    this.wheightage=[{
      "phoneBrand":[{
        "Samsung":5,
        "Nokia":3,
        "Redmi":3,
        "Oppo":2,
        "Vivo":1,
        "Oneplus":4,
        "Others":1
      }],
      "Contact":[{
        "300+":5,
        "200-300":4,
        "150-200":3,
        "100-150":2,
        "0-100":1
      }],
      "PhotoClarity":[{
        "80-100":5,
        "60-80":4,
        "40-60":3,
        "20-40":2,
        "0-20":1
      }],
      "NumberOfSubmittion":[{
        "1":5,
        "2":4,
        "3":3,
        "4":2,
        "5":1
      }],
      "CompColleg":[{
        "Tyre1":5,
        "Tyre2":3,
        "Tyre3":2,
        "Unknown":1
      }]
    }]
  }
  ngOnInit(): void {
    
  }

}
