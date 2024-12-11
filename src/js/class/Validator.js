export default class Validator {
    validateUsername(userName) {
        const availableCharacters = /^[a-z0-9_-]+$/i;
        const notBeginNumbersSymbols = /^[^0-9_-]/;
        const notEndNumbersSymbols = /[^0-9_-]$/;
        const noMoreThreeDigitsRow = /^(?:(?!\d{4}).)*$/;

        return (
            availableCharacters.test(userName) &&
            notBeginNumbersSymbols.test(userName) &&
            notEndNumbersSymbols.test(userName) &&
            noMoreThreeDigitsRow.test(userName)
        );
    }
}