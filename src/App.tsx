import React, { useState, useEffect } from "react";
import "./custom.css";
import {
  Navbar,
  Hero,
  Section,
  Container,
  Columns,
  Card,
  Content,
  Heading,
  Tag,
  Footer,
  Form,
  Icon,
  Button,
  Image,
} from "react-bulma-components";
import logo from "./rambonette_logo_full_no_bg.png";
import haLogo from "./home-assistant-logomark-with-margins-color-on-light.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { Fluid } from "@whatisjery/react-fluid-distortion";
import { EffectComposer } from "@react-three/postprocessing";
import { Canvas } from "@react-three/fiber";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

interface ExperienceItem {
  title: string;
  company: string;
  date: string;
  description: string;
}

interface EducationItem {
  title: string;
  company: string;
  date: string;
  description: string;
  url?: string;
}

interface SkillsData {
  [category: string]: string[];
}

interface Contribution {
  project: string;
  logo: string;
  description: string;
  url: string;
}

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("about");
  const [isMenuActive, setIsMenuActive] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "about",
        "experience",
        "education",
        "contributions",
        "skills",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuActive(false);
  };

  const experienceData: ExperienceItem[] = [
    {
      title: "Lead Developer",
      company: "Freedompro Srl",
      date: "Jul. 2024 – Present",
      description:
        "Promoted to Lead Developer while continuing backend specialization. Responsible for planning, managing, and coordinating activities across Frontend, Firmware, and Backend teams. Serving as Scrum Master and developing CI/CD pipelines for Google Play Console and App Store Connect. Actively involved in IT recruitment and working directly with PMs, Business Analysts, and UX/UI designers.",
    },
    {
      title: "Senior Backend Developer",
      company: "Freedompro Srl",
      date: "Jun. 2023 – Jul. 2024",
      description:
        "Developed remote analysis and diagnostics tools for home automation devices. Restructured monolithic backend into microservices-based TypeScript architecture. Built applications for automating device flashing and production processes. Automated deployment and certificate renewal processes.",
    },
    {
      title: "Full Stack Developer",
      company: "Ubqity ltd.",
      date: "Feb. 2021 – Jun. 2023",
      description:
        "Developed price monitoring and market positioning tools for pharmaceutical companies. Initially worked as fullstack, later specialized in backend development. Created a client brand recognition system for social content analysis.",
    },
    {
      title: "Tech and Audio Engineer",
      company: "Whatever Milan",
      date: "Apr. 2017 – Feb. 2021",
      description:
        "Worked as IT technician managing storage, compression, and availability processes of RAW audio/video material. Freelance position focusing on technical infrastructure and media processing.",
    },
    {
      title: "Event Manager",
      company: "Expo 2015 Milano – Alessandro Rosso Group",
      date: "May 2015 – Oct. 2015",
      description:
        "Managed events and operations during the prestigious Expo 2015 Milano international exhibition.",
    },
  ];

  const educationData: EducationItem[] = [
    {
      title: "Digital Transformation with Google Cloud",
      company: "Google",
      date: "2024",
      description:
        "By earning the Digital Transformation with Google Cloud certification, I gained a solid understanding of how to leverage cloud technologies to drive innovation, agility, and efficiency in business. I also learned how to align cloud strategy with business goals, modernize infrastructure, and foster a culture of digital transformation.\n Credential ID 12431514",
      url: "https://www.cloudskillsboost.google/public_profiles/2e96561c-6baa-4aeb-bd8e-64e57a72cbf8/badges/12431514?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
    },
    {
      title: "Modernize Infrastructure and Applications with Google Cloud",
      company: "Google",
      date: "2024",
      description:
        "By earning the Modernize Infrastructure and Applications with Google Cloud certification, I learned how to migrate legacy systems and refactor applications using cloud-native technologies like containers, serverless platforms, and APIs. I also gained experience with hybrid and multi-cloud strategies, and learned how to use Google Kubernetes Engine (GKE) to manage and scale modern infrastructure. Credetianl ID 12453066",
      url: "https://www.cloudskillsboost.google/public_profiles/2e96561c-6baa-4aeb-bd8e-64e57a72cbf8/badges/12453066?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
    },
    {
      title: "Scaling with Google Cloud Operations",
      company: "Google",
      date: "2024",
      description:
        "By earning the Scaling with Google Cloud Operations certification, I gained essential expertise in cloud financial governance and cost management, including budgeting, resource hierarchy, and billing visualization. I also learned core principles of operational excellence—such as resilience, reliability, incident response, and sustainable cloud practices supported by Google Cloud’s operations suite. Credential ID 12483502",
      url: "https://www.cloudskillsboost.google/public_profiles/2e96561c-6baa-4aeb-bd8e-64e57a72cbf8/badges/12483502?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
    },
    {
      title: "Bachelor's Degree in Computer Science",
      company: "University of Milan",
      date: "2013 - 2017",
      description:
        "Developed strong foundations in computer science principles and software development.",
    },
    {
      title: "First Certificate in English",
      company: "Cambridge University",
      date: "2013",
      description: "Achieved B2 level certification in English proficiency.",
    },
    {
      title: "High School Diploma",
      company: "Maturità Liceo Classico",
      date: "2012 – 2013",
      description: "Classical high school diploma with a score of 80/100.",
    },
  ];

  const skillsData: SkillsData = {
    Frontend: [
      "React",
      "Meteor.js",
      "Electron",
      "Ionic Capacitor",
      "React Native",
    ],
    Backend: [
      "Node.js",
      "Express.js",
      "NestJS",
      "Docker",
      "Kubernetes",
      "Redis",
      "MQTT",
      "X.509",
      "Stripe",
    ],
    Programming: [
      "TypeScript",
      "JavaScript",
      "Python",
      "C/C++",
      "PHP",
      "Shell",
    ],
    "Cloud Platforms": [
      "GCP",
      "AWS",
      "Oracle Cloud",
      "Digital Ocean",
      "App Store Connect",
      "Google Play Console",
    ],
    Databases: ["MongoDB", "PostgreSQL", "SQL", "GraphQL"],
    Languages: ["Italian (Native)", "Spanish (Native)", "English (B2)"],
  };

  const contributionsData: Contribution[] = [
    {
      project: "Open Telemetry",
      url: "https://github.com/open-telemetry/opentelemetry.io",
      description:
        "Contributed to Node.js implementation of Open Telemetry SDK, a High-quality, ubiquitous, and portable telemetry to enable effective observability.",
      logo: "https://opentelemetry.io/img/social/logo-wordmark-001.png",
    },
    {
      project: "Organic Maps",
      url: "https://github.com/organicmaps/organicmaps",
      description:
        "Contributed fixes to Organic Maps, a privacy focused gps navigation app based on OSM with offline capabilities.",
      logo: "https://organicmaps.app/logos/green-on-transparent.svg",
    },
    {
      project: "Chart.js",
      url: "https://github.com/chartjs/Chart.js",
      description:
        "Contributed fixes to Chart.js annotations plugin to make aligment more configurable:",
      logo: "https://www.chartjs.org/media/logo-title.svg",
    },
    {
      project: "Home Assistant",
      url: "https://github.com/home-assistant/core",
      description:
        "Contributed fixes to device speficic integrations to make Freedompro's device compatible:",
      logo: haLogo,
    },
  ];

  return (
    <>
      {/* Navigation */}
      <Navbar fixed="top" color="white" className="navbar-custom">
        <Navbar.Brand>
          <Navbar.Item href="#" style={{ width: "13rem", height: "5rem" }}>
            <img alt="Rambonette" src={logo} style={{ maxHeight: "none" }} />
          </Navbar.Item>
          <Navbar.Burger
            className={isMenuActive ? "is-active" : ""}
            onClick={() => setIsMenuActive(!isMenuActive)}
          />
        </Navbar.Brand>
        <Navbar.Menu>
          <Navbar.Container align="left">
            {[
              "about",
              "experience",
              "education",
              "contributions",
              "skills",
              "contact",
            ].map((section) => (
              <Navbar.Item
                key={section}
                className={`navbar-item-custom ${
                  activeSection === section ? "is-active" : ""
                }`}
                onClick={() => scrollToSection(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Navbar.Item>
            ))}
          </Navbar.Container>
        </Navbar.Menu>
      </Navbar>

      {/* Hero Section */}
      <Hero
        color="primary"
        size="fullheight"
        className="hero-custom"
        style={{ position: "relative" }}
      >
        <Canvas
          style={{
            position: "absolute",
            top: 0,
            left: 0,
          }}
        >
          <EffectComposer>
            <Fluid
              fluidColor="white"
              backgroundColor="transparent"
              showBackground={false}
              force={0.7}
              blend={10}
            />
          </EffectComposer>
        </Canvas>
        <Hero.Body>
          <Container className="has-text-centered">
            <Heading size={1}>Ramiro Cordero</Heading>
            <Heading subtitle size={3}>
              Senior Backend & Lead Developer
            </Heading>
            <p className="is-size-5" style={{ opacity: 0.9 }}>
              Full Stack Developer specializing in TypeScript, Node.js, and
              microservices architecture
            </p>
          </Container>
        </Hero.Body>
      </Hero>

      {/* About Section */}
      <Section id="about">
        <Container>
          <Heading size={2} className="section-title">
            About Me
          </Heading>
          <Columns className="is-centered">
            <Columns.Column size={8}>
              <Card className="card-custom">
                <Card.Content>
                  <Columns>
                    <Columns.Column>
                      <Content size={"medium"}>
                        I'm a Senior Back-End Developer with a passion for
                        creating robust and efficient server-side applications.
                        Although my primary programming language is C, I mainly
                        work with technologies like Node.js, NestJS, MongoDB,
                        and Redis. My work involves implementing the Matter
                        protocol for IoT, an open-source connectivity standard
                        that ensures seamless and secure communication between
                        smart home devices, regardless of manufacturer. I also
                        leverage deep knowledge of x.509 certificates to ensure
                        secure communications. I'm passionate and actively
                        involved in open source projects such as InfiniTime,
                        Home Assistant, and ebay-node-api, which allow me to
                        collaborate with and learn from the global developer
                        community. I thrive on delivering high-quality, scalable
                        solutions and am committed to continuously learning and
                        staying at the forefront of technology trends.
                      </Content>
                    </Columns.Column>
                  </Columns>
                </Card.Content>
              </Card>
            </Columns.Column>
          </Columns>
        </Container>
      </Section>

      {/* Experience Section */}
      <Section id="experience" className="has-background-light">
        <Container>
          <Heading size={2} className="section-title">
            Experience
          </Heading>
          <Columns className="is-centered">
            <Columns.Column size={10}>
              {experienceData.map((exp, index) => (
                <Card key={index} className="card-custom experience-card">
                  <Card.Content>
                    <div className="experience-title">{exp.title}</div>
                    <div className="experience-company">{exp.company}</div>
                    <div className="experience-date">{exp.date}</div>
                    <Content>
                      <p>{exp.description}</p>
                    </Content>
                  </Card.Content>
                </Card>
              ))}
            </Columns.Column>
          </Columns>
        </Container>
      </Section>

      {/* Education Section */}
      <Section id="education">
        <Container>
          <Heading size={2} className="section-title">
            Education
          </Heading>
          <Columns className="is-centered">
            <Columns.Column size={8}>
              {educationData.map((edu, index) => (
                <Card key={index} className="card-custom experience-card">
                  <Card.Content>
                    <div className="experience-title">{edu.title}</div>
                    <div className="experience-company">{edu.company}</div>
                    <div className="experience-date">{edu.date}</div>
                    <Content>
                      <p>{edu.description}</p>
                    </Content>
                    {edu.url ? (
                      <Button
                        color="primary"
                        size="small"
                        className="skill-tag"
                        onClick={() =>
                          window.open(edu.url, "_blank", "noopener,noreferrer")
                        }
                      >
                        <span>Link</span>
                        <Icon>
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                        </Icon>
                      </Button>
                    ) : (
                      <></>
                    )}
                  </Card.Content>
                </Card>
              ))}
            </Columns.Column>
          </Columns>
        </Container>
      </Section>

      {/* Contributions */}
      <Section id="contributions" className="has-background-light">
        <Container>
          <Heading size={2} className="section-title">
            Contributions
          </Heading>
          <Columns className="is-multiline">
            {contributionsData.map(({ project, url, description, logo }) => (
              <Columns.Column key={project} size={3}>
                <Card
                  className="card-custom skill-card"
                  onClick={() =>
                    window.open(url, "_blank", "noopener,noreferrer")
                  }
                >
                  <Card.Header>
                    <Card.Header.Icon>
                      <Image
                        size={128}
                        src={logo}
                        style={{ display: "grid" }}
                        className="is-align-items-center"
                      />
                    </Card.Header.Icon>
                    <Card.Header.Title textSize={5}>
                      {project}
                    </Card.Header.Title>
                  </Card.Header>
                  <Card.Content>{description}</Card.Content>
                </Card>
              </Columns.Column>
            ))}
          </Columns>
        </Container>
      </Section>

      {/* Skills Section */}
      <Section id="skills">
        <Container>
          <Heading size={2} className="section-title">
            Skills
          </Heading>
          <Columns className="is-multiline">
            {Object.entries(skillsData).map(([category, skills]) => (
              <Columns.Column key={category} size={4}>
                <Card className="card-custom skill-card">
                  <Card.Content>
                    <Heading size={5}>{category}</Heading>
                    <Form.Field className="is-grouped is-grouped-multiline">
                      {skills.map((skill, index) => (
                        <Form.Control key={index}>
                          <Tag
                            color="primary"
                            size="medium"
                            className="skill-tag"
                          >
                            {skill}
                          </Tag>
                        </Form.Control>
                      ))}
                    </Form.Field>
                  </Card.Content>
                </Card>
              </Columns.Column>
            ))}
          </Columns>
        </Container>
      </Section>

      {/* Contact Section */}
      <Section id="contact" className="has-background-light">
        <Container>
          <Heading size={2} className="section-title">
            Contact
          </Heading>
          <Columns className="is-centered">
            <Columns.Column size={6}>
              <Card className="card-custom">
                <Card.Content>
                  <Heading size={4} className="has-text-centered contact-title">
                    Get In Touch
                  </Heading>
                  <Content>
                    <Form.Field>
                      <Icon.Text className="is-justify-content-center">
                        <Icon>
                          <FontAwesomeIcon icon={faLinkedin} />
                        </Icon>
                        <span>
                          <a
                            href="https://www.linkedin.com/in/ramiro-cordero-2134261a5/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Ramiro Cordero
                          </a>
                        </span>
                      </Icon.Text>
                    </Form.Field>
                    <Form.Field>
                      <Icon.Text className="is-justify-content-center">
                        <Icon>
                          <FontAwesomeIcon icon={faGithub} />
                        </Icon>
                        <span>
                          <a
                            href="https://github.com/rambonette"
                            target="_blank"
                            rel="noreferrer"
                          >
                            @rambonette
                          </a>
                        </span>
                      </Icon.Text>
                    </Form.Field>
                  </Content>
                </Card.Content>
              </Card>
            </Columns.Column>
          </Columns>
        </Container>
      </Section>

      {/* Footer */}
      <Footer className="footer-custom">
        <Container>
          <Content className="has-text-centered">
            <p>This portfolio was made with Free Libre Open Source Software!</p>
            <p>
              Empower innovation. Embrace open-source. Foster a sustainable and
              ethical tech future.
            </p>
          </Content>
        </Container>
      </Footer>
    </>
  );
};

export default App;
