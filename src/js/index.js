/* eslint-disable */

import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  document.querySelector("#btn").addEventListener("click", function() {
    document.querySelector("#the-excuse").innerHTML = generateexcuse();
  });
  //   console.log("Hello Rigo from the console!");
};

let generateexcuse = function() {
  let who = ["My dog", "The baby", "Nosferatu", "Your momma"];
  let action = ["lost", "ruined", "took a poo on", "nuked"];
  let what = ["my laptop", "my phone", "my keys", "my sanity"];
  let when = ["yesterday", "just now", "before class", "an hour ago"];

  let whoIndex = Math.floor(Math.random() * 4);
  let actionIndex = Math.floor(Math.random() * 4);
  let whatIndex = Math.floor(Math.random() * 4);
  let whenIndex = Math.floor(Math.random() * 4);

  return (
    who[whoIndex] +
    " " +
    action[actionIndex] +
    " " +
    what[whatIndex] +
    " " +
    when[whenIndex]
  );
};
