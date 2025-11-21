# poc-path

PoC of using the `fastify` proxy plugin.

Start the server with `npm run start`.
Then start the proxy with `npm run proxy`.

Now you can call:

```shell
curl http://localhost:4032/foo/
# This cannot be forwarded, since the allowed paths are `routes: ['/foo/bar/*']`
# {"message":"Route GET:/foo/ not found","error":"Not Found","statusCode":404}

curl http://localhost:4032/foo/bar/
# This call can be forwarded from the proxy
# {"message":"bar"}

curl http://localhost:4032/foo/bar/baz/
# This call can also be forwarded from the proxy
# {"message":"baz"}
```
