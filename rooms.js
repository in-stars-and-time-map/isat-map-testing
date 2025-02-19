const mapBoxes = {"type":"FeatureCollection","features":[
    {"type":"Feature","id":"01","properties":{"name":"MEADOW"},"geometry":{"type":"Polygon","coordinates":[[[72.054688, -111.390625], [84.8125, -111.390625], [84.8125, -124.921875], [72.054688, -124.921875], [72.054688, -111.390625]]]}},
    {"type":"Feature","id":"02","properties":{"name":"DORMONT"},"geometry":{"type":"Polygon","coordinates":[[[63.75, -75.367187],[63.75, -111.390625],[96.054688, -111.390625],[96.054688, -75.367187],[63.75, -75.367187]]]}},
    {"type":"Feature","id":"03","properties":{"name":"Village E"},"geometry":{"type":"Polygon","coordinates":[[[96.054688, -73.421875],[96.054688, -105.398437],[128.976563, -105.398437],[128.976563, -73.421875],[96.054688, -73.421875]]]}},
    {"type":"Feature","id":"04","properties":{"name":"Village N"},"geometry":{"type":"Polygon","coordinates":[[[72.015625, -56.625],[72.015625, -75.367187],[84.773438, -75.367187],[84.773438, -56.625],[72.015625, -56.625]]]}},
    {"type":"Feature","id":"05","properties":{"name":"Village Tree (LOOP)"},"geometry":{"type":"Polygon","coordinates":[[[51, -67.882812],[51, -92.640625],[63.75, -92.640625],[63.75, -67.882812],[51, -67.882812]]]}}
    //template, change with relevant latlngs: {"type":"Feature","id":"06","properties":{"name":"NameHere"},"geometry":{"type":"Polygon","coordinates":[[[1, 2],[1, 3],[4, 3],[4, 2],[1, 2]]]}},-83.460937, 113.09375
]};

const mapBoxes2 = {"type":"FeatureCollection","features":[
    {"type":"Feature","id":"06","properties":{"name":"Shop"},"geometry":{"type":"Polygon","coordinates":[[[75.398438, -71.296875], [85.484375, -71.296875], [85.484375, -79.0625], [75.398438, -79.0625], [75.398438, -71.296875]]]}},
    {"type":"Feature","id":"07","properties":{"name":"Library"},"geometry":{"type":"Polygon","coordinates":[[[86.15625, -76.539062], [94.742188, -76.539062], [94.742188, -83.625], [86.15625, -83.625], [86.15625, -76.539062]]]}},
    {"type":"Feature","id":"08","properties":{"name":"House_FrozenWife"},"geometry":{"type":"Polygon","coordinates":[[[85.078125, -93.578125], [92.03125, -93.578125], [92.03125, -101.3125], [85.078125, -101.3125], [85.078125, -93.578125]]]}},
    {"type":"Feature","id":"09","properties":{"name":"House_Novels"},"geometry":{"type":"Polygon","coordinates":[[[71.8125, -94.429687], [78.898438, -94.429687], [78.898438, -101.5625], [71.8125, -101.5625], [71.8125, -94.429687]]]}},
    {"type":"Feature","id":"10","properties":{"name":"House_Change"},"geometry":{"type":"Polygon","coordinates":[[[64.023438, -89.375], [71.125, -89.375], [71.125, -96.492187], [64.023438, -96.492187], [64.023438, -89.375]]]}},
    {"type":"Feature","id":"11","properties":{"name":"House_Boulangerie"},"geometry":{"type":"Polygon","coordinates":[[[66.390625, -76.34375], [73.445313, -76.34375], [73.445313, -84.164062], [66.390625, -84.164062], [66.390625, -76.34375]]]}},
    {"type":"Feature","id":"12","properties":{"name":"House_Flowers"},"geometry":{"type":"Polygon","coordinates":[[[96.828125, -70.289062], [103.914063, -70.289062], [103.914063, -77.390625], [96.828125, -77.390625], [96.828125, -70.289062]]]}},
    {"type":"Feature","id":"13","properties":{"name":"House_Cook"},"geometry":{"type":"Polygon","coordinates":[[[104.59375, -76.4375], [113.09375, -76.4375], [113.09375, -83.460937], [104.59375, -83.460937], [104.59375, -76.4375]]]}}
    //{"type":"Feature","id":"14","properties":{"name":"House_Storage"},"geometry":{"type":"Polygon","coordinates": }},
]};

