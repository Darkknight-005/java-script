// node js work for server application basically 
// its work by listening with eventlistener and emiting with
/*
here i am using 'click', 'blur', 'mouseout', 'mouseover', 'dblclick', 'focus'
with eventListener */
// using addEventListener
/*go to https://jsbin.com 

copy the code given below in html tab of the above site 
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body>

<button>double click</button>
  
  <script>
  const btn = document.querySelector('button');
  
  function change(number){
    return Math.floor(Math.random()*(number+1));
  }
    btn.addEventListener('focus',()=>{
      const rc = `rgb(${change(255)},${change(255)},${change(255)})`;
      document.body.style.backgroundColor = rc;
    })
    
    btn.addEventListener('blur',()=>{
      const rc = `rgb(${(255)},${(255)},${(255)})`;
      document.body.style.backgroundColor = rc
          })
    btn.addEventListener('click',()=>{
      const rc = `rgb(${change(255)},${change(255)},${change(255)})`;
      document.body.style.backgroundColor = rc;
    })
    btn.addEventListener('mouseover',()=>{
      const rc = `rgb(${change(255)},${change(255)},${change(255)})`;
      document.body.style.backgroundColor = rc;
    })
    btn.addEventListener('mouseout',()=>{
      const rc = `rgb(${(255)},${(255)},${(255)})`;
      document.body.style.backgroundColor = rc
          })
  </script>
 </body>
</html>
*/
// this is the way of adding multiple eevnt listener of a single event