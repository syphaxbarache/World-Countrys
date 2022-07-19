import { Component, OnInit } from '@angular/core';
import { CountrysService } from 'src/app/services/Countrys.service';

@Component({
  selector: 'app-accueil',
  templateUrl:'./accueil.html',
  styleUrls: ['./accueil.css']
})
export class AccueilComponent implements OnInit {

  inputRadio : any = 'All';
  allcontry! :any[];
  countrysArray!:any[];
  rangeValue : number = 36 ;
  constructor(private countrysService:CountrysService) {
    
   }

  ngOnInit(): void {
    this.countrysArray=[];
    this.getAllFlags();
  }
  getAllFlags(){
    this.countrysService.getAllCountrys().subscribe((res)=>{
      this.allcontry = res;
      this.countrysArray=res.sort((a, b) => b.population - a.population).slice(0,this.rangeValue);
    },(err)=>{
      console.log(err);
    })
  }
  changeInputRange(inputRange:any){
    this.rangeValue = inputRange.value;
    if(this.inputRadio==="All"){
      this.countrysArray=this.allcontry.sort((a, b) => b.population - a.population).slice(0,this.rangeValue);
    }else{
      this.countrysArray=this.allcontry.sort((a, b) => b.population - a.population).filter((country) => country.region=== this.inputRadio).slice(0,this.rangeValue);
    }
  }
  changeInputRadio(inputRadio:any){
    this.inputRadio = inputRadio.value;
    if(this.inputRadio==="All"){
      this.countrysArray=this.allcontry.sort((a, b) => b.population - a.population).slice(0,this.rangeValue);
    }else{
      this.countrysArray=this.allcontry.sort((a, b) => b.population - a.population).filter((country) => country.region=== this.inputRadio).slice(0,this.rangeValue);
    }
    
  }
}
