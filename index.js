<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8">
    <title>Tour 360 - Gilliard</title>
    <script src="https://aframe.io/releases/1.5.0/aframe.min.js"></script>
  </head>
  <body>
    <a-scene>
      
      <a-assets>
        <img id="panorama" src="SUA_IMAGEM_360.jpg" crossorigin="anonymous">
      </a-assets>

      <a-sky src="#panorama" rotation="0 -90 0"></a-sky>

      <a-entity camera look-controls></a-entity>

    </a-scene>
  </body>
</html>