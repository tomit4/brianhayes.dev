### brianhayes.dev

**PLEASE NOTE:**

:construction: This Repo is currently under heavy construction!

**Installation and Starting**

This blog is so simple, but it does require two dev dependencies which I simply installed globally. One is pug with its pug-cli, and the other is live-server (keep this in mind when settting up docker, you can't just install a node or nginx docker container, you'll likely need debian or ubuntu container):

```
npm install -g pug pug-cli live-server
```

For now, you can simply start the live-server version using the provided bash start script:

```
./start
```

**Introduction**

This repo contains the essential scaffolding for what will hopefully become my most basic blog site. Written using the pug templating language for faster development time, this blog's styling will be heavily inspired by [scribe](https://scribe.rip/), the minimalist, non-javascript, privacy respecting alternative to medium.

**The Plan**

While the implementation of this blog will be very bare bones, it is also meant to act as a teaching implementation for best practices on how to create a minimalist blog while also being independent of all blogging platforms. A small amount of javascript will be implemented for light/dark mode but I hope not to include much else. Right now the blog uses liveserver, but the big learning part will be more admin oriented, as I wish to use docker/nginx/linode to host the site rather than other more simple hosting services. This is meant to keep independence from these platforms and rely solely on linode for hosting.

**Todo**

-   [x] Learn how to dockerize a basic nginx server that serves an index.html
-   [x] Load that dockerized container onto a Linode nanode and serve it up to the internet
-   [x] Use this new knowledge to serve a dockerized version of this basic scaffolding for a blog on your local machine instead of using live-server
-   [x] Pull your old blog articles from your current more heavy front end oriented blog onto your new minimalist blog so you have some genuine text to play with.
-   [x] Implement dark mode toggle in JS using dark reader as a template like you did using darkreader API on your original blog. This should be far easier than your original implementation as you have pretty much just black and white to toggle here.
-   [x] Write a bash script that will take an large image file, copy it three times over, and convert each to width 700px, 500px, and 300px, and rename each as image_desktop.webp, image_tablet.webp, and image_mobile.webp
-   [x] Install docker on your linode ubuntu cloud server and get it up and running (on restart) using systemd
-   [x] Create a Dockerfile locally that will create a nginx container, copy all of dist directory and serve it, as well as add the nginx.conf file
-   [x] Run this Dockerfile on your linode server, serving it to a new port not in use and set it up via NameCheap (see old tutorial series you followed for citystats to do this)

**OF_NOTE(more todo...)**

Running this online and viewing it on mobile has shown some issues:

-   [x] Clicking on buttons causes bug where hover tooltips remain after click, try and remedy somehow
-   [x] Gifs take exorbitantly long to load, try and remove lazy loading at first, if this causes page speed load issues, look into gif optimization techniques, starting with gifsicle.
-   [ ] Add an up arrow to bring to beginning of article at bottom of every article/default.
-   [x] On Mobile only, intro screen gif is too low due to adjustments of menu bars on phones, adjust css accordingly (space svg and intro message a bit higher)

**Additionally:**

-   [ ] Generate an RSS feed for this (I know, ugh...)
-   [ ] Consider how to possibly automate RSS generation using bash, node, or python and implement said strategy if one is found
-   [ ] Write custom 4** and 5** error pages and redirect nginx to those instead of defaults
-   [x] Write a bash script that will convert markdown into pug (specifically noting how to accomplish code blogs)
