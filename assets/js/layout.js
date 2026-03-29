document.addEventListener("DOMContentLoaded", function () {

  // ===== HEADER =====
  const headerHTML = `
  <header id="site-header">
    <div class="container">
      <nav class="nav-inner">
        <a href="index.html" class="logo">Jayesh<span>.</span>SEO</a>
        <ul class="nav-links">
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="services.html">Services</a></li>
          <li><a href="pricing.html">Pricing</a></li>
          <li><a href="blog/index.html">Blog</a></li>
          <li><a href="contact.html" class="nav-cta">Let's Talk</a></li>
        </ul>
        <button class="hamburger" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </nav>
    </div>
  </header>

  <div class="mobile-nav">
    <a href="index.html">Home</a>
    <a href="about.html">About</a>
    <a href="services.html">Services</a>
    <a href="pricing.html">Pricing</a>
    <a href="blog/index.html">Blog</a>
    <a href="contact.html" class="nav-cta">Let's Talk →</a>
  </div>
  `;

  // ===== FOOTER =====
  const year = new Date().getFullYear();

  const footerHTML = `
  <footer id="site-footer">
    <div class="container">
      <div class="footer-grid">
        
        <div class="footer-brand">
          <a href="index.html" class="logo">Jayesh<span>.</span>SEO</a>
          <p>Freelance SEO Expert helping startups and businesses grow organically across India. Transparent, data-driven, result-focused.</p>
          <div class="footer-social">
            <a href="https://linkedin.com" target="_blank">in</a>
            <a href="https://twitter.com" target="_blank">𝕏</a>
            <a href="https://wa.me/919619955997" target="_blank">W</a>
          </div>
        </div>

        <div class="footer-col">
          <h5>Services</h5>
          <ul>
            <li><a href="services.html#technical">Technical SEO</a></li>
            <li><a href="services.html#onpage">On-Page SEO</a></li>
            <li><a href="services.html#content">Content Strategy</a></li>
            <li><a href="services.html#local">Local SEO</a></li>
            <li><a href="services.html#international">International SEO</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h5>Locations</h5>
          <ul>
            <li><a href="locations/india.html">SEO in India</a></li>
            <li><a href="locations/mumbai.html">SEO in Mumbai</a></li>
            <li><a href="locations/delhi.html">SEO in Delhi</a></li>
            <li><a href="locations/bangalore.html">SEO in Bangalore</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h5>Company</h5>
          <ul>
            <li><a href="about.html">About Me</a></li>
            <li><a href="startups/startup-seo.html">Startup SEO</a></li>
            <li><a href="startups/case-studies.html">Case Studies</a></li>
            <li><a href="pricing.html">Pricing</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>

      </div>

      <div class="footer-bottom">
        <p>© ${year} Jayesh Nautiyal. All rights reserved.</p>
        <p style="color:var(--text3);font-size:0.85rem;">
          Freelance SEO Expert India · 
          <a href="tel:+919619955997" style="color:var(--accent)">+91 96199 55997</a>
        </p>
      </div>
    </div>
  </footer>

  <a href="https://wa.me/919619955997" class="whatsapp-float" target="_blank">
    <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
    </svg>
  </a>
  `;

  // ===== INJECT =====
  document.getElementById("header").innerHTML = headerHTML;
  document.getElementById("footer").innerHTML = footerHTML;

});
