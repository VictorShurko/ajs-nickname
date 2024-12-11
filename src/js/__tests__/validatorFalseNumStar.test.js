import Validator from '../class/Validator';

test('Валидация никнэйма с цифрой в начале', ()=>{
    const validate = new Validator();

    expect(validate.validateUsername('9username')).toBe(false);
});
