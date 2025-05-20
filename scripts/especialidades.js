document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('btn-especialidades');
    if (btn) {
        btn.addEventListener('click', function() {
            window.location.href = 'especialidades.html';
        });
    }
});
