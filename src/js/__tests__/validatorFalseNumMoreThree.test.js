import Validator from '../class/Validator';

test('Валидация никнэйма содержать подряд более трёх цифр', ()=>{
    const validate = new Validator();

    expect(validate.validateUsername('user5678name')).toBe(false);
});
