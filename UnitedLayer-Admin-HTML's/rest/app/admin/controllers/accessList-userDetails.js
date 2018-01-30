app.controller('accessList-userDetails', function($scope, $rootScope) {
    console.log('accessList-userDetails');

    $scope.userInfo = $rootScope.userDetails;

    $scope.selectedUserDetails = {
        "UUID": 'f3114f90-51b1-42d6-b228-469',
        "First Name": 'Abhijit',
        "Last Name": 'Phanse',
        "Active": 'True',
        "Organization": 'My UL Demo, LLC',
        "Salesforce ID": '12345'
    }

    $scope.rolesGroups = {
        "Roles": '',
        "Groups": '',
    }

    $scope.headers = [{ title: 'Access Type' }, { title: 'Description' }];

    $scope.accessType = [{ type: 'Physical', description: '' }]

    $scope.invitationStatus = {
        "Invitation Sent": 'No',
        "Last Invitation": '',
        "Pending Acceptance": 'No',
    }

    $scope.allInvitationsHeaders = [{ title: 'Invitation Date' }, { title: 'Pending' }, { title: 'Cancel' }];

    $scope.allInvitations = [
        { date: 'Jul 10, 2017 2:39:18 PM', pending: ' True', cancel: 'Rescind' },
        { date: 'Jun 12, 2017 11:49:46 AM', pending: ' False', cancel: 'Rescind' },
        { date: 'Apr 7, 2017 7:02:25 PM', pending: ' False', cancel: 'Rescind' },
        { date: 'Apr 5, 2017 10:28:42 AM', pending: ' False', cancel: 'Rescind' },
        { date: 'Apr 4, 2017 4:21:21 PM', pending: ' False', cancel: 'Rescind' },
        { date: 'Apr 7, 2017 7:02:25 PM', pending: ' False', cancel: 'Rescind' },
        { date: 'Apr 5, 2017 10:28:42 AM', pending: ' False', cancel: 'Rescind' },
        { date: 'Apr 4, 2017 4:21:21 PM', pending: ' False', cancel: 'Rescind' },
    ]

    $scope.loginsHeaders = [{ title: 'Last Activity' }, { title: 'Expire Date' }, { title: 'IP' }, { title: 'User Agent' }]

    $scope.loginsDetails = [{ lastActivity: 'Lorem ipsum amor', expireDate: 'Jul 10, 2017', IP: '10.0.110.457', userAgent: 'Lorem ipsum amor' },
        { lastActivity: 'Lorem ipsum amor', expireDate: 'Jul 10, 2017', IP: '10.0.110.457', userAgent: 'Lorem ipsum amor' },
        { lastActivity: 'Lorem ipsum amor', expireDate: 'Jul 10, 2017', IP: '10.0.110.457', userAgent: 'Lorem ipsum amor' }
    ]
});