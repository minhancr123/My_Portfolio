import { useState, useEffect } from 'react'
import {
  ArrowDown,
  Download,
  Eye,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  MapPin,
  Check,
  Copy,
  ExternalLink,
  Briefcase,
  GraduationCap,
  Award,
  Sparkles,
  Code2,
  Workflow,
  Database,
  Cloud,
  Printer,
  ChevronRight,
  Sun,
  Moon,
  Send,
  FileText,
  Activity,
  Cpu,
  Layers,
  Play,
  Phone,
  Globe
} from 'lucide-react'

// Types
type Language = 'en' | 'vi'

interface Project {
  id: string
  name: string
  category: string
  tagline: { en: string; vi: string }
  summary: { en: string; vi: string }
  details: { en: string[]; vi: string[] }
  stack: string[]
  live?: string
  repo?: string
  image?: string
  featured: boolean
  architecture?: {
    challenge: { en: string; vi: string }
    solution: { en: string; vi: string }
    impact: { en: string; vi: string }
  }
}

interface Job {
  company: string
  logo?: string
  context: string
  role: { en: string; vi: string }
  period: { en: string; vi: string }
  location: { en: string; vi: string }
  bullets: { en: string[]; vi: string[] }
  stack: string
}

// Data definitions
const projects: Project[] = [
  {
    id: 'gascolae',
    name: 'GASCOLAE Platform',
    category: 'Enterprise / UAV Services & Practical AI',
    featured: true,
    tagline: {
      en: 'Ecosystem of 14 UAV service portals powered by domain-grounded conversational AI workflows.',
      vi: 'Hệ sinh thái 14 website dịch vụ kỹ thuật UAV tích hợp trợ lý AI chuyên ngành.'
    },
    summary: {
      en: 'Architected and deployed 14 high-throughput UAV technical service portals for high-voltage substation maintenance, industrial safety, and solar-farm Smart O&M, featuring AI-assisted consultation and automated lead capture.',
      vi: 'Xây dựng 14 website dịch vụ UAV chuyên dụng cho bảo trì trạm biến áp, Solar-farm O&M và kiểm tra an toàn công nghiệp với trợ lý ảo AI và quy trình thu thập khách hàng tự động.'
    },
    details: {
      en: [
        'Built modular, high-speed Tailwind components, SEO metadata schemas, interactive FAQ accordions, and dual RGB / Thermal sensor comparison toggles.',
        'Engineered domain-grounded conversational AI configurations with 150+ specialized prompts and 190+ automated test suites mitigating safety hallucinations and automating lead escalation.',
        'Authored and audited 12 comprehensive deliverables per service package: technical knowledge bases, Standard Operating Procedures (SOPs), technical proposals, and commercial sales kits.',
        'Benchmarked approximately 30 international UAV service competitors per package with cited sources.',
        'Deployed to Firebase Hosting with automated CI/CD and sub-second initial load speeds.'
      ],
      vi: [
        'Xây dựng các component Tailwind tái sử dụng, tối ưu SEO/metadata, FAQ tương tác và bộ chuyển đổi hiển thị camera RGB / Thermal.',
        'Thiết kế cấu hình trợ lý AI với 150 prompt chuyên ngành và hơn 190 test cases kiểm thử grounding (chống ảo giác), phân loại dữ liệu và chuyển giao chuyên viên (human escalation).',
        'Bàn giao 12 deliverables hoàn chỉnh cho từng dịch vụ: knowledge base, quy trình thao tác chuẩn (SOP), bản đề xuất kỹ thuật và bộ tài liệu bán hàng (sales kit).',
        'Benchmark dữ liệu từ ~30 đối thủ quốc tế có trích nguồn rõ ràng.',
        'Đã triển khai thực tế trên Firebase Hosting với tốc độ phản hồi cao.'
      ]
    },
    stack: ['Next.js', 'Tailwind CSS', 'Alpine.js', 'Firebase Hosting', 'OpenAI RAG', 'CI/CD'],
    live: 'https://analog-codex-489902-p7.web.app/',
    image: '/projects/gascolae-demo.jpg',
    architecture: {
      challenge: {
        en: 'B2B enterprise clients require fast, authoritative technical specifications for drone-based high-voltage grid inspections without AI hallucinations or misleading electrical clearance data.',
        vi: 'Khách hàng B2B cần hiểu nhanh thông số kỹ thuật phức tạp của máy bay không người lái (UAV) và cần kênh tư vấn 24/7 chính xác, không được sai lệch số liệu an toàn điện.'
      },
      solution: {
        en: 'Engineered a specialized knowledge base with 150 domain-grounded prompts, 190 automated test cases, and graceful human handoff workflows whenever user inquiries exceed system thresholds.',
        vi: 'Thiết kế hệ thống knowledge base độc quyền với 150 prompt chuyên sâu, kiểm thử 190 test cases với logic escalation sang nhân viên kinh doanh khi câu hỏi vượt thẩm quyền.'
      },
      impact: {
        en: 'Delivered 14 production service portals for CT Group, digitizing 100% of technical collateral and significantly accelerating B2B client acquisition pipelines.',
        vi: 'Đưa 14 dịch vụ vào hoạt động thực tế tại CT Group, số hóa 100% tài liệu kỹ thuật và tăng tốc độ tiếp cận khách hàng tiềm năng.'
      }
    }
  },
  {
    id: 'megamart',
    name: 'MegaMart E-Commerce',
    category: 'Full-Stack Commerce & Concurrency Control',
    featured: true,
    tagline: {
      en: 'High-traffic commerce platform eliminating inventory overselling via conditional database transactions.',
      vi: 'Nền tảng thương mại điện tử giải quyết bài toán chống bán vượt tồn kho (Overselling).'
    },
    summary: {
      en: 'A high-concurrency e-commerce platform pairing a Next.js storefront with a modular NestJS backend, implementing strict inventory locking, SePay bank-transfer webhook automation, and admin business intelligence.',
      vi: 'Hệ thống e-commerce hoàn chỉnh với storefront Next.js và backend modular NestJS, xử lý đặt hàng đồng thời, tích hợp thanh toán ngân hàng tự động SePay và quản trị kinh doanh.'
    },
    details: {
      en: [
        'JWT authentication with Role-Based Access Control (RBAC); automated SePay bank-transfer reconciliation via secure webhooks and COD checkout.',
        'Eliminated inventory overselling during flash-sale spikes through atomic PostgreSQL / Prisma database transactions and conditional stock reservation.',
        'Implemented background cron workers to automatically release reserved inventory from expired unpaid orders.',
        'Built full administrative dashboards for sales metrics, inventory auditing, and containerized deployment with Docker Compose, Nginx, and GitHub Actions CI/CD.'
      ],
      vi: [
        'Xác thực người dùng qua JWT và phân quyền theo vai trò (RBAC); thanh toán chuyển khoản ngân hàng tự động qua webhook SePay và COD.',
        'Giải quyết triệt để bài toán overselling khi flash sale nhờ PostgreSQL/Prisma database transactions và conditional stock reservations.',
        'Tự động giải phóng tồn kho cho các đơn hàng hết hạn thanh toán bằng scheduled cron jobs.',
        'Bảng điều khiển quản trị (Admin Dashboard) báo cáo doanh thu, quản lý danh mục và cấu hình deployment Docker Compose / Nginx / GitHub Actions.'
      ]
    },
    stack: ['Next.js', 'NestJS', 'PostgreSQL', 'Prisma', 'Redis', 'Zustand', 'Docker', 'GitHub Actions'],
    live: 'https://megamart24.tech/',
    repo: 'https://github.com/minhancr123/MegaMart',
    image: '/projects/megamart-demo.png',
    architecture: {
      challenge: {
        en: 'Race conditions during flash sales can lead to overselling limited inventory when hundreds of customers trigger simultaneous checkout operations.',
        vi: 'Trong các đợt flash sale hoặc khi nhiều người mua cùng một mặt hàng có số lượng hạn chế, dễ xảy ra tình trạng bán vượt số lượng thực tế trong kho (race condition / overselling).'
      },
      solution: {
        en: 'Engineered strict PostgreSQL transactions with conditional Prisma stock deductions and TTL-based stock reservations with automated cron expiration workers.',
        vi: 'Áp dụng Database Transactions với điều kiện số lượng (Conditional Updates) trong Prisma + PostgreSQL kết hợp cơ chế giữ hàng tạm thời có thời hạn giải phóng tự động.'
      },
      impact: {
        en: 'Guaranteed 100% data consistency under concurrent load, zero inventory discrepancy, and automated bank transfer reconciliation without manual intervention.',
        vi: 'Đảm bảo tính nhất quán dữ liệu 100%, tự động hóa hoàn toàn luồng xác nhận tiền về qua tài khoản ngân hàng không cần nhân viên đối soát thủ công.'
      }
    }
  },
  {
    id: 'cinevn',
    name: 'CineVN (MovieWeb V2)',
    category: 'Streaming & Distributed Video Processing',
    featured: true,
    tagline: {
      en: 'Adaptive bitrate HLS streaming paired with asynchronous BullMQ media transcoding workers.',
      vi: 'Nền tảng xem phim trực tuyến HLS Adaptive Streaming và Worker mã hóa video ngầm.'
    },
    summary: {
      en: 'A high-performance cinematic streaming platform built with Next.js, featuring HLS adaptive bitrate video delivery, persistent local-first watch history, and an asynchronous Redis / BullMQ media processing pipeline.',
      vi: 'Ứng dụng streaming video hiệu năng cao với giao diện người dùng phong cách Netflix, phát video qua giao thức HLS thích ứng băng thông và hàng đợi xử lý media bất đồng bộ bằng Redis & BullMQ.'
    },
    details: {
      en: [
        'Adaptive bitrate video delivery via HLS.js, persistent client-side watch progress, resume playback, and picture-in-picture mode.',
        'Asynchronous background worker architecture with Redis and BullMQ for offloaded video transcoding, thumbnail generation, and stream segmenting.',
        'Production Docker Compose container orchestration paired with a Caddy reverse proxy for automated HTTPS / TLS certification.'
      ],
      vi: [
        'Hỗ trợ phát video HLS thích ứng băng thông (Adaptive Bitrate), lưu tiến trình xem liên tục không cần đăng nhập, tính năng tiếp tục xem và Picture-in-Picture.',
        'Hàng đợi background worker với Redis và BullMQ để xử lý chuyển mã, tối ưu hóa video và phân đoạn luồng phát.',
        'Triển khai hoàn chỉnh bằng Docker Compose và reverse proxy Caddy tự động cấp phát chứng chỉ SSL/TLS.'
      ]
    },
    stack: ['Next.js', 'TypeScript', 'HLS.js', 'Express', 'MongoDB', 'Redis', 'BullMQ', 'Docker', 'Caddy'],
    live: 'https://cinevn.me/',
    repo: 'https://github.com/minhancr123/movie_web',
    image: '/projects/movieweb-demo.png',
    architecture: {
      challenge: {
        en: 'CPU-intensive video transcoding and slicing saturated the primary HTTP API thread, degrading web response times for concurrent viewers.',
        vi: 'Việc tải và xử lý các tập tin video dung lượng lớn gây nghẽn luồng xử lý của web server, làm giảm thời gian phản hồi cho người dùng truy cập.'
      },
      solution: {
        en: 'Decoupled API endpoints from heavy media operations using BullMQ and Redis distributed message queues running in dedicated background worker containers.',
        vi: 'Tách biệt hoàn toàn API server và Worker node: sử dụng Redis message queue và BullMQ để thực thi tác vụ xử lý media bất đồng bộ ngoài luồng chính.'
      },
      impact: {
        en: 'Maintained API latency below 50ms during intensive video processing and achieved seamless adaptive streaming across fluctuating networks.',
        vi: 'Trải nghiệm xem phim mượt mà ở nhiều điều kiện mạng khác nhau, API duy trì phản hồi dưới 50ms ngay cả khi worker đang xử lý video nặng.'
      }
    }
  },
  {
    id: 'antoree-platform',
    name: 'Antoree Assessment & AI Proctoring',
    category: 'EdTech & Real-Time WebSockets',
    featured: false,
    tagline: {
      en: 'Real-time learner evaluation platform with live WebSocket proctoring and Zod-grounded AI question banks.',
      vi: 'Hệ thống khảo thí trực tuyến và giám sát phòng thi thời gian thực bằng AI.'
    },
    summary: {
      en: 'An online examination and evaluation platform for learners under 16, featuring live WebSocket proctor monitoring, audio speaking test submissions, automated grading, and OpenAI question generation validated against strict Zod schemas.',
      vi: 'Nền tảng kiểm tra trực tuyến cho học viên dưới 16 tuổi với tính năng thi nói (speaking submission), tự động chấm điểm và giám sát thi trực tiếp qua WebSocket.'
    },
    details: {
      en: [
        'Interactive test room interface with countdown timers, audio recording capture for speaking tests, and automated submission safeguards.',
        'Live proctor dashboard monitoring examinee connection health, activity logs, and tab switching via bi-directional WebSockets.',
        'Automated curriculum question generation via OpenAI API, validated through strict Zod schemas to guarantee 100% JSON structural compliance.'
      ],
      vi: [
        'Xây dựng phòng thi tương tác với đếm ngược thời gian, nộp file ghi âm bài nói và tự động lưu bài thi định kỳ.',
        'Giám sát hành vi làm bài của thí sinh thời gian thực qua kênh WebSocket hai chiều.',
        'Tích hợp sinh câu hỏi tự động từ giáo án giáo viên bằng OpenAI API, kiểm soát chặt chẽ cấu trúc JSON đầu ra bằng Zod schema validation.'
      ]
    },
    stack: ['React', 'TypeScript', 'Node.js', 'Express', 'MySQL', 'WebSocket', 'OpenAI API', 'Zod'],
    image: '/projects/antoree-assessment.jpg',
    architecture: {
      challenge: {
        en: 'Ensuring exam integrity in remote classrooms while preventing malformed JSON outputs from LLM-generated tests.',
        vi: 'Giám sát tính trung thực của phòng thi trực tuyến và đảm bảo đề thi sinh bởi AI tuân thủ 100% định dạng đề thi chuẩn.'
      },
      solution: {
        en: 'Employed bi-directional WebSocket channels for instant connectivity alerts and applied Zod schema parsing to sanitize and validate AI model responses.',
        vi: 'Dùng WebSocket để phát hiện tab switching và mất kết nối; áp dụng Zod Schema để validate toàn bộ dữ liệu trả về từ OpenAI trước khi lưu vào database.'
      },
      impact: {
        en: 'Handled concurrent examination rooms for hundreds of learners and reduced manual teacher exam authoring time by over 80%.',
        vi: 'Phục vụ hàng trăm học viên làm bài thi đồng thời, rút ngắn 80% thời gian biên soạn ngân hàng đề thi của giáo viên.'
      }
    }
  },
  {
    id: 'blockchain-degree',
    name: 'Blockchain Degree Verification',
    category: 'Research / Hyperledger Fabric',
    featured: false,
    tagline: {
      en: 'Tamper-proof academic credential verification using permissioned blockchain & smart contracts.',
      vi: 'Xác thực văn bằng đại học chống giả mạo bằng công nghệ Blockchain Hyperledger Fabric.'
    },
    summary: {
      en: 'First Prize Winner at the 2025 Student Scientific Research Competition: Architected a decentralized, tamper-proof academic degree verification platform on Hyperledger Fabric with Go/Node.js chaincode.',
      vi: 'Đề tài đạt Giải Nhất Nghiên cứu Khoa học Sinh viên 2025: Xây dựng hệ thống phát hành và kiểm tra tính xác thực của văn bằng đại học, bảo đảm tính bất biến và bảo mật phân quyền.'
    },
    details: {
      en: [
        'Architected a permissioned consortium blockchain network among educational institutions and accrediting bodies.',
        'Authored Go / Node.js smart contracts (chaincode) to record immutable cryptographic hashes of degree records.',
        'Delivered an instant public verification portal allowing employers to verify degree authenticity via QR codes.'
      ],
      vi: [
        'Thiết kế mạng blockchain liên hiệp (permissioned blockchain) gồm các tổ chức giáo dục và cơ quan quản lý.',
        'Viết Smart Contract (Chaincode) bằng Go/Node.js để ghi nhận băm mật mã và lịch sử cấp bằng bất biến.',
        'Cung cấp cổng thông tin tra cứu công khai cho nhà tuyển dụng xác thực bằng cấp ngay tức thì bằng mã QR và cryptographic hash.'
      ]
    },
    stack: ['Hyperledger Fabric', 'Go Chaincode', 'Node.js', 'Docker', 'Cryptography'],
    image: '/projects/blockchain-degree.jpg'
  },
  {
    id: 'badminton-shop',
    name: 'Badminton Equipment Commerce',
    category: 'Full-Stack E-Commerce',
    featured: false,
    tagline: {
      en: 'Specialized sports retail web application with multi-attribute filtering and cart management.',
      vi: 'Nền tảng mua sắm dụng cụ cầu lông trực tuyến với bộ lọc sản phẩm chuyên sâu.'
    },
    summary: {
      en: 'A sports retail application featuring advanced category filtering by weight and balance point, responsive cart management, and inventory admin tools.',
      vi: 'Hệ thống bán hàng thể thao với giỏ hàng tương tác, lọc theo thông số vợt, quản lý phiên đăng nhập và trang quản trị kho hàng.'
    },
    details: {
      en: [
        'Dynamic multi-attribute catalog filtering by weight class (3U/4U), balance point, and brand.',
        'Real-time cart state management and secure session authorization.'
      ],
      vi: [
        'Lọc sản phẩm theo thương hiệu, trọng lượng (3U/4U), điểm cân bằng và mức căng dây.',
        'Quản lý trạng thái giỏ hàng realtime và xác thực người dùng bằng JWT.'
      ]
    },
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    repo: 'https://github.com/minhancr123/BadmintonShop',
    image: '/projects/badmintonshop-demo.png'
  },
  {
    id: 'task-management',
    name: 'Task Manager (Quản Lý Công Việc)',
    category: 'Productivity Application',
    featured: false,
    tagline: {
      en: 'Team productivity tool for collaborative task management and milestone tracking.',
      vi: 'Hệ thống quản lý tiến độ và phân công công việc nhóm.'
    },
    summary: {
      en: 'A comprehensive work management application designed to organize tasks, assign team responsibilities, and monitor project milestones.',
      vi: 'Ứng dụng quản trị công việc nhóm với bảng Kanban trực quan, phân quyền theo dự án và thông báo tiến độ.'
    },
    details: {
      en: [
        'Kanban board workflows with priority tags, status updates, and deadline tracking.',
        'Clean high-productivity interface with role-based member permissions.'
      ],
      vi: [
        'Tạo, phân công, gắn nhãn độ ưu tiên và cập nhật trạng thái nhiệm vụ.',
        'Giao diện tối ưu hóa năng suất, phân quyền thành viên trong dự án.'
      ]
    },
    stack: ['React', 'TypeScript', 'Tailwind CSS'],
    repo: 'https://github.com/minhancr123/quanlycongviec',
    image: '/projects/quanlycongviec-demo.png'
  }
]

