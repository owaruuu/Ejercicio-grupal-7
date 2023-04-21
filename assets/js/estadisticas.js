$(document).ready(function () {
    $('#miTabla').DataTable({
        responsive: true,
        language: {
            url: '//cdn.datatables.net/plug-ins/1.13.4/i18n/es-CL.json',
        }, ajax: 'assets/data/data.json',
        columns: [
            { data: 'id' },
            { data: 'first_name' },
            { data: 'email' },
            { data: 'city' },
            { data: 'enterprise' },
        ],
    });
});