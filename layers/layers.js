var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Gebaeude_1 = new ol.format.GeoJSON();
var features_Gebaeude_1 = format_Gebaeude_1.readFeatures(json_Gebaeude_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gebaeude_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gebaeude_1.addFeatures(features_Gebaeude_1);
var lyr_Gebaeude_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Gebaeude_1, 
                style: style_Gebaeude_1,
                interactive: true,
                title: '<img src="styles/legend/Gebaeude_1.png" /> Gebaeude'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Gebaeude_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Gebaeude_1];
lyr_Gebaeude_1.set('fieldAliases', {'osm_id': 'osm_id', 'addr_city': 'addr_city', 'addr_house': 'addr_house', 'addr_stree': 'addr_stree', 'building': 'building', 'Umfang': 'Umfang', '__Type': '__Type', '__HWB': '__HWB', '__HWB_PEB': '__HWB_PEB', '__WWB': '__WWB', '__WWB_PEB': '__WWB_PEB', });
lyr_Gebaeude_1.set('fieldImages', {'osm_id': 'TextEdit', 'addr_city': 'TextEdit', 'addr_house': 'TextEdit', 'addr_stree': 'TextEdit', 'building': 'TextEdit', 'Umfang': 'TextEdit', '__Type': 'TextEdit', '__HWB': 'TextEdit', '__HWB_PEB': 'TextEdit', '__WWB': 'TextEdit', '__WWB_PEB': 'TextEdit', });
lyr_Gebaeude_1.set('fieldLabels', {'osm_id': 'no label', 'addr_city': 'inline label', 'addr_house': 'inline label', 'addr_stree': 'inline label', 'building': 'no label', 'Umfang': 'inline label', '__Type': 'header label', '__HWB': 'inline label', '__HWB_PEB': 'inline label', '__WWB': 'inline label', '__WWB_PEB': 'inline label', });
lyr_Gebaeude_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});