const mapBoxes3 = {"type":"FeatureCollection","features":[
    {"type":"Feature","id":"15","properties":{"name":"Castle Entrance"},"geometry":{"type":"Polygon","coordinates":[[[94.265625, -153.476562], [94.265625, -179.726562], [81.5, -179.726562], [81.5, -153.476562], [94.265625, -153.476562]]]}},
    {"type":"Feature","id":"16","properties":{"name":"Entrance"},"geometry":{"type":"Polygon","coordinates":[[[93.5625, -132.398437], [93.5625, -153.429687], [82.289063, -153.429687], [82.289063, -132.398437], [93.5625, -132.398437]]]}},
    {"type":"Feature","id":"17","properties":{"name":"TutoMonsterHallway"},"geometry":{"type":"Polygon","coordinates":[[[91.289063, -103.929687], [91.289063, -132.445312], [84.539063, -132.445312], [84.539063, -103.929687], [91.289063, -103.929687]]]}},
    {"type":"Feature","id":"18","properties":{"name":"MonsterHallway"},"geometry":{"type":"Polygon","coordinates":[[[91.28125, -87.453125], [91.28125, -103.929687], [84.546875, -103.929687], [84.546875, -87.453125], [91.28125, -87.453125]]]}},
    {"type":"Feature","id":"19","properties":{"name":"FLOOR 1, START"},"geometry":{"type":"Polygon","coordinates":[[[93.550658, -79.195492], [93.550658, -87.460937], [82.289063, -87.460937], [82.289063, -79.195492], [93.550658, -79.195492]]]}},
    {"type":"Feature","id":"20","properties":{"name":"StorageRoom"},"geometry":{"type":"Polygon","coordinates":[[[82.265625, -77.703125], [82.265625, -85.929687], [72.578125, -85.929687], [72.578125, -77.703125], [82.265625, -77.703125]]]}},
    {"type":"Feature","id":"21","properties":{"name":"KeyRoom (Key 0-0)"},"geometry":{"type":"Polygon","coordinates":[[[101.789063, -79.195312], [101.789063, -85.929687], [93.523438, -85.929687], [93.523438, -79.195312], [101.789063, -79.195312]]]}},
    {"type":"Feature","id":"22","properties":{"name":"DeathCorridor"},"geometry":{"type":"Polygon","coordinates":[[[91.289063, -62.859375], [91.289063, -79.210937], [84.53125, -79.210937], [84.53125, -62.859375], [91.289063, -62.859375]]]}}
    //{"type":"Feature","id":"14","properties":{"name":"House_Storage"},"geometry":{"type":"Polygon","coordinates": }},[[[95.015625, -47.859375], [95.015625, -62.859375], [80.773438, -62.859375], [80.773438, -47.859375], [95.015625, -47.859375]]]
]};

