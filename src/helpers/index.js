export function formatMoney(e) {
  return e.toLocaleString("es-HN", {
    style: "currency",
    currency: "HNL"
  });
}