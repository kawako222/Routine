function getHourFromAngle(angle) {
    let hour = Math.round(angle / 30);  // Cada 30 grados es una hora
    return hour === 0 ? 12 : hour;  // Ajuste para que 0 grados sea 12
  }
  
  function updateEventMessage(hour, period) {
    const eventMessage = document.querySelector('.cards');
    eventMessage.textContent = `Evento a las ${hour} ${period}`;
  }
  
  // Función para actualizar el evento basado en la posición de la manecilla
  function updateClockEvents(angle) {
    let hour = getHourFromAngle(angle);
    
    const isPM = document.querySelector('input[name="ampm"]:checked').value === "PM";
    let period = isPM ? "PM" : "AM";
  
    updateEventMessage(hour, period);
  }
  
  // Ejemplo de cómo actualizar la manecilla y el evento
  function onHandMove(event) {
    const angle = getMouseAngle(event);
    updateHandPosition(event.target, angle);  // Mueve la manecilla
    updateClockEvents(angle);  // Actualiza el evento según el ángulo
  }
  
  document.querySelector('.hand').addEventListener('mousemove', onHandMove);
  