'use strict'

var trainingControllers = angular.module('trainingControllers', []);


trainingControllers.controller('NavBarCtrl', ['$scope', '$http', '$location',
    function($scope, $http, $location) {
        $scope.isActive = function(nav) {
            if (nav.dropdown) {
                var isActiveDropdown = false;
                nav.dropdown.forEach(function(subnav) {
                    if ($location.path() === subnav.link) {
                        isActiveDropdown = true;
                    }
                });
                return isActiveDropdown;
            } else {
                return $location.path() === nav.link;
            }
        };

        $http.get('json/navigation.json')
            .then(function(response) {
                $scope.navigation = response.data.navigation;
            }, function(response) {
                console.error('navigation response error', response);
            });
    }
]);

trainingControllers.controller('HomeCtrl', ['$scope', '$routeParams',
    function($scope, $routeParams) {

    }
]);

trainingControllers.controller('GraphCtrl', ['$scope', '$routeParams', 'Graph',
    function($scope, $routeParams, Graph) {
        var graphJson = Graph.get({}, function() {
            $scope.graph = new GraphObj().fromJson(graphJson);
            $scope.redrawGraph();
        });

        $scope.redrawGraph = function() {
            var graphContainer = document.getElementById('graph');
            var options = {
                "height": '600px'
            };
            var network = new vis.Network(graphContainer, $scope.graph, options);
        };

        $scope.randomGraph = function() {
            // Temp until I can get the POST working....
            $scope.graph = new GraphObj().fromModelRandom($scope.graph.model);
            $scope.redrawGraph();

            // Correct Format
            //Graph.save(JSON.stringify(newGraph), function() {
            //   $scope.redrawGraph($scope.graph);
            //});

            // Alternative Format
            // $http.put('json/graph.json', newGraph)
            //     .then(function(response) {
            //         $scope.graph = newGraph;
            //         $scope.redrawGraph($scope.graph);
            //     }, function(response) {
            //         console.error('navigation response error', response);
            //     });

        };

        $scope.getMaxEdges = function(nodeCount) {
            return (nodeCount * (nodeCount - 1)) / 2;
        }
    }
]);

trainingControllers.controller('TestPageCtrl', ['$scope', '$routeParams',
    function($scope, $routeParams) {
        //    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
        //      $scope.mainImageUrl = phone.images[0]
        //    })
        //
        //    $scope.setImage = function(imageUrl) {
        //      $scope.mainImageUrl = imageUrl
        //    }
    }
]);

function GraphModel(prefix, nodeCount, edgeCount) {
    this.prefix = prefix;
    this.nodeCount = nodeCount;
    this.edgeCount = edgeCount;
}

function GraphObj(model, nodes, edges) {
    this.model = model;
    this.nodes = nodes;
    this.edges = edges;

    this.fromJson = function(jsonGraph) {
        return new GraphObj(jsonGraph.model, jsonGraph.nodes, jsonGraph.edges);
    }

    this.fromModelRandom = function(model) {
        var randomNodes = function(model) {
            nodes = [];

            for (var n = 1; n <= model.nodeCount; n++) {
                nodes.push({
                    "id": n,
                    "label": model.prefix + " " + n
                });
            }

            return nodes;
        };

        var randomEdges = function(model, nodes) {
            edges = [];

            var isValidEdge = function(from, to, edgeArr) {
                return !(edgeArr[from][to] || edgeArr[to][from] || from === to)
            }

            var sortEdges = function(edges) {
                edges.sort(function compare(a, b) {
                    var aWeighted = a.from * 1000 + a.to;
                    var bWeighted = b.from * 1000 + b.to;
                    return aWeighted - bWeighted;
                });

                return edges;
            }

            var edgeArr = new Array(model.nodeCount);
            for (var i = 0; i < edgeArr.length; i++) {
                edgeArr[i] = new Array(model.nodeCount);
                for (var j = 0; j < edgeArr[i].length; j++) {
                    edgeArr[i][j] = false;
                }
            }

            var edgeProbability = .01;

            while (edges.length < model.edgeCount) {
                for (var i = 0; i < edgeArr.length && edges.length < model.edgeCount; i++) {
                    for (var j = 0; j < i && edges.length < model.edgeCount; j++) {
                        if (isValidEdge(i, j, edgeArr) && Math.random() < edgeProbability) {
                            edgeArr[i][j] = true;
                            edges.push({
                                'from': j + 1,
                                'to': i + 1
                            });
                        }
                    }
                }
            }

            return sortEdges(edges);
        };

        nodes = randomNodes(model);
        edges = randomEdges(model, nodes);

        return new GraphObj(model, nodes, edges);
    };
}
