app.controller('privateCustomer-details', function($scope, $rootScope) {
    console.log('privateCustomer-details')

    $scope.activeTabIndex = 0;
    $scope.customerName = $rootScope.customerInfo

    $scope.tabs = [
        { name: 'Organization', route: 'home.privateCustomerDetails.organization.companyInfo' },
        { name: 'Assets', route: 'home.privateCustomerDetails.asset.servers' },
        { name: 'Colo', route: 'home.privateCustomerDetails.colo.cabinets' },
        { name: 'Opportunities', route: 'home.privateCustomerDetails.opportunities' }
    ];
});