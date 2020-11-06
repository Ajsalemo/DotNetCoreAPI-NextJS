# DotNetCoreAPI-NextJS
A basic NextJS UI that uses express.js which connects to a ASP .NET Core API on Azure's Multicontainer(docker-compose) platform - used as a proof of concept for multicontainers/docker-compose on Azure and connecting between containers on the Docker 'bridge' network

### Note: The environment variable NEXT_PUBLIC_URL_API should be changed to the service(container name) that you're connecting to. If your API service in your Docker-Compose is named 'somecontainername', then change the variable or API endpoint to http://yourapicontainername:port of your API - for example:

```http://dotnetcoreapi-container:5000```
  
```
services:
  nextjsfrontend-container:
    container_name: nextjsfrontend-container
    build: .
    ports:
      - "3000:3000"
    environment:
      - NEXT_PUBLIC_URL_API=${NEXT_PUBLIC_URL_API}

        
  dotnetcoreapi-container:
    container_name: dotnetcoreapi-container
    build: ../DotNetCoreApi/
    ports:
      - "5000:5000"
```

A working example of this can be found here: https://ansalemo-nextjs-dotnetcoreapi-dockercompose.azurewebsites.net/
