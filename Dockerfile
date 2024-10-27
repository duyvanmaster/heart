# Sử dụng một Node.js image chính thức
FROM node:14

# Tạo thư mục làm việc
WORKDIR /app

# Sao chép các file package
COPY package*.json ./

# Cài đặt các package
RUN npm install

# Sao chép toàn bộ dự án
COPY . .

# Expose port 3000
EXPOSE 3000

# Chạy ứng dụng
CMD ["npm", "start"]
