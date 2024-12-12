import Validator from '../class/Validator';

test('Валидация никнэйма прошла', ()=>{
    const validate = new Validator();

    expect(validate.validateUsername('user_96-name')).toBe(true);
});

test('Валидация никнэйма с символом в конце', ()=>{
    const validate = new Validator();

    expect(validate.validateUsername('username-')).toBe(false);
});

test('Валидация никнэйма с числом в конце', ()=>{
    const validate = new Validator();

    expect(validate.validateUsername('username9')).toBe(false);
});

test('Валидация никнэйма содержать подряд более трёх цифр', ()=>{
    const validate = new Validator();

    expect(validate.validateUsername('user5678name')).toBe(false);
});

test('Валидация никнэйма с цифрой в начале', ()=>{
    const validate = new Validator();

    expect(validate.validateUsername('9username')).toBe(false);
});

test('Валидация никнэйма с символом в начале', ()=>{
    const validate = new Validator();

    expect(validate.validateUsername('-username')).toBe(false);
});