const mapBoxes4 = {"type":"FeatureCollection","features":[
    {"type":"Feature","id":"15","properties":{"name":"Castle Entrance"},"geometry":{"type":"Polygon","coordinates":[[[94.265625, -153.476562], [94.265625, -179.726562], [81.5, -179.726562], [81.5, -153.476562], [94.265625, -153.476562]]]}},
    {"type":"Feature","id":"16","properties":{"name":"Entrance"},"geometry":{"type":"Polygon","coordinates":[[[93.5625, -132.398437], [93.5625, -153.429687], [82.289063, -153.429687], [82.289063, -132.398437], [93.5625, -132.398437]]]}},
    {"type":"Feature","id":"17","properties":{"name":"TutoMonsterHallway"},"geometry":{"type":"Polygon","coordinates":[[[91.289063, -103.929687], [91.289063, -132.445312], [84.539063, -132.445312], [84.539063, -103.929687], [91.289063, -103.929687]]]}},
    {"type":"Feature","id":"18","properties":{"name":"MonsterHallway"},"geometry":{"type":"Polygon","coordinates":[[[91.28125, -87.453125], [91.28125, -103.929687], [84.546875, -103.929687], [84.546875, -87.453125], [91.28125, -87.453125]]]}},
    {"type":"Feature","id":"19","properties":{"name":"FLOOR 1, START"},"geometry":{"type":"Polygon","coordinates":[[[93.550658, -79.195492], [93.550658, -87.460937], [82.289063, -87.460937], [82.289063, -79.195492], [93.550658, -79.195492]]]}},
    {"type":"Feature","id":"20","properties":{"name":"StorageRoom"},"geometry":{"type":"Polygon","coordinates":[[[82.265625, -77.703125], [82.265625, -85.929687], [72.578125, -85.929687], [72.578125, -77.703125], [82.265625, -77.703125]]]}},
    {"type":"Feature","id":"21","properties":{"name":"KeyRoom (Key 0-0)"},"geometry":{"type":"Polygon","coordinates":[[[101.789063, -79.195312], [101.789063, -85.929687], [93.523438, -85.929687], [93.523438, -79.195312], [101.789063, -79.195312]]]}},
    {"type":"Feature","id":"22","properties":{"name":"DeathCorridor"},"geometry":{"type":"Polygon","coordinates":[[[91.289063, -62.859375], [91.289063, -79.210937], [84.53125, -79.210937], [84.53125, -62.859375], [91.289063, -62.859375]]]}},
    {"type":"Feature","id":"23","properties":{"name":"FLOOR 1, END"},"geometry":{"type":"Polygon","coordinates":[[[95.015625, -47.859375], [95.015625, -62.859375], [80.773438, -62.859375], [80.773438, -47.859375], [95.015625, -47.859375]]]}},
    {"type":"Feature","id":"24","properties":{"name":"Hallway (LVL difference)"},"geometry":{"type":"Polygon","coordinates":[[[105.507813, -38.132812], [105.507813, -61.359375], [95.023438, -61.359375], [95.023438, -38.132812], [105.507813, -38.132812]]]}},
    {"type":"Feature","id":"25","properties":{"name":"Hallway (Tear)"},"geometry":{"type":"Polygon","coordinates":[[[137.023438, -38.125], [137.023438, -44.125], [105.53125, -44.125], [105.53125, -38.125], [137.023438, -38.125]]]}},
    {"type":"Feature","id":"26","properties":{"name":"BreakRoom"},"geometry":{"type":"Polygon","coordinates":[[[113.773438, -30.609375], [113.773438, -38.101562], [105.53125, -38.101562], [105.53125, -30.609375], [113.773438, -30.609375]]]}},
    {"type":"Feature","id":"27","properties":{"name":"Storage Room (Locked)"},"geometry":{"type":"Polygon","coordinates":[[[137.773438, -30.617187], [137.773438, -38.109375], [129.546875, -38.109375], [129.546875, -30.617187], [137.773438, -30.617187]]]}},
    {"type":"Feature","id":"28","properties":{"name":"Hallway (RowTears)"},"geometry":{"type":"Polygon","coordinates":[[[162.539063, -38.125], [162.539063, -56.875992], [137.039063, -56.875992], [137.039063, -38.125], [162.539063, -38.125]]]}},
    {"type":"Feature","id":"29","properties":{"name":"Room (Crest)"},"geometry":{"type":"Polygon","coordinates":[[[169.273438, -37.34375], [169.273438, -44.882812], [162.515625, -44.882812], [162.515625, -37.34375], [169.273438, -37.34375]]]}},
    {"type":"Feature","id":"30","properties":{"name":"Kitchen (Key 1-1)"},"geometry":{"type":"Polygon","coordinates":[[[155.023438, -56.851562], [155.023438, -63.617187], [146.765625, -63.617187], [146.765625, -56.851562], [155.023438, -56.851562]]]}},
    {"type":"Feature","id":"31","properties":{"name":"Hallway (Locked 1-1)"},"geometry":{"type":"Polygon","coordinates":[[[80.773438, -54.617187], [80.773438, -60.609375], [56.78125, -60.609375], [56.78125, -54.617187], [80.773438, -54.617187]]]}},
    {"type":"Feature","id":"32","properties":{"name":"Armory"},"geometry":{"type":"Polygon","coordinates":[[[74.007813, -47.125], [74.007813, -54.632812], [65.78125, -54.632812], [65.78125, -47.125], [74.007813, -47.125]]]}},
    {"type":"Feature","id":"33","properties":{"name":"Hallway (Ghost1)"},"geometry":{"type":"Polygon","coordinates":[[[56.751518, -35.143829], [56.751518, -61.359375], [46.28125, -61.359375], [46.28125, -35.143829], [56.751518, -35.143829]]]}},
    {"type":"Feature","id":"34","properties":{"name":"Hallway"},"geometry":{"type":"Polygon","coordinates":[[[41.056759, -21.644773], [41.056759, -35.132812], [46.257813, -35.132812], [46.257813, -41.109375], [32.870108, -41.109375], [32.870108, -21.644773], [41.056759, -21.644773]]]}},
    {"type":"Feature","id":"35","properties":{"name":"CandleDorm (Timecraft)"},"geometry":{"type":"Polygon","coordinates":[[[32.788313, -20.115467], [32.788313, -27.625], [24.5625, -27.625], [24.5625, -20.115467], [32.788313, -20.115467]]]}},
    {"type":"Feature","id":"36","properties":{"name":"WritingDorm (Key 1-2F)"},"geometry":{"type":"Polygon","coordinates":[[[50.804688, -21.617187], [50.804688, -28.367187], [41.0625, -28.367187], [41.0625, -21.617187], [50.804688, -21.617187]]]}},
    {"type":"Feature","id":"37","properties":{"name":"BossHallway_1"},"geometry":{"type":"Polygon","coordinates":[[[91.265625, -24.617187], [91.265625, -47.867187], [84.53125, -47.867187], [84.53125, -24.617187], [91.265625, -24.617187]]]}},
    {"type":"Feature","id":"38","properties":{"name":"Hallway"},"geometry":{"type":"Polygon","coordinates":[[[90.492188, -1.367187], [90.492188, -24.640625], [80.023438, -24.640625], [80.023438, -1.367187], [90.492188, -1.367187]]]}}
    //{"type":"Feature","id":"38","properties":{"name":"Test24"},"geometry":{"type":"Polygon","coordinates":[[[90.492188, -1.367187], [90.492188, -24.640625], [80.023438, -24.640625], [80.023438, -1.367187], [90.492188, -1.367187]]]}},
]};

