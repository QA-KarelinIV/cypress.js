describe('Тестирование покупки нового тренера', function () {
    
    it('Тест на покупку нового аватара', function () {
        cy.visit('https://pokemonbattle.me/'); // Открываю сайт
        cy.get(':nth-child(1) > .auth__input').type('почта') // Ввожу почту
        cy.get('#password').type('пароль') // Ввожу пароль
        cy.get('.auth__button').click(); // Нажимаем на кнопку "Войти"
        cy.get('.header__btns > [href="/shop"]').click(); // Переходим в магазин
        cy.get(':nth-child(2) > .shop__button').then(($button) => { // Получаем кнопку первого аватара
            const maxIndex = 12; // Максимальный индекс аватара
            const randomIndex = Math.floor(Math.random() * maxIndex) + 2; // Случайный индекс от 2 до 12
            cy.get(`:nth-child(${randomIndex}) > .shop__button`).click(); // Нажимаем кнопку случайного аватара
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('карта') // Ввожу номер карты  
        cy.get(':nth-child(1) > .pay_base-input-v2').type('срок'); // Ввожу срок действия карты
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('cvv'); // Ввожу CVV/CVC
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Test Avatar'); // Ввожу Имя и Фамилию плательщика
        cy.get('.pay__main-v2').click(); // Нажимаю на молоко что-бы кнопка "купить стала активна"
        cy.get('.pay-btn').click(); // Нажимаю оплатить
        cy.get('#cardnumber').type('56456'); // Ввожу код из смс
        cy.get('.payment__submit-button').click(); // Подтверждаю оплату
        cy.get('.payment__adv').click();  // Возвращаюсь в магазин
         })
        })
    })