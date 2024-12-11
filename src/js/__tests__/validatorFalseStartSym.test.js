import Validator from '../class/Validator';

test('Валидация никнэйма с символом в начале', ()=>{
    const validate = new Validator();

    expect(validate.validateUsername('-username')).toBe(false);
});
