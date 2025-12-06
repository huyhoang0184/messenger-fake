const messagesDiv = document.getElementById("messages");
const messageInput = document.getElementById("messageInput");
const sendBtn = document.getElementById("sendBtn");
const typing = document.getElementById("typing");

// Tạo room chat đơn giản (có thể đổi thành random hoặc nhập tên phòng)
const roomName = "bestfriend-room-2025";
const messagesRef = db.ref("chats/" + roomName);

// Gửi tin nhắn
function sendMessage() {
  const text = messageInput.value.trim();
  if (!text) return;

  messagesRef.push({
    text: text,
    sender: "me",  // ở bản nâng cao có thể thêm tên/người dùng
    time: Date.now()
  });

  messageInput.value = "";
}

sendBtn.addEventListener("click", sendMessage);
messageInput.addEventListener("keypress", e => {
  if (e.key === "Enter") sendMessage();
});

// Hiển thị tin nhắn realtime
messagesRef.on("child_added", snap => {
  const msg = snap.val();
  const div = document.createElement("div");
  div.className = `message ${msg.sender === "me" ? "sent" : "received"}`;
  div.innerHTML = `
    ${msg.text}
    <small>${new Date(msg.time).toLocaleTimeString("vi-VN", {hour:"2-digit", minute:"2-digit"})}</small>
  `;
  messagesDiv.appendChild(div);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
});

// Fake "đang gõ..." (demo vui)
let typingTimer;
messageInput.addEventListener("input", () => {
  typing.textContent = "Đang gõ...";
  clearTimeout(typingTimer);
  typingTimer = setTimeout(() => typing.textContent = "Đang hoạt động", 1000);
});
