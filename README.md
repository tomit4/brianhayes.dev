<div align="center">
  <img alt="Logo" src="https://raw.githubusercontent.com/tomit4/brianhayes.dev/main/dist/assets/images/readme.png"/>
</div>

<p align="center">
This repository contains the source code for the V3 iteration of my
blog/website,
<a href="https://brianhayes.dev">brianhayes.dev</a>.
</p>

<p align="center">
This website has had two previous iterations, the source code for the first iteration can be found <a aria-label="navigation" target="_blank" rel="noopener noreferrer" role="link" href="https://github.com/tomit4/leafbytes">here</a>. The second iteration's source code can be found at <a aria-label="navigation" target="_blank" rel="noopener noreferrer" role="link" href="https://github.com/tomit4/leafbytes_vue">here</a>.
</p>

### Preamble

The previous iterations of this blog used more out of the box tools like Vue3/Vite and Netlify for the second version, and Github Pages for the first version. With this version I decided to use a more hands on approach and hand rolled a simple website while teaching myself a few more tools. While technically this blog is written in pure HTML, CSS, and Javascript, the tooling behind how to quickly write a blog post and get it into production while still being a hand rolled solution was an interesting challenge.

To give you a general idea of what I mean, consider that this site utilizes two cli tools called from a bash script during development, that of the pug-cli and also the live-server cli. To minify files, the cli tools html-minifier, uglifycss, and uglifyjs are all utilized in a bash script. Optimizing images for web page load speed times utilize the imgmagick and gifsicle clis. NGINX also serves the files within a docker container, optimizing the images and font families using the native gzip module. This is then routed through a docker container and forwarded to another NGINX server running on a Linode/Akamai Cloud Instance.

Even the rss feed is generated using the rsspls and xmlstarlet cli tools within a bash script.

Why do it this way? ¯\_(ツ)\_/¯

In all honesty, I just like hand rolling solutions whenever I can and have the time. Additionally I'm still relatively new to web development and wanted to get back to basics on the front end while learning a bit about NGINX, docker, and how to utilize bash to automate some of the development process.

### Installation

To install this repo and utilize it for your own blog writing needs is open to you, but I'll warn that it is very personalized to my workflow. Firstly you'll simply need to clone this repository:

```
git clone https://github.com/tomit4/brianhayes.dev
```

I have NOT included an install script due to the amount of cli tools necessary to truly develop with this application, here is a list of all non-native cli tools utilized in this application:

```
pug-cli
live-server
docker
docker-compose
nginx (technically you won't need this until production, but a local version is good to run for testing purposes)
html-minifier
uglifycss
uglifyjs
pandoc
html2pug
rsspls
xmlstarlet
imgmagick
gifsicle
xclip
```

Once all these are installed (or at least pug-cli and live-server), you can spin up the dev server by running within the root of the project:

```
./start
```

This will open up your browser and you'll be navigated to a port on your localhost (usually 8080).

### Staging A New Blog Post

To get a basic blog template up and running, navigate to the templates folder. Here you'll find a template.pug file and also a test.txt file. An additional readme.md is also located there for quick reference on how to utilize the scripts there.

**Download Intro Image**

Generally speaking, you'll want to pull in your intro_image (first image of the blog) from a website like wikimedia commons or upsplash (all pics on my blog are from wikimedia commons at the time of this writing). Make sure to title the downloaded image something related to your blog post and simply leave it in this directory for now.

**Generate Template Pug File**

Copy the test.txt file to an article_name.txt file where article_name is obviously the title of your article(convention is to use underscores instead of spaces or dashes). Fill out the fields there to the best of your ability and run the genpug script with your article_name.txt file as its only argument:

```
./genpug article_name.txt
```

This will generate an article_name.pug file which will have the basic format for your blog post ready to go.

**Stage Files**

Next invoke the stage script with two arguments, one is your newly minted pug file and the other is your intro image file:

```
./stage article_name.pug intro_image.jpg
```

This will move the new pug template file to the src/blog directory as well as use imagemagick to create three different formats of the image file for use in the picture/srcset tags at the intro of the article. It will also place these files in the dist/assets/intro_images directory.

