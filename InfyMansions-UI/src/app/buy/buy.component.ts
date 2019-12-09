import { Component, OnInit } from '@angular/core';
import { GetpropertyService } from './getproperty.service';
import { Router } from '@angular/router'
import { User } from './user'
import { ViewService } from '../viewDetails/view.service';
import { SharedServService } from '../shared-serv.service';
import { MatSnackBar, MatDialog } from '../../../node_modules/@angular/material';

import { DialogComponent } from '../dialog/dialog.component';
import { DialogService } from '../dialog/dialog.service';


@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
  // propFor=["Buy","Rent","Both"];
  // proType=["House","Apartment","Both"]
  errorMessage: string;
  propertyArr: any[] = []
  buyArr: any[] = [];
  tempArr: any[] = [];
  propertyDb = [];

  filtered = null;
  areaFilter: String = "";
  propTypeFilter: String = null;
  propForFilter: String = null;
  bedFilter: Number = null;
  bathFilter: Number = null;
  minFilter: Number = null;
  maxFilter: Number = null;
  noContent: boolean = false;
  wishlist = [];

  userId: string;
  ownerDetails: User;
  userName: string;


  constructor(public dialog: MatDialog, private dialogServ: DialogService,
    private gd: SharedServService, private gpService: GetpropertyService,
    private router: Router, private viewServ: ViewService, private _snackBar: MatSnackBar) { }




  ngOnInit() {
    this.areaFilter=this.gd.putArea();
    this.userName = sessionStorage.getItem('name');
    this.userId = sessionStorage.getItem('userId');
    if (this.userId) {
      this.gpService.getList(this.userId).subscribe(
        (good) => {
          this.gpService.getPropertyDetail().subscribe(
            (propDb) => {
              this.propertyDb = propDb;
              this.filtered = propDb;
            },
            (error) => {
              this.errorMessage = error.error.message
            })
          this.wishlist = good;

        },
        (bad) => {
          this.errorMessage = bad.error.message;
        })
    }else{
      this.gpService.getPropertyDetail().subscribe(
        (propDb) => {
          this.propertyDb = propDb;
          this.filtered = propDb;
        },
        (error) => {
          this.errorMessage = error.error.message
        })
    }
  }

  down(event, value: string) {
    if (event.key === "Enter") {
      sessionStorage.setItem("PreviousUrl", "/home");
      sessionStorage.setItem("search", value.toString());
      this.router.navigate(['/buy']);
    }
  }

  filter() {
    this.filtered = this.propertyDb;
    if (this.areaFilter) {
      this.filtered = this.filtered.filter(_ => {

        return (_.area.toLowerCase().indexOf(this.areaFilter.toLowerCase()) != -1)
      })

    }
    if (this.propForFilter && this.propForFilter != "Both") {
      let favor1: String;
      if (this.propForFilter == "Rent") {

        favor1 = this.propForFilter;
      }
      else {

        favor1 = "Sale"
      }
      this.filtered = this.filtered.filter(_ => {
        return _.propertyType == favor1;
      });

    }
    if (this.propTypeFilter && this.propTypeFilter != "Both") {

      this.filtered = this.filtered.filter(_ => {
        return _.buildingType == this.propTypeFilter;
      });
    }

    if (this.bedFilter) {
      if (this.bedFilter < 0) {
        this.bedFilter = null;
      }
      else {
        this.filtered = this.filtered.filter(_ => {
          return _.noOfBedrooms == this.bedFilter;
        });
      }
    }


    if (this.bathFilter) {
      if (this.bathFilter < 0) {
        this.bathFilter = null;
      }
      else {
        this.filtered = this.filtered.filter(_ => {
          return _.noOfBathrooms == this.bathFilter;
        });
      }
    }


    if (this.minFilter) {
      if (this.minFilter < 0) {
        this.minFilter = null;
      }
      else {
        this.filtered = this.filtered.filter(_ => {
          return _.price >= this.minFilter;
        });
      }
    }


    if (this.maxFilter) {
      if (this.maxFilter < 0) {
        this.maxFilter = null;
      }
      else {
        this.filtered = this.filtered.filter(_ => {
          return _.price <= this.maxFilter;
        });
      }
    }


    if (this.filtered.length == 0) {

      this.noContent = true;
    }
    else {
      this.noContent = false;
    }

  }

  clear() {
    this.filtered = this.propertyDb;
    this.areaFilter = "";
    this.propTypeFilter = null;
    this.propForFilter = null;
    this.bedFilter = null;
    this.bathFilter = null;
    this.minFilter = null;
    this.maxFilter = null;

  }




  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
      verticalPosition: "top",
      panelClass: ['snackbar-position'],
      horizontalPosition: "center"
    });
  }

  popup(data) {
    this.openSnackBar(data, "Ok");
    this.router.navigate(['/login']);
  }

  contactOwner(sellerId: String): void {
    this.dialogServ.getUserById(sellerId).subscribe(data => {
      this.ownerDetails = data;
      const dialogRef = this.dialog.open(DialogComponent, {
        width: '600px',
        height: "125px",
        data: this.ownerDetails,
        position: {
          left: '400px',
          top: '250px'
        }
      });
      dialogRef.afterClosed().subscribe(result => {
        // console.log("The dialog box closed")
      })
    })
  }

  reroute(property) {
    this.gd.getDescription(property);
    this.router.navigate(['/view'])
  }


  wishChange(p) {
    if (this.userName) {
      let index = this.wishlist.indexOf(p);

      if (index == -1) {
        this.gpService.addToList({ userId: this.userId, propertyId: p }).subscribe(
          (success) => {
            this.openSnackBar(p + " is added to your wishlist", "Ok")
            this.wishlist.push(p)
          },
          (failure) => {
            this.openSnackBar(" Something went wrong..!", "Ok")

          }
        )
      } else {
        this.gpService.deleteFromList({ userId: this.userId, propertyId: p }).subscribe(
          (success) => {
            this.openSnackBar(p + " is removed from your wishlist.", "Ok")
            this.wishlist.splice(index, 1)
          },
          (failure) => {
            this.openSnackBar(" Something went wrong..!", "Ok");
          }
        )
      }
    }
  }

}

