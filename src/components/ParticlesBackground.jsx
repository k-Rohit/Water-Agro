// // components/ParticlesBackground.jsx
// import { useEffect } from 'react';

// const ParticlesBackground = () => {
//   useEffect(() => {
//     if (window.innerWidth >= 1024) { // Only initialize on desktop
//       window.particlesJS("particles-js", {
//         particles: {
//           number: {
//             value: 115,
//             density: {
//               enable: true,
//               value_area: 800,
//             },
//           },
//           color: { value: "#000000" },
//           shape: {
//             type: "circle",
//             stroke: { width: 0, color: "#000000" },
//             polygon: { nb_sides: 5 },
//             image: { src: "img/github.svg", width: 100, height: 100 },
//           },
//           opacity: {
//             value: 0.5,
//             random: false,
//             anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
//           },
//           size: {
//             value: 8,
//             random: true,
//             anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
//           },
//           line_linked: {
//             enable: true,
//             distance: 150,
//             color: "#23160e",
//             opacity: 0.4,
//             width: 1,
//           },
//           move: {
//             enable: true,
//             speed: 6,
//             direction: "none",
//             random: false,
//             straight: false,
//             out_mode: "out",
//             bounce: false,
//             attract: { enable: false, rotateX: 600, rotateY: 1200 },
//           },
//         },
//         interactivity: {
//           detect_on: "canvas",
//           events: {
//             onhover: { enable: false, mode: "repulse" },
//             onclick: { enable: false, mode: "push" },
//             resize: true,
//           },
//           modes: {
//             grab: { distance: 400, line_linked: { opacity: 1 } },
//             bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
//             repulse: { distance: 200, duration: 0.4 },
//             push: { particles_nb: 4 },
//             remove: { particles_nb: 2 },
//           },
//         },
//         retina_detect: true,
//       });
//     }
//   }, []);

//   return (
//     <div
//       id="particles-js"
//       className="fixed top-0 left-0 w-full h-full -z-10 hidden lg:block"
//       style={{ backgroundColor: "#e9e8e4" }}
//     />
//   );
// };

// export default ParticlesBackground;


// components/ParticlesBackground.jsx
// import { useEffect } from 'react';
// import '../styles/components/ParticlesBackground.css'; // Import the external CSS file

// const ParticlesBackground = () => {
//   useEffect(() => {
//     if (window.innerWidth >= 1024) { // Only initialize on desktop
//       window.particlesJS("particles-js", {
//         particles: {
//           number: {
//             value: 115,
//             density: {
//               enable: true,
//               value_area: 800,
//             },
//           },
//           color: { value: "#000000" },
//           shape: {
//             type: "circle",
//             stroke: { width: 0, color: "#000000" },
//             polygon: { nb_sides: 5 },
//             image: { src: "img/github.svg", width: 100, height: 100 },
//           },
//           opacity: {
//             value: 0.5,
//             random: false,
//             anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
//           },
//           size: {
//             value: 8,
//             random: true,
//             anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
//           },
//           line_linked: {
//             enable: true,
//             distance: 150,
//             color: "#23160e",
//             opacity: 0.4,
//             width: 1,
//           },
//           move: {
//             enable: true,
//             speed: 6,
//             direction: "none",
//             random: false,
//             straight: false,
//             out_mode: "out",
//             bounce: false,
//             attract: { enable: false, rotateX: 600, rotateY: 1200 },
//           },
//         },
//         interactivity: {
//           detect_on: "canvas",
//           events: {
//             onhover: { enable: false, mode: "repulse" },
//             onclick: { enable: false, mode: "push" },
//             resize: true,
//           },
//           modes: {
//             grab: { distance: 400, line_linked: { opacity: 1 } },
//             bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
//             repulse: { distance: 200, duration: 0.4 },
//             push: { particles_nb: 4 },
//             remove: { particles_nb: 2 },
//           },
//         },
//         retina_detect: true,
//       });
//     }
//   }, []);

