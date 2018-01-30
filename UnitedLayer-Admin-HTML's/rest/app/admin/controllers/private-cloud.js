app.controller('private-cloud', function($scope, $rootScope) {
    console.log('private-cloud')

    $scope.headers = [{ title: 'Cloud Name' }, { title: 'Customer' }, { title: 'Datacenter' }, { title: 'Platform Type' }, { title: 'Actions' }]

    $scope.privateCloud = [
        { name: 'Cloud 1', customer: 'Aerys', datacenter: 'SF9', type: 'N/A' },
        { name: 'Cloud 2', customer: 'Aerys', datacenter: 'SF9', type: 'N/A' },
        { name: 'Cloud 3', customer: 'Aerys', datacenter: 'LA1', type: 'N/A' }
    ];

    $scope.cloudDetails = function(item) {
        console.log('cloudDetails item', item)
        $rootScope.cloudInfo = item;
        //  $rootScope.$broadcast('cloudInfo', item);
    };

    $scope.customerDetails = function(item) {
        console.log('customerDetails item', item)
        $rootScope.customerInfo = item;
    };
})