### Staging A New Blog Post

Once you have staged your template blog post, go ahead and head to the root directory of the project, and invoke start again so the pug transpiler will render your new template post and present it to you via live-server:

```
./start
```

You can now use your text editor to navigate to your article_name.pug in src/blog/ And start to edit your blog in real time (save to update browser refresh).

**Tips For Future Me**

Most of the blog can be written using the h2 tag and p tag respectively. Inline links I have outsourced mainly to espanso using:

```
;href
renders:
<a aria-label="" target="_blank" rel="noopener noreferrer" role="link" href=""></a>
```

Same with figure/img/figcaption:

```
;fig
renders:
figure
                    img.img-image(src="../assets/images/screenshots/default.webp" alt="" title="" cite="" loading="lazy")
                figcaption An Screenshot Image Caption
```

The hardest part is writing codeblocks, which utilizes ASCII characters within pre and code tags. For this I'll simply recommend writing extensive code blocks in markdown and then translating them by hand using [this handy reference from w3schools](https://www.w3schools.com/charsets/ref_html_ascii.asp).

**UPDATE ON CODE SNIPPETS**

I have created a script that will generate pug code blocks that you can simply drop into the pug blog. Located in the snippet directory, there is a file called snippets.md as well as a snippets shell script. Write your markdown code snippet inbetween the triple backticks and then save it. Run the snippet script and your clipboard will now have the pug equivalent.

```
./snippet
```

In order to accomplish this I utilized three other cli tools (pandoc, html2pug, and xclip). xclip is mainly for quickly grabbing the code and technically isn't necessary as the output is in snippet.pug, but it helps when trying to write code blocks on the fly.

Once done you're ready to push to production, just make sure to minify your files first from the root directory:

```
./minify
```

### NGINX

A dockerized version of NGINX forwards a port of this project out to what is expected to be another NGINX server running natively on a Cloud Server. SSH into your cloud server where you'll be expected to have NGINX, docker, and docker-compose installed. Configuring the cloud instance of NGINX is somewhat extensive, sufficient to say you'll want to put most of the logic in /etc/nginx/sites-available. Make sure to set up the your domains via your Cloud Server and also your Domain Name Registrar as well as enacting https via certbot. Once that is set up, you can then port forward the docker container to the NGINX server. Not the easiest set up for something like this I know, but it is light weight and doesn't rely on many 3rd party apps (lots of infrastructure and cli tools though...).

After writing a new blog post navigate to the directory where you'd like to clone the repo and clone your repo here:

```
git clone https://github.com/my_user_name/my_version_of_brianhayes.dev
```

Within this repo you'll have a .env_sample file. Copy this file and provide the ports that docker will both forward to NGINX as well as listen to inside the server (PORT=NGINX_ON_CLOUD_PORT, DOCKERPORT=PORT_WITHIN_DOCKER). Within the config directory, you'll find an nginx_example.conf file. Copy this as a nginx.conf file and replace the user field with the user with access to the blog within the docker container, as well as write the root directory of where the application lives (dist). You'll also want to input under the listen field the DOCKERPORT port number you inputted into your .env file.

Once this is established, you can spin up this docker using my bash script dockerify:

```
./dockerify
```

This calls a separate Dockerfile and also spins up the docker container as well.

If you already configured your NGINX on the Cloud Server, you can simply restart nginx after this:

```
systemctl restart nginx
```

Unless you don't use systemd, then just use whatever init system you'd like...

If you have just made changes and pulled them in from your local machien into the cloud instance, there are a lot of commands to type, but it's not too difficult to understand what is going on, simply git pull in the changes, docker ls both your container and image, docker container rm container and docker image rm image, run the dockerify script, and then systemctl restart nginx again (yeah, why didn't I just clone in /var/www/html/ and call it day...).

### Generating the RSS feed

Once the new blog post is up live and running on the internet, you can use my genrss script inn the rss directory to generate a new feed.rss.

First edit the ~/.config/rsspls/feeds.toml file (a sample config is provided in the rss directory as well).

Firstly though, make sure that this output field has the proper location:

```
[rsspls]
output = "BLOG_DIRECTORY/dist/assets/"
```

