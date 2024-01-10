import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';


@Component({
  selector: 'app-sustainable',
  templateUrl: './sustainable.page.html',
  styleUrls: ['./sustainable.page.scss'],
})
export class SustainablePage implements OnInit {

  sustainData = [
    {
      id: 1,
      title: "Meat-free Mondays",
      icon: "assets/sus1.svg",
      data: [{
        image: "assets/1sd.png",
        title: "MEAT-FREE MONDAYS",
        desc: "<p>Did you know...</p> <p>If you skip just 1 serving of beef every Monday, you would save the same amount of emissions as driving from Singapore to Ipoh (560km) in a car.</p>",
      }]
    },
    {
      id: 2,
      title: "Reduce Aircon Use",
      icon: "assets/sus2.svg",
      data: [{
        image: "assets/2sd.png",
        title: "REDUCE AIRCON USE",
        desc: "<p>Did you know... </p> <p>Air conditioning accounts for up to 20% of Singapore's carbon emissions.</p> <p>Turning on your AC unit at 10am instead of 9am saves approximately 175kg of CO2 per year.</p>",
      }]
    },
    {
      id: 3,
      title: "Recycle Your Weekly Waste",
      icon: "assets/sus3.svg",
      data: [{
        image: "assets/3sd.png",
        title: "RECYCLE YOUR WEEKLY WASTE",
        desc: "<p>Did you know... </p> <p>Singapore sent 3.1 billion kilograms of waste to landfill in 2021. At that rate, Semakau Landfill will be full by 2035.</p> <p>The more we recycle, the more we can extend the lifespan of Semakau Landfill; not to mention preventing plastic pollution of the natural environment.</p>",
      }]
    },
    {
      id: 4,
      title: "Bring A Reusable Bag",
      icon: "assets/sus4.svg",
      data: [{
        image: "assets/4sd.png",
        title: "BRING A RESUABLE BAG",
        desc: "<p>Did you know... </p> <p>On average a plastic shopping bag is used for just 12 minutes. It takes up to 1000 years to break down.</p> <p>Using a reusable bag, for grocery shopping and errands can reduce the number of plastic bags we produce as well as saving you money.</p>",
      }]
    },
    {
      id: 5,
      title: "Start Conserving Water",
      icon: "assets/sus5.svg",
      data: [{
        image: "assets/5sd.png",
        title: "START CONSERVING WATER",
        desc: "<p>Did you know that conserving water saves energy? Energy is needed to filter, heat and pump water to your home, so reducing your water use also reduces your carbon footprint.</p> <p>Using less water keeps more in our ecosystems and helps to keep wetland habitats topped up for animals like otters, birds and fishes.</p>",
      }]
    },
    {
      id: 6,
      title: "Unplug Your Appliances",
      icon: "assets/sus6.svg",
      data: [{
        image: "assets/6sd.png",
        title: "UNPLUG YOUR APPLIANCES",
        desc: "<p>You might be amazed to learn that all electronics suck energy when they’re plugged in, even if they’re powered down. It's called 'Vampire Power'</p> <p>Anytime a cord is plugged into a socket, it’s drawing energy – so although your device isn’t charging, you’re still contributing to your carbon footprint. Simple solution? Leave your electronics unplugged at all times, unless you’re actually using them. This is the best way to reduce your energy bill and you can save the world by Reducing Your Carbon Footprint.</p>",
      }]
    }];

  constructor(private router: Router) { }



  goto_subSustainable(sub_stan_id, sus_dt_data){
    console.log(sub_stan_id);
    console.log(sus_dt_data);

      this.router.navigate(['sustainable-detail'], 
      {queryParams: { title: sus_dt_data[0].title, image: sus_dt_data[0].image, desc: sus_dt_data[0].desc }});
    
    // if(sub_stan_id == "1"){
    //    this.router.navigate(['sustainable-detail']);
    // }else if(sub_stan_id == "2"){
    //    this.router.navigate(['sustainable']);
    // }else if(sub_stan_id == "3"){
    //    this.router.navigate(['sustainable']);
    // }else if(sub_stan_id == "4"){
    //    this.router.navigate(['sustainable']);
    // }else{
    //    this.router.navigate(['sustainable']);
    // }
    // this.router.navigate(['sustainable']);
  }



  ngOnInit() {
  }

}
