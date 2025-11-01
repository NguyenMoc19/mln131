import React from 'react'
import PageLayout from '../components/PageLayout'
import StoryPanel from '../components/StoryPanel'
import ContentCard from '../components/ContentCard'

export default function TechnicalDesignPage() {
  return (
    <PageLayout>
      <StoryPanel initiallyVisible>
        <ContentCard className="text-left space-y-4">
          <p className="uppercase tracking-[0.3em] text-sm text-amber-700 font-semibold">5) Thiết kế kỹ thuật (Frontend/UX/Data)</p>
          <h1 className="text-3xl md:text-4xl font-black vintage-heading">Thiết kế kỹ thuật (Frontend/UX/Data)</h1>
        </ContentCard>
      </StoryPanel>

      <StoryPanel>
        <ContentCard className="text-left space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold vintage-heading">A) Framework &amp; Công nghệ</h2>
          <ul className="list-disc pl-6 space-y-2 text-lg vintage-text">
            <li>Frontend: React (Vite)</li>
            <li>Animation: Framer Motion, GSAP (scroll/trigger)</li>
            <li>Charts: Chart.js hoặc D3.js cho visualization</li>
            <li>UI: Tailwind CSS (hoặc Material UI)</li>
            <li>Responsive: Mobile-first</li>
          </ul>
        </ContentCard>
      </StoryPanel>

      <StoryPanel>
        <ContentCard className="text-left space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold vintage-heading">B) UX/UI</h2>
          <ul className="list-disc pl-6 space-y-2 text-lg vintage-text">
            <li>Màu sắc: Đỏ – vàng (Đảng, Quốc kỳ) kết hợp xanh (công lý)</li>
            <li>Typography: Font rõ ràng, dễ đọc</li>
            <li>Điều hướng: Navbar cố định + Progress indicator</li>
            <li>Loading: Skeleton cho khối dữ liệu lớn</li>
            <li>Accessibility: WCAG 2.1 AA</li>
          </ul>
        </ContentCard>
      </StoryPanel>

      <StoryPanel>
        <ContentCard className="text-left space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold vintage-heading">C) Tương tác</h2>
          <ul className="list-disc pl-6 space-y-2 text-lg vintage-text">
            <li>Search: theo năm, lĩnh vực</li>
            <li>Filter: theo danh mục thành tựu</li>
            <li>Share: Nút chia sẻ MXH</li>
            <li>Download: Export PDF toàn bộ nội dung</li>
            <li>Comments/Q&A: Module hỏi đáp cho phần CQ</li>
          </ul>
        </ContentCard>
      </StoryPanel>

      <StoryPanel>
        <ContentCard className="text-left space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold vintage-heading">D) Cấu trúc dữ liệu (đã có)</h2>
          <pre className="bg-black/10 border border-amber-700/30 rounded-md p-4 text-sm leading-relaxed overflow-x-auto">
{`src/data/
├─ achievements/
│  ├─ discipline.json
│  ├─ inspection.json
│  └─ prosecution.json
├─ statistics/
│  └─ yearly_comparison.json
├─ cq_answer/
│  ├─ arguments.json
│  └─ evidences.json
└─ references.json`}
          </pre>
        </ContentCard>
      </StoryPanel>
    </PageLayout>
  )
}
