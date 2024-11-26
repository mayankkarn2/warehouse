sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/techmartindia/products/test/integration/FirstJourney',
		'com/techmartindia/products/test/integration/pages/ProductList',
		'com/techmartindia/products/test/integration/pages/ProductObjectPage'
    ],
    function(JourneyRunner, opaJourney, ProductList, ProductObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/techmartindia/products') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheProductList: ProductList,
					onTheProductObjectPage: ProductObjectPage
                }
            },
            opaJourney.run
        );
    }
);