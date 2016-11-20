angular.module('app')
    .controller('ManterBairroController', ManterBairroController);

function ManterBairroController($scope, AlertService, $filter, $state) {

    $scope.entidade = {};

    $scope.listaBairros = [];
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
        $scope.entidade.bairro = $filter('maiusculo')($scope.entidade.bairro);
        $scope.entidade.cidade = $filter('maiusculo')($scope.entidade.cidade);
        $scope.entidade.estado = $filter('maiusculo')($scope.entidade.estado);

        if(!$scope.entidade.indice){
            $scope.listaBairros.push($scope.entidade);
        }
        else{
            var indice = $scope.entidade.indice;
            $scope.listaBairros[indice].bairro = $scope.entidade.bairro;
            $scope.listaBairros[indice].cidade = $scope.entidade.cidade;
            $scope.listaBairros[indice].estado = $scope.entidade.estado;
            delete $scope.listaBairros[indice].indice;
        }

        AlertService.success('Registro salvo com sucesso!');
        limpar();
    }

    function limpar() {
        $scope.entidade = {};
        $scope.bairroForm.$setUntouched();

        angular.element('#bairro').focus();
    }

    function excluir(linha) {
        var index = $scope.listaBairros.indexOf(linha);

        $scope.listaBairros.splice(index, 1)
    }

    function editar(linha) {
        $scope.entidade.bairro = linha.bairro;
        $scope.entidade.cidade = linha.cidade;
        $scope.entidade.estado = linha.estado;
        $scope.entidade.indice = $scope.listaBairros.indexOf(linha);
    }

    $scope.gridOptions = {
        columnDefs: [
            {name: 'Nome do Bairro', field:'bairro'},
            {name: 'Nome da Cidade', field:'cidade'},
            {name: 'Estado', field:'estado'},
            // {name:'ex', field:'excluir',
            //     cellTemplate:'app/template/grid/cell-template.excluir.html'},
            // {name:'ed', field:'editar',
            //     cellTemplate:'app/template/grid/cell-template.editar.html'},
            {name:'vis', field:'editar',
                cellTemplate:'app/template/grid/cell-template.visualizar.html'}

        ],
        data:'listaBairros',
        enableColumnMenus:false
    };


}