angular.module('app')
    .controller('ManterBairroController', ManterBairroController);

function ManterBairroController($scope, AlertService, $filter, $state, $rootScope) {

    $rootScope.entidade = {
        bairro: null,
    cidade: null,
    estado: null
    };


    $scope.salvar = salvar;
    $scope.limpar = limpar;
    $scope.excluir = excluir;
    $scope.editar = editar;


    function salvar() {
        if($scope.bairroForm.$invalid){
            $scope.bairroForm.bairro.$setTouched();
            $scope.bairroForm.cidade.$setTouched();
            $scope.bairroForm.estado.$setTouched();
            AlertService.error('Formulário inválido');
            return;
        }
        else if($rootScope.entidade.indice == undefined){
            $rootScope.listaBairros.push($rootScope.entidade);
            $rootScope.entidade.bairro = $filter('maiusculo')($rootScope.entidade.bairro);
            $rootScope.entidade.cidade = $filter('maiusculo')($rootScope.entidade.cidade);
            $rootScope.entidade.estado = $filter('maiusculo')($rootScope.entidade.estado);
        }
        else{
            var indice = $rootScope.entidade.indice;
            $rootScope.listaBairros[indice].bairro = $rootScope.entidade.bairro;
            $rootScope.listaBairros[indice].cidade = $rootScope.entidade.cidade;
            $rootScope.listaBairros[indice].estado = $rootScope.entidade.estado;
            delete $rootScope.listaBairros[indice].indice;
        }
        AlertService.success('Registro salvo com sucesso!');
        limpar();
    }

    function limpar() {
        $rootScope.entidade = {};
        $scope.bairroForm.$setUntouched();
    }

    function excluir(linha) {
        var index = $rootScope.listaBairros.indexOf(linha);
        $rootScope.listaBairros.splice(index, 1)
    }

    function editar(linha) {
        $rootScope.entidade.bairro = linha.bairro;
        $rootScope.entidade.cidade = linha.cidade;
        $rootScope.entidade.estado = linha.estado;
        $rootScope.entidade.indice = $rootScope.listaBairros.indexOf(linha);
    }

    $scope.gridOptions = {
        columnDefs: [
            {name: 'Nome do Bairro', field:'bairro'},
            {name: 'Nome da Cidade', field:'cidade'},
            {name: 'Estado', field:'estado'},
            {name:'', field:'botoes',
                cellTemplate:'app/template/grid/cell-template.html'}

        ],
        data:'listaBairros',
        enableColumnMenus:false
    };


}