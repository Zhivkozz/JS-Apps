
fetch("https://blog-apps-c12bf.firebaseio.com//posts/.json ")
.then(x=>x.json())
.then(
  console.log
)