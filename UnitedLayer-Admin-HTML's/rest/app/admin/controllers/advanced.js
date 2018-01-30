app.controller('advanced-controller', function($scope) {
    console.log('advanced-controller');
    $scope.activeTabIndex = 0;
    angular.element('.mytabsclass').each(function() {
        var ar = this.id;
        angular.element('#' + ar).tabs();
    });

    $scope.steps = [
        { name: 'Import Tool', route: '' },
        { name: 'Impersonate User', route: '' },
        { name: 'Celery Jobs', route: '' },
        { name: 'Developer Options', route: 'home.advanced.developerOptions' },
    ]
})