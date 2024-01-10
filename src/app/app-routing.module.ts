import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  // },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
  },
  {
    path: 'splash',
    loadChildren: () => import('./pages/splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'env-feedback',
    loadChildren: () => import('./pages/env-feedback/env-feedback.module').then( m => m.EnvFeedbackPageModule)
  },
  {
    path: 'app-feedback',
    loadChildren: () => import('./pages/app-feedback/app-feedback.module').then( m => m.AppFeedbackPageModule)
  },
  {
    path: 'sustainable',
    loadChildren: () => import('./pages/sustainable/sustainable.module').then( m => m.SustainablePageModule)
  },
  {
    path: 'sustainable-detail',
    loadChildren: () => import('./pages/sustainable-detail/sustainable-detail.module').then( m => m.SustainableDetailPageModule)
  },
  {
    path: 'select-option',
    loadChildren: () => import('./pages/select-option/select-option.module').then( m => m.SelectOptionPageModule)
  },
  {
    path: 'table-status',
    loadChildren: () => import('./pages/table-status/table-status.module').then( m => m.TableStatusPageModule)
  },
  {
    path: 'book-status',
    loadChildren: () => import('./pages/book-status/book-status.module').then( m => m.BookStatusPageModule)
  },
  {
    path: 'table-book',
    loadChildren: () => import('./pages/table-book/table-book.module').then( m => m.TableBookPageModule)
  },
  {
    path: 'screen-saver',
    loadChildren: () => import('./pages/screen-saver/screen-saver.module').then( m => m.ScreenSaverPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
