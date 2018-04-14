// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBbgg459VcerhLiJeydhzr710WGevbcfbw',
    authDomain: 'angular-lab-mde.firebaseapp.com',
    databaseURL: 'https://angular-lab-mde.firebaseio.com',
    projectId: 'angular-lab-mde',
    storageBucket: 'angular-lab-mde.appspot.com',
    messagingSenderId: '1019491059674'
  }
}
