# NỘI DUNG & STRUCTURE TRANG WEB PCTN

Tài liệu đầy đủ để hiển thị trên website theo phương pháp storytelling, đồng bộ với dữ liệu trong thư mục `src/data`. Tất cả mục dưới đây đã chuẩn hóa heading, bullet, trích dẫn để tránh bị cắt nội dung khi render trên web.

## Mục lục

- [Trang chủ (Landing)](#trang-chu-landing)
- [1) Giới thiệu & Bối cảnh quyết tâm chính trị](#1-gioi-thieu--boi-canh-quyet-tam-chinh-tri)
	- [1.1) Hero / Slogan mở đầu](#11-hero--slogan-mo-dau)
	- [1.2) Quan điểm của Đảng – Định nghĩa, bản chất](#12-quan-diem-cua-dang--dinh-nghia-ban-chat)
	- [1.3) Quyết tâm chính trị – 4 mục tiêu chiến lược](#13-quyet-tam-chinh-tri--4-muc-tieu-chien-luoc)
- [2) Thành tựu nổi bật](#2-thanh-tuu-noi-bat)
	- [2.1) Công tác kỷ luật Đảng](#21-cong-tac-ky-luat-dang)
	- [2.2) Công tác thanh tra, kiểm toán](#22-cong-tac-thanh-tra-kiem-toan)
	- [2.3) Công tác điều tra, truy tố, xét xử](#23-cong-tac-dieu-tra-truy-to-xet-xu)
	- [2.4) Thu hồi tài sản tham nhũng](#24-thu-hoi-tai-san-tham-nhung)
- [3) Nguyên tắc xử lý & phạm vi](#3-nguyen-tac-xu-ly--pham-vi)
- [4) Critical Question (CQ) – Trả lời luận điểm](#4-critical-question-cq--tra-loi-luan-diem)
- [5) Thiết kế kỹ thuật (Frontend/UX/Data)](#5-thiet-ke-ky-thuat-frontenduxdata)
- [6) Footer – Kết luận & Tài liệu tham khảo](#6-footer--ket-luan--tai-lieu-tham-khao)

---

## Trang chủ (Landing)

- Hero: Slogan “Không Vùng Cấm – Không Ngoại Lệ” cùng hình ảnh biểu trưng công lý.
- Timeline tương tác (2013 → 2025) cho phép cuộn qua các giai đoạn, liên kết tới từng section nội dung bên dưới.

> Gợi ý dev: Gắn ProgressBar và FixedBackground để tăng cảm giác chiều sâu; sử dụng `StoryPanel` cho từng mốc năm.

---

## 1) Giới thiệu & Bối cảnh quyết tâm chính trị

### 1.1) Hero / Slogan mở đầu

"KHÔNG VÙNG CẤM – KHÔNG NGOẠI LỆ" – Quyết tâm chính trị của Đảng Cộng sản Việt Nam trong đấu tranh phòng, chống tham nhũng (PCTN), tiêu cực.

### 1.2) Quan điểm của Đảng – Định nghĩa, bản chất

- Định nghĩa (Luật PCTN 2005, khoản 2 Điều 1): “Tham nhũng là hành vi của người có chức vụ, quyền hạn đã lợi dụng chức vụ, quyền hạn đó vì vụ lợi.”
- Bản chất của tham nhũng:
	- Tham nhũng là “khuyết tật bẩm sinh” của quyền lực – tồn tại ở mọi nhà nước, không phân biệt chế độ chính trị.
	- Tổng Bí thư Nguyễn Phú Trọng: “Tham nhũng là hiện tượng xã hội tiêu cực, xấu xa mà thời nào, chế độ nào, quốc gia nào cũng có.”
	- Đảng coi tham nhũng là “giặc nội xâm” – một trong 4 nguy cơ đe dọa sự tồn vong của chế độ.

### 1.3) Quyết tâm chính trị – 4 mục tiêu chiến lược

- Thành lập Ban Chỉ đạo Trung ương về PCTN, tiêu cực (01/02/2013), do Tổng Bí thư Nguyễn Phú Trọng làm Trưởng ban.
- Phương châm: “KIÊN QUYẾT – KIÊN TRÌ – LIÊN TỤC – BỀN BỈ”. Đại hội XIII nhấn mạnh: “Kiên quyết, kiên trì đấu tranh, ngăn chặn, đẩy lùi tham nhũng, tiêu cực với quyết tâm chính trị cao hơn, hành động mạnh mẽ hơn và hiệu quả hơn”.
- 4 mục tiêu chiến lược:
	1. KHÔNG THỂ tham nhũng (cơ chế phòng ngừa chặt chẽ)
	2. KHÔNG DÁM tham nhũng (xử lý nghiêm minh, răn đe mạnh)
	3. KHÔNG MUỐN tham nhũng (giáo dục đạo đức, lương tâm)
	4. KHÔNG CẦN tham nhũng (đảm bảo đời sống cán bộ)
- Cơ chế kiểm soát quyền lực: “Mọi quyền lực đều phải được kiểm soát chặt chẽ bằng cơ chế; quyền lực phải được ràng buộc bằng trách nhiệm; quyền lực đến đâu trách nhiệm đến đó, quyền lực càng cao trách nhiệm càng lớn.”

---

## 2) Thành tựu nổi bật

> Dữ liệu đồng bộ với `src/data/achievements/*.json` và `src/data/statistics/yearly_comparison.json`.

### 2.1) Công tác kỷ luật Đảng

- 2013–2020:
	- Thi hành kỷ luật: 131.000 đảng viên
	- 110 cán bộ diện Trung ương quản lý bị xử lý, trong đó:
		- 27 Ủy viên Trung ương
		- 4 Ủy viên Bộ Chính trị
		- 30 sĩ quan cấp tướng
- Năm 2023:
	- Kỷ luật 606 tổ chức đảng, 24.162 đảng viên (↑ 12% so với 2022)
	- Trong đó 459 đảng viên do tham nhũng
- Đến 02/2024:
	- 105 cán bộ diện Trung ương quản lý
	- 22 Ủy viên/nguyên Ủy viên Trung ương bị kỷ luật
- Điểm đặc biệt: Lần đầu tiên 6 cán bộ bị xử lý do vi phạm kê khai tài sản, thu nhập (minh bạch hóa tài sản).

### 2.2) Công tác thanh tra, kiểm toán

- 2013–2020:
	- Kiến nghị thu hồi: 700.000 tỷ đồng; 20.000 ha đất
	- Xử lý: 14.000 tập thể và cá nhân
	- Chuyển cơ quan điều tra: 700 vụ việc
- Năm 2023 (tăng mạnh hiệu quả):
	- Kiến nghị thu hồi: 219.000 tỷ đồng (↑ gấp 3 lần so với 2022)
	- Xử lý: 7.524 tập thể; 7.944 cá nhân
	- Chuyển cơ quan điều tra: 660 vụ việc (↑ 18%)

> Ý nghĩa (Tài liệu giảng dạy PCTN): “Ban hành và áp dụng các văn bản pháp luật, đặc biệt là các văn bản để xử lý nghiêm minh hành vi tham nhũng là công cụ hữu hiệu để phòng ngừa và đấu tranh chống tham nhũng.”

### 2.3) Công tác điều tra, truy tố, xét xử

- 2012–2022:
	- Khởi tố, điều tra, xét xử: gần 16.000 vụ án; hơn 30.300 bị cáo
- Năm 2023 (tăng mạnh):
	- Khởi tố: 4.500 vụ / 9.370 bị can (↑ 46% số vụ)
	- Án tham nhũng: 899 vụ / 2.446 bị can (↑ gần 2 lần)
- Vai trò Ban Chỉ đạo Trung ương:
	- 977 vụ án/vụ việc vào diện theo dõi
	- 180 vụ án và 133 vụ việc do Ban Chỉ đạo trực tiếp chỉ đạo

### 2.4) Thu hồi tài sản tham nhũng

- Tỷ lệ thu hồi tăng từ <10% (2013) lên 34,7% (2023).
- Các vụ án do Ban Chỉ đạo theo dõi: thu hồi 50.000 tỷ đồng, đạt tỷ lệ 41,3%.
- Ý nghĩa: Bảo vệ tài sản Nhà nước, lợi ích người dân; khẳng định quyết tâm “không để lọt tội phạm, không để oan người vô tội, không để thất thoát tài sản”.

---

## 3) Nguyên tắc xử lý & phạm vi

### Nguyên tắc “Không vùng cấm, không ngoại lệ”

- Đặc điểm hành vi tham nhũng (Tài liệu giảng dạy):
	1. Là hành vi của người có chức vụ, quyền hạn (điều kiện để có thể lợi dụng).
	2. Lợi dụng chức vụ, quyền hạn làm trái pháp luật để mưu lợi riêng.
	3. Động cơ vì vụ lợi, không xuất phát từ nhiệm vụ công vụ.

### Phạm vi, lĩnh vực trọng điểm

- Ngân hàng – tài chính; Đất đai – quy hoạch; Giao thông – xây dựng; Y tế – giáo dục; Quản lý nhà nước.
- Đối tượng xử lý: không phân biệt cấp bậc, từ cơ sở đến cán bộ cấp cao nhất (kể cả Ủy viên Bộ Chính trị, bộ trưởng, bí thư tỉnh ủy, sĩ quan cấp tướng…).

> Cương lĩnh 2011: “Quan liêu, tham nhũng, xa rời Nhân dân sẽ dẫn đến những tổn thất khôn lường đối với vận mệnh của đất nước, của chế độ XHCN và của Đảng.”

---

## 4) Critical Question (CQ) – Trả lời luận điểm

> Câu hỏi: “Liệu có phải một đảng cầm quyền là nguyên nhân dẫn đến tham nhũng ở Việt Nam?”

### 4.1) Phủ định luận điệu sai trái

- Sai lầm phổ biến:
	- “Chế độ một đảng cầm quyền sinh ra tham nhũng.”
	- “Tham nhũng là bản chất của chế độ xã hội chủ nghĩa.”
	- “Chỉ đa đảng mới dẹp bỏ được tham nhũng.”
- Sự thật khoa học:
	1. Tham nhũng là “khuyết tật bẩm sinh” của quyền lực; ở đâu có quyền lực, ở đó có nguy cơ tham nhũng nếu bị lạm dụng.
	2. Nguyên nhân cốt lõi là lòng tham của con người, không phụ thuộc thể chế.
	3. Hiệu quả PCTN phụ thuộc cơ chế kiểm soát quyền lực, pháp luật, phẩm chất cán bộ, năng lực quản trị – không phụ thuộc số lượng đảng chính trị.

### 4.2) So sánh với chế độ đa đảng – Bằng chứng CPI

- “Đa đảng KHÔNG phải phép màu để chống tham nhũng.”
- Thực tế: Tham nhũng phổ biến ở nhiều quốc gia đa đảng (Transparency International).
- CPI Việt Nam (2023): 41/100 điểm, xếp 83/180; có 97 quốc gia (đa số đa đảng) xếp dưới Việt Nam về mức độ trong sạch.
- Xu hướng tích cực: 2015–2023, CPI của Việt Nam tăng 10 điểm; tham chiếu Trung Quốc 42/100 (tăng 6 điểm từ 2014).

> Trích: “Tại các nước tư bản phát triển, các cuộc bầu cử ‘tự do’, ‘dân chủ’ dù có thể thay đổi chính phủ nhưng không thể thay đổi được các thế lực thống trị; đằng sau hệ thống đa đảng thực chất vẫn là sự chuyên chế của các tập đoàn tư bản.” — Tổng Bí thư Nguyễn Phú Trọng.

### 4.3) Yếu tố quyết định hiệu quả PCTN

1. Kiểm soát quyền lực chặt chẽ: “Mọi quyền lực đều phải được kiểm soát chặt chẽ bằng cơ chế; quyền lực phải được ràng buộc bằng trách nhiệm; quyền lực đến đâu trách nhiệm đến đó, quyền lực càng cao trách nhiệm càng lớn.”
2. Chất lượng hệ thống pháp luật: xử lý nghiêm minh là công cụ hữu hiệu để phòng ngừa và đấu tranh.
3. Phẩm chất cán bộ, công chức: tăng cường xây dựng, chỉnh đốn Đảng; ngăn chặn suy thoái, “tự diễn biến”, “tự chuyển hóa”.
4. Năng lực quản trị nhà nước: hoàn thiện thanh tra, kiểm toán, điều tra, truy tố, xét xử.

### 4.4) Bằng chứng thực tế từ Việt Nam

- “Ta đánh ta” – Không vùng cấm, không ngoại lệ; xử lý nghiêm, kịp thời, công khai cán bộ, công chức tham nhũng, kể cả người đã nghỉ hưu.
- Kết quả cụ thể (tham chiếu mục 2.1–2.4): xử lý nhiều cán bộ cấp cao; thu hồi tài sản lớn; tăng hiệu quả phát hiện, khởi tố, xét xử án tham nhũng.
- Được Nhân dân đồng tình, củng cố niềm tin vào chế độ và pháp luật.

### 4.5) Kết luận (Trả lời trực tiếp CQ)

KHÔNG. Một đảng cầm quyền không phải là nguyên nhân dẫn đến tham nhũng ở Việt Nam. Yếu tố quyết định là cơ chế kiểm soát quyền lực, chất lượng pháp luật, phẩm chất cán bộ và năng lực quản trị.

---

## 5) Thiết kế kỹ thuật (Frontend/UX/Data)

### A) Framework & Công nghệ

- Frontend: React (Vite)
- Animation: Framer Motion, GSAP (scroll/trigger)
- Charts: Chart.js hoặc D3.js cho visualization
- UI: Tailwind CSS (hoặc Material UI)
- Responsive: Mobile-first

### B) UX/UI

- Màu sắc: Đỏ – vàng (Đảng, Quốc kỳ) kết hợp xanh (công lý)
- Typography: Font rõ ràng, dễ đọc
- Điều hướng: Navbar cố định + Progress indicator
- Loading: Skeleton cho khối dữ liệu lớn
- Accessibility: WCAG 2.1 AA

### C) Tương tác

- Search: theo năm, lĩnh vực
- Filter: theo danh mục thành tựu
- Share: Nút chia sẻ MXH
- Download: Export PDF toàn bộ nội dung
- Comments/Q&A: Module hỏi đáp cho phần CQ

### D) Cấu trúc dữ liệu (đã có)

```
src/data/
├─ achievements/
│  ├─ discipline.json
│  ├─ inspection.json
│  └─ prosecution.json
├─ statistics/
│  └─ yearly_comparison.json
├─ cq_answer/
│  ├─ arguments.json
│  └─ evidences.json
└─ references.json
```

---

## 6) Footer – Kết luận & Tài liệu tham khảo

### Kết luận ngắn

- Thành tựu PCTN là minh chứng cho quyết tâm chính trị, năng lực lãnh đạo của Đảng và niềm tin của Nhân dân.
- Tiếp tục hoàn thiện cơ chế kiểm soát quyền lực, pháp luật, đạo đức công vụ và năng lực quản trị để đạt mục tiêu “không thể – không dám – không muốn – không cần” tham nhũng.

### Trích dẫn tiêu biểu

> “Mọi quyền lực đều phải được kiểm soát chặt chẽ bằng cơ chế; quyền lực phải được ràng buộc bằng trách nhiệm; quyền lực đến đâu trách nhiệm đến đó, quyền lực càng cao trách nhiệm càng lớn.” — Tổng Bí thư Nguyễn Phú Trọng.

> “Quan liêu, tham nhũng, xa rời Nhân dân sẽ dẫn đến những tổn thất khôn lường đối với vận mệnh của đất nước, của chế độ XHCN và của Đảng.” — Cương lĩnh 2011.

### Tài liệu tham khảo (theo `src/data/references.json`)

1) Tài liệu giảng dạy về phòng, chống tham nhũng (tr. 3–48, 56–93)
2) Nguyễn Phú Trọng (chủ biên): Kiên quyết, kiên trì đấu tranh phòng, chống tham nhũng, tiêu cực, góp phần xây dựng Đảng và Nhà nước ta ngày càng trong sạch, vững mạnh
3) Các bài viết trên Tạp chí Cộng sản, Báo Nhân Dân, QĐND
4) Luật Phòng, chống tham nhũng 2018; Nghị định 130/2020/NĐ-CP
5) Transparency International – Chỉ số cảm nhận tham nhũng (CPI) 2013–2024

---

Ghi chú triển khai:

- Nội dung đã chuyển sang Markdown chuẩn (heading, danh sách, trích dẫn) để tránh lỗi cắt text khi render.
- Số liệu được đồng bộ với các file JSON hiện có; nếu cần tự động hóa, có thể parse JSON và render động bằng các component biểu đồ.
