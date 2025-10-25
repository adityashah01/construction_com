import { Linkedin, Mail } from "lucide-react"

export default function Team() {
  const teamMembers = [
    {
      name: "Rajesh Kumar",
      role: "Chief Executive Officer",
      bio: "Visionary leader with 20+ years in construction and infrastructure",
      image: "/professional-ceo.png",
    },
    {
      name: "Priya Sharma",
      role: "Project Director",
      bio: "Expert in project management and quality assurance",
      image: "/professional-woman-director.png",
    },
    {
      name: "Amit Patel",
      role: "Chief Engineer",
      bio: "Specialized in electrical substations and infrastructure design",
      image: "/professional-engineer.png",
    },
    {
      name: "Neha Singh",
      role: "Operations Manager",
      bio: "Ensures smooth execution of all projects",
      image: "/professional-woman-manager.png",
    },
    {
      name: "Vikram Thapa",
      role: "Senior Site Engineer",
      bio: "15+ years experience in on-site project management and supervision",
      image: "/professional-male-engineer.jpg",
    },
    {
      name: "Anjali Verma",
      role: "Quality Assurance Lead",
      bio: "Ensures all projects meet international quality standards",
      image: "/professional-female-qa.jpg",
    },
    {
      name: "Suresh Yadav",
      role: "Safety Officer",
      bio: "Dedicated to maintaining zero-accident record across all sites",
      image: "/professional-male-safety.jpg",
    },
    {
      name: "Deepa Nair",
      role: "HR & Administration Manager",
      bio: "Manages team development and organizational excellence",
      image: "/professional-female-hr.jpg",
    },
    {
      name: "Rohan Gupta",
      role: "Financial Controller",
      bio: "Oversees financial planning and project budgeting",
      image: "/professional-male-finance.jpg",
    },
  ]

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-muted to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Our Team</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Meet the talented professionals behind Energetic Nepal's success
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, i) => (
              <div
                key={i}
                className="bg-muted rounded-lg overflow-hidden border border-border hover:border-red-600 transition-all hover:shadow-lg group"
              >
                <div className="relative h-64 bg-gradient-to-br from-red-600/20 to-blue-600/20 overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-red-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                  <div className="flex gap-3">
                    <button className="p-2 rounded-lg bg-background hover:bg-red-600 hover:text-white transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </button>
                    <button className="p-2 rounded-lg bg-background hover:bg-blue-600 hover:text-white transition-colors">
                      <Mail className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Culture</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Health & Safety",
                desc: "Emphasis on health and safety processes to ensure a safer workplace for our staff.",
              },
              {
                title: "Training & Education",
                desc: "Special education fund for employees to finance previously demerits individuals working for the company.",
              },
              {
                title: "Teamwork",
                desc: "Through combined effort and co-operation we achieve more than we could as individuals.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-background p-8 rounded-lg border border-border hover:border-red-600 transition-colors"
              >
                <h3 className="text-2xl font-bold mb-4 text-red-600">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
