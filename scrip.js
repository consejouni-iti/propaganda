document.addEventListener('DOMContentLoaded', () => {
    // 1. Lógica para el Botón activo en el nav (Añadir clase 'active' para resaltarlo)
    const currentPath = window.location.pathname.split('/').pop();
    document.querySelectorAll('nav ul li a').forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath) {
            link.classList.add('active');
        } else if (currentPath === '' && linkPath === 'index.html') {
             // Caso especial para cuando el index se carga sin nombre en la URL
            link.classList.add('active');
        }
    });

    // 2. Simulación de envío de formulario de contacto/propuesta (Solo funciona en contacto.html)
    const formContacto = document.getElementById('formulario-contacto');
    const mensajeEnvio = document.getElementById('mensaje-envio');

    if (formContacto) {
        formContacto.addEventListener('submit', function(e) {
            e.preventDefault();

            const asunto = document.getElementById('asunto').value;
            
            let mensaje = '✅ Mensaje recibido. Revisaremos su solicitud.';
            if (asunto === 'Solicitar Audiencia') {
                mensaje = '✅ Solicitud de Audiencia recibida. Nos contactaremos con su correo BUAP para agendar.';
            } else if (asunto === 'Propuesta de Mejora') {
                 mensaje = '✅ Propuesta de Mejora registrada. Será presentada en la próxima reunión de consejería.';
            }
            
            mensajeEnvio.textContent = mensaje;
            mensajeEnvio.style.display = 'block';

            // Ocultar el mensaje después de 5 segundos y limpiar
            setTimeout(() => {
                mensajeEnvio.style.display = 'none';
                formContacto.reset();
            }, 5000);
        });
    }
});