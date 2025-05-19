document.getElementById('cadastroForm').addEventListener('submit', function(e) {
    var senha = document.getElementById('senha').value;
    var confirmarSenha = document.getElementById('confirmarSenha').value;

    if (senha !== confirmarSenha) {
        e.preventDefault();
        alert('As senhas não coincidem!');
    }
});