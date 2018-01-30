app.controller('asset-virtualMachines', function($scope) {

    $scope.headers = [
        { title: 'Name' },
        { title: 'vCPUs' },
        { title: 'Total Cores' },
        { title: 'RAM (MB)' },
        { title: 'Cloud' },
        { title: 'Disk Size (GB)' },
        { title: 'NICs' },
        { title: 'Operating System' },
        { title: 'Hypervisor' },
        { title: 'Action' }
    ]

    $scope.virtualMachinesDetails = [];

    for (i = 0; i < 10; ++i) {
        $scope.virtualMachinesDetails.push({
            name: 'vm1_' + i,
            vCPUs: i,
            cores: i + 2,
            RAM: i + 127,
            cloud: 'cloud' + i,
            diskSize: '123' + i,
            NICs: i,
            os: 'Debian_' + i,
            hypervisor: 'testaerys_' + i
        });
    }

});