const mapBoxes5 = {"type":"FeatureCollection","features":[
    {"type":"Feature","id":"39","properties":{"name":"FLOOR 2, START"},"geometry":{"type":"Polygon","coordinates":[[[93.210938, -125.71875], [93.210938, -133.984375], [81.976563, -133.984375], [81.976563, -125.71875], [93.210938, -125.71875]]]}},
    {"type":"Feature","id":"40","properties":{"name":"Stairs"},"geometry":{"type":"Polygon","coordinates":[[[93.140625, -117.476562], [93.140625, -125.6875], [81.984375, -125.6875], [81.984375, -117.476562], [93.140625, -117.476562]]]}},
    {"type":"Feature","id":"41","properties":{"name":"FLOOR 2, END"},"geometry":{"type":"Polygon","coordinates":[[[94.710938, -102.46875], [94.710938, -117.484375], [80.453125, -117.484375], [80.453125, -102.46875], [94.710938, -102.46875]]]}},
    {"type":"Feature","id":"42","properties":{"name":"Hallway (FrozenPerson)"},"geometry":{"type":"Polygon","coordinates":[[[80.453125, -87.40625], [80.453125, -116.078125], [67.78125, -116.078125], [67.78125, -87.40625], [80.453125, -87.40625]]]}},
    {"type":"Feature","id":"43","properties":{"name":"Hallway"},"geometry":{"type":"Polygon","coordinates":[[[75.969494, -73.212132], [75.969494, -87.032363], [62.38322, -87.032363], [62.38322, -73.212132], [75.969494, -73.212132]]]}},
    {"type":"Feature","id":"44","properties":{"name":"Garden"},"geometry":{"type":"Polygon","coordinates":[[[73.71875, -64.953125], [73.71875, -73.226562], [66.976563, -73.226562], [66.976563, -64.953125], [73.71875, -64.953125]]]}},
    {"type":"Feature","id":"45","properties":{"name":"Hallway (Locked 2-1)"},"geometry":{"type":"Polygon","coordinates":[[[80.46875, -55.945312], [80.46875, -64.9375], [60.203125, -64.9375], [60.203125, -55.945312], [80.46875, -55.945312]]]}},
    {"type":"Feature","id":"46","properties":{"name":"Admin (Key 2-1L)"},"geometry":{"type":"Polygon","coordinates":[[[67.726563, -46.945312], [67.726563, -55.960937], [59.453125, -55.960937], [59.453125, -46.945312], [67.726563, -46.945312]]]}},
    {"type":"Feature","id":"47","properties":{"name":"HallwayToLibrary"},"geometry":{"type":"Polygon","coordinates":[[[79.726563, -38.71875], [79.726563, -55.960937], [74.46875, -55.960937], [74.46875, -38.71875], [79.726563, -38.71875]]]}},
    {"type":"Feature","id":"48","properties":{"name":"Library (Key 2-2)"},"geometry":{"type":"Polygon","coordinates":[[[83.46875, -31.203125], [83.46875, -38.71875], [73.734375, -38.71875], [73.734375, -31.203125], [83.46875, -31.203125]]]}},
    {"type":"Feature","id":"49","properties":{"name":"Hallway"},"geometry":{"type":"Polygon","coordinates":[[[93.21875, -25.242187], [93.21875, -31.210937], [78.226563, -31.210937], [78.226563, -25.242187], [93.21875, -25.242187]]]}},
    {"type":"Feature","id":"50","properties":{"name":"SecretLibrary"},"geometry":{"type":"Polygon","coordinates":[[[101.46875, -25.1875], [101.46875, -31.21875], [93.226563, -31.21875], [93.226563, -25.1875], [101.46875, -25.1875]]]}},
    {"type":"Feature","id":"51","properties":{"name":"Hallway (Ghost2)"},"geometry":{"type":"Polygon","coordinates":[[[112.695313, -94.96875], [112.695313, -115.945312], [94.71875, -115.945312], [94.71875, -94.96875], [112.695313, -94.96875]]]}}
    //{"type":"Feature","id":"38","properties":{"name":"Test24"},"geometry":{"type":"Polygon","coordinates":[[[90.492188, -1.367187], [90.492188, -24.640625], [80.023438, -24.640625], [80.023438, -1.367187], [90.492188, -1.367187]]]}},
]};

