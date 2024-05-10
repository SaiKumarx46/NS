sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'student/test/integration/FirstJourney',
		'student/test/integration/pages/studList',
		'student/test/integration/pages/studObjectPage'
    ],
    function(JourneyRunner, opaJourney, studList, studObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('student') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThestudList: studList,
					onThestudObjectPage: studObjectPage
                }
            },
            opaJourney.run
        );
    }
);