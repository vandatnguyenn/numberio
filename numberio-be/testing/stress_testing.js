import http from "k6/http";
import { sleep } from "k6";
import { SharedArray } from "k6/data";
export let options = {
  stages: [
    { duration: "10s", target: 100 }, // Tăng số lượng người dùng từ 0 lên 100 trong 10 giây
    { duration: "30s", target: 500 }, // Tiếp tục duy trì 500 người dùng trong 30 giây
    { duration: "10s", target: 0 }, // Giảm số lượng người dùng từ 500 về 0 trong 10 giây
  ],
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
