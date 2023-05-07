FROM node:latest AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod
FROM nginx:latest
COPY --from=build /app/dist/app-front /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
