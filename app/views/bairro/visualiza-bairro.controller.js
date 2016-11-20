angular.module('app')
    .controller('VisualizaBairroController', VisualizaBairroController);

function VisualizaBairroController($scope, $stateParams) {

    $scope.bairro = $stateParams.linha.bairro;
    $scope.cidade = $stateParams.linha.cidade;
    $scope.estado = $stateParams.linha.estado;
}
