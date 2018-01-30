app.controller('privateCloud-organizationDetails', function($scope, $rootScope) {
    console.log('privateCloud-organizationDetails')
    $scope.tabs = [
        { name: 'Company Information', route: 'home.privateCustomerDetails.organization.companyInfo' },
        { name: 'Access List', route: 'home.privateCustomerDetails.organization.accessList' }
    ];
});