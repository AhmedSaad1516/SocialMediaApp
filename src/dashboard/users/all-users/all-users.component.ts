import { Component  } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {  MatDialog } from '@angular/material/dialog';
import { UsersService } from '../services/users.service';
import { AddusersComponent } from 'src/dashboard/addusers/addusers/addusers.component';



@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent {

  showModel:boolean=false
  photoName :any
  url :any= "";
  img:boolean=false
  showError:boolean=false
  users:any[]=[]


  
  constructor(
   private serv:UsersService,
    private toaster:ToastrService,public dialog: MatDialog
   ) { }
    
  ngOnInit(): void {

  this.getUsers()

  }
  
  getUsers(){
    this.serv.getAllUsers().subscribe(
      (data:any) =>{
      this.users=data.user
      
  
  
    })
  }
  openForm(){
       
    const dialogRef = this.dialog.open(AddusersComponent, {
     width:'750px',
     height:'60%',
     disableClose : true
       });
   
       dialogRef.afterClosed().subscribe(result => {
         if (result == true){
           this.getUsers()
           } 
       });
      }
  
  
      updateinterestss(element:any){
       
    const dialogRef = this.dialog.open(AddusersComponent, {
     width:'750px',
     height:'60%',
     disableClose : true,
     data:element
       });
   
       dialogRef.afterClosed().subscribe(result => {
         if (result == true){
          this.getUsers()
         }
       });
      }
     

  
  deleteInterest(id:any){
    this.img=true
  this.serv.deleteUsers(id).subscribe((data:any)=>{
    this.toaster.success('Interests deleted successfully','',{
      timeOut:2000,
      progressBar:true,
      closeButton:true
    })
    let audio = new Audio
    audio.src='../../../assets/notification-sound/login.wav'
    audio.load()
    audio.play()
    this.getUsers()
    this.img=false
  },error =>{
    this.img=false
  
  })
  }
  
 
}
