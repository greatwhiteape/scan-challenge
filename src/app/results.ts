export class Results {
  constructor(
    public inputs: {
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
    public errors: any[],
    public warnings: any[],
    public version: string,
    public ssc_info: any,
    public station_info: {
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
    public outputs: {
      ac_monthly: number[],
      poa_monthly: number[],
      solrad_monthly: number[],
      dc_monthly: number[],
      ac_annual: number,
      solrad_annual:number,
      capacity_factor: number,
    }
  ) { }
}
