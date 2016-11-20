angular.module('app')
    .service('AlertService', AlertService);

function AlertService(toastr) {
    this.success = success;
    this.error = error;
    this.info = info;
    this.warning = alert;

    function success(mensagem, titulo) {
        titulo = titulo || 'ok';
        toastr.success(mensagem, 'ok');
    };

    function error(mensagem, titulo) {
        titulo = titulo || 'ok';
        toastr.error(mensagem, 'Erro');
    }

    function info(mensagem, titulo) {
        titulo = titulo || 'ok';
        toastr.info(mensagem, 'Info');
    }

    function alert(mensagem, titulo) {
        titulo = titulo || 'ok';
        toastr.warning(mensagem, 'Atenção');
    }

}
