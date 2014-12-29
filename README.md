# basic-chat-programm
## Versionnumber 0.1.2 (2014-12-26) Alpha 
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
* local Web-DB-Message store
* mobile app
* deploy - appliacation 
  * create account
  * create nice/minified-link

## Prerequisits / System Requirement / Installation

### Prerequisits / System Requirement
only node.js, the rest will be installed from the application

### Installation
* Download Source / clone from https://github.com/akumagamo/basic_chat
* set Enviroment Variables 
  * for production use: `NODE_ENV` to `production` 
  * to change Port change `PORT`
* enter basepath of the source execute "npm install"

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
      +-+- tests (mocha tests)
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
	  
### API / Commands / Usage

#### Usage

* Login as special user add parameter user to the path
Example: with this link you login as the User _test_

    `http://localhost/?user=test`
 

#### Functions / Modules

#### Classes

### External Libs
* express
* socket.io
* bootstrap
