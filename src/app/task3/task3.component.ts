import { Component, ViewChild ,OnInit} from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexXAxis,
  ApexPlotOptions,
  ApexStroke,
  ApexTitleSubtitle,
  ApexYAxis,
  ApexTooltip,
  ApexFill,
  ApexLegend
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
  tooltip: ApexTooltip;
  fill: ApexFill;
  legend: ApexLegend;
};
@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.css']
})
export class Task3Component implements OnInit {
  ngOnInit(): void {
  }
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>| any;
  staff : string[] = [];
  staffer=[] as any;
  choosedStaff=""
  triggerChart(data)
  {
    console.log(data);
    this.choosedStaff=data;
    var i;
    var series=[];
    for(i=0;i<this.staffer.length;i++)
    {
      if(this.staffer[i].name==data)
      {
        series=this.staffer[i].series
      }
    }
    console.log("series");
    console.log(series);
    this.openChart(series)
  }
  initialFunc()
 {
  this.staffer=[{
     name:"Staff 1",
     series:[
      {
        name: "Level 5",
        data: [4, 3, 2, 3]
      },
      {
        name: "Level 4",
        data: [0, 2, 4, 2]
      },
      {
        name: "Level 3",
        data: [20, 10, 10, 40]
      },
      {
        name: "Level 2",
        data: [10, 14, 5, 34]
      },
      {
        name: "Level1",
        data: [1, 4, 20, 24]
      }
     ]
  },
  {
    name:"Staff 2",
    series:[{
      name: "Level 5",
      data: [9, 7, 5, 8]
    },
    {
      name: "Level 4",
      data: [13, 2, 3, 5]
    },
    {
      name: "Level 3",
      data: [25, 12, 19, 32]
    },
    {
      name: "Level 2",
      data: [44, 55, 41, 37]
    },
    {
      name: "Level1",
      data: [12, 17, 11, 9]
    }]
 },
 {
  name:"Staff 3",
  series:[{
    name: "Level 5",
    data: [15, 2, 11, 9]
  },
  {
    name: "Level 4",
    data: [13, 12, 13, 12]
  },
  {
    name: "Level 3",
    data: [9, 7, 5, 8]
  },
  {
    name: "Level 2",
    data: [12, 17, 11, 9]
  },
  {
    name: "Level1",
    data: [44, 55, 41, 37]
  }]
},
{
  name:"Staff 4",
  series:[{
    name: "Level 5",
    data: [14, 25, 11, 1]
  },
  {
    name: "Level 4",
    data: [13, 12, 3, 5]
  },
  {
    name: "Level 3",
    data: [12, 17, 11, 59]
  },
  {
    name: "Level 2",
    data: [9, 7, 35, 48]
  },
  {
    name: "Level1",
    data: [25, 12, 19, 2]
  }]
}]
 }
 openChart(ser)
 {
  this.chartOptions = {
    series:  ser,
    chart: {
      type: "bar",
      height: 350,
      stacked: true
    },
    plotOptions: {
      bar: {
        horizontal: true
      }
    },
    stroke: {
      width: 1,
      colors: ["#fff"]
    },
    title: {
      text: "Weekly Collection Report for the staff"
    },
    xaxis: {
      categories: ["Monday", "Tuesday", "Wednesday", "Thursday"]
      
    },
    yaxis: {
      title: {
        text: undefined
      }
    },
    
    fill: {
      opacity: 1
    },
    legend: {
      position: "top",
      horizontalAlign: "left",
      offsetX: 40
    }
  };
 }
  constructor() { 
    this.initialFunc();
    this.staff=["Staff 1","Staff 2","Staff 3","Staff 4"];
    this.choosedStaff="Staff 1";
    this.triggerChart("Staff 1")
    
    
}

  

}
