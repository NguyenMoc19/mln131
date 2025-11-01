import React from 'react'
import { NavLink } from 'react-router-dom'
import PageLayout from '../components/PageLayout'
import StoryPanel from '../components/StoryPanel'
import ContentCard from '../components/ContentCard'

const tocItems = [
  { label: 'Trang chủ (Landing)', path: '/' },
  { label: '1) Giới thiệu & Bối cảnh quyết tâm chính trị', path: '/gioi-thieu' },
  { label: '2) Thành tựu nổi bật', path: '/thanh-tuu' },
  { label: '3) Nguyên tắc xử lý & phạm vi', path: '/nguyen-tac' },
  { label: '4) Critical Question (CQ) – Trả lời luận điểm', path: '/critical-question' },
  { label: '5) Thiết kế kỹ thuật (Frontend/UX/Data)', path: '/thiet-ke' },
  { label: '6) Footer – Kết luận & Tài liệu tham khảo', path: '/tai-lieu' },
]

export default function LandingPage() {
  return (
    <PageLayout>
      <StoryPanel initiallyVisible backgroundIndex={0}>
        <ContentCard className="text-left space-y-6">
          <header className="space-y-4">
            <p className="uppercase tracking-[0.4em] text-sm text-amber-700 font-semibold">Trang chủ</p>
            <h1 className="text-4xl md:text-6xl font-black vintage-heading">Không Vùng Cấm – Không Ngoại Lệ</h1>
            <p className="text-xl vintage-text">Slogan chính trên hero, hiển thị cùng hình ảnh biểu trưng công lý.</p>
          </header>
          <section className="space-y-3">
            <h2 className="text-2xl font-bold vintage-heading">Trải nghiệm Timeline</h2>
            <p className="text-lg vintage-text">Timeline tương tác (2013 → 2025) cho phép cuộn qua các giai đoạn, liên kết tới từng section nội dung bên dưới.</p>
          </section>
          <blockquote className="border-l-4 border-amber-700/70 pl-4 italic text-base vintage-subtext">
            Gợi ý dev: Gắn ProgressBar và FixedBackground để tăng cảm giác chiều sâu; sử dụng StoryPanel cho từng mốc năm.
          </blockquote>
        </ContentCard>
      </StoryPanel>

      <StoryPanel backgroundIndex={0}>
        <ContentCard className="text-left space-y-5">
          <h2 className="text-2xl md:text-3xl font-bold vintage-heading">Mục lục</h2>
          <nav className="text-lg vintage-text">
            <ol className="list-decimal pl-6 space-y-2">
              {tocItems.map((item, index) => (
                <li key={item.path}>
                  <NavLink to={item.path} className="text-amber-800 underline-offset-4 hover:underline">
                    {item.label}
                  </NavLink>
                  {index === 1 && (
                    <ol className="list-[lower-alpha] pl-6 mt-2 space-y-1 text-base">
                      <li><NavLink to="/gioi-thieu#hero" className="hover:underline">1.1) Hero / Slogan mở đầu</NavLink></li>
                      <li><NavLink to="/gioi-thieu#quan-diem" className="hover:underline">1.2) Quan điểm của Đảng – Định nghĩa, bản chất</NavLink></li>
                      <li><NavLink to="/gioi-thieu#quyet-tam" className="hover:underline">1.3) Quyết tâm chính trị – 4 mục tiêu chiến lược</NavLink></li>
                    </ol>
                  )}
                  {index === 2 && (
                    <ol className="list-[lower-alpha] pl-6 mt-2 space-y-1 text-base">
                      <li><NavLink to="/thanh-tuu#discipline" className="hover:underline">2.1) Công tác kỷ luật Đảng</NavLink></li>
                      <li><NavLink to="/thanh-tuu#inspection" className="hover:underline">2.2) Công tác thanh tra, kiểm toán</NavLink></li>
                      <li><NavLink to="/thanh-tuu#prosecution" className="hover:underline">2.3) Công tác điều tra, truy tố, xét xử</NavLink></li>
                      <li><NavLink to="/thanh-tuu#recovery" className="hover:underline">2.4) Thu hồi tài sản tham nhũng</NavLink></li>
                    </ol>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        </ContentCard>
      </StoryPanel>
    </PageLayout>
  )
}
