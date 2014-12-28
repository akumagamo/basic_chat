# basic-chat-programm
## Versionnumber 0.1.2 (2014-12-26) Init 
socket.io chat with different frontends (Backend and Frontends)
Using nodejs, angular, bootstrap, express(jade), socket.io

## Features
* basic html template
* login / logout 
* in memory Message store
* multiple users
* Text-formating (newline -> br, space -> &nbsp;)

## Known Bugs
none known

## Roadmap / Future Features
* mobile template
* mobile app
* clear up css
* bootstrap template
* neat HTML
* js console interface
* sending message to sms service
* emoticons / images 
* local Web-DB-Message store
* personal color settings
* only one User per username
* security 
  ** user entering/exiting chat
  ** password

## System Requirement & Prerequisits
simply node.js installation

## Usage

### Setup
Download Source from SourceLink and execute "npm install"

### SourceControl Link & Information
https://github.com/akumagamo/basic_chat

### Base Code Example
...

## Documentation

### File / Folder Structure 

    +-+- basic_chat
      +-+- bin
      | +- www
      +-+- libs
      | +- ...
      +-+- logs (logfile default folder)
      | +- ...
      +-+- node_modules (needed libs etc.)
      | +- ...
      +-+- tests
      | +- ... 
      +-+- public
      | +- images
      | +- javascripts
      | +-+- stylesheets
      |   +- style.css
      +-+- routes
      | +- index.js
      | +- ...
      +-+- views
      | +- error.jade
      | +- index.jade
      | +- layout.jade
      | +- ...
      +- LICENSE
      +- readme.md (this document)
      +- package.json 
	  
### API / Commands 

#### Functions / Modules

#### Classes

### External Libs
* express
* socket.io
* bootstrap
