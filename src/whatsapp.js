// Business WhatsApp number: country code + number, digits only (no + or spaces).
export const WHATSAPP_NUMBER = "2348068146744";

export const whatsappLink = (message = "") =>
  `https://wa.me/${WHATSAPP_NUMBER}` +
  (message ? `?text=${encodeURIComponent(message)}` : "");

export const buildOrderMessage = (cart, total) => {
  const lines = cart.map(
    (item) =>
      `• ${item.quantity} x ${item.name} - ₦${(item.price * item.quantity).toLocaleString()}`
  );
  return [
    "Hello EmmyTech, I'd like to place an order:",
    "",
    ...lines,
    "",
    `Total: ₦${total.toLocaleString()}`,
    "",
    "Please confirm availability and delivery details. Thank you!",
  ].join("\n");
};