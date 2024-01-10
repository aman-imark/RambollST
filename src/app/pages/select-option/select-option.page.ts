import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';


@Component({
  selector: 'app-select-option',
  templateUrl: './select-option.page.html',
  styleUrls: ['./select-option.page.scss'],
})
export class SelectOptionPage implements OnInit {

  constructor(private router: Router) {}



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


  ngOnInit() {
  }

}
