import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';


export interface dataStructure {
  inputs: {
    system_capacity: number,
    module_type: number,
    losses: number,
    array_type: number,
    tilt: number,
    azimuth: number,
    lat: number,
    lon: number,
    timeframe: string,
  },
  errors: any[],
  warnings: any[],
  version: string,
  ssc_info: any,
  station_info: {
    lat: number,
    lon: number,
    elev: number,
    tz: number,
    location: string,
    city: string,
    state: string,
    solar_resource_file: string,
    distance: number,
  },
  outputs: {
    ac_monthly: number[],
    poa_monthly: number[],
    solrad_monthly: number[],
    dc_monthly: number[],
    ac_annual: number,
    solrad_annual:number,
    capacity_factor: number,
  }
}

@Injectable({
  providedIn: 'root'
})
export class NrelService {

  constructor(private http: HttpClient) { }

  public submit_to_NREL(request_url: string) {
    return this.http.get(request_url);
  }
}
