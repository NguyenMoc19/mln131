import React from 'react'
import FixedBackground from '../components/FixedBackground'
import ProgressBar from '../components/ProgressBar'
import StoryPanel from '../components/StoryPanel'
import ContentCard from '../components/ContentCard'
import StatBox from '../components/StatBox'
import TimelineItem from '../components/TimelineItem'
import Navbar from '../components/Navbar'
import ScrollToTop from '../components/ScrollToTop'
import Tabs from '../components/Tabs'
// Data imports
import disciplineData from '../data/achievements/discipline.json'
import inspectionData from '../data/achievements/inspection.json'
import prosecutionData from '../data/achievements/prosecution.json'
import yearlyStats from '../data/statistics/yearly_comparison.json'
import cqArguments from '../data/cq_answer/arguments.json'
import cqEvidences from '../data/cq_answer/evidences.json'
import references from '../data/references.json'
import {
  Scale,
  ArrowDown,
  Shield,
  AlertTriangle,
  CheckCircle2,
  Target,
  Quote,
  Landmark,
  Building2,
  Car,
  Hospital,
  TrendingUp,
  XCircle,
  Check,
  Users,
  ClipboardList,
  Award,
  Eye,
  Handshake,
  FileText,
  ShieldCheck,
  Building,
  Network,
  Users2,
  Megaphone,
  Newspaper,
  Gavel,
  Globe,
  Leaf,
  Quote as QuoteIcon,
  BookOpen,
  ListChecks,
  Layers3,
  FolderKanban,
  BarChart3,
} from 'lucide-react'

