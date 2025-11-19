// GSAP -----------------------------------

gsap.registerPlugin(ScrollTrigger);

// fade setiap section
gsap.utils.toArray("section").forEach((sec) => {
  gsap.from(sec, {
    opacity: 0,
    y: 50,
    duration: 1.1,
    scrollTrigger: {
      trigger: sec,
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });
});

// THREE.JS -----------------------------------

const canvas = document.getElementById("three-bg");
const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  60,
  window.innerWidth / window.innerHeight,
  0.1,
  100
);
camera.position.z = 2;

// soft light ambient feel
const light = new THREE.PointLight(0xffaa55, 1.8);
light.position.set(0, 0, 2);
scene.add(light);

// floating sphere
const geo = new THREE.SphereGeometry(0.4, 32, 32);
const mat = new THREE.MeshStandardMaterial({
  color: 0xffddaa,
  roughness: 0.7,
  metalness: 0.1,
});
const sphere = new THREE.Mesh(geo, mat);
scene.add(sphere);

function animate() {
  requestAnimationFrame(animate);
  sphere.rotation.y += 0.005;
  sphere.rotation.x += 0.002;
  renderer.render(scene, camera);
}
animate();

window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});

