/**
 * Obtener el valor de la carta
 * @param {String} carta Ejemplo '2C'
 * @returns {Number} regresa el valor  de una carta
 */
export const valorCarta = ( carta ) => {
    if(!carta || carta.length === 0) throw new Error('carta es obligatorio como un string');
    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}