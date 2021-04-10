import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { from, fromEvent, Observable, of } from "rxjs";
import { fromPromise } from "rxjs/internal-compatibility";
import { filter, map } from "rxjs/operators";
import { timer } from "rxjs";
import { tap, mapTo, share } from "rxjs/operators";
import { from, Observable, of, throwError } from "rxjs";
import { fromPromise } from "rxjs/internal/observable/fromPromise";
import { map } from "rxjs/internal/operators/map";
import { catchError, filter, retry, switchMap } from "rxjs/operators";


// const source = of("World").pipe(map(x => `Hello ${x}!`));

// source.subscribe(console.log);

//1.
// const myObs = new Observable(observer => {
//   observer.next(1);
//   observer.next(2);
//   observer.complete();

//   return function asd() {
//     console.log("completed!");
//   };
// });

// myObs
//   .pipe(map((x: number) => x + 10))
//   .subscribe(
//     next => console.log("next", next),
//     error => console.log("error", error),
//     () => console.log("completed")
//   );

//Creting observables of (one value)
//2.
// const myObs2 = of("add").pipe(
//   map((x: string) => x + "!"));

// myObs2.subscribe(
//   next => console.log("next", next),
//   error => console.log("error", error),
//   () => console.log("completed")
// );

// //2. iterable from
// const myObs3 = from("hello"); // [1,2,3]

// myObs3.subscribe(
//   next => console.log("next", next),
//   error => console.log("error", error),
//   () => console.log("completed")
// );

// const buttonEl = document.getElementById("btn");

//4. observable from promise
// const obs4 = fromEvent(buttonEl, "click");

// obs4.subscribe(
//   next => console.log("next", (next.target as HTMLButtonElement).textContent),
//   error => console.log("error", error),
//   () => console.log("completed")
// );

//5. observable from promise
const obs5 = fromPromise(fetch("https://jsonplaceholder.typicode.com/posts"));

obs5.subscribe(
    next => console.log("next", next),
    error => console.log("error", error),
    () => console.log("completed")
);

/*const subs2 = obs5.subscribe(
next => console.log("next", next),
error => console.log("error", error),
() => console.log("completed")
);
console.log("s2", subs2);*/


/*const myObservable = from([1, 2, 3]).pipe(
  map(x => x * 10),
  filter(x => {
    return x > 11;
  })
);

const observer = {
  next: next => console.log(next),
  error: error => console.error(error),
  complete: () => console.log("complete")
};

myObservable.subscribe(observer);*/

// const mypromise = new Promise((resolve, reject) => {
//   //asynv művelet
//   resolve(true);
//   reject("error");
// });

// mypromise.then(data => {
//   console.log("success", data)
// })

// const myObs1 = new Observable(observer => {
//   var oReq = new XMLHttpRequest();
//   oReq.addEventListener("readystatechange", () => {
//     if (oReq.readyState === 4 && oReq.status === 200) {
//       let data = JSON.parse(oReq.responseText);
//       observer.next(data);
//       observer.complete();
//     } else if (oReq.readyState === 4) {
//       // 404, egyéb hiba kezelés
//       observer.error("!!!netwoek error");
//     }
//   });

//   oReq.open("GET", "https://jsonplaceholder.typicode.com/users");
//   oReq.send();
// });

// myObs1.subscribe(
//   next => {
//     console.log("next", next);
//   },
//   error => console.warn("error", error),
//   () => console.log("Completed")
// );

//1. new Observable()

//2. new observable fomr single value
// const obs2 = of([1,2,3]);

// console.log(obs2);

// obs2.subscribe(
//   next => console.log(next)
// )

// 2. iterable from
// const myObs3 = from("hello wolrd!"); // [1,2,3]

// myObs3.subscribe(
//   next => console.log("next", next),
//   error => console.log("error", error),
//   () => console.log("completed")
// );

//5. observable from promise
// const obs5 = fromPromise(fetch("https://jsonplaceholder.typicode.com/postsss"));


// obs5.subscribe(
//   next => console.log("next", next),
//   error => console.log("error", error),
//   () => console.log("completed")
// );





// OPerators

// new observable fomr single value
// const obs2 = from([1,2,3,5,7,9]);

//console.log(obs2);

// obs2
// .pipe(
//   filter(x => x > 5),
//   map(x => x * 2),
// )
// .subscribe(
//    next => console.log("next", next),
//    error => console.log("error", error),
//    () => console.log("completed")
// )

//5. observable from promise
/*const obs5 = fromPromise(fetch("https://jsonplaceholder.typicode.com/posts23"));


obs5
.pipe(
  switchMap(response => response.json()),
  catchError((error: any) => {
    console.warn("asd", error);
    return throwError(error);
  })
)
.subscribe(
  data => {
    console.log("next", data);
    // data
    //   .then(data => console.log("dta", data));
  },
  error => console.log("error", error),
  () => console.log("completed")
);*/
