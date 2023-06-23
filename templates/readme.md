This directory is meant as an initial quick way of generating an article for this blog using some simple scripts to expedite the process a bit faster.
Firstly, you'll need to find an image for the intro. Once downloaded to this directory, rename it if necessary.

Secondly, you'll need to copy the test.txt file and name it whatever article title you want:

```
cp test.txt my_new_article.txt
```

The contents of this file hold simple templates that use the template.pug file to generate a new pug file with these fields already filled in. This saves some time by not having to navigate through the default.pug file to find the field. Just fill out the fields after the colon.

Once filled out run the genpug script, which will generate a .pug file from the .txt file:

```
./genpug my_new_article.txt
```

If all is to your liking, run the stage script to generate the appropriate intro images at scale and put them in the intro_images folder in assets. It will also put the new .pug file in the src/blog directory. Once you navigate to the project root directory and run the start script from there, the pug-cli will generate the new blog and you can navigate to it at:

```
localhost:my_new_article.html
```
