// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.


// https://rapidapi.com/weatherapi/api/weatherapi-com/
// here i have used weatherapi
export const environment = {
  production: false,
  weatherApiBaseUrl: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
  XRapidAPIHostHeaderName: 'X-RapidAPI-Host', 
  XRapidAPIHostHeaderValue:  'weatherapi-com.p.rapidapi.com',
  XRapidAPIKeyHeaderName: 'X-RapidAPI-Key',
  XRapidAPIKeyHeaderValue: 'f1582ecac9mshd428d85ee57bc17p1170d4jsna66480b8b39d',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
