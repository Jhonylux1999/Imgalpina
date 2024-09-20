$(document).ready(function () {
    $.ajax({
        url: '/recursosHumanos/Notificacion',
        method: 'GET',
        dataType: 'json',
        success: function (response) {
            var $notificacionesList = $("#notificacionesList");
            var $notificacionesCount1 = $("#notificacionesCount1");
            var $notificacionesCount2 = $("#notificacionesCount2");

            if (response.data && Array.isArray(response.data)) {

                $notificacionesCount1.text(response.data.length);
                $notificacionesCount2.text(response.data.length);
                $notificacionesList.empty();

                response.data.forEach(function (notificacion) {
                    var notificacionHtml = `
                        <li class="notification-item">
                            <i class="bi bi-exclamation-circle text-warning"></i>
                            <div>
                                <h4>${notificacion.nombre || 'Nombre del pago'}</h4>
                                <p>${notificacion.fechaPago || 'Fecha'}</p>
                                <p>${notificacion.descripcion || 'Descripción'}</p>
                            </div>
                        </li>
                        <li>
                            <hr class="dropdown-divider">
                        </li>
                    `;
                    $notificacionesList.append(notificacionHtml);
                });

            }
            else {
                $notificacionesList.html('<li><p>No hay notificaciones.</p></li>');
            }
        },
        error: function (xhr, status, error) {
            $("#notificacionesList").html("<li><p>Error al cargar las notificaciones: " + error + "</p></li>");
        }
    });




});
