# This defines our starting point
FROM node:15.6.0

COPY . /srv/scanifly

WORKDIR /srv/scanifly

RUN npm install
RUN npm install -g @angular/cli

CMD ng serve --host 0.0.0.0
