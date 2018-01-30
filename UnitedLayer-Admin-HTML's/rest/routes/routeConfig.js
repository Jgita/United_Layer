app.config(function($stateProvider, $urlRouterProvider) {

    // For Angular Sppiner
    // usSpinnerConfigProvider.setDefaults({ color: '#464d5a' });'
    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'rest/app/admin/views/main-page.html',
            controller: 'main-page'
        })

    // United View admin DashBoard
    .state('home.unitedViewDashboard', {
        url: '/DashBoard',
        templateUrl: 'rest/app/admin/views/admin-dashboard.html',
        controller: 'admin-dashboard'
    })

    // United view Activity Log
    .state('home.activityLog', {
        templateUrl: 'rest/app/admin/views/activity-log.html',
        controller: 'activity-log'
    })

    //start unitedCloud private
    .state('home.unitedCloudPrivate', {
        templateUrl: 'rest/app/admin/views/private-cloud.html',
        controller: 'private-cloud'
    })

    //private Cloud Details
    .state('home.privateCloudDetails', {
            templateUrl: 'rest/app/admin/views/privateCloud-details.html',
            controller: 'privateCloud-details'
        })
        .state('home.privateCustomerDetails', {
            templateUrl: 'rest/app/admin/views/privateCustomer-details.html',
            controller: 'privateCustomer-details'
        })

    .state('home.privateCustomerDetails.organization', {
        templateUrl: 'rest/app/admin/views/privateCloud-organizationDetails.html',
        controller: 'privateCloud-organizationDetails'
    })

    .state('home.privateCustomerDetails.organization.accessList', {
        templateUrl: 'rest/app/admin/views/organization-accessList.html',
        controller: 'organization-accessList'
    })

    .state('home.privateCustomerDetails.organization.companyInfo', {
            templateUrl: 'rest/app/admin/views/organization-companyInfo.html',
            controller: 'organization-companyInfo'
        })
        .state('home.accessListUserDetails', {
            templateUrl: 'rest/app/admin/views/accessList-userDetails.html',
            controller: 'accessList-userDetails'
        })

    .state('home.privateCustomerDetails.asset', {
        templateUrl: 'rest/app/admin/views/privateCloud-assetDetails.html',
        controller: 'privateCloud-assetDetails'
    })

    .state('home.privateCustomerDetails.asset.servers', {
        templateUrl: 'rest/app/admin/views/asset-servers.html',
        controller: 'asset-servers'
    })

    .state('home.privateCustomerDetails.asset.virtualMachines', {
        templateUrl: 'rest/app/admin/views/asset-virtualMachines.html',
        controller: 'asset-virtualMachines'
    })

    .state('home.privateCustomerDetails.asset.firewalls', {
        templateUrl: 'rest/app/admin/views/asset-firewalls.html',
        controller: 'asset-firewalls'
    })

    .state('home.privateCustomerDetails.asset.switches', {
        templateUrl: 'rest/app/admin/views/asset-switches.html',
        controller: 'asset-switches'
    })

    .state('home.privateCustomerDetails.colo', {
        templateUrl: 'rest/app/admin/views/privateCloud-coloDetails.html',
        controller: 'privateCloud-coloDetails'
    })

    .state('home.privateCustomerDetails.colo.cabinets', {
        templateUrl: 'rest/app/admin/views/colo-cabinets.html',
        controller: 'colo-cabinets'
    })

    .state('home.privateCustomerDetails.colo.cages', {
        templateUrl: 'rest/app/admin/views/colo-cages.html',
        controller: 'colo-cages'
    })

    .state('home.privateCustomerDetails.colo.PDUs', {
        templateUrl: 'rest/app/admin/views/colo-PDUs.html',
        controller: 'colo-PDUs'
    })

    .state('home.privateCustomerDetails.opportunities', {
        templateUrl: 'rest/app/admin/views/privateCloud-opportunitiesDetails.html',
        controller: 'privateCloud-opportunitiesDetails'
    })

    //start United Setup customer-integrations
    .state('home.customerIntegrations', {
        templateUrl: 'rest/app/admin/views/customer-integrations.html',
        controller: 'customer-integrations'
    })

    //start Support service-requests
    .state('home.serviceRequests', {
        templateUrl: 'rest/app/admin/views/service-requests.html',
        controller: 'service-requests'
    })

    //start tenant-management
    .state('home.tenantManagement', {
        templateUrl: 'rest/app/admin/views/tenant-management.html',
        controller: 'tenant-management'
    })


    //start United Setup advanced
    .state('home.advanced', {
        templateUrl: 'rest/app/admin/views/advanced.html',
        controller: 'advanced-controller'
    })

    .state('home.advanced.developerOptions', {
        templateUrl: 'rest/app/admin/views/advance-developerOptions.html',
        controller: 'advance-developerOptions'
    })




});