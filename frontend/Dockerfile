FROM nginx:alpine

# Copy toàn bộ giao diện tĩnh vào thư mục gốc của Nginx
COPY . /usr/share/nginx/html

# Tạo cấu hình Proxy ngược (Reverse Proxy) để gom chung cổng
RUN echo 'server { \
    listen 80; \
    location / { \
    root /usr/share/nginx/html; \
    index index.html; \
    try_files $uri $uri/ /index.html; \
    } \
    location /api/ { \
    proxy_pass http://backend:3000; \
    proxy_set_header Host $host; \
    proxy_set_header X-Real-IP $remote_addr; \
    } \
    }' > /etc/nginx/conf.d/default.conf

EXPOSE 80