const mapBoxes6 = {"type":"FeatureCollection","features":[
    {"type":"Feature","id":"56","properties":{"name":"FILLER"},"geometry":{"type":"Polygon","coordinates":[[[93.210938, -125.71875], [93.210938, -133.984375], [81.976563, -133.984375], [81.976563, -125.71875], [93.210938, -125.71875]]]}}
    //{"type":"Feature","id":"38","properties":{"name":"Test24"},"geometry":{"type":"Polygon","coordinates":[[[90.492188, -1.367187], [90.492188, -24.640625], [80.023438, -24.640625], [80.023438, -1.367187], [90.492188, -1.367187]]]}},
]};

const mapBoxes7 = {"type":"FeatureCollection","features":[
    {"type":"Feature","id":"89","properties":{"name":"FILLER2"},"geometry":{"type":"Polygon","coordinates":[[[93.210938, -125.71875], [93.210938, -133.984375], [81.976563, -133.984375], [81.976563, -125.71875], [93.210938, -125.71875]]]}}
    //{"type":"Feature","id":"38","properties":{"name":"Test24"},"geometry":{"type":"Polygon","coordinates":[[[90.492188, -1.367187], [90.492188, -24.640625], [80.023438, -24.640625], [80.023438, -1.367187], [90.492188, -1.367187]]]}},
]};

const mapBoxes8 = {"type":"FeatureCollection","features":[
    {"type":"Feature","id":"100","properties":{"name":"FILLER3"},"geometry":{"type":"Polygon","coordinates":[[[93.210938, -125.71875], [93.210938, -133.984375], [81.976563, -133.984375], [81.976563, -125.71875], [93.210938, -125.71875]]]}}
    //{"type":"Feature","id":"38","properties":{"name":"Test24"},"geometry":{"type":"Polygon","coordinates":[[[90.492188, -1.367187], [90.492188, -24.640625], [80.023438, -24.640625], [80.023438, -1.367187], [90.492188, -1.367187]]]}},
]};