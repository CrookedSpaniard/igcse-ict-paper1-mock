const STORAGE_KEY = "igcse-ict-paper1-mock-attempt-v1";

const questions = [
  {
    code: "1(a)",
    topic: "Topic 1: Software",
    marks: 1,
    type: "mcq",
    prompt: "Which one of these is an example of application software?",
    options: ["BIOS", "Spreadsheet", "Firewall", "Router"],
    answer: "Spreadsheet",
    hint: "Application software helps the user complete a task.",
    model: "Spreadsheet.",
    advice: "For one-mark MCQs, identify the category first: application software, system software, hardware or network component.",
    avoid: "Do not choose BIOS or router just because they are part of a computer system; the question asks for application software."
  },
  {
    code: "1(b)",
    topic: "Topic 4: Cloud-based services",
    marks: 1,
    type: "text",
    prompt: "State what is meant by the term cloud-based application.",
    hint: "Think about where the software is hosted and how the user accesses it.",
    model: "Software hosted online or on remote servers and accessed using the internet.",
    advice: "Use a direct definition. Mention online/remote servers or access through the internet.",
    avoid: "Do not describe weather clouds or simply say 'storage' unless you link it to hosted software."
  },
  {
    code: "1(c)",
    topic: "Topic 2: Internet access",
    marks: 1,
    type: "mcq",
    prompt: "Which one of these is required to view and use the web-based app?",
    context: "CourseCloud is a web-based learning app with files, shared resources and settings.",
    options: ["Barcode reader", "Control software", "Web browser", "Zip utility"],
    answer: "Web browser",
    hint: "A web-based app is requested and displayed through software that reads web pages.",
    model: "Web browser.",
    advice: "Look for the tool that displays and interacts with web content.",
    avoid: "Do not choose an input device or utility software when the app is web-based."
  },
  {
    code: "1(d)",
    topic: "Topic 2: Bandwidth and latency",
    marks: 2,
    type: "text",
    prompt: "Explain why fibre broadband is a better choice than mobile broadband for uploading large course videos.",
    hint: "A linked explanation needs a point plus a reason or consequence.",
    model: "Fibre broadband usually has greater bandwidth and a more stable connection, so large video files upload more quickly and are less likely to fail.",
    advice: "For 2 marks, make a linked point: faster upload or lower latency because of greater bandwidth/stability.",
    avoid: "Do not just write 'it is better' or 'it is faster' without explaining why that matters for large videos."
  },
  {
    code: "1(e)",
    topic: "Topic 2: Network identification",
    marks: 2,
    type: "text",
    prompt: "State two ways that devices can be identified on a local area network.",
    hint: "Think about names and addresses assigned to devices.",
    model: "IP address; MAC address; device name.",
    advice: "Give two short, separate identifications. No explanation is needed for a 'state' question.",
    avoid: "Do not give network types such as LAN or WAN."
  },
  {
    code: "1(f)",
    topic: "Topic 2: Web software",
    marks: 3,
    type: "matching",
    prompt: "Match each type of web software to its use.",
    pairs: ["Search engine", "Browser", "Filter"],
    choices: ["Blocking access to websites", "Reading web pages", "Managing print jobs", "Ranking websites against keywords", "Creating backups"],
    answer: {
      "Search engine": "Ranking websites against keywords",
      Browser: "Reading web pages",
      Filter: "Blocking access to websites"
    },
    hint: "One option is a printer task and one option is a general data-protection task; those are distractors.",
    model: "Search engine -> ranking websites against keywords; Browser -> reading web pages; Filter -> blocking access to websites.",
    advice: "Use one line from each software type to one use only.",
    avoid: "Do not connect one item to multiple uses."
  },
  {
    code: "1(g)(i)",
    topic: "Topic 2: Network components",
    marks: 2,
    type: "text",
    prompt: "Describe the role of a router.",
    hint: "A router works with data packets and network addresses.",
    model: "A router forwards data packets between devices or networks and uses addresses/routing information to choose where to send the data.",
    advice: "Mention moving data between networks/devices and how it decides the route.",
    avoid: "Do not confuse a router with a server that hosts files or websites."
  },
  {
    code: "1(g)(ii)",
    topic: "Topic 2: Network types",
    marks: 1,
    type: "text",
    prompt: "State the type of network that covers one school building.",
    hint: "A school building is a small geographical area.",
    model: "Local area network (LAN).",
    advice: "Use the full name or abbreviation.",
    avoid: "Do not use WAN, which covers a much wider area."
  },
  {
    code: "1(g)(iii)",
    topic: "Topic 2: Wireless communication",
    marks: 1,
    type: "mcq",
    prompt: "Which one of these is normally created using Bluetooth?",
    options: ["Local area network", "Personal area network", "Satellite network", "Wide area network"],
    answer: "Personal area network",
    hint: "Bluetooth is short-range and usually connects personal devices.",
    model: "Personal area network.",
    advice: "Match the range of the wireless method to the network type.",
    avoid: "Do not select LAN or WAN for short-range Bluetooth connections."
  },
  {
    code: "1(g)(iv)",
    topic: "Topic 2: VPN",
    marks: 2,
    type: "text",
    prompt: "Describe how a VPN can help to secure data when using public Wi-Fi.",
    hint: "What does a VPN do to traffic travelling across an untrusted network?",
    model: "A VPN creates an encrypted tunnel for network traffic, so data intercepted on public Wi-Fi cannot be easily read.",
    advice: "Use the words encrypted tunnel or encrypted connection, then link it to intercepted data.",
    avoid: "Do not say a VPN removes all risk; it mainly protects traffic in transit."
  },
  {
    code: "1(g)(v)",
    topic: "Topic 2: ISP",
    marks: 2,
    type: "text",
    prompt: "Describe the role of an Internet Service Provider (ISP).",
    hint: "Think about the organisation that connects a customer to the internet.",
    model: "An ISP provides access to the internet by connecting the customer to its network and services.",
    advice: "Name the service and the connection role.",
    avoid: "Do not describe a web browser or search engine."
  },
  {
    code: "1(g)(vi)",
    topic: "Topic 3: Secure websites",
    marks: 1,
    type: "mcq",
    prompt: "Which one of these is used to secure data sent during an online payment?",
    options: ["GPS", "HTTPS", "OCR", "URL"],
    answer: "HTTPS",
    hint: "Look for the secure web protocol.",
    model: "HTTPS.",
    advice: "Payment pages should use secure HTTP.",
    avoid: "Do not confuse URL, which is an address, with HTTPS, which secures communication."
  },
  {
    code: "1(h)(i)",
    topic: "Topic 3: Copyright",
    marks: 1,
    type: "text",
    prompt: "State what is meant by the term copyright.",
    hint: "It is a legal protection for original work.",
    model: "Legal protection that gives the owner control over copying, publishing or distributing their original work.",
    advice: "Mention legal protection and permission/control.",
    avoid: "Do not write only 'copying is wrong' without the legal ownership idea."
  },
  {
    code: "1(h)(ii)",
    topic: "Topic 2: Data transfer",
    marks: 2,
    type: "text",
    prompt: "Explain why a compressed video file may upload more quickly than an uncompressed video file.",
    hint: "Compression changes file size.",
    model: "Compression reduces the file size, so fewer bytes need to be transmitted and the upload can finish more quickly.",
    advice: "Link reduced file size to less data being transferred.",
    avoid: "Do not say compression improves internet speed; it reduces the amount of data."
  },
  {
    code: "2(a)(i)",
    topic: "Topic 1: Storage units",
    marks: 1,
    type: "mcq",
    prompt: "Which one of these is the number of bytes in a kibibyte?",
    options: ["8", "1000", "1024", "1000000"],
    answer: "1024",
    hint: "The syllabus uses 1 KiB = 1024 bytes.",
    model: "1024.",
    advice: "Watch the difference between decimal kilo and binary kibi.",
    avoid: "Do not choose 1000 for kibibyte."
  },
  {
    code: "2(a)(ii)",
    topic: "Topic 1: Secondary storage",
    marks: 1,
    type: "mcq",
    prompt: "Which one of these storage devices has no moving parts and can be read and written to?",
    options: ["Blu-ray drive", "DVD-R", "Hard disk drive", "Solid state drive"],
    answer: "Solid state drive",
    hint: "Solid state devices use flash memory rather than spinning disks.",
    model: "Solid state drive.",
    advice: "Identify the storage technology, not just the capacity.",
    avoid: "Do not choose HDD because it has moving parts."
  },
  {
    code: "2(a)(iii)",
    topic: "Topic 1: Flash memory",
    marks: 1,
    type: "mcq",
    prompt: "Which one of these statements is true?",
    options: ["Flash memory is volatile", "Flash memory keeps data without power", "RAM stores the boot program permanently", "ROM contents are lost when power is off"],
    answer: "Flash memory keeps data without power",
    hint: "Flash memory is non-volatile.",
    model: "Flash memory keeps data without power.",
    advice: "Volatile means data is lost when power is off; non-volatile means it is retained.",
    avoid: "Do not confuse RAM with ROM or flash memory."
  },
  {
    code: "2(a)(iv)",
    topic: "Topic 1: Optical media",
    marks: 1,
    type: "mcq",
    prompt: "Which one of these is an optical storage medium?",
    options: ["Blu-ray disc", "Magnetic tape", "SD card", "SSD"],
    answer: "Blu-ray disc",
    hint: "Optical media are read with light/lasers.",
    model: "Blu-ray disc.",
    advice: "CD, DVD and Blu-ray are optical media.",
    avoid: "Do not pick SSD or SD card; they are solid-state/flash media."
  },
  {
    code: "2(a)(v)",
    topic: "Topic 1: Defragmentation",
    marks: 2,
    type: "text",
    prompt: "Complete the diagram to show the state of storage after running a defragmentation utility.",
    diagram: ["Y1", "W1", "W2", "X2", "X1", "Y2", "Y3", "Z1", "Z2", "", "", "", "", "", "", ""],
    hint: "Defragmentation puts each file's blocks together and groups free space.",
    model: "Any correct order where each file is grouped internally, for example: W1 W2 X1 X2 Y1 Y2 Y3 Z1 Z2, followed by free space.",
    advice: "Keep the blocks of each file together and keep numbered blocks in the right order.",
    avoid: "Do not leave the blocks scattered or reverse numbered blocks such as X2 before X1."
  },
  {
    code: "2(b)",
    topic: "Topic 1: Embedded systems",
    marks: 1,
    type: "mcq",
    prompt: "Which one of these is an example of an embedded system?",
    options: ["Desktop computer", "Mainframe", "Router table", "Washing machine controller"],
    answer: "Washing machine controller",
    hint: "An embedded system is built into another product to control it.",
    model: "Washing machine controller.",
    advice: "Look for a controller built into a device.",
    avoid: "Do not select a general-purpose computer."
  },
  {
    code: "2(c)(i)",
    topic: "Topic 1: Operating systems",
    marks: 2,
    type: "text",
    prompt: "Describe the purpose of an operating system.",
    hint: "It manages the computer and provides a way for users/apps to work with it.",
    model: "An operating system manages hardware and software resources and provides a user interface so users can run applications.",
    advice: "A strong answer mentions resource management and user/application interaction.",
    avoid: "Do not describe one application such as a spreadsheet."
  },
  {
    code: "2(c)(ii)",
    topic: "Topic 1: Software updates",
    marks: 2,
    type: "text",
    prompt: "State two reasons why software updates are installed.",
    hint: "Think security, errors and improvements.",
    model: "To fix security vulnerabilities; fix bugs; add new features; improve performance or compatibility.",
    advice: "Give two distinct reasons.",
    avoid: "Do not repeat the same idea twice, such as 'make it better' and 'improve it'."
  },
  {
    code: "2(d)",
    topic: "Topic 1: Performance",
    marks: 1,
    type: "mcq",
    prompt: "Which one of these laptop features most improves performance when running several applications at the same time?",
    options: ["Larger RAM capacity", "Larger screen size", "More USB ports", "Removable battery"],
    answer: "Larger RAM capacity",
    hint: "Running several applications needs working memory.",
    model: "Larger RAM capacity.",
    advice: "Performance questions usually depend on CPU, RAM and storage speed.",
    avoid: "Do not choose display or port features for processing performance."
  },
  {
    code: "2(e)(i)",
    topic: "Topic 3: Password security",
    marks: 3,
    type: "text",
    prompt: "State three features of a secure password.",
    hint: "Think length, complexity and unpredictability.",
    model: "At least eight characters; a mix of upper/lowercase letters, numbers and symbols; not a common word or personal information; unique for each account.",
    advice: "List three different features. Short bullet-style answers are fine.",
    avoid: "Do not include only one broad point such as 'hard to guess' three times."
  },
  {
    code: "2(e)(ii)",
    topic: "Topic 2: Firewalls",
    marks: 2,
    type: "text",
    prompt: "Describe how a firewall secures a network.",
    hint: "A firewall checks traffic going in and out.",
    model: "A firewall monitors and filters incoming and outgoing network traffic and blocks unauthorised or suspicious traffic.",
    advice: "Mention filtering/monitoring and blocking unauthorised traffic.",
    avoid: "Do not say it removes viruses from files; that is anti-malware."
  },
  {
    code: "2(e)(iii)",
    topic: "Topic 3: Authentication",
    marks: 2,
    type: "text",
    prompt: "Explain one limitation of using passwords as the only security method.",
    hint: "Passwords can be known by someone else.",
    model: "Passwords can be guessed, stolen or shared, so an unauthorised user could gain access if they know the password.",
    advice: "Give the weakness and the consequence.",
    avoid: "Do not just write 'not secure' without saying why."
  },
  {
    code: "2(f)(i)",
    topic: "Topic 1: RAM",
    marks: 1,
    type: "text",
    prompt: "State one characteristic of RAM.",
    hint: "RAM stores data currently in use.",
    model: "RAM is volatile, temporary, read/write memory used for programs and data currently in use.",
    advice: "One correct characteristic is enough.",
    avoid: "Do not say RAM permanently stores the boot program."
  },
  {
    code: "2(f)(ii)",
    topic: "Topic 1: ROM",
    marks: 1,
    type: "text",
    prompt: "State one use of ROM.",
    hint: "ROM stores instructions that should remain when power is off.",
    model: "ROM stores firmware or the boot program needed to start the computer.",
    advice: "A clear use is better than only saying 'storage'.",
    avoid: "Do not describe RAM's temporary working storage."
  },
  {
    code: "2(g)(i)",
    topic: "Topic 1: Choosing hardware",
    marks: 2,
    type: "text",
    prompt: "Laptop 1 has a SSD and 16 GB RAM. Laptop 2 has a HDD and 4 GB RAM. Explain why Maya should choose Laptop 1 for editing video.",
    hint: "Video editing uses large files and memory-intensive software.",
    model: "The SSD will load and save large video files faster, and 16 GB RAM allows video editing software and large files to stay in memory with less reliance on virtual memory.",
    advice: "Link each feature to video editing: SSD speed and RAM capacity.",
    avoid: "Do not say only 'it is newer' or 'it has more storage' without linking to performance."
  },
  {
    code: "2(g)(ii)",
    topic: "Topic 1: Resource management",
    marks: 2,
    type: "text",
    prompt: "Explain why operating systems use resource management.",
    hint: "Several programs may need the same CPU, memory, printer or files.",
    model: "Resource management allocates processor time, memory and peripherals to tasks so programs can run efficiently without conflicts or crashes.",
    advice: "Name resources and explain why they need managing.",
    avoid: "Do not define an operating system generally without linking to resource sharing."
  },
  {
    code: "2(h)",
    topic: "Topic 1: Processor speed",
    marks: 1,
    type: "text",
    prompt: "State the number of clock cycles performed each second by a 3.2 GHz processor.",
    hint: "1 GHz means one billion cycles per second.",
    model: "3.2 billion clock cycles per second, or 3,200,000,000.",
    advice: "State the number clearly. You do not need a calculation.",
    avoid: "Do not write 3.2 cycles."
  },
  {
    code: "3(a)",
    topic: "Topic 1: Output peripherals",
    marks: 2,
    type: "text",
    prompt: "State two output peripherals Maya could use when presenting a website design to a client.",
    hint: "Output peripherals show or produce information from the computer.",
    model: "Monitor; data projector; printer; speaker; plotter.",
    advice: "Give devices that output information to a user.",
    avoid: "Do not give input devices such as mouse or keyboard."
  },
  {
    code: "3(b)",
    topic: "Topic 3: Impact on organisations",
    marks: 4,
    type: "text",
    prompt: "Describe two positive impacts the Internet has on the way organisations do business.",
    hint: "Two marks per impact: point plus developed effect.",
    model: "The internet gives access to global markets, which can increase customers and sales. It also improves communication and collaboration, reducing delays and costs.",
    advice: "Write two linked descriptions. Each should have an impact and a consequence.",
    avoid: "Do not list four single words; descriptions need development."
  },
  {
    code: "3(c)",
    topic: "Topic 4: Hosted software",
    marks: 2,
    type: "text",
    prompt: "Explain one reason to use hosted application software rather than locally installed software.",
    hint: "Hosted applications are accessed online and maintained by the provider.",
    model: "Hosted software can be accessed from any device or location because the application is hosted online.",
    advice: "Make a clear comparison with locally installed software.",
    avoid: "Do not say it is always free; hosted software may require subscription."
  },
  {
    code: "3(d)",
    topic: "Topic 3: Online risks",
    marks: 2,
    type: "text",
    prompt: "Explain one reason why Maya should not follow a link in a suspicious text message.",
    hint: "Suspicious links can be phishing or malware.",
    model: "The link may lead to a phishing site or malicious download, which could steal login details or install malware.",
    advice: "Name a risk and explain the harm.",
    avoid: "Do not just say 'it is suspicious' without identifying what could happen."
  },
  {
    code: "3(e)",
    topic: "Topic 3: Social impacts",
    marks: 2,
    type: "text",
    prompt: "State two negative social impacts of the Internet.",
    hint: "Think about social interaction, online behaviour and activity levels.",
    model: "Reduced face-to-face social interaction; cyberbullying; reduced physical activity; excessive use.",
    advice: "Give two different social impacts.",
    avoid: "Do not give technical risks such as malware unless the question asks about security."
  },
  {
    code: "3(f)",
    topic: "Topic 3: Online communities",
    marks: 2,
    type: "text",
    prompt: "Maya creates an online community for students. State two features she could add to improve user safety.",
    hint: "Safety features help prevent abuse or protect personal information.",
    model: "Moderation or filtering of posts; report/block buttons; privacy settings; age or identity checks; acceptable use policy.",
    advice: "Choose features that directly improve safety.",
    avoid: "Do not give general community features such as likes unless linked to safety."
  },
  {
    code: "3(g)",
    topic: "Topic 3: Online community features",
    marks: 2,
    type: "text",
    prompt: "State two other features of an online community that Maya could add.",
    hint: "This asks for community features other than safety features.",
    model: "Profiles; chat or messaging; forums/comments/posts; file sharing; likes/ratings; notifications; friend lists/groups.",
    advice: "Use common online community functions.",
    avoid: "Do not repeat safety features from the previous question."
  },
  {
    code: "4(a)",
    topic: "Topic 4: Online services",
    marks: 2,
    type: "text",
    prompt: "State two features Maya should include in an online booking website for study trips.",
    context: "The site includes destination search, trip details, customer reviews and secure checkout.",
    hint: "Think about features that allow the user to find, select and pay for a booking.",
    model: "Search feature; booking calendar/date selection; basket/cart; checkout; secure payment; service catalogue; reviews/ratings; account/login.",
    advice: "Give website features, not hardware.",
    avoid: "Do not give vague answers such as 'nice design' unless you name a specific booking feature."
  },
  {
    code: "4(b)",
    topic: "Topic 4: Cookies and sessions",
    marks: 2,
    type: "text",
    prompt: "Booking websites keep a user's selection even if the page is reloaded. Describe one way this is made possible.",
    hint: "The browser or server can store session data.",
    model: "The website can use cookies or local storage to store the user's selections and reload them when the page is opened again.",
    advice: "Mention where the data is stored and how it is retrieved.",
    avoid: "Do not just say 'the website remembers' without explaining the mechanism."
  },
  {
    code: "4(c)",
    topic: "Topic 4: Transactional data",
    marks: 2,
    type: "text",
    prompt: "Some booking websites use transactional data for targeted marketing. Describe how this is done.",
    hint: "Transactional data includes clicks, bookings, purchases and searches.",
    model: "The website records purchases, searches or clicks and uses this data to show adverts or recommendations related to the user's interests.",
    advice: "Link collected data to personalised adverts or recommendations.",
    avoid: "Do not describe data protection rights unless you connect them to marketing."
  },
  {
    code: "4(d)",
    topic: "Topic 3: AI and employment",
    marks: 2,
    type: "text",
    prompt: "Artificial intelligence is increasingly used in online customer service. Explain one way this could impact employment.",
    hint: "AI can replace some tasks but can also create new tasks.",
    model: "Chatbots can handle routine customer questions, reducing demand for some customer service staff. Alternatively, new roles may be created to train and monitor AI systems.",
    advice: "State whether employment is reduced or changed, then explain why.",
    avoid: "Do not claim all jobs will disappear without a realistic link to a task."
  },
  {
    code: "4(e)",
    topic: "Topic 2: Client-server networks",
    marks: 2,
    type: "text",
    prompt: "Maya's office wants central control of shared files. Explain one advantage of using a client-server network for this compared to a peer-to-peer network.",
    hint: "Client-server networks use central administration.",
    model: "A client-server network allows centralised access rights and administration, so the organisation can control who can read or edit shared files.",
    advice: "Use the scenario: central control of shared files.",
    avoid: "Do not give a peer-to-peer advantage such as low setup cost."
  },
  {
    code: "4(f)",
    topic: "Topic 4: Online goods and services",
    marks: 8,
    type: "text",
    prompt: "Discuss the benefits and drawbacks to individuals of using online goods and services. Consider convenience and accessibility, privacy and security, and changes to lifestyle and behaviour.",
    hint: "A discuss answer needs both sides and a conclusion. Use scenario-linked examples.",
    model: "Online goods and services can be convenient because users can access shopping, booking, banking and entertainment at any time without travel. This may particularly help users with limited mobility or users in remote areas. They can compare prices and access a wider choice. However, online services can create privacy and security risks because websites may track behaviour, collect transactional data or expose users to phishing and fraud. They may also change lifestyle by reducing visits to local shops or face-to-face interaction. A balanced conclusion is that the benefits are strong when users protect accounts and data, but the drawbacks must be managed through secure payments, privacy controls and careful use.",
    advice: "For Level 3, compare both points of view, support points with evidence, link to individuals and finish with a clear conclusion.",
    avoid: "Do not write only positives or only negatives. Do not finish without a judgement."
  },
  {
    code: "5(a)",
    topic: "Topic 3: Digital divide",
    marks: 2,
    type: "text",
    prompt: "State two causes of unequal access to ICT.",
    hint: "Think about money, infrastructure, location and skills.",
    model: "Economic cost; lack of infrastructure/connectivity; geographic location; lack of education or technological literacy; disability/accessibility needs; language or cultural factors; government policy.",
    advice: "Give causes, not impacts.",
    avoid: "Do not answer with consequences such as fewer job opportunities."
  },
  {
    code: "5(b)",
    topic: "Topic 3: Digital divide",
    marks: 2,
    type: "text",
    prompt: "Explain one impact of the digital divide.",
    hint: "What happens to people who cannot access ICT or the internet?",
    model: "The digital divide can reduce access to education, jobs and services because people without ICT cannot use online resources or applications.",
    advice: "Give one impact and explain the consequence.",
    avoid: "Do not just define the digital divide."
  },
  {
    code: "5(c)",
    topic: "Topic 3: Environmental impact",
    marks: 2,
    type: "text",
    prompt: "The manufacture and disposal of digital devices can affect the environment. Describe one environmental impact of disposing of old digital devices.",
    hint: "Old devices can become e-waste.",
    model: "E-waste may contain toxic materials, which can pollute soil or water if devices are not recycled or disposed of correctly.",
    advice: "Name the environmental issue and develop it.",
    avoid: "Do not discuss only energy use during manufacture; this question asks about disposal."
  },
  {
    code: "5(d)",
    topic: "Topic 3: Evaluating information",
    marks: 2,
    type: "text",
    prompt: "None of the search results are fit for purpose. Explain one reason why.",
    context: "Search prompt: best laptop batteries student 2026. Results include a 2015 article, an unverified sponsored offer, and a stationery review page.",
    hint: "Use accuracy, age, relevance, reliability or bias.",
    model: "One result is out of date, so it may not reflect current battery technology or products. Another is unreliable or sponsored, so the claims may be biased. Another is irrelevant because it is about stationery rather than laptop batteries.",
    advice: "Identify one specific weakness and link it to fitness for purpose.",
    avoid: "Do not simply say 'the results are bad' without using an evaluation criterion."
  },
  {
    code: "5(e)",
    topic: "Topic 3: Search techniques",
    marks: 2,
    type: "text",
    prompt: "Describe one way of improving search results.",
    hint: "Search engines can be refined with specific terms, operators and filters.",
    model: "Use more specific keywords or search operators to narrow results to relevant laptop battery information, or use date filters to show recent results.",
    advice: "Describe the technique and the effect on results.",
    avoid: "Do not only write 'search again' without saying how."
  },
  {
    code: "5(f)",
    topic: "Topic 3: Health effects",
    marks: 8,
    type: "text",
    prompt: "Discuss the positive and negative health effects of using ICT. Consider access to support and information, physical effects and mental effects.",
    hint: "Cover positive and negative effects, then reach a balanced conclusion.",
    model: "ICT can have positive health effects because users can access reliable health information, online appointments, support communities and health-tracking apps or wearable devices. These can help users monitor activity and seek help earlier. However, long periods of ICT use can cause eye strain, headaches, poor posture, repetitive strain injury and disrupted sleep. It can also reduce physical activity. Mental health may be affected positively through support and communication, but negatively through stress, comparison, cyberbullying or isolation. A balanced conclusion is that ICT can support health when used responsibly, but users need breaks, ergonomic setup, screen-time limits and offline activity.",
    advice: "For high marks, compare positives and negatives, include physical and mental effects, and give a conclusion about balanced use.",
    avoid: "Do not list health problems only. The command word is 'discuss', so include both sides."
  }
];

