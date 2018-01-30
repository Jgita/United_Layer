app.controller('privateCloud-opportunitiesDetails', function($scope) {
    console.log('privateCloud-opportunitiesDetails');

    $scope.items = [];
    $scope.active = false;

    $scope.headers = [
        { title: 'Name' },
        { title: 'SFDC Account' },
        { title: 'Owner' },
        { title: 'MRC' },
        { title: 'NRC' },
        { title: 'Stage' },
        { title: 'Delivery Date' }
    ]

    for (i = 0; i < 2; i++) {
        $scope.items.push({
            name: 'Unity Oppty Secondary' + i,
            account: 'Unity Staging' + i,
            owner: 'Unitedlayer SF-Admin',
            MRC: '1902.00',
            NRC: '1500.00',
            stage: 'Alternative Opportunity',
            deliveryDate: 'Dec 1, 2016'
        });
    }
    $scope.selectOppty = function(item, row) {
        $scope.active = true;
        $scope.selectOpptyInfo = item;
        $scope.selectedRow = row;
    }

    $scope.invoicesHeaders = [{ title: 'Month' }, { title: 'Year' }, { title: 'Amount' }]

    $scope.invoices = [{ month: 'September', year: '2016', amount: '$6,604.00' },
        { month: 'October', year: '2016', amount: '$5,104.00' },
        { month: 'November', year: '2016', amount: '$5,104.00' },
        { month: 'December', year: '2016', amount: '$5,104.00' },
    ];

    $scope.invoiceSelectedRow = 0;
    $scope.selectInvoiceDetails = $scope.invoices["0"]

    $scope.selectInvoice = function(item, row) {
        $scope.selectInvoiceDetails = item;
        $scope.invoiceSelectedRow = row;
    }

    $scope.lineItemsHeaders = [{ title: 'Product' }, { title: 'Unit Price' }, { title: 'Qty' }, { title: 'Total Price' }];

    $scope.lineItems = [{ product: ' MSP:MPC:Storage:1TB:Enterprise (Unity Staging)', unitPrice: '150.00', Qty: '10', totalPrice: '1,500.00' },
        { product: ' MSP:MPC:Storage:1TB:Enterprise (Unity Staging)', unitPrice: '150.00', Qty: '10', totalPrice: '1,500.00' },
        { product: ' MSP:MPC:Storage:1TB:Enterprise (Unity Staging)', unitPrice: '150.00', Qty: '10', totalPrice: '1,500.00' }
    ];
});