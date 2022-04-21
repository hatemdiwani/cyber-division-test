import './App.css';
import { useEffect, useState, useRef, useCallback } from 'react'
import Container from './components/ui/Container';
import Landing from './pages/Landing';
function App() {

  const ref = useRef(null)

  const draw = (height, width) => {


    var canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    var ctx = canvas.getContext('2d');
    var imgData = ctx.getImageData(0, 0, width, height);

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

    if (ref) {
      draw(ref.current.scrollHeight, ref.current.clientWidth)
    }

  }, [])






  return (
    <div  >

      <div style={{ position: 'relative' }}  >
        <div ref={ref} style={{ zIndex: 1, position: 'absolute' }} >
          <Landing />
        </div>
      </div>
    </div>

  );
}

export default App;
