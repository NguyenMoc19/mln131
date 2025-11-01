import React from 'react'
import PageLayout from '../components/PageLayout'
import StoryPanel from '../components/StoryPanel'
import ContentCard from '../components/ContentCard'

export default function AchievementsPage() {
  return (
    <PageLayout>
      <StoryPanel initiallyVisible>
        <ContentCard className="text-left space-y-4">
          <p className="uppercase tracking-[0.3em] text-sm text-amber-700 font-semibold">2) Thành tựu nổi bật</p>
          <h1 className="text-3xl md:text-4xl font-black vintage-heading">Thành tựu nổi bật</h1>
          <blockquote className="border-l-4 border-amber-700/70 pl-4 italic text-base vintage-subtext">
            Dữ liệu đồng bộ với <code>src/data/achievements/*.json</code> và <code>src/data/statistics/yearly_comparison.json</code>.
          </blockquote>
        </ContentCard>
      </StoryPanel>

      <StoryPanel id="discipline">
        <ContentCard className="text-left space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold vintage-heading">2.1) Công tác kỷ luật Đảng</h2>
          <ul className="list-disc pl-6 space-y-3 text-lg vintage-text">
            <li>
              2013–2020:
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Thi hành kỷ luật: 131.000 đảng viên</li>
                <li>
                  110 cán bộ diện Trung ương quản lý bị xử lý, trong đó:
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>27 Ủy viên Trung ương</li>
                    <li>4 Ủy viên Bộ Chính trị</li>
                    <li>30 sĩ quan cấp tướng</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              Năm 2023:
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Kỷ luật 606 tổ chức đảng, 24.162 đảng viên (↑ 12% so với 2022)</li>
                <li>Trong đó 459 đảng viên do tham nhũng</li>
              </ul>
            </li>
            <li>
              Đến 02/2024:
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>105 cán bộ diện Trung ương quản lý</li>
                <li>22 Ủy viên/nguyên Ủy viên Trung ương bị kỷ luật</li>
              </ul>
            </li>
            <li>Điểm đặc biệt: Lần đầu tiên 6 cán bộ bị xử lý do vi phạm kê khai tài sản, thu nhập (minh bạch hóa tài sản).</li>
          </ul>
        </ContentCard>
      </StoryPanel>

      <StoryPanel id="inspection">
        <ContentCard className="text-left space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold vintage-heading">2.2) Công tác thanh tra, kiểm toán</h2>
          <ul className="list-disc pl-6 space-y-3 text-lg vintage-text">
            <li>
              2013–2020:
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Kiến nghị thu hồi: 700.000 tỷ đồng; 20.000 ha đất</li>
                <li>Xử lý: 14.000 tập thể và cá nhân</li>
                <li>Chuyển cơ quan điều tra: 700 vụ việc</li>
              </ul>
            </li>
            <li>
              Năm 2023 (tăng mạnh hiệu quả):
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Kiến nghị thu hồi: 219.000 tỷ đồng (↑ gấp 3 lần so với 2022)</li>
                <li>Xử lý: 7.524 tập thể; 7.944 cá nhân</li>
                <li>Chuyển cơ quan điều tra: 660 vụ việc (↑ 18%)</li>
              </ul>
            </li>
          </ul>
          <blockquote className="border-l-4 border-amber-700/70 pl-4 italic text-base vintage-subtext">
            Ý nghĩa (Tài liệu giảng dạy PCTN): “Ban hành và áp dụng các văn bản pháp luật, đặc biệt là các văn bản để xử lý nghiêm minh hành vi tham nhũng là công cụ hữu hiệu để phòng ngừa và đấu tranh chống tham nhũng.”
          </blockquote>
        </ContentCard>
      </StoryPanel>

      <StoryPanel id="prosecution">
        <ContentCard className="text-left space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold vintage-heading">2.3) Công tác điều tra, truy tố, xét xử</h2>
          <ul className="list-disc pl-6 space-y-3 text-lg vintage-text">
            <li>
              2012–2022:
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Khởi tố, điều tra, xét xử: gần 16.000 vụ án; hơn 30.300 bị cáo</li>
              </ul>
            </li>
            <li>
              Năm 2023 (tăng mạnh):
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Khởi tố: 4.500 vụ / 9.370 bị can (↑ 46% số vụ)</li>
                <li>Án tham nhũng: 899 vụ / 2.446 bị can (↑ gần 2 lần)</li>
              </ul>
            </li>
            <li>
              Vai trò Ban Chỉ đạo Trung ương:
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>977 vụ án/vụ việc vào diện theo dõi</li>
                <li>180 vụ án và 133 vụ việc do Ban Chỉ đạo trực tiếp chỉ đạo</li>
              </ul>
            </li>
          </ul>
        </ContentCard>
      </StoryPanel>

      <StoryPanel id="recovery">
        <ContentCard className="text-left space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold vintage-heading">2.4) Thu hồi tài sản tham nhũng</h2>
          <ul className="list-disc pl-6 space-y-3 text-lg vintage-text">
            <li>Tỷ lệ thu hồi tăng từ &lt;10% (2013) lên 34,7% (2023).</li>
            <li>Các vụ án do Ban Chỉ đạo theo dõi: thu hồi 50.000 tỷ đồng, đạt tỷ lệ 41,3%.</li>
            <li>Ý nghĩa: Bảo vệ tài sản Nhà nước, lợi ích người dân; khẳng định quyết tâm “không để lọt tội phạm, không để oan người vô tội, không để thất thoát tài sản”.</li>
          </ul>
        </ContentCard>
      </StoryPanel>
    </PageLayout>
  )
}
