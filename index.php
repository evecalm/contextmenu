<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>menu</title>
  <link rel="stylesheet" href="menu.css">
  <style>
    #tt{
      width: 500px;
      height: 600px;
      border: 1px solid #ccc;
    }
  </style>
</head>
<body>
 <ul class="si-menu">
    <li class="si-item">hello</li>
   <li class="si-sep"></li>
    <li class="si-item">wordsdfsdfsdfsd</li>
 </ul>
 <div id="tt"></div>
  <script src="../search/jquer.min.js"></script>
  <script src="menu.js"></script>
  <script>
    $(document.body).menu([{item:'beijings',callback:function  () {
      alert('hello')
    }},{separator:true},{item:'not support'}]);
    $('#tt').on('click',function () {
      var a = '';
      console.log('dou');

    })
  </script>
</body>
</html>