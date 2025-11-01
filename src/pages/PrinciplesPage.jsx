import React from 'react'
import PageLayout from '../components/PageLayout'
import StoryPanel from '../components/StoryPanel'
import ContentCard from '../components/ContentCard'

export default function PrinciplesPage() {
  return (
    <PageLayout>
      <StoryPanel initiallyVisible>
        <ContentCard className="text-left space-y-4">
          <p className="uppercase tracking-[0.3em] text-sm text-amber-700 font-semibold">3) Nguyên tắc xử lý &amp; phạm vi</p>
          <h1 className="text-3xl md:text-4xl font-black vintage-heading">Nguyên tắc xử lý &amp; phạm vi</h1>
        </ContentCard>
      </StoryPanel>

      <StoryPanel>
        <ContentCard className="text-left space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold vintage-heading">Nguyên tắc “Không vùng cấm, không ngoại lệ”</h2>
          <p className="text-lg vintage-text">Đặc điểm hành vi tham nhũng (Tài liệu giảng dạy):</p>
          <ol className="list-decimal pl-6 space-y-2 text-lg vintage-text">
            <li>Là hành vi của người có chức vụ, quyền hạn (điều kiện để có thể lợi dụng).</li>
            <li>Lợi dụng chức vụ, quyền hạn làm trái pháp luật để mưu lợi riêng.</li>
            <li>Động cơ vì vụ lợi, không xuất phát từ nhiệm vụ công vụ.</li>
          </ol>
        </ContentCard>
      </StoryPanel>

      <StoryPanel>
        <ContentCard className="text-left space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold vintage-heading">Phạm vi, lĩnh vực trọng điểm</h2>
          <ul className="list-disc pl-6 space-y-3 text-lg vintage-text">
            <li>Ngân hàng – tài chính; Đất đai – quy hoạch; Giao thông – xây dựng; Y tế – giáo dục; Quản lý nhà nước.</li>
            <li>Đối tượng xử lý: không phân biệt cấp bậc, từ cơ sở đến cán bộ cấp cao nhất (kể cả Ủy viên Bộ Chính trị, bộ trưởng, bí thư tỉnh ủy, sĩ quan cấp tướng…).</li>
          </ul>
          <blockquote className="border-l-4 border-amber-700/70 pl-4 italic text-base vintage-subtext">
            Cương lĩnh 2011: “Quan liêu, tham nhũng, xa rời Nhân dân sẽ dẫn đến những tổn thất khôn lường đối với vận mệnh của đất nước, của chế độ XHCN và của Đảng.”
          </blockquote>
        </ContentCard>
      </StoryPanel>
    </PageLayout>
  )
}