let state = loadState();
state.answers ||= {};
state.hints ||= {};
state.checked ||= {};
let current = state.current || 0;
let secondsLeft = state.secondsLeft ?? 90 * 60;
let timerHandle = null;

const els = {
  nav: document.getElementById("questionNav"),
  panel: document.getElementById("questionPanel"),
  topic: document.getElementById("topicLabel"),
  title: document.getElementById("questionTitle"),
  progressText: document.getElementById("progressText"),
  marksText: document.getElementById("marksText"),
  progressBar: document.getElementById("progressBar"),
  prev: null,
  next: null,
  hint: null,
  check: null,
  finish: document.getElementById("finishBtn"),
  reset: document.getElementById("resetBtn"),
  timer: document.getElementById("timer"),
  timerToggle: document.getElementById("timerToggle"),
  reviewModal: document.getElementById("reviewModal"),
  reviewContent: document.getElementById("reviewContent"),
  reviewStats: document.getElementById("reviewStats"),
  closeReview: document.getElementById("closeReview"),
  backToExam: document.getElementById("backToExam"),
  downloadAttempt: document.getElementById("downloadAttempt")
};

function loadState() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || { answers: {}, hints: {} };
  } catch {
    return { answers: {}, hints: {} };
  }
}

function saveState() {
  state.checked ||= {};
  state.current = current;
  state.secondsLeft = secondsLeft;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function isAnswered(q) {
  const value = state.answers[q.code];
  if (q.type === "matching") return value && Object.values(value).some(Boolean);
  return typeof value === "string" && value.trim().length > 0;
}

function answeredMarks() {
  return questions.filter(isAnswered).reduce((sum, q) => sum + q.marks, 0);
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function renderNav() {
  els.nav.innerHTML = questions.map((q, index) => `
    <button class="nav-row ${index === current ? "active" : ""} ${isAnswered(q) ? "answered" : ""}" type="button" data-index="${index}">
      <span class="nav-code">${q.code}</span>
      <span class="nav-topic">${q.topic}</span>
      <span class="nav-mark">${q.marks}m</span>
    </button>
  `).join("");
}

function renderProgress() {
  const answered = questions.filter(isAnswered).length;
  const pct = Math.round((answered / questions.length) * 100);
  els.progressText.textContent = `${answered} of ${questions.length} answered`;
  els.marksText.textContent = `${answeredMarks()} / 100 marks`;
  els.progressBar.style.width = `${pct}%`;
}

function renderDiagram(q) {
  if (!q.diagram) return "";
  return `<div class="mini-diagram" aria-label="Block diagram">
    <strong>Estado inicial</strong>
    <div class="blocks">${q.diagram.map(b => `<span class="block ${b ? "" : "blank-block"}">${escapeHtml(b || ".")}</span>`).join("")}</div>
  </div>`;
}

function renderInput(q) {
  const value = state.answers[q.code];
  if (q.type === "mcq") {
    return `<div class="options">${q.options.map(option => `
      <label class="option">
        <input type="radio" name="answer" value="${escapeHtml(option)}" ${value === option ? "checked" : ""}>
        <span>${escapeHtml(option)}</span>
      </label>
    `).join("")}</div>`;
  }

  if (q.type === "matching") {
    const saved = value || {};
    return `<div class="match-grid">${q.pairs.map(pair => `
      <label class="match-row">
        <strong>${escapeHtml(pair)}</strong>
        <select data-pair="${escapeHtml(pair)}">
          <option value="">Select an option</option>
          ${q.choices.map(choice => `<option value="${escapeHtml(choice)}" ${saved[pair] === choice ? "selected" : ""}>${escapeHtml(choice)}</option>`).join("")}
        </select>
      </label>
    `).join("")}</div>`;
  }

  return `<textarea id="writtenAnswer" placeholder="Write your answer here...">${escapeHtml(value || "")}</textarea>
    <p class="answer-note">Your answer is saved automatically in this browser.</p>`;
}

function normalizeText(value) {
  return String(value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function includesAny(text, alternatives) {
  const normalized = normalizeText(text);
  return alternatives.some(term => normalized.includes(normalizeText(term)));
}

const rubricSignals = {
  "1(b)": [["online", "internet"], ["server", "hosted", "remote"], ["application", "software"]],
  "1(d)": [["faster", "quick", "speed"], ["bandwidth", "stable", "latency"], ["large", "video", "upload"]],
  "1(e)": [["ip"], ["mac"], ["device name", "hostname"]],
  "1(g)(i)": [["forward", "send", "route"], ["packet", "data"], ["network", "internet", "device"], ["address", "routing table"]],
  "1(g)(ii)": [["lan", "local area network"]],
  "1(g)(iv)": [["encrypt", "encrypted"], ["tunnel", "connection", "vpn"], ["public wifi", "intercept", "read"]],
  "1(g)(v)": [["internet"], ["access", "connect"], ["provider", "service", "network"]],
  "1(h)(i)": [["legal", "law"], ["owner", "creator"], ["copy", "publish", "distribute", "permission"]],
  "1(h)(ii)": [["compress", "compressed"], ["file size", "smaller", "fewer"], ["upload", "transmit", "transfer"]],
  "2(a)(v)": [["w1 w2", "w1"], ["x1 x2", "x1"], ["y1 y2 y3", "y1"], ["z1 z2", "z1"], ["free", "blank", "space"]],
  "2(c)(i)": [["manage", "control"], ["hardware", "resource", "memory", "processor"], ["software", "application"], ["user interface", "interface"]],
  "2(c)(ii)": [["security", "vulnerability", "patch"], ["bug", "error", "fix"], ["feature", "performance", "compatibility", "driver"]],
  "2(e)(i)": [["long", "eight", "8"], ["uppercase", "lowercase", "capital"], ["number", "digit"], ["symbol", "special"], ["random", "not personal", "not common", "unique"]],
  "2(e)(ii)": [["monitor", "filter", "check"], ["traffic", "incoming", "outgoing"], ["block", "unauthorised", "suspicious"]],
  "2(e)(iii)": [["guess", "stolen", "steal", "shared", "weak"], ["unauthorised", "access", "hacker"]],
  "2(f)(i)": [["volatile", "temporary", "read write", "currently in use"]],
  "2(f)(ii)": [["boot", "firmware", "start", "bios"], ["permanent", "non volatile"]],
  "2(g)(i)": [["ssd", "solid state"], ["faster", "load", "save"], ["ram", "memory"], ["video", "large file", "editing"]],
  "2(g)(ii)": [["allocate", "manage", "control"], ["processor", "memory", "peripheral", "resource"], ["efficient", "conflict", "crash"]],
  "2(h)": [["3.2 billion", "3200000000", "3 200 000 000", "3.2 x 10", "3.2x10"]],
  "3(a)": [["monitor", "projector", "printer", "speaker", "plotter"]],
  "3(b)": [["global", "market", "customer", "sales"], ["communication", "collaboration"], ["cost", "delay", "efficient"], ["workforce", "remote", "competition"]],
  "3(c)": [["access", "device", "location", "anywhere"], ["hosted", "online", "provider"], ["updates", "backup", "maintenance"]],
  "3(d)": [["phishing", "malicious", "malware"], ["steal", "login", "data", "install"]],
  "3(e)": [["reduced social", "isolation", "face to face"], ["cyberbullying", "trolling"], ["physical activity", "addiction", "excessive"]],
  "3(f)": [["moderation", "filter"], ["report", "block"], ["privacy"], ["age", "identity", "acceptable use", "login"]],
  "3(g)": [["profile", "chat", "message", "forum", "comment", "post", "share", "like", "rating", "notification", "friend", "group", "leaderboard"]],
  "4(a)": [["search", "calendar", "date", "basket", "cart", "checkout", "payment", "catalogue", "review", "login"]],
  "4(b)": [["cookie", "local storage", "session"], ["store", "save"], ["selection", "retrieve", "reload"]],
  "4(c)": [["record", "collect", "track"], ["purchase", "search", "click", "booking"], ["advert", "recommend", "target", "personal"]],
  "4(d)": [["chatbot", "ai", "automate"], ["routine", "question", "customer"], ["reduce", "job", "staff", "new role", "skill"]],
  "4(e)": [["central", "server"], ["access rights", "permission", "admin"], ["read", "edit", "backup", "shared files"]],
  "5(a)": [["cost", "poverty", "economic"], ["infrastructure", "connectivity", "internet"], ["geographic", "location", "rural"], ["education", "literacy", "skills"], ["disability", "language", "government"]],
  "5(b)": [["education", "job", "service", "opportunity"], ["without", "cannot", "lack"], ["inequality", "disadvantage"]],
  "5(c)": [["e waste", "waste", "landfill"], ["toxic", "pollute", "soil", "water"], ["recycle", "dispose"]],
  "5(d)": [["out of date", "old", "2015"], ["unreliable", "sponsored", "biased"], ["irrelevant", "stationery"], ["age", "relevance", "reliability", "bias"]],
  "5(e)": [["specific", "keyword", "operator", "quotation", "minus"], ["filter", "date", "recent"], ["reliable", "site"], ["narrow", "refine", "relevant"]]
};

function scoreTextQuestion(q, answer) {
  const text = normalizeText(answer);
  if (!text) {
    return {
      score: 0,
      max: q.marks,
      verdict: "No answer",
      why: "There is not enough content to compare with the mark scheme.",
      matched: [],
      missing: ["Include the key mark scheme points before requesting feedback."]
    };
  }

  if (q.marks === 8) return scoreExtendedQuestion(q, text);

  const signals = rubricSignals[q.code] || q.model.split(/[.;]/).filter(Boolean).map(part => [part.trim()]);
  const matched = [];
  const missing = [];
  signals.forEach(group => {
    const label = group[0];
    if (includesAny(text, group)) matched.push(label);
    else missing.push(label);
  });
  const ratio = signals.length ? matched.length / signals.length : 0;
  let score = Math.round(ratio * q.marks);

  if (q.marks >= 2 && text.split(" ").length < 5 && ratio < 1) {
    score = Math.min(score, 1);
  }

  if (ratio === 1) score = q.marks;

  const verdict = score === q.marks ? "Probably complete" : score > 0 ? "Partially correct" : "Probably insufficient";
  const why = score === q.marks
    ? "The answer contains the main ideas expected by the mark scheme."
    : score > 0
      ? "The answer contains some valid ideas, but key points are missing or the explanation is not fully developed."
      : "Not enough mark scheme ideas were detected.";

  return { score, max: q.marks, verdict, why, matched, missing };
}

function scoreExtendedQuestion(q, text) {
  const isQ4 = q.code === "4(f)";
  const positives = isQ4
    ? ["convenience", "24 7", "access", "mobility", "choice", "compare", "price"]
    : ["health information", "appointment", "support", "tracking", "wearable", "monitor"];
  const negatives = isQ4
    ? ["privacy", "security", "fraud", "phishing", "tracking", "less social", "delivery", "inspect"]
    : ["eye strain", "headache", "posture", "rsi", "sleep", "physical activity", "mental", "cyberbullying", "isolation"];
  const conclusion = ["conclusion", "overall", "therefore", "balanced", "however", "on balance"];

  const posCount = positives.filter(term => includesAny(text, [term])).length;
  const negCount = negatives.filter(term => includesAny(text, [term])).length;
  const hasConclusion = conclusion.some(term => includesAny(text, [term]));
  const wordCount = text.split(" ").filter(Boolean).length;

  let score = 0;
  if (posCount > 0 || negCount > 0) score = 2;
  if (posCount > 0 && negCount > 0) score = 4;
  if (posCount >= 2 && negCount >= 2 && wordCount >= 45) score = 5;
  if (posCount >= 3 && negCount >= 3 && hasConclusion && wordCount >= 70) score = 7;
  if (posCount >= 4 && negCount >= 4 && hasConclusion && wordCount >= 95) score = 8;

  return {
    score,
    max: 8,
    verdict: score >= 6 ? "Nivel alto probable" : score >= 4 ? "Nivel medio probable" : score > 0 ? "Nivel bajo probable" : "Probablemente insuficiente",
    why: "This estimate uses the level descriptors: balance between positive and negative points, development with examples, and a conclusion.",
    matched: [
      `${posCount} ideas positivas detectadas`,
      `${negCount} ideas negativas detectadas`,
      hasConclusion ? "conclusion/balance detected" : "no clear conclusion"
    ],
    missing: [
      posCount < 3 ? "Add more specific benefits." : "",
      negCount < 3 ? "Add more specific drawbacks." : "",
      !hasConclusion ? "Add a conclusion that compares both sides." : ""
    ].filter(Boolean)
  };
}

function scoreQuestion(q) {
  if (q.type === "mcq") {
    const selected = state.answers[q.code];
    if (!selected) return { score: 0, max: q.marks, verdict: "No answer", why: "Select an option before requesting feedback.", matched: [], missing: [q.answer] };
    const correct = selected === q.answer;
    return {
      score: correct ? q.marks : 0,
      max: q.marks,
      verdict: correct ? "Correct" : "Incorrect",
      why: correct ? "This matches the mark scheme." : `The mark scheme accepts: ${q.answer}.`,
      matched: correct ? [q.answer] : [],
      missing: correct ? [] : [q.answer]
    };
  }

  if (q.type === "matching") {
    const score = matchingScore(q);
    const missing = q.pairs.filter(pair => (state.answers[q.code] || {})[pair] !== q.answer[pair]).map(pair => `${pair} -> ${q.answer[pair]}`);
    return {
      score,
      max: q.marks,
      verdict: score === q.marks ? "Correct" : score > 0 ? "Partially correct" : "Incorrect",
      why: `${score} out of ${q.marks} matches are consistent with the mark scheme.`,
      matched: q.pairs.filter(pair => (state.answers[q.code] || {})[pair] === q.answer[pair]),
      missing
    };
  }

  return scoreTextQuestion(q, state.answers[q.code] || "");
}

function renderCorrection(q, result) {
  return `
    <div class="feedback-box ${result.score === result.max ? "good" : result.score > 0 ? "partial" : "weak"}">
      <div class="feedback-head">
        <strong>${escapeHtml(result.verdict)}</strong>
        <span>${result.score}/${result.max} marks estimados</span>
      </div>
      <p>${escapeHtml(result.why)}</p>
      <div class="feedback-columns">
        <div>
          <strong>Detected</strong>
          <p>${escapeHtml(result.matched.length ? result.matched.join("; ") : "Nothing clear yet.")}</p>
        </div>
        <div>
          <strong>To improve</strong>
          <p>${escapeHtml(result.missing.length ? result.missing.join("; ") : "No important point is missing according to this estimate.")}</p>
        </div>
      </div>
      <details>
        <summary>Show model answer and advice</summary>
        <p><strong>Model:</strong> ${escapeHtml(q.model)}</p>
        <p><strong>Consejo:</strong> ${escapeHtml(q.advice)}</p>
        <p><strong>Evita:</strong> ${escapeHtml(q.avoid)}</p>
      </details>
    </div>
  `;
}

function renderQuestionControls(q) {
  const hintText = state.hints[q.code] ? "Hide hint" : "Show hint";
  const nextText = current === questions.length - 1 ? "Finish" : "Next";
  return `
    <div class="nav-controls inline-controls">
      <button id="prevBtn" class="secondary" type="button" ${current === 0 ? "disabled" : ""}>Previous</button>
      <button id="hintBtn" class="secondary" type="button">${hintText}</button>
      <button id="checkBtn" class="secondary" type="button">Feedback</button>
      <button id="nextBtn" class="primary" type="button">${nextText}</button>
    </div>
  `;
}

function renderQuestion() {
  const q = questions[current];
  els.topic.textContent = q.topic;
  els.title.textContent = `Question ${q.code}`;

  els.panel.innerHTML = `
    <article class="question-card">
      <div class="question-meta">
        <span class="topic-label">${escapeHtml(q.topic)}</span>
        <span class="mark-pill">${q.marks} mark${q.marks === 1 ? "" : "s"}</span>
      </div>
      <p class="prompt">${escapeHtml(q.prompt)}</p>
      ${q.context ? `<div class="context-box">${escapeHtml(q.context)}</div>` : ""}
      ${renderDiagram(q)}
      <div class="hint-box" ${state.hints[q.code] ? "" : "hidden"}>
        <strong>Hint</strong>
        <p>${escapeHtml(q.hint)}</p>
      </div>
      ${renderInput(q)}
      ${state.checked[q.code] ? renderCorrection(q, scoreQuestion(q)) : ""}
      ${renderQuestionControls(q)}
    </article>
  `;

  bindAnswerInput(q);
  bindQuestionControls(q);
  renderNav();
  renderProgress();
  saveState();
}

function bindQuestionControls(q) {
  els.prev = document.getElementById("prevBtn");
  els.next = document.getElementById("nextBtn");
  els.hint = document.getElementById("hintBtn");
  els.check = document.getElementById("checkBtn");

  els.prev.addEventListener("click", () => goTo(current - 1));
  els.next.addEventListener("click", () => {
    if (current === questions.length - 1) renderReview();
    else goTo(current + 1);
  });
  els.hint.addEventListener("click", () => {
    state.hints[q.code] = !state.hints[q.code];
    renderQuestion();
  });
  els.check.addEventListener("click", () => {
    state.checked[q.code] = true;
    renderQuestion();
  });
}

function bindAnswerInput(q) {
  if (q.type === "mcq") {
    document.querySelectorAll('input[name="answer"]').forEach(input => {
      input.addEventListener("change", event => {
        state.answers[q.code] = event.target.value;
        saveState();
        renderNav();
        renderProgress();
      });
    });
    return;
  }

  if (q.type === "matching") {
    document.querySelectorAll("select[data-pair]").forEach(select => {
      select.addEventListener("change", () => {
        const answer = {};
        document.querySelectorAll("select[data-pair]").forEach(item => {
          answer[item.dataset.pair] = item.value;
        });
        state.answers[q.code] = answer;
        saveState();
        renderNav();
        renderProgress();
      });
    });
    return;
  }

  const textarea = document.getElementById("writtenAnswer");
  textarea.addEventListener("input", event => {
    state.answers[q.code] = event.target.value;
    saveState();
    renderNav();
    renderProgress();
  });
}

function goTo(index) {
  current = Math.max(0, Math.min(questions.length - 1, index));
  renderQuestion();
}

function isMcqCorrect(q) {
  return q.type === "mcq" && state.answers[q.code] === q.answer;
}

function matchingScore(q) {
  const answer = state.answers[q.code] || {};
  return q.pairs.filter(pair => answer[pair] === q.answer[pair]).length;
}

function formatStudentAnswer(q) {
  const value = state.answers[q.code];
  if (!value) return "No answer.";
  if (q.type === "matching") {
    return q.pairs.map(pair => `${pair} -> ${value[pair] || "sin respuesta"}`).join("; ");
  }
  return value;
}

function renderReview() {
  const answered = questions.filter(isAnswered).length;
  const mcqs = questions.filter(q => q.type === "mcq");
  const correctMcq = mcqs.filter(isMcqCorrect).length;
  const matching = questions.find(q => q.type === "matching");
  const matchScore = matchingScore(matching);
  const results = questions.map(q => ({ q, result: scoreQuestion(q) }));
  const estimatedTotal = results.reduce((sum, item) => sum + item.result.score, 0);
  const percentage = Math.round((estimatedTotal / 100) * 100);

  els.reviewStats.innerHTML = `
    <div class="stat"><span>Answered</span><strong>${answered}/${questions.length}</strong></div>
    <div class="stat"><span>Indicative estimate</span><strong>${estimatedTotal}/100</strong></div>
    <div class="stat"><span>Estimated percentage</span><strong>${percentage}%</strong></div>
    <div class="stat wide"><span>Important note</span><strong>This may vary</strong><p>Written-answer feedback uses key-idea matching against the mark scheme. A teacher may adjust the mark for clarity, context and development.</p></div>
    <div class="stat wide"><span>Objective auto-check</span><strong>${correctMcq}/${mcqs.length} MCQ · ${matchScore}/3 matching</strong></div>
  `;

  els.reviewContent.innerHTML = results.map(({ q, result }) => {
    const cls = result.score === result.max ? "correct" : result.score > 0 ? "partial" : "incorrect";
    return `
      <section class="review-item ${cls}">
        <div class="question-meta">
          <strong>${escapeHtml(q.code)} · ${escapeHtml(q.topic)}</strong>
          <span class="mark-pill">${result.score}/${q.marks} estimados</span>
        </div>
        <p>${escapeHtml(q.prompt)}</p>
        <div class="feedback-box ${result.score === result.max ? "good" : result.score > 0 ? "partial" : "weak"}">
          <div class="feedback-head">
            <strong>${escapeHtml(result.verdict)}</strong>
            <span>${result.score}/${result.max} marks</span>
          </div>
          <p>${escapeHtml(result.why)}</p>
        </div>
        <div class="review-grid">
          <div class="student-answer">
            <strong>Your answer</strong>
            <p>${escapeHtml(formatStudentAnswer(q))}</p>
          </div>
          <div class="model-answer">
            <strong>Model answer</strong>
            <p>${escapeHtml(q.model)}</p>
          </div>
        </div>
        <div class="review-grid">
          <div class="advice">
            <strong>How to answer</strong>
            <p>${escapeHtml(q.advice)}</p>
          </div>
          <div class="avoid">
            <strong>What to avoid</strong>
            <p>${escapeHtml(q.avoid)}</p>
          </div>
        </div>
      </section>
    `;
  }).join("");

  els.reviewModal.hidden = false;
}

function downloadAttempt() {
  const results = questions.map(q => ({ q, result: scoreQuestion(q) }));
  const estimatedTotal = results.reduce((sum, item) => sum + item.result.score, 0);
  const lines = [
    "IGCSE ICT Paper 1 Mock - student attempt",
    `Answered: ${questions.filter(isAnswered).length}/${questions.length}`,
    `Indicative estimate: ${estimatedTotal}/100`,
    "Note: the written-answer score is an estimate based on key mark scheme ideas and may vary.",
    ""
  ];

  results.forEach(({ q, result }) => {
    lines.push(`${q.code} (${q.marks} marks)`);
    lines.push(q.prompt);
    lines.push(`Answer: ${formatStudentAnswer(q)}`);
    lines.push(`Estimate: ${result.score}/${result.max} - ${result.verdict}`);
    lines.push(`Why: ${result.why}`);
    lines.push(`Model: ${q.model}`);
    lines.push("");
  });

  const blob = new Blob([lines.join("\n")], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "igcse-ict-paper1-attempt.txt";
  link.click();
  URL.revokeObjectURL(url);
}

function formatTimer() {
  const mins = Math.floor(secondsLeft / 60);
  const secs = secondsLeft % 60;
  els.timer.textContent = `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

function toggleTimer() {
  if (timerHandle) {
    clearInterval(timerHandle);
    timerHandle = null;
    els.timerToggle.textContent = "▶";
    return;
  }
  els.timerToggle.textContent = "Ⅱ";
  timerHandle = setInterval(() => {
    secondsLeft = Math.max(0, secondsLeft - 1);
    formatTimer();
    saveState();
    if (secondsLeft === 0) toggleTimer();
  }, 1000);
}

els.nav.addEventListener("click", event => {
  const row = event.target.closest("[data-index]");
  if (row) goTo(Number(row.dataset.index));
});

els.finish.addEventListener("click", renderReview);
els.reset.addEventListener("click", () => {
  const ok = confirm("This will delete the answers saved in this browser. Do you want to reset the attempt?");
  if (!ok) return;
  state = { answers: {}, hints: {}, checked: {}, current: 0, secondsLeft: 90 * 60 };
  current = 0;
  secondsLeft = 90 * 60;
  saveState();
  formatTimer();
  renderQuestion();
});
els.timerToggle.addEventListener("click", toggleTimer);
els.closeReview.addEventListener("click", () => { els.reviewModal.hidden = true; });
els.backToExam.addEventListener("click", () => { els.reviewModal.hidden = true; });
els.downloadAttempt.addEventListener("click", downloadAttempt);

formatTimer();
renderQuestion();
