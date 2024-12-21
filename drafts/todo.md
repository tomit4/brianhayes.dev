# Blog Post Ideas

1. All Together (Part 2)
   - Finish the blog post regarding All Together, completing the CRUD features
     using localstorage (see https://github.com/tomit4/app_todo)
   - Update
     [All Together Part 1 Conclusion](https://brianhayes.dev/blog/all_together#conclusion)
     to point to this article.

2. The Backend

   - Create a basic backend using NodeJS/ExpressJS that hooks up to an SQLite
     database to integrate into our frontend todo list built in All Together
     Parts 1 and 2.

3. All Together (Part 3)

   - Connect the backend and the frontend together finalizing the CRUD
     application.

4. Virtual Private Servers

   - Use your previous presentation on
     [How to Set Up A Linode/Akamai VPS With NGINX And Docker](https://github.com/tomit4/linode_nginx_docker)
     as a template for this article. THe basics is to introduce the reader to
     what a Virtual Private Server is and how to use basic shell commands to set
     up our Backend Application from The Backend Article.

5. NGINX basics

   - Set up a basic website using Linode and NGINX to serve a simple website.
     Write an article on the essentials of doing this. Serve up the Frontend
     from All Together (Part 3) using NGINX. Finalize the article by connecting
     the frontend to the backend being run from the previous article (Virtual
     Private Servers).

6. Docker Containers

   - Introduce the reader to Docker Containers and the concepts around
     containerization. Use Docker docker containers to containerize both the
     backend and frontend from previous articles, then reverse proxy the
     containers to a local NGINX on the VPS and serve it out to the real world
     (actually keep the app todo live on the internet).

7. HTTPS and LetsEncrypt

   - Introduce the reader to TLS/SSL certificates and the basic idea of HTTPS
     encryption. Also introduce the reader to how to set up LetsEncrypt with
     NGINX. Finalize by giving the reader a cronjob that will automatically
     refresh the LetsEncrypt certificate via the `certbot` utility.

8. Reflections On Full Stack Development

   - At this point you will have covered the basics of full stack development at
     a fundamental level. Reflect on what you've covered thus far and what other
     aspects of your tutorial series has not been addressed (i.e. other
     databases, kubernetes, authentication and authorization, etc.)
   - Conclude with your plans for future articles going more into low level
     depth.

9. TCP/IP

   - Cover the essentials of TCP/IP (perhaps review the TCP/IP Guide you read).

10. The HyperText Transfer Protocol (HTTP)

    - Cover the basics of HTTP, including the essential GET/POST requests that
      the browser is natively capable of supporting using HTML, as well as the
      PUT/PATCH/DELETE requests that must be implemented using JavaScript. Talk
      about the history of HTTP, some of the most common workflows involving
      JSON, and resources for finding more information (i.e. MDN).

11. Asynchronous Programming (i.e. Promises)

    - Attempt to cover the basics of Asynchronous Programming via demonstrations
      of callbacks, callback hell, Promises, and async/await patterns. Talk
      about the macroqueue/microqueue paradigm under which asynchronous
      programming can be more easily understood, and some basic error handling
      via try/catch that is commonly used with Promises.

12. Garbage Collection

    - Cover on a high level how Garbage Collection works in JavaScript and
      perhaps in other languages like Python. Pull it in with concepts like the
      Call Stack (demonstrated most easily with recursion), as well as how
      dynamically allocated records like vectors/arrays and
      hashmaps/objects/structs are stored using C, and how that relates to what
      happens in garbage collection at a very basic level.

13. TypeScript

    - Give an introduction to TypeScript. Reference what loose vs strict typing
      is in Programming languages, what problem TypeScript attempts to solve,
      where it falls short, and ultimately why modern web developers have
      resolved to using TypeScript over other solutions like JSDocs.
