app.controller('tenant-management', function($scope, $uibModal) {

    // modal for +Add Account
    $scope.addUserModal = function() {
        $uibModal.open({
                backdrop: true,
                backdropClick: true,
                dialogFade: false,
                keyboard: true,
                templateUrl: 'rest/app/admin/views/add-user-modal.html',
                controller: 'add-user-modal',

            })
            .result.then(
                function() {
                    //alert("OK");
                },
                function() {
                    //alert("Cancel");
                }
            );
    }

});