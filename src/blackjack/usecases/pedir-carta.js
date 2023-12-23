/**
 * 
 * @param {Array<String>} deck Ejemplo ['2C','2D','2H','2S',...]
 * @returns {String}  retorn una carta del deck
 */
export const pedirCarta = (deck) => {

    if (!deck || deck.length === 0 ) {
        throw  new Error('No hay cartas en el deck');
    }
   
    const carta = deck.pop();
    return carta;
}