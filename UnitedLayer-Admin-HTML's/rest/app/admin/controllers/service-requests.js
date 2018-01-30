app.controller('service-requests', function($scope) {
    console.log('service-requests');

    $scope.expandSelectedTicket = false;

    $scope.organizationsList = [{ id: '0', name: '1st Century B' }, { id: '1', name: 'Actioneconomics' }, { id: '2', name: 'Billow' }, { id: '3', name: 'Broadworld' }]

    $scope.headers = [{ title: 'Subject' }, { title: 'Status' }]

    $scope.existingTickets = [
        { subject: 'Cancellation of the hosting service', status: 'closed' },
        { subject: 'upcoming Penetration test', status: 'closed' },
        { subject: 'Monitoring Alert: FCBWP01/System Uptime Alert', status: 'closed' },
        { subject: 'RE: [UnitedLayer #1690] 1st Century Bank Re: 1st Century Bank Re: Website assistance', status: 'closed' },
        { subject: '1st Century Bank Re: Website assistance', status: 'closed' },
        { subject: 'Request to upgrade Ocelot hypervisor', status: 'closed' },
        { subject: 'two questions', status: 'closed' },
        { subject: 'Website assistance', status: 'closed' }
    ]


    $scope.expandTickets = function(item, row) {
        $scope.selectTicketsDetails = item;
        $scope.ticketsSelectedRow = row;
    }

    $scope.getTickets = function(selectedOrg) {
        if (selectedOrg != undefined) {
            $scope.expandSelectedTicket = true;
            $scope.ticketsSelectedRow = 0;
            $scope.selectTicketsDetails = $scope.existingTickets["0"];
        } else {
            $scope.expandSelectedTicket = false;
            alert('Please Select a Organization');
        }
    }

});