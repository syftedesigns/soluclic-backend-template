import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserAdminModel } from '../../../classes/userAdmin.class';
import { AuthService } from '../../../services/auth/auth.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
declare function init_plugins();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _auth: AuthService, private _matSnack: MatSnackBar,
    private _router: Router) { }

  ngOnInit() {
    init_plugins();
  }
  async LoginAdmin(form: NgForm) {
    if (form.invalid) {
      throw new Error('Formulario inválido');
    }
    const loginAuth: UserAdminModel = new UserAdminModel(form.value.USERNAME, form.value.PWD);
    this._auth.loginAdmin(loginAuth, 'loginAdmin')
      .subscribe(async (objectAdmin) => {
        if (objectAdmin.status) {
          // Si logea entonces guardamos
          const storage = await this._auth.saveStorage(objectAdmin.data[0],
             objectAdmin.data[0].username,
            objectAdmin.data[0].user_id);
            if (storage) {
              this._router.navigate(['/']);
            }
        } else {
          this._matSnack.open('Las credenciales son incorrectas', null, {
            duration: 4000,
            panelClass: ['red-snackbar']
          });
          form.reset();
          return;
        }
      });
  }
}
