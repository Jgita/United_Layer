app.controller('colo-PDUs', function($scope) {
    console.log('colo-PDUs');
    $scope.headers = [
        { title: 'Host Name' },
        { title: 'IP Address' },
        { title: 'Cabinet' },
        { title: 'Model' },
        { title: 'Action' }
    ]

    $scope.coloPDUsDetails = [];

    for (i = 0; i < 10; ++i) {
        $scope.coloPDUsDetails.push({
            hostName: 'pdua-103.sf_' + i,
            IPAddress: '67.221.172.9' + i,
            cabinet: 'SF8-CAB-01.0' + i,
            model: 'AP793' + i,
        });
    }
});