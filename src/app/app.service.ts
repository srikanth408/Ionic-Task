import {Injectable} from '@angular/core';
import {Http,Response,Headers,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()


export class serviceComponent{
 private _url:string='https://jsonplaceholder.typicode.com/users';

    constructor(public _http:Http){

    }
  getUsers(){
        return this._http.get(this._url)
        .map((res:Response) => res.json());
    }
}