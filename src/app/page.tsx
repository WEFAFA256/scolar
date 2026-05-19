import styles from './page.module.css';

export default function Home() {
  const scholarships = [
    {
      id: 1,
      name: "Global Innovators Grant",
      provider: "Tech Future Foundation",
      amount: "$25,000",
      deadline: "Oct 15, 2026",
      type: "Merit-Based",
      description: "Awarded to exceptional students pursuing computer science or artificial intelligence degrees with a focus on sustainable tech."
    },
    {
      id: 2,
      name: "Creative Arts Fellowship",
      provider: "National Arts Council",
      amount: "$15,000",
      deadline: "Nov 01, 2026",
      type: "Portfolio",
      description: "Supporting visionary artists and designers pushing the boundaries of digital and traditional mediums."
    },
    {
      id: 3,
      name: "STEM Diversity Scholarship",
      provider: "Diversity in Science",
      amount: "$10,000",
      deadline: "Dec 12, 2026",
      type: "Need-Based",
      description: "Dedicated to underrepresented minorities aiming to make groundbreaking discoveries in STEM fields."
    },
    {
      id: 4,
      name: "Future Leaders MBA Award",
      provider: "Global Business Institute",
      amount: "$40,000",
      deadline: "Jan 30, 2027",
      type: "Merit-Based",
      description: "For outstanding graduate students demonstrating exceptional leadership and entrepreneurial spirit."
    },
    {
      id: 5,
      name: "Green Earth Initiative",
      provider: "Eco Save Foundation",
      amount: "$12,500",
      deadline: "Feb 15, 2027",
      type: "Project-Based",
      description: "Grants for students developing innovative solutions to combat climate change and environmental degradation."
    },
    {
      id: 6,
      name: "Medicine Masters Fund",
      provider: "HealthFirst Organization",
      amount: "$50,000",
      deadline: "Mar 01, 2027",
      type: "Merit & Need",
      description: "A premier scholarship covering full tuition for medical students committed to rural and underserved communities."
    }
  ];

  return (
    <>
      <nav className={styles.nav}>
        <div className={`container ${styles.navContainer}`}>
          <div className={styles.logo}>
            <span className={styles.logoIcon}>✦</span>
            ScholarQuest
          </div>
          <div className={styles.navLinks}>
            <a href="#" className={styles.navLink}>Discover</a>
            <a href="#" className={styles.navLink}>Universities</a>
            <a href="#" className={styles.navLink}>Resources</a>
            <a href="#" className={styles.navLink}>About</a>
          </div>
          <div>
            <button className="button-outline" style={{ marginRight: '1rem' }}>Log in</button>
            <button className="button-primary">Sign up</button>
          </div>
        </div>
      </nav>

      <main className="container">
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>
            Fuel Your Future with <span className="text-gradient">ScholarQuest</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Unlock access to thousands of exclusive scholarships. No endless searching—just perfectly matched opportunities tailored to your ambitions and potential.
          </p>
          
          <div className={styles.searchBox}>
            <input 
              type="text" 
              className={styles.searchInput} 
              placeholder="Search by major, university, or keywords..."
            />
            <button className="button-primary">Search</button>
          </div>

          <div className={styles.stats}>
            <div className={styles.statItem}>
              <span className={styles.statValue}>15K+</span>
              <span className={styles.statLabel}>Scholarships</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statValue}>$120M</span>
              <span className={styles.statLabel}>Available Funds</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statValue}>50K</span>
              <span className={styles.statLabel}>Students Funded</span>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <div>
              <h2 className={styles.sectionTitle}>Featured <span className="text-gradient">Opportunities</span></h2>
              <p style={{ color: 'var(--text-muted)' }}>Curated grants and fellowships closing soon.</p>
            </div>
            <button className="button-outline">View All</button>
          </div>

          <div className={styles.grid}>
            {scholarships.map((scholarship) => (
              <div key={scholarship.id} className={`glass-panel ${styles.card}`}>
                <div className={styles.cardHeader}>
                  <div className={styles.amount}>{scholarship.amount}</div>
                  <div className={styles.badge}>{scholarship.type}</div>
                </div>
                <div>
                  <h3 className={styles.cardTitle}>{scholarship.name}</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                    by {scholarship.provider}
                  </p>
                </div>
                <p className={styles.cardDesc}>{scholarship.description}</p>
                <div className={styles.cardFooter}>
                  <div className={styles.deadline}>
                    <span className={styles.deadlineIcon}>⏱</span>
                    {scholarship.deadline}
                  </div>
                  <a href="#" className={styles.applyLink}>
                    Apply Now <span>→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footerGrid}>
            <div>
              <div className={styles.logo}>
                <span className={styles.logoIcon}>✦</span>
                ScholarQuest
              </div>
              <p className={styles.footerDesc}>
                Empowering the next generation of leaders, innovators, and creators by breaking down financial barriers to education across the globe.
              </p>
            </div>
            
            <div>
              <h4 className={styles.footerColTitle}>Students</h4>
              <div className={styles.footerLinks}>
                <a href="#">Browse Scholarships</a>
                <a href="#">Match Calculator</a>
                <a href="#">Essay Resources</a>
                <a href="#">Success Stories</a>
              </div>
            </div>

            <div>
              <h4 className={styles.footerColTitle}>Providers</h4>
              <div className={styles.footerLinks}>
                <a href="#">Post a Scholarship</a>
                <a href="#">Review Applications</a>
                <a href="#">Pricing</a>
                <a href="#">Guidelines</a>
              </div>
            </div>

            <div>
              <h4 className={styles.footerColTitle}>Company</h4>
              <div className={styles.footerLinks}>
                <a href="#">About Us</a>
                <a href="#">Careers</a>
                <a href="#">Press</a>
                <a href="#">Contact</a>
              </div>
            </div>
          </div>

          <div className={styles.footerBottom}>
            <p>&copy; {new Date().getFullYear()} ScholarQuest. All rights reserved.</p>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
