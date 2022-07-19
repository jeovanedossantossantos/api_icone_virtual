FROM node:16.13.1
WORKDIR /app
COPY ./package*.json ./
RUN yarn
COPY . .
EXPOSE 3333
CMD ["./run_web.sh"]  
