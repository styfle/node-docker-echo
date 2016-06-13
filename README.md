# node-docker-echo
Example node.js echo environment variables in docker.

View on [docker hub](https://hub.docker.com/r/styfle/node-docker-echo/)

## Usage

###
```
docker run node-docker-echo -p 3000:3000
```

### Visit URL
```sh
curl http://localhost:3000/?message=wat
```

### Output
```json
{
  "message": "wat",
  "env": {
    "PATH": "/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin",
    "HOSTNAME": "083bf20472c9",
    "TERM": "xterm",
    "VERSION": "v6.2.1",
    "NPM_VERSION": "3",
    "HOME": "/root"
  }
}
```
