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
  'CV Lab Thailand',
]

// Logo files live in public/logos as transparent PNG or SVG. Dark mode renders them in one light colour (see .logo in index.css).
// A name without an entry here is shown as text only.
export const LOGOS: Record<string, string> = {
  BDMS: 'bdms.svg',
  ESM: 'esm.png',
  Meditop: 'meditop.png',
  'Siam SCI': 'siam-sci.png',
  'CV Lab Thailand': 'cv-lab.png',
  'King Chulalongkorn Memorial Hospital (KCMH)': 'kcmh.png',
  'Neurological Institute of Thailand (NIT)': 'nit.png',
  'Vimut Hospital': 'vimut.svg',
  'Lampang Hospital': 'lampang-hospital.png',
  'WIH International Hospital': 'wih.png',
  'Dräger': 'draeger.png',
  'GE HealthCare': 'ge-healthcare.svg',
  Philips: 'philips.png',
  'B. Braun': 'bbraun.png',
  Fresenius: 'fresenius.svg',
  Getinge: 'getinge.svg',
}

const HOSPITALS = [
  'King Chulalongkorn Memorial Hospital (KCMH)',
  'Neurological Institute of Thailand (NIT)',
  'Vimut Hospital',
  'Lampang Hospital',
  'WIH International Hospital',
]

const DEVICE_VENDORS = ['Dräger', 'GE HealthCare', 'Philips', 'B. Braun', 'Fresenius', 'Getinge']

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
      { label: 'Management', href: '#management' },
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
      twin: {
        note: 'Simulation · synthetic data',
        legend: { staff: 'Staff', patient: 'Patients', journey: 'One patient journey' },
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
    management: {
      eyebrow: 'Management',
      title: 'How I run the work, not just the systems.',
      rows: [
        {
          area: 'Stakeholder liaison',
          evidence:
            'The link between hospital executives, physicians, nursing, hospital IT, biomedical engineering and vendors.',
        },
        {
          area: 'TOR and vendor management',
          evidence: 'Write terms of reference, review vendor proposals and hold vendors to acceptance gates.',
        },
        {
          area: 'Requirements and decisions',
          evidence: 'Turn clinical needs into clear requirements and make the scope and priority decisions.',
        },
        {
          area: 'Backlog management',
          evidence: 'Own and prioritise the backlog across products, integrations and support work.',
        },
        {
          area: 'Team management',
          evidence: 'Lead multidisciplinary hospital and vendor teams from planning through go-live and support.',
        },
        {
          area: 'Training and handover',
          evidence: 'Train users and support teams, and write the handover guides they keep using.',
        },
      ],
    },
    platforms: {
      eyebrow: 'Platform portfolio',
      title: 'Every platform with its real status.',
      note: 'The thumbnails are illustrations, not screenshots, so no patient data is shown. The Wallflower image is a real screenshot of synthetic data.',
      artLabel: 'illustration',
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
      eyebrow: 'Clients, hospitals and devices',
      title: 'Who I have worked with, and the devices I have integrated.',
      groups: [
        { kind: 'client', label: 'Consulting clients', names: CLIENTS },
        { kind: 'partner', label: 'Hospitals and medical device vendors', names: [...HOSPITALS, ...DEVICE_VENDORS] },
      ],
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
      { label: 'การบริหาร', href: '#management' },
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
      twin: {
        note: 'แบบจำลอง · ข้อมูลสังเคราะห์',
        legend: { staff: 'เจ้าหน้าที่', patient: 'ผู้ป่วย', journey: 'เส้นทางของผู้ป่วยหนึ่งราย' },
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
    management: {
      eyebrow: 'การบริหารจัดการ',
      title: 'ผมบริหารงาน ไม่ใช่แค่ดูแลระบบ',
      rows: [
        {
          area: 'การประสานงานผู้มีส่วนได้ส่วนเสีย',
          evidence: 'เป็นตัวกลางระหว่างผู้บริหารโรงพยาบาล แพทย์ พยาบาล ทีมไอที วิศวกรชีวการแพทย์ และ vendor',
        },
        {
          area: 'TOR และการบริหาร vendor',
          evidence: 'เขียน TOR ตรวจสอบข้อเสนอของ vendor และกำกับให้ vendor ผ่าน acceptance gate',
        },
        {
          area: 'Requirement และการตัดสินใจ',
          evidence: 'แปลงความต้องการทางคลินิกเป็น requirement ที่ชัดเจน และตัดสินใจเรื่องขอบเขตและลำดับความสำคัญ',
        },
        {
          area: 'การบริหาร backlog',
          evidence: 'ดูแลและจัดลำดับ backlog ของผลิตภัณฑ์ งาน integration และงาน support',
        },
        {
          area: 'การบริหารทีม',
          evidence: 'นำทีมสหสาขาทั้งฝั่งโรงพยาบาลและ vendor ตั้งแต่วางแผนจนถึง go-live และ support',
        },
        {
          area: 'การฝึกอบรมและส่งมอบงาน',
          evidence: 'ฝึกอบรมผู้ใช้งานและทีม support และเขียนคู่มือส่งมอบงานที่ใช้งานได้จริง',
        },
      ],
    },
    platforms: {
      eyebrow: 'Platform portfolio',
      title: 'ทุกแพลตฟอร์มแสดงสถานะตามจริง',
      note: 'ภาพประกอบเป็นภาพวาด ไม่ใช่ภาพหน้าจอจริง จึงไม่มีข้อมูลผู้ป่วย ส่วนภาพ Wallflower เป็นภาพหน้าจอจริงของข้อมูลสังเคราะห์',
      artLabel: 'ภาพประกอบ',
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
      eyebrow: 'ลูกค้า โรงพยาบาล และอุปกรณ์',
      title: 'องค์กรที่ผมเคยทำงานด้วย และอุปกรณ์ที่ผมเคยเชื่อมต่อ',
      groups: [
        { kind: 'client', label: 'ลูกค้างานที่ปรึกษา', names: CLIENTS },
        { kind: 'partner', label: 'โรงพยาบาลและผู้ผลิตอุปกรณ์การแพทย์', names: [...HOSPITALS, ...DEVICE_VENDORS] },
      ],
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
