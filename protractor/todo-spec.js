describe('angularjs homepage todo list', function() {

    
    beforeEach(function() {
        browser.get('https://angularjs.org');   
        browser.sleep(3000);
    });

    it('should add a todo', function() {
        element(by.model('todoList.todoText')).sendKeys('write first protractor test');
        element(by.css('[value="add"')).click();

        browser.sleep(1000);

        var todoList = element.all(by.repeater('todo in todoList.todos'));
        expect(todoList.count()).toEqual(3);
        expect(todoList.get(2).getText()).toEqual('write first protractor test');

        browser.sleep(1000);

        todoList.get(2).element(by.css('input')).click();
        var completedAmount = element.all(by.css('.done-true'));
        expect(completedAmount.count()).toEqual(2);

        browser.sleep(1000);
    });

    it('should enter the text', function() {
        element(by.model('yourName')).sendKeys('jancsi');

        var text = element(by.binding('yourName')).getText();

        text.then(function(t) {
            console.log('the text is: ' , t);
        });

        browser.debugger();

        expect(text).toEqual('Hello jancsi!');

        browser.sleep(1000);

    });

});