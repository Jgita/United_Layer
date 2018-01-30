app.controller('privateCloud-details', function($scope, $rootScope) {
    console.log('privateCloud-details')

    // $scope.$on('cloudInfo', function(event, args) {
    //     console.log('args', args);
    // });

    $scope.cloudName = $rootScope.cloudInfo
    console.log(' $scope.cloudName', $scope.cloudName)

    $scope.headers = [{ name: 'Name' }, { name: 'Operating System' }, { name: 'Host Name' }, { name: 'CPU Cores' }, { name: 'vCPUs' }, { name: 'Memory' }, { name: 'Management IP' }, { name: 'Power State' }]

    $scope.cloudData = [];

    for (i = 0; i < 10; ++i) {
        $scope.cloudData.push({
            name: 'aa' + i,
            operatingSystem: 'Ubuntu Linux (64-bit)',
            hostName: 'sunfish.net.unitedlayer.com',
            CPUCores: i,
            vCPUs: i,
            memory: 1024 + i,
            managementIP: 'Not Assigned',
            powerState: 'OFF'
        });
    }

})