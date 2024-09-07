// let s ='34345'
// var myAtoi = function(s) {
//   return parseInt(s)
// };
// console.log(myAtoi(s))
const ran = Math.round(Math.random() * 10);
const win = document.getElementById("win-notice");
let balance = document.getElementById("balance");
let reset = document.getElementById("btn");
let lowBalance = document.getElementById("low-notice");
console.log(ran);
let amount = 100;

let getLocal = localStorage.getItem("amount");
if(parseInt(getLocal) > amount){
  localStorage.setItem("amount", amount);
  console.log('hello')
  getLocal = amount;
  balance.innerText = getLocal;
}
reset.addEventListener("click", function () {
  if (parseInt(getLocal) <= 25) {
    localStorage.setItem("amount", amount);
    getLocal = amount;
    balance.innerText = getLocal;
    win.innerText = "100$ added your account";
    lowBalance.innerText = "";
    
    setTimeout(() => {
      location.reload();
    }, 2000);
  }
  
  lowBalance.innerText = "";
});
if (getLocal === null) {
  localStorage.setItem("amount", amount);
  getLocal = amount;
  // balance.innerText = 100;
}
balance.innerText = getLocal;

document.getElementById("parent").addEventListener("click", function (e) {
  const parent = e.currentTarget; //
  const target = e.target; // The
  if (parent.contains(target) && target !== parent) {
    if (target.parentNode === parent) {
      const domInt = target.textContent;
      if (parseInt(getLocal) >= 25) {
        
        if (ran === parseInt(domInt)) {
          target.style.backgroundColor = "Green";

          amountWin(getLocal);
          balance.innerText = getLocal;
          win.innerText = "Congratulations you win 20$";

          setTimeout(() => {
            win.innerText = "";
          }, 2000);
          target.innerText = "Win 20$";
        } else {
          win.innerText = "";
          target.style.backgroundColor = "red";
          // console.log(getLocal);
          amountDr(getLocal);

          balance.innerText = getLocal;
          target.innerText = "Loss 25$";
          target.style.pointerEvents='none';
        }
      } else {
        lowBalance.innerText = "Insufficient Balance";
      }
    }
  }
});

function amountDr(number) {
  getLocal = number - 25;
  localStorage.setItem("amount", getLocal);
  // ran = Math.round(Math.random() * 10);
}
function amountWin(number) {
  getLocal = number + 30;
  localStorage.setItem("amount", getLocal);
  // ran = Math.round(Math.random() * 10);
}
