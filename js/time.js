function updateYearInfo() {
  const now = new Date();

  // 現在日時の表示
  const year = now.getFullYear();
  const month = (now.getMonth() + 1).toString().padStart(2, '0'); // 月は0〜11なので+1
  const date = now.getDate().toString().padStart(2, '0');
  const hours = now.getHours().toString().padStart(2, '0');
  const mins = now.getMinutes().toString().padStart(2, '0');

  const nowText = `${year}/${month}/${date} ${hours}:${mins}`;
  document.getElementById("now-time").textContent = `${nowText}`;

  // 今年の残り日数
  const endOfYear = new Date(year, 11, 31, 23, 59, 59); // 12月31日
  const diff = endOfYear - now;
  const daysLeft = Math.ceil(diff / (1000 * 60 * 60 * 24)); // ミリ秒 → 日

  document.getElementById("days-left").textContent = `あと残り ${daysLeft}日`;
}

updateYearInfo();
setInterval(updateYearInfo, 60000); // 毎分更新

