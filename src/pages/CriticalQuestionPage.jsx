import React from 'react'
import PageLayout from '../components/PageLayout'
import StoryPanel from '../components/StoryPanel'
import ContentCard from '../components/ContentCard'

export default function CriticalQuestionPage() {
  return (
    <PageLayout>
      <StoryPanel initiallyVisible>
        <ContentCard className="text-left space-y-4">
          <p className="uppercase tracking-[0.3em] text-sm text-amber-700 font-semibold">4) Critical Question (CQ) – Trả lời luận điểm</p>
          <h1 className="text-3xl md:text-4xl font-black vintage-heading">Critical Question (CQ) – Trả lời luận điểm</h1>
          <blockquote className="border-l-4 border-amber-700/70 pl-4 italic text-base vintage-subtext">
            Câu hỏi: “Liệu có phải một đảng cầm quyền là nguyên nhân dẫn đến tham nhũng ở Việt Nam?”
          </blockquote>
        </ContentCard>
      </StoryPanel>

      <StoryPanel>
        <ContentCard className="text-left space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold vintage-heading">4.1) Phủ định luận điệu sai trái</h2>
          <section className="space-y-3">
            <h3 className="text-xl font-semibold vintage-heading">Sai lầm phổ biến:</h3>
            <ul className="list-disc pl-6 space-y-2 text-lg vintage-text">
              <li>“Chế độ một đảng cầm quyền sinh ra tham nhũng.”</li>
              <li>“Tham nhũng là bản chất của chế độ xã hội chủ nghĩa.”</li>
              <li>“Chỉ đa đảng mới dẹp bỏ được tham nhũng.”</li>
            </ul>
          </section>
          <section className="space-y-3">
            <h3 className="text-xl font-semibold vintage-heading">Sự thật khoa học:</h3>
            <ol className="list-decimal pl-6 space-y-2 text-lg vintage-text">
              <li>Tham nhũng là “khuyết tật bẩm sinh” của quyền lực; ở đâu có quyền lực, ở đó có nguy cơ tham nhũng nếu bị lạm dụng.</li>
              <li>Nguyên nhân cốt lõi là lòng tham của con người, không phụ thuộc thể chế.</li>
              <li>Hiệu quả PCTN phụ thuộc cơ chế kiểm soát quyền lực, pháp luật, phẩm chất cán bộ, năng lực quản trị – không phụ thuộc số lượng đảng chính trị.</li>
            </ol>
          </section>
        </ContentCard>
      </StoryPanel>

      <StoryPanel>
        <ContentCard className="text-left space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold vintage-heading">4.2) So sánh với chế độ đa đảng – Bằng chứng CPI</h2>
          <ul className="list-disc pl-6 space-y-3 text-lg vintage-text">
            <li>“Đa đảng KHÔNG phải phép màu để chống tham nhũng.”</li>
            <li>Thực tế: Tham nhũng phổ biến ở nhiều quốc gia đa đảng (Transparency International).</li>
            <li>CPI Việt Nam (2023): 41/100 điểm, xếp 83/180; có 97 quốc gia (đa số đa đảng) xếp dưới Việt Nam về mức độ trong sạch.</li>
            <li>Xu hướng tích cực: 2015–2023, CPI của Việt Nam tăng 10 điểm; tham chiếu Trung Quốc 42/100 (tăng 6 điểm từ 2014).</li>
          </ul>
          <blockquote className="border-l-4 border-amber-700/70 pl-4 italic text-base vintage-subtext">
            Trích: “Tại các nước tư bản phát triển, các cuộc bầu cử ‘tự do’, ‘dân chủ’ dù có thể thay đổi chính phủ nhưng không thể thay đổi được các thế lực thống trị; đằng sau hệ thống đa đảng thực chất vẫn là sự chuyên chế của các tập đoàn tư bản.” — Tổng Bí thư Nguyễn Phú Trọng.
          </blockquote>
        </ContentCard>
      </StoryPanel>

      <StoryPanel>
        <ContentCard className="text-left space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold vintage-heading">4.3) Yếu tố quyết định hiệu quả PCTN</h2>
          <ol className="list-decimal pl-6 space-y-2 text-lg vintage-text">
            <li>Kiểm soát quyền lực chặt chẽ: “Mọi quyền lực đều phải được kiểm soát chặt chẽ bằng cơ chế; quyền lực phải được ràng buộc bằng trách nhiệm; quyền lực đến đâu trách nhiệm đến đó, quyền lực càng cao trách nhiệm càng lớn.”</li>
            <li>Chất lượng hệ thống pháp luật: xử lý nghiêm minh là công cụ hữu hiệu để phòng ngừa và đấu tranh.</li>
            <li>Phẩm chất cán bộ, công chức: tăng cường xây dựng, chỉnh đốn Đảng; ngăn chặn suy thoái, “tự diễn biến”, “tự chuyển hóa”.</li>
            <li>Năng lực quản trị nhà nước: hoàn thiện thanh tra, kiểm toán, điều tra, truy tố, xét xử.</li>
          </ol>
        </ContentCard>
      </StoryPanel>

      <StoryPanel>
        <ContentCard className="text-left space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold vintage-heading">4.4) Bằng chứng thực tế từ Việt Nam</h2>
          <ul className="list-disc pl-6 space-y-3 text-lg vintage-text">
            <li>“Ta đánh ta” – Không vùng cấm, không ngoại lệ; xử lý nghiêm, kịp thời, công khai cán bộ, công chức tham nhũng, kể cả người đã nghỉ hưu.</li>
            <li>Kết quả cụ thể (tham chiếu mục 2.1–2.4): xử lý nhiều cán bộ cấp cao; thu hồi tài sản lớn; tăng hiệu quả phát hiện, khởi tố, xét xử án tham nhũng.</li>
            <li>Được Nhân dân đồng tình, củng cố niềm tin vào chế độ và pháp luật.</li>
          </ul>
        </ContentCard>
      </StoryPanel>

      <StoryPanel>
        <ContentCard className="text-left space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold vintage-heading">4.5) Kết luận (Trả lời trực tiếp CQ)</h2>
          <p className="text-lg vintage-text">
            KHÔNG. Một đảng cầm quyền không phải là nguyên nhân dẫn đến tham nhũng ở Việt Nam. Yếu tố quyết định là cơ chế kiểm soát quyền lực, chất lượng pháp luật, phẩm chất cán bộ và năng lực quản trị.
          </p>
        </ContentCard>
      </StoryPanel>
    </PageLayout>
  )
}
