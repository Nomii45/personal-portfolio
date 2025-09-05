// import React, { useEffect, useState, useRef } from 'react';
// import '../styles/Cursor.css';

// function CustomCursor() {
//   const cursorRef = useRef(null);
//   const [isVisible, setIsVisible] = useState(window.innerWidth > 600);

//   useEffect(() => {
//     const cursor = cursorRef.current;
//     // Track the real cursor
//     let mouseX = 0, mouseY = 0;
//     //  Track The Animated Circle
//     let currentX = 0, currentY = 0;

//     const updatePosition = () => {
//       if (cursor && isVisible) {
//         const speed = 0.1;
//         currentX += (mouseX - currentX) * speed;
//         currentY += (mouseY - currentY) * speed;
//         cursor.style.transform = `translate(${currentX}px, ${currentY}px) translate(-50%, -50%)`;
//       }
//       requestAnimationFrame(updatePosition);
//     };

//     const handleMouseMove = (e) => {
//       mouseX = e.clientX;
//       mouseY = e.clientY;
//     };

//     const handleResize = () => {
//       setIsVisible(window.innerWidth > 600);
//     };

//     document.addEventListener('mousemove', handleMouseMove);
//     window.addEventListener('resize', handleResize);
//     updatePosition();

//     return () => {
//       document.removeEventListener('mousemove', handleMouseMove);
//       window.removeEventListener('resize', handleResize);
//     };
//   }, [isVisible]);

//   return isVisible ? <div className="custom-cursor" ref={cursorRef}></div> : null;
// }

// export default CustomCursor;









import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { gsap } from "gsap";
import beeModel from "../assets/demon_bee_full_texture.glb";

const CustomCursorBee = () => {
  const containerRef = useRef(null);
  const beeRef = useRef(null);
  const mixerRef = useRef(null);
  const sceneRef = useRef(new THREE.Scene());
  const cameraRef = useRef();
  const rendererRef = useRef();
  const isDragging = useRef(false);
  const previousMouseX = useRef(0);

  useEffect(() => {
    // only run Three.js on md and up
    if (window.innerWidth < 768) return;

    // camera
    const camera = new THREE.PerspectiveCamera(
      10,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 13;
    cameraRef.current = camera;

    // scene & lights
    const scene = sceneRef.current;
    scene.add(new THREE.AmbientLight(0xffffff, 1.3));
    const topLight = new THREE.DirectionalLight(0xffffff, 1);
    topLight.position.set(500, 500, 500);
    scene.add(topLight);

    // renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    rendererRef.current = renderer;
    containerRef.current.appendChild(renderer.domElement);

    // load bee model
    const loader = new GLTFLoader();
    loader.load(
      beeModel,
      (gltf) => {
        const bee = gltf.scene;
        bee.scale.set(0.3, 0.3, 0.3);
        // put it far away until mousemove
        bee.position.set(9999, 9999, 9999);
        bee.rotation.y = 5.34;
        beeRef.current = bee;
        scene.add(bee);

        if (gltf.animations.length > 0) {
          mixerRef.current = new THREE.AnimationMixer(bee);
          mixerRef.current.clipAction(gltf.animations[0]).play();
        }
      },
      undefined,
      (error) => console.error(error)
    );

    // animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
      if (mixerRef.current) mixerRef.current.update(0.02);
    };
    animate();

    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    // cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      if (beeRef.current) scene.remove(beeRef.current);
      renderer.dispose();
    };
  }, []);

  // follow mouse like cursor (no scroll offset)
  useEffect(() => {
    if (window.innerWidth < 768) return;
    const handleMouseMove = (e) => {
      if (beeRef.current) {
        const x = (e.clientX / window.innerWidth) * 2 - 1;
        const y = -(e.clientY / window.innerHeight) * 2 + 1;

        gsap.to(beeRef.current.position, {
          x: x * 3,
          y: y * 3,
          z: 0,
          duration: 0.2,
          ease: "power2.out",
        });

        gsap.to(beeRef.current.rotation, {
          z: -x * 0.3,
          x: y * 0.3,
          duration: 0.2,
          ease: "power2.out",
        });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    if (window.innerWidth < 768) return;
    const handleClick = () => {
      if (beeRef.current) {
        gsap.to(beeRef.current.rotation, {
          x: beeRef.current.rotation.x + 0.3,
          duration: 0.15,
          yoyo: true,
          repeat: 3,
          ease: "power1.inOut",
        });
      }
    };
    document.addEventListener("click", handleClick, { passive: true });
    return () => document.removeEventListener("click", handleClick);
  }, []);

  // drag rotates only, position stays
  useEffect(() => {
    if (window.innerWidth < 768) return;
    const handleMouseDown = (e) => {
      isDragging.current = true;
      previousMouseX.current = e.clientX;
    };
    const handleMouseUp = () => {
      isDragging.current = false;
    };
    const handleMouseMove = (e) => {
      if (isDragging.current && beeRef.current) {
        const deltaX = e.clientX - previousMouseX.current;
        previousMouseX.current = e.clientX;
        beeRef.current.rotation.y += deltaX * 0.01;
      }
    };
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="hidden md:block fixed inset-0 z-[9999] pointer-events-none"
    />
  );
};

export default CustomCursorBee;
