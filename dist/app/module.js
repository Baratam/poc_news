angular.module('news.module', [
	'ngRoute'])

//routing
.config(['$routeProvider', function($routeProvider) {
		$routeProvider
	
		.when('/news/newsHome', {
            templateUrl: 'views/news/newsHome.html',
            controller: 'newsHomeController'
        });
	}]
);
angular.module('news.module')

.controller("itemsController",  ['$scope', function ($scope) {

                $scope.$parent.isopen = ($scope.$parent.default === $scope.item);

                $scope.$watch('isopen', function (newvalue, oldvalue, $scope) {
                    $scope.$parent.isopen = newvalue;
                });

            }]);
angular.module('news.module')

.controller("newsHomeController",  ['$scope', function ($scope) {
$scope.items = [
                    {
                        name: "item1",
                        desc: "@June",
                        subitems: [
                            {
                                name: "subitem1",
                                desc: "Capgemini announced as a recipient of two Pegasystems Partner Excellence Awards"
                            },
                            {
                                name: "subitem2",
                                desc: "Capgemini launches a capital increase in the context of the financing of the IGATE acquisition"
                            },
                            {
                                name: "subitem2",
                                desc: "Success of the capital increase launched for the financing of the IGATE acquisition"
                            }]
                    },
                    {
                        name: "item2",
                        desc: "@May",
                        subitems: [
                            {
                                name: "subitem1",
                                desc: "Capgemini wins multi-million euro contract extension with Nokia for Global Order Management Processing"
                            },
                            {
                                name: "subitem2",
                                desc: "2015 Capital Market Day"
                            },
                            {
                                name: "subitem2",
                                desc: "Capgemini Honored as the Recipient of EMC Global Innovation Award"
                            }]
                    },
                    {
                        name: "item3",
                        desc: "@April",
                        subitems: [
                            {
                                name: "subitem1",
                                desc: "Capgemini Chosen as State of Georgia’s Multi-sourcing Service Integrator"
                            },
                            {
                                name: "subitem2",
                                desc: "Capgemini Introduces New Cloud-Based Banking Platform Solution"
                            },
                            {
                                name: "subitem2",
                                desc: "Capgemini Canada Named Among Toronto’s Top Employers and Canada’s Best Diversity Employers"
                            }]
                    }
                ];

$scope.default = $scope.items[2];
}]);


