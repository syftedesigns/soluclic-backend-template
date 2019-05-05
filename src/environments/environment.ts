// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCMtc17DAyN0r4dRwL5nd798MvmCf93KYg',
    authDomain: 'soluclic-ba766.firebaseapp.com',
    databaseURL: 'https://soluclic-ba766.firebaseio.com',
    projectId: 'soluclic-ba766',
    storageBucket: 'soluclic-ba766.appspot.com',
    messagingSenderId: '692724292042'
  },
  mapbox: {
    token: 'pk.eyJ1IjoiaW5nY2FybG9zZSIsImEiOiJjanVoNDR3cmkwdnY2NDlwcHE5czU2MmhiIn0._ztgGFw7U3hBvZz9qsMA0A'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
