app.controller('customer-integrations', function($scope) {
    console.log('customer-integrations');
    $scope.isVisible = false;
    $scope.headers = [{ title: 'Organization' }, { title: 'Zendesk ID' }]

    $scope.linkedOrganizations = [
        { organization: 'Aerys', zendeskID: '14019109247' },
        { organization: 'Shireen', zendeskID: '123456' },
        { organization: 'Shrykos', zendeskID: '9999999' },
        { organization: 'Allen Lund', zendeskID: '10301266307' }
    ];

    $scope.selectOrg = function(row) {
        $scope.isVisible = true;
        $scope.selectedRow = row;
    };

    $scope.selectedOrgHeaders = [{ title: 'User' }, { title: 'Email' }, { title: 'Remote ID (or None)' }, { title: 'Link/Unlink' }]
    $scope.selectedOrgDetails = [];

    for (i = 0; i < 4; ++i) {
        $scope.selectedOrgDetails.push({
            user: 'Aaron_' + i,
            email: 'Aaron@unitedlayer.com',
            remoteID: '10.0.110.11' + i,
            link: 'Link'
        });
    }
});