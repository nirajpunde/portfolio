export const skillCategories = [
  { title: 'Languages', skills: ['Java', 'Python', 'JavaScript', 'TypeScript', 'Shell'] },
  {
    title: 'Frameworks & Libraries',
    skills: ['Spring Boot', 'Angular', 'React', 'Redux', 'Django', 'Angular Material CDK'],
  },
  {
    title: 'Databases',
    skills: ['Oracle DB', 'MongoDB', 'MySQL', 'PostgreSQL', 'SQL Server'],
  },
  {
    title: 'Infrastructure & Tools',
    skills: ['Kafka', 'Docker', 'Kubernetes', 'AWS', 'Git', 'Jenkins', 'Linux', 'Hadoop'],
  },
  {
    title: 'Testing',
    skills: ['JUnit', 'Jasmine', 'Mockito', 'Integration Testing'],
  },
  {
    title: 'Data & AI',
    skills: ['Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'LangChain', 'Prompt Engineering'],
  },
  {
    title: 'RPA & Automation',
    skills: ['UIPath', 'Appian', 'Alteryx'],
  },
  {
    title: 'Web & Architecture',
    skills: ['REST APIs', 'Microservices', 'DevOps', 'HTML5', 'CSS3', 'Bootstrap'],
  },
];

export const projects = [
  {
    badge: 'Professional',
    title: 'Real-Time Trade Dashboard',
    desc: "Mission-critical trading operations platform monitoring 2.7M+ daily trades and $20B in volume for Credit Suisse's settlement team.",
    highlights: [
      'Reduced settlement fines by 40% via real-time failure detection',
      'Recommendation engine prevented breaks valued at $50M+',
      'Securities balance computation with 99% accuracy',
    ],
    tech: ['Kafka', 'Spring Boot', 'Angular 13', 'Oracle DB', 'Kubernetes'],
  },
  {
    badge: 'Professional',
    title: 'Workflow Tracking App',
    desc: 'Critical internal web application that replaced Excel-based workflows for financial operations teams at scale.',
    highlights: [
      'Reduced Excel dependency by 90% across teams',
      'Reusable drag-and-drop UI components saved 2–3 weeks per integration',
      'Full RESTful API integration with Spring Boot backend',
    ],
    tech: ['Angular', 'Angular Material CDK', 'Spring Boot', 'REST API', 'HTML5'],
  },
  {
    badge: 'Academic',
    title: 'End-to-End Loan Automation',
    desc: 'Automated the entire home loan approval process using intelligent orchestration of multiple enterprise platforms.',
    highlights: [
      'Integrated Appian UI with UIPath RPA for seamless handoffs',
      'ML models for intelligent approval flow routing',
      'Alteryx pipelines for data preparation and transformation',
    ],
    tech: ['Appian', 'UIPath', 'Alteryx', 'Machine Learning', 'Python'],
  },
  {
    badge: 'Academic',
    title: 'Flight Delay Predictor',
    desc: 'ML pipeline predicting flight delays and cancellations using meteorological and historical flight data.',
    highlights: [
      '87% accuracy in delay prediction',
      '98% accuracy in cancellation prediction',
      'Multi-stage modeling pipeline with diverse model ensemble',
    ],
    tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'],
  },
  {
    badge: 'Academic',
    title: 'SwiftSync Mobile App',
    desc: 'Contact-sharing mobile application that streamlines networking through QR codes and local event discovery.',
    highlights: [
      'Customizable QR code generation for contact profiles',
      'Local event matching with interest-based algorithms',
      'Real-world networking facilitation features',
    ],
    tech: ['React Native', 'QR Code API', 'Node.js'],
  },
  {
    badge: 'Academic',
    title: 'GST Tax Statement Generator',
    desc: 'Full-stack tax management application for business registration, B2B/B2C transaction tracking, and tax liability computation.',
    highlights: [
      'Normalized relational database schema design',
      'GST computation across multiple transaction types',
      'Business registration and compliance workflows',
    ],
    tech: ['Python', 'Django', 'MySQL', 'HTML5', 'CSS3'],
  },
];

export interface Article {
  tag: string;
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  codeSnippet: string;
  fullContent: string;
}

export const articles: Article[] = [
  {
    tag: 'Kafka',
    date: 'Feb 2025',
    readTime: '8 min read',
    title: 'Optimizing Kafka Consumer Groups for High-Volume Financial Data',
    excerpt:
      'Lessons from processing 2.7M daily trades — partition strategies, offset management, and consumer lag monitoring that reduced our settlement window by 40%.',
    codeSnippet: `// Consumer config that handles 2.7M+ trades/day
@Bean
public ConsumerFactory<String, TradeEvent> consumerFactory() {
  Map<String, Object> props = new HashMap<>();
  props.put(ConsumerConfig.MAX_POLL_RECORDS_CONFIG, 500);
  props.put(ConsumerConfig.FETCH_MIN_BYTES_CONFIG, 1024);
  props.put(ConsumerConfig.ENABLE_AUTO_COMMIT_CONFIG, false);
  return new DefaultKafkaConsumerFactory<>(props);
}`,
    fullContent: `When you're processing 2.7 million trades daily, every millisecond and every byte matters. At Credit Suisse, we iterated through dozens of Kafka configurations before landing on the setup that finally gave us the processing guarantees we needed.

The biggest lesson: auto-commit is dangerous in financial systems. One consumer crash between poll and commit and you're replaying trades — or worse, missing them entirely. We switched to manual acknowledgment with Spring Kafka's AckMode.MANUAL_IMMEDIATE, giving us precise control.

Partition count matters more than most developers realize. We started with 12 partitions and kept hitting consumer lag spikes. Doubling to 24 — matching our consumer thread count exactly — eliminated lag during peak settlement windows (9:30–11am EST).

For fetch tuning, FETCH_MIN_BYTES=1024 batches small trade events together reducing round-trips, while MAX_POLL_RECORDS=500 keeps memory pressure manageable during bursty periods. Pair this with a well-tuned session.timeout.ms (30s in our case) and you get resilience without excessive rebalancing.`,
  },
  {
    tag: 'Angular',
    date: 'Jan 2025',
    readTime: '6 min read',
    title: 'Building Reusable Drag-and-Drop Components with Angular CDK',
    excerpt:
      'How I used Angular Material CDK primitives to build a composable component library that saved 2–3 weeks per feature integration across our trading dashboard.',
    codeSnippet: `// Reusable drag-drop directive
@Directive({ selector: '[tradeDraggable]' })
export class TradeDraggableDirective implements OnInit {
  @Input() tradeData: TradeItem;
  @Output() tradeDrop = new EventEmitter<DropEvent>();

  ngOnInit() {
    this.cdkDrag.dropped.subscribe(e =>
      this.tradeDrop.emit({ item: this.tradeData, pos: e })
    );
  }
}`,
    fullContent: `The Angular CDK DragDropModule gives you the building blocks, but wrapping them into context-aware directives is where the real productivity gains live.

Our trading dashboard had six different list views where trades could be reordered, prioritized, or moved between queues. Initially we duplicated CDK setup code in each component. The refactor to a shared TradeDraggableDirective + DroppableZoneDirective pair paid dividends immediately.

Key patterns that worked: Keep CDK internals encapsulated in directives, surface only business-domain events (tradeDrop, tradeReorder) via outputs, and handle visual feedback (placeholder styling, drag handles) entirely within the directive using CDK's hasStarted() and isDragging() state.

For overlay functionalities — we built a position-aware ContextMenuOverlayService using CDK Overlay. Pass it an origin element and a TemplateRef, and it handles viewport-aware positioning, backdrop click dismissal, and animation automatically. Reused in 11 places across the app without modification.`,
  },
  {
    tag: 'Spring Boot',
    date: 'Dec 2024',
    readTime: '5 min read',
    title: 'Securities Balance Computation: Achieving 99% Accuracy in Real-Time',
    excerpt:
      'The algorithmic approach to reconciling previous-day closing positions with intraday transactions, and the edge cases that almost cost us a major client.',
    codeSnippet: `// Real-time balance engine
@Service
public class SecuritiesBalanceService {

  public BigDecimal computeBalance(String cusip, LocalDate date) {
    BigDecimal closing = closingRepo.findBalance(cusip, date.minusDays(1));
    List<Transaction> intraday = txRepo.findByDate(cusip, date);
    return intraday.stream()
      .reduce(closing, BigDecimal::add, BigDecimal::add);
  }
}`,
    fullContent: `Financial precision isn't just a feature requirement — it's a regulatory obligation. Our securities balance tool had to reconcile T-1 closing positions with live intraday transactions across thousands of CUSIPs with sub-second latency.

The naive approach works until it doesn't: timezone edge cases around settlement cutoffs, failed transactions that partially update, and race conditions between the Kafka consumer and balance queries all bit us in production.

Our solution: an event-sourced balance ledger backed by Oracle DB with optimistic locking, where each transaction is an immutable event. The current balance is always a projection — never stored directly. This made audit trails trivial and replay-on-demand possible.

We moved from double to BigDecimal throughout after a rounding discrepancy of $0.01 on a high-volume CUSIP aggregated to a $47K variance across the daily position report. A small lesson, an expensive near-miss.

The 99% accuracy figure is measured against our end-of-day reconciliation batch. The remaining 1% is typically late settlement instructions that arrive after our snapshot window — a known limitation we surface explicitly in the UI rather than silently hiding.`,
  },
  {
    tag: 'Machine Learning',
    date: 'May 2024',
    readTime: '7 min read',
    title: 'Multi-Stage ML Pipeline for Flight Delay Prediction',
    excerpt:
      'Building a 87% accurate delay predictor using meteorological + flight history data, and the ensemble approach that cracked 98% on cancellation prediction.',
    codeSnippet: `# Multi-stage pipeline with feature engineering
from sklearn.pipeline import Pipeline
from sklearn.ensemble import GradientBoostingClassifier

pipeline = Pipeline([
    ('scaler', StandardScaler()),
    ('selector', SelectKBest(k=18)),
    ('clf', GradientBoostingClassifier(
        n_estimators=200, max_depth=5,
        learning_rate=0.05
    ))
])`,
    fullContent: `Flight delay prediction is a classic imbalanced classification problem — on-time flights vastly outnumber delayed ones. Getting to 87% accuracy required careful attention to class imbalance, feature engineering on meteorological data, and a staged prediction approach.

Stage 1 filters obvious on-time predictions (high confidence, simple features). Stage 2 focuses GBM power on the ambiguous cases — flights with marginal weather, hub congestion, or historically problematic routes. This staged approach outperformed a single model by 4.3% on the validation set.

The most predictive meteorological features: visibility (below 3mi correlates strongly), wind speed variability (not just max speed), and 6-hour precipitation accumulation. Carrier on-time history, departure airport congestion index, and scheduled departure time (early morning vs evening) rounded out the top features.

For cancellation prediction (98% accuracy), the problem is more tractable — cancellations tend to cluster around severe weather, rarely happen on clear days. SMOTE oversampling of the minority class combined with a Random Forest gave us clean precision/recall balance.`,
  },
];

export const experience = [
  {
    period: 'JAN 2022 — AUG 2023',
    role: 'Full Stack Developer (ENO2 / SDE2)',
    company: 'Credit Suisse · Pune, India',
    bullets: [
      'Led technical design and architecture for real-time trade dashboard processing 2.7M+ daily trades using Kafka, managing $20B in daily volume',
      'Designed securities balance computation tool achieving 99% real-time accuracy; drove stakeholder alignment on requirements and rollout',
      'Implemented recommendation engine preventing settlement breaks valued at $50M+',
      'Mentored 2 junior developers on Angular, Spring Boot, and Kafka best practices; conducted code reviews and pair programming sessions',
      'Collaborated with product owners and operations teams to translate business needs into technical specifications',
      'Presented technical solutions and trade-offs to stakeholders; managed expectations on timelines and scope',
    ],
  },
  {
    period: 'AUG 2019 — DEC 2021',
    role: 'Junior Full Stack Developer (ENO1 / SDE1)',
    company: 'Credit Suisse · Pune, India',
    bullets: [
      'Developed Angular 13 front-end for critical workflow tracking app, reducing Excel reliance by 90%',
      'Engineered reusable Angular Material CDK components saving 2–3 weeks per integration',
      'Orchestrated MongoDB cluster PoC with 99% uptime, certificate-based auth, and replication',
      'Built RESTful APIs and microservices using Spring Boot for internal financial operations tools',
    ],
  },
];

export const certifications = [
  {
    name: 'HackerRank Problem Solving (Basic)',
    issuer: 'HackerRank',
    type: 'Certificate',
    link: 'https://www.hackerrank.com/certificates/b1996481c48d',
  },
  {
    name: 'Developing Front-End Apps with React',
    issuer: 'IBM',
    type: 'IBM Certification',
    link: 'https://www.coursera.org/account/accomplishments/verify/ER5MBPR03MQA',
  },
  {
    name: 'HTML5 Application Development Fundamentals',
    issuer: 'Microsoft Technology Associate',
    type: 'MTA Certification',
    link: 'https://www.credly.com/badges/a40742da-fec8-4f9a-b6eb-fcab8b25c754/linked_in',
  },
  
];
