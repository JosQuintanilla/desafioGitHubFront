import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiciosExternosService {

  public endpoints: any = {
    desafio: {
      url: "https://limitless-sierra-22142.herokuapp.com/",
      //url: "http://localhost:8080/",
      path: {
        buscarUsuario: "users/?",
        buscarRepos: "users/?/repos"
      }
    }
  }
  constructor(private http: HttpClient) { }

  getEndpointS(bffS: string) {
    return this.endpoints[bffS];
  }

  resolveUrl(bffS: string, path?: string) {
    const endpoint = this.getEndpointS(bffS);
    if (!endpoint) {
        return bffS + (path ? path : '');
    }
    return endpoint.url + (endpoint.url && endpoint.path[path]) || path || '';
  }

  public resolveUrlData(bffS: string, path?: string) {
    const endpoint = this.getEndpointS(bffS);
    if (!endpoint) {
        return bffS + (path ? path : '');
    }
    return endpoint.url + (endpoint.url && endpoint.path[path]) || path ;
  }

  makeGetRequest(bff: string, path: string,data: string): Observable<any> {
    console.log("Service - makeGetRequest");    
    console.log("Service - makeGetRequest url: ",this.resolveUrl(bff, path));
    var pathFinal = this.resolveUrl(bff, path);
    pathFinal = pathFinal.replace('?', data)
    console.log("Service - makeGetRequest pathFinal: ",pathFinal);
    return this.http.get(pathFinal);
  }

  makePostRequest(bff: string, path: string, data: any): Observable<any> {
    console.log("Service - makePostRequest");
    let tempHeader = {
        authorization: "",
        codigosesion: "",
        url: this.resolveUrl(bff, path)
    };
    return this.http.post(this.resolveUrl(bff, path), data, { headers: tempHeader });
  } 

  makePostSinTokenRequest(bff: string, path: string, data: any): Observable<any> {
    console.log("Service - makePostSinTokenRequest");
    return this.http.post(this.resolveUrl(bff, path), data);
  }

}
