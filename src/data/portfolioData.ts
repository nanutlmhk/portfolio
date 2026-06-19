import type { PortfolioContent } from '../types/portfolio'

export const portfolioContent: Record<'en' | 'th', PortfolioContent> = {
  en: {
    navItems: [
      { label: 'Home', href: '#home' },
      { label: 'About', href: '#about' },
      { label: 'Experience', href: '#experience' },
      { label: 'Project', href: '#projects' },
      { label: 'Contact', href: '#contact' },
    ],
    tagline: 'Healthcare IT Leader / Technical Project Lead / System Integration Architect',
    resumeButton: 'Resume',
    hero: {
      title: 'Healthcare IT Leader / Technical Project Lead / System Integration Architect',
      description:
        'Open to leadership, consulting, and project-based opportunities in Healthcare IT, system integration, and digital health transformation.',
      availability: ['Full-time Roles', 'Consulting / Advisory'],
      experienceTitle: 'Experience',
      skillTitle: 'Core Skills',
      skillChips: [
        'Hospital Systems',
        'HIS Integration',
        'Medical Device Integration',
        'Clinical Workflow',
        'AIMS',
        'HL7 / Interoperability',
        'Healthcare Middleware',
        'Technical Project Leadership',
        'React.js',
        'Electron',
        'Python',
        'TypeScript',
        'API Integration',
        'SQL / Database Design',
      ],
      primaryCta: 'View Experience',
      secondaryCta: 'Download Resume',
    },
    stats: [
      { value: '17+', label: 'Years of IT Experience' },
      { value: '8+', label: 'Years in Healthcare IT' },
      { value: '10+', label: 'Hospital Projects Delivered' },
    ],
    focusAreas: [
      {
        title: 'Hospital System Integration',
        description:
          'Connecting HIS, clinical platforms, middleware, and medical devices into practical operational workflows.',
      },
      {
        title: 'Clinical Workflow Delivery',
        description:
          'Turning perioperative and hospital requirements into systems clinicians can use with confidence.',
      },
      {
        title: 'Technical Project Leadership',
        description:
          'Aligning hospital stakeholders, vendors, and engineering teams to deliver stable healthcare systems.',
      },
    ],
    about: {
      eyebrow: 'About',
      title:
        'A healthcare technologist working between clinical operations, hospital IT, and software delivery.',
      description:
        'My career combines software engineering, healthcare IT, system integration, medical device connectivity, and project leadership. I work closely with hospital management, clinicians, biomedical engineering teams, IT departments, and software vendors to turn healthcare requirements into working systems.',
      paragraphs: [
        'Unlike a traditional software developer, my work often sits between clinical operations, hospital IT infrastructure, and software engineering teams. I specialize in translating healthcare requirements into practical technical solutions and improving the path from integration challenge to implementation.',
        'Across operating room systems, intensive care environments, medical device connectivity, HL7 integration, healthcare data exchange, and digital health initiatives, the through-line has been dependable system delivery that supports real hospital workflows.',
      ],
      expertiseTitle: 'Strongest Expertise',
      expertise: [
        'HIS Integration',
        'Medical Device Integration',
        'Clinical Workflow Design',
        'AIMS',
        'Healthcare Middleware',
        'Software Architecture',
        'Technical Project Leadership',
      ],
      interestsTitle: 'Areas of Interest',
      interestsDescription:
        'Digital Health Platforms, Clinical Systems, Healthcare AI, Medical IoT, and Healthcare Innovation.',
    },
    experience: {
      eyebrow: 'Hospital Experience',
      title: 'Experience Across Healthcare Environments',
      description:
        'An overview of the hospitals and healthcare organizations where I have designed, implemented, and delivered healthcare technology solutions.',
      imageTitle: 'Hospital IT Landscape',
      imageDescription:
        'A quick visual summary of the hospital systems and integration landscape relevant to my experience.',
      entries: [
        {
          organization: 'King Chulalongkorn Memorial Hospital (KCMH)',
          role: 'Healthcare IT Lead / System Integration Architect',
          period: 'Hospital Environment',
          description:
            "One of Thailand's leading university hospitals, operating in a highly complex clinical environment with mission-critical healthcare systems.",
          highlights: [
            'Supported and enhanced anesthesia information systems and healthcare integrations',
            'Worked closely with hospital IT teams, anesthesiologists, nurses, biomedical engineers, and technology vendors',
            'Ensured reliable operation within real operating room environments',
            'Anesthesia Information Management System (AIMS)',
            'Medical Device Integration',
            'HL7 Interface & Healthcare Interoperability',
            'Hospital System Integration',
            'Deployment & Production Support',
            'Clinical Workflow Design',
          ],
        },
        {
          organization: 'Vimut Hospital',
          role: 'Healthcare Integration Consultant / Technical Lead',
          period: 'Hospital Environment',
          description:
            'A modern private hospital focused on digital healthcare transformation, healthcare interoperability, and integration with a cloud-based HIS environment on AWS.',
          highlights: [
            'Participated in designing and planning healthcare integration initiatives',
            'Worked closely with hospital IT teams on infrastructure, networking, security requirements, and integration architecture',
            'Supported integration design for hospital systems operating with a cloud-based HIS on AWS',
            'Ensured operational readiness for production environments',
            'Healthcare Integration Architecture',
            'Middleware Deployment',
            'Infrastructure Planning',
            'Cloud HIS Integration',
            'AWS Environment Coordination',
            'Network & Security Coordination',
            'Interoperability Projects',
            'Production Readiness',
          ],
        },
        {
          organization: 'National Institute of Development Administration / NIT Project',
          role: 'Solution Architect / Software Developer',
          period: 'Delivery Organization',
          description:
            'A healthcare document management and workflow optimization initiative focused on anesthesia-related clinical documentation.',
          highlights: [
            'Designed workflow automation processes to reduce manual document handling',
            'Improved data accuracy, reliability, and operational efficiency in day-to-day healthcare workflows',
            'Healthcare Document Management',
            'Workflow Automation',
            'Process Optimization',
            'Clinical PDF Management',
            'Data Validation',
            'Operational Efficiency Improvement',
          ],
        },
        {
          organization: 'Lampang Hospital',
          role: 'Healthcare Integration Specialist',
          period: 'Hospital Environment',
          description:
            'A provincial hospital environment requiring real-time integration between ICU patient monitoring systems and the Hospital Information System (HIS).',
          highlights: [
            'Participated in designing and implementing integrations between patient monitoring devices and hospital systems',
            'Worked closely with hospital IT teams and clinical users to ensure accurate and reliable clinical data exchange',
            'ICU Patient Monitoring Integration',
            'HL7 Integration',
            'Healthcare Interoperability',
            'JSON/API Transformation',
            'HIS Integration',
            'Production Deployment & Support',
          ],
        },
      ],
    },
    projectsSection: {
      eyebrow: 'Projects',
      title: 'Platforms and systems shaped around workflow, interoperability, and clinical operations.',
      description:
        'These projects are framed around what had to be solved in the healthcare environment and what kind of system or delivery outcome was created as a result.',
      labels: {
        problemSolved: 'Problem Solved',
        systemDelivered: 'System Delivered',
        outcomeFocus: 'Outcome Focus',
        systems: 'Systems',
      },
      entries: [
        {
          title: 'Aidas',
          category: 'Anesthesia Information / Clinical Documentation Platform',
          summary:
            'Delivered anesthesia workflow and documentation capabilities for hospital environments requiring dependable perioperative data capture.',
          challenge:
            'Hospitals needed a structured way to capture anesthesia records, connect patient context, and support clinical documentation in a high-pressure OR setting.',
          delivery:
            'Led delivery across workflow understanding, implementation planning, integration coordination, and system support for anesthesia information management.',
          impact: [
            'Supported paper-to-digital transition for anesthesia records',
            'Aligned OR workflow with structured clinical documentation',
            'Connected perioperative data capture with surrounding hospital systems',
          ],
          systems: ['AIMS', 'OR workflow', 'Clinical documentation', 'Hospital integration'],
          tags: ['Anesthesia', 'AIMS', 'Clinical Systems', 'Implementation'],
        },
        {
          title: 'Hidro',
          category: 'Healthcare Integration Middleware',
          summary:
            'Built healthcare integration middleware connecting HIS, LIS, RIS, medical devices, and downstream applications across hospital environments.',
          challenge:
            'Hospital environments rely on multiple clinical and operational systems that expose different data structures, interface styles, and workflow requirements across departments.',
          delivery:
            'Designed middleware and interface approaches that bridge HL7 messaging, HIS, LIS, RIS, medical device data, hospital data exchange, and API-oriented integration patterns.',
          impact: [
            'Reduced integration complexity between heterogeneous hospital systems and departmental platforms',
            'Improved interoperability across hospital information, laboratory, radiology, and device-connected workflows',
            'Created a reusable approach for healthcare data movement, transformation, and downstream application integration',
          ],
          systems: ['HIS', 'LIS', 'RIS', 'HL7', 'APIs', 'Middleware', 'Interoperability'],
          tags: ['HL7', 'Middleware', 'API Integration', 'Interoperability'],
        },
        {
          title: 'Medical-Grade Clinical Software Support and Implementation',
          category: 'Clinical Software Support / Deployment / Escalation Management',
          summary:
            'Supported, deployed, and maintained medical-grade clinical software in hospital environments where reliability, troubleshooting, and communication were critical.',
          challenge:
            'Clinical software in live hospital operations requires careful implementation, stable support, fast issue resolution, and clear escalation paths when problems affect patient care workflows.',
          delivery:
            'Handled implementation support, troubleshooting, production issue analysis, stakeholder communication, and escalation coordination with vendors and international support teams.',
          impact: [
            'Improved continuity and stability of clinical software operations',
            'Supported hospital go-lives, upgrades, and environment-specific issue resolution',
            'Bridged communication between local hospital teams, vendors, and global support functions',
          ],
          systems: ['Clinical software', 'Hospital deployments', 'Production support', 'Vendor escalation'],
          tags: ['Support', 'Troubleshooting', 'Implementation', 'Global Coordination'],
        },
      ],
    },
    resume: {
      eyebrow: 'Resume',
      title: 'A profile built around systems delivered, stakeholder alignment, and implementation reality.',
      description:
        'For hiring managers, the strongest fit is in roles that need someone who can connect business intent, clinical workflows, technical architecture, and implementation execution.',
      downloadEyebrow: 'Resume Download',
      downloadTitle: 'Detailed experience and contact information are available in the CV.',
      downloadDescription:
        'This site gives a quick strategic view. The attached resume provides full role history, supporting detail, and direct contact information.',
      downloadCta: 'Open Resume PDF',
      highlights: [
        {
          title: 'Where I Add Value',
          description:
            'I work at the intersection of clinical operations, hospital IT infrastructure, software engineering, and vendor delivery.',
        },
        {
          title: 'Common Problems I Solve',
          description:
            'Complex integration challenges, disconnected workflows, device connectivity issues, and implementation gaps between business intent and technical execution.',
        },
        {
          title: 'Leadership Style',
          description:
            'Translate healthcare requirements into practical technical plans, align stakeholders, and keep delivery grounded in real hospital operations.',
        },
      ],
      capabilitiesTitle: 'Key Capabilities',
      capabilities: [
        'Hospital Information System integration',
        'Medical device connectivity and clinical interface design',
        'Healthcare middleware and interoperability architecture',
        'Anesthesia Information Management Systems implementation',
        'Clinical workflow analysis and digital process improvement',
        'Project implementation, vendor coordination, and deployment support',
      ],
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Direct contact for Healthcare IT, integration, and technical leadership opportunities.',
      description:
        'Reach me directly for full-time roles, consulting opportunities, or healthcare technology discussions.',
      actions: [
        {
          title: 'Nanut Lertmahakiat',
          description: 'nanut.lertmahakiat@protonmail.com',
          href: 'mailto:nanut.lertmahakiat@protonmail.com',
          cta: 'Send Email',
        },
        {
          title: 'GitHub',
          description: 'github.com/nanutlmhk',
          href: 'https://github.com/nanutlmhk',
          cta: 'Open GitHub',
        },
        {
          title: 'Phone',
          description: '+66896904334',
          href: 'tel:+66896904334',
          cta: 'Call',
        },
      ],
    },
    controls: { english: 'EN', thai: 'TH' },
  },
  th: {
    navItems: [
      { label: 'หน้าแรก', href: '#home' },
      { label: 'เกี่ยวกับ', href: '#about' },
      { label: 'ประสบการณ์', href: '#experience' },
      { label: 'โปรเจกต์', href: '#projects' },
      { label: 'ติดต่อ', href: '#contact' },
    ],
    tagline: 'Healthcare IT Leader / Technical Project Lead / System Integration Architect',
    resumeButton: 'เรซูเม่',
    hero: {
      title: 'Healthcare IT Leader / Technical Project Lead / System Integration Architect',
      description:
        'เปิดรับโอกาสด้านงานบริหาร โครงการ และงานที่ปรึกษา ในสาย Healthcare IT, System Integration และ Digital Health Transformation',
      availability: ['Full-time Roles', 'Consulting / Advisory'],
      experienceTitle: 'Experience',
      skillTitle: 'Core Skills',
      skillChips: [
        'Hospital Systems',
        'HIS Integration',
        'Medical Device Integration',
        'Clinical Workflow',
        'AIMS',
        'HL7 / Interoperability',
        'Healthcare Middleware',
        'Technical Project Leadership',
        'React.js',
        'Electron',
        'Python',
        'TypeScript',
        'API Integration',
        'SQL / Database Design',
      ],
      primaryCta: 'ดูประสบการณ์',
      secondaryCta: 'ดาวน์โหลดเรซูเม่',
    },
    stats: [
      { value: '17+', label: 'ปีประสบการณ์ด้าน IT' },
      { value: '8+', label: 'ปีในสายงาน Healthcare IT' },
      { value: '10+', label: 'โครงการโรงพยาบาลที่ส่งมอบสำเร็จ' },
    ],
    focusAreas: [
      {
        title: 'Hospital System Integration',
        description:
          'เชื่อม HIS, clinical platforms, middleware และ medical devices ให้ทำงานร่วมกันใน workflow ของโรงพยาบาล',
      },
      {
        title: 'Clinical Workflow Delivery',
        description:
          'แปลงความต้องการหน้างานใน OR และโรงพยาบาลให้เป็นระบบที่ใช้งานได้จริงสำหรับผู้ใช้ทางคลินิก',
      },
      {
        title: 'Technical Project Leadership',
        description:
          'ประสานงานระหว่างโรงพยาบาล vendor และทีมวิศวกรรมเพื่อส่งมอบระบบสุขภาพที่เสถียร',
      },
    ],
    about: {
      eyebrow: 'เกี่ยวกับ',
      title: 'ผู้เชี่ยวชาญด้าน Healthcare IT และ System Integration ที่มีประสบการณ์เชื่อมโยงการทำงานระหว่างหน่วยงานทางคลินิก ระบบสารสนเทศโรงพยาบาล และทีมพัฒนาซอฟต์แวร์',
      description:
        'ตลอดเส้นทางอาชีพ ผมได้มีโอกาสทำงานร่วมกับผู้บริหารโรงพยาบาล แพทย์ พยาบาล ทีมวิศวกรรมการแพทย์ ทีม IT และผู้พัฒนาระบบ เพื่อออกแบบ พัฒนา และส่งมอบโซลูชันด้านเทคโนโลยีสุขภาพ ตั้งแต่การเชื่อมต่ออุปกรณ์ทางการแพทย์ การบูรณาการข้อมูลระหว่างระบบ ไปจนถึงการพัฒนาแพลตฟอร์มดิจิทัลที่สนับสนุนการดูแลผู้ป่วยและการดำเนินงานของโรงพยาบาล',
      paragraphs: [
        'ผมทำงานอยู่ในจุดตัดระหว่างงานด้านคลินิก เทคโนโลยีสารสนเทศ และการพัฒนาซอฟต์แวร์ โดยมีบทบาทในการเชื่อมโยงความต้องการของผู้ใช้งานจริงเข้ากับการออกแบบและพัฒนาระบบเทคโนโลยีที่สามารถนำไปใช้งานได้อย่างมีประสิทธิภาพ',
        'ประสบการณ์ของผมครอบคลุมตั้งแต่ระบบห้องผ่าตัด (OR), ระบบดูแลผู้ป่วยวิกฤต (ICU), การเชื่อมต่ออุปกรณ์ทางการแพทย์, การบูรณาการข้อมูลด้วย HL7, การเชื่อมต่อระบบสารสนเทศโรงพยาบาล ไปจนถึงโครงการด้าน Digital Health โดยมีเป้าหมายหลักคือการส่งมอบระบบที่ตอบโจทย์การทำงานจริงของโรงพยาบาลและบุคลากรทางการแพทย์',
      ],
      expertiseTitle: 'ความเชี่ยวชาญหลัก',
      expertise: [
        'HIS Integration',
        'Medical Device Integration',
        'Clinical Workflow Design',
        'AIMS',
        'Healthcare Middleware',
        'Software Architecture',
        'Technical Project Leadership',
      ],
      interestsTitle: 'ความสนใจ',
      interestsDescription:
        'Digital Health Platforms, Clinical Systems, Healthcare AI, Medical IoT และ Healthcare Innovation',
    },
    experience: {
      eyebrow: 'ประสบการณ์จริง',
      title: 'ประสบการณ์ในโรงพยาบาลและองค์กรด้านเทคโนโลยีสุขภาพ',
      description:
        'ภาพรวมของสภาพแวดล้อมการทำงานจริงที่ผมมีโอกาสร่วมออกแบบ พัฒนา และส่งมอบโซลูชันด้านสุขภาพ ก่อนลงรายละเอียดของแต่ละโครงการ',
      imageTitle: 'ภาพรวม Hospital IT',
      imageDescription:
        'ภาพอ้างอิงสรุประบบในโรงพยาบาลและ landscape ของ integration ที่เกี่ยวข้องกับประสบการณ์ของผม',
      entries: [
        {
          organization: 'King Chulalongkorn Memorial Hospital (KCMH)',
          role: 'Healthcare IT Lead / System Integration Architect',
          period: 'Hospital Environment',
          description:
            'หนึ่งในโรงพยาบาลมหาวิทยาลัยขนาดใหญ่ของประเทศไทยที่มีสภาพแวดล้อมการทำงานทางคลินิกที่ซับซ้อน และมีความต้องการด้านความต่อเนื่องของระบบสูง',
          highlights: [
            'มีส่วนร่วมในการสนับสนุนและพัฒนาระบบด้านวิสัญญีและการเชื่อมต่อข้อมูลทางการแพทย์',
            'ทำงานร่วมกับทีม IT โรงพยาบาล วิสัญญีแพทย์ พยาบาล ทีมวิศวกรรมการแพทย์ และผู้ให้บริการระบบ',
            'เพื่อให้ระบบสามารถรองรับการใช้งานจริงในห้องผ่าตัดได้อย่างมีประสิทธิภาพ',
            'Anesthesia Information Management System (AIMS)',
            'Medical Device Integration',
            'HL7 Interface & Healthcare Interoperability',
            'Hospital System Integration',
            'Deployment & Production Support',
            'Clinical Workflow Design',
          ],
        },
        {
          organization: 'Vimut Hospital',
          role: 'Healthcare Integration Consultant / Technical Lead',
          period: 'Hospital Environment',
          description:
            'โรงพยาบาลเอกชนที่มุ่งเน้นการพัฒนา Digital Healthcare การเชื่อมโยงข้อมูลระหว่างระบบทางการแพทย์ และการทำงานร่วมกับ HIS ที่อยู่บน Cloud (AWS)',
          highlights: [
            'มีส่วนร่วมในการออกแบบและวางแผนโครงการด้าน Healthcare Integration',
            'ทำงานร่วมกับทีม IT โรงพยาบาลในด้านโครงสร้างพื้นฐาน ระบบเครือข่าย ความปลอดภัย และสถาปัตยกรรมการเชื่อมต่อข้อมูล',
            'สนับสนุนการออกแบบ integration สำหรับระบบโรงพยาบาลที่ทำงานร่วมกับ Cloud-based HIS บน AWS',
            'เพื่อเตรียมความพร้อมสำหรับการใช้งานในสภาพแวดล้อมจริง',
            'Healthcare Integration Architecture',
            'Middleware Deployment',
            'Infrastructure Planning',
            'Cloud HIS Integration',
            'AWS Environment Coordination',
            'Network & Security Coordination',
            'Interoperability Projects',
            'Production Readiness',
          ],
        },
        {
          organization: 'National Institute of Development Administration / NIT Project',
          role: 'Solution Architect / Software Developer',
          period: 'Delivery Organization',
          description:
            'โครงการด้านการจัดการเอกสารทางการแพทย์และการปรับปรุงกระบวนการทำงานสำหรับข้อมูลที่เกี่ยวข้องกับงานวิสัญญี',
          highlights: [
            'รับผิดชอบในการออกแบบระบบ Workflow Automation เพื่อช่วยลดภาระงานที่เกิดจากกระบวนการจัดการเอกสารแบบ Manual',
            'เพิ่มความถูกต้องและความน่าเชื่อถือของข้อมูลในกระบวนการทำงานประจำวัน',
            'Healthcare Document Management',
            'Workflow Automation',
            'Process Optimization',
            'Clinical PDF Management',
            'Data Validation',
            'Operational Efficiency Improvement',
          ],
        },
        {
          organization: 'Lampang Hospital',
          role: 'Healthcare Integration Specialist',
          period: 'Hospital Environment',
          description:
            'โรงพยาบาลระดับจังหวัดที่ต้องการเชื่อมต่อข้อมูลระหว่างอุปกรณ์ทางการแพทย์ใน ICU และระบบสารสนเทศโรงพยาบาลแบบ Real-Time',
          highlights: [
            'มีส่วนร่วมในการออกแบบและพัฒนาระบบเชื่อมต่อข้อมูลระหว่างเครื่องติดตามสัญญาณชีพผู้ป่วยกับ Hospital Information System (HIS)',
            'ทำงานร่วมกับทีม IT และผู้ใช้งานทางคลินิก เพื่อให้การส่งข้อมูลทางการแพทย์เป็นไปอย่างถูกต้องและเชื่อถือได้',
            'ICU Patient Monitoring Integration',
            'HL7 Integration',
            'Healthcare Interoperability',
            'JSON/API Transformation',
            'HIS Integration',
            'Production Deployment & Support',
          ],
        },
      ],
    },
    projectsSection: {
      eyebrow: 'โปรเจกต์',
      title: 'แพลตฟอร์มและระบบที่ขับเคลื่อนด้วย workflow, interoperability และ clinical operations',
      description:
        'โปรเจกต์เหล่านี้ถูกเล่าผ่านมุมมองของปัญหาที่ต้องแก้ใน healthcare environment และระบบหรือผลลัพธ์ที่ส่งมอบได้จริง',
      labels: {
        problemSolved: 'ปัญหาที่แก้',
        systemDelivered: 'สิ่งที่ส่งมอบ',
        outcomeFocus: 'ผลลัพธ์ที่เกิดขึ้น',
        systems: 'ระบบที่เกี่ยวข้อง',
      },
      entries: [
        {
          title: 'Aidas',
          category: 'แพลตฟอร์ม Anesthesia Information / Clinical Documentation',
          summary:
            'ส่งมอบความสามารถด้าน anesthesia workflow และ documentation สำหรับโรงพยาบาลที่ต้องการการเก็บข้อมูล perioperative ที่เชื่อถือได้',
          challenge:
            'โรงพยาบาลต้องการระบบที่ช่วยบันทึก anesthesia record อย่างมีโครงสร้าง เชื่อมบริบทผู้ป่วย และรองรับ clinical documentation ใน OR ที่มีความกดดันสูง',
          delivery:
            'มีบทบาทในด้าน workflow understanding, implementation planning, integration coordination และ system support สำหรับระบบ anesthesia information management',
          impact: [
            'ช่วยเปลี่ยนจากเอกสารกระดาษสู่การบันทึก anesthesia แบบดิจิทัล',
            'ทำให้ OR workflow สอดคล้องกับ structured clinical documentation',
            'เชื่อมการเก็บข้อมูล perioperative กับระบบอื่นในโรงพยาบาล',
          ],
          systems: ['AIMS', 'OR workflow', 'Clinical documentation', 'Hospital integration'],
          tags: ['Anesthesia', 'AIMS', 'Clinical Systems', 'Implementation'],
        },
        {
          title: 'Hidro',
          category: 'Healthcare Integration Middleware',
          summary:
            'สร้าง healthcare integration middleware ที่เชื่อม HIS, LIS, RIS, medical devices และ downstream applications ในสภาพแวดล้อมของโรงพยาบาล',
          challenge:
            'สภาพแวดล้อมในโรงพยาบาลมีทั้งระบบคลินิกและระบบปฏิบัติการหลายตัวที่มี data structure, interface style และ workflow requirement ต่างกันในแต่ละแผนก',
          delivery:
            'ออกแบบ middleware และแนวทาง interface ที่เชื่อม HL7 messaging, HIS, LIS, RIS, medical device data, hospital data exchange และ API-oriented integration patterns เข้าด้วยกัน',
          impact: [
            'ลดความซับซ้อนของ integration ระหว่าง hospital systems และ departmental platforms ที่หลากหลาย',
            'เพิ่ม interoperability ระหว่าง hospital information, laboratory, radiology และ device-connected workflows',
            'สร้างแนวทางที่นำกลับมาใช้ซ้ำได้สำหรับ healthcare data movement, transformation และ downstream application integration',
          ],
          systems: ['HIS', 'LIS', 'RIS', 'HL7', 'APIs', 'Middleware', 'Interoperability'],
          tags: ['HL7', 'Middleware', 'API Integration', 'Interoperability'],
        },
        {
          title: 'Medical-Grade Clinical Software Support and Implementation',
          category: 'Clinical Software Support / Deployment / Escalation Management',
          summary:
            'สนับสนุน ติดตั้ง และดูแล medical-grade clinical software ในสภาพแวดล้อมโรงพยาบาลที่ความเสถียร การแก้ปัญหา และการสื่อสารเป็นเรื่องสำคัญ',
          challenge:
            'clinical software ที่ใช้งานจริงในโรงพยาบาลต้องการการ implement อย่างระมัดระวัง การ support ที่เสถียร การแก้ปัญหาที่รวดเร็ว และการ escalate ที่ชัดเจนเมื่อกระทบต่อ workflow การดูแลผู้ป่วย',
          delivery:
            'ดูแลงาน implementation support, troubleshooting, production issue analysis, stakeholder communication และการประสาน escalation กับ vendors และ international support teams',
          impact: [
            'เพิ่มความต่อเนื่องและเสถียรภาพของการใช้งาน clinical software',
            'สนับสนุน hospital go-live, upgrades และการแก้ปัญหาเฉพาะของแต่ละ environment',
            'เชื่อมการสื่อสารระหว่าง local hospital teams, vendors และ global support functions',
          ],
          systems: ['Clinical software', 'Hospital deployments', 'Production support', 'Vendor escalation'],
          tags: ['Support', 'Troubleshooting', 'Implementation', 'Global Coordination'],
        },
      ],
    },
    resume: {
      eyebrow: 'เรซูเม่',
      title: 'โปรไฟล์ที่เน้นระบบที่ส่งมอบได้จริง การประสานงาน stakeholder และ implementation reality',
      description:
        'สำหรับ hiring managers จุดแข็งของผมเหมาะกับบทบาทที่ต้องเชื่อม business intent, clinical workflow, technical architecture และ implementation execution เข้าด้วยกัน',
      downloadEyebrow: 'ดาวน์โหลดเรซูเม่',
      downloadTitle: 'ประสบการณ์โดยละเอียดและข้อมูลติดต่ออยู่ใน CV',
      downloadDescription:
        'เว็บไซต์นี้สรุปภาพเชิงกลยุทธ์แบบรวดเร็ว ส่วนเรซูเม่แนบจะมี role history แบบเต็ม supporting detail และข้อมูลติดต่อโดยตรง',
      downloadCta: 'เปิดไฟล์ PDF',
      highlights: [
        {
          title: 'จุดที่ผมสร้างคุณค่า',
          description:
            'ผมทำงานอยู่ตรงจุดตัดระหว่าง clinical operations, hospital IT infrastructure, software engineering และ vendor delivery',
        },
        {
          title: 'ปัญหาที่ผมมักแก้',
          description:
            'integration challenge ที่ซับซ้อน workflow ที่ไม่เชื่อมกัน ปัญหา device connectivity และช่องว่างระหว่าง business intent กับ technical execution',
        },
        {
          title: 'สไตล์การทำงาน',
          description:
            'แปลง healthcare requirements ให้เป็นแผนทางเทคนิคที่ใช้งานได้จริง จัด alignment ระหว่าง stakeholder และยึดโยงกับหน้างานในโรงพยาบาล',
        },
      ],
      capabilitiesTitle: 'ความสามารถหลัก',
      capabilities: [
        'Hospital Information System integration',
        'Medical device connectivity และ clinical interface design',
        'Healthcare middleware และ interoperability architecture',
        'Anesthesia Information Management Systems implementation',
        'Clinical workflow analysis และ digital process improvement',
        'Project implementation, vendor coordination และ deployment support',
      ],
    },
    contact: {
      eyebrow: 'ติดต่อ',
      title: 'ช่องทางติดต่อโดยตรงสำหรับโอกาสงานด้าน Healthcare IT และ technical leadership',
      description:
        'สามารถติดต่อผมได้โดยตรงสำหรับงานประจำ งาน consulting หรือการพูดคุยด้าน healthcare technology',
      actions: [
        {
          title: 'Nanut Lertmahakiat',
          description: 'nanut.lertmahakiat@protonmail.com',
          href: 'mailto:nanut.lertmahakiat@protonmail.com',
          cta: 'ส่งอีเมล',
        },
        {
          title: 'GitHub',
          description: 'github.com/nanutlmhk',
          href: 'https://github.com/nanutlmhk',
          cta: 'เปิด GitHub',
        },
        {
          title: 'โทรศัพท์',
          description: '+66896904334',
          href: 'tel:+66896904334',
          cta: 'โทร',
        },
      ],
    },
    controls: { english: 'EN', thai: 'TH' },
  },
}
