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

**NGINX config info**

-   [x] [Remove .html extension](https://stackoverflow.com/questions/38228393/nginx-remove-html-extension)
-   [ ] [Configure use of .gz files for fonts](https://blog.bigdinosaur.org/gzipping-font-face-with-nginx/)
-   [ ] Optional, you may need to [allow CORS](https://serverfault.com/questions/186965/how-can-i-make-nginx-support-font-face-formats-and-allow-access-control-allow-o)

**Docker with NGINX**

-   [ ] Read [NGINX_with_Docker_and_NodJS_A_Beginners_Guide](https://scribe.rip/nginx-with-docker-and-node-js-a-beginners-guide-434fe1216b6b)

**Todo**

-   [ ] Learn how to dockerize a basic nginx server that serves an index.html with routing to an about.html
-   [ ] Load that dockerized container onto a Linode nanode and serve it up to the internet
-   [ ] Use this new knowledge to serve a dockerized version of this basic scaffolding for a blog on your local machine instead of using live-server
-   [ ] Nginx should have the ability to serve up compressed .gz versions of your downloaded fonts, so do that using the @font-face format('gz') property instead of the 'truetype' you have now. Technically this is negigble now, but again, this is for learning purposes.
-   [x] Pull your old blog articles from your current more heavy front end oriented blog onto your new minimalist blog so you have some genuine text to play with.
-   [x] Implement dark mode toggle in JS using dark reader as a template like you did using darkreader API on your original blog. This should be far easier than your original implementation as you have pretty much just black and white to toggle here.
-   [ ] Generate an RSS feed for this (I know, ugh...)
-   [ ] Consider how to possibly automate RSS generation using bash, node, or python and implement said strategy if one is found
-   [ ] Consider SEO strategies
-   [x] Write a bash script that will take an large image file, copy it three times over, and convert each to width 700px, 500px, and 300px, and rename each as image_desktop.webp, image_tablet.webp, and image_mobile.webp
-   [ ] Write custom 4** and 5** error pages and redirect nginx to those instead of defaults
-   [ ] Write a script that minifies the css, js, and compresses them to gz (once nginx can handle compressed files), and uses sed to change the /dist/\*.html files to read those minified files instead
