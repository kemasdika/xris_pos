# install environment
FROM node:14.15.1 as install

WORKDIR /usr/app

COPY package*.json ./

RUN npm ci --silent

copy . .

# COPY custom_modules/config/webpack.config.js ./node_modules/react-scripts/config/webpack.config.js

# build environment
# FROM node:14.15.1 as build

# COPY --from=install /usr/app/node_modules /usr/app/node_modules

# WORKDIR /usr/app

# RUN mkdir src

# RUN mkdir public

# COPY package*.json ./

# COPY src/ ./src

# COPY public/ ./public

# COPY custom_modules/ ./custom_modules

# COPY default.conf ./

# COPY custom_modules/config/webpack.config.js ./node_modules/react-scripts/config/webpack.config.js

RUN npm run build

# production environment
FROM nginx:stable-alpine

COPY --from=install /usr/app/build /usr/share/nginx/html

COPY --from=install /usr/app/default.conf /etc/nginx/conf.d/default.conf

WORKDIR /usr/share/nginx/html

COPY generate_config_js.sh ./
COPY template-env.txt ./

RUN apk add --no-cache bash && \
  chmod +x generate_config_js.sh

EXPOSE 80

CMD ["/bin/bash", "-c", "/usr/share/nginx/html/generate_config_js.sh && nginx -g \"daemon off;\""]