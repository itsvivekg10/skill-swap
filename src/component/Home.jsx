import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowBigRight,Users,BookOpenText, Calendar, ChartArea,MessageSquareMore, Share2,Star  } from 'lucide-react';
import './Home.css';
import Nav from './Nav';
const features = [
  {
    title: "Smart Skill Matching",
    description: "Our AI algorithm connects you with perfect learning partners based on complementary skills...",
    icon: <Users/>  
  },
  {
    title: "Flexible Sessions",
    description: "Schedule one-on-one or group exchanges that fit your schedule, online or in-person...",
    icon: <Calendar/>
  },
  {
    title: "Community Forum",
    description: "Connect with a vibrant community of learners and share knowledge beyond direct exchanges.",
    icon: <MessageSquareMore />
  }, {
    title: "Quality Assurance",
    description: "Rating and feedback system ensures high-quality learning experiences for everyone.",
    icon: <Star />
  }, {
    title: "Resource Library",
    description: "Access and share tutorials, articles, and learning materials with the community.",
    icon: <Share2/>
  }, {
    title: "Progress Tracking",
    description: "Monitor your learning journey with skill assessments and progress analytics Ready to start your learning journey?",
    icon: <BookOpenText/>
  },
  // Add more if needed
];

const Home = () => {



    
  return (
    <>
    <Nav/>
    <section style={{ position: 'relative', overflow: 'hidden', padding: '0rem 3rem',backgroundImage:"linear-gradient(to right, #fdfdfdff, #eaedf3ff)",height:"90vh" }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '10px ' }}>
        <div style={{ display: 'grid', gap: '3rem', alignItems: 'center', gridTemplateColumns: '1fr 1fr' }}>
          {/* Left Content */}
          <div style={{ display: 'flex', flexDirection: 'column',  }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <h1 style={{
                fontSize: '4rem',
                fontWeight: 'bold',
                color: '#1f2937',
                lineHeight: '1.1',
                marginBottom:"0px"
              }}>
                Learn by <span style={{
                  backgroundImage: 'linear-gradient(to right, #9333ea, #3b82f6)',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent'
                }}>Teaching</span>,
                 Teach by <span style={{
                  backgroundImage: 'linear-gradient(to right, #3b82f6, #6366f1)',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent'
                }}>Learning</span>
              </h1>
              <p style={{ fontSize: '1.4rem', color: '#4b5563', lineHeight: '1.1' }}>
                Join a community where everyone is both a teacher and a student. Exchange skills,
                build connections, and grow together through peer-to-peer learning.
              </p>
            </div>

            {/* Buttons */}
            <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
              <Link to="/register">
                <button style={{
                  background: 'linear-gradient(to right, #9333ea, #3b82f6)',
                  color: '#fff',
                  padding: '0.75rem 2rem',
                  fontSize: '1.125rem',
                  display: 'flex',
                  alignItems: 'center',
                  border: 'none',
                  cursor: 'pointer',
                  borderRadius:"5px"
                }}>
                  Start Learning Today <span style={{ marginLeft: '0.5rem' }}>→</span>
                 
                </button>
              </Link>
              <Link to="/explore">
                <button style={{
                    borderColor:"white",
                  border: '2px solid #000',
                  padding: '0.75rem 2rem',
                  fontSize: '1.125rem',
                  backgroundColor: 'white',
                  cursor: 'pointer'
                }}>
                  Explore Skills
                </button>
              </Link>
            </div>

            {/* Stats */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', paddingTop: '1rem' }}>
              {[
                { value: '10K+', label: 'Active Learners' },
                { value: '500+', label: 'Skills Available' },
                { value: '25K+', label: 'Exchanges Made' }
              ].map((stat, i) => (
                <div key={i} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111827' }}>{stat.value}</div>
                  <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Card */}
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'relative', zIndex: 10 }}>
              <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(4px)',
                borderRadius: '1rem',
                padding: '2rem',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {/* Sarah */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{
                      width: '3rem',
                      height: '3rem',
                      borderRadius: '9999px',
                      backgroundImage: 'linear-gradient(to right, #4ade80, #3b82f6)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.25rem',
                      color: '#fff'
                    }}>
                     <Users/>
                    </div>
                    <div>
                      <div style={{ fontWeight: '600', color: '#1f2937' }}>Sarah wants to learn</div>
                      <div style={{ color: '#6b7280' }}>Web Development</div>
                    </div>
                  </div>

                  {/* Exchange Line */}
                  <div style={{
                    borderLeft: '2px dashed #e5e7eb',
                    marginLeft: '1.5rem',
                    paddingLeft: '1.5rem',
                    paddingBottom: '1rem'
                  }}>
                    <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>Offers in exchange</div>
                    <div style={{ fontWeight: '500', color: '#1f2937' }}>Graphic Design + UI/UX</div>
                  </div>

                  {/* Alex */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{
                      width: '3rem',
                      height: '3rem',
                      borderRadius: '9999px',
                      backgroundImage: 'linear-gradient(to right, #a855f7, #ec4899)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.25rem',
                      color: '#fff'
                    }}>
                   <BookOpenText />
                    </div>
                    <div>
                      <div style={{ fontWeight: '600', color: '#1f2937' }}>Alex offers</div>
                      <div style={{ color: '#6b7280' }}>Web Development</div>
                    </div>
                  </div>

                  {/* Connect Button */}
                  <button style={{
                    width: '100%',
                    background: 'linear-gradient(to right, #9333ea, #3b82f6)',
                    color: '#fff',
                    padding: '0.75rem',
                    border: 'none',
                    fontSize: '1rem',
                    fontWeight: '500',
                    cursor: 'pointer',
                    borderRadius:"5px"
                
                  }}>
                    Perfect Match! Connect Now
                  </button>
                </div>
              </div>
            </div>

            {/* Background Blobs */}
            <div style={{
              position: 'absolute',
              top: '-1rem',
              right: '-1rem',
              width: '18rem',
              height: '18rem',
              background: 'linear-gradient(to right, #c084fc, #60a5fa)',
              borderRadius: '9999px',
              opacity: 0.2,
              filter: 'blur(60px)'
            }}></div>
            <div style={{
              position: 'absolute',
              bottom: '-1rem',
              left: '-1rem',
              width: '18rem',
              height: '18rem',
              background: 'linear-gradient(to right, #60a5fa, #6366f1)',
              borderRadius: '9999px',
              opacity: 0.2,
              filter: 'blur(60px)'
            }}></div>
          </div>
        </div>
      </div>
    </section>
   
      {/* Features Section */}
      <section style={{ padding: '5rem 0', backgroundColor: '#f7faff', backdropFilter: 'blur(4px)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#111827' }}>
              Everything you need to{' '}
              <span style={{
                backgroundImage: 'linear-gradient(to right, #9333ea, #3b82f6)',
                WebkitBackgroundClip: 'text',
                color: 'transparent'
              }}>
                learn and teach
              </span>
            </h2>
            <p style={{
              fontSize: '1.25rem',
              color: '#4b5563',
              maxWidth: '768px',
              margin: '1rem auto'
            }}>
              Our platform provides all the tools and features you need for meaningful skill exchanges and community learning.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
            gap: '2rem'
          }}>
            {features.map((feature, index) => (
              <div key={index} style={{
                padding: '1.5rem',
                backgroundColor: 'rgba(255,255,255,0.7)',
                backdropFilter: 'blur(4px)',
                borderRadius: '1rem',
                transition: 'all 0.3s',
                boxShadow: '0 4px 10px rgba(0,0,0,0.05)'
              }}>
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{
                    width: '3rem',
                    height: '3rem',
                    backgroundImage: 'linear-gradient(to right, #9333ea, #3b82f6)',
                    borderRadius: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    color: 'white'
                  }}>
                    {feature.icon}
                    
                  </div>
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#111827' }}>{feature.title}</h3>
                <p style={{ color: '#6b7280', marginTop: '0.5rem' }}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '5rem 0',backgroundColor:"#f0f5ff" }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', padding: '0 1rem',height:"300px" }}>
          <div style={{
            backgroundImage: 'linear-gradient(to right, #9333ea, #3b82f6)',
            borderRadius: '1.5rem',
            padding: '3rem',
            color: 'white',
            height:"250px"
          }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>
              Ready to start your learning journey?
            </h2>
            <p style={{
              fontSize: '1.25rem',
              opacity: 0.9,
              marginBottom: '2rem',
              maxWidth: '640px',
              margin: '0 auto'
            }}>
              Join thousands of learners who are already growing their skills through our community-driven platform.
            </p>
            <Link to="/register">
              <button style={{
                fontSize: '1.125rem',
                padding: '0.75rem 2rem',
                backgroundColor: '#fff',
                color: '#9333ea',
                border: 'none',
                borderRadius: '0.5rem',
                cursor: 'pointer',
                transition: 'background 0.3s',
                marginTop:"10px"
              }}>
                Create Your Profile <span style={{ marginLeft: '0.5rem' }}>➡️</span>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: '#111827', color: 'white', padding: '3rem 1rem' }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '2rem'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <div style={{
                width: '2rem',
                height: '2rem',
                backgroundImage: 'linear-gradient(to right, #9333ea, #3b82f6)',
                borderRadius: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.25rem',
                color: '#fff'
              }}>
               <Share2/>
              </div>
              <span style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>SkillSwap</span>
            </div>
            <p style={{ color: '#9ca3af' }}>
              Connecting learners and teachers in a collaborative community.
            </p>
          </div>
          <div>
            <h3 style={{ fontWeight: '600', marginBottom: '1rem' }}>Platform</h3>
            <ul style={{ listStyle: 'none', padding: 0, color: '#9ca3af' }}>
              <li>Find Skills</li>
              <li>Teach Skills</li>
              <li>Community Forum</li>
              <li>Resources</li>
            </ul>
          </div>
          <div>
            <h3 style={{ fontWeight: '600', marginBottom: '1rem' }}>Support</h3>
            <ul style={{ listStyle: 'none', padding: 0, color: '#9ca3af' }}>
              <li>Help Center</li>
              <li>Guidelines</li>
              <li>Safety</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h3 style={{ fontWeight: '600', marginBottom: '1rem' }}>Company</h3>
            <ul style={{ listStyle: 'none', padding: 0, color: '#9ca3af' }}>
              <li>About</li>
              <li>Privacy</li>
              <li>Terms</li>
              <li>Careers</li>
            </ul>
          </div>
        </div>
        <div style={{ borderTop: '1px solid #1f2937', marginTop: '3rem', paddingTop: '2rem', textAlign: 'center', color: '#9ca3af', fontSize: '0.875rem' }}>
          <p>&copy; 2024 SkillSwap. All rights reserved.</p>
        </div>
      </footer>
   
       </>
  );
}

export default Home;
