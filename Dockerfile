# Stage 1: Build the Angular app
FROM node:20-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build -- --configuration production

# Stage 2: Serve with Nginx
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY public/favicon.ico /usr/share/nginx/html/favicon.ico
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
