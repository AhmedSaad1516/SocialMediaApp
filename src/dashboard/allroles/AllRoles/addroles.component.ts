import { Component  } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {  MatDialog } from '@angular/material/dialog';
import { AddusersComponent } from 'src/dashboard/addusers/addusers/addusers.component';
import { UsersService } from 'src/dashboard/users/services/users.service';
import { RolesService } from '../services/roles.service';
import { AddroleComponent } from 'src/dashboard/addroles/addrole/addrole.component';



@Component({
  selector: 'app-addroles',
  templateUrl: './addroles.component.html',
  styleUrls: ['./addroles.component.css']
})
export class AddrolesComponent {
  roles:any[]=[]
  img:boolean=false

  
  constructor(
   private serv:RolesService,
    private toaster:ToastrService,public dialog: MatDialog
   ) { }
    
  ngOnInit(): void {

  this.getUsers()

  }
  
  getUsers(){
    this.img=true
    this.serv.getAllRoles().subscribe(
      (data:any) =>{
      this.roles=data.original.roles.data
      
  
      this.img=false
    },error=>{
      this.img=false
    })
    
  }
  openForm(){
       
    const dialogRef = this.dialog.open(AddroleComponent, {
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
       
    const dialogRef = this.dialog.open(AddroleComponent, {
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
  //   this.img=true
  // this.serv.deleteUsers(id).subscribe((data:any)=>{
  //   this.toaster.success('Interests deleted successfully','',{
  //     timeOut:2000,
  //     progressBar:true,
  //     closeButton:true
  //   })
  //   let audio = new Audio
  //   audio.src='../../../assets/notification-sound/login.wav'
  //   audio.load()
  //   audio.play()
  //   this.getUsers()
  //   this.img=false
  // },error =>{
  //   this.img=false
  
  // })
  }
  
}
