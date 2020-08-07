# Pound Proof-Of-Concept

This proof of concept validates that `Pound` (a linux proxy) is able to route http requests to different servers depending on the requested resource.

## Setup

1. Install docker and docker-compose
2. run `docker-compose build` 
3. run `docker-compose up` to spin up pound and 2 http servers


## Testing

Having the services up and running, open a new terminal and perform a request to:

```
curl http://localhost
```

The response should be served from the host: 10.5.0.5:8080
      

Make another request to the `/tid` resource  which is handled by another http server.

```
curl http://localhost/tid
```

Verify the response is served from a different IP address and port and that any other request is served by the server running n port 8080.
o
