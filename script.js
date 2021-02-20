
//Write a function that takes a credit card number and only displays the last four characters. The rest of the card number must be replaced by ****.
const hidecredit = () => {
    const value = document.getElementById("credit").value;
   
    if (value.length < 16 || value.length > 16) {
      alert("credit card number should be 0f 16 digits");
    } else {
      let rvalue = "";
      for (let i = 0; i < value.length; i++) {
        if (i < 12) {
          rvalue += "*";
        } else {
          rvalue += value[i];
        }
      }
      
      document.getElementById(
        "creditresult"
      ).innerText = `Your last digits are ${rvalue}`;
      document.getElementById("credit").value = "";
      return rvalue;
    }
  };

  //Create a function to return the amount of potatoes there are in a string.
  const countp = () => {
    const pstring = document.getElementById("pstring");
    
    if (pstring.value == "") {
      alert("Please enter a string");
    } else {
      const str = pstring.value;
      const rvalue = (str.match(/potato/g) || []).length;
     
      document.getElementById("presult").innerText = `
      no of potatoes = ${rvalue}
    `;
      pstring.value = "";
      return rvalue;
    }
  };

  //Create a function that takes a string and returns a string in which each character is repeated once.
  
  const doublechar = () => {
    const dstr = document.getElementById("dstr");
    if (dstr.value == "") {
      alert("Enter string please");
    } else {
      const result = double(dstr.value);
     
      document.getElementById("dresult").innerText = ` ${result}`;
      dstr.value = "";
    }
  };
  
  const double = (v) => {
    let rvalue = "";
    for (let i = 0; i < v.length; i++) {
      rvalue += v[i] + v[i];
    }
    return rvalue;
  };


 // Write a js program to input basic salary of an employee and calculate its Gross salary according to following:

  const csalary = () => {
    const sal = document.getElementById("s");
  
   
    if (sal.value == "") {
      alert("Please enter salary amount");
    } else {
      console.log(sal.value);
      const b = sal.value;
      let HRA;
      let DA;
      if (b <= 10000) {
        HRA = 20;
        DA = 80;
      } else if (b <= 20000) {
        HRA = 25;
        DA = 90;
      } else if (b > 20000) {
        HRA = 30;
        DA = 95;
      }
      console.log(b);
      const grosssalary =
        Number(b) + Number((b * HRA) / 100) + Number((b * DA) / 100);
  
      
      document.getElementById("sresult").innerText = `${grosssalary} `;
      sal.value = "";
    }
  };


  //Write a js program to input electricity unit charges and calculate total electricity bill according to the given condition:

  const bill = () => {
    const unit = document.getElementById("unit").value;
  
    if (unit == "" || unit < 0) {
      alert("unit shoubld be greater than zero");
    } else {
      let cost;
      if (unit > 0 && unit <= 50) {
        cost = 0.5;
      } else if (unit > 50 && unit <= 150) {
        cost = 0.75;
      } else if (unit > 150 && unit <= 250) {
        cost = 1.2;
      } else {
        cost = 1.5;
      }
      const bill = unit * cost;
      const sr = (bill * 20) / 100;
      const netbill = bill + sr;
  
      document.getElementById(
        "uresult"
      ).innerText = `Total unit =  ${unit} , cost per unit= ${cost} Rs
      bill =${bill} ,surcharge = ${sr} Rs and net bill = ${netbill} Rs
      `;
    }
  };

  //Find the sum of all the multiples of 3 or 5 below 1000.

  const multiples = () => {
    const limit = document.getElementById("limit").value;
    if (limit > 1000) {
      alert("limit should be smaller than 1000");
    } else {
      let multi = "";
      let sum = 0;
      for (let x = 0; x < limit; x++) {
        if (x % 3 === 0 || x % 5 === 0) {
          sum += x;
          if (x > 0) {
            multi += "*" + x;
          }
        }
      }
  
      document.getElementById("mresult").innerText = `${multi} and sum =${sum}  
      `;
    }
  };

  //Given an array, create a function that returns an object detailing how many times each element was repeated. Sort the object by value in descending order.

  const countr = () => {
    const ele = document.getElementById("re").value;
    if (ele > 0) {
      const array = [ele];
      const obj = {};
  
      for (let i = 0; i < ele; i++) {
        const e = i + 1;
        const v = prompt(`Enter number value for element ${e}`);
        array[i] = v;
        console.log(v);
  
        obj[v] = 0;
        
      }
  
      array.map((v, i) => {
        obj[v] = obj[v] + 1;
      });
      var myJSON = JSON.stringify(obj);
      document.getElementById("rresult").innerText =
        "array = " + array.toString() + "and obj =" + myJSON;
      document.getElementById("re").value = "";
      return obj;
    } else {
      alert("no of elements should be greater than zero");
    }
  };

  //Create a function that takes two strings as arguments and returns the number of times the first string (the single character) is found in the second string.

  const chcount = () => {
    const ch = document.getElementById("ch");
    const str = document.getElementById("stri");
    if (ch.value.length > 0 && ch.value.length < 2 && str.value.length > 0) {
      let c = 0;
      for (let i = 0; i < str.value.length; i++) {
        if (ch.value == str.value[i]) {
          c += 1;
        }
        console.log(ch.value, str.value[i]);
      }
      document.getElementById(
        "csresult"
      ).innerText = `${ch.value} and ${str.value} ${c}`;
    } else {
      alert(
        `no of characters shoulb be one not more than one
         and string should have atleast one cahracter`
      );
    }
  };