---
title: Boids 2D
created: '2023-03-18T08:00:00.000Z'
summary: "An implementation of Craig Reynold's Boids program to simulate the flocking behavior of birds. Also includes Gary Flake's fourth rule."
tags: ['Rust', 'Octree', 'Bevy']
ogImage: 'local:boids2d.png'
website: 'https://ac.skippy-ai.com/'
repository: 'https://github.com/martines3000/autonomous-characters/tree/master'
---

# Boids 2D

An implementation of [Craig Reynold's Boids](https://www.red3d.com/cwr/boids/) program to simulate the flocking behavior of birds. Also includes Gary Flake's fourth rule.

## Boids Simulation

The Boids simulation typically models the behavior of flocks of birds, schools of fish, or herds of animals. The simulation is based on three main forces that influence the movement of the individual agents, or "boids", within the group:

1. **Separation force**: This force is responsible for maintaining a minimum distance between each boid and its nearby neighbors, preventing overcrowding and collisions.

2. **Alignment force**: This force aligns the velocity of each boid with that of its neighbors, causing the group to move in the same direction.

3. **Cohesion force**: This force pulls each boid towards the center of mass of its neighbors, encouraging the group to stay together and avoid separation.

By adjusting the strengths of these three forces, the simulation can reproduce a variety of collective behaviors observed in nature, such as flocking, schooling, and herding.

## Project info

The project was developed within the timeframe of a university class assignment over a span of just a few days. It was implemented in Rust, utilizing the [Bevy](https://bevyengine.org/) game engine.

The project has undergone further development to include new features. One of these features involves the implementation of multithreading using the [Rayon](https://github.com/rayon-rs/rayon) library. Additionally, the program has been updated with the incorporation of [Trunk](https://trunkrs.dev/), which allows for the building and bundling of the application as a Wasm web app that can be conveniently served using Docker.

**Possible improvements:**

- Add [Egui](https://github.com/emilk/egui) menu for changing the strength of the different forces
- Implement the [Octree](https://en.wikipedia.org/wiki/Octree) data structure to improve performance

The link to the Demo is at the top of the page. Hold `space` to spawn more boids or hold the `left mouse button` to make the boids follow it.

![Screenshot of 2D simulation](/images/boids2d.png)
