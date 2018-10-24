// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;


var client = Ti.Network.createHTTPClient({

	onload : function(e) {
		var result = JSON.parse(this.responseText);

		for (var i = 0; i < result.results.length; i++) {
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
				top:0,
			});

			$.win.add(label);
			$.win.add(imagen);
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
