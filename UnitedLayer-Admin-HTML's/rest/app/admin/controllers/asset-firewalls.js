app.controller('asset-firewalls', function($scope, $rootScope) {
    console.log('asset-firewalls');
    $scope.headers = [
        { title: 'Name' },
        { title: 'Asset Tag' },
        { title: 'Cloud' },
        { title: 'Model' },
        { title: 'Action' }
    ]

    $scope.firewallsDetails = [];

    for (i = 0; i < 10; ++i) {
        $scope.firewallsDetails.push({
            name: 'vm1_' + i,
            assetTag: i,
            cloud: 'cloud' + i,
            model: '123' + i
        });
    }

});