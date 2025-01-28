 <h1>Proyecto: Sorteo de Amigos</h1>
    <h2>Descripción</h2>
    <p>Este proyecto es una aplicación web sencilla cuyo objetivo principal es fortalecer las habilidades en lógica de programación. Permite agregar nombres a una lista de "amigos" y realizar un sorteo para seleccionar un ganador de forma aleatoria. Incluye tres funciones principales: <strong>agregarAmigo</strong>, <strong>actualizarLista</strong> y <strong>sortearAmigo</strong>.</p>
    <h2>Funciones</h2>
    <h3>1. agregarAmigo()</h3>
    <p>Esta función captura el valor ingresado en un campo de texto, lo agrega al array global <code>amigos</code> y actualiza la lista mostrada en pantalla.</p>
    <h4>Detalles de la lógica:</h4>
    <ul>
        <li>Obtiene el valor del input con id <code>nombre</code>.</li>
        <li>Valida que el valor no esté vacío.</li>
        <li>Limpia el campo de texto después de agregarlo.</li>
        <li>Llama a <code>actualizarLista</code> para reflejar los cambios en el DOM.</li>
    </ul>
    <h4>Posibles errores y solución:</h4>
    <p>Si el input está vacío, muestra un mensaje de alerta: "Por favor, ingrese un nombre". Esto asegura que no se agreguen valores vacíos al array.</p>
    <h3>2. actualizarLista()</h3>
    <p>Esta función actualiza el contenido del elemento <code>ul</code> con id <code>lista-amigos</code>, mostrando todos los nombres almacenados en el array <code>amigos</code>.</p>
    <h4>Detalles de la lógica:</h4>
    <ul>
        <li>Limpia el contenido previo de la lista.</li>
        <li>Itera sobre el array <code>amigos</code> y crea un elemento <code>li</code> para cada nombre.</li>
        <li>Agrega cada <code>li</code> al elemento <code>ul</code>.</li>
    </ul>
    <h4>Posibles errores y solución:</h4>
    <p>Ningún error esperado si el array <code>amigos</code> se gestiona correctamente.</p>
    <p>Si <code>ul</code> no está presente en el DOM, la función fallará. Solución: asegúrate de que el elemento exista con el id correcto.</p>
    <h3>3. sortearAmigo()</h3>
    <p>Esta función realiza un sorteo aleatorio entre los nombres del array <code>amigos</code> y muestra el ganador en un elemento <code>div</code> con id <code>resultado</code>.</p>
    <h4>Detalles de la lógica:</h4>
    <ul>
        <li>Verifica que haya al menos 2 nombres en el array antes de realizar el sorteo.</li>
        <li>Genera un índice aleatorio utilizando <code>Math.random()</code>.</li>
        <li>Muestra el nombre del ganador en un nuevo elemento <code>p</code> dentro de <code>div</code>.</li>
    </ul>
    <h4>Posibles errores y solución:</h4>
    <p>Si el array tiene menos de 2 nombres, muestra un mensaje de alerta: "Por favor, ingresa al menos 2 amigos para llevar a cabo el sorteo".</p>
    <p>Si <code>div</code> no está presente en el DOM, la función fallará. Solución: asegúrate de que el elemento exista con el id correcto.</p>
    <h2>Cómo usar el proyecto</h2>
    <ol>
        <li>Agrega nombres al campo de texto y presiona el botón correspondiente para agregar amigos.</li>
        <li>Verifica que los nombres se muestren en la lista.</li>
        <li>Una vez que tengas al menos dos nombres, presiona el botón de sorteo para seleccionar un ganador.</li>
        <li>El nombre del ganador se mostrará en la lista de resultados.</li>
    </ol>
    <h2>Tecnologías utilizadas</h2>
    <ul>
        <li><strong>HTML:</strong> Para la estructura de la página.</li>
        <li><strong>CSS:</strong> (Opcional) Para los estilos visuales.</li>
        <li><strong>JavaScript:</strong> Para la lógica de la aplicación.</li>
    </ul>
    <h2>Posibles mejoras</h2>
    <ul>
        <li>Permitir eliminar nombres de la lista.</li>
        <li>Validar que no se agreguen nombres duplicados.</li>
        <li>Implementar un contador para mostrar cuántos amigos se han agregado.</li>
        <li>Mejorar la interfaz con estilos más atractivos.</li>
    </ul>
    <h2>Notas</h2>
    <p>El proyecto está diseñado para ser simple y didáctico. Es ideal para practicar manipulación del DOM y lógica de programación.</p>
    <p>Si tienes problemas con alguna funcionalidad, revisa los elementos del DOM y asegúrate de que los IDs utilizados coincidan con los esperados por el código.</p>