const jobs: Job[] = [
  {
    company: 'CT Group',
    logo: '/ctgroup-logo.png',
    context: 'GASCOLAE Enterprise Platform',
    role: {
      en: 'Full Stack Developer',
      vi: 'Full Stack Developer'
    },
    period: {
      en: 'Aug 2026 — Present',
      vi: 'Tháng 8/2026 — Hiện tại'
    },
    location: {
      en: 'Ho Chi Minh City, Vietnam',
      vi: 'TP. Hồ Chí Minh'
    },
    bullets: {
      en: [
        'Spearheaded end-to-end development of 14 responsive UAV technical service websites (substation inspection, industrial safety, solar-farm Smart O&M) with conversational AI workflows and lead capture.',
        'Architected AI assistant configurations with 150+ reusable prompts and 190+ automated test cases evaluating grounding accuracy, data classification, and automated human sales escalation.',
        'Delivered 12 audited deliverables per service package, including technical knowledge bases, SOPs, commercial proposals, and sales kits; benchmarked ~30 global competitors with cited sources.',
        'Optimized core web performance and deployed production infrastructure on Firebase Hosting with automated CI/CD.'
      ],
      vi: [
        'Phát triển trọn gói 14 website dịch vụ UAV kỹ thuật cao (Bảo trì trạm biến áp cao thế, giám sát an toàn, Smart O&M cho cánh đồng điện mặt trời) tích hợp luồng tư vấn và thu thập lead tự động.',
        'Thiết kế và chuẩn hóa hệ thống trợ lý AI với hơn 150 prompt chuyên ngành và bộ 190+ test case tự động nhằm chống ảo giác dữ liệu (grounding) và điều hướng chuyên viên bán hàng (escalation).',
        'Hoàn thiện và bàn giao 12 bộ tài liệu chuyên sâu cho từng gói dịch vụ: cơ sở tri thức kỹ thuật (Knowledge Base), quy trình chuẩn (SOP), tài liệu đề xuất và Sales Kit thương mại; benchmark dữ liệu từ ~30 đối thủ quốc tế có trích nguồn.',
        'Tối ưu hóa hiệu năng tải trang và triển khai hệ thống an toàn trên nền tảng Firebase Hosting.'
      ]
    },
    stack: 'Next.js · Tailwind CSS · Alpine.js · Firebase Hosting · OpenAI RAG · CI/CD'
  },
  {
    company: 'SOF (Solution of Future)',
    logo: '/sof-logo.png',
    context: 'Hardware-Integrated Software Platform',
    role: {
      en: 'Full Stack Developer',
      vi: 'Full Stack Developer'
    },
    period: {
      en: 'Aug 2025 — Mar 2026',
      vi: 'Tháng 8/2025 — Tháng 3/2026'
    },
    location: {
      en: 'Ho Chi Minh City, Vietnam',
      vi: 'TP. Hồ Chí Minh'
    },
    bullets: {
      en: [
        'Developed and maintained core web features for a software-and-hardware platform serving over 200 active enterprise users.',
        'Engineered responsive ReactJS interfaces for business management and financial accounting modules across desktop and mobile form factors.',
        'Integrated PHP backend services and MySQL data flows, resolved production bottlenecks, and shipped features reliably via Git workflows.'
      ],
      vi: [
        'Phát triển và bảo trì các tính năng web cho nền tảng tích hợp phần mềm - phần cứng phục vụ hơn 200 người dùng doanh nghiệp hoạt động thực tế.',
        'Xây dựng các giao diện người dùng ReactJS linh hoạt, trực quan cho module quản lý kinh doanh và module kế toán tài chính trên cả máy tính và thiết bị di động.',
        'Tích hợp luồng dữ liệu backend PHP và cơ sở dữ liệu MySQL, trực tiếp điều tra và khắc phục lỗi hệ thống, triển khai tính năng theo quy trình Git chuẩn mực.'
      ]
    },
    stack: 'ReactJS · TypeScript · PHP · MySQL · REST APIs · Git'
  },
  {
    company: 'Antoree',
    logo: '/antoree-logo.png',
    context: 'EdTech & Online English Learning',
    role: {
      en: 'Full Stack Developer Intern',
      vi: 'Full Stack Developer Intern'
    },
    period: {
      en: 'Feb 2025 — Jul 2025',
      vi: 'Tháng 2/2025 — Tháng 7/2025'
    },
    location: {
      en: 'Ho Chi Minh City, Vietnam',
      vi: 'TP. Hồ Chí Minh'
    },
    bullets: {
      en: [
        'Built an assessment platform for learners under 16 with online tests, audio speaking submissions, automated grading, and live WebSocket proctor monitoring.',
        'Automated curriculum question generation by integrating the OpenAI API with runtime Zod schema validation to guarantee 100% structural conformity.'
      ],
      vi: [
        'Xây dựng nền tảng đánh giá năng lực học viên dưới 16 tuổi: phòng thi trực tuyến, nộp bài thi nói (speaking audio), tự động chấm điểm và giám sát gian lận qua WebSocket thời gian thực.',
        'Tích hợp tính năng tạo ngân hàng câu hỏi tự động từ dàn ý giáo án bằng OpenAI API, kiểm duyệt độ chính xác cấu trúc dữ liệu đầu ra bằng Zod schema validation.'
      ]
    },
    stack: 'React · TypeScript · Node.js · Express · MySQL · Zod · WebSocket · OpenAI API'
  }
]

