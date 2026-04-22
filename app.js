const { createApp } = Vue;

createApp({
    data() {
        return {
            isScrolled: false,
            expandedProject: null,
            mobileMenuOpen: false,
            skills: [
                {
                    title: 'Frontend',
                    tech: 'HTML, CSS, Bootstrap, Vue.js',
                    icon: 'fas fa-palette',
                    color: '#3b82f6'
                },
                {
                    title: 'Backend',
                    tech: 'ASP.NET MVC, Django REST Framework',
                    icon: 'fas fa-server',
                    color: '#8b5cf6'
                },
                {
                    title: 'AI/Automation',
                    tech: 'CrewAI, Playwright',
                    icon: 'fas fa-robot',
                    color: '#ec4899'
                },
                {
                    title: 'Database',
                    tech: 'SQL Server',
                    icon: 'fas fa-database',
                    color: '#10b981'
                },
                {
                    title: 'Version Control',
                    tech: 'Git, GitHub, Branching, Pull Requests, GitHub Actions',
                    icon: 'fab fa-git-alt',
                    color: '#f59e0b'
                },
                {
                    title: 'DevOps & Containers',
                    tech: 'Docker, Dockerfile, Docker Compose, Containerization',
                    icon: 'fab fa-docker',
                    color: '#0ea5e9'
                },
                {
                    title: 'Languages',
                    tech: 'C#, Python',
                    icon: 'fas fa-code',
                    color: '#06b6d4'
                }
            ],
            experiences: [
                {
                    title: 'Full Stack Developer',
                    company: 'TietoEvry',
                    date: '',
                    points: [
                        'Designed RESTful APIs using Django REST Framework for authentication and AI configuration',
                        'Full-stack development with Django, Vue.js, and SQL Server',
                        'Integrated AI-driven features through REST APIs',
                        'Built secure APIs with ASP.NET MVC and JWT authentication',
                        'Optimized SQL Server queries and system performance'
                    ]
                },
                {
                    title: 'RPA Developer',
                    company: 'TietoEvry',
                    date: '',
                    points: [
                        'Developed ERA Payment Posting Bot using Power Automate',
                        'Automated PDF data extraction and payment processing',
                        'Reduced manual processing time significantly',
                        'Maintained Excel logs and centralized data tracking'
                    ]
                },
                {
                    title: '.Net Developer',
                    company: 'TietoEvry',
                    date: '',
                    points: [
                        'Built employee management system for HR operations',
                        'Collaborated with stakeholders for requirement analysis',
                        'Performed code reviews and quality assurance',
                        'Enhanced functionality based on change requests'
                    ]
                }
            ],
            projects: [
                {
                    title: 'RIA Project - LLM Configuration Management Tool',
                    company: 'TietoEvry',
                    summary: 'Multi-tenant platform for managing AI model configurations with dynamic OpenAI and Azure GPT integration.',
                    details: [
                        'Built secure REST APIs for multi-tenant LLM configuration',
                        'Implemented prompt template management with runtime parameter controls',
                        'Developed backend using Django REST Framework with comprehensive validations',
                        'Created dynamic Vue.js forms for real-time AI model configuration',
                        'Optimized SQL Server queries for efficient data storage and retrieval',
                        'Collaborated across teams to ensure end-to-end functionality'
                    ],
                    tech: ['Django', 'Vue.js', 'REST API', 'SQL Server', 'OpenAI', 'Azure']
                },
                {
                    title: 'Secure API Management System',
                    company: 'TietoEvry',
                    summary: 'Robust web application with secure authentication and data management capabilities.',
                    details: [
                        'Implemented JWT authentication for secure API endpoints',
                        'Created user management APIs with token-based authentication',
                        'Developed data upload APIs supporting Excel and JSON formats',
                        'Built comprehensive authorization system for resource protection',
                        'Designed efficient data processing pipelines',
                        'Ensured seamless integration with various data sources'
                    ],
                    tech: ['ASP.NET MVC', 'JWT', 'REST API', 'SQL Server', 'Entity Framework']
                },
                {
                    title: 'ERA Payment Posting Bot',
                    company: 'TietoEvry',
                    summary: 'RPA solution automating payment processing and PDF data extraction workflows.',
                    details: [
                        'Automated portal login and payment PDF downloads',
                        'Implemented PDF data extraction using RPA techniques',
                        'Built client record matching and auto-posting system',
                        'Created centralized Excel logging for data tracking',
                        'Reduced manual processing time by 70%',
                        'Improved accuracy and eliminated human errors'
                    ],
                    tech: ['Power Automate', 'Excel', 'PDF Automation', 'RPA']
                }
            ]
        };
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            this.isScrolled = window.scrollY > 50;
        },
        toggleProject(index) {
            this.expandedProject = this.expandedProject === index ? null : index;
        },
        scrollTo(section) {
            const element = document.getElementById(section);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        },
        toggleMobileMenu() {
            this.mobileMenuOpen = !this.mobileMenuOpen;
        }
    }
}).mount('#app');
