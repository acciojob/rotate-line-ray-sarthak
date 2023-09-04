//your JS code here. If required.
  let angle = 0; // Initial angle in degrees

        function rotateLine() {
            angle += 2; // Increment angle by 2 degrees
            document.getElementById("line").style.transform = ` rotate(${angle}deg)`;
        }
 setInterval(rotateLine, 20);

