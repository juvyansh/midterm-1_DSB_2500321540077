const EventEmitter = require('events');

class Element extends EventEmitter {

    addEventListener(event, callback) {
        this.on(event, callback);
    }

    dispatchEvent(event) {
        this.emit(event.type, event);
    }
}

const button = new Element();

button.addEventListener('click', (event) => {
    console.log('Button clicked!');
    console.log('Event type:', event.type);
});

button.dispatchEvent({
    type: 'click',
    target: button
});