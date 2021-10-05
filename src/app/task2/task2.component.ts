import { Component, OnInit, ViewChild } from '@angular/core';
 
import {MatTable} from '@angular/material/table';
export interface StaffInterface {
  Server_1: string;
  Server_2: string;
  Server_3: string;
  Server_4: string;
  Server_5: string;
  Server_6: string;
  Server_7: string;
  Server_8: string;
  Server_9: string;
  Server_10: string;
}
@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css']
})
export class Task2Component implements OnInit {
  displayedColumns: string[] = ['Server_1', 'Server_2', 'Server_3', 'Server_4', 'Server_5', 'Server_6', 'Server_7', 'Server_8', 'Server_9', 'Server_10'];
  dataSource = [
    {Server_1: "",Server_2: "",Server_3: "",Server_4: "",Server_5: "",Server_6: "",Server_7: "",Server_8: "",Server_9: "",Server_10: ""},
     
  ];

  @ViewChild(MatTable) table: MatTable<StaffInterface>;
  Customer_Name=""
  Customer_Rating=""
  showError=false;
  showError1=false;
  Error="Please enter customer rating between 1-5"
  Error2="Please enter value for customer name"
  ratingOrder(rating,name)
  {
    console.log("Customer_Name = "+name);
    console.log("Customer_Rating = "+rating);
    var i;
    var first=0;
    var second=0;
    var exe1=null
    var exe2=null
     
    if(rating=="5" || rating==5)
    {
      for(i=0;i<this.dataSource.length;i++)
      { if(this.dataSource[i].Server_9!="") {  first++   }
        if(this.dataSource[i].Server_10!="")  { second++  }  }
      if(first>second)
      {  for(i=0;i<this.dataSource.length;i++)  {  if(this.dataSource[i].Server_10=="")  {  if(exe1==null) { exe1=i;  } }  }
         if(exe1!=null)  {   this.dataSource[exe1].Server_10=name ;   }
         else     {
            const a={  Server_1: "",Server_2: "",Server_3: "",Server_4: "",Server_5: "",Server_6:"",Server_7: "",Server_8: "",Server_9: "",Server_10: name }  
            this.dataSource.push(a);   }    }
      else if(second==first)  {  for(i=0;i<this.dataSource.length;i++)  {  if(this.dataSource[i].Server_9=="")  { if(exe1==null) { exe1=i;  }  }   }  
      if(exe1!=null) { this.dataSource[exe1].Server_9=name ;}  else   {
            const a={  Server_1: "",Server_2: "",Server_3:"",Server_4: "",Server_5: "",Server_6: "",Server_7: "",Server_8: "",Server_9: name,Server_10: "" }  
            this.dataSource.push(a);}  }
    }
    else if(rating=="4" || rating==4)
    {
      first=0;second=0;exe1=null;exe2=null;
      for(i=0;i<this.dataSource.length;i++)
      { if(this.dataSource[i].Server_7!="") {  first++   }
        if(this.dataSource[i].Server_8!="")  { second++  }  }
      if(first>second)
      {  for(i=0;i<this.dataSource.length;i++)  {  if(this.dataSource[i].Server_8=="")  { if(exe1==null) { exe1=i;  }; }  }
         if(exe1!=null)  {   this.dataSource[exe1].Server_8=name ;   }
         else     {
            const a={  Server_1: "",Server_2: "",Server_3: "",Server_4: "",Server_5: "",Server_6:"",Server_7: "",Server_8: name,Server_9: "",Server_10: "" }  
            this.dataSource.push(a);   }    }
      else if(second==first)  {  for(i=0;i<this.dataSource.length;i++)  {  if(this.dataSource[i].Server_7=="")  { if(exe1==null) { exe1=i;  }  }   }  
      if(exe1!=null) { this.dataSource[exe1].Server_7=name ;}  else   {
            const a={  Server_1: "",Server_2: "",Server_3:"",Server_4: "",Server_5: "",Server_6: "",Server_7: name,Server_8: "",Server_9: "",Server_10: "" }  
            this.dataSource.push(a);}  }
    }
    else if(rating=="3" || rating==3)
    {
      first=0;second=0;exe1=null;exe2=null;
      for(i=0;i<this.dataSource.length;i++)
      { if(this.dataSource[i].Server_5!="") {  first++   }
        if(this.dataSource[i].Server_6!="")  { second++  }  }
      if(first>second)
      {  for(i=0;i<this.dataSource.length;i++)  {  if(this.dataSource[i].Server_6=="")  { if(exe1==null) { exe1=i;  }; }  }
         if(exe1!=null)  {   this.dataSource[exe1].Server_6=name ;   }
         else     {
            const a={  Server_1: "",Server_2: "",Server_3: "",Server_4: "",Server_5: "",Server_6:name,Server_7: "",Server_8: "",Server_9: "",Server_10: "" }  
            this.dataSource.push(a);   }    }
      else if(second==first)  {  for(i=0;i<this.dataSource.length;i++)  {  if(this.dataSource[i].Server_5=="")  { if(exe1==null) { exe1=i;  }  }   }  
      if(exe1!=null) { this.dataSource[exe1].Server_5=name ;}  else   {
            const a={  Server_1: "",Server_2: "",Server_3:"",Server_4: "",Server_5: name,Server_6: "",Server_7: "",Server_8: "",Server_9: "",Server_10: "" }  
            this.dataSource.push(a);}  }
    }
    else if(rating=="2" || rating==2)
    {
      first=0;second=0;exe1=null;exe2=null;
      for(i=0;i<this.dataSource.length;i++)
      { if(this.dataSource[i].Server_3!="") {  first++   }
        if(this.dataSource[i].Server_4!="")  { second++  }  }
      if(first>second)
      {  for(i=0;i<this.dataSource.length;i++)  {  if(this.dataSource[i].Server_4=="")  { if(exe1==null) { exe1=i;  }; }  }
         if(exe1!=null)  {   this.dataSource[exe1].Server_4=name ;   }
         else     {
            const a={  Server_1: "",Server_2: "",Server_3: "",Server_4: name,Server_5: "",Server_6: "",Server_7: "",Server_8: "",Server_9: "",Server_10: "" }  
            this.dataSource.push(a);   }    }
      else if(second==first)  {  for(i=0;i<this.dataSource.length;i++)  {  if(this.dataSource[i].Server_3=="")  { if(exe1==null) { exe1=i;  }  }   }  
      if(exe1!=null) { this.dataSource[exe1].Server_3=name ;}  else   {
            const a={  Server_1: "",Server_2: "",Server_3:name,Server_4: "",Server_5: "",Server_6: "",Server_7: "",Server_8: "",Server_9: "",Server_10: "" }  
            this.dataSource.push(a);}  }
    }
    else if(rating=="1" || rating==1)
    {
          first=0;second=0;exe1=null;exe2=null;
        for(i=0;i<this.dataSource.length;i++)
        { if(this.dataSource[i].Server_1!="") {  first++   }
          if(this.dataSource[i].Server_2!="")  { second++  }  }
        if(first>second)
        {  for(i=0;i<this.dataSource.length;i++)  {  if(this.dataSource[i].Server_2=="")  { if(exe1==null) { exe1=i;  }; }  }
           if(exe1!=null)  {   this.dataSource[exe1].Server_2=name ;   }
           else     {
              const a={  Server_1: "",Server_2: name,Server_3: "",Server_4: "",Server_5: "",Server_6: "",Server_7: "",Server_8: "",Server_9: "",Server_10: "" }  
              this.dataSource.push(a);   }    }
        
        else if(second==first)  {  for(i=0;i<this.dataSource.length;i++)  {  if(this.dataSource[i].Server_1=="")  { if(exe1==null) { exe1=i;  }  }   } 
         
        if(exe1!=null) { this.dataSource[exe1].Server_1=name ;}  else   {
              const a={  Server_1: name,Server_2: "",Server_3: "",Server_4: "",Server_5: "",Server_6: "",Server_7: "",Server_8: "",Server_9: "",Server_10: "" }  
              this.dataSource.push(a);}  }
    }
  }
  triggerTable()
  {
    if(Number(this.Customer_Rating)>5)
    {
      this.showError=true
    }
    else
    {
      this.showError=false
    }
    if(this.Customer_Name.trim()=="")
    {
      this.showError1=true
    }
    else
    {
      this.showError1=false
    }
    this.ratingOrder(this.Customer_Rating,this.Customer_Name)
    console.log("this.dataSource");
    console.log(this.dataSource);
    this.table.renderRows();
    this.Customer_Name=""
    this.Customer_Rating="";
  }
  constructor() { }

  ngOnInit(): void {
  }

}
