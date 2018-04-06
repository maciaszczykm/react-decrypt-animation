import React from 'react';

class Decrypt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.text,
    };
  }

  render() {
    return (
      <div>{this.state.text}</div>
    );
  }
}

export default Decrypt;

// export class AppComponent implements OnInit, OnDestroy {
//   delay = 1000;
//   interval = 30;
//   dictionary = "0123456789qwertyuiopasdfghjklzxcvbnm!?></\a`~+*=@#$%".split('');
//
//   nine = '9';
//   target = "aciaszczy";
//
//   public timerSubscription;
//   public xs;
//   constructor() {}
//
//   decrypt() {
//     let rand = '';
//     let timeBeforeNextLetter = 100;
//     let timePassed = 0;
//     let letters = this.nine.length;
//     let i = 0;
//
//     this.xs = Observable.timer(0, this.interval)
//         .subscribe(() => {
//           timePassed += this.interval;
//
//           if(this.nine.length < this.target.length && timePassed > (this.nine.length * timeBeforeNextLetter)) {
//             letters++;
//             this.nine = this.ranString(letters);
//           }
//
//           if(letters === this.target.length) {
//             for(i = 0; i < letters; i++) {
//               if(this.nine[i] != this.target[i]) {
//                 this.nine = this.setCharAt(this.nine, i, this.dictionary[this.ran()]);
//               }
//             }
//           }
//
//           if (this.nine === this.target) {
//             return this.xs.unsubscribe();
//           }
//         });
//
//   }
//
//    setCharAt(str,index,chr) {
//     if(index > str.length-1) return str;
//     return str.substr(0,index) + chr + str.substr(index+1);
// }
//
//   ran() {
//    return Math.floor(Math.random() * this.dictionary.length)
//   }
//
//   ranString(amt) {
//     let s = '';
//     for(var i = 0; i < amt; i++) {
//       s += this.dictionary[this.ran()];
//     }
//     return s;
//   }
//
//       ngOnInit() {
//           this.timerSubscription = Observable.timer(0, this.interval)
//               .subscribe(() => {
//                   this.delay -= this.interval;
//                   if (this.delay <= 0) {
//                       this.decrypt();
//                       return this.timerSubscription.unsubscribe();
//                   }
//               });
//       }
//
//       ngOnDestroy() {
//           if (this.timerSubscription) { this.timerSubscription.unsubscribe(); }
//       }
// }
