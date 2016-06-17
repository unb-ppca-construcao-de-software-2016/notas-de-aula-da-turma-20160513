// Yahoo Javascript Module Pattern
var pessoa = function() {
    var primeiro_nome = 'Paulo';
    var ultimo_nome = 'Jerônimo';

    return {
        nome_completo: function() {
            return primeiro_nome + ' ' + ultimo_nome;
        }
    }
}();

pessoa.nome_completo();
