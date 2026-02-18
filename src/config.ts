export const config = {
developer: {
        name: "Yug",
        fullName: "Yug Johri",
        title: "AI Engineer | SDE",
        description: "Aspiring AI/LLM Engineer building intelligent systems and software. Passionate about multi-agent systems, LLMs, and practical ML applications."
    },    
    social: {
        github: "Yugjohri",
        email: "yugjohri8@gmail.com",
        location: "Delhi NCR, India"
    },
    about: {
        title: "About Me",
        description: "I'm Yug Johri, a self-taught aspiring AI & Software Developer. I work on multi-agent systems, LLM fine-tuning, RAG applications, and building models from scratch. I'm always exploring new ideas and looking for impactful roles in AI and software development."
    },
    experiences: [
        {
            position: "Learning Something New",
            company: "Self-Development",
            period: "now",
            location: "Delhi NCR, India",
            description: "Continuously exploring emerging technologies, researching advanced AI systems, and pushing the boundaries of what's possible in tech.",
            responsibilities: [
                "Researching cutting-edge AI and ML technologies",
                "Experimenting with new frameworks and tools",
                "Contributing to open-source projects",
                "Building innovative personal projects"
            ],
            technologies: ["Research", "Innovation", "Open Source", "New Tech"]
        },
        {
            position: "AI & Software Developer",
            company: "Freelance & Projects",
            period: "2025",
            location: "Delhi NCR, India",
            description: "Developing intelligent AI systems and full-stack applications. Building autonomous multi-agent systems, RAG pipelines, and modern web applications with a focus on cutting-edge AI technologies. Strong foundation in data structures and algorithms using Java.",
            responsibilities: [
                "Building autonomous multi-agent AI systems for real-time product analysis and bargain spotting",
                "Developing GPT-style transformers from scratch using PyTorch with custom tokenizers",
                "Creating full-stack web applications with modern frameworks and APIs",
                "Implementing RAG systems and working with Large Language Models",
                "Designing and deploying scalable AI-powered solutions"
            ],
            technologies: ["Python", "PyTorch", "RAG", "OpenAI API", "React", "Node.js", "TypeScript", "LLMs", "Qlora"]
        },
        {
            position: "Student Leader & Award Winner",
            company: "Bennett University",
            period: "always",
            location: "Greater Noida, India",
            description: "Multi-faceted involvement in university tech communities and leadership roles. Won 2ND PLACE at SEAS Ideathon 3.0 with innovative robotics project. Demonstrated technical expertise and strong team management across multiple student organizations.",
            responsibilities: [
                "🏆 Won 2nd Place at SEAS Ideathon 3.0 - Developed WALL-E: a 6-DOF robotic arm controllable via custom app and hand gesture recognition system",
                "Technical Head of ACM Student Chapter - Revamped entire website and led technical initiatives for the community",
                "Head of Development at Solace Studios - Guided teams in collaborative game development projects",
                "Multimedia Head of International Affairs Society - Ensured welcoming environment for foreign delegates, showcasing strong communication skills",
                "Active volunteer at NGOs - Providing emotional and financial support to communities in need"
            ],
            technologies: ["Robotics", "Computer Vision", "Hand Gesture Recognition", "Web Development", "Leadership", "Project Management"]
        },
        {
            position: "AI Model Contributor",
            company: "Outlier AI",
            period: "2024",
            location: "California, USA (Remote)",
            description: "Trained and refined GPT-based language models through data incorporation and iterative feedback. Collaborated with AI developers to enhance model performance and maintain quality through peer reviews.",
            responsibilities: [
                "Enhanced GPT model contextual understanding by incorporating web-article data",
                "Refined AI responses through accurate prompt interpretation and performance ratings",
                "Provided iterative feedback for continuous model improvement",
                "Collaborated with fellow developers on quality assurance and peer reviews"
            ],
            technologies: ["GPT Models", "Machine Learning", "Data Annotation", "Model Training", "Quality Assurance"]
        },
        {
            position: "Game Developer",
            company: "Self-Learning & Coursework",
            period: "2023",
            location: "Delhi NCR, India",
            description: "Mastered Unreal Engine 5 and C++ game development through comprehensive coursework. Built a complete third-person space shooter game featuring advanced gameplay mechanics, AI systems, and polished visual effects.",
            responsibilities: [
                "Developed third-person space shooter with dynamic combat mechanics",
                "Implemented AI enemies with intelligent shooting behavior and pathfinding",
                "Created ragdoll physics system for realistic character deaths and interactions",
                "Designed particle effects for weapons, explosions, and environmental ambiance",
                "Integrated background music and sound effects for immersive gameplay experience"
            ],
            technologies: ["Unreal Engine 5", "C++", "Blueprints", "AI Behavior Trees", "Particle Systems", "Game Physics"]
        },

        // Add more objects like the one above for each job/internship. Copy the whole block and paste below, then edit.
    ],
    projects: [
    {
        id: 1,
        title: "Autonomous Multi-Agent Bargain Spotter",
        category: "AI / Multi-Agent Systems",
        technologies: "Python, LangChain, OpenAI API, Multi-Agent Framework, Web Scraping, Real-time Notifications",
        image: "/images/bargain-spotter.png",
        description: "A fully autonomous multi-agent AI system where specialized agents collaborate to scan product listings across multiple platforms, analyze pricing trends, identify high-value deals, and notify users in real-time. Features intelligent agent coordination and automated deal discovery.",
        github: "https://github.com/Yugjohri/Autonomous-Multi-Agent-Bargain-Spotter-"
    },
    {
        id: 2,
        title: "GPT-Ind",
        category: "AI / LLM",
        technologies: "Python, PyTorch, Transformers, Custom Tokenizer, Deep Learning",
        image: "/images/gpt-ind.png",
        description: "Developed a GPT-style transformer architecture from scratch using PyTorch with a custom tokenizer. Trained on 500K tokens to generate coherent text completions, implementing attention mechanisms, positional encoding, and layer normalization from the ground up.",
        github: "https://github.com/Yugjohri/GPT-Ind"
    },
    {
        id: 3,
        title: "WALL-E Robotic Arm",
        category: "Robotics / IoT",
        technologies: "Arduino, C++, Computer Vision, Hand Gesture Recognition, Mobile App Development",
        image: "/images/wall-e.png",
        description: "Award-winning project (2nd Place at SEAS Ideathon 3.0) - A 6-degree-of-freedom robotic arm controllable via custom mobile app or proprietary hand gesture recognition system. Features real-time motion control and intuitive gesture-based interaction.",
        github: null
    },
    {
        id: 4,
        title: "Fine-Tuned LLM for Price Prediction",
        category: "AI / Fine-Tuning",
        technologies: "Python, QLoRA, Transformers, Hugging Face, Model Fine-Tuning",
        image: "/images/price-prediction.png",
        description: "Fine-tuned an open-source large language model using QLoRA (Quantized Low-Rank Adaptation) to match and outperform frontier models on product price prediction tasks. Achieved significant performance improvements while reducing computational requirements.",
        github: "https://github.com/Yugjohri/Finetuned-Open-Source-LLM-for-Product-Price-Prediction-QLoRA-"
    },
    {
        id: 5,
        title: "RAG-Powered AI Knowledge Worker",
        category: "AI / RAG Systems",
        technologies: "Python, LangChain, Vector Databases, OpenAI API, FastAPI, Retrieval Systems",
        image: "/images/rag-knowledge.png",
        description: "Implemented a Retrieval-Augmented Generation (RAG) system functioning as an AI-powered domain expert for organizations. Ingests internal knowledge sources, retrieves relevant information, and provides accurate, context-aware responses based on company data.",
        github: "https://github.com/Yugjohri/RAG-Powered-AI-Knowledge-Worker"
    },
    {
        id: 6,
        title: "Product Price Prediction using Frontier LLMs",
        category: "AI / LLM Applications",
        technologies: "Python, OpenAI API, GPT-4, Prompt Engineering, Data Analysis",
        image: "/images/frontier-price.png",
        description: "Built an intelligent pricing prediction system leveraging frontier large language models to estimate product prices from short textual descriptions. Demonstrates advanced prompt engineering and LLM application techniques for real-world business use cases.",
        github: "https://github.com/Yugjohri/Product-Price-Prediction-using-Frontier-LLMs"
    },
    {
        id: 7,
        title: "Space Shooter Game",
        category: "Game Development",
        technologies: "Unreal Engine 5, C++, Blueprints, AI Behavior Trees, Particle Systems, Game Physics",
        image: "/images/space-shooter.png",
        description: "Third-person space shooter featuring dynamic combat mechanics, intelligent AI enemies with shooting behavior, realistic ragdoll physics system, immersive particle effects for weapons and explosions, and atmospheric background music for engaging gameplay.",
        github: null
    },
    {
        id: 8,
        title: "INFUTURUM 2.0 - ACM Flagship Event Website",
        category: "Web Development / Gamification",
        technologies: "React, Next.js, JavaScript, CSS Animations, Vercel, Interactive UI/UX",
        image: "/images/infuturum.png",
        description: "Developed the official website for ACM Bennett University's annual flagship event INFUTURUM 2.0 as Technical Head. Features a unique retro-arcade gaming aesthetic with hidden quests and Easter eggs throughout the site that unlock rewards for participants. Interactive stock-trading themed interface with leaderboards and gamified navigation.",
        github: "https://github.com/Yugjohri/INFUTURUM-3.0"
    }
]

// DALL-E IMAGE GENERATION PROMPTS FOR EACH PROJECT:

/* 
PROJECT 1 - Autonomous Multi-Agent Bargain Spotter:
"A modern digital illustration of multiple AI agents as glowing holographic figures collaborating around floating digital screens showing product listings and price charts. Clean tech aesthetic with purple and blue color scheme, shopping cart icons, price tags, and data streams. Professional software interface design, futuristic but minimal."

PROJECT 2 - GPT-Ind:
"Abstract visualization of a neural network transformer architecture with glowing nodes and connections forming text. Shows layers of attention mechanisms with purple and blue gradients, flowing data patterns, and scattered words/tokens floating in a digital space. Technical but artistic representation of deep learning."

PROJECT 3 - WALL-E Robotic Arm:
"A sleek 6-DOF robotic arm on a dark background with glowing blue joints, being controlled by floating holographic hand gestures. Modern tech aesthetic with circuit patterns, motion trails showing movement, and a mobile phone displaying control interface. Clean, professional robotics visualization."

PROJECT 4 - Fine-Tuned LLM for Price Prediction:
"Visualization of AI model fine-tuning process showing a neural network being optimized with glowing gradient descent paths. Dollar signs and product icons flowing through layers, with QLoRA optimization symbols and efficiency graphs. Purple and gold color scheme, technical but clean design."

PROJECT 5 - RAG-Powered AI Knowledge Worker:
"Modern illustration of a RAG system showing documents being processed through a retrieval pipeline into a glowing AI brain. Vector database represented as organized data cubes, with search queries and knowledge extraction visualization. Professional blue and purple gradient, clean tech interface."

PROJECT 6 - Product Price Prediction using Frontier LLMs:
"Futuristic interface showing product descriptions being analyzed by AI, with price predictions appearing as glowing numbers. Shows GPT-4 logo subtly integrated, data flowing from text to price estimates. Clean dashboard design with charts, gradients in blue and purple, professional business intelligence aesthetic."

PROJECT 7 - Space Shooter Game:
"Epic third-person space shooter scene with a spacecraft in dynamic combat against AI enemy ships. Showing particle effects from weapon fire, explosions, stars in background, ragdoll physics on defeated enemies. Vibrant sci-fi colors with purple nebula, action-packed but stylized game art aesthetic."

PROJECT 8 - INFUTURUM 3.0 Website:
"Retro 80s arcade-style website interface with vibrant neon colors (pink, cyan, purple). Shows a futuristic stock trading terminal with pixelated graphics, leaderboard, hidden quest icons scattered around, retro game controller elements. Vapor wave aesthetic with grid patterns and cosmic background. Nostalgic gaming meets modern web design."
*/,
    contact: {
        email: "yugjohri8@gmail.com",
        github: "https://github.com/Yugjohri",
        linkedin: "https://www.linkedin.com/in/yug-johri-3a4373259/",
        twitter: "https://x.com/YugJohri",
        facebook: "",
        instagram: "https://www.instagram.com/yugjohri/?hl=en"
    },
    skills: {
        develop: {
            title: "AI / LLM ENGINEER",
            description: "Intelligent systems & language models",
            details: "Building and fine-tuning LLMs, multi-agent AI systems, RAG pipelines, and ML models from scratch. Focus on Python, PyTorch, and practical AI applications.",
            tools: ["Python", "PyTorch", "LLMs", "RAG", "Multi-Agent", "QLoRA", "Transformers"]
        },
        design: {
            title: "SOFTWARE DEV.",
            description: "Problem solving & clean code",
            details: "Strong foundation in data structures and algorithms using Java. Building scalable software solutions, writing maintainable code, and solving complex problems efficiently.",
            tools: ["Java", "Cursor", "DSA", "Git", "Problem Solving"]
        }
    }
};
