angular.module('app')
    .config(config);

config.$inject = ['$stateProvider'];

function config($stateProvider) {

    var cadastroBairro = {
        name:'cadastroBairro',
        url:'/cadastro-bairro',
        templateUrl:'app/views/bairro/cadastro-bairro.html',
        resolve: {
            carregarController: function ($ocLazyLoad){
                return $ocLazyLoad.load('app/views/bairro/manter-bairro.controller.js');
            }
        }
    };

    var visualizaBairro = {
        name:'visualizaBairro',
        url:'/visualiza-bairro',
        templateUrl:'app/views/bairro/visualiza-bairro.html',
        params: {
            linha: null
        },
        resolve: {
            carregarController: function ($ocLazyLoad){
                return $ocLazyLoad.load('app/views/bairro/visualiza-bairro.controller.js');
            }
        }
    };
    $stateProvider
        .state('cadastroBairro', cadastroBairro)
        .state('visualizaBairro', visualizaBairro)
}