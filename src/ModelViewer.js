import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const ModelViewer = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Inicjalizacja sceny, kamery i renderera Three.js
    const container = containerRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Dodanie światła do sceny
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    // Dodanie kontroli obrotu modelu
    const controls = new OrbitControls(camera, renderer.domElement);

    // Wczytanie modelu 3D
    const loader = new GLTFLoader();
    loader.load('/model.glb', (gltf) => {
      scene.add(gltf.scene);
    });

    // Animacje
    const animate = () => {
      requestAnimationFrame(animate);
      // Dodaj tutaj kod animacji, np. obroty i przemieszczanie kamery
      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    // Czyszczenie zasobów przy wyłączaniu komponentu
    return () => {
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} style={{ width: '100%', height: '500px' }} />;
};

export default ModelViewer;
