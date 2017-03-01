define( [
		"qlik",
		"./properties",
		"./initialproperties",
		'text!./style.css'
	],
	function ( qlik, props, initprops, cssContent ) {
		$("<style>").html(cssContent).appendTo("head");

	return {
		definition:props,
		initialproperties: initprops,
		support : {
			snapshot: true,
			export: true,
			exportData : false
		},
		paint: function ($element, layout) {
			var html = "", me = this, id = layout.qInfo.qId;

			html += '<div id="qs-slider-ext-' + id + '">';
			html += 	'<div id="top"><span id="qs-slider-reset-' + id  + '" class="button" href="_blank">'+ layout.props.label + '</span></div>'
			html += 	'<div id ="labels"><span id="min-val">' + layout.props.minValue + '</span><span id="max-val">' + layout.props.maxValue + '</span></div>';
			html += 	'<input id="qs-slider-' + id + '" type="range" min="' + layout.props.minValue + '" max="' + layout.props.maxValue + '" step="' + layout.props.sliderStep + '" style="width:95%" value="' + layout.defaultValue + '"/>';
			html += '</div>';
			$element.html(html);

			// Triggered by the slider.
			$('#qs-slider-' + id ).on('change', function() {
				qlik.currApp(me).variable.setContent(layout.props.variable, $(this).val());
			})

			// Triggered by the button. Reset to default value.
			$('#qs-slider-reset-' + id ).on('click', function() {
				qlik.currApp(me).variable.setContent(layout.props.variable, layout.props.defaultValue);
				qlik.resize();
			});

			//needed for export
			return qlik.Promise.resolve();
		}
	};

} );
