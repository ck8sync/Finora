import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './LandingPage.css'; // Import the CSS file

function LandingPage() {
    useEffect(() => {
        // Apply theme preference on load
        const savedTheme = localStorage.getItem('theme') || 'light'; // Set 'light' as default
        if (savedTheme === 'light') {
            document.body.classList.add('light-theme');
            document.getElementById('theme-icon').textContent = '🌙';
        } else {
            document.body.classList.remove('light-theme'); // Ensure dark theme is applied if savedTheme is 'dark'
            document.getElementById('theme-icon').textContent = '☀️';
        }
    }, []);

    const toggleTheme = () => {
        document.body.classList.toggle('light-theme');
        const isLight = document.body.classList.contains('light-theme');
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
        document.getElementById('theme-icon').textContent = isLight ? '🌙' : '☀️';
    };

    return (
        <div className="container">
            <header className="header">
                <div className="logo">Finora Hub</div>
                <div className="nav-actions">
                    <button className="theme-toggle-btn" onClick={toggleTheme}>
                        <span id="theme-icon">☀️</span>
                    </button>
                    <Link to="/login" className="nav-button"> {/* Use Link for navigation */}
                        Login / Register
                    </Link>
                </div>
            </header>

            <div className="market-ticker">
                <div className="ticker-inner">
                    <span className="ticker-item">NIFTY <span className="change up">▲ 0.8%</span></span>
                    <span className="ticker-item">SENSEX <span className="change up">▲ 0.6%</span></span>
                    <span className="ticker-item">BANKNIFTY <span className="change down">▼ 0.2%</span></span>
                    <span className="ticker-item">GOLD <span className="change up">▲ 0.4%</span></span>
                    <span className="ticker-item">BTC <span className="change down">▼ 1.3%</span></span>
                    <span className="ticker-item">NASDAQ <span className="change up">▲ 0.9%</span></span>
                    
                    <span className="ticker-item">NIFTY <span className="change up">▲ 0.8%</span></span>
                    <span className="ticker-item">SENSEX <span className="change up">▲ 0.6%</span></span>
                    <span className="ticker-item">BANKNIFTY <span className="change down">▼ 0.2%</span></span>
                    <span className="ticker-item">GOLD <span className="change up">▲ 0.4%</span></span>
                    <span className="ticker-item">BTC <span className="change down">▼ 1.3%</span></span>
                    <span className="ticker-item">NASDAQ <span className="change up">▲ 0.9%</span></span>
                </div>
            </div>
            
            <section className="hero-section">
                <h2>Level Up Your Investing IQ</h2>
                <p className="subtitle">Your fast track to market mastery. Get daily insights, weekly breakdowns, and bite-sized lessons.</p>
                <p className="disclaimer-small">For education, not trading advice.</p>
            </section>

            <section className="access-section">
                <h2>Your All-Access Pass to Market Insights</h2>
                <div className="offer-cards">
                    <div className="offer-card card-1">
                        <h3>Daily Market Brief</h3>
                        <p>Start your day with a concise snapshot of global markets, key trends, and expert analysis.</p>
                    </div>
                    <div className="offer-card card-2">
                        <h3>Weekly Market Recap</h3>
                        <p>Dive deeper into sector performance, investment strategies, and actionable takeaways.</p>
                    </div>
                    <div className="offer-card card-3">
                        <h3>3-Minute Market Lessons</h3>
                        <p>Unlock essential investing concepts with quick, easy-to-understand lessons.</p>
                    </div>
                </div>
            </section>

            <div className="premium-unlock" id="premium-unlock-section">
                <h2>Unlock Premium Insights - Absolutely Free!</h2>
                <p>Get exclusive access to advanced market analysis and personalized learning tools.</p>
                
                <ul className="premium-features">
                    <li>Free Access</li>
                    <li>Daily Market Briefs</li>
                    <li>Weekly Deep Dives</li>
                    <li>Interactive Learning Modules</li>
                </ul>
                
                <Link to="/sign-up" className="access-button">Get Free Access</Link> {/* Use Link for navigation */}
            </div>

            <section className="pulse-section">
                <h2>Market Pulse: Stay Ahead of the Curve</h2>
                <p className="subtitle">Get instant insights into key market trends and developments.</p>
                
                <div className="market-pulse-grid">
                    <div className="pulse-card">
                        <h4>Sector Spotlight</h4>
                        <h3>Tech & Pharma on the Rise</h3>
                        <p>Discover the driving forces behind the tech and healthcare sectors.</p>
                    </div>
                    <div className="pulse-card">
                        <h4>Stock to Watch</h4>
                        <h3>Reliance Surges Ahead</h3>
                        <p>Uncover the factors propelling Reliance's impressive Q2 performance.</p>
                    </div>
                    <div className="pulse-card">
                        <h4>Market Insights</h4>
                        <h3>Top 3 Things to Track</h3>
                        <p>Stay informed about inflation, earnings, and crude oil's impact on the market.</p>
                    </div>
                </div>
            </section>

            <div className="about-section">
                <h2>Vibes Check: Who Are We?</h2>
                <p>We're Finora Hub, and we're here to make markets **make sense**. Ditch the financial jargon and 100-page reports. We deliver the genuine market truth—clear, fast, and always on point, so you can stop scrolling and start succeeding.</p>
                <p style={{ fontWeight: 700, color: 'var(--primary-color)', marginTop: '20px' }}>
                    Brought to you by **8sync Hive**. We're the people who build better futures.
                </p>
                <p style={{ fontSize: '0.85em', color: 'var(--light-text)', marginTop: '5px' }}>
                    (Just knowledge, no crystal balls or financial advice, promise.)
                </p>
            </div>

            <div className="disclaimer-section">
                <h3 style={{ color: 'var(--danger-color)', marginTop: 0 }}>Important Disclaimer</h3>
                <p>All content on Finora Hub — including articles, videos, charts, and dashboards — is intended solely for **educational and informational purposes**.</p>
                <p>We do not provide investment, trading, or financial advice, nor do we recommend buying or selling any securities, stocks, or financial instruments.</p>
                <p>Users should consult a qualified financial advisor before making any investment decisions. Market data and insights are provided as-is and may not represent real-time accuracy.</p>
            </div>

            <footer className="footer">
                <p style={{ fontSize: '1em', color: 'var(--text-color)' }}>**Finora Hub**</p>
                <p>Empowering your market journey with clarity and confidence.</p>
                <p>&copy; 2025 Finora Hub - An 8sync Hive Initiative. <br /> For educational purposes only. Not financial advice.</p>
            </footer>
        </div>
    );
}

export default LandingPage;