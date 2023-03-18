---
title: Boids 3D
created: '2023-03-18T08:00:00.000Z'
summary: "A 3D implementation of Craig Reynold's Boids program to simulate the flocking behavior of birds."
tags: ['Rust', 'Multithreading', 'Bevy']
ogImage: 'local:boids3d.png'
website: 'https://ac3d.skippy-ai.com/'
repository: 'https://github.com/martines3000/autonomous-characters-3d/tree/master'
---

# Boids 3D

A 3D implementation of [Craig Reynold's Boids](https://www.red3d.com/cwr/boids/) program to simulate the flocking behavior of birds. It is an improved version of my [2D implementation](https://portfolio.skippy-ai.com/projects/masca).

## Project info

The project was implemented in Rust, utilizing the [Bevy](https://bevyengine.org/) game engine. The Nalgebra library was used for linear algebra and the [Rayon](https://github.com/rayon-rs/rayon) library for multithreading. Additionally, the program has been updated with the incorporation of [Trunk](https://trunkrs.dev/), which allows for the building and bundling of the application as a Wasm web app that can be conveniently served using Docker.

Both the Naive and the Octree implementations include multithreading. Additionally, the application features an Egui menu that allows users to modify the simulation's parameters. The Octree is implemented as an [arena-allocated](https://github.com/fitzgen/generational-arena) tree. The Octree is rebuilt every time the function 'flock' is called, which updates the speed of the boids.

**Possible improvements:**

- Instead of rebuilding the Octree from scratch every time, the Octree would be updated in each frame.
- Faster rendering speed (rendering has issues at higher number of boids)

The link to the Demo is at the top of the page.

**Controls:**

- You can use the `scrool wheel` to zoom in/out
- `Ctrl + Mouse` to turn around
- Select the red ball and the boids will follow it
- Move the selected ball with: `wasd`, `shift` (down) and `space` (up)

![Screenshot of 2D simulation](/images/boids3d.png)
