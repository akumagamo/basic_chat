# basic-chat-programm
## Versionnumber 0.1.2 (2014-12-26) Beta
*(Documentation last update 2016-01-11 13:50)*   
 
basic socket.io chat (Backend and Frontends)
Using nodejs, angular, bootstrap, express(jade), socket.io  

![Basic Chat Screenshot](https://raw.githubusercontent.com/akumagamo/node-basic-chat/master/readme/basic-chat-screenshot.png "Basic Chat Screenshot")  


## Features
* basic html template
* login / logout
* in memory Message store
* multiple users
* Text-formating (newline -> br, space -> &amp;nbsp;)

## Known Bugs
none known

## Roadmap / Future Features
* only one User per username
* clear up css / html (jade-template)
* bootstrap template
    * mobile template
* js console interface
* emoticons / images 
* personal color settings
* sending message to sms service
* security 
    * user entering/exiting chat
    * password
* local Web-DB-Message store / SQLite
* mobile app
* deploy - appliaction 
    * create account
    * create nice/minified-link
* add some tests

## System Requirement & Prerequisites
only node.js, the rest will be installed from the application

## Usage

### Setup
* Download Source / clone from https://github.com/akumagamo/basic_chat
* set Enviroment Variables 
  * for production use: `NODE_ENV` to `production` 
  * to change Port change `PORT`
* enter basepath of the source execute `npm install`

### SourceControl Link & Information
https://github.com/akumagamo/basic_chat.git

## Documentation

### File / Folder Structure 

    +-+- basic_chat
      +-+- bin
      | +- www
      +-+- logs (logfile default folder)
      | +- ...
      +-+- node_modules (needed libs etc.)
      | +- ...
      +-+- public
      | +-+- images
      | +-+- javascripts
      | | +- app.js
      | | +- dict.message.js
      | +-+- stylesheets
      |   +- style.css
      +-+- readme (media for this document)
	  | +- basic-chat-screenshot.png
      +-+- routes
      | +- index.js
      +-+- views
      | +- error.jade
      | +- index.jade
      | +- layout.jade
      | +- layout-chat.jade
      +- app.js
      +- LICENSE
      +- package.json 
      +- readme.md (this document)
	  +- socket.io.js 
      
	  
### API / Commands / Usage

#### Usage

* *"Login"* as special user add parameter user to the path
Example: with this link you login as the User _test_

    `http://<hostname>:<port>/?user=test`
 

### External Libs
* express
* socket.io
* bootstrap
