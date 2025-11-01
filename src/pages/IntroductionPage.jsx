import React from 'react'
import PageLayout from '../components/PageLayout'
import StoryPanel from '../components/StoryPanel'
import ContentCard from '../components/ContentCard'

export default function IntroductionPage() {
  return (
    <PageLayout>
      <StoryPanel initiallyVisible>
        <ContentCard className="text-left space-y-4">
          <p className="uppercase tracking-[0.3em] text-sm text-amber-700 font-semibold">1) Giới thiệu &amp; Bối cảnh quyết tâm chính trị</p>
          <h1 className="text-3xl md:text-4xl font-black vintage-heading">Mở đầu câu chuyện</h1>
          <p className="text-lg vintage-text">Nội dung giữ nguyên theo tài liệu chuẩn hóa để đảm bảo tái sử dụng khi hiển thị trên web storytelling.</p>
        </ContentCard>
      </StoryPanel>

      <StoryPanel id="hero">
        <ContentCard className="text-left space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold vintage-heading">1.1) Hero / Slogan mở đầu</h2>
          <p className="text-lg vintage-text">
            "KHÔNG VÙNG CẤM – KHÔNG NGOẠI LỆ" – Quyết tâm chính trị của Đảng Cộng sản Việt Nam trong đấu tranh phòng, chống tham nhũng (PCTN), tiêu cực.
          </p>
        </ContentCard>
      </StoryPanel>

      <StoryPanel id="quan-diem">
        <ContentCard className="text-left space-y-5">
          <h2 className="text-2xl md:text-3xl font-bold vintage-heading">1.2) Quan điểm của Đảng – Định nghĩa, bản chất</h2>
          <section className="space-y-3">
            <h3 className="text-xl font-semibold vintage-heading">Định nghĩa (Luật PCTN 2005, khoản 2 Điều 1)</h3>
            <p className="text-lg vintage-text">“Tham nhũng là hành vi của người có chức vụ, quyền hạn đã lợi dụng chức vụ, quyền hạn đó vì vụ lợi.”</p>
          </section>
          <section className="space-y-3">
            <h3 className="text-xl font-semibold vintage-heading">Bản chất của tham nhũng</h3>
            <ul className="list-disc pl-6 space-y-2 text-lg vintage-text">
              <li>Tham nhũng là “khuyết tật bẩm sinh” của quyền lực – tồn tại ở mọi nhà nước, không phân biệt chế độ chính trị.</li>
              <li>Tổng Bí thư Nguyễn Phú Trọng: “Tham nhũng là hiện tượng xã hội tiêu cực, xấu xa mà thời nào, chế độ nào, quốc gia nào cũng có.”</li>
              <li>Đảng coi tham nhũng là “giặc nội xâm” – một trong 4 nguy cơ đe dọa sự tồn vong của chế độ.</li>
            </ul>
          </section>
        </ContentCard>
      </StoryPanel>

      <StoryPanel id="quyet-tam">
        <ContentCard className="text-left space-y-5">
          <h2 className="text-2xl md:text-3xl font-bold vintage-heading">1.3) Quyết tâm chính trị – 4 mục tiêu chiến lược</h2>
          <ul className="list-disc pl-6 space-y-3 text-lg vintage-text">
            <li>Thành lập Ban Chỉ đạo Trung ương về PCTN, tiêu cực (01/02/2013), do Tổng Bí thư Nguyễn Phú Trọng làm Trưởng ban.</li>
            <li>
              Phương châm: “KIÊN QUYẾT – KIÊN TRÌ – LIÊN TỤC – BỀN BỈ”. Đại hội XIII nhấn mạnh: “Kiên quyết, kiên trì đấu tranh, ngăn chặn, đẩy lùi tham nhũng, tiêu cực với quyết tâm chính trị cao hơn, hành động mạnh mẽ hơn và hiệu quả hơn”.
            </li>
            <li>
              4 mục tiêu chiến lược:
              <ol className="list-decimal pl-6 space-y-2 mt-2">
                <li>KHÔNG THỂ tham nhũng (cơ chế phòng ngừa chặt chẽ)</li>
                <li>KHÔNG DÁM tham nhũng (xử lý nghiêm minh, răn đe mạnh)</li>
                <li>KHÔNG MUỐN tham nhũng (giáo dục đạo đức, lương tâm)</li>
                <li>KHÔNG CẦN tham nhũng (đảm bảo đời sống cán bộ)</li>
              </ol>
            </li>
            <li>
              Cơ chế kiểm soát quyền lực: “Mọi quyền lực đều phải được kiểm soát chặt chẽ bằng cơ chế; quyền lực phải được ràng buộc bằng trách nhiệm; quyền lực đến đâu trách nhiệm đến đó, quyền lực càng cao trách nhiệm càng lớn.”
            </li>
          </ul>
        </ContentCard>
      </StoryPanel>
    </PageLayout>
  )
}
