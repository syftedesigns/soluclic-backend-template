import { Component, OnInit } from '@angular/core';
import {MatDialog, MatTableDataSource} from '@angular/material';
import { ProfileComponent } from '../../shared/profile/profile.component';
import { ObjectSoluclicProvider } from '../../../classes/providers.class';
import { ClientServicesService } from '../../../services/api/client-services.service';
import { PartialObserver } from 'rxjs';
@Component({
  selector: 'app-employers',
  templateUrl: './employers.component.html',
  styleUrls: ['./employers.component.css']
})
export class EmployersComponent implements OnInit {
  displayedColumns: string[] = ['name', 'email', 'phone', 'date', 'status', 'action'];
  temporalTable: ObjectSoluclicProvider[] = [];
  dataSource = new MatTableDataSource<ObjectSoluclicProvider>();
  constructor(public dialog: MatDialog, private _cli: ClientServicesService) {
  }

  async ngOnInit() {
    const ArrayCli: ObjectSoluclicProvider[] = await this.LoadProviders();
    if (ArrayCli !== null) {
      this.temporalTable = ArrayCli;
      this.dataSource.data = this.temporalTable;
      this.dataSource._updateChangeSubscription();
    }
  }
  popupProfile(provider: ObjectSoluclicProvider) {
    const modalProfile = this.dialog.open(ProfileComponent, {
      width: '1024px',
      height: '800px',
      data: provider
    });

    // Para estar a la escucha de cuando cierre el modal
    modalProfile.afterClosed().subscribe(
      async (result: boolean) => {
        if (result) {
          this.temporalTable = await this.LoadProviders();
          this.dataSource.data = this.temporalTable;
          this.dataSource._updateChangeSubscription();
        }
      }
    );
  }
  LoadProviders(): Promise<ObjectSoluclicProvider[]> {
    return new Promise((resolve, reject) => {
      this._cli.InfoClientData('AllClients', 1).subscribe(
        (_providers: PartialObserver<any> | any): void => {
          if (_providers.status) {
            resolve(_providers.data);
          } else {
            resolve(null);
          }
        }
      );
    });
  }
}
