app.controller('organization-accessList', function($scope, $rootScope) {
    console.log('organization-accessList')

    $scope.headers = [{ title: 'User' }, { title: 'Access Types Granted' }, { title: 'Last Login' }]

    $scope.accessListData = [
        { user: 'abc@gmail.com', type: 'Portal Access', lastLogin: 'Jul 3, 2017 2:12:48 PM' },
        { user: 'xyz@gmail.com', type: 'Portal Access', lastLogin: 'Mar 23, 2017 2:50:48 PM' },
        { user: 'pqr@gmail.com', type: 'Portal Access', lastLogin: 'Jul 3, 2017 2:12:48 PM' },
        { user: 'stv@gmail.com', type: 'Portal Access', lastLogin: 'Jul 3, 2017 2:12:48 PM' }
    ];

    $scope.selectedUser = function(item) {
        //console.log('item', item)
        $rootScope.userDetails = item;
    }
});