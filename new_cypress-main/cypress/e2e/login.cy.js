describe('Тестирование формы логина и пароля', function () {
    
    it('Правильный логин и пароль', function () {
        cy.visit('https://login.qa.studio/'); // Открываю сайт
        cy.get('#mail').type('german@dolnikov.ru') // Ввожу верный логин
        cy.get('#loginButton').should('be.disabled') // Проверяем что кнопка "Войти" не активна
        cy.get('#pass').type('iLoveqastudio1') // Ввожу верный пароль
        cy.get('#loginButton').should('be.enabled') // Проверяем что кнопка "Войти" активна
        cy.get('#loginButton').click(); // Нажимаем на кнопку "Войти"

        cy.get('#messageHeader').should('be.visible') // Текст виден пользователю
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяем наличие текста об успешной авторизации

        cy.get('#exitMessageButton > .exitIcon').should('be.visible') // Крестик виден пользователю

         })


    it('Восстановление пароля', function () {
        cy.visit('https://login.qa.studio/'); // Открываю сайт
        cy.get('#forgotEmailButton').click(); // Открываю форму восстановления пароля
        cy.get('#mailForgot').type('german@dolnikov.ru') // Ввожу почту
        cy.get('#restoreEmailButton').click(); // Нажимаю на кнопку "Отправить"

        cy.get('#messageHeader').should('be.visible') // Текст виден пользователю
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверяем наличие текста об успешной отправке пароля на почту

        cy.get('#exitMessageButton > .exitIcon').should('be.visible') // Крестик виден пользователю
         })


    it('Правильный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Открываю сайт
        cy.get('#mail').type('german@dolnikov.ru') // Ввожу верный логин
        cy.get('#loginButton').should('be.disabled') // Проверяем что кнопка "Войти" не активна
        cy.get('#pass').type('iLoveqastudio2') // Ввожу неверный пароль
        cy.get('#loginButton').should('be.enabled') // Проверяем что кнопка "Войти" активна
        cy.get('#loginButton').click(); // Нажимаем на кнопку "Войти"

        cy.get('#messageHeader').should('be.visible') // Текст виден пользователю
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // ППроверяем наличие текста о неверном логине или пароле

        cy.get('#exitMessageButton > .exitIcon').should('be.visible') // Крестик виден пользователю

         })


     it('Неправильный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Открываю сайт
        cy.get('#mail').type('testqa@test.ru') // Ввожу неверный логин
        cy.get('#loginButton').should('be.disabled') // Проверяем что кнопка "Войти" не активна
        cy.get('#pass').type('iLoveqastudio1') // Ввожу верный пароль
        cy.get('#loginButton').should('be.enabled') // Проверяем что кнопка "Войти" активна
        cy.get('#loginButton').click(); // Нажимаем на кнопку "Войти"

        cy.get('#messageHeader').should('be.visible') // Текст виден пользователю
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяем наличие текста о неверном логине или пароле

        cy.get('#exitMessageButton > .exitIcon').should('be.visible') // Крестик виден пользователю

         })


    it('Проверка валидации', function () {
        cy.visit('https://login.qa.studio/'); // Открываю сайт
        cy.get('#mail').type('germandolnikov.ru') // Ввожу логин без "@"
        cy.get('#loginButton').should('be.disabled') // Проверяем что кнопка "Войти" не активна
        cy.get('#pass').type('iLoveqastudio2') // Ввожу верный пароль
        cy.get('#loginButton').should('be.enabled') // Проверяем что кнопка "Войти" активна
        cy.get('#loginButton').click(); // Нажимаем на кнопку "Войти"
        
        cy.get('#messageHeader').should('be.visible') // Текст виден пользователю
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверяем наличие текста о проблеме валидации

        cy.get('#exitMessageButton > .exitIcon').should('be.visible') // Крестик виден пользователю

         })


    it('Проверка приведения логина к строчным буквам', function () {
        cy.visit('https://login.qa.studio/'); // Открываю сайт
        cy.get('#mail').type('GerMan@Dolnikov.ru') // Ввожу логин с заглавными буквами
        cy.get('#pass').type('iLoveqastudio1') // Ввожу верный пароль
        cy.get('#loginButton').click(); // Нажимаем на кнопку "Войти"

        cy.get('#messageHeader').should('be.visible') // Текст виден пользователю
        cy.get('#messageHeader').should('Авторизация прошла успешно') // Проверяем наличие текста об успешной авторизации

        cy.get('#exitMessageButton > .exitIcon').should('be.visible') // Крестик должен быть виден
         })
    })