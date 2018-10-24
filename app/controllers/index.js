$.index.open();
$.index.layout = 'vertical';

$.btnLogin.addEventListener('click', function(e) {
	var login = Alloy.createController('tableView').getView();
	login.open();
});

$.btnRegister.addEventListener('click', function(e) {
	var photos = Alloy.createController('photos').getView();
	photos.open();
});

var client = Ti.Network.createHTTPClient({

	onload : function(e) {
		var result = JSON.parse(this.responseText);

		for (var i = 0; i < result.results.length; i++) {
			if (result.results[i] != undefined) {
				var label = Ti.UI.createLabel({
					text : result.results[i].name.first,
					bottom : 35,
					width : Ti.UI.SIZE,
					color : 'black',
					height : Ti.UI.SIZE,
					width : Ti.UI.SIZE,

				});

				var imagen = Ti.UI.createImageView({
					width : "200px",
					height : "200px",
					image : result.results[i].picture.large,
				});
			}
			$.index.add(label);
			$.index.add(imagen);

		}
		Ti.API.info(JSON.stringify(result));
		alert(JSON.stringify(result));
	},
	onerror : function(e) {
		alert(e.error);
	},

	timeout : 5000,

});

client.open('GET', 'https://randomuser.me/api/?results=5');
client.send();

