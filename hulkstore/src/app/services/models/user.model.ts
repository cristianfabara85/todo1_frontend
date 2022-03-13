import { Injectable } from '@angular/core';

@Injectable()
export class UserModel {

    private _loginOk: any;
    private _tipo: any;

    public get loginOk() {
        return this._loginOk;
    }
    public set loginOk(loginOk) {
        this._loginOk = loginOk;
    }
    public get tipo() {
        return this._tipo;
    }
    public set tipo(tipo) {
        this._tipo = tipo;
    }

}

