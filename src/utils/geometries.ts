import * as THREE from 'three'

export function generateGroundGeometry(size: number) {
  return new THREE.PlaneGeometry((size * 4) / 3, size)
}

export function generateBallGeometry(radius: number) {
  return new THREE.SphereGeometry(radius, radius * 20, radius * 10)
}
export function generateSkyGeometry(size: number) {
  return new THREE.PlaneGeometry(size, size)
}
