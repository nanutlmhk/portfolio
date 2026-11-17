import type { PortfolioContent, SkillGroup } from '../types/portfolio'

// Content must match the CV (public/assets/Nanut_Lertmahakiat_CV.pdf).
// Use the generic platform names below; do not add internal product names.

export const RESUME_URL = '/assets/Nanut_Lertmahakiat_CV.pdf'
export const GITHUB_URL = 'https://github.com/nanutlmhk'
export const LINKEDIN_URL = 'https://www.linkedin.com/in/nanutlertmahakiat/'

const NAME = 'Nanut Lertmahakiat'
const HEADLINE = 'Clinical Systems & Integration Platform Lead'
const EMAIL = 'nanut.lertmahakiat@protonmail.com'
const mailto = (subject: string) => `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}`
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

const skillGroups = (areas: string[], translated: Record<string, string> = {}): SkillGroup[] =>
  areas.map((area, index) => ({ area, items: skillItems[index].map((item) => translated[item] ?? item) }))

export const portfolioContent: Record<'en' | 'th', PortfolioContent> = {
  en: {
    navItems: [
      { label: 'About', href: '#about' },
      { label: 'What I bring', href: '#bring' },
      { label: 'Platforms', href: '#platforms' },
      { label: 'Experience', href: '#experience' },
      { label: 'Work with me', href: '#work' },
      { label: 'Contact', href: '#contact' },
    ],
    resumeButton: 'CV',
    hero: {
      name: NAME,
      headline: HEADLINE,
      summary:
        'Healthcare technology leader with 18+ years in software and integration, 8+ in Thai hospitals. I design, run and improve the platforms connecting bedside devices, clinical systems and the HIS, and I stay accountable for them after go-live.',
      location: 'Bangkok, Thailand',
      openTo: 'Open to full-time roles and consulting projects',
      cvCta: 'Download CV',
      contactCta: 'Work with me',
      githubCta: 'GitHub',
      linkedinCta: 'LinkedIn',
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
    about: {
      eyebrow: 'About me',
      title: 'Eighteen years of building systems that have to keep working.',
      photoAlt: 'Portrait of Nanut Lertmahakiat',
      paragraphs: [
        'I started in industrial software in 2007, building systems for power and chemical plants where downtime was not an option. In 2017 I moved into hospitals with Dräger, leading anesthesia information system projects across major Thai hospitals.',
        'Since June 2025 I have worked independently for hospitals and healthcare companies, designing and delivering integrations and data migrations into live systems. I am based in Bangkok and work in Thai and English.',
      ],
      principles: [
        {
          title: 'Fix it at the root',
          text: 'I trace a failure to its cause and fix that, instead of restarting the system and waiting for it to happen again.',
        },
        {
          title: 'Stay accountable after go-live',
          text: 'A system is not delivered when it goes live. I stay on for support, recovery paths and stability.',
        },
        {
          title: 'Write it down, hand it over',
          text: 'Handover guides, operating documents and training, so the team can run the system without me.',
        },
        {
          title: 'Say what is real',
          text: 'Every platform I show has its real status. Anything with patient data or under confidentiality stays private.',
        },
      ],
    },
    work: {
      eyebrow: 'Work with me',
      title: 'Hire me, or bring me a problem.',
      intro: 'Two ways to work together. Both start with a short conversation about what you need.',
      hire: {
        tag: 'Full-time',
        title: 'Hire me',
        text: 'For hospitals and healthcare companies that need someone to own clinical systems and integration platforms.',
        items: [
          'Integration platform manager',
          'Clinical systems manager',
          'Hospital IT manager',
          'Technical project lead, healthcare IT',
        ],
        cta: 'Email about a role',
        href: mailto('Role enquiry – Nanut Lertmahakiat'),
      },
      consult: {
        tag: 'Project',
        title: 'Work with me on a project',
        text: 'For hospitals, vendors and suppliers who need a specific problem solved and handed over.',
        items: [
          'Integration and device connectivity: review or delivery',
          'Legacy data migration into a new archive',
          'Vendor proposal and TOR review',
          'Go-live readiness and stability hardening',
          'Training, handover guides and operating documents',
        ],
        cta: 'Email about a project',
        href: mailto('Project enquiry – Nanut Lertmahakiat'),
      },
      processTitle: 'How we start',
      process: [
        { title: 'Listen', text: 'A short call about the decision or problem in front of you.' },
        { title: 'Diagnose', text: 'I look at the systems, people and vendors involved and say what is really in the way.' },
        { title: 'Deliver', text: 'A plan with owners and acceptance gates, then the work.' },
        { title: 'Hand over', text: 'Documentation, training and tests, so your team can run it.' },
      ],
      note: 'Rates depend on scope, so I do not publish them. Tell me what you need and I will reply. I cannot discuss confidential client work, and please do not send patient data by email.',
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
        {
          kind: 'linkedin',
          title: 'LinkedIn',
          description: 'linkedin.com/in/nanutlertmahakiat',
          href: LINKEDIN_URL,
          cta: 'Open LinkedIn',
        },
        { kind: 'github', title: 'GitHub', description: 'github.com/nanutlmhk', href: GITHUB_URL, cta: 'Open GitHub' },
      ],
    },
    controls: { english: 'EN', thai: 'TH' },
  },
  // Thai copy: descriptive words are in Thai. Only proper nouns, product names and
  // standard acronyms (HL7, HIS, LIS, FHIR, PACS, DICOM, ICU, OPD, UAT, TOR) stay in English.
  th: {
    navItems: [
      { label: 'เกี่ยวกับผม', href: '#about' },
      { label: 'จุดแข็ง', href: '#bring' },
      { label: 'แพลตฟอร์ม', href: '#platforms' },
      { label: 'ประสบการณ์', href: '#experience' },
      { label: 'ร่วมงานกับผม', href: '#work' },
      { label: 'ติดต่อ', href: '#contact' },
    ],
    resumeButton: 'CV',
    hero: {
      name: 'ณนัทธ์ เลิศมหาเกียรติ',
      headline: 'หัวหน้าแพลตฟอร์มระบบคลินิกและการเชื่อมต่อระบบ',
      summary:
        'ผู้นำด้านเทคโนโลยีสุขภาพ ประสบการณ์ด้านซอฟต์แวร์และการเชื่อมต่อระบบกว่า 18 ปี โดยกว่า 8 ปีอยู่ในโรงพยาบาลไทย ผมออกแบบ ดูแล และพัฒนาแพลตฟอร์มที่เชื่อมอุปกรณ์ข้างเตียง ระบบทางคลินิก และ HIS และรับผิดชอบต่อเนื่องหลังเปิดใช้งานจริง',
      location: 'กรุงเทพฯ ประเทศไทย',
      openTo: 'เปิดรับงานประจำและงานที่ปรึกษาแบบโครงการ',
      cvCta: 'ดาวน์โหลด CV',
      contactCta: 'ร่วมงานกับผม',
      githubCta: 'GitHub',
      linkedinCta: 'LinkedIn',
      highlightsTitle: 'ผลงานเด่น',
      highlights: [
        'รับผิดชอบระบบทางคลินิกในห้องผ่าตัดกว่า 60 ห้อง และเคสผ่าตัดกว่า 120,000 เคส',
        'สร้างและดูแลมิดเดิลแวร์ที่เชื่อมระบบทางคลินิกและอุปกรณ์ที่แยกส่วนกันเข้ากับแพลตฟอร์มของโรงพยาบาล',
        'นำโครงการย้ายข้อมูลทางคลินิกจากระบบเดิม',
      ],
      twin: {
        note: 'แบบจำลอง · ข้อมูลสังเคราะห์',
        legend: { staff: 'เจ้าหน้าที่', patient: 'ผู้ป่วย', journey: 'เส้นทางของผู้ป่วยหนึ่งราย' },
      },
    },
    stats: [
      { value: '18+', label: 'ปีในงานซอฟต์แวร์และการเชื่อมต่อระบบ' },
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
          evidence: 'ระบบห้องผ่าตัดตลอด 24 ชั่วโมง: แนวทางกู้คืนระบบ การตรวจสอบสถานะระบบ และการเสริมเสถียรภาพ',
        },
        {
          area: 'การเชื่อมต่อระบบ',
          evidence:
            'HL7 v2 กับ HIS, LIS และธนาคารเลือด; คำสั่งยา; อุปกรณ์หลายยี่ห้อ; FHIR และ PACS ในระบบต้นแบบอ้างอิง',
        },
        {
          area: 'การจัดการข้อมูล',
          evidence:
            'ย้ายข้อมูลเข้าคลังข้อมูลถาวร ระเบียนที่ตรวจสอบด้วยค่าแฮช การกำหนดอายุการเก็บรักษา และการสำรองและกู้คืนข้อมูลที่ผ่านการตรวจสอบ',
        },
        {
          area: 'ความปลอดภัย',
          evidence:
            'การกำหนดสิทธิ์ตามบทบาท บันทึกการตรวจสอบย้อนหลัง การแยกข้อมูลระหว่างหน่วยงาน และการลบข้อมูลระบุตัวตน',
        },
        {
          area: 'การจัดการเหตุขัดข้องและปัญหา',
          evidence: 'หาสาเหตุที่แท้จริงของปัญหาข้อมูลอุปกรณ์สูญหายที่เกิดต่อเนื่อง และแก้ที่ต้นเหตุ ไม่ใช่แค่เริ่มระบบใหม่',
        },
        {
          area: 'โครงการและการเปลี่ยนแปลง',
          evidence:
            'การเปลี่ยนผ่านระบบ การทดสอบรับระบบโดยผู้ใช้ (UAT) เกณฑ์ตรวจรับงาน คู่มือส่งมอบงาน และการนำเสนอต่อคณะกรรมการแพทย์',
        },
        {
          area: 'การนำทีม',
          evidence: 'หัวหน้าโครงการด้านเทคนิค นำทีมสหสาขาทั้งฝั่งโรงพยาบาลและผู้จำหน่ายระบบ',
        },
      ],
    },
    about: {
      eyebrow: 'เกี่ยวกับผม',
      title: 'สิบแปดปีของการสร้างระบบที่ต้องใช้งานได้ต่อเนื่อง',
      photoAlt: 'ภาพถ่ายของณนัทธ์ เลิศมหาเกียรติ',
      paragraphs: [
        'ผมเริ่มงานด้านซอฟต์แวร์สำหรับงานอุตสาหกรรมในปี 2007 สร้างระบบให้โรงไฟฟ้าและโรงงานเคมีที่หยุดชะงักไม่ได้ จากนั้นในปี 2017 ย้ายเข้าสู่วงการโรงพยาบาลกับ Dräger นำโครงการติดตั้งระบบข้อมูลวิสัญญีให้โรงพยาบาลขนาดใหญ่ของไทย',
        'ตั้งแต่มิถุนายน 2025 ผมทำงานอิสระให้โรงพยาบาลและบริษัทด้านสุขภาพ ออกแบบและส่งมอบการเชื่อมต่อระบบและการย้ายข้อมูลเข้าสู่ระบบที่ใช้งานจริง อาศัยอยู่ในกรุงเทพฯ และทำงานได้ทั้งภาษาไทยและอังกฤษ',
      ],
      principles: [
        {
          title: 'แก้ที่ต้นเหตุ',
          text: 'ผมไล่หาสาเหตุของปัญหาและแก้ที่ตรงนั้น ไม่ใช่เริ่มระบบใหม่แล้วรอให้เกิดซ้ำ',
        },
        {
          title: 'รับผิดชอบต่อหลังเปิดใช้งาน',
          text: 'ระบบยังส่งมอบไม่เสร็จเมื่อเปิดใช้งานจริง ผมอยู่ต่อเพื่อดูแลงานสนับสนุน แนวทางกู้คืนระบบ และเสถียรภาพ',
        },
        {
          title: 'จดไว้และส่งมอบ',
          text: 'คู่มือส่งมอบงาน เอกสารปฏิบัติงาน และการฝึกอบรม เพื่อให้ทีมดูแลระบบต่อได้โดยไม่ต้องพึ่งผม',
        },
        {
          title: 'บอกตามจริง',
          text: 'ทุกแพลตฟอร์มที่แสดงมีสถานะตามจริง ส่วนงานที่มีข้อมูลผู้ป่วยหรืออยู่ภายใต้ข้อตกลงรักษาความลับ จะไม่เปิดเผย',
        },
      ],
    },
    work: {
      eyebrow: 'ร่วมงานกับผม',
      title: 'จ้างผม หรือนำปัญหามาปรึกษา',
      intro: 'ร่วมงานได้สองแบบ ทั้งสองแบบเริ่มจากการพูดคุยสั้น ๆ ว่าคุณต้องการอะไร',
      hire: {
        tag: 'งานประจำ',
        title: 'จ้างเป็นพนักงาน',
        text: 'สำหรับโรงพยาบาลและบริษัทด้านสุขภาพที่ต้องการผู้ดูแลระบบคลินิกและแพลตฟอร์มการเชื่อมต่อระบบ',
        items: [
          'ผู้จัดการแพลตฟอร์มการเชื่อมต่อระบบ',
          'ผู้จัดการระบบคลินิก',
          'ผู้จัดการไอทีโรงพยาบาล',
          'หัวหน้าโครงการด้านเทคนิค สายไอทีสุขภาพ',
        ],
        cta: 'อีเมลสอบถามตำแหน่งงาน',
        href: mailto('สอบถามตำแหน่งงาน – ณนัทธ์ เลิศมหาเกียรติ'),
      },
      consult: {
        tag: 'งานโครงการ',
        title: 'ว่าจ้างเป็นโครงการ',
        text: 'สำหรับโรงพยาบาล ผู้จำหน่ายระบบ และบริษัทที่ต้องการแก้ปัญหาเฉพาะเรื่องและส่งมอบงานให้ครบ',
        items: [
          'การเชื่อมต่อระบบและอุปกรณ์: ตรวจสอบหรือส่งมอบงาน',
          'ย้ายข้อมูลจากระบบเดิมเข้าคลังข้อมูลใหม่',
          'ตรวจสอบข้อเสนอของผู้จำหน่ายระบบและ TOR',
          'เตรียมความพร้อมก่อนเปิดใช้งานและเสริมเสถียรภาพระบบ',
          'การฝึกอบรม คู่มือส่งมอบงาน และเอกสารปฏิบัติงาน',
        ],
        cta: 'อีเมลสอบถามงานโครงการ',
        href: mailto('สอบถามงานโครงการ – ณนัทธ์ เลิศมหาเกียรติ'),
      },
      processTitle: 'เริ่มต้นอย่างไร',
      process: [
        { title: 'ฟัง', text: 'พูดคุยสั้น ๆ เรื่องการตัดสินใจหรือปัญหาที่อยู่ตรงหน้า' },
        { title: 'วิเคราะห์', text: 'ดูระบบ คน และผู้จำหน่ายที่เกี่ยวข้อง แล้วบอกว่าอะไรคือสิ่งที่ขวางอยู่จริง' },
        { title: 'ส่งมอบ', text: 'แผนงานที่มีผู้รับผิดชอบและเกณฑ์ตรวจรับงาน จากนั้นลงมือทำ' },
        { title: 'ส่งต่อ', text: 'เอกสาร การฝึกอบรม และการทดสอบ เพื่อให้ทีมของคุณดูแลระบบต่อได้' },
      ],
      note: 'ค่าตอบแทนขึ้นอยู่กับขอบเขตงาน จึงไม่ประกาศราคา บอกผมว่าคุณต้องการอะไร แล้วผมจะตอบกลับ งานของลูกค้าที่เป็นความลับผมไม่สามารถพูดถึงได้ และกรุณาอย่าส่งข้อมูลผู้ป่วยทางอีเมล',
    },
    management: {
      eyebrow: 'การบริหารจัดการ',
      title: 'ผมบริหารงาน ไม่ใช่แค่ดูแลระบบ',
      rows: [
        {
          area: 'การประสานงานผู้มีส่วนได้ส่วนเสีย',
          evidence: 'เป็นตัวกลางระหว่างผู้บริหารโรงพยาบาล แพทย์ พยาบาล ทีมไอที วิศวกรชีวการแพทย์ และผู้จำหน่ายระบบ',
        },
        {
          area: 'TOR และการบริหารผู้จำหน่ายระบบ',
          evidence: 'เขียน TOR ตรวจสอบข้อเสนอของผู้จำหน่ายระบบ และกำกับให้ผ่านเกณฑ์ตรวจรับงาน',
        },
        {
          area: 'ความต้องการและการตัดสินใจ',
          evidence: 'แปลงความต้องการทางคลินิกเป็นข้อกำหนดที่ชัดเจน และตัดสินใจเรื่องขอบเขตและลำดับความสำคัญ',
        },
        {
          area: 'การบริหารรายการงาน',
          evidence: 'ดูแลและจัดลำดับรายการงานของผลิตภัณฑ์ งานเชื่อมต่อระบบ และงานสนับสนุน',
        },
        {
          area: 'การบริหารทีม',
          evidence: 'นำทีมสหสาขาทั้งฝั่งโรงพยาบาลและผู้จำหน่ายระบบ ตั้งแต่วางแผนจนถึงเปิดใช้งานจริงและงานสนับสนุน',
        },
        {
          area: 'การฝึกอบรมและส่งมอบงาน',
          evidence: 'ฝึกอบรมผู้ใช้งานและทีมสนับสนุน และเขียนคู่มือส่งมอบงานที่ใช้งานได้จริง',
        },
      ],
    },
    platforms: {
      eyebrow: 'ผลงานแพลตฟอร์ม',
      title: 'ทุกแพลตฟอร์มแสดงสถานะตามจริง',
      note: 'ภาพประกอบเป็นภาพวาด ไม่ใช่ภาพหน้าจอจริง จึงไม่มีข้อมูลผู้ป่วย ส่วนภาพ Wallflower เป็นภาพหน้าจอจริงของข้อมูลสังเคราะห์',
      artLabel: 'ภาพประกอบ',
      rows: [
        {
          platform: 'ระบบบันทึกในห้องผ่าตัด + มิดเดิลแวร์อุปกรณ์',
          purpose: 'บันทึกวิสัญญีร่วมกับอุปกรณ์หลายยี่ห้อ (GE, Dräger, Philips, B. Braun)',
          status: 'ใช้งานจริงในห้องผ่าตัดโรงพยาบาล',
          tone: 'live',
        },
        {
          platform: 'การเชื่อมต่อคำสั่งยา',
          purpose: 'ระบบไตเทียมเชื่อมกับ HIS',
          status: 'ส่งมอบแล้ว',
          tone: 'live',
        },
        {
          platform: 'โครงการย้ายข้อมูลระบบเดิม',
          purpose: 'ย้ายและรวมระเบียนจากระบบเดิมเข้าสู่คลังข้อมูลใหม่บน PostgreSQL',
          status: 'กำลังติดตั้ง',
          tone: 'progress',
        },
        {
          platform: 'ระบบสนับสนุน AI ด้านรังสีวิทยา',
          purpose: 'วิเคราะห์ภาพ DICOM เชื่อมกับ PACS',
          status: 'ก่อนนำร่อง',
          tone: 'progress',
        },
        {
          platform: 'BDMS (ข้อมูลลับ)',
          purpose: 'ที่ปรึกษาด้านแพลตฟอร์มโรงพยาบาล รายละเอียดอยู่ภายใต้ข้อตกลงรักษาความลับ',
          status: 'กำลังดำเนินการ',
          tone: 'progress',
        },
        {
          platform: 'Wallflower',
          purpose: 'แบบจำลองการทำงานหนึ่งวันของโรงพยาบาลและแบบจำลองดิจิทัลของอาคาร เปิดให้ทดลองใช้แบบสาธารณะ',
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
          organization: 'ที่ปรึกษาอิสระด้านระบบสุขภาพ',
          role: 'หัวหน้าด้านผลิตภัณฑ์ การเชื่อมต่อระบบ และแพลตฟอร์ม',
          period: 'มิถุนายน 2025 – ปัจจุบัน',
          bullets: [
            'ออกแบบและสร้างผลิตภัณฑ์และการเชื่อมต่อระบบครอบคลุมเกือบทั้งโรงพยาบาล: การเข้าถึงบริการของผู้ป่วย OPD ห้องผ่าตัดและ ICU ห้องปฏิบัติการและ AI ด้านพยาธิวิทยา รังสีวิทยาและ PACS เภสัชกรรม การเรียกเก็บเงิน งานบุคคล และ ERP',
            'ส่งมอบการเชื่อมต่อระบบและการย้ายข้อมูลเข้าสู่ระบบโรงพยาบาลที่ใช้งานจริง ตั้งแต่เก็บความต้องการจนถึงตรวจรับงานและงานสนับสนุน',
            'แก้ปัญหาที่เกิดซ้ำที่ต้นเหตุ ไม่ใช่ด้วยการเริ่มระบบใหม่',
            'ตรวจสอบข้อเสนอของผู้จำหน่ายระบบ และเขียนเอกสารปฏิบัติงานที่โรงพยาบาลใช้จริง',
          ],
        },
        {
          organization: 'Dräger Medical (Thailand) Ltd.',
          role: 'ผู้เชี่ยวชาญไอทีทางคลินิก | ผู้เชี่ยวชาญการเชื่อมต่ออุปกรณ์การแพทย์ | หัวหน้าโครงการด้านเทคนิค',
          period: '2017 – 2025',
          bullets: [
            'หัวหน้าโครงการด้านเทคนิคในการติดตั้งระบบข้อมูลวิสัญญีให้โรงพยาบาลขนาดใหญ่ของไทย ตั้งแต่วางแผนจนถึงเปิดใช้งานจริงและงานสนับสนุน',
            'นำทีมไอทีโรงพยาบาล วิศวกรชีวการแพทย์ บุคลากรทางคลินิก และผู้จำหน่ายระบบ ตลอดช่วงการเชื่อมต่อระบบ การทดสอบ และการเปิดใช้งานจริง',
            'ดูแลอินเทอร์เฟซ HL7 (ADT, DFT และผลการตรวจวัด) และแก้เหตุขัดข้องที่เกิดขึ้นจริงในห้องผ่าตัด',
          ],
        },
        {
          organization: 'TTCL Public Company Limited',
          role: 'วิศวกรไอที | นักพัฒนาซอฟต์แวร์ | ผู้เชี่ยวชาญการติดตั้งโครงการ',
          period: '2007 – 2017',
          bullets: [
            'พัฒนาและส่งมอบซอฟต์แวร์สำหรับงานอุตสาหกรรม โรงไฟฟ้า และโรงงานเคมี ในสภาพแวดล้อมที่ระบบหยุดชะงักไม่ได้',
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
      groups: skillGroups(['การทำงานร่วมกันของระบบ', 'ข้อมูลและความปลอดภัย', 'โครงสร้างพื้นฐาน', 'การพัฒนาซอฟต์แวร์'], {
        Audit: 'การตรวจสอบย้อนหลัง',
        'Row-level security': 'ความปลอดภัยระดับแถวข้อมูล',
        'Hospital networks': 'เครือข่ายโรงพยาบาล',
      }),
      note: 'ประสบการณ์ด้าน FHIR, PACS และ Kafka มาจากระบบต้นแบบอ้างอิง',
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
        {
          kind: 'linkedin',
          title: 'LinkedIn',
          description: 'linkedin.com/in/nanutlertmahakiat',
          href: LINKEDIN_URL,
          cta: 'เปิด LinkedIn',
        },
        { kind: 'github', title: 'GitHub', description: 'github.com/nanutlmhk', href: GITHUB_URL, cta: 'เปิด GitHub' },
      ],
    },
    controls: { english: 'EN', thai: 'TH' },
  },
}
