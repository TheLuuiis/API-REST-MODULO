FROM node

RUN mkdir -p /home/app

COPY . /home/app

EXPOSE 4322

CMD ["node", "/home/app/app.js"]