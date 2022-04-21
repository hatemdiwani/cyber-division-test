import './App.css';
import { useEffect, useState, useRef, useCallback } from 'react'
import Container from './components/ui/Container';
import Landing from './pages/Landing';
function App() {



  const ref = useRef()


  const draw = (height, width) => {
    console.log(width, height);
    var canvas = document.getElementById('canvas');
    canvas.width = width;
    canvas.height = 3800;
    var ctx = canvas.getContext('2d');
    var imgData = ctx.getImageData(0, 0, canvas.width, height);

    function randomInt() {
      return Math.random()
    }

    for (var i = 0; i < imgData.data.length; i += 4) {

      if (randomInt() > 0.5) {

        imgData.data[i] = 2; // red
        imgData.data[i + 1] = 27; // green
        imgData.data[i + 2] = 4; // blue
        imgData.data[i + 3] = 255; // alpha
      } else {
        imgData.data[i] = 20; // red
        imgData.data[i + 1] = 43; // green
        imgData.data[i + 2] = 22; // blue
        imgData.data[i + 3] = 255; // alpha
      }
    }

    ctx.putImageData(imgData, 0, 0);
    document.body.appendChild(canvas);
  }




  useEffect(() => {
    console.log('window inner height: ', window.innerHeight);

    console.log('document Element client hieght: ', document.documentElement.clientHeight);

    console.log('document Element scroll hieght: ', document.documentElement.scrollHeight);

    console.log('document Element offset height: ', document.documentElement.offsetHeight);

    console.log('document element scrolltop: ', document.documentElement.scrollTop);

    console.log('window page Y Offset: ', window.pageYOffset);

    console.log('window document body offsetheight: ', window.document.body.offsetHeight);
    console.log(ref.current.clientHeight);
    console.log(ref.current.clientHeight);
    draw(document.documentElement.scrollHeight, document.documentElement.clientWidth)
  },[])





  return (
    <div style={{ position: 'relative' }} ref={ref}>
      <canvas id="canvas" style={{ position: 'absolute' }} >
      </canvas>
      <div style={{ zIndex: 1, position: 'absolute', width: '100%' ,  height:"100%" }} >
        <Landing />
      </div>
    </div>

  );
}

export default App;
