# ionic-dynamic-themes


This repository was developed as a part of a medium post which you can [find here](https://medium.freecodecamp.org/how-to-dynamically-theme-your-ionic-application-and-make-your-users-happy-ffa17e15dbf7) if you want to run through it.


There are 3 examples of how to use this dynamic theming in your own projects! These are :  
1. A side menu theme switcher (reengineered Ionic sidemenu)  
2. A settings page with a list of colours  
3. A modal that can be popped up allowing users to change the theme


## Setup

Requirements to use this project:
You need to have NodeJS and NPM installed 

##### Cordova & Ionic Cli
To install both of them on your system just launch this command:
```sh
$ sudo npm install cordova ionic -g
```

## Install NPM Dependencies
Once you clone this repository, run this command on your terminal to install all needed dependencies:
```sh
$ npm install
```

## Launching the App
After installing the needed dependencies you are done, launch your app with a simple
```sh
$ ionic serve
```
## How it works
This project accomplishes the dynamic theming by holding a number of SCSS files, 1 for each theme that will be used. Once these are imported during project setup, they can be referenced at run-time using their class names. A global AppState class holds the current theme that is being used. When a user selects a new theme, the state is updated with this desired theme.  

This theme state is mapped to a `<div>` tag which encompasses the rest of the page and thus applies the theme. Given the global nature of AppState, if you change the theme in a page, any other pages which also use the AppState to get their styling will be updated too. 

### References 


Here are some references which use the same concept to do a dark mode.
[Devdatic](https://devdactic.com/dynamic-theming-ionic/)
[ionic3-components](https://github.com/yannbf/ionic3-components)
