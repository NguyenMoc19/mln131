import React from 'react'
import Navbar from '../components/Navbar'
import FixedBackground from '../components/FixedBackground'
import ProgressBar from '../components/ProgressBar'
import StoryPanel from '../components/StoryPanel'
import ContentCard from '../components/ContentCard'
import StatBox from '../components/StatBox'
import TimelineItem from '../components/TimelineItem'
import Tabs from '../components/Tabs'
import ScrollToTop from '../components/ScrollToTop'
import disciplineData from '../data/achievements/discipline.json'
import inspectionData from '../data/achievements/inspection.json'
import prosecutionData from '../data/achievements/prosecution.json'
import yearlyStats from '../data/statistics/yearly_comparison.json'
import cqArguments from '../data/cq_answer/arguments.json'
import cqEvidences from '../data/cq_answer/evidences.json'
import references from '../data/references.json'
import {
  TrendingUp,
  Shield,
  AlertTriangle,
  CheckCircle2,
  Target,
  BarChart3,
  FileText,
  Quote,
  Gavel,
  ClipboardList,
  ShieldCheck,
  ListChecks,
  Layers3,
  ChevronDown,
} from 'lucide-react'

export default function Story() {
  const heroItems = (disciplineData?.periods?.[0]?.items || []).slice(0, 3)
  const highlightedQuote = cqEvidences?.quotes?.[0]
  const secondaryQuote = cqEvidences?.quotes?.[1]
  const coverBackgroundUrl = 'https://imgcdn.tapchicongthuong.vn/tcct-media/23/9/23/cam_650e6ea3a4dfa.jpg'
  const journeyBackgroundUrl = 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop'

  const timelineEvents = [
    { year: '2013', text: 'Ban Chỉ đạo Trung ương về Phòng, chống tham nhũng được thành lập.' },
    { year: '2016', text: 'Chiến dịch "Không vùng cấm" khởi động, xử lý nhiều cán bộ cấp cao.' },
    { year: '2020', text: 'Hơn 131.000 đảng viên bị kỷ luật, khẳng định tinh thần không ngoại lệ.' },
    { year: '2023', text: 'Thu hồi tài sản tham nhũng đạt bước đột phá, tỷ lệ tăng lên 34,7%.' },
  ]

  const goals = [
    {
      title: 'KHÔNG THỂ',
      description: 'Hoàn thiện thể chế, bịt lỗ hổng để hành vi tham nhũng không thể xảy ra.',
      icon: Shield,
    },
    {
      title: 'KHÔNG DÁM',
      description: 'Tăng cường răn đe, xử lý nghiêm minh để tham nhũng không dám diễn ra.',
      icon: AlertTriangle,
    },
    {
      title: 'KHÔNG MUỐN',
      description: 'Bồi dưỡng đạo đức, xây dựng văn hóa liêm chính để cán bộ không muốn tham nhũng.',
      icon: CheckCircle2,
    },
    {
      title: 'KHÔNG CẦN',
      description: 'Bảo đảm đời sống, thu nhập để cán bộ không cần tham nhũng.',
      icon: Target,
    },
  ]

  const keyTasks = [
    'Thống nhất nhận thức, đề cao trách nhiệm người đứng đầu.',
    'Hoàn thiện pháp luật và cơ chế kiểm soát quyền lực.',
    'Xây dựng đội ngũ cán bộ liêm chính, chuyên nghiệp.',
    'Minh bạch hóa tài sản, thu nhập và hoạt động công vụ.',
    'Phối hợp chặt chẽ giữa các cơ quan kiểm tra, thanh tra, điều tra.',
    'Liên tục sơ kết, tổng kết để cập nhật bài học và đổi mới phương thức.',
  ]

  const wrongArguments = cqArguments?.wrong_claims || []
  const scientificTruths = cqArguments?.scientific_truths || []
  const decisiveFactors = cqArguments?.decisive_factors || []
  const comparisonNotes = cqArguments?.comparison_multi_party?.notes || []

  const assetRecoveryStart = yearlyStats?.asset_recovery?.start || { year: 2013, rate: 10, label: '<10%' }
  const assetRecoveryEnd = yearlyStats?.asset_recovery?.end || { year: 2023, rate: 34.7, label: '34,7%' }
  const trackedAssets = yearlyStats?.bcd_tracking || { amount: '50.000 tỷ đồng', rate: 41.3 }

  const achievementTabs = [
    {
      id: 'discipline',
      label: 'Kỷ luật Đảng',
      icon: Gavel,
      content: (
        <div className="space-y-8">
          {(disciplineData?.periods || []).map((period, idx) => (
            <div key={idx}>
              <h3 className="text-2xl font-bold vintage-heading mb-4">{period.label}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {(period.items || []).map((item, itemIdx) => (
                  <StatBox key={itemIdx}>
                    <div className="text-4xl font-black vintage-number mb-2">{item.value}</div>
                    <p className="vintage-text">{item.label}</p>
                    {item.note ? <p className="vintage-accent font-semibold mt-2">{item.note}</p> : null}
                  </StatBox>
                ))}
              </div>
            </div>
          ))}
          {disciplineData?.highlights?.length ? (
            <p className="text-center text-base vintage-subtext">{disciplineData.highlights[0]}</p>
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
          {(inspectionData?.periods || []).map((period, idx) => (
            <div key={idx}>
              <h3 className="text-2xl font-bold vintage-heading mb-4">{period.label}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {(period.items || []).map((item, itemIdx) => (
                  <StatBox key={itemIdx}>
                    <div className="text-3xl font-black vintage-number mb-2">{item.value}</div>
                    <p className="vintage-text">{item.label}</p>
                    {item.note ? <p className="vintage-accent font-semibold mt-2">{item.note}</p> : null}
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
          {(prosecutionData?.periods || []).map((period, idx) => (
            <div key={idx}>
              <h3 className="text-2xl font-bold vintage-heading mb-4">{period.label}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {(period.items || []).map((item, itemIdx) => (
                  <StatBox key={itemIdx}>
                    <div className="text-3xl font-black vintage-number mb-2">{item.value}</div>
                    <p className="vintage-text">{item.label}</p>
                    {item.note ? <p className="vintage-accent font-semibold mt-2">{item.note}</p> : null}
                  </StatBox>
                ))}
              </div>
            </div>
          ))}
          {prosecutionData?.tracking?.length ? (
            <div>
              <h3 className="text-2xl font-bold vintage-heading mb-4">Theo dõi của Ban Chỉ đạo</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {prosecutionData.tracking.map((item, idx) => (
                  <StatBox key={idx}>
                    <div className="text-4xl font-black vintage-number mb-2">{item.value}</div>
                    <p className="vintage-text">{item.label}</p>
                  </StatBox>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      ),
    },
    {
      id: 'recovery',
      label: 'Thu hồi tài sản',
      icon: TrendingUp,
      content: (
        <div className="space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl font-bold vintage-heading mb-3">{assetRecoveryStart.year}</h3>
              <div className="flex items-center justify-between mb-2">
                <span className="text-lg vintage-text">Tỷ lệ thu hồi ban đầu</span>
                <span className="text-3xl font-black vintage-number">{assetRecoveryStart.label}</span>
              </div>
              <div className="w-full h-4 rounded-full overflow-hidden" style={{ background: 'rgba(139, 69, 19, 0.25)' }}>
                <div className="h-full rounded-full" style={{ width: `${Math.min(100, assetRecoveryStart.rate)}%`, background: '#8B4513' }} />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold vintage-heading mb-3">{assetRecoveryEnd.year}</h3>
              <div className="flex items-center justify-between mb-2">
                <span className="text-lg vintage-text">Tỷ lệ thu hồi hiện nay</span>
                <span className="text-3xl font-black vintage-number">{assetRecoveryEnd.label}</span>
              </div>
              <div className="w-full h-4 rounded-full overflow-hidden" style={{ background: 'rgba(85, 107, 47, 0.25)' }}>
                <div className="h-full rounded-full" style={{ width: `${Math.min(100, assetRecoveryEnd.rate)}%`, background: '#556B2F' }} />
              </div>
            </div>
          </div>
          <StatBox className="text-center">
            <p className="text-base vintage-subtext mb-2">Các vụ án do Ban Chỉ đạo theo dõi</p>
            <p className="text-4xl font-black vintage-number mb-1">{trackedAssets.amount}</p>
            <p className="text-xl vintage-accent font-semibold">Đạt {trackedAssets.rate}%</p>
          </StatBox>
        </div>
      ),
    },
  ]

  const knowledgeTabs = [
    {
      id: 'legal',
      label: 'Khung pháp lý',
      icon: FileText,
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <StatBox>
            <h4 className="font-bold vintage-accent mb-2">Luật PCTN 2018</h4>
            <p className="vintage-text">Mở rộng đối tượng điều chỉnh, kiểm soát xung đột lợi ích.</p>
          </StatBox>
          <StatBox>
            <h4 className="font-bold vintage-accent mb-2">Nghị định 130/2020/NĐ-CP</h4>
            <p className="vintage-text">Cơ chế kiểm soát tài sản, thu nhập của người có chức vụ, quyền hạn.</p>
          </StatBox>
          <StatBox>
            <h4 className="font-bold vintage-accent mb-2">Quy tắc ứng xử</h4>
            <p className="vintage-text">Quản lý quà tặng, chuyển đổi vị trí công tác, minh bạch hóa hoạt động công.</p>
          </StatBox>
        </div>
      ),
    },
    {
      id: 'strategy',
      label: 'Chiến lược triển khai',
      icon: ListChecks,
      content: (
        <div className="space-y-6">
          <h4 className="text-xl font-bold vintage-heading">Bốn mục tiêu "4 KHÔNG"</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {goals.map((goal, idx) => (
              <StatBox key={idx}>
                <goal.icon className="w-10 h-10 mx-auto mb-3" />
                <h5 className="text-lg font-bold vintage-accent">{goal.title}</h5>
                <p className="text-sm vintage-text mt-2">{goal.description}</p>
              </StatBox>
            ))}
          </div>
          <h4 className="text-xl font-bold vintage-heading">Sáu nhiệm vụ then chốt</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {keyTasks.map((task, idx) => (
              <StatBox key={idx}>
                <p className="text-sm vintage-text">{task}</p>
              </StatBox>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: 'domains',
      label: 'Lĩnh vực trọng điểm',
      icon: Layers3,
      content: (
        <div className="space-y-6">
          <p className="vintage-text">
            Công tác phòng, chống tham nhũng bao trùm nhiều lĩnh vực: ngân hàng, đất đai, y tế, giao thông, giáo dục, quốc phòng...
            Từng lĩnh vực đều có kế hoạch rà soát, thanh tra, kiểm tra định kỳ để ngăn ngừa và xử lý.
          </p>
          <p className="vintage-subtext text-sm">
            Các chiến dịch truyền thông, báo chí điều tra và sự tham gia của người dân giúp tạo sức ép xã hội, góp phần củng cố niềm tin.
          </p>
        </div>
      ),
    },
  ]

  const referencesList = Array.isArray(references) ? references : []

  return (
    <div className="relative min-h-screen z text-white">
      <FixedBackground />
      <ProgressBar />
      <Navbar />
      <main>
        <section
          id="landing"
          className="relative min-h-screen flex flex-col items-center justify-center text-center text-white pt-32 pb-24 px-6 overflow-hidden"
        >
          <div className="absolute inset-0">
            <img src={coverBackgroundUrl} alt="Không vùng cấm - Không ngoại lệ" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-black/60" />
            <div
              className="absolute inset-x-0 bottom-0 h-80"
              style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.95), rgba(0,0,0,0.4), transparent)' }}
            />
          </div>
          <div className="relative z-10 max-w-4xl space-y-6">
            <p className="text-xs md:text-sm uppercase tracking-[0.6em] text-amber-200">Trang chính</p>
            <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-[0.08em]">KHÔNG VÙNG CẤM - KHÔNG NGOẠI LỆ</h1>
            <p className="text-base md:text-xl font-semibold text-amber-100/90 uppercase tracking-[0.25em]">
              Quyết tâm chính trị của Đảng Cộng sản Việt Nam
            </p>
            <p className="text-lg md:text-2xl text-white/90">
              Quyết tâm chính trị trong đấu tranh phòng, chống tham nhũng được thể hiện bằng những hành động kiên quyết, đồng bộ và minh bạch,
              khẳng định tinh thần công lý và niềm tin của Nhân dân đối với Đảng và Nhà nước.
            </p>
          </div>
          <div className="relative z-10 mt-16 flex flex-col items-center gap-6">
            <a
              href="#hero"
              className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-10 py-3 text-sm font-semibold uppercase tracking-[0.4em] text-white transition hover:bg-white/20"
            >
              Bắt đầu hành trình
            </a>
            <div className="flex flex-col items-center text-[0.65rem] uppercase tracking-[0.4em] text-white/70">
              <span>Cuộn xuống</span>
              <ChevronDown className="mt-3 h-6 w-6 animate-bounce" />
            </div>
          </div>
        </section>

        <section
          id="hero"
          className="relative min-h-screen flex flex-col items-center justify-center text-center text-white pt-32 pb-20 px-6 overflow-hidden"
        >
          <div className="absolute inset-0">
            <img src={journeyBackgroundUrl} alt="Hành trình phòng, chống tham nhũng" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/70" />
            <div
              className="absolute inset-x-0 bottom-0 h-72"
              style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.95), rgba(0,0,0,0.35), transparent)' }}
            />
          </div>
          <div className="relative z-10 max-w-5xl space-y-8">
            <p className="text-xs md:text-sm uppercase tracking-[0.6em] text-amber-200">Hành trình phòng, chống tham nhũng</p>
            <h2 className="text-4xl md:text-5xl font-black leading-tight">“Không vùng cấm”</h2>
            <p className="text-lg md:text-2xl text-white/90 max-w-4xl mx-auto">
              Từ năm 2013, Việt Nam triển khai chiến lược toàn diện để phòng, chống tham nhũng, kết hợp hoàn thiện thể chế, kiểm soát quyền lực
              và xử lý nghiêm minh những sai phạm. Cuộc chiến ấy khẳng định sự đồng lòng của cả hệ thống chính trị.
            </p>
            {highlightedQuote ? (
              <div className="mx-auto max-w-2xl rounded-2xl border border-white/30 bg-white/10 p-6 backdrop-blur">
                <Quote className="w-10 h-10 mx-auto mb-4 text-amber-200" />
                <p className="text-base md:text-lg italic text-white/95">“{highlightedQuote.content}”</p>
                <p className="mt-3 text-xs md:text-sm text-amber-100/80">- {highlightedQuote.author}</p>
              </div>
            ) : null}
            {heroItems.length ? (
              <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                {heroItems.map((item, idx) => (
                  <StatBox key={idx}>
                    <div className="text-5xl font-black vintage-number mb-3">{item.value}</div>
                    <p className="text-lg vintage-text">{item.label}</p>
                  </StatBox>
                ))}
              </div>
            ) : null}
            <div>
              <a
                href="#introduction"
                className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-8 py-3 text-sm font-semibold uppercase tracking-[0.4em] text-white transition hover:bg-white/20"
              >
                Khám phá hành trình
              </a>
            </div>
          </div>
        </section>

        <StoryPanel id="introduction">
          <ContentCard>
            <h2 className="text-4xl md:text-5xl font-black vintage-heading mb-6">Khởi nguồn & quyết tâm</h2>
            <div className="space-y-6 text-xl vintage-text">
              <p>
                Năm 2013 đánh dấu bước ngoặt khi Ban Chỉ đạo Trung ương về Phòng, chống tham nhũng trực thuộc Bộ Chính trị ra đời.
                Từ đây, hàng loạt quyết sách được triển khai đồng bộ, hướng đến mục tiêu kiểm soát chặt chẽ quyền lực, hoàn thiện thể chế và nâng cao trách nhiệm của đội ngũ cán bộ.
              </p>
              <p>
                Dưới sự chỉ đạo quyết liệt của Đảng và Nhà nước, đặc biệt là Tổng Bí thư Nguyễn Phú Trọng, khẩu hiệu <span className="vintage-accent">“Không vùng cấm, không ngoại lệ”</span> được hiện thực hóa bằng những vụ việc cụ thể, công khai minh bạch.
              </p>
            </div>
            <div className="mt-10 space-y-6">
              {timelineEvents.map((event, idx) => (
                <TimelineItem key={event.year} year={event.year} showLine={idx !== timelineEvents.length - 1}>
                  {event.text}
                </TimelineItem>
              ))}
            </div>
            {secondaryQuote ? (
              <div className="mt-12 text-center text-lg vintage-subtext">
                <p className="italic">“{secondaryQuote.content}”</p>
                <p className="mt-2">- {secondaryQuote.author}</p>
              </div>
            ) : null}
          </ContentCard>
        </StoryPanel>

        <StoryPanel id="achievements">
          <ContentCard>
            <h2 className="text-4xl md:text-6xl font-black vintage-heading mb-6 text-center">Thành tựu nổi bật</h2>
            <Tabs tabs={achievementTabs} />
          </ContentCard>
        </StoryPanel>

        <StoryPanel id="principles">
          <ContentCard>
            <h2 className="text-4xl md:text-6xl font-black vintage-heading mb-6 text-center">Nguyên tắc hành động</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {goals.map((goal, idx) => (
                <StatBox key={idx}>
                  <goal.icon className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold vintage-accent mb-2">{goal.title}</h3>
                  <p className="vintage-text">{goal.description}</p>
                </StatBox>
              ))}
            </div>
            <div className="mt-12">
              <h3 className="text-3xl font-bold vintage-heading mb-4 text-center">6 nhiệm vụ then chốt</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {keyTasks.map((task, idx) => (
                  <StatBox key={idx}>
                    <p className="text-base vintage-text">{task}</p>
                  </StatBox>
                ))}
              </div>
            </div>
          </ContentCard>
        </StoryPanel>

        <StoryPanel id="critical-question">
          <ContentCard>
            <h2 className="text-4xl md:text-6xl font-black vintage-heading mb-6 text-center">Câu hỏi then chốt</h2>
            <p className="text-2xl vintage-text text-center mb-8">{cqArguments?.critical_question}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-bold vintage-accent mb-4">Luận điểm sai trái</h3>
                <div className="space-y-4">
                  {wrongArguments.map((claim, idx) => (
                    <StatBox key={idx} className="wrong-box text-left">
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="w-6 h-6 mt-1 text-red-900" />
                        <p className="vintage-text">{claim}</p>
                      </div>
                    </StatBox>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold vintage-accent mb-4">Sự thật khoa học</h3>
                <div className="space-y-4">
                  {scientificTruths.map((truth, idx) => (
                    <StatBox key={idx} className="right-box text-left">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 mt-1 text-emerald-900" />
                        <p className="vintage-text">{truth}</p>
                      </div>
                    </StatBox>
                  ))}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <StatBox>
                <h3 className="text-xl font-bold vintage-heading mb-3">So sánh thực tiễn</h3>
                <BarChart3 className="w-10 h-10 mx-auto mb-4" />
                <p className="text-lg vintage-text mb-3">{cqArguments?.comparison_multi_party?.summary}</p>
                <ul className="text-sm vintage-subtext space-y-2 list-disc list-inside">
                  {comparisonNotes.map((note, idx) => (
                    <li key={idx}>{note}</li>
                  ))}
                </ul>
              </StatBox>
              <StatBox>
                <h3 className="text-xl font-bold vintage-heading mb-3">Yếu tố quyết định</h3>
                <Target className="w-10 h-10 mx-auto mb-4" />
                <ul className="text-sm vintage-subtext space-y-2 list-disc list-inside">
                  {decisiveFactors.map((factor, idx) => (
                    <li key={idx}>{factor}</li>
                  ))}
                </ul>
              </StatBox>
            </div>
            <div className="mt-10 text-center">
              <p className="text-4xl font-black vintage-number" style={{ color: '#8B0000' }}>{cqArguments?.conclusion}</p>
            </div>
          </ContentCard>
        </StoryPanel>

        <StoryPanel id="technical-design">
          <ContentCard>
            <h2 className="text-4xl md:text-6xl font-black vintage-heading mb-6 text-center">Hệ sinh thái giải pháp</h2>
            <p className="text-lg vintage-text text-center max-w-3xl mx-auto mb-8">
              Công tác phòng, chống tham nhũng không dừng ở việc xử lý vụ việc. Đó là một hệ thống đồng bộ gồm pháp luật, quản trị, truyền thông và sự tham gia của toàn xã hội.
            </p>
            <Tabs tabs={knowledgeTabs} />
          </ContentCard>
        </StoryPanel>

        <StoryPanel id="references" className="pb-32">
          <ContentCard className="text-center">
            <h2 className="text-3xl md:text-4xl font-black vintage-heading mb-6">Tài liệu tham khảo</h2>
            <div className="space-y-3 text-left max-w-3xl mx-auto vintage-subtext">
              {referencesList.map((ref, idx) => (
                <p key={idx}>• {ref}</p>
              ))}
            </div>
            <p className="pt-8 text-sm vintage-subtext">© 2025 - Dự án học tập MLN</p>
          </ContentCard>
        </StoryPanel>
      </main>
      <ScrollToTop />
    </div>
  )
}
