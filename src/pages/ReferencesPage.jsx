import React from 'react'
import PageLayout from '../components/PageLayout'
import StoryPanel from '../components/StoryPanel'
import ContentCard from '../components/ContentCard'

export default function ReferencesPage() {
  return (
    <PageLayout>
      <StoryPanel initiallyVisible>
        <ContentCard className="text-left space-y-4">
          <p className="uppercase tracking-[0.3em] text-sm text-amber-700 font-semibold">6) Footer – Kết luận &amp; Tài liệu tham khảo</p>
          <h1 className="text-3xl md:text-4xl font-black vintage-heading">Footer – Kết luận &amp; Tài liệu tham khảo</h1>
        </ContentCard>
      </StoryPanel>

      <StoryPanel>
        <ContentCard className="text-left space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold vintage-heading">Kết luận ngắn</h2>
          <ul className="list-disc pl-6 space-y-2 text-lg vintage-text">
            <li>Thành tựu PCTN là minh chứng cho quyết tâm chính trị, năng lực lãnh đạo của Đảng và niềm tin của Nhân dân.</li>
            <li>Tiếp tục hoàn thiện cơ chế kiểm soát quyền lực, pháp luật, đạo đức công vụ và năng lực quản trị để đạt mục tiêu “không thể – không dám – không muốn – không cần” tham nhũng.</li>
          </ul>
        </ContentCard>
      </StoryPanel>

      <StoryPanel>
        <ContentCard className="text-left space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold vintage-heading">Trích dẫn tiêu biểu</h2>
          <blockquote className="border-l-4 border-amber-700/70 pl-4 italic text-lg vintage-text">
            “Mọi quyền lực đều phải được kiểm soát chặt chẽ bằng cơ chế; quyền lực phải được ràng buộc bằng trách nhiệm; quyền lực đến đâu trách nhiệm đến đó, quyền lực càng cao trách nhiệm càng lớn.” — Tổng Bí thư Nguyễn Phú Trọng.
          </blockquote>
          <blockquote className="border-l-4 border-amber-700/70 pl-4 italic text-lg vintage-text">
            “Quan liêu, tham nhũng, xa rời Nhân dân sẽ dẫn đến những tổn thất khôn lường đối với vận mệnh của đất nước, của chế độ XHCN và của Đảng.” — Cương lĩnh 2011.
          </blockquote>
        </ContentCard>
      </StoryPanel>

      <StoryPanel>
        <ContentCard className="text-left space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold vintage-heading">Tài liệu tham khảo</h2>
          <ol className="list-decimal pl-6 space-y-2 text-lg vintage-text">
            <li>Tài liệu giảng dạy về phòng, chống tham nhũng (tr. 3–48, 56–93)</li>
            <li>Nguyễn Phú Trọng (chủ biên): Kiên quyết, kiên trì đấu tranh phòng, chống tham nhũng, tiêu cực, góp phần xây dựng Đảng và Nhà nước ta ngày càng trong sạch, vững mạnh</li>
            <li>Các bài viết trên Tạp chí Cộng sản, Báo Nhân Dân, QĐND</li>
            <li>Luật Phòng, chống tham nhũng 2018; Nghị định 130/2020/NĐ-CP</li>
            <li>Transparency International – Chỉ số cảm nhận tham nhũng (CPI) 2013–2024</li>
          </ol>
        </ContentCard>
      </StoryPanel>

      <StoryPanel>
        <ContentCard className="text-left space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold vintage-heading">Ghi chú triển khai</h2>
          <ul className="list-disc pl-6 space-y-2 text-lg vintage-text">
            <li>Nội dung đã chuyển sang Markdown chuẩn (heading, danh sách, trích dẫn) để tránh lỗi cắt text khi render.</li>
            <li>Số liệu được đồng bộ với các file JSON hiện có; nếu cần tự động hóa, có thể parse JSON và render động bằng các component biểu đồ.</li>
          </ul>
        </ContentCard>
      </StoryPanel>
    </PageLayout>
  )
}
