//accountContents define as propiedades do conteúdo do extrato
export interface accountContents {
    contentName: string, //o que é.
    contentLocal: string, //onde ocorreu.
    contentDate: string, //quando ocorreu.
    contentValue: number, //valor (positivo = crédito, negativo = débito).
}