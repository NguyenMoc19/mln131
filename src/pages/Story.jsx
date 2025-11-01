import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import FixedBackground from '../components/FixedBackground'
import ProgressBar from '../components/ProgressBar'
import StoryPanel from '../components/StoryPanel'
import ContentCard from '../components/ContentCard'
import StatBox from '../components/StatBox'
import Tabs from '../components/Tabs'
import ScrollToTop from '../components/ScrollToTop'
import disciplineData from '../data/achievements/discipline.json'
import inspectionData from '../data/achievements/inspection.json'
import prosecutionData from '../data/achievements/prosecution.json'
import yearlyStats from '../data/statistics/yearly_comparison.json'
import cqArguments from '../data/cq_answer/arguments.json'
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
    BookOpen,
    Scale,
    Users,
    Award,
    Flame,
    Eye,
    Lock,
    Heart,
    DollarSign,
} from 'lucide-react'

export default function Story() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])


    const backgroundImages = [
        'https://imgcdn.tapchicongthuong.vn/tcct-media/23/9/23/cam_650e6ea3a4dfa.jpg',
        'https://a.tcnn.vn/Images/images/tong-bi-thu-nguyen-phu-trong-phai-neu-cao-hon-nua-tinh-than-trach-nhiem-quyet-liet-dau-tranh-phong-chong-tham-nhung-tieu-cuc-20230619142728.jpg',
        'https://a.tcnn.vn/Images/images/tong-bi-thu-nguyen-phu-trong-phai-neu-cao-hon-nua-tinh-than-trach-nhiem-quyet-liet-dau-tranh-phong-chong-tham-nhung-tieu-cuc-20230619142728.jpg',
        'https://nhandan.vn/special/dau-tranh-chong-tham-nhung-tieu-cuc/assets/PsMb37PkBg/5-bnd_5603-1980x1317.jpeg?fbclid=IwY2xjawNzRXZleHRuA2FlbQIxMABicmlkETFzTG1WbUtQZFRNNXM0N3gyAR40dKAuwQh8WMgP3Te1nChc01nyd07OgbJL99xSjUM3UaPwv0WcbgmqkUYcKg_aem_jHVN4vnoAoi9DEP7V85sIQ'
    ]

    const goals = [
        {
            title: 'KHÔNG THỂ',
            description: 'Hoàn thiện thể chế, bịt lỗ hổng pháp luật để hành vi tham nhũng không thể xảy ra.',
            icon: Shield,
            color: 'from-red-900 to-red-800'
        },
        {
            title: 'KHÔNG DÁM',
            description: 'Tăng cường răn đe, xử lý nghiêm minh với hình phạt cao để không dám tham nhũng.',
            icon: AlertTriangle,
            color: 'from-yellow-900 to-yellow-800'
        },
        {
            title: 'KHÔNG MUỐN',
            description: 'Bồi dưỡng đạo đức, xây dựng văn hóa liêm chính để cán bộ không muốn tham nhũng.',
            icon: Heart,
            color: 'from-green-900 to-green-800'
        },
        {
            title: 'KHÔNG CẦN',
            description: 'Bảo đảm đời sống, thu nhập hợp lý để cán bộ không cần tham nhũng.',
            icon: DollarSign,
            color: 'from-blue-900 to-blue-800'
        },
    ]

    const wrongArguments = cqArguments?.wrong_claims || []
    const scientificTruths = cqArguments?.scientific_truths || []
    const partyCommitment = cqArguments?.party_commitment || []
    const assetRecoveryStart = yearlyStats?.asset_recovery?.start || { year: 2013, rate: 10, label: '<10%' }
    const assetRecoveryEnd = yearlyStats?.asset_recovery?.end || { year: 2023, rate: 34.7, label: '34,7%' }
    const trackedAssets = yearlyStats?.bcd_tracking || { amount: '50.000 tỷ đồng', rate: 41.3 }

    const achievementTabs = [
        {
            id: 'discipline',
            label: 'Kỷ luật Đảng',
            icon: Gavel,
            content: (
                <div className="space-y-10">
                    {(disciplineData?.periods || []).map((period, idx) => (
                        <div key={idx} className="space-y-6">
                            <div className="border-l-4 border-red-800 pl-6">
                                <h3 className="text-3xl font-bold vintage-heading mb-2">{period.label}</h3>
                                <p className="text-sm vintage-subtext">Thể hiện quyết tâm chính trị cao trong xử lý kỷ luật</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {(period.items || []).map((item, itemIdx) => (
                                    <StatBox key={itemIdx} className="group hover:scale-105 transition-transform duration-300">
                                        <div className="text-5xl font-black vintage-number mb-3 group-hover:text-red-800 transition-colors">
                                            {item.value}
                                        </div>
                                        <p className="text-lg vintage-text font-semibold">{item.label}</p>
                                        {item.note && (
                                            <p className="vintage-accent font-semibold mt-3 text-sm border-t border-amber-900/20 pt-3">
                                                → {item.note}
                                            </p>
                                        )}
                                    </StatBox>
                                ))}
                            </div>
                        </div>
                    ))}
                    <div className="flex justify-center">
                        <img
                            src="https://mod.gov.vn/wcm/connect/6ef1a530-bc96-40ba-8f75-103671f4f2b0/1/image001.jpg?MOD=AJPERES&fbclid=IwY2xjawNzSgVleHRuA2FlbQIxMABicmlkETFzTG1WbUtQZFRNNXM0N3gyAR40dKAuwQh8WMgP3Te1nChc01nyd07OgbJL99xSjUM3UaPwv0WcbgmqkUYcKg_aem_jHVN4vnoAoi9DEP7V85sIQ"
                            alt="Discipline"
                            className="rounded-2xl"
                        />
                    </div>
                    {disciplineData?.highlights?.length && (
                        <div className="mt-10 p-8 rounded-2xl bg-linear-to-br from-amber-50 to-orange-50 border-2 border-amber-900/20">
                            <Quote className="w-12 h-12 mx-auto mb-4 text-amber-900" />
                            <p className="text-center text-xl vintage-text italic font-medium leading-relaxed">
                                {disciplineData.highlights[0]}
                            </p>
                        </div>
                    )}
                </div>
            ),
        },
        {
            id: 'inspection',
            label: 'Thanh tra, kiểm toán',
            icon: ClipboardList,
            content: (
                <div className="space-y-10">
                    {(inspectionData?.periods || []).map((period, idx) => (
                        <div key={idx} className="space-y-6">
                            <div className="border-l-4 border-blue-800 pl-6">
                                <h3 className="text-3xl font-bold vintage-heading mb-2">{period.label}</h3>
                                <p className="text-sm vintage-subtext">Kiến nghị thu hồi và xử lý vi phạm</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {(period.items || []).map((item, itemIdx) => (
                                    <StatBox key={itemIdx} className="group hover:scale-105 transition-transform duration-300">
                                        <div className="text-4xl font-black vintage-number mb-3 group-hover:text-blue-800 transition-colors">
                                            {item.value}
                                        </div>
                                        <p className="text-base vintage-text font-semibold leading-snug">{item.label}</p>
                                        {item.note && (
                                            <p className="vintage-accent font-semibold mt-3 text-sm border-t border-amber-900/20 pt-3">
                                                → {item.note}
                                            </p>
                                        )}
                                    </StatBox>
                                ))}
                            </div>
                        </div>
                    ))}
                    <div className="flex justify-center">
                        <img
                            src="https://tuyengiaocaobang.vn/uploads/news/2023_05/121.jpg?fbclid=IwY2xjawNzStpleHRuA2FlbQIxMABicmlkETFzTG1WbUtQZFRNNXM0N3gyAR6SU2-FhUzc1w7ZpHMc3N0309d5pYwf3iv2W6PeBjPf32FSOKh6PPwpzQvIdg_aem_tKK-0ovPiT-y0g4TpmZ51Q"
                            alt="Inspection"
                            className="rounded-2xl"
                        />
                    </div>
                    {disciplineData?.highlights?.length && (
                        <div className="mt-10 p-8 rounded-2xl bg-linear-to-br from-amber-50 to-orange-50 border-2 border-amber-900/20">
                            <Quote className="w-12 h-12 mx-auto mb-4 text-amber-900" />
                            <p className="text-center text-xl vintage-text italic font-medium leading-relaxed">
                                {disciplineData.highlights[1]}
                            </p>
                        </div>
                    )}
                </div>
            ),
        },
        {
            id: 'prosecution',
            label: 'Điều tra, truy tố, xét xử',
            icon: ShieldCheck,
            content: (
                <div className="space-y-10">
                    {(prosecutionData?.periods || []).map((period, idx) => (
                        <div key={idx} className="space-y-6">
                            <div className="border-l-4 border-green-800 pl-6">
                                <h3 className="text-3xl font-bold vintage-heading mb-2">{period.label}</h3>
                                <p className="text-sm vintage-subtext">Khởi tố và xét xử các vụ án tham nhũng</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
                                {(period.items || []).map((item, itemIdx) => (
                                    <StatBox
                                        key={itemIdx}
                                        className="group text-center hover:scale-105 transition-transform duration-300"
                                    >
                                        <div className="text-4xl font-black vintage-number mb-3 group-hover:text-green-800 transition-colors">
                                            {item.value}
                                        </div>
                                        <p className="text-base vintage-text font-semibold leading-snug">{item.label}</p>
                                        {item.note && (
                                            <p className="vintage-accent font-semibold mt-3 text-sm border-t border-amber-900/20 pt-3">
                                                → {item.note}
                                            </p>
                                        )}
                                    </StatBox>
                                ))}
                            </div>
                        </div>
                    ))}
                    {prosecutionData?.tracking?.length && (
                        <div className="space-y-6">
                            <div className="border-l-4 border-purple-800 pl-6">
                                <h3 className="text-3xl font-bold vintage-heading mb-2">Theo dõi của Ban Chỉ đạo</h3>
                                <p className="text-sm vintage-subtext">Các vụ án/việc được Ban Chỉ đạo TW trực tiếp theo dõi</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {prosecutionData.tracking.map((item, idx) => (
                                    <StatBox key={idx} className="group hover:scale-105 transition-transform duration-300">
                                        <div className="text-5xl font-black vintage-number mb-3 group-hover:text-purple-800 transition-colors">
                                            {item.value}
                                        </div>
                                        <p className="text-lg vintage-text font-semibold">{item.label}</p>
                                    </StatBox>
                                ))}
                            </div>
                        </div>
                    )}
                    {disciplineData?.highlights?.length && (
                        <div className="mt-10 p-8 rounded-2xl bg-linear-to-br from-amber-50 to-orange-50 border-2 border-amber-900/20">
                            <Quote className="w-12 h-12 mx-auto mb-4 text-amber-900" />
                            <p className="text-center text-xl vintage-text italic font-medium leading-relaxed">
                                {disciplineData.highlights[2]}
                            </p>
                        </div>
                    )}
                </div>
            ),
        },
        {
            id: 'recovery',
            label: 'Thu hồi tài sản',
            icon: TrendingUp,
            content: (
                <div className="space-y-10">
                    <div className="text-center mb-8">
                        <h3 className="text-3xl font-bold vintage-heading mb-3">Tỷ lệ thu hồi tài sản tham nhũng</h3>
                        <p className="text-lg vintage-subtext">Một trong những chỉ số quan trọng đánh giá hiệu quả công tác phòng, chống tham nhũng</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="p-8 rounded-2xl bg-linear-to-br from-red-50 to-orange-50 border-2 border-red-900/20">
                            <div className="flex items-center justify-between mb-4">
                                <h4 className="text-2xl font-bold vintage-heading">{assetRecoveryStart.year}</h4>
                                <div className="px-4 py-2 rounded-full bg-red-900/10 text-red-900 font-bold text-sm">
                                    Điểm khởi đầu
                                </div>
                            </div>
                            <div className="flex items-baseline justify-between mb-4">
                                <span className="text-lg vintage-text font-semibold">Tỷ lệ thu hồi</span>
                                <span className="text-5xl font-black vintage-number">{assetRecoveryStart.label}</span>
                            </div>
                            <div className="w-full h-6 rounded-full overflow-hidden bg-red-900/20 shadow-inner">
                                <div
                                    className="h-full rounded-full bg-linear-to-r from-red-800 to-red-600 shadow-lg transition-all duration-1000"
                                    style={{ width: `${Math.min(100, assetRecoveryStart.rate)}%` }}
                                />
                            </div>
                            <p className="text-sm vintage-subtext mt-4 italic">Tỷ lệ thu hồi còn thấp, cần cải thiện</p>
                        </div>

                        <div className="p-8 rounded-2xl bg-linear-to-br from-green-50 to-emerald-50 border-2 border-green-900/20">
                            <div className="flex items-center justify-between mb-4">
                                <h4 className="text-2xl font-bold vintage-heading">{assetRecoveryEnd.year}</h4>
                                <div className="px-4 py-2 rounded-full bg-green-900/10 text-green-900 font-bold text-sm flex items-center gap-2">
                                    <TrendingUp className="w-4 h-4" />
                                    Tăng trưởng
                                </div>
                            </div>
                            <div className="flex items-baseline justify-between mb-4">
                                <span className="text-lg vintage-text font-semibold">Tỷ lệ thu hồi</span>
                                <span className="text-5xl font-black vintage-number text-green-900">{assetRecoveryEnd.label}</span>
                            </div>
                            <div className="w-full h-6 rounded-full overflow-hidden bg-green-900/20 shadow-inner">
                                <div
                                    className="h-full rounded-full bg-linear-to-r from-green-800 to-green-600 shadow-lg transition-all duration-1000"
                                    style={{ width: `${Math.min(100, assetRecoveryEnd.rate)}%` }}
                                />
                            </div>
                            <p className="text-sm text-green-900 mt-4 font-semibold italic">
                                ↗ Tăng gấp {(assetRecoveryEnd.rate / assetRecoveryStart.rate).toFixed(1)} lần so với 2013
                            </p>
                        </div>
                    </div>

                    <div className="p-10 rounded-2xl bg-linear-to-br from-amber-50 via-yellow-50 to-orange-50 border-2 border-amber-900/30 text-center shadow-lg">
                        <Award className="w-16 h-16 mx-auto mb-4 text-amber-900" />
                        <p className="text-base vintage-subtext mb-3 uppercase tracking-wider">
                            {trackedAssets.note}
                        </p>
                        <p className="text-6xl font-black vintage-number mb-2">{trackedAssets.amount}</p>
                        <p className="text-3xl vintage-accent font-bold">Đạt {trackedAssets.rate}%</p>
                        <div className="mt-6 w-full max-w-md mx-auto h-4 rounded-full overflow-hidden bg-amber-900/20">
                            <div
                                className="h-full rounded-full bg-linear-to-r from-amber-800 to-yellow-600"
                                style={{ width: `${Math.min(100, trackedAssets.rate)}%` }}
                            />
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <img
                            src="https://media.thanhtra.com.vn/public/uploads/2025/09/22/68d0ce4508dcb36fd59c5cf2.jpg?w=1319&fbclid=IwY2xjawNzSw5leHRuA2FlbQIxMABicmlkETFzTG1WbUtQZFRNNXM0N3gyAR53i1VKieLT_AOSmYDDFzblKicZXDu8qMMep408p3p7ZXO2iyt5JPKLKZBmAA_aem_oRyeZ-9UworgxbUx2GuUww"
                            alt="Prosecution"
                            className="rounded-2xl"
                        />
                    </div>
                    {disciplineData?.highlights?.length && (
                        <div className="mt-10 p-8 rounded-2xl bg-linear-to-br from-amber-50 to-orange-50 border-2 border-amber-900/20">
                            <Quote className="w-12 h-12 mx-auto mb-4 text-amber-900" />
                            <p className="text-center text-xl vintage-text italic font-medium leading-relaxed">
                                {disciplineData.highlights[3]}
                            </p>
                        </div>
                    )}
                </div>
            ),
        },
    ]

    return (
        <div className="relative min-h-screen text-white">
            <FixedBackground imageUrls={backgroundImages} />
            <ProgressBar />
            <Navbar />

            <main className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                {/* SECTION 1: LANDING PAGE */}
                <section
                    id="landing"
                    data-bg-index="0"
                    className="relative min-h-screen flex flex-col items-center justify-center text-center text-white pt-32 pb-24 px-6 overflow-hidden"
                >
                    <div className="relative z-10 max-w-6xl space-y-8">
                        <div className="inline-block px-6 py-2 rounded-full bg-red-900/30 border border-red-500/50 backdrop-blur-sm mb-4">
                            <p className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-red-200">
                                Quyết tâm chính trị
                            </p>
                        </div>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight">
                            <span className="block bg-linear-to-r from-red-500 via-yellow-400 to-red-500 bg-clip-text text-transparent animate-pulse">
                                KHÔNG VÙNG CẤM
                            </span>
                            <span className="block mt-2 text-white drop-shadow-2xl">
                                KHÔNG NGOẠI LỆ
                            </span>
                        </h1>

                        <p className="text-lg md:text-2xl font-medium text-amber-100/90 max-w-4xl mx-auto leading-relaxed px-4">
                            Quyết tâm chính trị của Đảng Cộng sản Việt Nam trong đấu tranh phòng, chống tham nhũng, tiêu cực
                        </p>

                        <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-black/30 backdrop-blur-md border border-white/20">
                            <p className="text-base md:text-xl text-white/95 leading-relaxed">
                                Quyết tâm chính trị được thể hiện bằng những <span className="font-bold text-yellow-400">hành động kiên quyết, đồng bộ và minh bạch</span>,
                                khẳng định tinh thần công lý và <span className="font-bold text-yellow-400">niềm tin của Nhân dân</span> đối với Đảng và Nhà nước.
                            </p>
                        </div>
                    </div>

                    <div className="relative z-10 mt-16 flex flex-col items-center gap-8">
                        <a
                            href="#party-commitment"
                            className="group inline-flex items-center justify-center gap-3 rounded-full border-2 border-white/60 bg-white/10 px-12 py-4 text-sm font-bold uppercase tracking-[0.3em] text-white transition-all hover:bg-white/20 hover:scale-105 hover:shadow-2xl backdrop-blur-sm"
                        >
                            Bắt đầu hành trình
                            <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                        </a>

                        <div className="flex flex-col items-center text-xs uppercase tracking-[0.4em] text-white/60">
                            <span>Cuộn xuống để khám phá</span>
                            <ChevronDown className="mt-3 h-6 w-6 animate-bounce" />
                        </div>
                    </div>
                </section>

                {/* SECTION 2: PARTY COMMITMENT & BACKGROUND */}
                <section
                    id="party-commitment"
                    className="relative z-10 bg-linear-to-b from-[#f4dec0] to-[#ecdcc0] text-[#3d2817] py-24 px-6 border-[#3d2817] rounded-2xl"
                >
                    <div className="max-w-7xl mx-auto space-y-24">
                        {/* Phần 1: Bản chất tham nhũng */}
                        <div className="grid grid-cols-1 xl:grid-cols-[1.5fr_1fr] gap-12 items-start">
                            <div className="space-y-8">
                                <div className="inline-block px-6 py-2 rounded-full bg-amber-900/10 border border-amber-900/30 mb-4">
                                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-amber-900">
                                        Quan điểm của Đảng
                                    </p>
                                </div>

                                <h2 className="text-4xl md:text-5xl font-black vintage-heading leading-tight">
                                    Bản chất của tham nhũng
                                </h2>

                                <div className="space-y-6 text-lg leading-relaxed">
                                    <div className="p-6 rounded-xl bg-white/80 border-l-4 border-red-800 shadow-sm">
                                        <h3 className="text-xl font-bold vintage-accent mb-3 flex items-center gap-2">
                                            Định nghĩa pháp luật
                                        </h3>
                                        <p className="vintage-text">
                                            Theo Luật Phòng, chống tham nhũng 2005 (khoản 2 Điều 1):
                                            <span className="font-bold text-red-900"> "Tham nhũng là hành vi của người có chức vụ, quyền hạn
                                                đã lợi dụng chức vụ, quyền hạn đó vì vụ lợi".</span>
                                        </p>
                                    </div>

                                    <div className="space-y-4">
                                        {[
                                            'Tham nhũng là "khuyết tật bẩm sinh" của quyền lực – tồn tại ở mọi nhà nước, không phân biệt chế độ.',
                                            'Tổng Bí thư Nguyễn Phú Trọng khẳng định: "Tham nhũng là hiện tượng xã hội tiêu cực, xấu xa mà thời nào, chế độ nào, quốc gia nào cũng có".',
                                            'Đảng coi tham nhũng là "giặc nội xâm" – một trong bốn nguy cơ đe dọa sự tồn vong của chế độ.'
                                        ].map((text, idx) => (
                                            <div key={idx} className="flex items-start gap-4 p-4 rounded-lg bg-amber-50/50 hover:bg-amber-50 transition-colors">
                                                <CheckCircle2 className="w-6 h-6 text-green-700 shrink-0 mt-1" />
                                                <p className="vintage-text">{text}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6 mt-44">
                                <img
                                    src="https://media.vov.vn/sites/default/files/styles/large/public/2023-11/z4904882337691_4ae82791ac635d451f842e41b643568c.jpg"
                                    alt="Tổng Bí thư Nguyễn Phú Trọng"
                                    className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
                                />
                            </div>
                        </div>

                        {/* Phần 2: Quyết tâm chính trị */}
                        <div className="grid grid-cols-1 xl:grid-cols-[1.2fr_1fr] gap-12 items-start">
                            <div className="space-y-10">
                                <div className="">
                                    <div className="flex items-center gap-4">
                                        <h3 className="text-2xl font-bold vintage-heading mb-6 flex items-center gap-3">Quyết tâm chính trị cao</h3>
                                    </div>
                                    <p className="text-lg vintage-text leading-relaxed text-left">
                                        Ngày <span className="font-bold text-red-900">1/2/2013</span>, Ban Chỉ đạo Trung ương về phòng, chống tham nhũng,
                                        tiêu cực được thành lập do <span className="font-bold">Tổng Bí thư Nguyễn Phú Trọng</span> làm Trưởng ban,
                                        đánh dấu bước ngoặt trong chỉ đạo thống nhất toàn hệ thống chính trị.
                                    </p>
                                </div>

                                <div className="">
                                    <h4 className="text-2xl font-bold vintage-heading mb-6 flex items-center gap-3">
                                        Nghị quyết Đại hội XIII
                                    </h4>
                                    <div className="p-6 bg-white/80 rounded-xl border-l-4 border-red-800">
                                        <Quote className="w-8 h-8 mb-3 text-red-900" />
                                        <p className="italic text-lg vintage-text leading-relaxed">
                                            "Kiên quyết, kiên trì đấu tranh, ngăn chặn, đẩy lùi tham nhũng, tiêu cực
                                            với quyết tâm chính trị cao hơn, hành động mạnh mẽ hơn và hiệu quả hơn"
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-2xl font-bold vintage-heading mb-6 flex items-center gap-3">
                                        Bốn mục tiêu chiến lược
                                    </h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        {goals.map((goal, idx) => (
                                            <div
                                                key={idx}
                                                className={`p-6 rounded-xl bg-linear-to-br ${goal.color} text-white shadow-lg hover:scale-105 transition-transform duration-300`}
                                            >
                                                <h5 className="text-xl font-black mb-2 tracking-wide">{goal.title}</h5>
                                                <p className="text-sm leading-relaxed text-white/90">{goal.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6 mt-14">
                                <img
                                    src="https://bcp.cdnchinhphu.vn/thumb_w/777/Uploaded/nguyendinhhai/2021_02_25/Anh%20be%20mac.jpg"
                                    alt="Hội nghị BCĐ TW"
                                    className="w-full h-[300px] object-cover rounded-2xl shadow-xl"
                                />
                                <img
                                    src="https://bcp.cdnchinhphu.vn/Uploaded/nguyendieuhuong/2021_02_01/_BAC9272.jpg"
                                    alt="Hội nghị Trung ương"
                                    className="w-full h-[300px] object-cover rounded-2xl shadow-xl"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 3: ACTION SLOGAN */}
                <section
                    id="action-slogan"
                    data-bg-index="0"
                    className="relative z-10 py-32 px-6 overflow-hidden text-center rounded-2xl mt-20"
                    style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.2), rgba(0,0,0,0.2))' }}
                >
                    <div className="pointer-events-none absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,rgba(255,214,150,0.3)_0%,transparent_70%)]" />

                    <div className="relative max-w-5xl mx-auto space-y-10">
                        <div className="inline-block px-8 py-3 rounded-full bg-red-900/20 border border-red-500/40 backdrop-blur-sm">
                            <p className="text-sm md:text-base font-bold uppercase tracking-[0.5em] text-red-200">
                                Phương châm hành động
                            </p>
                        </div>

                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight">
                            <span className="block text-white drop-shadow-2xl">KIÊN QUYẾT</span>
                            <span className="block text-yellow-400 drop-shadow-2xl my-2">•</span>
                            <span className="block text-white drop-shadow-2xl">KIÊN TRÌ</span>
                            <span className="block text-yellow-400 drop-shadow-2xl my-2">•</span>
                            <span className="block text-white drop-shadow-2xl">LIÊN TỤC</span>
                            <span className="block text-yellow-400 drop-shadow-2xl my-2">•</span>
                            <span className="block text-white drop-shadow-2xl">BỀN BỈ</span>
                        </h2>

                        <p className="text-xs md:text-sm uppercase tracking-[0.4em] text-white/70 max-w-2xl mx-auto">
                            Khẩu hiệu xuyên suốt công tác phòng, chống tham nhũng của Đảng và Nhà nước
                        </p>
                    </div>
                </section>

                {/* SECTION 6: ACHIEVEMENTS */}
                <StoryPanel id="achievements" data-bg-index="2">
                    <ContentCard>
                        <div className="text-center mb-12">
                            <h2 className="text-5xl md:text-7xl font-black text-red-900  mb-4">Thành tựu nổi bật</h2>
                            <p className="text-xl vintage-subtext max-w-3xl mx-auto">
                                Kết quả cụ thể của công tác phòng, chống tham nhũng qua các giai đoạn
                            </p>
                        </div>
                        <Tabs tabs={achievementTabs} />
                    </ContentCard>
                </StoryPanel>

                {/* SECTION 7: VỤ ÁN ĐIỂN HÌNH & NGUYÊN TẮC XỬ LÝ */}
                <StoryPanel id="principles" data-bg-index="2">
                    <ContentCard>
                        <div className="text-center mb-12">
                            <h2 className="text-5xl md:text-7xl font-black vintage-heading mb-4">Vụ án điển hình & Nguyên tắc xử lý</h2>
                            <p className="text-xl vintage-subtext max-w-3xl mx-auto">
                                "Không vùng cấm, không ngoại lệ" - Xử lý nghiêm minh mọi vi phạm
                            </p>
                        </div>

                        <div className="space-y-16">
                            {/* Phần 1: Đặc điểm hành vi tham nhũng */}
                            <div className="p-10 rounded-2xl bg-linear-to-br from-red-50 to-orange-50 border-2 border-red-900/20">
                                <h3 className="text-3xl font-bold vintage-heading mb-8 flex items-center gap-3 text-center justify-center">
                                    <Scale className="w-10 h-10 text-red-900" />
                                    Đặc điểm của hành vi tham nhũng
                                </h3>
                                <div className="space-y-6">
                                    <div className="p-6 bg-white/80 rounded-xl border-l-4 border-red-800">
                                        <h4 className="text-xl font-bold vintage-accent mb-3">Thứ nhất: Chủ thể đặc biệt</h4>
                                        <p className="text-lg vintage-text leading-relaxed">
                                            Tham nhũng là hành vi của <span className="font-bold text-red-900">người có chức vụ, quyền hạn</span> -
                                            chỉ khi "có chức vụ, quyền hạn" người ta mới có thể "lợi dụng chức vụ quyền hạn".
                                        </p>
                                    </div>

                                    <div className="p-6 bg-white/80 rounded-xl border-l-4 border-orange-800">
                                        <h4 className="text-xl font-bold vintage-accent mb-3">Thứ hai: Hành vi vi phạm pháp luật</h4>
                                        <p className="text-lg vintage-text leading-relaxed">
                                            Người có chức vụ, quyền hạn <span className="font-bold text-orange-900">lợi dụng chức vụ đó làm trái pháp luật</span> để
                                            mưu lợi riêng - việc lợi dụng chức vụ, quyền hạn làm trái pháp luật là dấu hiệu đặc trưng của hành vi tham nhũng.
                                        </p>
                                    </div>

                                    <div className="p-6 bg-white/80 rounded-xl border-l-4 border-amber-800">
                                        <h4 className="text-xl font-bold vintage-accent mb-3">Thứ ba: Động cơ vụ lợi</h4>
                                        <p className="text-lg vintage-text leading-relaxed">
                                            Động cơ là <span className="font-bold text-amber-900">vì vụ lợi</span> - hành vi không xuất phát từ nhu cầu công việc
                                            hay trách nhiệm của cán bộ, công chức mà vì lợi ích riêng.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Phần 2: Phạm vi xử lý */}
                            <div>
                                <h3 className="text-4xl font-bold vintage-heading mb-8 text-center">Phạm vi xử lý toàn diện</h3>

                                {/* Lĩnh vực trọng điểm */}
                                <div className="mb-10">
                                    <h4 className="text-2xl font-bold vintage-accent mb-6 text-center">Các lĩnh vực trọng điểm</h4>
                                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                                        {[
                                            { name: 'Ngân hàng, tài chính', icon: '🏦', color: 'from-blue-400 to-blue-500' },
                                            { name: 'Đất đai, quy hoạch', icon: '🏗️', color: 'from-green-400 to-green-500' },
                                            { name: 'Giao thông, xây dựng', icon: '🚗', color: 'from-orange-400 to-orange-500' },
                                            { name: 'Y tế, giáo dục', icon: '🏥', color: 'from-red-400 to-red-500' },
                                            { name: 'Quản lý nhà nước', icon: '🏛️', color: 'from-purple-400 to-purple-500' }
                                        ].map((field, idx) => (
                                            <div key={idx} className={`p-6 rounded-xl bg-linear-to-br ${field.color} text-white text-center hover:scale-105 transition-transform duration-300 shadow-lg`}>
                                                <div className="text-4xl mb-3">{field.icon}</div>
                                                <p className="font-bold text-sm leading-snug">{field.name}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Đối tượng bị xử lý */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                                    <div className="p-8 rounded-2xl bg-linear-to-br from-red-50 to-orange-50 border-2 border-red-900/20 text-center">
                                        <Shield className="w-16 h-16 mx-auto mb-4 text-red-900" />
                                        <h4 className="text-xl font-bold vintage-accent mb-3">Không phân biệt cấp bậc</h4>
                                        <p className="vintage-text">Từ công chức cơ sở đến Ủy viên Bộ Chính trị</p>
                                    </div>

                                    <div className="p-8 rounded-2xl bg-linear-to-br from-orange-50 to-yellow-50 border-2 border-orange-900/20 text-center">
                                        <Users className="w-16 h-16 mx-auto mb-4 text-orange-900" />
                                        <h4 className="text-xl font-bold vintage-accent mb-3">Không phân biệt chức vụ</h4>
                                        <p className="vintage-text">Bộ trưởng, Bí thư tỉnh ủy, sĩ quan cấp tướng</p>
                                    </div>

                                    <div className="p-8 rounded-2xl bg-linear-to-br from-yellow-50 to-amber-50 border-2 border-yellow-900/20 text-center">
                                        <Target className="w-16 h-16 mx-auto mb-4 text-yellow-900" />
                                        <h4 className="text-xl font-bold vintage-accent mb-3">Không có ngoại lệ</h4>
                                        <p className="vintage-text">Đương chức hay đã nghỉ việc đều bị xử lý</p>
                                    </div>
                                </div>

                                {/* Cam kết của Đảng */}
                                <div className="p-10 rounded-2xl bg-linear-to-br from-red-900 to-orange-900 text-white shadow-2xl">
                                    <Quote className="w-14 h-14 mx-auto mb-6 text-yellow-400" />
                                    <h4 className="text-2xl font-bold text-center mb-6 text-yellow-400">Cam kết của Đảng trong Cương lĩnh 2011</h4>
                                    <p className="text-xl md:text-2xl italic text-center leading-relaxed">
                                        "Quan liêu, tham nhũng, xa rời Nhân dân sẽ dẫn đến những tổn thất khôn lường đối với
                                        vận mệnh của đất nước, của chế độ XHCN và của Đảng"
                                    </p>
                                </div>
                            </div>

                            {/* Phần 3: Ý nghĩa xử lý nghiêm minh */}
                            <div>
                                <h3 className="text-4xl font-bold vintage-heading mb-8 text-center">Ý nghĩa xử lý nghiêm minh</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="p-8 rounded-2xl bg-linear-to-br from-blue-50 to-indigo-50 border-2 border-blue-900/20">
                                        <div className="flex items-center gap-3 mb-4">
                                            <Shield className="w-12 h-12 text-blue-900" />
                                            <h4 className="text-xl font-bold vintage-heading">Bảo vệ chế độ</h4>
                                        </div>
                                        <p className="vintage-text leading-relaxed">
                                            Phòng, chống tham nhũng góp phần <span className="font-bold text-blue-900">bảo vệ chế độ xã hội chủ nghĩa</span>,
                                            củng cố vai trò lãnh đạo của Đảng, xây dựng Nhà nước pháp quyền.
                                        </p>
                                    </div>

                                    <div className="p-8 rounded-2xl bg-linear-to-br from-green-50 to-emerald-50 border-2 border-green-900/20">
                                        <div className="flex items-center gap-3 mb-4">
                                            <TrendingUp className="w-12 h-12 text-green-900" />
                                            <h4 className="text-xl font-bold vintage-heading">Tăng trưởng kinh tế</h4>
                                        </div>
                                        <p className="vintage-text leading-relaxed">
                                            Giảm tham nhũng tạo <span className="font-bold text-green-900">môi trường đầu tư lành mạnh</span>,
                                            tăng hiệu quả sử dụng ngân sách, nâng cao đời sống nhân dân.
                                        </p>
                                    </div>

                                    <div className="p-8 rounded-2xl bg-linear-to-br from-purple-50 to-pink-50 border-2 border-purple-900/20">
                                        <div className="flex items-center gap-3 mb-4">
                                            <Heart className="w-12 h-12 text-purple-900" />
                                            <h4 className="text-xl font-bold vintage-heading">Giá trị đạo đức</h4>
                                        </div>
                                        <p className="vintage-text leading-relaxed">
                                            Làm lành mạnh các quan hệ xã hội, <span className="font-bold text-purple-900">ngăn chặn sự suy đồi đạo đức</span>,
                                            duy trì giá trị truyền thống tốt đẹp.
                                        </p>
                                    </div>

                                    <div className="p-8 rounded-2xl bg-linear-to-br from-amber-50 to-yellow-50 border-2 border-amber-900/20">
                                        <div className="flex items-center gap-3 mb-4">
                                            <Award className="w-12 h-12 text-amber-900" />
                                            <h4 className="text-xl font-bold vintage-heading">Củng cố niềm tin</h4>
                                        </div>
                                        <p className="vintage-text leading-relaxed">
                                            Phòng, chống tham nhũng góp phần <span className="font-bold text-amber-900">củng cố niềm tin của nhân dân</span>
                                            vào chế độ và pháp luật.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ContentCard>
                </StoryPanel>

                {/* SECTION 8: CRITICAL QUESTION (CQ) */}
                <StoryPanel id="critical-question" data-bg-index="2">
                    <ContentCard>
                        {/* Header CQ */}
                        <div className="text-center mb-16">
                            <div className="inline-block px-8 py-3 rounded-full bg-blue-900/10 border border-blue-900/30 mb-6">
                                <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-900">
                                    Trả lời Câu hỏi CQ
                                </p>
                            </div>
                            <h2 className="text-5xl md:text-7xl font-black vintage-heading mb-8">Câu hỏi CQ</h2>
                            <div className="max-w-4xl mx-auto p-10 rounded-2xl bg-linear-to-br from-blue-900 to-indigo-900 text-white shadow-2xl">
                                <p className="text-3xl md:text-4xl font-bold leading-tight">{cqArguments?.critical_question}</p>
                            </div>
                        </div>

                        <div className="space-y-20">
                            {/* ========== PHẦN 1: PHỦ ĐỊNH LUẬN ĐIỂM SAI TRÁI ========== */}
                            <div>
                                <div className="text-center mb-12">
                                    <div className="inline-flex items-center gap-3 mb-6">
                                        <div className="w-12 h-12 rounded-full bg-red-900 text-white flex items-center justify-center text-2xl font-black">1</div>
                                        <h3 className="text-4xl font-bold vintage-heading">Phủ định luận điểm sai trái</h3>
                                    </div>
                                    <p className="text-lg vintage-subtext max-w-3xl mx-auto">
                                        Luận cứ khoa học để bác bỏ quan điểm sai lầm của thế lực thù địch
                                    </p>
                                </div>

                                {/* A. Luận điểm sai trái */}
                                <div className="mb-10 p-10 rounded-2xl bg-linear-to-br from-red-50 to-pink-50 border-2 border-red-900/30">
                                    <h4 className="text-2xl font-bold text-red-900 mb-6 flex items-center gap-3">
                                        <AlertTriangle className="w-10 h-10" />
                                        A. Luận điểm sai trái của thế lực thù địch
                                    </h4>
                                    <p className="text-lg vintage-text mb-6 italic">
                                        Các thế lực thù địch thời gian qua cố gieo rắc quan điểm sai trái rằng:
                                    </p>
                                    <div className="space-y-4">
                                        {wrongArguments.map((claim, idx) => (
                                            <div key={idx} className="p-6 rounded-xl bg-white/80 border-l-4 border-red-800 hover:shadow-lg transition-shadow">
                                                <div className="flex items-start gap-4">
                                                    <span className="shrink-0 w-8 h-8 rounded-full bg-red-900 text-white flex items-center justify-center font-bold">
                                                        ✗
                                                    </span>
                                                    <p className="text-lg vintage-text font-medium leading-relaxed">{claim}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* B. Sự thật khoa học */}
                                <div className="p-10 rounded-2xl bg-linear-to-br from-green-50 to-emerald-50 border-2 border-green-900/30">
                                    <h4 className="text-2xl font-bold text-green-900 mb-6 flex items-center gap-3">
                                        <CheckCircle2 className="w-10 h-10" />
                                        B. Sự thật khoa học
                                    </h4>
                                    <div className="space-y-8">
                                        {scientificTruths.map((truth, idx) => (
                                            <div key={idx} className="p-8 rounded-xl bg-white/80 border-l-4 border-green-800 hover:shadow-lg transition-shadow">
                                                <div className="flex items-start gap-4">
                                                    <div className="shrink-0">
                                                        <div className="w-10 h-10 rounded-full bg-green-900 text-white flex items-center justify-center font-black text-lg mb-3">
                                                            {idx + 1}
                                                        </div>
                                                        <p className="text-xs font-bold text-green-900 uppercase tracking-wider">Luận cứ {idx + 1}</p>
                                                    </div>
                                                    <p className="text-lg vintage-text leading-relaxed">{truth}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* ========== PHẦN 2: SO SÁNH VỚI CHẾ ĐỘ ĐA ĐẢNG - BẰNG CHỨNG CPI ========== */}
                            <div>
                                <div className="text-center mb-12">
                                    <div className="inline-flex items-center gap-3 mb-6">
                                        <div className="w-12 h-12 rounded-full bg-blue-900 text-white flex items-center justify-center text-2xl font-black">2</div>
                                        <h3 className="text-4xl font-bold vintage-heading">So sánh với chế độ đa đảng</h3>
                                    </div>
                                    <p className="text-lg vintage-subtext max-w-3xl mx-auto">
                                        Bằng chứng từ Chỉ số CPI và thực tiễn quốc tế
                                    </p>
                                </div>

                                {/* A. Đa đảng không phải phép màu */}
                                <div className="mb-10 p-12 rounded-3xl bg-linear-to-br from-amber-900 to-orange-900 text-white shadow-2xl">
                                    <BarChart3 className="w-20 h-20 mx-auto mb-6 text-yellow-400" />
                                    <h4 className="text-4xl font-black mb-8 text-yellow-400 text-center">
                                        A. "Đa đảng KHÔNG phải phép màu để chống tham nhũng"
                                    </h4>
                                    <div className="space-y-6">
                                        <div className="p-8 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20">
                                            <h5 className="text-xl font-bold text-yellow-400 mb-4">Thực tế quốc tế:</h5>
                                            <p className="text-xl leading-relaxed">
                                                Theo Tổ chức Minh bạch Quốc tế, tham nhũng là hiện tượng phổ biến, xảy ra ở nhiều quốc gia trên thế giới.
                                                <span className="font-bold text-yellow-300"> "Phần lớn tham nhũng xảy ra ở các quốc gia có chế độ đa đảng, 'tam quyền phân lập'".</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Chỉ số CPI của Việt Nam */}
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
                                    <div className="p-10 rounded-2xl bg-linear-to-br from-blue-50 to-indigo-50 border-2 border-blue-900/30">
                                        <div className="flex items-center gap-3 mb-6">
                                            <BarChart3 className="w-12 h-12 text-blue-900" />
                                            <h4 className="text-2xl font-bold vintage-heading">Chỉ số CPI của Việt Nam</h4>
                                        </div>
                                        <div className="space-y-6">
                                            <div className="p-8 bg-white/90 rounded-2xl text-center shadow-lg">
                                                <p className="text-sm vintage-subtext mb-3 uppercase font-bold">Năm 2023</p>
                                                <div className="flex items-center justify-center gap-6 mb-4">
                                                    <div>
                                                        <p className="text-7xl font-black vintage-number text-blue-900">41</p>
                                                        <p className="text-xl vintage-accent font-bold">/100 điểm</p>
                                                    </div>
                                                    <div className="w-px h-20 bg-blue-900/20"></div>
                                                    <div>
                                                        <p className="text-7xl font-black vintage-number text-blue-900">83</p>
                                                        <p className="text-xl vintage-accent font-bold">/180 nước</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-10 rounded-2xl bg-linear-to-br from-green-50 to-emerald-50 border-2 border-green-900/30">
                                        <div className="flex items-center gap-3 mb-6">
                                            <TrendingUp className="w-12 h-12 text-green-900" />
                                            <h4 className="text-2xl font-bold vintage-heading">Điều này có nghĩa gì?</h4>
                                        </div>
                                        <div className="space-y-6">
                                            <div className="p-6 bg-white/90 rounded-xl border-l-4 border-green-800">
                                                <CheckCircle2 className="w-10 h-10 text-green-900 mb-3" />
                                                <p className="text-lg vintage-text leading-relaxed font-semibold">
                                                    Có <span className="text-4xl font-black text-green-900">97</span> quốc gia xếp dưới Việt Nam về mức độ trong sạch
                                                </p>
                                            </div>
                                            <div className="p-6 bg-white/90 rounded-xl border-l-4 border-green-800">
                                                <CheckCircle2 className="w-10 h-10 text-green-900 mb-3" />
                                                <p className="text-lg vintage-text leading-relaxed font-semibold">
                                                    Trong đó <span className="font-black text-green-900">đa số là các nước có chế độ đa đảng</span>
                                                </p>
                                            </div>
                                            <div className="p-6 bg-white/90 rounded-xl border-l-4 border-emerald-800">
                                                <h5 className="text-base font-bold vintage-accent mb-2">Xu hướng tích cực:</h5>
                                                <p className="text-base vintage-text leading-relaxed">
                                                    Từ 2015-2023: CPI Việt Nam <span className="font-bold text-emerald-900">tăng 10 điểm</span>,
                                                    vượt cả Trung Quốc (42/100, chỉ tăng 6 điểm từ 2014)
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* B. Thực chất của đa đảng */}
                                <div className="p-10 rounded-2xl bg-linear-to-br from-purple-50 to-pink-50 border-2 border-purple-900/30">
                                    <h4 className="text-2xl font-bold vintage-heading mb-8 text-center">
                                        B. Thực chất của "đa đảng" ở các nước tư bản
                                    </h4>
                                    <div className="p-8 bg-white/80 rounded-2xl border-l-4 border-purple-800 mb-8">
                                        <Quote className="w-12 h-12 text-purple-900 mb-4" />
                                        <p className="text-lg vintage-text italic leading-relaxed mb-4">
                                            Tổng Bí thư Nguyễn Phú Trọng đã chỉ rõ: "Tại các nước tư bản phát triển, các cuộc bầu cử được gọi là 'tự do',
                                            'dân chủ' dù có thể thay đổi chính phủ nhưng không thể thay đổi được các thế lực thống trị;
                                            đằng sau hệ thống đa đảng trên thực tế vẫn là sự chuyên chế của các tập đoàn tư bản".
                                        </p>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        <div className="p-8 bg-linear-to-br from-purple-900 to-pink-900 rounded-2xl text-white text-center shadow-lg">
                                            <p className="text-lg font-semibold leading-relaxed">Các đảng đại diện <span className="font-black text-yellow-400">tập đoàn tư bản khác nhau</span></p>
                                        </div>
                                        <div className="p-8 bg-linear-to-br from-purple-900 to-pink-900 rounded-2xl text-white text-center shadow-lg">
                                            <p className="text-lg font-semibold leading-relaxed">Cùng chung <span className="font-black text-yellow-400">bản chất giai cấp tư sản</span></p>
                                        </div>
                                        <div className="p-8 bg-linear-to-br from-purple-900 to-pink-900 rounded-2xl text-white text-center shadow-lg">
                                            <p className="text-lg font-semibold leading-relaxed">Thực chất: <span className="font-black text-yellow-400">"Nhất nguyên tư bản"</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* ========== PHẦN 3: YẾU TỐ QUYẾT ĐỊNH ========== */}
                            <div>
                                <div className="text-center mb-12">
                                    <div className="inline-flex items-center gap-3 mb-6">
                                        <div className="w-12 h-12 rounded-full bg-orange-900 text-white flex items-center justify-center text-2xl font-black">3</div>
                                        <h3 className="text-4xl font-bold vintage-heading">Yếu tố quyết định hiệu quả PCTN</h3>
                                    </div>
                                    <p className="text-3xl vintage-accent max-w-3xl mx-auto font-bold">
                                        Không phải chế độ chính trị, mà là:
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {/* 1. Kiểm soát quyền lực */}
                                    <div className="p-10 rounded-2xl bg-linear-to-br from-red-50 to-orange-50 border-2 border-red-900/30">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="w-10 h-10 rounded-full bg-red-900 text-white flex items-center justify-center font-bold">1</div>
                                            <h4 className="text-2xl font-bold vintage-accent">Kiểm soát quyền lực chặt chẽ</h4>
                                        </div>
                                        <p className="text-lg vintage-text leading-relaxed mb-6 italic">
                                            "Chỉ khi quyền lực được kiểm soát chặt chẽ với cơ chế quản lý, phòng ngừa đồng bộ,
                                            ngày càng hoàn thiện thì quyền lực sẽ không thể bị lạm dụng, tình trạng tham nhũng sẽ được kiểm soát và hạn chế tối đa".
                                        </p>
                                    </div>

                                    {/* 2. Chất lượng pháp luật */}
                                    <div className="p-10 rounded-2xl bg-linear-to-br from-blue-50 to-indigo-50 border-2 border-blue-900/30">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="w-10 h-10 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold">2</div>
                                            <h4 className="text-2xl font-bold vintage-accent">Chất lượng hệ thống pháp luật</h4>
                                        </div>
                                        <p className="text-lg vintage-text leading-relaxed">
                                            "Việc ban hành và áp dụng các văn bản pháp luật, đặc biệt là các văn bản pháp luật để xử lý nghiêm minh
                                            các hành vi tham nhũng được coi là <span className="font-bold text-blue-900">công cụ hữu hiệu</span> trong việc phòng ngừa
                                            và đấu tranh chống tham nhũng".
                                        </p>
                                    </div>

                                    {/* 3. Phẩm chất cán bộ */}
                                    <div className="p-10 rounded-2xl bg-linear-to-br from-green-50 to-emerald-50 border-2 border-green-900/30">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="w-10 h-10 rounded-full bg-green-900 text-white flex items-center justify-center font-bold">3</div>
                                            <h4 className="text-2xl font-bold vintage-accent">Phẩm chất cán bộ, công chức</h4>
                                        </div>
                                        <p className="text-lg vintage-text leading-relaxed">
                                            Đại hội XIII xác định: "Tăng cường xây dựng, chỉnh đốn Đảng; ngăn chặn, đẩy lùi suy thoái về tư tưởng chính trị,
                                            đạo đức, lối sống, biểu hiện <span className="font-bold text-green-900">'tự diễn biến', 'tự chuyển hóa'</span> trong nội bộ".
                                        </p>
                                    </div>

                                    {/* 4. Năng lực quản trị */}
                                    <div className="p-10 rounded-2xl bg-linear-to-br from-purple-50 to-pink-50 border-2 border-purple-900/30">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="w-10 h-10 rounded-full bg-purple-900 text-white flex items-center justify-center font-bold">4</div>
                                            <h4 className="text-2xl font-bold vintage-accent">Năng lực quản trị của Nhà nước</h4>
                                        </div>
                                        <p className="text-lg vintage-text leading-relaxed">
                                            Công tác thanh tra, kiểm toán, điều tra phải được <span className="font-bold text-purple-900">tăng cường và hoàn thiện liên tục</span>
                                            để phát hiện và xử lý kịp thời các hành vi tham nhũng.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* ========== PHẦN 4: BẰNG CHỨNG THỰC TẾ TỪ VIỆT NAM ========== */}
                            <div>
                                <div className="text-center mb-12">
                                    <div className="inline-flex items-center gap-3 mb-6">
                                        <div className="w-12 h-12 rounded-full bg-green-900 text-white flex items-center justify-center text-2xl font-black">4</div>
                                        <h3 className="text-4xl font-bold vintage-heading">Bằng chứng thực tế từ Việt Nam</h3>
                                    </div>
                                    <p className="text-lg vintage-subtext max-w-3xl mx-auto">
                                        Quyết tâm và kết quả cụ thể trong phòng, chống tham nhũng
                                    </p>
                                </div>

                                {/* A. Đảng coi PCTN là mệnh lệnh sống còn */}
                                <div className="mb-10 p-12 rounded-3xl bg-linear-to-br from-red-900 via-orange-900 to-yellow-900 text-white shadow-2xl">
                                    <Flame className="w-20 h-20 mx-auto mb-8 text-yellow-300" />
                                    <h4 className="text-4xl font-black mb-10 text-center text-yellow-300">
                                        A. Đảng coi tham nhũng là "mệnh lệnh sống còn"
                                    </h4>
                                    <div className="space-y-6">
                                        {partyCommitment.map((commitment, idx) => (
                                            <div key={idx} className="p-8 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all">
                                                <div className="flex items-start gap-4">
                                                    <CheckCircle2 className="w-8 h-8 shrink-0 mt-1 text-yellow-300" />
                                                    <p className="text-xl leading-relaxed">{commitment}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* B. "Ta đánh ta" */}
                                <div className="mb-10 p-10 rounded-2xl bg-linear-to-br from-amber-50 to-yellow-50 border-2 border-amber-900/30">
                                    <h4 className="text-3xl font-bold vintage-heading mb-8 text-center">
                                        B. "Ta đánh ta" - Không vùng cấm, không ngoại lệ
                                    </h4>
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                                        <div className="p-8 bg-white/90 rounded-2xl border-2 border-amber-900/20">
                                            <h5 className="text-2xl font-bold vintage-accent mb-6 flex items-center gap-2">
                                                <Scale className="w-8 h-8" />
                                                Nguyên tắc xử lý
                                            </h5>
                                            <div className="space-y-4">
                                                <div className="p-6 bg-amber-50 rounded-xl">
                                                    <p className="text-base vintage-text leading-relaxed">
                                                        <span className="font-bold text-amber-900">Nghị quyết Đại hội XIII:</span> "Xử lý nghiêm minh, kịp thời, công khai cán bộ,
                                                        công chức tham nhũng, không phân biệt chức vụ và địa vị xã hội, còn đương chức hay đã nghỉ việc".
                                                    </p>
                                                </div>
                                                <div className="p-6 bg-red-50 rounded-xl border-l-4 border-red-800">
                                                    <p className="text-lg vintage-text leading-relaxed font-bold">
                                                        Phương châm: <span className="text-red-900">"Không có vùng cấm, không có ngoại lệ, bất kể người đó là ai".</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="p-8 bg-white/90 rounded-2xl border-2 border-green-900/20">
                                            <h5 className="text-2xl font-bold vintage-accent mb-6 flex items-center gap-2">
                                                <Award className="w-8 h-8" />
                                                C. Kết quả cụ thể chứng minh quyết tâm
                                            </h5>
                                            <div className="space-y-4">
                                                {[
                                                    { value: '105', label: 'cán bộ diện Trung ương quản lý', color: 'red' },
                                                    { value: '22', label: 'Ủy viên/nguyên Ủy viên Trung ương', color: 'orange' },
                                                    { value: '4', label: 'Ủy viên Bộ Chính trị', color: 'amber' },
                                                    { value: '30', label: 'sĩ quan cấp tướng', color: 'green' }
                                                ].map((item, idx) => (
                                                    <div key={idx} className={`flex items-center gap-4 p-4 bg-${item.color}-50 rounded-xl border-l-4 border-${item.color}-700`}>
                                                        <div className={`text-4xl font-black text-${item.color}-900`}>{item.value}</div>
                                                        <div className="text-base vintage-text font-semibold">{item.label}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Đánh giá của Đại hội XIII */}
                                <div className="p-10 rounded-2xl bg-linear-to-br from-green-50 to-emerald-50 border-2 border-green-900/30">
                                    <h4 className="text-2xl font-bold vintage-heading mb-6 flex items-center gap-3">
                                        <Award className="w-10 h-10 text-green-900" />
                                        Đánh giá của Đại hội XIII về công tác PCTN
                                    </h4>
                                    <div className="p-8 bg-white/90 rounded-2xl border-l-4 border-green-800 shadow-lg">
                                        <Quote className="w-12 h-12 text-green-900 mb-4" />
                                        <p className="text-xl vintage-text italic leading-relaxed font-medium">
                                            "Công tác kiểm tra, giám sát và đấu tranh phòng, chống tham nhũng, lãng phí, tiêu cực được triển khai quyết liệt,
                                            bài bản, đi vào chiều sâu, có bước đột phá và đạt những kết quả cụ thể, rõ rệt. Nhiều vụ án kinh tế, tham nhũng
                                            được phát hiện, điều tra, khởi tố, xét xử nghiêm minh, tạo sức răn đe, cảnh tỉnh, được cán bộ, đảng viên và
                                            Nhân dân hoan nghênh, đánh giá cao và đồng tình ủng hộ".
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* ========== PHẦN 5: KẾT LUẬN - TRẢ LỜI TRỰC TIẾP CQ ========== */}
                            <div>
                                <div className="text-center mb-12">
                                    <div className="inline-flex items-center gap-3 mb-6">
                                        <div className="w-12 h-12 rounded-full bg-purple-900 text-white flex items-center justify-center text-2xl font-black">5</div>
                                        <h3 className="text-4xl font-bold vintage-heading">Kết luận - Trả lời trực tiếp CQ</h3>
                                    </div>
                                </div>

                                <div className="p-16 rounded-3xl bg-linear-to-br from-red-900 via-orange-900 to-purple-900 text-white shadow-2xl">
                                    <Target className="w-24 h-24 mx-auto mb-10 text-yellow-400" />

                                    <div className="max-w-4xl mx-auto space-y-10">
                                        <div className="text-center mb-10">
                                            <p className="text-5xl md:text-6xl font-black leading-tight mb-6 text-yellow-400">KHÔNG!</p>
                                            <p className="text-3xl md:text-4xl font-bold leading-tight">
                                                Một đảng cầm quyền KHÔNG PHẢI là nguyên nhân dẫn đến tham nhũng ở Việt Nam
                                            </p>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="p-8 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20">
                                                <div className="flex items-start gap-4">
                                                    <div className="shrink-0 w-10 h-10 rounded-full bg-yellow-400 text-purple-900 flex items-center justify-center font-black">1</div>
                                                    <div>
                                                        <h5 className="text-xl font-bold mb-2 text-yellow-400">Về mặt lý luận:</h5>
                                                        <p className="text-lg leading-relaxed">
                                                            Tham nhũng là "khuyết tật bẩm sinh" của quyền lực, không phụ thuộc vào số lượng đảng hay thể chế chính trị.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="p-8 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20">
                                                <div className="flex items-start gap-4">
                                                    <div className="shrink-0 w-10 h-10 rounded-full bg-yellow-400 text-purple-900 flex items-center justify-center font-black">2</div>
                                                    <div>
                                                        <h5 className="text-xl font-bold mb-2 text-yellow-400">Về mặt thực tiễn:</h5>
                                                        <p className="text-lg leading-relaxed">
                                                            Việt Nam xếp hạng 83/180 quốc gia về CPI, có 97 quốc gia (đa số đa đảng) xếp dưới Việt Nam.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="p-8 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20">
                                                <div className="flex items-start gap-4">
                                                    <div className="shrink-0 w-10 h-10 rounded-full bg-yellow-400 text-purple-900 flex items-center justify-center font-black">3</div>
                                                    <div>
                                                        <h5 className="text-xl font-bold mb-2 text-yellow-400">Về mặt kết quả:</h5>
                                                        <p className="text-lg leading-relaxed">
                                                            Đảng Cộng sản Việt Nam đã xử lý nghiêm hàng trăm cán bộ cấp cao, thu hồi hàng trăm nghìn tỷ đồng -
                                                            minh chứng quyết tâm chống tham nhũng không phụ thuộc vào số lượng đảng.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="p-8 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20">
                                                <div className="flex items-start gap-4">
                                                    <div className="shrink-0 w-10 h-10 rounded-full bg-yellow-400 text-purple-900 flex items-center justify-center font-black">4</div>
                                                    <div>
                                                        <h5 className="text-xl font-bold mb-2 text-yellow-400">Về mặt bản chất:</h5>
                                                        <p className="text-lg leading-relaxed">
                                                            Yếu tố quyết định là cơ chế kiểm soát quyền lực, chất lượng pháp luật và phẩm chất cán bộ,
                                                            chứ không phải số lượng đảng chính trị.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-12 p-8 bg-yellow-400/20 rounded-2xl border-2 border-yellow-400">
                                            <p className="text-2xl md:text-3xl font-bold text-center leading-relaxed text-yellow-300">
                                                {cqArguments?.conclusion}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ContentCard>
                </StoryPanel>

                {/* SECTION 10: AI TOOLS */}
                <StoryPanel id="references" className="pb-32" data-bg-index="2">
                    <ContentCard className="space-y-10 text-left">
                        <h2 className="text-4xl md:text-5xl font-black vintage-heading text-center">Công cụ AI hỗ trợ dự án</h2>
                        <p className="vintage-subtext text-center max-w-3xl mx-auto text-base md:text-lg">
                            Việc xây dựng nội dung và hình thức trình bày được hỗ trợ bởi các nền tảng trí tuệ nhân tạo hiện đại,
                            giúp tăng tốc thu thập tư liệu và hoàn thiện trải nghiệm thị giác của sản phẩm học tập.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="p-8 rounded-2xl bg-white/85 border border-amber-900/20 shadow-lg hover:shadow-xl transition-shadow">
                                <div className="flex items-start gap-4">
                                    <BookOpen className="w-8 h-8 text-amber-900 shrink-0 mt-1" />
                                    <div className="space-y-3">
                                        <h3 className="text-2xl font-bold vintage-heading">Tìm kiếm tư liệu</h3>
                                        <p className="text-base md:text-lg vintage-text leading-relaxed">
                                            Nội dung lịch sử được tra cứu và đối chiếu với sự hỗ trợ của <span className="font-semibold">Microsoft Bing Copilot</span> và <span className="font-semibold">Perplexity AI</span>, giúp tổng hợp nhanh các nguồn báo chí, tư liệu và bài viết chuyên sâu
                                            liên quan đến chiến dịch phòng, chống tham nhũng.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-8 rounded-2xl bg-white/85 border border-amber-900/20 shadow-lg hover:shadow-xl transition-shadow">
                                <div className="flex items-start gap-4">
                                    <Layers3 className="w-8 h-8 text-amber-900 shrink-0 mt-1" />
                                    <div className="space-y-3">
                                        <h3 className="text-2xl font-bold vintage-heading">Thiết kế giao diện</h3>
                                        <p className="text-base md:text-lg vintage-text leading-relaxed">
                                            Ý tưởng bố cục, màu sắc và phong cách typography được phác thảo bằng <span className="font-semibold">Figma AI</span> và hoàn thiện nhờ gợi ý của <span className="font-semibold">Claude Artifacts</span>, đảm bảo sự nhất quán thị giác giữa các màn hình
                                            và phản ánh đúng tinh thần dự án.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-center text-xs vintage-subtext pt-6 border-t border-amber-900/20">
                            <p>© 2025 - Dự án học tập Chủ nghĩa Xã hội Khoa học • Phiên bản thử nghiệm có trợ giúp AI</p>
                        </div>
                    </ContentCard>
                </StoryPanel>
            </main>

            <ScrollToTop />
        </div>
    )
}