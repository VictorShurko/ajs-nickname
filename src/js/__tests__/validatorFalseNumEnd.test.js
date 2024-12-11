import Validator from '../class/Validator';

test('Валидация никнэйма с числом в конце', ()=>{
    const validate = new Validator();

    expect(validate.validateUsername('username9')).toBe(false);
});
