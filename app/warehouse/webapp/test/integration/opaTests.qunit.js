sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/techmartindia/warehouse/test/integration/FirstJourney',
		'com/techmartindia/warehouse/test/integration/pages/WarehouseList',
		'com/techmartindia/warehouse/test/integration/pages/WarehouseObjectPage'
    ],
    function(JourneyRunner, opaJourney, WarehouseList, WarehouseObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/techmartindia/warehouse') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheWarehouseList: WarehouseList,
					onTheWarehouseObjectPage: WarehouseObjectPage
                }
            },
            opaJourney.run
        );
    }
);