Then add your new blog post at the top:

```
[[feed]]
title = "brianhayes.dev"
filename = "feed.rss"
[feed.config]
url = "https://brianhayes.dev/blog/the_readme"
item = ".container"
heading = "header"
link = "a"
summary = ".demo-button"
```

Rename the last blog post at the top in the filename field as something else, but ALWAYS HAVE THE FIRST filename field read as "feed.rss". This has to do with the genrss script I wrote referencing this specifically.

Finally run this genrss script:

```
./genrss
```

This will automatically regenerate all rss from your website and transpile it all down into a single feed.rss file, which is then placed in your dist/assets/ directory.

From there you can then commit this back up to git, and pull it on your production server, restart the docker as specified above and restart nginx. You now have an updated rss feed!

### Are You Insane!! Why not use a CMS?

The short answer is yes, I am a bit ...uhh, quirky when it comes to my choices of certain software and workflow. In this particular case, I wanted a very minimalist blog much like the noscript front end for medium, [Scribe](https://scribe.rip/).

I also wanted to learn the basics of NGINX, Docker, and already had purchased a Nanode from Linode/Akamai for hosting via a VPS. At this point I had already learned how to host a basic static site on Github and Netlify with the previous iterations of this website, and wanted to see what I could accomplish with a more hands on approach. While I enjoyed what was available via Hashnode, and have heard amazing things about WordPress, Hugo, and others, what I learned from building this site from scratch is, to me, invaluable.

## Tooling :wrench:

-   [pug-cli](https://github.com/pugjs/pug-cli)
-   [live-server](https://github.com/tapio/live-server)
-   [docker](https://www.docker.com/)
-   [docker-compose](https://docs.docker.com/compose/)
-   [nginx](https://nginx.org/en/)
-   [html-minifier](https://www.npmjs.com/package/html-minifier)
-   [uglifycss](https://www.npmjs.com/package/uglifycss)
-   [uglifyjs](https://www.npmjs.com/package/uglify-js)
-   [pandoc](https://pandoc.org/getting-started.html)
-   [html2pug](https://www.npmjs.com/package/html2pug)
-   [rsspls](https://github.com/wezm/rsspls)
-   [xmlstarlet](https://github.com/fishjam/xmlstarlet)
-   [imgmagick](https://imagemagick.org/)
-   [gifsicle](https://github.com/kohler/gifsicle)
-   [xclip](https://opensource.com/article/19/7/xclip)

**TODO:**

-   [ ] Implement Pre Commit Git Hook for minify script
-   [ ] Recreate dockerify script to instead use docker-compose

**Blog Post Ideas (not a preview)**

-   [ ] OSS Licensing For Beginners
-   [ ] HTML (The Web's Skeleton)
-   [ ] CSS (The Web's Makeup)
-   [ ] Javascript (The Web's Muscles)
-   [ ] Javascript Frameworks(The Modern Web Dev)
-   [ ] NodeJS, Journey Into The Backend
-   [ ] Express, HapiJS, and Fastify Frameworks
-   [ ] TypeScript VS JSDox VS Joi Type (Type Validation)
-   [ ] NoMongo (The Argument For SQLite, MariaDB, and PostgreSQL)
-   [ ] Why Use KnexJS (Not Quite an ORM)
-   [ ] When to Web Scrape
-   [ ] Bash Scripting for Web Dev
-   [ ] Respecting User Privacy
-   [ ] Reflecting On The User Experience
-   [ ] When to Build From The Ground Up
-   [ ] Neovim Extensions I Use
-   [ ] Browsers and Browser Extensions
-   [ ] DuckDuckGo Lite(The Search Engine I Use)
-   [ ] VPS, VPNs, and VMs (Virtual Everything)
-   [ ] Digital Minimalism When You Work In Tech
-   [ ] Don't Subscribe And Don't Follow (RSS feeds)
-   [ ] Rethinking Social Media and The Fediverse
-   [ ] A Not Too Brief History of Linux, GNU, and BSD (likely, parts 1, 2, and 3)
-   [ ] The Probability of Anonymity (Is it still possible to stay private online?)
