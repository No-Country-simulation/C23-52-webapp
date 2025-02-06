
export default function SupportCreatorPay({text}) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">Soporte y Pago Seguro</h2>
      <h3 className="text-lg font-semibold">Estas apooyando al creador con <span className="font-bold ">${text}</span></h3>

      <p className="text-base mb-5">
        Completa el siguiente formulario para finalizar tu pago. Tu información
        está protegida y el proceso es 100% seguro. Si tienes dudas,
        contáctanos.
      </p>
    </div>
  );
}
