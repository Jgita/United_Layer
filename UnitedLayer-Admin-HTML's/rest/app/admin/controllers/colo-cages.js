app.controller('colo-cages', function($scope) {
    console.log('colo-cages');
    $scope.headers = [
        { title: 'Name' },
        { title: 'Data Center' },
        { title: 'Action' }
    ]

    $scope.coloCagesDetails = [];

    for (i = 0; i < 10; ++i) {
        $scope.coloCagesDetails.push({
            name: 'asdsa_' + i,
            dataCenter: 'SF_' + i,
        });
    }
});