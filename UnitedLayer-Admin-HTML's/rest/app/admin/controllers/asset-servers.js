app.controller('asset-servers', function($scope) {

    $scope.headers = [
        { title: 'Name' },
        { title: 'Cloud' },
        { title: 'Asset Tag' },
        { title: 'Operating System' },
        { title: 'CPUs' },
        { title: 'Cores' },
        { title: 'Memory' },
        { title: 'Capacity (GB)' },
        { title: 'Description' },
        { title: 'Action' }
    ]

    $scope.serversDetails = [];

    for (i = 0; i < 10; ++i) {
        $scope.serversDetails.push({
            name: 'ser_' + i,
            cloud: 'clo_' + i,
            assetTag: 'ass_' + i,
            OS: 'os_' + i,
            CPUs: 'cpu_' + i,
            cores: 'cores_' + i,
            memory: 'mem_' + i,
            capacity: 'cap_' + i,
            description: 'des_' + i
        });
    }


});