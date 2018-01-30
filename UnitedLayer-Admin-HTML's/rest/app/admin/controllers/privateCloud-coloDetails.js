app.controller('privateCloud-coloDetails', function($scope, $rootScope) {
    $scope.tabs = [
        { name: 'Cabinets', route: 'home.privateCustomerDetails.colo.cabinets' },
        { name: 'Cages', route: 'home.privateCustomerDetails.colo.cages' },
        { name: 'PDUs', route: 'home.privateCustomerDetails.colo.PDUs' },
    ];
});