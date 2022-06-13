# DotNetCoreAPI-NextJS
A [Next](https://nextjs.org/) application that uses [Express](http://expressjs.com/), acting as a front-end, which calls to a ASP .NET Core API on Azure's Multicontainer(docker-compose) platform - used as a proof of concept for multicontainers/docker-compose on Azure.
> **Note**: [Multicontainers](https://docs.microsoft.com/en-us/azure/app-service/tutorial-multi-container-app) are currently in public preview and **not** recommended for production.

#### Usage: 
The environment variable NEXT_PUBLIC_URL_API should be changed to the service(container name) that you're connecting to. If your API service in your `docker-compose.yml` file is named 'somecontainername', then change the variable or API endpoint to http://somecontainername:port of your API - for example:

```http://dotnetcoreapi-container:5000```
  
```
services:
  nextjsfrontend-container:
    image: yourcontainerregistry.azurecr.io/nextjsfrontend:yourtag
    ports:
      - "3000:3000"
    environment:
      - NEXT_PUBLIC_URL_API=${NEXT_PUBLIC_URL_API}

  dotnetcoreapi-container:
    image: yourcontainerregistry.azurecr.io/dotnetcoreapi:yourtag
    ports:
      - "5000:5000"
```

Optionally and more preferably, you can just add the above environment variable to your AppSettings within your Azure Application.


