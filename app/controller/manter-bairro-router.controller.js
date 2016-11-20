angular.module('app')
    .controller('ManterBairroRouterController', ManterBairroRouterController);

function ManterBairroRouterController($scope, $state) {

    $state.go('cadastroBairro');

    $scope.abrirPagina = abrirPagina;

    function abrirPagina(pagina) {
        $state.go(pagina);
    }
}
