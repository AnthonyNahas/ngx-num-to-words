<p align="center">
  <img alt="angular-material-extensions's logo"
   height="256px" width="256px" style="text-align: center;" 
   src="https://cdn.jsdelivr.net/gh/anthonynahas/ngx-num-to-words@master/assets/angular-material-extensions-logo.svg">
</p>

# ngx-num-to-words - Angular library simplifying generation of mailto links with Typescript

highly inspired and depends on [n2words](https://github.com/forzagreen/n2words)
Big thanks to [@forzagreen](https://github.com/forzagreen) :heart

--> [nodejs module](https://www.npmjs.com/package/n2words) 

[![npm version](https://badge.fury.io/js/ngx-num-to-words.svg)](https://badge.fury.io/js/ngx-num-to-words)
[![npm demo](https://img.shields.io/badge/demo-online-ed1c46.svg)](https://anthonynahas.github.io/ngx-num-to-words)
[![docs: typedoc](https://img.shields.io/badge/docs-typedoc-4D0080.svg)](https://anthonynahas.github.io/ngx-num-to-words/doc/index.html)
[![Join the chat at https://gitter.im/angular-material-extensions/Lobby](https://badges.gitter.im/angular-material-extensions/Lobby.svg)](https://gitter.im/angular-material-extensions/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![license](https://img.shields.io/github/license/anthonynahas/ngx-num-to-words.svg?style=flat-square)](https://github.com/AnthonyNahas/ngx-num-to-words/blob/master/LICENSE)


<p align="center">
  <img alt="ngx-num-to-words demonstration" style="text-align: center;"
   src="https://raw.githubusercontent.com/anthonynahas/ngx-num-to-words/HEAD/assets/e1.gif">
</p>



## Built by and for developers :heart:
Do you have any question or suggestion ? Please do not hesitate to contact us!
Alternatively, provide a PR | open an appropriate issue [here](https://github.com/angular-material-extensions/ngx-num-to-words/issues)

If you like this project, support [angular-material-extensions](https://github.com/angular-material-extensions) 
by starring :star: and sharing it :loudspeaker:

## Table of Contents
- [Demo](#demo)
- [Dependencies](#dependencies)
- [Installation](#installation)
- [API](#api)
- [Usage](#usage)
- [Run Demo App Locally](#run-demo-app-locally)
- [Other Angular Libraries](#other-angular-libraries)
- [Support](#support)
- [License](#license)

<a name="demo"/>

## [Demo](https://anthonynahas.github.io/ngx-num-to-words)

View all the directives and components in action at [https://anthonynahas.github.io/ngx-num-to-words](https://anthonynahas.github.io/ngx-num-to-words)

---

<a name="dependencies"/>

## Dependencies
* [Angular](https://angular.io) developed and tested with `11.x`

---

<a name="installation"/>

##  [Installation](https://anthonynahas.github.io/ngx-num-to-words/getting-started)


##  Install via *npm*. (Alternative) 

Now install `ngx-num-to-words` via:
```shell
npm install --save n2words ngx-num-to-words 
```


### Import the library

If you installed the library via angular schematics, you can skip this step


```typescript
import { NgxNumToWordsModule } from 'ngx-num-to-words'; 

@NgModule({
  declarations: [AppComponent, ...],
  imports: [NgxNumToWordsModule, ...],  
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

Other modules in your application like for lazy loading import ` NgxNumToWordsModule ` into your feature module:


<a name="api"/>

## API


<a name="usage"/>

### Using the service

```html
<h1><b>{{numberInWords}}</b></h1>
```

```typescript
import { NgxNumToWordsService, SUPPORTED_LANGUAGE } from 'ngx-num-to-words';


numberInWords!: string;
lang!: SUPPORTED_LANGUAGE = 'en';
value = 123;

 constructor(private ngxNumToWordsService: NgxNumToWordsService) {
  }


ngOnInit(): void {

    this.numberInWords = this.ngxNumToWordsService.inWords(value, this.lang);

 }




```


### Using the pipe `inWords`


```html

<span>{{ 123 | inWords }}</span> // default en language
<span>{{ 123 | inWords:'de' }}</span> // custom language --> german in this case

```

#### hier are some example

<p align="center">
  <img alt="ngx-num-to-words demonstration" style="text-align: center;"
   src="https://raw.githubusercontent.com/anthonynahas/ngx-num-to-words/HEAD/assets/en.png">
</p>

<p align="center">
  <img alt="ngx-num-to-words demonstration" style="text-align: center;"
   src="https://raw.githubusercontent.com/anthonynahas/ngx-num-to-words/HEAD/assets/ar.png">
</p>


<p align="center">
  <img alt="ngx-num-to-words demonstration" style="text-align: center;"
   src="https://raw.githubusercontent.com/anthonynahas/ngx-num-to-words/HEAD/assets/de.png">
</p>

<p align="center">
  <img alt="ngx-num-to-words demonstration" style="text-align: center;"
   src="https://raw.githubusercontent.com/anthonynahas/ngx-num-to-words/HEAD/assets/es.png">
</p>

<p align="center">
  <img alt="ngx-num-to-words demonstration" style="text-align: center;"
   src="https://raw.githubusercontent.com/anthonynahas/ngx-num-to-words/HEAD/assets/fr.png">
</p>

<p align="center">
  <img alt="ngx-num-to-words demonstration" style="text-align: center;"
   src="https://raw.githubusercontent.com/anthonynahas/ngx-num-to-words/HEAD/assets/ko.png">
</p>

<p align="center">
  <img alt="ngx-num-to-words demonstration" style="text-align: center;"
   src="https://raw.githubusercontent.com/anthonynahas/ngx-num-to-words/HEAD/assets/ukr.png">
</p>

<p align="center">
  <img alt="ngx-num-to-words demonstration" style="text-align: center;"
   src="https://raw.githubusercontent.com/anthonynahas/ngx-num-to-words/HEAD/assets/tr.png">
</p>

## Supported Languages

- `en` (English, default)
- `ar` (Arabic)
- `cz` (Czech)
- `dk` (Danish)
- `de` (German)
- `es` (Spanish)
- `fr` (French)
- `fa` (Farsi)
- `he` (Hebrew)
- `it` (Italian)
- `ko` (Korean)
- `lt` (Lithuanian)
- `lv` (Latvian)
- `nl` (Dutch)
- `no` (Norwegian)
- `pl` (Polish)
- `pt` (Portuguese)
- `ru` (Russian)
- `sr` (Serbian)
- `tr` (Turkish)
- `uk` (Ukrainian)


<a name="run-demo-app-locally"/>

###  Run Demo App Locally

Build the library

```bash
$ npm run build:lib
```

Serve the demo app

```bash
$ npm start
```



## Other Angular Libraries
- [ngx-auth-firebaseui](https://github.com/AnthonyNahas/ngx-auth-firebaseui)
- [ngx-num-to-words](https://github.com/AnthonyNahas/ngx-num-to-words)
- [ngx-linkifyjs](https://github.com/AnthonyNahas/ngx-linkifyjs)
- [@angular-material-extensions/password-strength](https://github.com/angular-material-extensions/password-strength)
- [@angular-material-extensions/google-maps-autocomplete](https://github.com/angular-material-extensions/google-maps-autocomplete)
- [@angular-material-extensions/link-preview](https://github.com/angular-material-extensions/link-preview)
- [@angular-material-extensions/fab-menu](https://github.com/angular-material-extensions/fab-menu)
- [@angular-material-extensions/select-country](https://github.com/angular-material-extensions/select-country)
- [@angular-material-extensions/select-icon](https://github.com/angular-material-extensions/select-icon)
- [@angular-material-extensions/pages](https://github.com/angular-material-extensions/pages)
- [@angular-material-extensions/contacts](https://github.com/angular-material-extensions/contacts)
---

---


## Who is using this library? Awesome apps?

1. [Nahaus.de - Digitale und automatisierte Immobilienverwaltung Software für privat Vermieter und Hausverwaltungen](https://nahaus.de)


Are you missing your project or you app? PR me to publish it on the README

---

<a name="support"/>

## Support
+ Drop an email to: [Anthony Nahas](mailto:anthony.na@hotmail.de)
+ or open an appropriate [issue](https://github.com/angular-material-extensions/ngx-num-to-words/issues)
+ let us chat on [Gitter](https://gitter.im/angular-material-extensions/Lobby)
 
 Built by and for developers :heart: we will help you :punch:

---

![jetbrains logo](https://raw.githubusercontent.com/anthonynahas/ngx-num-to-words/HEAD/assets/jetbrains-variant-4_logos/jetbrains-variant-4.png)

This project is supported by [jetbrains](https://www.jetbrains.com/) with 1 ALL PRODUCTS PACK OS LICENSE incl. [webstorm](https://www.jetbrains.com/webstorm)

---

<a name="license"/>

## License

Copyright (c) 2020 [Anthony Nahas](https://github.com/AnthonyNahas). Licensed under the MIT License (MIT) <p align="center">
                                                                                                            <img alt="angular-material-extensions's logo"
                                                                                                             height="92px" width="92px" style="text-align: center;" 
                                                                                                             src="https://cdn.jsdelivr.net/gh/anthonynahas/ngx-num-to-words@master/assets/badge_made-in-germany.svg">
                                                                                                          </p>

