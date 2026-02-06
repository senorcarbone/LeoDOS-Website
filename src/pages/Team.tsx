import { ExternalLink, Linkedin, Globe, GraduationCap, ArrowLeft, Github } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StarField from "@/components/StarField";

import parisImage from "@/assets/team/paris-carbone.jpg";
import thomasImage from "@/assets/team/thomas.jpg";
import bernardoImage from "@/assets/team/bernardo.jpg";
import klasImage from "@/assets/team/klas-segeljakt.png";

interface TeamMember {
  name: string;
  role: string;
  title: string;
  organization: string;
  image: string | null;
  bio: string;
  expertise: string[];
  links: {
    website?: string;
    linkedin?: string;
    scholar?: string;
    github?: string;
    rise?: string;
  };
}

const team: TeamMember[] = [
  {
    name: "Thomas Sandholm",
    role: "Principal Co-Investigator",
    title: "Research Scientist, PhD",
    organization: "RISE Research Institutes of Sweden",
    image: thomasImage,
    bio: "Thomas holds a PhD in Computer and Systems Sciences from KTH. He has over 15 years of research experience in distributed systems, computational markets, and social computing. His work focuses on the intersection of machine learning and distributed resource allocation.",
    expertise: ["Machine Learning", "Computational Markets", "Distributed Systems", "Resource Allocation"],
    links: {
      website: "https://www.ri.se/en/person/thomas-sandholm",
      linkedin: "https://www.linkedin.com/in/thomassandholm/",
      scholar: "https://scholar.google.com/citations?user=Kt9FJtQAAAAJ&hl=en",
      github: "https://github.com/patompa",
    },
  },
  {
    name: "Klas Segeljakt",
    role: "Researcher and Space Software Engineer",
    title: "PhD Candidate",
    organization: "RISE Research Institutes of Sweden",
    image: klasImage,
    bio: "Klas is a PhD student and research engineer focusing on the intersection of Programming Languages and Distributed Systems. He has contributed to Arc and Arcon, novel systems for batch and stream programming, and develops Aqua, a programming language for distributed data parallel stream processing.",
    expertise: ["Stream Processing", "Programming Languages", "Rust", "Distributed Systems"],
    links: {
      linkedin: "https://www.linkedin.com/in/klas-segeljakt/",
      scholar: "https://scholar.google.com/citations?user=k4bVwsIAAAAJ",
      github: "https://github.com/segeljakt",
    },
  },
  {
    name: "Bernardo Huberman",
    role: "Distinguished Advisor",
    title: "Distinguished Scientist",
    organization: "RISE Research Institutes of Sweden",
    image: bernardoImage,
    bio: "Bernardo is an HP Fellow and former Director of the Systems Research Center at Hewlett Packard Laboratories. He received his PhD in Physics from the University of Pennsylvania and is a Consulting Professor at Stanford University. A pioneer in complex systems and social computation.",
    expertise: ["Complex Systems", "Social Computation", "Information Dynamics", "Systems Theory"],
    links: {
      linkedin: "https://www.linkedin.com/in/bernardo-huberman-39b40823/",
      scholar: "https://scholar.google.com/citations?user=b_GVwg0AAAAJ",
    },
  },
  {
    name: "Paris Carbone",
    role: "Principal Co-Investigator",
    title: "Professor of Data Systems",
    organization: "KTH Royal Institute of Technology & RISE Research Institutes of Sweden",
    image: parisImage,
    bio: "Paris leads the Data Systems Lab at KTH and RISE. He has been a core open source committer for Apache Flink since the start. His research spans distributed algorithms, scalable transactional data systems, coordination-avoidance and declarative programming support for AI and data apps.",
    expertise: ["Distributed Systems", "Stream Processing", "Apache Flink", "Space Computing"],
    links: {
      website: "https://datasystems.nu",
      linkedin: "https://www.linkedin.com/in/paris-carbone-20752726/",
      scholar: "https://scholar.google.com/citations?user=qSJPU-UAAAAJ",
    },
  },
];

const TeamMemberCard = ({ member }: { member: TeamMember }) => (
  <article className="group">
    <div className="flex flex-col md:flex-row gap-8 md:gap-12">
      {/* Image */}
      <div className="md:w-48 shrink-0">
        <div className="aspect-square relative overflow-hidden rounded-lg bg-muted/30">
          {member.image ? (
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-4xl font-orbitron text-muted-foreground/30">
                {member.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1">
        <div className="mb-4">
          <span className="text-xs tracking-wider text-primary/80 uppercase font-medium">{member.role}</span>
          <h2 className="font-orbitron text-2xl font-semibold text-foreground mt-1">{member.name}</h2>
          <p className="text-sm text-muted-foreground mt-1">
            {member.title} · {member.organization}
          </p>
        </div>

        <p className="text-muted-foreground leading-relaxed mb-6 text-sm">{member.bio}</p>

        {/* Expertise */}
        <div className="flex flex-wrap gap-2 mb-6">
          {member.expertise.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 text-xs bg-muted/30 text-muted-foreground rounded-full border border-border/30"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center gap-3">
          {member.links.website && (
            <a
              href={member.links.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span>Website</span>
            </a>
          )}
          {member.links.linkedin && (
            <a
              href={member.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
          )}
          {member.links.scholar && (
            <a
              href={member.links.scholar}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <GraduationCap className="w-4 h-4" />
              <span>Scholar</span>
            </a>
          )}
          {member.links.github && (
            <a
              href={member.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          )}
          {member.links.rise && (
            <a
              href={member.links.rise}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span>RISE</span>
            </a>
          )}
        </div>
      </div>
    </div>
  </article>
);

const TeamPage = () => {
  return (
    <div className="min-h-screen relative">
      <StarField />
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-12"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-mono">Back to Home</span>
          </Link>

          <div className="max-w-2xl">
            <span className="text-xs tracking-[0.2em] text-muted-foreground/70 uppercase">Research Team</span>
            <h1 className="font-orbitron text-4xl md:text-5xl font-bold mt-4 mb-6 text-foreground">
              The People Behind LeoDOS
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              A team of researchers pushing the boundaries of distributed computing beyond Earth's atmosphere.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="pb-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-16">
            {team.map((member) => (
              <TeamMemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TeamPage;
