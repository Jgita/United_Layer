app.controller('colo-cabinets', function($scope) {
    console.log('colo-cabinets');
    $scope.headers = [
        { title: 'Name' },
        { title: 'Data Center' },
        { title: 'Cabinet Model' },
        { title: 'Cage' },
        { title: 'Type' },
        { title: 'Action' }
    ]

    $scope.coloCabinetsDetails = [];

    for (i = 0; i < 10; ++i) {
        $scope.coloCabinetsDetails.push({
            name: 'asdsa_' + i,
            dataCenter: 'LA_' + i,
            model: 'SUPERNAP CAB' + i,
            cage: 'SF10-CAGE-10.10' + i,
            type: 'DEDICATED' + i
        });
    }
});