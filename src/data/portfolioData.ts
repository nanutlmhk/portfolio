import type { PortfolioContent, SkillGroup } from '../types/portfolio'

// Content must match the CV (public/assets/Nanut_Lertmahakiat_CV.pdf).
// Use the generic platform names below; do not add internal product names.

export const RESUME_URL = '/assets/Nanut_Lertmahakiat_CV.pdf'
export const GITHUB_URL = 'https://github.com/nanutlmhk'

const NAME = 'Nanut Lertmahakiat'
const HEADLINE = 'Clinical Systems & Integration Platform Lead'
const EMAIL = 'nanut.lertmahakiat@protonmail.com'
const PHONE_DISPLAY = '(+66) 92-882-8922'
const PHONE_HREF = 'tel:+66928828922'

const CLIENTS = [
  'BDMS',
  'ESM',
  'Meditop',
  'Siam SCI',
  'Siam International Medical Equipment',
  'CV Lab Thailand',
  'Porjai',
]

const skillItems: string[][] = [
  ['HL7 v2', 'FHIR R4', 'DICOM / DICOMweb', 'REST', 'SOAP', 'Kafka'],
  ['SQL Server', 'PostgreSQL', 'SQLite', 'Keycloak / OIDC', 'Row-level security', 'Audit'],
  ['Windows Server', 'Ubuntu', 'Docker', 'Kubernetes manifests', 'Hospital networks'],
  ['TypeScript', 'Node.js', 'React', 'Electron', 'Python'],
]

const skillGroups = (areas: string[]): SkillGroup[] =>
  areas.map((area, index) => ({ area, items: skillItems[index] }))

