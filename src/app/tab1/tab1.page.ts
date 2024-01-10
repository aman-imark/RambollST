import { Component } from '@angular/core';

import { Router } from '@angular/router';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


  constructor(private router: Router) 
  
  { }




  goto_tableBooking(){    
    this.router.navigate(['/tabs/tab3']);
  }

  goto_queueChecker(){    
    this.router.navigate(['/tabs/tab2']);
  }


  goto_envFeedback(){    
    // this.router.navigate(['/env-feedback']);
    this.router.navigate(['/tabs/tab4']);
  }


  goto_appFeedback(){    
    this.router.navigate(['/app-feedback']);
  }

}
