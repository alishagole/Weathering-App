function add() {
  const value = 2 + 2;
  console.log(value);
  setTimeout(() => {
    console.log("timeout");
  }, 2000);
  console.log("done");
}

add()