export const portfolioContent: Record<'en' | 'th', PortfolioContent> = {
  en: {
    navItems: [
      { label: 'What I bring', href: '#bring' },
      { label: 'Platforms', href: '#platforms' },
      { label: 'Experience', href: '#experience' },
      { label: 'Skills', href: '#skills' },
      { label: 'Contact', href: '#contact' },
    ],
    resumeButton: 'CV',
    hero: {
      name: NAME,
      headline: HEADLINE,
      summary:
        'Healthcare technology leader with 18+ years in software and integration, 8+ in Thai hospitals. I design, run and improve the platforms connecting bedside devices, clinical systems and the HIS, and I stay accountable for them after go-live.',
      location: 'Bangkok, Thailand',
      cvCta: 'Download CV',
      contactCta: 'Contact',
      githubCta: 'GitHub',
      highlightsTitle: 'Career highlights',
      highlights: [
        'Accountable for clinical systems across 60+ operating theatres and 120,000+ operating theatre cases.',
        'Built and run middleware that connects fragmented clinical systems and devices into the hospital platform.',
        'Led legacy clinical data migrations.',
      ],
      mapLabels: {
        devices: 'Devices',
        platform: 'Platform',
        systems: 'Hospital systems',
      },
    },
    stats: [
      { value: '18+', label: 'Years in software and integration' },
      { value: '8+', label: 'Years in Thai hospitals' },
      { value: '60+', label: 'Operating theatres' },
      { value: '120,000+', label: 'Operating theatre cases' },
    ],
    bring: {
      eyebrow: 'What I bring',
      title: 'Seven areas, each with evidence.',
      rows: [
        {
          area: 'Operations and availability',
          evidence: '24/7 OT systems: recovery paths, health checks, stability hardening',
        },
        {
          area: 'System integration',
          evidence:
            'HL7 v2 with HIS, LIS, Blood Bank; drug orders; multi-vendor devices; FHIR and PACS in reference builds',
        },
        {
          area: 'Data management',
          evidence: 'Archive migrations, hash-verified records, retention, verified backup and restore',
        },
        {
          area: 'Security',
          evidence: 'Role-based access, audit trails, tenant isolation, de-identification',
        },
        {
          area: 'Incident and problem management',
          evidence: 'Root-caused long-running device data loss and fixed it, not just restarted it',
        },
        {
          area: 'Projects and change',
          evidence: 'Transitions, UAT, acceptance gates, handover guides, physician committee reviews',
        },
        {
          area: 'Team leadership',
          evidence: 'Technical Project Leader; led multidisciplinary hospital and vendor teams',
        },
      ],
    },
    platforms: {
      eyebrow: 'Platform portfolio',
      title: 'Every platform with its real status.',
      rows: [
        {
          platform: 'OT charting + device middleware',
          purpose: 'Anesthesia record with multi-vendor devices (GE, Dräger, Philips, B. Braun)',
          status: 'Production, hospital OTs',
          tone: 'live',
        },
        {
          platform: 'Drug order integration',
          purpose: 'Dialysis system to HIS',
          status: 'Delivered',
          tone: 'live',
        },
        {
          platform: 'Legacy Migration Project',
          purpose: 'Migrate and integrate legacy system records into a new PostgreSQL archive',
          status: 'Deployment in progress',
          tone: 'progress',
        },
        {
          platform: 'Radiology AI Support',
          purpose: 'DICOM image analysis integrated with PACS',
          status: 'Pre-pilot',
          tone: 'progress',
        },
        {
          platform: 'BDMS (confidential)',
          purpose: 'Hospital platform consulting; details under confidentiality agreement',
          status: 'Ongoing',
          tone: 'progress',
        },
        {
          platform: 'Wallflower',
          purpose: 'Hospital-day simulation and digital twin, live public demo',
          status: 'Synthetic data only',
          tone: 'demo',
        },
      ],
    },
    experience: {
      eyebrow: 'Experience',
      title: '18+ years, from industrial software to hospital platforms.',
      roles: [
        {
          organization: 'Independent Healthcare Systems Consultant',
          role: 'Product, Integration & Platform Lead',
          period: 'June 2025 – Present',
          bullets: [
            'Design and build products and integrations across most of the hospital: patient access, OPD, operating theatre and ICU, laboratory and pathology AI, radiology and PACS, pharmacy, billing, HR and ERP.',
            'Deliver integrations and data migrations into live hospital systems, from requirements to acceptance and support.',
            'Fix recurring failures at the root, not by restarting them.',
            'Review vendor proposals and write the operating documents hospitals run on.',
          ],
        },
        {
          organization: 'Dräger Medical (Thailand) Ltd.',
          role: 'Clinical IT Specialist | Medical Device Integration Expert | Technical Project Leader',
          period: '2017 – 2025',
          bullets: [
            'Technical Project Leader for anesthesia information system implementations across major Thai hospitals, from planning to go-live and support.',
            'Led hospital IT, biomedical engineers, clinicians and vendors through integration, testing and go-live.',
            'Owned HL7 interfaces (ADT, DFT, observation) and resolved live incidents in operating theatre environments.',
          ],
        },
        {
          organization: 'TTCL Public Company Limited',
          role: 'IT Engineer | Software Developer | Project Implementation Specialist',
          period: '2007 – 2017',
          bullets: [
            'Built and delivered software for industrial, power and chemical-plant operations in mission-critical environments.',
          ],
        },
      ],
    },
    clients: {
      eyebrow: 'Clients',
      title: 'Clients as an independent consultant.',
      names: CLIENTS,
    },
    skills: {
      eyebrow: 'Skills',
      title: 'Technical skills, education and languages.',
      groups: skillGroups(['Interoperability', 'Data and security', 'Infrastructure', 'Development']),
      note: 'FHIR, PACS and Kafka experience comes from reference builds.',
      educationTitle: 'Education',
      degree: 'Bachelor of Science in Information Technology',
      school: "King Mongkut's Institute of Technology Ladkrabang (KMITL)",
      languagesTitle: 'Languages',
      languages: 'Thai, English',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Get in touch.',
      actions: [
        { kind: 'email', title: 'Email', description: EMAIL, href: `mailto:${EMAIL}`, cta: 'Send email' },
        { kind: 'phone', title: 'Phone', description: PHONE_DISPLAY, href: PHONE_HREF, cta: 'Call' },
        { kind: 'github', title: 'GitHub', description: 'github.com/nanutlmhk', href: GITHUB_URL, cta: 'Open GitHub' },
      ],
    },
    controls: { english: 'EN', thai: 'TH' },
  },
  th: {
    navItems: [
      { label: 'จุดแข็ง', href: '#bring' },
      { label: 'แพลตฟอร์ม', href: '#platforms' },
      { label: 'ประสบการณ์', href: '#experience' },
      { label: 'ทักษะ', href: '#skills' },
      { label: 'ติดต่อ', href: '#contact' },
    ],
    resumeButton: 'CV',
    hero: {
      name: NAME,
      headline: HEADLINE,
      summary:
        'ผู้นำด้านเทคโนโลยีสุขภาพ ประสบการณ์ด้านซอฟต์แวร์และ integration กว่า 18 ปี โดยกว่า 8 ปีอยู่ในโรงพยาบาลไทย ผมออกแบบ ดูแล และพัฒนาแพลตฟอร์มที่เชื่อมอุปกรณ์ข้างเตียง ระบบทางคลินิก และ HIS และรับผิดชอบต่อเนื่องหลัง go-live',
      location: 'กรุงเทพฯ ประเทศไทย',
      cvCta: 'ดาวน์โหลด CV',
      contactCta: 'ติดต่อ',
      githubCta: 'GitHub',
      highlightsTitle: 'ผลงานเด่น',
      highlights: [
        'รับผิดชอบระบบทางคลินิกในห้องผ่าตัดกว่า 60 ห้อง และเคสผ่าตัดกว่า 120,000 เคส',
        'สร้างและดูแล middleware ที่เชื่อมระบบทางคลินิกและอุปกรณ์ที่แยกส่วนกันเข้ากับแพลตฟอร์มของโรงพยาบาล',
        'นำโครงการย้ายข้อมูลทางคลินิกจากระบบเดิม',
      ],
      mapLabels: {
        devices: 'อุปกรณ์',
        platform: 'แพลตฟอร์ม',
        systems: 'ระบบโรงพยาบาล',
      },
    },
    stats: [
      { value: '18+', label: 'ปีในงานซอฟต์แวร์และ integration' },
      { value: '8+', label: 'ปีในโรงพยาบาลไทย' },
      { value: '60+', label: 'ห้องผ่าตัด' },
      { value: '120,000+', label: 'เคสผ่าตัด' },
    ],
    bring: {
      eyebrow: 'จุดแข็ง',
      title: 'เจ็ดด้าน พร้อมหลักฐานของแต่ละด้าน',
      rows: [
        {
          area: 'การปฏิบัติการและความพร้อมใช้งาน',
          evidence: 'ระบบห้องผ่าตัด 24/7: แนวทางกู้คืนระบบ, health check และการเสริมเสถียรภาพ',
        },
        {
          area: 'System integration',
          evidence:
            'HL7 v2 กับ HIS, LIS, Blood Bank; drug order; อุปกรณ์หลายยี่ห้อ; FHIR และ PACS ใน reference build',
        },
        {
          area: 'การจัดการข้อมูล',
          evidence: 'ย้ายข้อมูลเข้า archive, ระเบียนที่ตรวจสอบด้วย hash, retention, backup และ restore ที่ผ่านการตรวจสอบ',
        },
        {
          area: 'ความปลอดภัย',
          evidence: 'Role-based access, audit trail, tenant isolation, de-identification',
        },
        {
          area: 'Incident และ problem management',
          evidence: 'หาสาเหตุที่แท้จริงของปัญหาข้อมูลอุปกรณ์สูญหายที่เกิดต่อเนื่อง และแก้ที่ต้นเหตุ ไม่ใช่แค่ restart',
        },
        {
          area: 'โครงการและการเปลี่ยนแปลง',
          evidence: 'Transition, UAT, acceptance gate, คู่มือส่งมอบงาน และการนำเสนอต่อคณะกรรมการแพทย์',
        },
        {
          area: 'การนำทีม',
          evidence: 'Technical Project Leader นำทีมสหสาขาทั้งฝั่งโรงพยาบาลและ vendor',
        },
      ],
    },
    platforms: {
      eyebrow: 'Platform portfolio',
      title: 'ทุกแพลตฟอร์มแสดงสถานะตามจริง',
      rows: [
        {
          platform: 'OT charting + device middleware',
          purpose: 'บันทึกวิสัญญีร่วมกับอุปกรณ์หลายยี่ห้อ (GE, Dräger, Philips, B. Braun)',
          status: 'Production ในห้องผ่าตัดโรงพยาบาล',
          tone: 'live',
        },
        {
          platform: 'Drug order integration',
          purpose: 'ระบบไตเทียมเชื่อมกับ HIS',
          status: 'ส่งมอบแล้ว',
          tone: 'live',
        },
        {
          platform: 'Legacy Migration Project',
          purpose: 'ย้ายและรวมระเบียนจากระบบเดิมเข้าสู่ archive ใหม่บน PostgreSQL',
          status: 'กำลังติดตั้ง',
          tone: 'progress',
        },
        {
          platform: 'Radiology AI Support',
          purpose: 'วิเคราะห์ภาพ DICOM เชื่อมกับ PACS',
          status: 'Pre-pilot',
          tone: 'progress',
        },
        {
          platform: 'BDMS (confidential)',
          purpose: 'ที่ปรึกษาด้านแพลตฟอร์มโรงพยาบาล รายละเอียดอยู่ภายใต้ข้อตกลงรักษาความลับ',
          status: 'กำลังดำเนินการ',
          tone: 'progress',
        },
        {
          platform: 'Wallflower',
          purpose: 'แบบจำลองการทำงานหนึ่งวันของโรงพยาบาลและ digital twin เป็น demo สาธารณะ',
          status: 'ข้อมูลสังเคราะห์เท่านั้น',
          tone: 'demo',
        },
      ],
    },
    experience: {
      eyebrow: 'ประสบการณ์',
      title: 'กว่า 18 ปี จากซอฟต์แวร์อุตสาหกรรมสู่แพลตฟอร์มโรงพยาบาล',
      roles: [
        {
          organization: 'Independent Healthcare Systems Consultant',
          role: 'Product, Integration & Platform Lead',
          period: 'มิถุนายน 2025 – ปัจจุบัน',
          bullets: [
            'ออกแบบและสร้างผลิตภัณฑ์และ integration ครอบคลุมเกือบทั้งโรงพยาบาล: patient access, OPD, ห้องผ่าตัดและ ICU, ห้องปฏิบัติการและ pathology AI, รังสีวิทยาและ PACS, เภสัชกรรม, billing, HR และ ERP',
            'ส่งมอบ integration และการย้ายข้อมูลเข้าสู่ระบบโรงพยาบาลที่ใช้งานจริง ตั้งแต่ requirement จนถึง acceptance และ support',
            'แก้ปัญหาที่เกิดซ้ำที่ต้นเหตุ ไม่ใช่ด้วยการ restart',
            'ตรวจสอบข้อเสนอของ vendor และเขียนเอกสารปฏิบัติงานที่โรงพยาบาลใช้จริง',
          ],
        },
        {
          organization: 'Dräger Medical (Thailand) Ltd.',
          role: 'Clinical IT Specialist | Medical Device Integration Expert | Technical Project Leader',
          period: '2017 – 2025',
          bullets: [
            'Technical Project Leader ในการติดตั้งระบบข้อมูลวิสัญญีให้โรงพยาบาลขนาดใหญ่ของไทย ตั้งแต่วางแผนจนถึง go-live และ support',
            'นำทีมไอทีโรงพยาบาล วิศวกรชีวการแพทย์ บุคลากรทางคลินิก และ vendor ตลอดช่วง integration, testing และ go-live',
            'ดูแล HL7 interface (ADT, DFT, observation) และแก้ incident ที่เกิดขึ้นจริงในห้องผ่าตัด',
          ],
        },
        {
          organization: 'TTCL Public Company Limited',
          role: 'IT Engineer | Software Developer | Project Implementation Specialist',
          period: '2007 – 2017',
          bullets: [
            'พัฒนาและส่งมอบซอฟต์แวร์สำหรับงานอุตสาหกรรม โรงไฟฟ้า และโรงงานเคมี ในสภาพแวดล้อมแบบ mission-critical',
          ],
        },
      ],
    },
    clients: {
      eyebrow: 'ลูกค้า',
      title: 'ลูกค้าในฐานะที่ปรึกษาอิสระ',
      names: CLIENTS,
    },
    skills: {
      eyebrow: 'ทักษะ',
      title: 'ทักษะทางเทคนิค การศึกษา และภาษา',
      groups: skillGroups(['Interoperability', 'ข้อมูลและความปลอดภัย', 'โครงสร้างพื้นฐาน', 'การพัฒนาซอฟต์แวร์']),
      note: 'ประสบการณ์ด้าน FHIR, PACS และ Kafka มาจาก reference build',
      educationTitle: 'การศึกษา',
      degree: 'วิทยาศาสตรบัณฑิต สาขาเทคโนโลยีสารสนเทศ',
      school: 'สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง (KMITL)',
      languagesTitle: 'ภาษา',
      languages: 'ไทย, อังกฤษ',
    },
    contact: {
      eyebrow: 'ติดต่อ',
      title: 'ติดต่อผม',
      actions: [
        { kind: 'email', title: 'อีเมล', description: EMAIL, href: `mailto:${EMAIL}`, cta: 'ส่งอีเมล' },
        { kind: 'phone', title: 'โทรศัพท์', description: PHONE_DISPLAY, href: PHONE_HREF, cta: 'โทร' },
        { kind: 'github', title: 'GitHub', description: 'github.com/nanutlmhk', href: GITHUB_URL, cta: 'เปิด GitHub' },
      ],
    },
    controls: { english: 'EN', thai: 'TH' },
  },
}