const skillCategories = [
  {
    title: { en: 'Frontend Engineering', vi: 'Kỹ Thuật Frontend' },
    icon: Code2,
    skills: ['ReactJS', 'Next.js (App Router / SSR)', 'TypeScript', 'JavaScript (ES6+)', 'Tailwind CSS', 'Zustand', 'Redux Toolkit', 'Responsive UI']
  },
  {
    title: { en: 'Backend & System Architecture', vi: 'Backend & Kiến Trúc Hệ Thống' },
    icon: Workflow,
    skills: ['NestJS', 'Node.js', 'Express.js', 'PHP', 'RESTful APIs', 'JWT & RBAC Authorization', 'WebSocket', 'Swagger / OpenAPI', 'Zod Validation']
  },
  {
    title: { en: 'Databases & Distributed Queues', vi: 'Cơ Sở Dữ Liệu & Hàng Đợi' },
    icon: Database,
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Prisma ORM', 'Redis (Distributed Lock & Caching)', 'BullMQ (Background Queues)']
  },
  {
    title: { en: 'DevOps & Cloud Infrastructure', vi: 'DevOps & Hạ Tầng Cloud' },
    icon: Cloud,
    skills: ['Docker', 'Docker Compose', 'GitHub Actions (CI/CD)', 'Nginx', 'Caddy (Auto-TLS)', 'Firebase Hosting', 'Linux CLI', 'Postman', 'Git']
  },
  {
    title: { en: 'Practical AI & Automation', vi: 'Tích Hợp AI Thực Chiến' },
    icon: Sparkles,
    skills: ['OpenAI API Integration', 'Prompt Grounding & Safety Guardrails', 'Structured Outputs (JSON / Zod)', 'Human Escalation Workflows', 'Knowledge Base RAG']
  }
]

