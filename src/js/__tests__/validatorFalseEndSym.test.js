import Validator from '../class/Validator';

test('Валидация никнэйма с символом в конце', ()=>{
    const validate = new Validator();

    expect(validate.validateUsername('username-')).toBe(false);
});
