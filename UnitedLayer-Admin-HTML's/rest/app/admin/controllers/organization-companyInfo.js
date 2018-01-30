app.controller('organization-companyInfo', function($scope, $rootScope) {
    console.log('organization-companyInfo');
    $scope.companyInfo = {
        "Name": 'Aerys',
        "Address1": '49 Main St',
        "Address2": 'VMware',
        "City": 'San Francisco',
        "State": 'CA',
        "Country": 'USA',
        "Contact": '(415) 555-7803',
        "Email": 'testuser-101010@unitedlayer.com',
        "Salesforce ID": '0016000001JQEERAA5'
    }
});