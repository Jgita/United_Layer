app.controller('asset-switches', function($scope) {
    console.log('asset-switches');
    $scope.headers = [
        { title: 'Name' },
        { title: 'Asset Tag' },
        { title: 'Cloud' },
        { title: 'Model' },
        { title: 'Action' }
    ]

    $scope.assetSwitchesDetails = [];

    for (i = 0; i < 10; ++i) {
        $scope.assetSwitchesDetails.push({
            name: 'vm1_' + i,
            assetTag: i,
            cloud: 'cloud' + i,
            model: '123' + i
        });
    }

});