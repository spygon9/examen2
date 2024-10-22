import React from 'react';

const Pagar = ({ handlePayment, total, isPaid }) => {
  return (
    <div>
      <h3>Total: ${total}</h3>

      {/* Mostrar el botón de pagar si no se ha pagado aún */}
      {!isPaid && (
        <button onClick={handlePayment}>Pagar</button>
      )}

      {/* Mostrar el mensaje de confirmación si ya se ha pagado */}
      {isPaid && <p>¡Gracias! La orden ha sido pagada.</p>}
    </div>
  );
};

export default Pagar;