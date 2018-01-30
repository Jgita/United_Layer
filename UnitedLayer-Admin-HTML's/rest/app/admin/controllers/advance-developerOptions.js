app.controller('advance-developerOptions', function($scope, $filter) {

    console.log('advance-developerOptions');

    $scope.showNagiosData = false;
    $scope.showHostData = false;
    $scope.showInterfacesData = false;
    $scope.showStatsData = false;

    $scope.refresh_nagios = function() {
        $scope.showHostData = false;
        $scope.showInterfacesData = false;
        $scope.showStatsData = false;
        $scope.showNagiosData = true;
        $scope.nagiosData = {
            "message": ["HTTPSConnectionPool(host='localhost', port=8000): Max retries exceeded with url: /nagios/cgi-bin/statusjson.cgi?query=hostlist&details=true (Caused by NewConnectionError('<requests.packages.urllib3.connection.VerifiedHTTPSConnection object at 0x7eff7182c190>: Failed to establish a new connection: [Errno 111] Connection refused',))"],
            "error": "<class 'celery.backends.base.ConnectionError'>"
        }
    }

    $scope.refresh_host = function() {
        $scope.showNagiosData = false;
        $scope.showInterfacesData = false;
        $scope.showStatsData = false;
        $scope.showHostData = true;
        $scope.hostsData = {
            "message": [
                "'hosts'"
            ],
            "error": "<class 'celery.backends.base.KeyError'>"
        }
    }

    $scope.refresh_interfaces = function() {
        $scope.showNagiosData = false;
        $scope.showHostData = false;
        $scope.showStatsData = false;
        $scope.showInterfacesData = true;

        $scope.InterfacesData = {
            "detail": "Task expired."
        }

    }

    $scope.refresh_stats = function() {
        $scope.showNagiosData = false;
        $scope.showHostData = false;
        $scope.showInterfacesData = false;
        $scope.showStatsData = true;

        $scope.StatsData = {
            "detail": "Task expired."
        }

    }

    $scope.tenableData = {
        "error": "Missing one of the following (u'TENABLE_HOST', u'TENABLE_USER', u'TENABLE_PASSWORD')"
    }
});