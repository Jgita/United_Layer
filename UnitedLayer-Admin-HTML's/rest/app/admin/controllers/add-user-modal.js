app.controller('add-user-modal', function($scope, $uibModalInstance, $timeout, $filter) {
    $scope.ok = function() {
        $uibModalInstance.close();
    };

    $scope.cancel = function() {
        $uibModalInstance.dismiss('cancel');
    };
    $scope.accessTypes = [{ id: '0', name: 'Portal ' }, { id: '1', name: 'Notifications' }, { id: '2', name: 'Abuse' }, { id: '3', name: 'Administrator' }, { id: '4', name: 'Billing' }, { id: '5', name: 'Physical' }, { id: '6', name: 'Remote Hands' }, { id: '7', name: 'Support' }, { id: '8', name: 'Contractor' }];

    $scope.groups = [{ id: '0', name: 'Portal ' },
        { id: '1', name: 'Development' },
        { id: '2', name: 'Facilities' },
        { id: '3', name: 'Helpdesk' },
        { id: '4', name: 'Implementation' },
        { id: '5', name: 'Operations Support - Database' },
        { id: '6', name: 'Operations Support - Network' },
        { id: '7', name: 'Operations Support - Systems Admin' },
        { id: '8', name: 'Ops Managers' },
        { id: '9', name: 'Procurement' },
        { id: '10', name: 'Prospects' },
        { id: '11', name: 'Provisioning' },
        { id: '12', name: 'Sales and Billing' },
        { id: '13', name: 'Shipments' },
        { id: '14', name: ' Tier 2 Support' },
        { id: '15', name: 'UL - Internal' },
    ]

    $scope.isActive = [{
        "activeData": "0",
    }, ];

    // $timeout(function() {
    //     $uibModalInstance.close();
    // }, 5000)


});