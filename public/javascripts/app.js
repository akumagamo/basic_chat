(function(){
	var app = angular.module('ChatApp', ['ngSanitize'])
		.constant('dict', dict)
		.config(function($locationProvider){
			$locationProvider.html5Mode(true);
		})
		.run(function ($rootScope, $location, dict) {
			$rootScope.dict = dict;
		});
	
	app.filter('cleanMessage', function(){
		return function(message){
			return message
				.replace(/ /gi, "&nbsp;")
				.replace(/\n/g, "<br />");
		}
	});
	
	app.factory('connector', function($rootScope){
		var socket = io.connect();
		return {
		    on:function(event, callback){
			 socket.on(event, function () {  
				var args = arguments;
				$rootScope.$apply(function () {
				  callback.apply(socket, args);
				});
			  });
			},
			emit:function(event, data, callback){
				socket.emit(event, data, function () {
					var args = arguments;
					$rootScope.$apply(function () {
					  if (callback) {
						callback.apply(socket, args);
					  }
					});
				});
			}
		};
	})
	.factory('user', function($location){
		
		var user = $location.search().user?$location.search().user : 'guest';
		console.info(user);
		console.info($location.search());
		
		return{
			username:user
		};
	
	});
	
	app.controller('MessageCtrl', function($scope, connector, user){
		var that = this;
		that.messages = [];
		that.newMessage = {};
		
		that.isNewMessageValid = function(){
			return that.newMessage.message.length > 1
		};
		
		$scope.sendNewMessage = function(){
			that.newMessage.sendDate = new Date();
			connector.emit("sendMessage", that.newMessage);
			initNewMessage();
		}
		
		function logoutOfChat(){
			connector.emit("logout", user.username);
		}
		
		function initNewMessage(){
			that.newMessage = {username:user.username, message:"", type:"msg"};
		}
		
		function logIntoChat(){
			connector.emit("login", user.username);
			window.onbeforeunload = logoutOfChat;
		}
		
		function initChatUserList(){
			connector.on("userEnteredChat", function(user){
				that.messages.push({message:"User: " + user + " entered the Chat.", type:"info"});
			});	
			
			connector.on("userLeftChat", function(user){
				that.messages.push({message:"User: " + user + " left the Chat.", type:"info"});
			});				
		}
		
		function initMessageList(){
			connector.on("messages", function(data){
				that.messages = data;
			});	
			
			connector.on("newMessage", function(data){
				that.messages.push(data);
			});
			
			connector.emit("getMessages");
		}
		
		function init(){
			initChatUserList();
			initMessageList();
			initNewMessage();
			logIntoChat();
		}		
		
		init();
	});
	
})();
