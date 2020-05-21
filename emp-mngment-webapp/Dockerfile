# FROM node:12.16.1 as compile-image
# WORKDIR /app
# COPY package*.json /app/
# RUN npm install
# COPY ./ /app/
# ARG configuration=production
# RUN npm run build -- --output-path=./dist/out --configuration $configuration
# # Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
# FROM nginx:1.15
# COPY --from=compile-image /app/dist/out/ /usr/share/nginx/html
# # Copy the default nginx.conf provided by tiangolo/node-frontend
# COPY --from=compile-image /nginx.conf /etc/nginx/conf.d/default.conf

FROM node:12.16.1 AS builder
COPY . ./emp-mngment-webapp
WORKDIR /emp-mngment-webapp
RUN npm i
RUN $(npm bin)/ng build --prod

FROM nginx:1.15.8-alpine
COPY --from=builder /emp-mngment-webapp/dist/graph-tutorial/ /usr/share/nginx/html