export default function Story() {
  return (
    <div className="relative">
      {/* <Navbar /> */}
      <FixedBackground imageUrl={undefined} />
      <ProgressBar />
      <div className="pointer-events-none fixed inset-0 z-0 [background:radial-gradient(120%_40%_at_50%_0%,rgba(0,0,0,0.35),transparent_60%),radial-gradient(40%_50%_at_100%_0%,rgba(0,0,0,0.25),transparent_60%),radial-gradient(40%_50%_at_0%_0%,rgba(0,0,0,0.25),transparent_60%)]" />

  <div className="content-wrapper relative z-[1] pt-16">
        {/* Hero */}
        <StoryPanel initiallyVisible>
          <div className="text-center text-white">
            <h1 className="text-xl md:text-8xl font-black mb-6 leading-tight font-playfair drop-shadow-2xl">
              KHÔNG VÙNG CẤM
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold mb-8" style={{ color: '#D2691E' }}>
              KHÔNG NGOẠI LỆ
            </h2>
            <p className="text-2xl md:text-3xl max-w-3xl mx-auto mb-12">
              Câu chuyện về quyết tâm chống tham nhũng của Việt Nam
            </p>
          </div>
        </StoryPanel>

        {/* Panel 1.5: Quan điểm & định nghĩa */}
        <StoryPanel>
          <ContentCard>
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-center vintage-heading">Quan điểm của Đảng</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg vintage-text">
              <div>
                <h3 className="text-2xl font-bold mb-3 vintage-accent">Tham nhũng là gì?</h3>
                <p className="mb-3">Theo Luật Phòng, chống tham nhũng 2005 (khoản 2 Điều 1): "Tham nhũng là hành vi của người có chức vụ, quyền hạn đã lợi dụng chức vụ, quyền hạn đó vì vụ lợi".</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Hành vi của người có chức vụ, quyền hạn</li>
                  <li>Lợi dụng chức vụ, quyền hạn làm trái pháp luật</li>
                  <li>Động cơ vì vụ lợi</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 vintage-accent">Bản chất & kiểm soát quyền lực</h3>
                <p className="mb-3">Tham nhũng là "khuyết tật bẩm sinh" của quyền lực; ở đâu có quyền lực, ở đó có nguy cơ lạm dụng.</p>
                <div className="p-4 rounded-lg" style={{ background: 'rgba(139, 69, 19, 0.12)', border: '2px solid rgba(139, 69, 19, 0.35)' }}>
                  <p className="italic">"{cqEvidences.quotes[0].content}"</p>
                  <p className="text-sm mt-2 vintage-subtext">- {cqEvidences.quotes[0].author}</p>
                </div>
              </div>
            </div>
          </ContentCard>
        </StoryPanel>

        {/* Panel 1: The Beginning */}
        <StoryPanel>
          <ContentCard>
            <h2 className="text-5xl md:text-7xl font-black mb-8 vintage-heading">Năm 2013...</h2>
            <div className="text-2xl md:text-3xl leading-relaxed space-y-6 vintage-text">
              <p>Ngày 1 tháng 2 năm 2013, một quyết định lịch sử được đưa ra.</p>
              <p className="font-semibold vintage-heading">Ban Chỉ đạo Trung ương về phòng chống tham nhũng được thành lập.</p>
              <p>
                Dưới sự lãnh đạo của <span className="vintage-accent">Tổng Bí thư Nguyễn Phú Trọng</span>, một cuộc chiến mới bắt đầu.
              </p>
            </div>
          </ContentCard>
        </StoryPanel>

        {/* Panel X: Thành tựu nổi bật (chi tiết) */}
        <StoryPanel>
          <ContentCard>
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-center vintage-heading">Thành tựu nổi bật</h2>
            <Tabs
              initial={0}
              tabs={[
                {
                  id: 'discipline',
                  label: 'Kỷ luật Đảng',
                  icon: Gavel,
                  content: (
                    <div className="space-y-8">
                      {disciplineData.periods.map((p, idx) => (
                        <div key={idx}>
                          <h3 className="text-2xl font-bold vintage-heading mb-4">{p.label}</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {p.items.map((it, i) => (
                              <StatBox key={i}>
                                <div className="text-4xl font-black vintage-number mb-2">{it.value}</div>
                                <p className="vintage-text">{it.label}</p>
                                {it.note ? <p className="vintage-accent font-semibold mt-2">{it.note}</p> : null}
                              </StatBox>
                            ))}
                          </div>
                        </div>
                      ))}
                      {disciplineData.highlights?.length ? (
                        <div className="text-center text-base vintage-subtext">{disciplineData.highlights[0]}</div>
                      ) : null}
                    </div>
                  ),
                },
                {
                  id: 'inspection',
                  label: 'Thanh tra, kiểm toán',
                  icon: ClipboardList,
                  content: (
                    <div className="space-y-8">
                      {inspectionData.periods.map((p, idx) => (
                        <div key={idx}>
                          <h3 className="text-2xl font-bold vintage-heading mb-4">{p.label}</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {p.items.map((it, i) => (
                              <StatBox key={i}>
                                <div className="text-3xl font-black vintage-number mb-2">{it.value}</div>
                                <p className="vintage-text">{it.label}</p>
                                {it.note ? <p className="vintage-accent font-semibold mt-2">{it.note}</p> : null}
                              </StatBox>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ),
                },
                {
                  id: 'prosecution',
                  label: 'Điều tra, truy tố, xét xử',
                  icon: ShieldCheck,
                  content: (
                    <div className="space-y-8">
                      {prosecutionData.periods.map((p, idx) => (
                        <div key={idx}>
                          <h3 className="text-2xl font-bold vintage-heading mb-4">{p.label}</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {p.items.map((it, i) => (
                              <StatBox key={i}>
                                <div className="text-3xl font-black vintage-number mb-2">{it.value}</div>
                                <p className="vintage-text">{it.label}</p>
                                {it.note ? <p className="vintage-accent font-semibold mt-2">{it.note}</p> : null}
                              </StatBox>
                            ))}
                          </div>
                        </div>
                      ))}
                      <div>
                        <h3 className="text-2xl font-bold vintage-heading mb-4">Theo dõi của Ban Chỉ đạo TW</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          {prosecutionData.tracking.map((t, i) => (
                            <StatBox key={i}>
                              <div className="text-4xl font-black vintage-number mb-2">{t.value}</div>
                              <p className="vintage-text">{t.label}</p>
                            </StatBox>
                          ))}
                        </div>
                      </div>
                    </div>
                  ),
                },
                {
                  id: 'recovery',
                  label: 'Thu hồi tài sản',
                  icon: TrendingUp,
                  content: (
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-2xl font-bold vintage-heading mb-4">Tỷ lệ thu hồi</h3>
                        <div className="space-y-8">
                          <div>
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-xl font-bold vintage-text">{yearlyStats.asset_recovery.start.year}</span>
                              <span className="text-3xl font-black" style={{ color: '#8B0000' }}>{yearlyStats.asset_recovery.start.label}</span>
                            </div>
                            <div className="w-full h-4 rounded-full overflow-hidden" style={{ background: 'rgba(139, 69, 19, 0.3)' }}>
                              <div className="h-full rounded-full" style={{ width: `${Math.min(100, yearlyStats.asset_recovery.start.rate)}%`, background: '#8B0000' }} />
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-xl font-bold vintage-text">{yearlyStats.asset_recovery.end.year}</span>
                              <span className="text-3xl font-black" style={{ color: '#556B2F' }}>{yearlyStats.asset_recovery.end.label}</span>
                            </div>
                            <div className="w-full h-4 rounded-full overflow-hidden" style={{ background: 'rgba(139, 69, 19, 0.3)' }}>
                              <div className="h-full rounded-full" style={{ width: `${Math.min(100, yearlyStats.asset_recovery.end.rate)}%`, background: '#556B2F' }} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="stat-box text-center">
                        <p className="text-base vintage-subtext mb-2">Các vụ án do Ban Chỉ đạo theo dõi</p>
                        <p className="text-5xl font-black vintage-number mb-2">{yearlyStats.bcd_tracking.amount}</p>
                        <p className="text-xl vintage-accent font-bold">Đạt {yearlyStats.bcd_tracking.rate}%</p>
                      </div>
                    </div>
                  ),
                },
              ]}
            />
          </ContentCard>
        </StoryPanel>

        {/* Panel X.5: Đặc điểm hành vi tham nhũng */}
        <StoryPanel>
          <ContentCard>
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-center vintage-heading">Đặc điểm hành vi tham nhũng</h2>
            <div className="max-w-4xl mx-auto text-xl vintage-text">
              <ol className="list-decimal pl-6 space-y-3">
                <li>Hành vi của người có chức vụ, quyền hạn</li>
                <li>Lợi dụng chức vụ, quyền hạn làm trái pháp luật để mưu lợi</li>
                <li>Động cơ vì vụ lợi, không xuất phát từ nhiệm vụ công vụ</li>
              </ol>
            </div>
          </ContentCard>
        </StoryPanel>

        {/* Panel 2: The Promise */}
        <StoryPanel>
          <ContentCard className="text-center">
            <div className="text-vintage-brown mx-auto w-fit opacity-60">
              <Quote className="w-16 h-16" />
            </div>
            <blockquote className="text-3xl md:text-5xl font-bold leading-relaxed my-8 vintage-heading">
              Kiên quyết, kiên trì,<br />liên tục, bền bỉ
            </blockquote>
            <div className="mx-auto w-fit rotate-180 text-vintage-brown opacity-60">
              <Quote className="w-16 h-16" />
            </div>
            <p className="text-xl mt-8 vintage-accent">- Tổng Bí thư Nguyễn Phú Trọng</p>
            <div className="mt-12 text-2xl vintage-text">
              <p>Đây không chỉ là lời hứa.</p>
              <p className="mt-4 vintage-heading font-semibold text-3xl">Đây là cam kết.</p>
            </div>
          </ContentCard>
        </StoryPanel>

        {/* Panel 3: Four Goals */}
        <StoryPanel>
          <ContentCard>
            <h2 className="text-4xl md:text-6xl font-black mb-12 text-center vintage-heading">Bốn mục tiêu được đặt ra</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <StatBox>
                <Shield className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-3xl font-bold mb-3 vintage-accent">KHÔNG THỂ</h3>
                <p className="text-lg vintage-subtext">Tạo môi trường không thể tham nhũng</p>
              </StatBox>
              <StatBox>
                <AlertTriangle className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-3xl font-bold mb-3 vintage-accent">KHÔNG DÁM</h3>
                <p className="text-lg vintage-subtext">Răn đe nghiêm khắc với kẻ tham nhũng</p>
              </StatBox>
              <StatBox>
                <CheckCircle2 className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-3xl font-bold mb-3 vintage-accent">KHÔNG MUỐN</h3>
                <p className="text-lg vintage-subtext">Nâng cao ý thức đạo đức, liêm chính</p>
              </StatBox>
              <StatBox>
                <Target className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-3xl font-bold mb-3 vintage-accent">KHÔNG CẦN</h3>
                <p className="text-lg vintage-subtext">Đảm bảo sinh hoạt đầy đủ cho cán bộ</p>
              </StatBox>
            </div>
          </ContentCard>
        </StoryPanel>

        {/* Panel 4: Timeline */}
        <StoryPanel>
          <ContentCard>
            <h2 className="text-5xl md:text-6xl font-black mb-12 vintage-heading">Hành trình bắt đầu</h2>
            <div className="space-y-8">
              <TimelineItem year="2013">
                Ban Chỉ đạo được thành lập. Cuộc chiến chống tham nhũng chính thức khởi động.
              </TimelineItem>
              <TimelineItem year="2016">
                Chiến dịch "Không vùng cấm" bắt đầu. Những cái tên lớn đầu tiên ngã xuống.
              </TimelineItem>
              <TimelineItem year="2020">
                Một mốc son. Hơn 131.000 đảng viên bị kỷ luật. Không ai được ngoại lệ.
              </TimelineItem>
              <TimelineItem year="2023" showLine={false}>
                Cuộc chiến tiếp tục. Mạnh mẽ hơn. Quyết liệt hơn.
              </TimelineItem>
            </div>
          </ContentCard>
        </StoryPanel>

        {/* Panel 5: Big Numbers */}
        <StoryPanel>
          <ContentCard>
            <h2 className="text-5xl md:text-7xl font-black mb-8 text-center vintage-heading">Con số nói lên tất cả</h2>
            <p className="text-2xl text-center vintage-subtext mb-12">Từ 2013 đến 2020</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <StatBox>
                <div className="text-6xl font-black mb-4 vintage-number">131.000</div>
                <p className="text-xl vintage-text">Đảng viên bị kỷ luật</p>
              </StatBox>
              <StatBox>
                <div className="text-6xl font-black mb-4 vintage-number">110</div>
                <p className="text-xl vintage-text">Cán bộ cấp TW quản lý</p>
              </StatBox>
              <StatBox>
                <div className="text-6xl font-black mb-4 vintage-number">30</div>
                <p className="text-xl vintage-text">Sĩ quan cấp tướng</p>
              </StatBox>
            </div>
            <div className="text-3xl text-center mt-12 font-bold vintage-heading">Không vùng cấm. Không ngoại lệ.</div>
          </ContentCard>
        </StoryPanel>

        {/* Panel 6: Year 2023 */}
        <StoryPanel>
          <ContentCard variant="aged">
            <h2 className="text-6xl md:text-8xl font-black mb-8 text-center vintage-heading">2023</h2>
            <p className="text-3xl text-center mb-12 vintage-text">Một năm đột phá</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <StatBox>
                <div className="text-5xl font-black mb-4 vintage-number">24.162</div>
                <p className="text-lg vintage-text mb-2">Đảng viên bị kỷ luật</p>
                <p className="vintage-accent font-semibold">↑ Tăng 12% so với 2022</p>
              </StatBox>
              <StatBox>
                <div className="text-5xl font-black mb-4 vintage-number">459</div>
                <p className="text-lg vintage-text mb-2">Trường hợp do tham nhũng</p>
                <p className="vintage-accent font-semibold">Xử lý nghiêm minh</p>
              </StatBox>
              <StatBox>
                <div className="text-5xl font-black mb-4 vintage-number">219.000 tỷ</div>
                <p className="text-lg vintage-text mb-2">Thu hồi được</p>
                <p className="vintage-accent font-semibold">↑ Gấp 3 lần năm 2022</p>
              </StatBox>
              <StatBox>
                <div className="text-5xl font-black mb-4 vintage-number">899</div>
                <p className="text-lg vintage-text mb-2">Vụ án tham nhũng</p>
                <p className="vintage-accent font-semibold">↑ Gần gấp đôi năm trước</p>
              </StatBox>
            </div>
          </ContentCard>
        </StoryPanel>

        {/* Panel 7: No Forbidden Zone */}
        <StoryPanel>
          <ContentCard>
            <h2 className="text-5xl md:text-7xl font-black mb-12 text-center vintage-heading">Không có vùng cấm</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatBox>
                <Landmark className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2 vintage-heading">Ngân hàng</h3>
                <p className="vintage-subtext">Từ cơ sở đến cấp cao</p>
              </StatBox>
              <StatBox>
                <Building2 className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2 vintage-heading">Đất đai</h3>
                <p className="vintage-subtext">Xử lý nghiêm khắc</p>
              </StatBox>
              <StatBox>
                <Car className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2 vintage-heading">Giao thông</h3>
                <p className="vintage-subtext">Các dự án lớn</p>
              </StatBox>
              <StatBox>
                <Hospital className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2 vintage-heading">Y tế</h3>
                <p className="vintage-subtext">Mua sắm thiết bị</p>
              </StatBox>
            </div>
            <div className="text-3xl text-center mt-12 vintage-heading font-bold">Bất kể người đó là ai</div>
          </ContentCard>
        </StoryPanel>

        {/* Panel 8: Asset Recovery */}
        <StoryPanel>
          <ContentCard>
            <h2 className="text-5xl md:text-6xl font-black mb-12 text-center vintage-heading">Thu hồi tài sản</h2>
            <div className="space-y-12">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-3xl font-bold vintage-text">2013</span>
                  <span className="text-4xl font-black" style={{ color: '#8B0000' }}>&lt;10%</span>
                </div>
                <div className="w-full h-6 rounded-full overflow-hidden" style={{ background: 'rgba(139, 69, 19, 0.3)' }}>
                  <div className="h-full rounded-full transition-all duration-1000" style={{ width: '10%', background: '#8B0000' }} />
                </div>
              </div>

              <div className="text-3xl text-center vintage-subtext py-8">↓ Nỗ lực không ngừng ↓</div>

              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-3xl font-bold vintage-text">2023</span>
                  <span className="text-4xl font-black" style={{ color: '#556B2F' }}>34.7%</span>
                </div>
                <div className="w-full h-6 rounded-full overflow-hidden" style={{ background: 'rgba(139, 69, 19, 0.3)' }}>
                  <div className="h-full rounded-full transition-all duration-1000" style={{ width: '34.7%', background: '#556B2F' }} />
                </div>
              </div>
            </div>

            <div className="mt-12 text-center stat-box">
              <p className="text-xl vintage-subtext mb-4">Vụ án do Ban Chỉ đạo theo dõi</p>
              <p className="text-6xl font-black vintage-number mb-4">50.000 tỷ</p>
              <p className="text-2xl vintage-accent font-bold">Đạt 41.3%</p>
            </div>
          </ContentCard>
        </StoryPanel>

        {/* Panel 9: The Critical Question */}
        <StoryPanel>
          <ContentCard variant="aged" className="text-center">
            <h2 className="text-5xl md:text-7xl font-black mb-12 vintage-heading">Câu hỏi quan trọng</h2>
            <div className="text-3xl md:text-4xl mb-12 leading-relaxed vintage-text">
              Liệu có phải một đảng cầm quyền<br />là nguyên nhân dẫn đến tham nhũng?
            </div>
            <div className="text-2xl vintage-accent font-semibold">Hãy cùng tìm hiểu sự thật...</div>
          </ContentCard>
        </StoryPanel>

        {/* Panel 10: Wrong Arguments */}
        <StoryPanel>
          <ContentCard>
            <h2 className="text-4xl md:text-6xl font-black mb-8 text-center vintage-heading">Luận điểm sai trái</h2>
            <div className="space-y-6">
              <StatBox className="wrong-box">
                <XCircle className="w-12 h-12 mx-auto mb-4" />
                <p className="text-2xl vintage-text">Tham nhũng là "căn bệnh kinh niên" của chế độ xã hội chủ nghĩa</p>
              </StatBox>
              <StatBox className="wrong-box">
                <XCircle className="w-12 h-12 mx-auto mb-4" />
                <p className="text-2xl vintage-text">Một đảng cầm quyền tất yếu dẫn đến tham nhũng</p>
              </StatBox>
              <StatBox className="wrong-box">
                <XCircle className="w-12 h-12 mx-auto mb-4" />
                <p className="text-2xl vintage-text">Chế độ đa đảng là "phép màu" chống tham nhũng</p>
              </StatBox>
            </div>
          </ContentCard>
        </StoryPanel>

        {/* Panel 11: Scientific Truth */}
        <StoryPanel>
          <ContentCard>
            <h2 className="text-4xl md:text-6xl font-black mb-8 text-center vintage-heading">Sự thật khoa học</h2>
            <div className="space-y-6">
              <StatBox className="right-box">
                <Check className="w-12 h-12 mx-auto mb-4" />
                <p className="text-2xl vintage-heading mb-4">Tham nhũng là "khuyết tật bẩm sinh" của quyền lực</p>
                <p className="text-lg vintage-subtext">Ở đâu có quyền lực, ở đó có nguy cơ tham nhũng khi bị lạm dụng</p>
              </StatBox>
              <StatBox className="right-box">
                <Check className="w-12 h-12 mx-auto mb-4" />
                <p className="text-2xl vintage-heading mb-4">Nguyên nhân: lòng tham của con người</p>
                <p className="text-lg vintage-subtext">Không phụ thuộc vào thể chế chính trị hay chế độ xã hội</p>
              </StatBox>
              <StatBox className="right-box">
                <Check className="w-12 h-12 mx-auto mb-4" />
                <p className="text-2xl vintage-heading mb-4">Hiệu quả phụ thuộc vào nhiều yếu tố</p>
                <p className="text-lg vintage-subtext">Pháp luật, năng lực quản trị, phẩm chất cán bộ, cơ chế kiểm soát</p>
              </StatBox>
            </div>
          </ContentCard>
        </StoryPanel>

        {/* Panel 12: CPI Evidence (updated 2023) */}
        <StoryPanel>
          <ContentCard>
            <h2 className="text-5xl md:text-7xl font-black mb-12 text-center vintage-heading">Bằng chứng thực tế</h2>
            <h3 className="text-3xl font-bold mb-8 text-center vintage-text">Chỉ số CPI 2023</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <StatBox>
                <div className="text-5xl font-black mb-4 vintage-number">41/100</div>
                <p className="text-xl vintage-text">Điểm CPI của Việt Nam</p>
              </StatBox>
              <StatBox>
                <div className="text-5xl font-black mb-4 vintage-number">83/180</div>
                <p className="text-xl vintage-text">Xếp hạng toàn cầu</p>
              </StatBox>
              <StatBox>
                <div className="text-5xl font-black mb-4 vintage-number">97</div>
                <p className="text-xl vintage-text">Quốc gia xếp dưới Việt Nam</p>
              </StatBox>
            </div>
            <div className="text-3xl text-center font-bold vintage-accent">Chế độ đa đảng KHÔNG phải "phép màu"</div>
          </ContentCard>
        </StoryPanel>

        {/* Panel 12.5: Số liệu Ban Chỉ đạo TW */}
        <StoryPanel>
          <ContentCard>
            <h2 className="text-4xl md:text-6xl font-black mb-10 text-center vintage-heading">Theo dõi, chỉ đạo của Ban Chỉ đạo</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <StatBox>
                <div className="text-5xl font-black mb-4 vintage-number">977</div>
                <p className="text-xl vintage-text">Vụ án/vụ việc vào diện theo dõi</p>
              </StatBox>
              <StatBox>
                <div className="text-5xl font-black mb-4 vintage-number">180</div>
                <p className="text-xl vintage-text">Vụ án trực tiếp chỉ đạo</p>
              </StatBox>
              <StatBox>
                <div className="text-5xl font-black mb-4 vintage-number">133</div>
                <p className="text-xl vintage-text">Vụ việc trực tiếp chỉ đạo</p>
              </StatBox>
            </div>
          </ContentCard>
        </StoryPanel>

        {/* Panel 13: Party Commitment */}
        <StoryPanel>
          <ContentCard variant="aged">
            <h2 className="text-5xl md:text-7xl font-black mb-12 text-center vintage-heading">Cam kết của Đảng</h2>
            <div className="space-y-8 text-xl md:text-2xl leading-relaxed vintage-text">
              <p>
                Đảng coi tham nhũng là <span className="font-bold vintage-accent">"giặc nội xâm"</span>, một trong 4 nguy cơ đe dọa sự tồn vong của chế độ
              </p>
              <div className="my-12 p-8 rounded-xl" style={{ background: 'rgba(139, 69, 19, 0.15)', border: '2px solid rgba(139, 69, 19, 0.4)' }}>
                <p className="italic text-center">
                  "Quan liêu, tham nhũng, xa rời Nhân dân sẽ dẫn đến những tổn thất khôn lường đối với vận mệnh của đất nước, của chế độ XHCN và của Đảng"
                </p>
                <p className="text-center mt-4 vintage-subtext">- Cương lĩnh 2011</p>
              </div>
              <p className="text-center text-3xl font-bold vintage-heading">
                Phòng chống tham nhũng là<br />
                <span className="vintage-accent">"mệnh lệnh sống còn"</span>
              </p>
            </div>
          </ContentCard>
        </StoryPanel>

        {/* Panel 14: Proof by Action */}
        <StoryPanel>
          <ContentCard>
            <h2 className="text-5xl md:text-7xl font-black mb-12 text-center vintage-heading">Chứng minh bằng hành động</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <StatBox>
                <Shield className="w-16 h-16 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4 vintage-heading">Xử lý nghiêm</h3>
                <p className="text-lg vintage-text">Ủy viên Bộ Chính trị, Bí thư tỉnh ủy, Bộ trưởng, Tướng lĩnh</p>
              </StatBox>
              <StatBox>
                <Scale className="w-16 h-16 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4 vintage-heading">Công khai minh bạch</h3>
                <p className="text-lg vintage-text">"Ta đánh ta" nhưng đúng pháp luật, nghiêm minh và nhân văn</p>
              </StatBox>
              <StatBox>
                <TrendingUp className="w-16 h-16 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4 vintage-heading">Kết quả tăng mạnh</h3>
                <p className="text-lg vintage-text">Thu hồi tài sản và xử lý tăng đáng kể</p>
              </StatBox>
            </div>
          </ContentCard>
        </StoryPanel>

        {/* Panel 15: Solutions */}
        <StoryPanel>
          <ContentCard>
            <h2 className="text-5xl md:text-7xl font-black mb-12 text-center vintage-heading">6 nhiệm vụ then chốt</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <StatBox>
                <Users className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 vintage-accent">Thống nhất nhận thức</h3>
                <p className="vintage-text">Trách nhiệm người đứng đầu</p>
              </StatBox>
              <StatBox>
                <ClipboardList className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 vintage-accent">Hoàn thiện pháp luật</h3>
                <p className="vintage-text">Quy định đồng bộ, chặt chẽ</p>
              </StatBox>
              <StatBox>
                <Award className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 vintage-accent">Xây dựng đội ngũ</h3>
                <p className="vintage-text">Cán bộ liêm chính, trong sạch</p>
              </StatBox>
              <StatBox>
                <Eye className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 vintage-accent">Công khai minh bạch</h3>
                <p className="vintage-text">Kiểm soát tài sản, thu nhập</p>
              </StatBox>
              <StatBox>
                <Handshake className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 vintage-accent">Phối hợp chặt chẽ</h3>
                <p className="vintage-text">Các cơ quan làm việc đồng bộ</p>
              </StatBox>
              <StatBox>
                <TrendingUp className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 vintage-accent">Rút kinh nghiệm</h3>
                <p className="vintage-text">Sơ kết, cải tiến liên tục</p>
              </StatBox>
            </div>
          </ContentCard>
        </StoryPanel>

        {/* Panel 16: Conclusion */}
        <StoryPanel>
          <ContentCard variant="aged" className="text-center">
            <Scale className="w-24 h-24 mx-auto mb-8" />
            <h2 className="text-5xl md:text-7xl font-black mb-12 vintage-heading">Kết luận</h2>
            <div className="text-2xl md:text-3xl leading-relaxed space-y-8 vintage-text">
              <p>Thành tựu chống tham nhũng là minh chứng cho quyết tâm chính trị.</p>
              <p>Là minh chứng cho năng lực lãnh đạo của Đảng.</p>
              <p>Là minh chứng cho niềm tin của nhân dân.</p>
              <div className="py-8">
                <p className="text-4xl font-black vintage-heading">
                  Kiên quyết, kiên trì,<br />liên tục, bền bỉ
                </p>
              </div>
            </div>
          </ContentCard>
        </StoryPanel>

        {/* Panel 17: Trả lời trực tiếp CQ */}
        <StoryPanel>
          <ContentCard className="text-center">
            <h2 className="text-4xl md:text-6xl font-black mb-8 vintage-heading">Trả lời câu hỏi quan trọng</h2>
            <p className="text-2xl md:text-3xl vintage-text mb-6">Liệu một đảng cầm quyền là nguyên nhân dẫn đến tham nhũng ở Việt Nam?</p>
            <div className="py-6">
              <div className="text-6xl md:text-7xl font-black vintage-number mb-4" style={{ color: '#8B0000' }}>KHÔNG!</div>
              <p className="text-xl md:text-2xl vintage-subtext">Một đảng cầm quyền KHÔNG PHẢI là nguyên nhân dẫn đến tham nhũng.</p>
            </div>
            <div className="text-left mx-auto max-w-4xl mt-8 space-y-3 text-lg md:text-xl vintage-text">
              <p>1) Lý luận: Tham nhũng là "khuyết tật bẩm sinh" của quyền lực, không phụ thuộc số lượng đảng.</p>
              <p>2) Thực tiễn: Việt Nam đạt 41/100 điểm CPI, xếp 83/180; có 97 quốc gia xếp dưới.</p>
              <p>3) Kết quả: Hàng trăm cán bộ cấp cao bị xử lý, thu hồi hàng trăm nghìn tỷ đồng.</p>
              <p>4) Bản chất: Yếu tố quyết định là kiểm soát quyền lực, pháp luật, phẩm chất cán bộ, quản trị nhà nước.</p>
            </div>
          </ContentCard>
        </StoryPanel>

        {/* Combined Panel: Tổng quan & dữ liệu (giảm scroll) */}
        <StoryPanel>
          <ContentCard>
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-center vintage-heading">Tổng quan & dữ liệu</h2>
            <Tabs
              initial={0}
              tabs={[
                {
                  id: 'legal',
                  label: 'Khung pháp lý',
                  icon: FileText,
                  content: (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <StatBox>
                        <FileText className="w-12 h-12 mx-auto mb-3" />
                        <h3 className="font-bold vintage-accent">Luật PCTN 2018</h3>
                        <p className="vintage-text">Mở rộng đối tượng, xung đột lợi ích, kiểm soát tài sản, thu nhập</p>
                      </StatBox>
                      <StatBox>
                        <ShieldCheck className="w-12 h-12 mx-auto mb-3" />
                        <h3 className="font-bold vintage-accent">Nghị định 130/2020</h3>
                        <p className="vintage-text">Cơ chế kiểm soát tài sản, thu nhập người có chức vụ, quyền hạn</p>
                      </StatBox>
                      <StatBox>
                        <Gavel className="w-12 h-12 mx-auto mb-3" />
                        <h3 className="font-bold vintage-accent">Quy tắc ứng xử</h3>
                        <p className="vintage-text">Phòng ngừa xung đột lợi ích, quà tặng, chuyển đổi vị trí công tác</p>
                      </StatBox>
                      <StatBox>
                        <Building className="w-12 h-12 mx-auto mb-3" />
                        <h3 className="font-bold vintage-accent">Ban chỉ đạo các cấp</h3>
                        <p className="vintage-text">Tăng cường chỉ đạo đến địa phương, xử lý cả "tham nhũng, tiêu cực"</p>
                      </StatBox>
                      <StatBox>
                        <Network className="w-12 h-12 mx-auto mb-3" />
                        <h3 className="font-bold vintage-accent">Đấu thầu qua mạng</h3>
                        <p className="vintage-text">Muasamcong, công khai thủ tục, giảm tiếp xúc, giảm rủi ro</p>
                      </StatBox>
                      <StatBox>
                        <Users2 className="w-12 h-12 mx-auto mb-3" />
                        <h3 className="font-bold vintage-accent">Thanh tra, kiểm tra</h3>
                        <p className="vintage-text">Phối hợp thanh tra, kiểm toán, công an, kiểm sát, tòa án</p>
                      </StatBox>
                    </div>
                  ),
                },
                {
                  id: 'strategy',
                  label: '4 KHÔNG & 6 nhiệm vụ',
                  icon: ListChecks,
                  content: (
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-2xl font-bold vintage-heading mb-4">Bốn mục tiêu "4 KHÔNG"</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <StatBox>
                            <Shield className="w-12 h-12 mx-auto mb-3" />
                            <h4 className="vintage-accent font-bold">KHÔNG THỂ</h4>
                            <p className="vintage-subtext">Hoàn thiện thể chế, chặn lỗ hổng</p>
                          </StatBox>
                          <StatBox>
                            <AlertTriangle className="w-12 h-12 mx-auto mb-3" />
                            <h4 className="vintage-accent font-bold">KHÔNG DÁM</h4>
                            <p className="vintage-subtext">Xử lý nghiêm minh, răn đe</p>
                          </StatBox>
                          <StatBox>
                            <CheckCircle2 className="w-12 h-12 mx-auto mb-3" />
                            <h4 className="vintage-accent font-bold">KHÔNG MUỐN</h4>
                            <p className="vintage-subtext">Đạo đức, liêm chính</p>
                          </StatBox>
                          <StatBox>
                            <Target className="w-12 h-12 mx-auto mb-3" />
                            <h4 className="vintage-accent font-bold">KHÔNG CẦN</h4>
                            <p className="vintage-subtext">Đảm bảo đời sống, thu nhập</p>
                          </StatBox>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold vintage-heading mb-4">Sáu nhiệm vụ then chốt</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          <StatBox><Users className="w-10 h-10 mx-auto mb-2" /><h4 className="vintage-accent font-bold">Nhận thức</h4><p className="vintage-text">Trách nhiệm người đứng đầu</p></StatBox>
                          <StatBox><ClipboardList className="w-10 h-10 mx-auto mb-2" /><h4 className="vintage-accent font-bold">Pháp luật</h4><p className="vintage-text">Đồng bộ, chặt chẽ</p></StatBox>
                          <StatBox><Award className="w-10 h-10 mx-auto mb-2" /><h4 className="vintage-accent font-bold">Đội ngũ</h4><p className="vintage-text">Liêm chính, trong sạch</p></StatBox>
                          <StatBox><Eye className="w-10 h-10 mx-auto mb-2" /><h4 className="vintage-accent font-bold">Minh bạch</h4><p className="vintage-text">Kiểm soát tài sản</p></StatBox>
                          <StatBox><Handshake className="w-10 h-10 mx-auto mb-2" /><h4 className="vintage-accent font-bold">Phối hợp</h4><p className="vintage-text">Đồng bộ cơ quan</p></StatBox>
                          <StatBox><TrendingUp className="w-10 h-10 mx-auto mb-2" /><h4 className="vintage-accent font-bold">Rút kinh nghiệm</h4><p className="vintage-text">Cải tiến liên tục</p></StatBox>
                        </div>
                      </div>
                    </div>
                  ),
                },
                {
                  id: 'achievements',
                  label: 'Thành tựu & số liệu',
                  icon: BarChart3,
                  content: (
                    <div className="space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <StatBox><div className="text-5xl font-black vintage-number mb-2">131.000</div><p className="vintage-text">Kỷ luật đảng viên (2013–2020)</p></StatBox>
                        <StatBox><div className="text-5xl font-black vintage-number mb-2">219.000 tỷ</div><p className="vintage-text">Kiến nghị thu hồi (2023)</p></StatBox>
                        <StatBox><div className="text-5xl font-black vintage-number mb-2">899 vụ</div><p className="vintage-text">Án tham nhũng (2023)</p></StatBox>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <StatBox><div className="text-4xl font-black vintage-number mb-2">&lt;10% → 34,7%</div><p className="vintage-text">Tỷ lệ thu hồi (2013 → 2023)</p></StatBox>
                        <StatBox><div className="text-4xl font-black vintage-number mb-2">50.000 tỷ (41,3%)</div><p className="vintage-text">Các vụ án do BCD theo dõi</p></StatBox>
                      </div>
                      <p className="text-sm text-amber-900">Theo nội dung bạn cung cấp.</p>
                    </div>
                  ),
                },
                {
                  id: 'domains',
                  label: 'Lĩnh vực & xã hội',
                  icon: Layers3,
                  content: (
                    <div className="space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <StatBox><Landmark className="w-10 h-10 mx-auto mb-2" /><h4 className="font-bold vintage-heading">Ngân hàng & tài chính</h4><p className="vintage-subtext">Xử lý lạm dụng tín dụng</p></StatBox>
                        <StatBox><Building2 className="w-10 h-10 mx-auto mb-2" /><h4 className="font-bold vintage-heading">Đất đai & BĐS</h4><p className="vintage-subtext">Thu hồi đất bị chiếm đoạt</p></StatBox>
                        <StatBox><Car className="w-10 h-10 mx-auto mb-2" /><h4 className="font-bold vintage-heading">Giao thông</h4><p className="vintage-subtext">Minh bạch đầu tư</p></StatBox>
                        <StatBox><Hospital className="w-10 h-10 mx-auto mb-2" /><h4 className="font-bold vintage-heading">Y tế</h4><p className="vintage-subtext">Mua sắm thiết bị</p></StatBox>
                        <StatBox><Shield className="w-10 h-10 mx-auto mb-2" /><h4 className="font-bold vintage-heading">Quốc phòng - an ninh</h4><p className="vintage-subtext">Xử lý đến cấp tướng</p></StatBox>
                        <StatBox><Building className="w-10 h-10 mx-auto mb-2" /><h4 className="font-bold vintage-heading">Viễn thông</h4><p className="vintage-subtext">Không vùng cấm</p></StatBox>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <StatBox><Users className="w-12 h-12 mx-auto mb-3" /><h4 className="vintage-accent font-bold">Người dân</h4><p className="vintage-text">Giám sát, phản ánh, tố cáo</p></StatBox>
                        <StatBox><Newspaper className="w-12 h-12 mx-auto mb-3" /><h4 className="vintage-accent font-bold">Báo chí</h4><p className="vintage-text">Điều tra, nâng cao trách nhiệm</p></StatBox>
                        <StatBox><Handshake className="w-12 h-12 mx-auto mb-3" /><h4 className="vintage-accent font-bold">Doanh nghiệp & xã hội</h4><p className="vintage-text">Văn hóa liêm chính</p></StatBox>
                      </div>
                    </div>
                  ),
                },
                {
                  id: 'cpi',
                  label: 'CPI & nguồn',
                  icon: Globe,
                  content: (
                    <div>
                      <h3 className="text-2xl font-bold vintage-heading mb-4">CPI & So sánh quốc tế</h3>
                      <p className="text-lg vintage-subtext mb-6">CPI chấm 0–100 (0 rất tham nhũng, 100 rất trong sạch). Hơn 2/3 quốc gia dưới 50; theo dõi xu hướng tại TI.</p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        <StatBox><Globe className="w-12 h-12 mx-auto mb-3" /><h4 className="font-bold vintage-accent">Toàn cầu</h4><p className="vintage-text">Điểm TB nhiều năm ~43/100</p></StatBox>
                        <StatBox><Newspaper className="w-12 h-12 mx-auto mb-3" /><h4 className="font-bold vintage-accent">Châu Á–TBD</h4><p className="vintage-text">Xu hướng còn thách thức</p></StatBox>
                        <StatBox><Scale className="w-12 h-12 mx-auto mb-3" /><h4 className="font-bold vintage-accent">Việt Nam</h4><p className="vintage-text">Theo dõi tại CPI 2024</p></StatBox>
                      </div>
                      <div className="text-center space-y-2">
                        <p className="text-vintage-brown font-semibold">Tham khảo:</p>
                        <p className="vintage-subtext">• TI – <a className="underline" href="https://www.transparency.org/en/cpi/2024" target="_blank" rel="noreferrer">CPI 2024</a> • <a className="underline" href="https://www.transparency.org/en/cpi/2023" target="_blank" rel="noreferrer">CPI 2023</a></p>
                        <p className="vintage-subtext">• Luật PCTN 2018 (36/2018/QH14), Nghị định 130/2020/NĐ-CP</p>
                      </div>
                    </div>
                  ),
                },
              ]}
            />
          </ContentCard>
        </StoryPanel>

        {/* Final Panel: Credits */}
        <StoryPanel className="min-h-[50vh]">
          <ContentCard className="text-center">
            <h3 className="text-2xl font-bold mb-6 vintage-accent">Tài liệu tham khảo</h3>
            <div className="vintage-subtext space-y-3 text-left max-w-3xl mx-auto">
              {references.map((ref, i) => (
                <p key={i}>• {ref}</p>
              ))}
              <p className="pt-8 text-center" style={{ color: '#8B7355' }}>© 2025 - Dự án học tập MLN</p>
            </div>
          </ContentCard>
        </StoryPanel>
      </div>
      <ScrollToTop />
    </div>
  )
}
