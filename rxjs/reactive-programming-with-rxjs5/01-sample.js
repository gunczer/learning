const Rx = require('rxjs/Rx');

Rx.Observable.of(1, 2, 3).subscribe(value => {
    console.log(value);
})