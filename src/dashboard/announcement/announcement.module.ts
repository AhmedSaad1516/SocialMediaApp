import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnnouncementRoutingModule } from './announcement-routing.module';
import { AnnouncementComponent } from './announcement/announcement.component';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AnnouncementComponent
  ],
  imports: [
    CommonModule,
    AnnouncementRoutingModule,
    MatDialogModule,
    
  ]
})
export class AnnouncementModule { }
