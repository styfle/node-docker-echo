FROM mhart/alpine-node:6

WORKDIR /src
ADD . /src
EXPOSE 3000
CMD ["node", "/src/server.js"]