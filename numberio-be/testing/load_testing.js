import http from "k6/http";
import { sleep } from "k6";
import { SharedArray } from "k6/data";
//import { readFileSync } from "fs";


// const jsonString = readFileSync(path);
//const data = JSON.parse(jsonString);
// console.log(data[0]);
// const randomIndex = Math.floor(Math.random() * data.length);
export let options = {
  vus: 100, // Số lượng người dùng đồng thời
  duration: "10s", // Thời gian chạy kiểm thử
};

const data = new SharedArray("users", function () {
  // here you can open files, and then do additional processing or generate the array with data dynamically
  const f = JSON.parse(open("./data.json"));
  return f; // f must be an array[]
});
const randomUser = data[Math.floor(Math.random() * data.length)];
console.log(randomUser.username);
export default function () {
  const BASE_URL = "http://localhost:4000"; // URL của ứng dụng Node.js

  // Gửi yêu cầu HTTP đến ứng dụng Node.js
  let response = http.get(`${BASE_URL}/account/infor/${randomUser.username}`);

  // Kiểm tra và ghi lại kết quả kiểm thử
  if (response.status === 200) {
    console.log("Yêu cầu thành công!");
  } else {
    console.log("Yêu cầu thất bại!");
  }

  sleep(1); // Đợi 1 giây trước khi gửi yêu cầu tiếp theo
}
