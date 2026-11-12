
import * as THREE from 'three';

// Bersihkan halaman
document.body.innerHTML = '';
document.body.style.margin = '0';
document.body.style.overflow = 'hidden';
document.body.style.background = '#18212b';

// Membuat dunia 3D
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x18212b);

// Kamera
const camera = new THREE.PerspectiveCamera(
  60,
    window.innerWidth / window.innerHeight,
      0.1,
        100
        );
        camera.position.set(0, 0, 5);

        // Renderer
        const renderer = new THREE.WebGLRenderer({
          antialias: true
          });
          renderer.setSize(window.innerWidth, window.innerHeight);
          renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
          document.body.appendChild(renderer.domElement);

          // Cahaya
          const ambient = new THREE.AmbientLight(0xffffff, 1.5);
          scene.add(ambient);

          const light = new THREE.DirectionalLight(0xffffff, 3);
          light.position.set(3, 4, 5);
          scene.add(light);

          // Karakter percobaan berbentuk bola clay kuning
          const geometry = new THREE.SphereGeometry(1, 48, 48);

          const material = new THREE.MeshStandardMaterial({
            color: 0xffcc33,
              roughness: 0.9
              });

              const character = new THREE.Mesh(geometry, material);
              scene.add(character);

              // Animasi
              function animate() {
                requestAnimationFrame(animate);

                  character.rotation.y += 0.012;
                    character.rotation.x += 0.004;

                      renderer.render(scene, camera);
                      }

                      animate();

                      // Menyesuaikan ukuran layar
                      window.addEventListener('resize', () => {
                        camera.aspect = window.innerWidth / window.innerHeight;
                          camera.updateProjectionMatrix();
                            renderer.setSize(window.innerWidth, window.innerHeight);
                            });
                            
