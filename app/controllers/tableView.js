// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

// var table = Ti.UI.createTableView();
// var rows = [];
// 
// for (var i = 0; i < 4; ++i) {
	// rows.push({
		// title : "Fila 0",
		// header : "Titulo " + i,
		// className : "Fila 1"
	// });
	// for (var j = 0; j < 10; j++) {
		// rows.push({
			// title : "Fila " + j,
			// className : "Fila 2"
		// });
	// }
// }
// 
// table.setData(rows);
// $.win.add(table);
// 
// function appendSection(tableView, sectionTitle) {
	// var sections = tableView.data;
// 
	// sections.push(Ti.UI.createTableViewSection({
		// headerTitle : sectionTitle
	// }));
// 
	// tableView.setData(sections);
// }
// 
// $.win.addEventListener("open", function() {
	// appendSection(table, "Table View");
// });



var httpClient = Ti.Network.createHTTPClient({
	onload : function(e) {

		var result = JSON.parse(this.responseText);
		

		Ti.API.info(JSON.stringify(result));
		alert(JSON.stringify(result));

		for (var i = 0; i < result.response.length; i++) {

			var label = Ti.UI.createLabel({
				text : result.response[i].photos.id,
				color : 'black',
				width : Ti.UI.SIZE,
				height : Ti.UI.SIZE,
				top : '10%'
			});
			var imagenes = Ti.UI.createImageView({
				width : '200px',
				height : '200px',
				image : result.response[i].photos.urls.original,

			});
			console.log('AQUI ESTA la imagen' + imagenes);
			$.win.add(label);
			$.win.add(imagenes);
		}

	},
	onerror : function(e) {
		alert(e.error);
	},
	timeout : 5000,
});

httpClient.open('GET', 'https://api.cloud.appcelerator.com/v1/photos/query.json?key=39CfszDc4IxFppvqRyykQDgVPyuPhed2&pretty_json=true&count=true');
httpClient.send(); 

