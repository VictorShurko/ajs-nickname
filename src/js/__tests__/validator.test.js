import Validator from '../class/Validator';

test('Валидация никнэйма прошла', ()=>{
    const validate = new Validator();

    expect(validate.validateUsername('user_96-name')).toBe(true);
});
