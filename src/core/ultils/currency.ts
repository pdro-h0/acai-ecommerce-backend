export class Currency {
  format(valor: number, locale: string = "pt-BR", currency: string = "BRL") {
    return (valor ?? 0).toLocaleString(locale, {
      currency,
      style: "currency",
    });
  }
}
