app.controller('privateCloud-assetDetails', function($scope, $rootScope) {
    $scope.tabs = [
        { name: 'Servers', route: 'home.privateCustomerDetails.asset.servers' },
        { name: 'Virtual Machines', route: 'home.privateCustomerDetails.asset.virtualMachines' },
        { name: 'Firewalls', route: 'home.privateCustomerDetails.asset.firewalls' },
        { name: 'Switches', route: 'home.privateCustomerDetails.asset.switches' },
        { name: 'Load Balancers', route: 'home.server.organizations.companyTab.switches' }
    ];
});