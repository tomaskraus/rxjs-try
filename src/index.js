import "./styles.css";
import * as Rx from "rxjs";
import * as Rxo from "rxjs/operators";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

console.log("start");

Rx.from([1, 2, 3, 4])
  .pipe(Rxo.map((x) => x * 2))
  .subscribe((v) => console.log(`v=${v}`));
