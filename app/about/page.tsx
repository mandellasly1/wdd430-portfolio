import TeamMember from '../../components/TeamMember'

export default function About() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-4 text-blue-600">About Our Store</h2>
      <p className="text-lg text-gray-700">
        This e‑commerce site was built as part of the WDD430 course project. 
        It demonstrates modern web development using Next.js, Tailwind CSS, and TypeScript. 
        Our goal is to provide a seamless shopping experience while showcasing best practices 
        in building scalable web applications.
      </p>


      <h3 className="text-2xl font-semibold mb-4 text-blue-600">Meet the Team</h3>
      <div className="space-y-4">
        <TeamMember
          name="Nelson Mandella Akpomah"
          role="Developer"
          specialty="Web Developer"
          member="BYU"
          bio="Focused on building modern web applications with Next.js and Tailwind CSS."
        />
        <TeamMember
          name="Joshua Abinadi Cirilo"
          role="Developer"
          specialty="Software Developer"
          member="BYU"
          bio="Enjoys solving complex problems and building scalable solutions."
        />
        <TeamMember
          name="Diego Artemio Garcia"
          role="Designer"
          specialty="Web Developer"
          member="BYU"
          bio="Passionate about creating clean, user‑friendly interfaces and experiences."
        />
      </div>
    </section>
  )
}
