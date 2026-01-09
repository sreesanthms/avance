import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

const sectionVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55 },
  },
}

const listItemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45 },
  },
}

const heroTitleContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.09, delayChildren: 0.3 },
  },
}

const heroLetter = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

function Section({
  index,
  label,
  title,
  children,
}: {
  index: number
  label: string
  title: string
  children: ReactNode
}) {
  return (
    <motion.section
      className="section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={sectionVariants}
      custom={index}
    >
      <div className="section-label">{label}</div>
      <h2 className="section-title">{title}</h2>
      {children}
    </motion.section>
  )
}

export function App() {
  const teamMembers = [
    {
      name: 'NELVIN JOHNSON',
      role: 'Captain',
      photo: '/nelvin.jpeg',
      description:
        'NELVIN is the brain of the team. His fresh and unique ideas are born from in-depth research and an authentic creative instinct that drives AVANCE forward.',
    },
    {
      name: 'SARA SUSAN SUNIL',
      role: 'Vice Captain',
      photo: '/sara.jpeg',
      description:
        'Sara Susan Sunil is the backbone of the team. Her practical approach and relentless drive bridge the gap between concept and reality. Her ability to streamline complex tasks is born from strategic planning and precision.',
    },
    {
      name: 'THEJASREE V P',
      role: 'Treasurer',
      photo: '/thejasree.jpeg',
      description:
        'Thejasree is the guardian of the team’s resources. She manages financial planning with prudence and transparency. Her ability to maximize our budget is born from fiscal responsibility and careful foresight.',
    },
    {
      name: 'SREESANTH M S',
      role: 'Tech Lead',
      photo: '/sreesanth.jpeg',
      description:
        'Sreesanth is the technical engine of the team. He transforms abstract requirements into functional reality through coding expertise and architectural vision. His solutions to complex problems are born from agile thinking and deep technical knowledge.',
    },
    {
      name: 'SHEHAL KADER',
      role: 'Media Lead',
      photo: '/shehal.jpeg',
      description:
        'Shehal is the visual storyteller of the team. He manages AVANCE’s public presence, ensuring our work appears dynamic and engaging across platforms. His creative content is born from a strong artistic eye.',
    },
    {
      name: 'SHARIKA S',
      role: 'Design Lead',
      photo: '/sharika.jpeg',
      description:
        'Sharika translates client briefs and conceptual ideas into compelling designs that are modern, intuitive, and trend-aware. She creates promotional designs for print, social media, and videography.',
    },
    {
      name: 'NIKUNJ RENJITH RAJAN',
      role: 'Operations Lead',
      photo: '/nikunj.jpeg',
      description:
        'Nikunj is the strategist behind the scenes. He orchestrates logistics that keep the project moving smoothly. His efficiency is born from a pragmatic mindset and strong resource management skills.',
    },
    {
      name: 'SANA FATHIMA',
      role: 'Presentation Lead',
      photo: '/sana.jpeg',
      description:
        'Sana is the voice of the team. She crafts narratives that connect technical work with the audience, making complex ideas easy to understand. Her delivery is born from confidence and clarity.',
    },
    {
      name: 'ROHAN RONY',
      role: 'Documentation Lead',
      photo: '/rohan.jpeg',
      description:
        'Rohan is the chronicler of the team. He ensures no idea or detail is ever lost. His meticulous documentation provides the structural foundation that supports the entire project.',
    },
  ]

  const journey = [
    {
      title: 'Group discussions',
      body: 'Guided conversations that built listening, framing, and participation habits.',
    },
    {
      title: 'Presentations',
      body: 'Short, structured talks that trained clarity, timing, and audience awareness.',
    },
    {
      title: 'Feedback sessions',
      body: 'Honest, specific feedback translated into clear next steps for each member.',
    },
    {
      title: 'Practice interviews',
      body: 'Simulated placement conversations connecting skills with real expectations.',
    },
    {
      title: 'Team collaboration',
      body: 'Coordinated planning and reflection that turned practice into shared progress.',
    },
  ]

  const titleLetters = 'AVANCE'.split('') as string[]

  return (
    <main className="page-shell">
      {/* Hero */}
      <motion.section
        className="hero-shell"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.div
          className="hero-orbit hero-orbit--one"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.9, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />
        <motion.div
          className="hero-orbit hero-orbit--two"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.95, scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut', delay: 0.15 }}
        />

        <motion.div
          className="hero-logo-row"
          initial={{ opacity: 0, scale: 0.96, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <div className="hero-logo-circle">
            <img src="/logo.png" alt="AVANCE logo" className="hero-logo-img" />
          </div>
          <motion.h1
            className="hero-heading"
            variants={heroTitleContainer}
            initial="hidden"
            animate="visible"
          >
            {titleLetters.map((letter: string, index: number) => (
              <motion.span
                key={`${letter}-${index}`}
                className="hero-letter"
                variants={heroLetter}
              >
                {letter}
              </motion.span>
            ))}
          </motion.h1>
        </motion.div>

        <motion.p
          className="hero-tagline"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.55 }}
        >
          Progress with purpose
        </motion.p>
      </motion.section>

      {/* About */}
      <Section index={1} label="About the team" title="Progress as a shared practice">
        <motion.div
          className="about-card"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.55 }}
          whileHover={{ rotateX: -4, rotateY: 4 }}
          transition={{ type: 'spring', stiffness: 120, damping: 18 }}
        >
          <div className="about-heading">
            <span className="about-heading-label">About AVANCE</span>
            <span className="about-heading-underline" />
          </div>
          <div className="about-grid">
            <div className="about-main">
              <p className="about-kicker">Formed inside a focused soft-skills training cohort.</p>
              <p className="section-body">
                AVANCE brings together teammates who chose to treat communication as a deliberate practice, not an
                afterthought. Inspired by the Spanish "avanzar" — to advance — the group is built around forward
                motion, shared discipline, and collaboration that turns ideas into execution.
              </p>
            </div>
            <div className="about-highlights">
              <div className="about-chip">
                <span className="about-chip-title">AVANCE = advance</span>
                <span className="about-chip-text">Progress that is intentional, not accidental.</span>
              </div>
              <div className="about-chip">
                <span className="about-chip-title">Mindset</span>
                <span className="about-chip-text">Growth, collaboration, and reliable execution under pressure.</span>
              </div>
              <div className="about-chip">
                <span className="about-chip-title">Practice</span>
                <span className="about-chip-text">Every session used to refine how the team listens and speaks.</span>
              </div>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* Team members */}
      {/* Team – cinematic, alternating layout (plain section wrapper to avoid visibility bug) */}
      <section className="section">
        <div className="section-label">Team</div>
        <h2 className="section-title">People behind the AVANCE identity</h2>
        <div className="team-list">
          {teamMembers.map((member, idx) => {
            const fromLeft = idx % 2 === 0

            return (
              <motion.article
                key={member.name}
                className={`team-row ${idx % 2 === 1 ? 'team-row--reverse' : ''}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: idx * 0.04 }}
                whileHover={{ y: -6 }}
              >
                {/* Image side */}
                <motion.div
                  className="team-photo-col"
                  initial={{ opacity: 0, x: fromLeft ? -120 : 120, scale: 0.95 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.9, ease: 'easeOut', delay: 0.08 + idx * 0.04 }}
                  whileHover={{ scale: 1.06 }}
                >
                  <div className="team-avatar-ring">
                    <div className="team-avatar-inner">
                      <img src={member.photo} alt={member.name} className="team-avatar-img" />
                    </div>
                  </div>
                </motion.div>

                {/* Text side */}
                <motion.div
                  className="team-info-col"
                  initial={{ opacity: 0, x: fromLeft ? 32 : -32, y: 16 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.85, ease: 'easeOut', delay: 0.18 + idx * 0.04 }}
                >
                  <div className="team-role">{member.role}</div>
                  <div className="team-name">{member.name}</div>
                  <p className="team-strength">{member.description}</p>
                </motion.div>
              </motion.article>
            )
          })}
        </div>
      </section>

      {/* Journey */}
      <Section index={3} label="Journey" title="How the team practises together">
        <div className="journey-list">
          {journey.map((item, index) => (
            <motion.div
              key={item.title}
              className="journey-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -32 : 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.55, ease: 'easeOut', delay: 0.05 * index }}
            >
              <div className="journey-marker">
                <div className="journey-dot" />
                {index < journey.length - 1 && <div className="journey-line" />}
              </div>
              <div className="journey-card">
                <div className="journey-title">{item.title}</div>
                <p className="journey-body">{item.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Closing */}
      <motion.section
        className="closing"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        variants={listItemVariants}
        transition={{ duration: 0.5, delay: 0.12 }}
      >
        <div className="closing-eyebrow">Progress with a lighter footprint</div>
        <p className="closing-text">
          AVANCE believes that real progress feels calm and deliberate. By keeping the environment light and the
          expectations clear, the team creates space for confident contributions from everyone.
        </p>
        <p className="closing-subtext">Welcoming in tone, serious about growth.</p>

        <a
          className="closing-instagram"
          href="https://www.instagram.com/avan_cex"
          target="_blank"
          rel="noreferrer"
        >
          <span className="closing-instagram-icon" />
          <span className="closing-instagram-label">Follow AVANCE on Instagram</span>
        </a>
      </motion.section>
    </main>
  )
}