function App() {
  // Default to English as requested
  const [lang, setLang] = useState<Language>('en')
  const [darkMode, setDarkMode] = useState<boolean>(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null)
  const [cvModalOpen, setCvModalOpen] = useState(false)
  const [cvModalLangOverride, setCvModalLangOverride] = useState<Language | null>(null)
  const [cvViewMode, setCvViewMode] = useState<'ats' | 'pdf'>('ats')
  const activeCvLang = cvModalLangOverride ?? lang
  const [toastMessage, setToastMessage] = useState<string | null>(null)
  const [pipelineStep, setPipelineStep] = useState<number>(0)
  const [isSimulating, setIsSimulating] = useState<boolean>(false)

  // Periodic pipeline flow pulse
  useEffect(() => {
    const timer = setInterval(() => {
      setPipelineStep((prev) => (prev + 1) % 4)
    }, 2200)
    return () => clearInterval(timer)
  }, [])

  const triggerSimulation = () => {
    setIsSimulating(true)
    setPipelineStep(1)
    showToast(
      lang === 'en'
        ? '⚡ Concurrency stress test: 500 requests passed with 0 overselling!'
        : '⚡ Mô phỏng chịu tải: 500 request khóa tồn kho thành công, 0 oversell!'
    )
    setTimeout(() => setIsSimulating(false), 2400)
  }

  // Initialize theme class
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      document.documentElement.classList.remove('light')
    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.classList.add('light')
    }
  }, [darkMode])

  // Toast notification helper
  const showToast = (msg: string) => {
    setToastMessage(msg)
    setTimeout(() => setToastMessage(null), 3500)
  }

  // Copy email to clipboard
  const copyEmail = () => {
    const email = 'huynhminhanc5.pbchau@gmail.com'
    navigator.clipboard.writeText(email)
    showToast(
      lang === 'en'
        ? `Copied to clipboard: ${email}`
        : `Đã sao chép email: ${email}`
    )
  }

  // Filter projects
  const filteredProjects = projects.filter((p) => {
    if (selectedCategory === 'all') return true
    if (selectedCategory === 'featured') return p.featured
    if (selectedCategory === 'fullstack') return p.stack.includes('Next.js') || p.stack.includes('NestJS') || p.stack.includes('Express')
    if (selectedCategory === 'ai') return p.stack.some(s => s.toLowerCase().includes('ai') || s.toLowerCase().includes('hls') || s.toLowerCase().includes('bullmq'))
    return true
  })

  return (
    <div className={`min-h-screen text-slate-100 ${darkMode ? 'bg-[#090D16]' : 'bg-[#F8FAFC] !text-slate-800'}`}>
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-[100] flex items-center gap-3 px-4 py-3 bg-emerald-600 text-white font-medium rounded-xl shadow-2xl animate-fade-in border border-emerald-400/30">
          <Check size={18} />
          <span className="text-sm">{toastMessage}</span>
        </div>
      )}

      {/* Skip to Content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-indigo-600 text-white rounded-lg shadow-lg"
      >
        Skip to content
      </a>

      {/* Ambient background glow orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="ambient-glow -top-32 -left-32 w-96 h-96 bg-indigo-600/20" />
        <div className="ambient-glow top-1/3 -right-32 w-[30rem] h-[30rem] bg-purple-600/15" />
        <div className="ambient-glow bottom-20 left-1/4 w-[28rem] h-[28rem] bg-emerald-600/10" />
      </div>

      {/* ===================== NAVBAR ===================== */}
      <header className={`sticky top-0 z-40 w-full border-b transition-colors backdrop-blur-xl ${
        darkMode ? 'bg-[#090D16]/85 border-slate-800/80' : 'bg-white/85 border-slate-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Wordmark with Real Avatar */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-indigo-500/50 shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform shrink-0">
              <img
                src="/my_image.jpg"
                alt="Huỳnh Minh An"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div>
              <span className="font-extrabold text-lg tracking-tight block leading-none">
                Minh An<span className="text-indigo-400">.</span>
              </span>
              <span className={`text-[10px] tracking-wider uppercase font-semibold block mt-1 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                Full Stack Developer
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
            <a href="#projects" className={`transition-colors hover:text-indigo-400 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              {lang === 'en' ? 'Projects' : 'Dự án'}
            </a>
            <a href="#experience" className={`transition-colors hover:text-indigo-400 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              {lang === 'en' ? 'Experience' : 'Kinh nghiệm'}
            </a>
            <a href="#skills" className={`transition-colors hover:text-indigo-400 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              {lang === 'en' ? 'Skills' : 'Kỹ năng'}
            </a>
            <a href="#education" className={`transition-colors hover:text-indigo-400 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              {lang === 'en' ? 'Education' : 'Học vấn & NCKH'}
            </a>
            <a href="#contact" className={`transition-colors hover:text-indigo-400 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              {lang === 'en' ? 'Contact' : 'Liên hệ'}
            </a>
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Prominent Language Switcher */}
            <div className={`p-0.5 rounded-xl border flex items-center ${
              darkMode ? 'bg-slate-900 border-slate-700/80' : 'bg-slate-100 border-slate-300'
            }`}>
              <button
                onClick={() => setLang('en')}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                  lang === 'en'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : darkMode ? 'text-slate-400 hover:text-slate-200' : 'text-slate-600 hover:text-slate-950'
                }`}
                title="Switch to English"
              >
                <span>🇺🇸 EN</span>
              </button>
              <button
                onClick={() => setLang('vi')}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                  lang === 'vi'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : darkMode ? 'text-slate-400 hover:text-slate-200' : 'text-slate-600 hover:text-slate-950'
                }`}
                title="Chuyển sang Tiếng Việt"
              >
                <span>🇻🇳 VI</span>
              </button>
            </div>

            {/* Dark / Light Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-xl border transition-colors ${
                darkMode ? 'bg-slate-900 border-slate-700 text-amber-400 hover:border-slate-600' : 'bg-slate-100 border-slate-300 text-slate-700 hover:bg-slate-200'
              }`}
              title="Toggle Dark/Light Mode"
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            {/* View ATS Resume */}
            <button
              onClick={() => {
                setCvViewMode('ats')
                setCvModalOpen(true)
              }}
              className={`hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold rounded-xl border transition-all ${
                darkMode
                  ? 'border-slate-700 text-slate-300 hover:bg-slate-800 hover:border-slate-600'
                  : 'border-slate-300 text-slate-700 hover:bg-slate-100'
              }`}
            >
              <FileText size={14} className="text-indigo-400" />
              <span>ATS Resume</span>
            </button>

            {/* View Original CV Online */}
            <button
              onClick={() => {
                setCvViewMode('pdf')
                setCvModalOpen(true)
              }}
              className={`hidden md:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold rounded-xl border transition-all ${
                darkMode
                  ? 'border-indigo-500/40 text-indigo-300 hover:bg-indigo-500/10'
                  : 'border-indigo-600 text-indigo-600 hover:bg-indigo-50'
              }`}
            >
              <Eye size={14} />
              <span>{lang === 'en' ? 'Original CV (PDF)' : 'CV Gốc (PDF)'}</span>
            </button>

            {/* Download CV PDF Direct Button */}
            <a
              href="/cv.pdf"
              download="Huynh_Minh_An_FullStack_Developer_CV.pdf"
              onClick={() => showToast(lang === 'en' ? 'Downloading official CV (PDF)...' : 'Đang tải xuống CV PDF...')}
              className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white text-xs sm:text-sm font-bold rounded-xl shadow-md shadow-indigo-600/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Download size={14} />
              <span>{lang === 'en' ? 'Download CV' : 'Tải CV'}</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 rounded-xl border ${
                darkMode ? 'bg-slate-900 border-slate-700 text-slate-200' : 'bg-slate-100 border-slate-300 text-slate-700'
              }`}
              aria-label="Open Mobile Menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className={`lg:hidden border-b px-6 py-5 space-y-4 ${
            darkMode ? 'bg-[#090D16] border-slate-800' : 'bg-white border-slate-200'
          }`}>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className={`block text-sm font-medium py-1 ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}
            >
              {lang === 'en' ? 'Featured Projects' : 'Dự án nổi bật'}
            </a>
            <a
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
              className={`block text-sm font-medium py-1 ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}
            >
              {lang === 'en' ? 'Work Experience' : 'Kinh nghiệm làm việc'}
            </a>
            <a
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
              className={`block text-sm font-medium py-1 ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}
            >
              {lang === 'en' ? 'Skills & Tech Stack' : 'Kỹ năng công nghệ'}
            </a>
            <a
              href="#education"
              onClick={() => setMobileMenuOpen(false)}
              className={`block text-sm font-medium py-1 ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}
            >
              {lang === 'en' ? 'Education & Honors' : 'Học vấn & Nghiên cứu'}
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`block text-sm font-medium py-1 ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}
            >
              {lang === 'en' ? 'Contact' : 'Liên hệ'}
            </a>
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false)
                  setCvViewMode('pdf')
                  setCvModalOpen(true)
                }}
                className={`w-full py-2.5 rounded-xl border text-sm font-bold flex items-center justify-center gap-2 ${
                  darkMode ? 'border-indigo-500/50 text-indigo-300 bg-indigo-950/40' : 'border-indigo-300 text-indigo-700 bg-indigo-50'
                }`}
              >
                <Eye size={16} />
                {lang === 'en' ? 'View Original CV (PDF Online)' : 'Xem CV Gốc Trực Tuyến (PDF)'}
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false)
                  setCvViewMode('ats')
                  setCvModalOpen(true)
                }}
                className={`w-full py-2.5 rounded-xl border text-sm font-bold flex items-center justify-center gap-2 ${
                  darkMode ? 'border-slate-700 text-slate-200 bg-slate-900' : 'border-slate-300 text-slate-800 bg-slate-100'
                }`}
              >
                <FileText size={16} />
                {lang === 'en' ? 'View ATS Resume (Text)' : 'Xem CV Chuẩn ATS'}
              </button>
            </div>
          </div>
        )}
      </header>

      {/* ===================== MAIN CONTENT ===================== */}
      <main id="main-content">
        {/* ===================== HERO SECTION ===================== */}
        <section id="hero" className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              {/* Left Column: Introductions & CTAs */}
              <div className="lg:col-span-7 space-y-7 text-left">
                {/* Available for hire status pill */}
                <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-semibold border bg-emerald-500/10 border-emerald-500/30 text-emerald-400">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span>
                    {lang === 'en'
                      ? 'Available for Full-time Roles · Full Stack Developer'
                      : 'Sẵn sàng nhận việc ngay · Full Stack Developer'}
                  </span>
                </div>

                {/* Big Headline */}
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-indigo-400">
                    <span className="w-6 h-0.5 bg-indigo-500 rounded-full inline-block"></span>
                    <span>{lang === 'en' ? 'Portfolio & Software Engineer CV' : 'Hồ Sơ Năng Lực & CV Kỹ Sư Phần Mềm'}</span>
                  </div>
                  <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08]">
                    Huỳnh Minh An
                  </h1>
                  <p className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                    Full Stack Developer
                  </p>
                </div>

                {/* Bio Description */}
                <p className={`text-base sm:text-lg leading-relaxed max-w-2xl ${
                  darkMode ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  {lang === 'en'
                    ? 'Specializing in end-to-end web engineering: high-performance Next.js/React interfaces, concurrency-safe NestJS/Node.js backends (PostgreSQL & Prisma), asynchronous Redis & BullMQ pipelines, and production-ready AI workflows.'
                    : 'Chuyên xây dựng ứng dụng web trọn gói end-to-end: giao diện Next.js/React hiệu năng cao, backend NestJS/Node.js chịu tải lớn (PostgreSQL & Prisma), hàng đợi xử lý ngầm Redis/BullMQ và tích hợp AI thực chiến.'}
                </p>

                {/* Quick Highlights Pills */}
                <div className="flex flex-wrap items-center gap-2.5 text-xs">
                  <span className={`px-3 py-1.5 rounded-xl border font-medium flex items-center gap-1.5 ${
                    darkMode ? 'bg-slate-900/80 border-slate-800 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700'
                  }`}>
                    <MapPin size={13} className="text-rose-400" />
                    Ho Chi Minh City · On-site / Hybrid / Remote
                  </span>
                  <span className={`px-3 py-1.5 rounded-xl border font-medium flex items-center gap-1.5 ${
                    darkMode ? 'bg-slate-900/80 border-slate-800 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700'
                  }`}>
                    <Briefcase size={13} className="text-indigo-400" />
                    {lang === 'en' ? '1+ Year Professional Experience (CT Group & SOF)' : '1+ Năm kinh nghiệm (CT Group & SOF)'}
                  </span>
                  <span className={`px-3 py-1.5 rounded-xl border font-medium flex items-center gap-1.5 ${
                    darkMode ? 'bg-slate-900/80 border-slate-800 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700'
                  }`}>
                    <GraduationCap size={13} className="text-emerald-400" />
                    GPA 3.52 / 4.0 · HUIT (Bachelor of IT)
                  </span>
                  <span className={`px-3 py-1.5 rounded-xl border font-medium flex items-center gap-1.5 ${
                    darkMode ? 'bg-slate-900/80 border-slate-800 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700'
                  }`}>
                    <Award size={13} className="text-amber-400" />
                    {lang === 'en' ? '1st Prize Scientific Research 2025' : 'Giải Nhất NCKH Blockchain 2025'}
                  </span>
                </div>

                {/* Primary Action Buttons */}
                <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
                  {/* View Original CV Online */}
                  <button
                    onClick={() => {
                      setCvViewMode('pdf')
                      setCvModalOpen(true)
                    }}
                    className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-sm rounded-xl shadow-xl shadow-indigo-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <Eye size={18} />
                    <span>{lang === 'en' ? 'View Original CV (Online)' : 'Xem CV Gốc Trực Tuyến'}</span>
                  </button>

                  {/* View ATS Resume */}
                  <button
                    onClick={() => {
                      setCvViewMode('ats')
                      setCvModalOpen(true)
                    }}
                    className={`inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-bold text-sm border transition-all ${
                      darkMode
                        ? 'bg-slate-900/90 border-slate-700 hover:border-indigo-500/50 text-slate-200 hover:bg-slate-800'
                        : 'bg-white border-slate-300 hover:border-indigo-600 text-slate-800 hover:bg-slate-50'
                    }`}
                  >
                    <FileText size={17} className="text-indigo-400" />
                    <span>{lang === 'en' ? 'View ATS Resume' : 'Xem CV Chuẩn ATS'}</span>
                  </button>

                  {/* Download CV PDF Direct */}
                  <a
                    href="/cv.pdf"
                    download="Huynh_Minh_An_FullStack_Developer_CV.pdf"
                    onClick={() => showToast(lang === 'en' ? 'Downloading official CV (PDF)...' : 'Đang tải xuống CV PDF...')}
                    className={`inline-flex items-center gap-2 px-4 py-3.5 rounded-xl font-semibold text-sm border transition-colors ${
                      darkMode ? 'border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800' : 'border-slate-300 text-slate-700 hover:bg-slate-100'
                    }`}
                    title="Download Official PDF"
                  >
                    <Download size={16} />
                    <span>PDF</span>
                  </a>

                  {/* Explore Work */}
                  <a
                    href="#projects"
                    className={`inline-flex items-center gap-2 px-4 py-3.5 rounded-xl font-semibold text-sm transition-colors ${
                      darkMode ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <span>{lang === 'en' ? 'Explore Projects' : 'Xem dự án'}</span>
                    <ArrowDown size={16} />
                  </a>
                </div>

                {/* Direct Contact Pill Bar */}
                <div className="pt-3 flex flex-wrap items-center gap-3">
                  <button
                    onClick={copyEmail}
                    className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all ${
                      darkMode
                        ? 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                        : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
                    }`}
                    title="Copy Email"
                  >
                    <Copy size={13} className="text-indigo-400" />
                    <span>huynhminhanc5.pbchau@gmail.com</span>
                  </button>

                  <a
                    href="tel:+84869428117"
                    className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border transition-all ${
                      darkMode
                        ? 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                        : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
                    }`}
                    title="Call +84 869 428 117"
                  >
                    <Phone size={13} className="text-emerald-400" />
                    <span>+84 869 428 117</span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/hu%E1%BB%B3nh-minh-an-101899347/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-xl border transition-colors ${
                      darkMode ? 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-indigo-400 hover:border-slate-700' : 'bg-slate-100 border-slate-200 text-slate-600 hover:text-indigo-600'
                    }`}
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin size={16} />
                  </a>

                  <a
                    href="https://github.com/minhancr123"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-xl border transition-colors ${
                      darkMode ? 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-indigo-400 hover:border-slate-700' : 'bg-slate-100 border-slate-200 text-slate-600 hover:text-indigo-600'
                    }`}
                    aria-label="GitHub Profile"
                  >
                    <Github size={16} />
                  </a>

                  <a
                    href="mailto:huynhminhanc5.pbchau@gmail.com?subject=Full%20Stack%20Developer%20Opportunity%20-%20Huynh%20Minh%20An"
                    className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border transition-colors ${
                      darkMode ? 'bg-indigo-950/40 border-indigo-800/60 text-indigo-300 hover:bg-indigo-900/40' : 'bg-indigo-50 border-indigo-200 text-indigo-700 hover:bg-indigo-100'
                    }`}
                  >
                    <Send size={13} />
                    <span>{lang === 'en' ? 'Quick Email' : 'Gửi email nhanh'}</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Visual Portrait & Live Badges */}
              <div className="lg:col-span-5 relative flex justify-center">
                <div className="relative w-full max-w-md">
                  {/* Decorative ambient ring */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 via-purple-600 to-emerald-500 rounded-3xl blur-xl opacity-30 animate-pulse-slow"></div>

                  {/* Main Architecture Glass Card */}
                  <div className={`relative rounded-3xl border overflow-hidden shadow-2xl backdrop-blur-xl transition-all ${
                    darkMode
                      ? 'bg-slate-950/90 border-slate-800'
                      : 'bg-white/95 border-slate-200'
                  }`}>
                    {/* Window Header */}
                    <div className={`px-4 py-3 border-b flex items-center justify-between gap-3 ${
                      darkMode ? 'bg-slate-900/90 border-slate-800' : 'bg-slate-100 border-slate-200'
                    }`}>
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-rose-500/90"></span>
                        <span className="w-3 h-3 rounded-full bg-amber-500/90"></span>
                        <span className="w-3 h-3 rounded-full bg-emerald-500/90"></span>
                        <span className="text-[11px] font-mono font-semibold text-slate-400 ml-2">
                          PIPELINE ARCHITECTURE
                        </span>
                      </div>

                      {/* Live Pulse Beacon & Simulation Button */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={triggerSimulation}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-[10px] font-bold shadow-sm transition-all hover:scale-105 active:scale-95"
                          title="Click to simulate concurrent order requests"
                        >
                          <Play size={10} className={isSimulating ? 'animate-spin' : ''} />
                          <span>{lang === 'en' ? 'Simulate Traffic' : 'Mô phỏng Request'}</span>
                        </button>
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                      </div>
                    </div>

                    {/* Interactive Animated Visual Pipeline Canvas */}
                    <div className="p-5 sm:p-6 space-y-3.5">
                      {/* NODE 1: Client Layer */}
                      <div className={`p-3 rounded-2xl border transition-all duration-500 relative overflow-hidden ${
                        pipelineStep === 0 || isSimulating
                          ? 'border-indigo-500/80 bg-indigo-500/10 shadow-lg shadow-indigo-500/20 scale-[1.02]'
                          : darkMode ? 'border-slate-800 bg-slate-900/60' : 'border-slate-200 bg-slate-50'
                      }`}>
                        {/* Animated gradient beam sweep */}
                        <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-indigo-400 to-transparent animate-beam-sweep" />

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-xl bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400 shrink-0">
                              <Layers size={18} />
                            </div>
                            <div className="text-left">
                              <div className="flex items-center gap-2">
                                <span className="font-bold text-xs sm:text-sm">Client & Edge Layer</span>
                                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-semibold">
                                  Next.js 15
                                </span>
                              </div>
                              <p className={`text-[11px] ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                                14 UAV Portals · Reactive UI · Sub-second FCP
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-emerald-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                            <span>1.8k req/s</span>
                          </div>
                        </div>
                      </div>

                      {/* SVG ANIMATED CONNECTOR BEAM 1 */}
                      <div className="flex justify-center -my-2.5 relative z-10">
                        <svg width="40" height="26" viewBox="0 0 40 26" fill="none" className="overflow-visible">
                          <line x1="20" y1="0" x2="20" y2="26" stroke="currentColor" strokeWidth="2" className="text-indigo-500/30" />
                          <line x1="20" y1="0" x2="20" y2="26" stroke="currentColor" strokeWidth="2" className="text-indigo-400 animate-flow-dash" />
                        </svg>
                      </div>

                      {/* NODE 2: Concurrency & API Layer (Core Engine) */}
                      <div className={`p-3.5 rounded-2xl border transition-all duration-500 relative overflow-hidden ${
                        pipelineStep === 1 || isSimulating
                          ? 'border-purple-500/90 bg-purple-500/10 shadow-lg shadow-purple-500/20 scale-[1.02]'
                          : darkMode ? 'border-slate-800 bg-slate-900/60' : 'border-slate-200 bg-slate-50'
                      }`}>
                        <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-beam-sweep" />

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-xl bg-purple-600/20 border border-purple-500/40 flex items-center justify-center text-purple-400 shrink-0">
                              <Cpu size={18} />
                            </div>
                            <div className="text-left">
                              <div className="flex items-center gap-2">
                                <span className="font-bold text-xs sm:text-sm">API Gateway & Concurrency Mutex</span>
                                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300 font-semibold">
                                  NestJS
                                </span>
                              </div>
                              <p className={`text-[11px] ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                                Atomic Row-Locking · Zero Overselling Guarantee
                              </p>
                            </div>
                          </div>

                          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30 font-mono">
                            LOCK ACTIVE
                          </span>
                        </div>
                      </div>

                      {/* SVG BRANCHING CONNECTOR (1-to-3 Split) */}
                      <div className="flex justify-center -my-2.5 relative z-10">
                        <svg width="280" height="30" viewBox="0 0 280 30" fill="none" className="overflow-visible w-full max-w-xs">
                          {/* Branch to left: Redis BullMQ */}
                          <path d="M 140 0 C 140 15, 50 15, 50 30" stroke="currentColor" strokeWidth="2" className="text-emerald-500/30" />
                          <path d="M 140 0 C 140 15, 50 15, 50 30" stroke="currentColor" strokeWidth="2" className="text-emerald-400 animate-flow-dash" />

                          {/* Branch to middle: PostgreSQL */}
                          <line x1="140" y1="0" x2="140" y2="30" stroke="currentColor" strokeWidth="2" className="text-cyan-500/30" />
                          <line x1="140" y1="0" x2="140" y2="30" stroke="currentColor" strokeWidth="2" className="text-cyan-400 animate-flow-dash" />

                          {/* Branch to right: AI Pipeline */}
                          <path d="M 140 0 C 140 15, 230 15, 230 30" stroke="currentColor" strokeWidth="2" className="text-amber-500/30" />
                          <path d="M 140 0 C 140 15, 230 15, 230 30" stroke="currentColor" strokeWidth="2" className="text-amber-400 animate-flow-dash" />
                        </svg>
                      </div>

                      {/* NODE 3, 4, 5: 3 Split Execution Engines */}
                      <div className="grid grid-cols-3 gap-2.5">
                        {/* 3A: Redis & BullMQ Queue */}
                        <div className={`p-2.5 rounded-xl border text-left transition-all duration-500 ${
                          pipelineStep === 2 || isSimulating
                            ? 'border-emerald-500/90 bg-emerald-500/10 shadow-md shadow-emerald-500/20 scale-105'
                            : darkMode ? 'border-slate-800 bg-slate-900/60' : 'border-slate-200 bg-slate-50'
                        }`}>
                          <div className="flex items-center gap-1.5 text-emerald-400 mb-1">
                            <Workflow size={14} />
                            <span className="font-bold text-[11px] truncate">Job Queue</span>
                          </div>
                          <p className="font-mono text-[10px] text-slate-300 truncate">Redis · BullMQ</p>
                          <div className="mt-2 flex items-center justify-between text-[9px] font-mono">
                            <span className="text-emerald-400 font-bold">● 10 Workers</span>
                            <span className="text-slate-400">0 Fail</span>
                          </div>
                        </div>

                        {/* 3B: PostgreSQL Database */}
                        <div className={`p-2.5 rounded-xl border text-left transition-all duration-500 ${
                          pipelineStep === 2 || isSimulating
                            ? 'border-cyan-500/90 bg-cyan-500/10 shadow-md shadow-cyan-500/20 scale-105'
                            : darkMode ? 'border-slate-800 bg-slate-900/60' : 'border-slate-200 bg-slate-50'
                        }`}>
                          <div className="flex items-center gap-1.5 text-cyan-400 mb-1">
                            <Database size={14} />
                            <span className="font-bold text-[11px] truncate">Database</span>
                          </div>
                          <p className="font-mono text-[10px] text-slate-300 truncate">PostgreSQL · Prisma</p>
                          <div className="mt-2 flex items-center justify-between text-[9px] font-mono">
                            <span className="text-cyan-400 font-bold">ACID</span>
                            <span className="text-slate-400">1.8ms</span>
                          </div>
                        </div>

                        {/* 3C: Practical AI Pipeline */}
                        <div className={`p-2.5 rounded-xl border text-left transition-all duration-500 ${
                          pipelineStep === 3 || isSimulating
                            ? 'border-amber-500/90 bg-amber-500/10 shadow-md shadow-amber-500/20 scale-105'
                            : darkMode ? 'border-slate-800 bg-slate-900/60' : 'border-slate-200 bg-slate-50'
                        }`}>
                          <div className="flex items-center gap-1.5 text-amber-400 mb-1">
                            <Sparkles size={14} />
                            <span className="font-bold text-[11px] truncate">AI Engine</span>
                          </div>
                          <p className="font-mono text-[10px] text-slate-300 truncate">OpenAI · Zod</p>
                          <div className="mt-2 flex items-center justify-between text-[9px] font-mono">
                            <span className="text-amber-400 font-bold">190+ Tests</span>
                            <span className="text-slate-400">Safe</span>
                          </div>
                        </div>
                      </div>

                      {/* LIVE TELEMETRY BAR */}
                      <div className={`p-3 rounded-2xl border flex items-center justify-between text-[11px] font-mono ${
                        darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-slate-100 border-slate-200'
                      }`}>
                        <div className="flex items-center gap-2">
                          <Activity size={14} className="text-emerald-400 animate-pulse" />
                          <span className="text-slate-300">Cluster Status:</span>
                          <span className="text-emerald-400 font-bold">Healthy (0 Downtime)</span>
                        </div>
                        <div className="flex items-center gap-3 text-slate-400 hidden sm:flex">
                          <span>Latency: <strong className="text-slate-200">14ms</strong></span>
                          <span>Uptime: <strong className="text-slate-200">99.99%</strong></span>
                        </div>
                      </div>
                    </div>

                    {/* Developer Info Footer Bar */}
                    <div className={`px-4 py-3 border-t flex items-center justify-between gap-3 ${
                      darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-slate-50 border-slate-200'
                    }`}>
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full overflow-hidden border border-indigo-500/40 shrink-0">
                          <img src="/my_image.jpg" alt="Huỳnh Minh An" className="w-full h-full object-cover object-top" />
                        </div>
                        <div className="text-left">
                          <p className="text-xs font-bold leading-tight">Huỳnh Minh An</p>
                          <p className="text-[10px] text-indigo-400 font-medium leading-tight">Full Stack Developer</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          ● Open to Work
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* ===================== PROOF BY NUMBERS ===================== */}
        <section className="py-10 border-y border-slate-800/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div className="space-y-1">
                <p className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                  1+ Year
                </p>
                <p className={`text-xs sm:text-sm font-medium ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                  {lang === 'en' ? 'Production Software Engineering' : 'Kinh nghiệm lập trình thực tế'}
                </p>
              </div>

              <div className="space-y-1">
                <p className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                  14+ Portals
                </p>
                <p className={`text-xs sm:text-sm font-medium ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                  {lang === 'en' ? 'Live UAV Platforms Delivered @ CT Group' : 'Nền tảng dịch vụ UAV tại CT Group'}
                </p>
              </div>

              <div className="space-y-1">
                <p className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                  3.52 / 4.0
                </p>
                <p className={`text-xs sm:text-sm font-medium ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                  {lang === 'en' ? 'Bachelor of IT GPA @ HUIT (High Honor)' : 'GPA Cử nhân CNTT tại HUIT'}
                </p>
              </div>

              <div className="space-y-1">
                <p className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-400">
                  1st Prize
                </p>
                <p className={`text-xs sm:text-sm font-medium ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                  {lang === 'en' ? 'Scientific Research Award (Blockchain)' : 'Nghiên cứu Khoa học Sinh viên 2025'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== SELECTED PROJECTS ===================== */}
        <section id="projects" className="py-20 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-left">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-2">
                  01 / SELECTED WORK & CASE STUDIES
                </p>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                  {lang === 'en' ? 'Featured Engineering Projects' : 'Dự Án Tiêu Biểu & Đóng Góp Kỹ Thuật'}
                </h2>
                <p className={`text-sm sm:text-base mt-2 max-w-2xl ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                  {lang === 'en'
                    ? 'Demonstrating engineering depth: high-concurrency database transactions, asynchronous media pipelines, and enterprise AI guardrails.'
                    : 'Minh chứng cho năng lực giải quyết bài toán kỹ thuật: từ kiến trúc chống oversell, xử lý video ngầm đến tích hợp AI production.'}
                </p>
              </div>

              {/* Category Filter Tabs */}
              <div className="flex flex-wrap gap-2">
                {[
                  { id: 'all', label: lang === 'en' ? 'All' : 'Tất cả' },
                  { id: 'featured', label: lang === 'en' ? 'Featured' : 'Nổi bật' },
                  { id: 'fullstack', label: 'Full Stack' },
                  { id: 'ai', label: 'AI & Queues' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedCategory(tab.id)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      selectedCategory === tab.id
                        ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                        : darkMode
                        ? 'bg-slate-900 border border-slate-800 text-slate-300 hover:border-slate-700'
                        : 'bg-slate-100 border border-slate-300 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Project Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
              {filteredProjects.map((project, idx) => (
                <div
                  key={project.id}
                  className={`rounded-3xl border overflow-hidden flex flex-col justify-between transition-all duration-300 group ${
                    darkMode
                      ? 'bg-slate-900/60 border-slate-800 hover:border-indigo-500/50 shadow-xl'
                      : 'bg-white border-slate-200 hover:border-indigo-400 shadow-lg'
                  }`}
                >
                  {/* Visual Preview / Header with Browser Frame */}
                  <div>
                    <div className="relative h-60 sm:h-72 overflow-hidden bg-slate-950 flex flex-col">
                      {/* Browser Mockup Chrome */}
                      <div className="h-8 bg-slate-900/90 border-b border-slate-800 px-4 flex items-center justify-between shrink-0">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                        </div>
                        <span className="text-[10px] font-mono text-slate-400 truncate max-w-[200px]">
                          {project.live ? project.live.replace('https://', '') : project.name.toLowerCase()}
                        </span>
                        <span className="w-4"></span>
                      </div>

                      {/* Image / Mockup body */}
                      <div className="relative flex-1 overflow-hidden flex items-center justify-center bg-slate-950">
                        {project.image ? (
                          <img
                            src={project.image}
                            alt={`${project.name} preview`}
                            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                        ) : (
                          /* Dedicated GASCOLAE visual mockup */
                          <div className="w-full h-full bg-gradient-to-br from-slate-950 via-[#0B1528] to-slate-900 p-6 flex flex-col justify-between">
                            <div className="flex items-center justify-between">
                              <span className="text-[10px] font-bold tracking-widest text-emerald-400 uppercase bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-md">
                                GASCOLAE / CT GROUP
                              </span>
                              <span className="text-xs text-slate-400 font-mono">14 PORTALS</span>
                            </div>

                            <div className="text-center py-2 space-y-2">
                              <div className="w-14 h-14 mx-auto rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                                <Workflow size={28} />
                              </div>
                              <p className="font-bold text-base text-white">UAV Technical Services</p>
                              <p className="text-xs text-slate-400 max-w-sm mx-auto">
                                Substation O&M · Solar Farm Inspection · AI Grounded Chatbot
                              </p>
                            </div>

                            <div className="flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-800 pt-2">
                              <span className="flex items-center gap-1.5">
                                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                                Firebase Production
                              </span>
                              <span>150+ Prompts · 190+ Tests</span>
                            </div>
                          </div>
                        )}

                        {/* Top Category Badge */}
                        <div className="absolute top-3 left-3 flex gap-2">
                          <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-slate-950/80 backdrop-blur-md text-white border border-white/10">
                            0{idx + 1} · {project.category}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-6 sm:p-8 space-y-4">
                      <div className="space-y-1">
                        <h3 className="text-2xl font-bold tracking-tight text-white group-hover:text-indigo-400 transition-colors">
                          {project.name}
                        </h3>
                        <p className="text-xs sm:text-sm font-semibold text-indigo-400">
                          {project.tagline[lang]}
                        </p>
                      </div>

                      <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                        {project.summary[lang]}
                      </p>

                      {/* Tech Stack Chips */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {project.stack.map((tech) => (
                          <span
                            key={tech}
                            className={`px-2.5 py-1 rounded-md text-[11px] font-semibold font-mono border ${
                              darkMode
                                ? 'bg-slate-950/80 border-slate-800 text-slate-300'
                                : 'bg-slate-100 border-slate-300 text-slate-700'
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer Actions */}
                  <div className={`p-6 sm:p-8 pt-0 border-t ${
                    darkMode ? 'border-slate-800/80' : 'border-slate-100'
                  } flex flex-wrap items-center justify-between gap-3 mt-4`}>
                    <div className="flex items-center gap-3">
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-400 hover:text-indigo-300 transition-colors"
                        >
                          <span>{lang === 'en' ? 'Live Demo' : 'Xem Website'}</span>
                          <ExternalLink size={14} />
                        </a>
                      )}

                      {project.repo && (
                        <a
                          href={project.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-1.5 text-xs font-bold transition-colors ${
                            darkMode ? 'text-slate-400 hover:text-slate-200' : 'text-slate-600 hover:text-slate-900'
                          }`}
                        >
                          <Github size={14} />
                          <span>Source Code</span>
                        </a>
                      )}
                    </div>

                    {/* View Details / Case Study Modal Trigger */}
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold border transition-all ${
                        darkMode
                          ? 'bg-slate-800 border-slate-700 hover:bg-slate-700 text-slate-200'
                          : 'bg-slate-100 border-slate-300 hover:bg-slate-200 text-slate-800'
                      }`}
                    >
                      <span>{lang === 'en' ? 'Architectural Case Study' : 'Chi tiết kiến trúc'}</span>
                      <ChevronRight size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== WORK EXPERIENCE ===================== */}
        <section id="experience" className="py-20 border-t border-slate-800/80 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-14 text-left">
              <p className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-2">
                02 / CAREER TIMELINE & MEASURABLE IMPACT
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                {lang === 'en' ? 'Work Experience & Production Track Record' : 'Kinh Nghiệm Làm Việc & Đóng Góp Thực Tế'}
              </h2>
              <p className={`text-sm sm:text-base mt-2 max-w-2xl ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                {lang === 'en'
                  ? 'Track record delivering software solutions across educational platforms, business management systems, and enterprise drone ecosystems.'
                  : 'Hành trình phát triển từ hệ thống giáo dục, nền tảng doanh nghiệp đến hệ sinh thái UAV tập đoàn lớn.'}
              </p>
            </div>

            {/* Vertical Timeline */}
            <div className="space-y-8 text-left">
              {jobs.map((job) => (
                <div
                  key={job.company}
                  className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 relative overflow-hidden ${
                    darkMode
                      ? 'bg-slate-900/50 border-slate-800 hover:border-indigo-500/40 shadow-xl'
                      : 'bg-white border-slate-200 hover:border-indigo-400 shadow-md'
                  }`}
                >
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                    {/* Company info & role */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        {job.logo ? (
                          <div className="w-12 h-12 rounded-2xl bg-white p-2 border border-slate-200 flex items-center justify-center overflow-hidden shrink-0 shadow-sm">
                            <img src={job.logo} alt={job.company} className="w-full h-full object-contain" />
                          </div>
                        ) : (
                          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white font-extrabold text-sm shrink-0">
                            {job.company.slice(0, 2).toUpperCase()}
                          </div>
                        )}

                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                              {job.company}
                            </h3>
                            <span className="text-xs text-indigo-400 font-semibold">
                              · {job.context}
                            </span>
                          </div>
                          <p className="text-sm font-semibold text-emerald-400">
                            {job.role[lang]}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Period & Location badge */}
                    <div className="flex flex-wrap lg:flex-col lg:items-end gap-2 text-xs">
                      <span className="px-3 py-1 rounded-full font-bold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                        {job.period[lang]}
                      </span>
                      <span className={`flex items-center gap-1 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                        <MapPin size={12} /> {job.location[lang]}
                      </span>
                    </div>
                  </div>

                  {/* Bullets with quantifiable results */}
                  <div className="mt-6 space-y-3">
                    {job.bullets[lang].map((bullet, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span className="text-indigo-400 font-bold mt-1 text-base">▹</span>
                        <p className={`text-sm sm:text-base leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                          {bullet}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack used */}
                  <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Tech Stack:</span>
                    <span className="text-xs font-mono font-medium text-indigo-300">
                      {job.stack}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== SKILLS & TOOLKIT ===================== */}
        <section id="skills" className="py-20 border-t border-slate-800/80 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-14 text-left">
              <p className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-2">
                03 / TECHNICAL TOOLKIT
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                {lang === 'en' ? 'Engineering Skills & Architecture Competencies' : 'Kỹ Năng Kỹ Thuật & Kiến Trúc Hệ Thống'}
              </h2>
              <p className={`text-sm sm:text-base mt-2 max-w-2xl ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                {lang === 'en'
                  ? 'Core frameworks and distributed tools applied daily in production, adhering to strict typing and automated CI/CD.'
                  : 'Hệ thống công nghệ được tôi sử dụng liên tục trong các dự án thực tế, đảm bảo code sạch, typed chặt chẽ và chuẩn CI/CD.'}
              </p>
            </div>

            {/* Skill categories grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
              {skillCategories.map((group) => {
                const IconComponent = group.icon
                return (
                  <div
                    key={group.title.en}
                    className={`p-6 rounded-3xl border transition-all duration-300 ${
                      darkMode
                        ? 'bg-slate-900/60 border-slate-800 hover:border-slate-700 shadow-xl'
                        : 'bg-white border-slate-200 hover:border-slate-300 shadow-md'
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                        <IconComponent size={20} />
                      </div>
                      <h3 className="font-bold text-lg tracking-tight">
                        {group.title[lang]}
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className={`px-3 py-1.5 rounded-xl text-xs font-semibold border ${
                            darkMode
                              ? 'bg-slate-950/80 border-slate-800 text-slate-200'
                              : 'bg-slate-100 border-slate-200 text-slate-800'
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ===================== EDUCATION & RESEARCH ===================== */}
        <section id="education" className="py-20 border-t border-slate-800/80 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start text-left">
              <div className="lg:col-span-5 space-y-4">
                <p className="text-xs font-bold uppercase tracking-widest text-indigo-400">
                  04 / ACADEMIC BACKGROUND
                </p>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                  {lang === 'en' ? 'Education, Honors & Research' : 'Học Vấn, Bằng Cấp & Nghiên Cứu'}
                </h2>
                <p className={`text-sm sm:text-base leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                  {lang === 'en'
                    ? 'Formal Computer Science background paired with verified university research awards and professional working English.'
                    : 'Nền tảng đào tạo chính quy ngành Công nghệ Thông tin, kết hợp giải thưởng Nghiên cứu Khoa học và chứng chỉ ngoại ngữ đáp ứng môi trường làm việc quốc tế.'}
                </p>
              </div>

              <div className="lg:col-span-7 space-y-6">
                {/* Degree card */}
                <div className={`p-6 sm:p-8 rounded-3xl border ${
                  darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'
                }`}>
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">
                        Ho Chi Minh City University of Industry and Trade (HUIT) · 2022–2026
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                        {lang === 'en' ? 'Bachelor of Information Technology' : 'Cử Nhân Công Nghệ Thông Tin'}
                      </h3>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                      GPA 3.52 / 4.0 (High Honor)
                    </span>
                  </div>

                  <p className={`text-sm mt-3 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                    {lang === 'en'
                      ? 'Comprehensive study of distributed systems, algorithms, database architecture, software engineering principles, and cryptographic security.'
                      : 'Chương trình đào tạo chuyên sâu về cấu trúc dữ liệu, giải thuật, kiến trúc phần mềm, hệ cơ sở dữ liệu và bảo mật thông tin.'}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2 text-xs">
                    <span className={`px-2.5 py-1 rounded-xl border flex items-center gap-1.5 ${
                      darkMode ? 'bg-slate-950 border-slate-800 text-slate-300' : 'bg-slate-100 border-slate-300 text-slate-700'
                    }`}>
                      <GraduationCap size={13} className="text-emerald-400" />
                      <span>Classification: Very Good / Top 5%</span>
                    </span>
                    <span className={`px-2.5 py-1 rounded-xl border flex items-center gap-1.5 ${
                      darkMode ? 'bg-slate-950 border-slate-800 text-slate-300' : 'bg-slate-100 border-slate-300 text-slate-700'
                    }`}>
                      <Globe size={13} className="text-cyan-400" />
                      <span>English: VSTEP B2 (Professional Working Proficiency)</span>
                    </span>
                  </div>
                </div>

                {/* 1st Prize Research Award card */}
                <div className={`p-6 sm:p-8 rounded-3xl border relative overflow-hidden ${
                  darkMode ? 'bg-gradient-to-br from-amber-500/10 via-slate-900 to-slate-900 border-amber-500/30' : 'bg-gradient-to-br from-amber-50 via-white to-white border-amber-300'
                }`}>
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <span className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                        <Award size={14} />
                        {lang === 'en' ? 'First Prize · University Level (2025)' : 'Giải Nhất Cấp Trường · 2025'}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                        {lang === 'en'
                          ? 'Student Scientific Research Competition'
                          : 'Cuộc Thi Nghiên Cứu Khoa Học Sinh Viên'}
                      </h3>
                    </div>
                  </div>

                  <p className={`text-sm mt-3 leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                    {lang === 'en'
                      ? 'Research Topic: "Degree Verification using Hyperledger Fabric and Smart Contracts on a Permissioned Blockchain". Developed immutable cryptographic audit trails to eliminate counterfeit academic credentials.'
                      : 'Đề tài: "Nghiên cứu và hiện thực hóa giải pháp xác thực văn bằng đại học dựa trên nền tảng Blockchain Hyperledger Fabric". Viết Chaincode smart contract bảo đảm tính minh bạch và chống giả mạo hồ sơ văn bằng.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== CONTACT / HIRE ME ===================== */}
        <section id="contact" className="py-24 border-t border-slate-800/80 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <p className="text-xs font-bold uppercase tracking-widest text-indigo-400">
              05 / GET IN TOUCH
            </p>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              {lang === 'en' ? (
                <>
                  Ready to join your engineering team &<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                    deliver real business value from day one.
                  </span>
                </>
              ) : (
                <>
                  Sẵn sàng gia nhập đội ngũ &<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                    tạo ra giá trị ngay hôm nay.
                  </span>
                </>
              )}
            </h2>

            <p className={`text-base sm:text-lg max-w-2xl mx-auto leading-relaxed ${
              darkMode ? 'text-slate-300' : 'text-slate-600'
            }`}>
              {lang === 'en'
                ? 'Whether you are seeking a Full Stack Developer for mission-critical web applications or wish to discuss software architecture, let’s connect!'
                : 'Nếu Quý công ty đang tìm kiếm một Full Stack Developer đam mê, có trách nhiệm cao, sẵn sàng học hỏi nhanh và xử lý các bài toán kỹ thuật phức tạp, hãy kết nối ngay với tôi!'}
            </p>

            {/* Email Contact Big Button */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={copyEmail}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-extrabold text-base rounded-2xl shadow-xl shadow-indigo-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Mail size={20} />
                <span>huynhminhanc5.pbchau@gmail.com</span>
                <Copy size={16} className="text-indigo-200" />
              </button>

              <a
                href="/cv.pdf"
                download="Huynh_Minh_An_FullStack_Developer_CV.pdf"
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl font-bold text-sm border transition-all ${
                  darkMode ? 'bg-slate-900 border-slate-700 text-slate-200 hover:bg-slate-800' : 'bg-white border-slate-300 text-slate-800 hover:bg-slate-50'
                }`}
              >
                <Download size={18} />
                <span>{lang === 'en' ? 'Download Full CV (PDF)' : 'Tải CV Bản Đẹp (PDF)'}</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="pt-6 flex items-center justify-center gap-6">
              <a
                href="https://github.com/minhancr123"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-white transition-colors"
              >
                <Github size={18} />
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/hu%E1%BB%B3nh-minh-an-101899347/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-indigo-400 transition-colors"
              >
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </a>

              <a
                href="mailto:huynhminhanc5.pbchau@gmail.com"
                className="flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-emerald-400 transition-colors"
              >
                <Mail size={18} />
                <span>Email Direct</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ===================== FOOTER ===================== */}
      <footer className={`border-t py-8 text-xs transition-colors ${
        darkMode ? 'border-slate-800/80 text-slate-400 bg-slate-950' : 'border-slate-200 text-slate-500 bg-slate-100'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-bold text-sm">
            <span>Huỳnh Minh An</span>
            <span className="text-indigo-400">·</span>
            <span>Full Stack Developer</span>
          </div>

          <p>© {new Date().getFullYear()} Huỳnh Minh An. Built with React 19, TypeScript & Tailwind CSS.</p>

          <a href="#hero" className="inline-flex items-center gap-1.5 hover:text-indigo-400 transition-colors">
            <span>{lang === 'en' ? 'Back to top' : 'Lên đầu trang'}</span>
            <ArrowDown size={14} className="rotate-180" />
          </a>
        </div>
      </footer>

      {/* ===================== CASE STUDY MODAL ===================== */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md">
          <div
            className="fixed inset-0"
            onClick={() => setActiveModalProject(null)}
          />

          <div className={`relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border shadow-2xl z-10 p-6 sm:p-8 space-y-6 ${
            darkMode ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-300 text-slate-800'
          }`}>
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-800">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
                  {activeModalProject.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold mt-1">
                  {activeModalProject.name}
                </h3>
                <p className="text-sm font-semibold text-indigo-300 mt-1">
                  {activeModalProject.tagline[lang]}
                </p>
              </div>

              <button
                onClick={() => setActiveModalProject(null)}
                className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 transition-colors"
                aria-label="Close Case Study"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Image Preview */}
            {activeModalProject.image && (
              <div className="relative h-48 sm:h-64 rounded-2xl overflow-hidden bg-slate-950 border border-slate-800">
                <img
                  src={activeModalProject.image}
                  alt={activeModalProject.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            )}

            {/* Architecture Highlights */}
            {activeModalProject.architecture && (
              <div className="space-y-4">
                <h4 className="text-sm font-bold uppercase tracking-wider text-indigo-400">
                  {lang === 'en' ? 'Architectural Deep Dive' : 'Phân Tích Kiến Trúc Kỹ Thuật'}
                </h4>

                <div className={`p-4 rounded-2xl border space-y-2 ${
                  darkMode ? 'bg-slate-950/50 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <p className="text-xs font-bold text-rose-400 uppercase tracking-wider">
                    {lang === 'en' ? '1. Core Technical Challenge' : '1. Thách Thức Kỹ Thuật (Challenge)'}
                  </p>
                  <p className="text-sm leading-relaxed text-slate-300">
                    {activeModalProject.architecture.challenge[lang]}
                  </p>
                </div>

                <div className={`p-4 rounded-2xl border space-y-2 ${
                  darkMode ? 'bg-slate-950/50 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <p className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                    {lang === 'en' ? '2. Engineering Solution' : '2. Giải Pháp Hiện Thực Hóa (Solution)'}
                  </p>
                  <p className="text-sm leading-relaxed text-slate-300">
                    {activeModalProject.architecture.solution[lang]}
                  </p>
                </div>

                <div className={`p-4 rounded-2xl border space-y-2 ${
                  darkMode ? 'bg-slate-950/50 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <p className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                    {lang === 'en' ? '3. Measurable Business Impact' : '3. Giá Trị & Kết Quả Đo Lường (Impact)'}
                  </p>
                  <p className="text-sm leading-relaxed text-slate-300">
                    {activeModalProject.architecture.impact[lang]}
                  </p>
                </div>
              </div>
            )}

            {/* Key Deliverables & Details */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-indigo-400">
                {lang === 'en' ? 'Key Deliverables & Implementation Highlights' : 'Các Hạng Mục Đã Bàn Giao'}
              </h4>
              <ul className="space-y-2 text-sm text-slate-300">
                {activeModalProject.details[lang].map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-indigo-400 font-bold mt-0.5">✔</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech stack */}
            <div className="pt-2">
              <p className="text-xs font-bold uppercase text-slate-400 mb-2">Tech Stack:</p>
              <div className="flex flex-wrap gap-1.5">
                {activeModalProject.stack.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-md text-xs font-mono font-semibold bg-indigo-500/10 border border-indigo-500/20 text-indigo-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Bottom Buttons */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                {activeModalProject.live && (
                  <a
                    href={activeModalProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition-all"
                  >
                    <ExternalLink size={14} />
                    <span>Live Demo</span>
                  </a>
                )}
                {activeModalProject.repo && (
                  <a
                    href={activeModalProject.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-bold transition-all"
                  >
                    <Github size={14} />
                    <span>View GitHub</span>
                  </a>
                )}
              </div>

              <button
                onClick={() => setActiveModalProject(null)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white"
              >
                {lang === 'en' ? 'Close' : 'Đóng'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ===================== FULL ATS CV PREVIEW MODAL ===================== */}
      {cvModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto bg-slate-950/85 backdrop-blur-md">
          <div
            className="fixed inset-0"
            onClick={() => setCvModalOpen(false)}
          />

          <div className={`relative w-full ${cvViewMode === 'pdf' ? 'max-w-5xl' : 'max-w-4xl'} max-h-[94vh] overflow-y-auto rounded-3xl border border-slate-700 bg-white text-slate-900 shadow-2xl z-10 flex flex-col`}>
            {/* Top Toolbar */}
            <div className="sticky top-0 z-20 bg-slate-900 text-white px-4 sm:px-6 py-3.5 flex flex-wrap items-center justify-between gap-3 border-b border-slate-800">
              <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                {/* View Mode Segmented Switcher */}
                <div className="p-1 rounded-xl bg-slate-950 border border-slate-800 flex items-center shadow-inner">
                  <button
                    onClick={() => setCvViewMode('ats')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                      cvViewMode === 'ats'
                        ? 'bg-indigo-600 text-white shadow-sm'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <FileText size={14} />
                    <span>{lang === 'en' ? 'ATS Resume (Text)' : 'Bản ATS (Text)'}</span>
                  </button>
                  <button
                    onClick={() => setCvViewMode('pdf')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                      cvViewMode === 'pdf'
                        ? 'bg-indigo-600 text-white shadow-sm'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Eye size={14} />
                    <span>{lang === 'en' ? 'Original CV (PDF Online)' : 'CV Gốc (PDF Online)'}</span>
                  </button>
                </div>

                {/* Modal language toggle (only for ATS view) */}
                {cvViewMode === 'ats' && (
                  <div className="p-0.5 rounded-lg bg-slate-800 border border-slate-700 flex items-center">
                    <button
                      onClick={() => setCvModalLangOverride('en')}
                      className={`px-2 py-1 rounded text-[11px] font-bold ${
                        activeCvLang === 'en' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      EN
                    </button>
                    <button
                      onClick={() => setCvModalLangOverride('vi')}
                      className={`px-2 py-1 rounded text-[11px] font-bold ${
                        activeCvLang === 'vi' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      VI
                    </button>
                  </div>
                )}

                {/* Open in new tab (only for PDF view) */}
                {cvViewMode === 'pdf' && (
                  <a
                    href="/cv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                  >
                    <ExternalLink size={13} />
                    <span className="hidden sm:inline">{lang === 'en' ? 'Full Tab' : 'Mở tab mới'}</span>
                  </a>
                )}
              </div>

              <div className="flex items-center gap-2">
                {/* Print button (only for ATS) */}
                {cvViewMode === 'ats' && (
                  <button
                    onClick={() => window.print()}
                    className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold flex items-center gap-1.5 transition-colors"
                    title="Print / Save to PDF"
                  >
                    <Printer size={14} />
                    <span className="hidden sm:inline">{activeCvLang === 'en' ? 'Print' : 'In'}</span>
                  </button>
                )}

                {/* Direct download PDF */}
                <a
                  href="/cv.pdf"
                  download="Huynh_Minh_An_FullStack_Developer_CV.pdf"
                  className="px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold flex items-center gap-1.5 transition-colors shadow-sm"
                >
                  <Download size={14} />
                  <span>{lang === 'en' ? 'Download PDF' : 'Tải PDF'}</span>
                </a>

                {/* Close modal */}
                <button
                  onClick={() => setCvModalOpen(false)}
                  className="p-1.5 rounded-xl hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                  aria-label="Close CV Modal"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Modal Body: Switch between PDF Embed and ATS Printable Resume */}
            {cvViewMode === 'pdf' ? (
              <div className="p-2 sm:p-4 bg-slate-950 flex flex-col flex-1 h-[82vh] min-h-[620px]">
                <iframe
                  src="/cv.pdf#toolbar=1&navpanes=0&scrollbar=1"
                  title="Huỳnh Minh An — Original CV PDF"
                  className="w-full flex-1 rounded-2xl border border-slate-800 bg-slate-900 shadow-inner"
                />
              </div>
            ) : (
              <div className="p-8 sm:p-12 space-y-8 bg-white text-slate-900 text-left cv-printable">
              {/* Header Info */}
              <div className="border-b border-slate-200 pb-6 space-y-2">
                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
                  HUỲNH MINH AN
                </h1>
                <p className="text-lg font-bold text-indigo-600">
                  Full Stack Developer (Next.js / NestJS / TypeScript / PostgreSQL / Practical AI)
                </p>
                <div className="flex flex-wrap gap-y-1.5 gap-x-4 text-xs font-medium text-slate-600 pt-1">
                  <span className="flex items-center gap-1.5">
                    <MapPin size={12} className="text-slate-500 shrink-0" />
                    <span>Ho Chi Minh City, Vietnam</span>
                  </span>
                  <a href="tel:+84869428117" className="flex items-center gap-1.5 hover:text-indigo-600 transition-colors">
                    <Phone size={12} className="text-slate-500 shrink-0" />
                    <span>+84 869 428 117</span>
                  </a>
                  <a href="mailto:huynhminhanc5.pbchau@gmail.com" className="flex items-center gap-1.5 hover:text-indigo-600 transition-colors">
                    <Mail size={12} className="text-slate-500 shrink-0" />
                    <span>huynhminhanc5.pbchau@gmail.com</span>
                  </a>
                  <a href="https://linkedin.com/in/huỳnh-minh-an-101899347" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-indigo-600 transition-colors">
                    <Linkedin size={12} className="text-slate-500 shrink-0" />
                    <span>linkedin.com/in/huỳnh-minh-an-101899347</span>
                  </a>
                  <a href="https://github.com/minhancr123" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-indigo-600 transition-colors">
                    <Github size={12} className="text-slate-500 shrink-0" />
                    <span>github.com/minhancr123</span>
                  </a>
                </div>
              </div>

              {/* Professional Summary */}
              <div className="space-y-2">
                <h2 className="text-sm font-extrabold uppercase tracking-wider text-slate-900 border-b-2 border-indigo-600 pb-1 w-fit">
                  {activeCvLang === 'en' ? 'PROFESSIONAL SUMMARY' : 'MỤC TIÊU NGHỀ NGHIỆP & TỔNG QUAN'}
                </h2>
                <p className="text-sm leading-relaxed text-slate-700">
                  {activeCvLang === 'en'
                    ? 'Disciplined Full Stack Developer with over 1 year of production experience engineering enterprise-grade web applications. Proven track record delivering 14 production UAV service portals at CT Group, eliminating concurrency inventory overselling through PostgreSQL/Prisma transactions, and building asynchronous media processing pipelines using Redis and BullMQ queues. Awarded First Prize in the 2025 Student Scientific Research Competition for blockchain degree verification. Immediately available and committed to driving rapid business impact.'
                    : 'Full Stack Developer với hơn 1 năm kinh nghiệm thực chiến phát triển và vận hành các sản phẩm web quy mô doanh nghiệp. Có thế mạnh vượt trội trong việc xây dựng giao diện hiện đại với React/Next.js, thiết kế kiến trúc Backend chịu tải với NestJS/Node.js, xử lý hàng đợi background bằng Redis/BullMQ và tối ưu hóa truy vấn cơ sở dữ liệu PostgreSQL/Prisma. Từng bàn giao 14 website dịch vụ UAV tại CT Group và đạt Giải Nhất Nghiên cứu Khoa học Sinh viên với đề tài Blockchain. Sẵn sàng nhận việc và cam kết đồng hành tạo giá trị bền vững cho doanh nghiệp.'}
                </p>
              </div>

              {/* Work Experience */}
              <div className="space-y-4">
                <h2 className="text-sm font-extrabold uppercase tracking-wider text-slate-900 border-b-2 border-indigo-600 pb-1 w-fit">
                  {activeCvLang === 'en' ? 'PROFESSIONAL EXPERIENCE' : 'KINH NGHIỆM LÀM VIỆC'}
                </h2>

                {jobs.map((job) => (
                  <div key={job.company} className="space-y-1.5">
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="font-extrabold text-base text-slate-900">{job.role[activeCvLang]}</span>
                        <span className="text-slate-600 font-medium"> — {job.company} ({job.context})</span>
                      </div>
                      <span className="text-xs font-bold text-slate-500">{job.period[activeCvLang]}</span>
                    </div>

                    <ul className="list-disc list-inside text-xs leading-relaxed text-slate-700 space-y-1">
                      {job.bullets[activeCvLang].map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                    <p className="text-[11px] font-mono text-slate-500 pt-0.5">
                      Tech Stack: {job.stack}
                    </p>
                  </div>
                ))}
              </div>

              {/* Key Projects */}
              <div className="space-y-4">
                <h2 className="text-sm font-extrabold uppercase tracking-wider text-slate-900 border-b-2 border-indigo-600 pb-1 w-fit">
                  {activeCvLang === 'en' ? 'SELECTED KEY PROJECTS' : 'DỰ ÁN TIÊU BIỂU'}
                </h2>

                {projects.slice(0, 3).map((p) => (
                  <div key={p.name} className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-extrabold text-sm text-slate-900">
                        {p.name} — {p.category}
                      </span>
                      {p.live && (
                        <a href={p.live} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-indigo-600 underline">
                          Live Demo
                        </a>
                      )}
                    </div>
                    <p className="text-xs text-slate-700">{p.summary[activeCvLang]}</p>
                    <p className="text-[11px] font-mono text-slate-500">
                      Technologies: {p.stack.join(', ')}
                    </p>
                  </div>
                ))}
              </div>

              {/* Skills */}
              <div className="space-y-2">
                <h2 className="text-sm font-extrabold uppercase tracking-wider text-slate-900 border-b-2 border-indigo-600 pb-1 w-fit">
                  {activeCvLang === 'en' ? 'TECHNICAL SKILLS' : 'KỸ NĂNG CHUYÊN MÔN'}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                  <p><strong>Frontend:</strong> ReactJS, Next.js, TypeScript, JavaScript, Tailwind CSS, Zustand, Redux Toolkit.</p>
                  <p><strong>Backend:</strong> NestJS, Node.js, Express, PHP, RESTful APIs, WebSockets, Zod Schema Validation.</p>
                  <p><strong>Databases & Queues:</strong> PostgreSQL, MySQL, MongoDB, Prisma ORM, Redis (Locking/Caching), BullMQ.</p>
                  <p><strong>DevOps & Tools:</strong> Docker, Docker Compose, GitHub Actions, Nginx, Caddy, Firebase Hosting, Git.</p>
                </div>
              </div>

              {/* Education & Awards */}
              <div className="space-y-2">
                <h2 className="text-sm font-extrabold uppercase tracking-wider text-slate-900 border-b-2 border-indigo-600 pb-1 w-fit">
                  {activeCvLang === 'en' ? 'EDUCATION & HONORS' : 'HỌC VẤN & GIẢI THƯỞNG'}
                </h2>
                <div className="text-xs text-slate-700 space-y-1">
                  <div className="flex justify-between">
                    <span className="font-bold">Ho Chi Minh City University of Industry and Trade (HUIT)</span>
                    <span className="font-bold">GPA: 3.52 / 4.0 (High Honor / Giỏi)</span>
                  </div>
                  <p>Bachelor of Information Technology (2022 – 2026) · English VSTEP B2</p>
                  <p><strong>First Prize, Student Scientific Research Competition 2025:</strong> Degree verification using Hyperledger Fabric permissioned blockchain.</p>
                </div>
              </div>
            </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default App
