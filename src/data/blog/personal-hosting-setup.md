---
title: Personal hosting setup
created: '2024-07-10T07:11:37Z'
summary: I simplified the hosting of my personal projects using an automated NGINX reverse proxy and Docker.
tags: ['Docker', 'Self-hosting', 'Oracle', "NGINX", "Cloudflare"]
---

## Introduction

As a prolific builder, I've created numerous projects that often remain unseen. A couple of years ago, I decided it was time to showcase my work to the public by hosting some of these projects online. However, with limited funds available, I needed a cost-effective solution that wouldn't require investing in an expensive dedicated server or a high-powered VPS. The setup I am going to describe below helped me run various projects, including Node.js and Rust APIs, simple frontends, and even some modded Minecraft servers for a couple of my friends.

## VPS Search

Fortunately, Oracle Cloud was offering an appealing free tier plan at the time, featuring their new ARM-based CPUs. This package included 4 vCPU cores, 24 GB of RAM, and 200 GB of storage space—more than sufficient for my low-traffic projects. This generous allocation allowed me to launch my portfolio without incurring any costs, making it an ideal starting point for sharing my creations with the world.

## Discovering nginx-proxy

Given that I was already quite familiar with Docker and docker-compose, containerizing my projects was straightforward. However, the real challenge lay in managing a Nginx reverse proxy and allocating subdomains to each project. Manually configuring this setup can be time-consuming and error-prone, so I decided to find an automated solution.

My search led me to nginx-proxy, an ingenious tool that automates Nginx proxy configuration for Docker containers using docker-gen. This project, initiated by [Jason Wilder](https://github.com/jwilder) in 2014, was born out of the need for a more efficient approach to container management. Wilder detailed his rationale for developing [nginx-proxy](https://github.com/nginx-proxy/nginx-proxy) and [docker-gen](https://github.com/nginx-proxy/docker-gen) in a [blog post](http://jasonwilder.com/blog/2014/03/25/automated-nginx-reverse-proxy-for-docker/) published that same year, highlighting the common pain points it aims to address. Another cool tool is [acme-companion](https://github.com/nginx-proxy/acme-companion/tree/main). This is a companion container that runs alongside nginx-proxy and automates ACME SSL certificate generation for running containers.


## Setup and workflow

The configuration turned out to be quite straightforward and without any difficulties, owing to the comprehensive instructions provided in the acme-companions readme on GitHub. There were only 2 initial setup steps. First, the nginx-proxy container needed to be started with the following command:

```bash
$ docker run --detach \
    --name nginx-proxy \
    --publish 80:80 \
    --publish 443:443 \
    --volume certs:/etc/nginx/certs \
    --volume html:/usr/share/nginx/html \
    --volume /var/run/docker.sock:/tmp/docker.sock:ro \
    nginxproxy/nginx-proxy
```

Next, the acme-companion container was started with the following command:

```bash
$ docker run --detach \
    --name nginx-proxy-acme \
    --volumes-from nginx-proxy \
    --volume /var/run/docker.sock:/var/run/docker.sock:ro \
    --volume acme:/etc/acme.sh \
    --env "DEFAULT_EMAIL=mail@yourdomain.tld" \
    nginxproxy/acme-companion
```

Yes, it's quite good. Here is a slightly refined version for clarity:

The email address is used to notify users about expiring certificates. The acme-companion container automatically generates SSL certificates for any container that has both the `VIRTUAL_HOST` and `LETSENCRYPT_HOST` environment variables set. These variables should be set to the domain name you want the project to be accessed by. For instance, if you want to use `api.yourdomain.tld` for your API, you should set the `VIRTUAL_HOST` and `LETSENCRYPT_HOST` environment variables to `api.yourdomain.tld`.

For easier management of all the run commands, I have created a private repo where I host all the setup scripts for my projects. A sample script for running one of my Rust projects, compiled to Wasm:

![Docker run script](/images/acme-exmaple.png)

Furthermore, in addition to the two environment variables previously mentioned, I have set the `VIRTUAL_PORT` environment variable to the port number that the project exposes in the Docker container, in this instance, port 80.

## Conclusion

This setup has been a game-changer for me. It allows me to host multiple projects on a single VPS without manually configuring Nginx for each one. The automated SSL certificate generation is a huge time-saver, eliminating the need to worry about renewing certificates manually. I highly recommend this setup to anyone looking to simplify their hosting workflow and focus more on building great projects instead of managing server configurations. While this setup may not be suitable for production-grade applications or multi-server environments, it has been a fantastic solution for personal projects and small-scale applications.