//   return <div id="particles-js" />;
// };

// export default ParticlesBackground;


// components/ParticlesBackground.jsx
// import React, { useCallback } from 'react';
// import { Particles } from '@tsparticles/react';
// import { loadSlim } from "@tsparticles/slim";
// import '../styles/components/ParticlesBackground.css';

// const ParticlesBackground = () => {
//   const particlesInit = useCallback(async (engine) => {
//     console.log("Initializing tsparticles");
//     await loadSlim(engine);
//   }, []);

//   const particlesLoaded = useCallback(async (container) => {
//     console.log("Particles loaded", container);
//   }, []);

//   return (
//       <Particles
//         id="tsparticles"
//         init={particlesInit}
//         loaded={particlesLoaded}
//         options={{
//           background: {
//             color: "#e9e8e4",
//           },
//           fullScreen: {
//             enable: false,
//           },
//           fpsLimit: 60,
//           particles: {
//             number: {
//               value: 115,
//               density: {
//                 enable: true,
//                 value_area: 800,
//               },
//             },
//             color: { value: "#000000" },
//             shape: {
//               type: "circle",
//               stroke: { width: 0, color: "#000000" },
//               polygon: { nb_sides: 5 },
//               image: { src: "img/github.svg", width: 100, height: 100 },
//             },
//             opacity: {
//               value: 0.5,
//               random: false,
//               anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
//             },
//             size: {
//               value: 8,
//               random: true,
//               anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
//             },
//             line_linked: {
//               enable: true,
//               distance: 150,
//               color: "#23160e",
//               opacity: 0.4,
//               width: 1,
//             },
//             move: {
//               enable: true,
//               speed: 6,
//               direction: "none",
//               random: false,
//               straight: false,
//               out_mode: "out",
//               bounce: false,
//               attract: { enable: false, rotateX: 600, rotateY: 1200 },
//             },
//           },
//           interactivity: {
//             detect_on: "canvas",
//             events: {
//               onhover: { enable: false, mode: "repulse" },
//               onclick: { enable: false, mode: "push" },
//               resize: true,
//             },
//             modes: {
//               grab: { distance: 400, line_linked: { opacity: 1 } },
//               bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
//               repulse: { distance: 200, duration: 0.4 },
//               push: { particles_nb: 4 },
//               remove: { particles_nb: 2 },
//             },
//           },
//           retina_detect: true,
//         }}
//       />
//   );
// };

// export default ParticlesBackground;

// components/ParticlesBackground.jsx
import React, { useEffect, useRef } from 'react';
import '../styles/components/ParticlesBackground.css';

const ParticlesBackground = () => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    // Only run on desktop
    if (window.innerWidth < 1024) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    // Set canvas size
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();
    
    // Particle settings
    const particlesArray = [];
    const numberOfParticles = 100;
    
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 5 + 1;
        // Increased speed factor from 1 to 3 for faster movement
        this.speedX = (Math.random() * 3- 1.5);
        this.speedY = (Math.random() * 3 - 1.5);
        this.color = '#000000';
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        // Bounce off edges
        if (this.x > canvas.width || this.x < 0) {
          this.speedX = -this.speedX;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.speedY = -this.speedY;
        }
      }
      
      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    // Create particles
    const init = () => {
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    };
    init();
    
    // Draw connections between particles
    const connect = () => {
      let opacity = 0.4;
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const distance = Math.sqrt(
            (particlesArray[a].x - particlesArray[b].x) ** 2 +
            (particlesArray[a].y - particlesArray[b].y) ** 2
          );
          
          if (distance < 150) { // Max connection distance
            opacity = 1 - (distance / 150);
            ctx.strokeStyle = `rgba(35, 22, 14, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    };
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particlesArray.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      connect();
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      id="particles-canvas"
      className="particles-background"
    />
  );
};

export default ParticlesBackground;