export class Form {
  constructor(
    public format:  string,
    public api_key: string,
    public timeframe: string,
    public system_capacity?: number,
    public module_type?: number,
    public losses?: number,
    public array_type?: number,
    public tilt?: number,
    public azimuth?: number,
    public lat?: number,
    public lon?: number,
  ) { }
}
