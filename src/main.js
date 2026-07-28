/**
 * Main Interactivity Script for Anshuman Yadav Portfolio Website
 */

document.addEventListener('DOMContentLoaded', () => {
  initTerminal();
  initSkillsFilter();
  initContactForm();
  initMobileNav();
});

/* ==========================================================================
   1. Interactive Terminal CLI
   ========================================================================== */
function initTerminal() {
  const terminalInput = document.getElementById('terminal-input');
  const terminalOutput = document.getElementById('terminal-output');
  const quickCmdBtns = document.querySelectorAll('.terminal-quick-cmds button');

  if (!terminalInput || !terminalOutput) return;

  const COMMANDS = {
    help: `Available commands:<br/>
      • <span class="term-highlight">whoami</span>     : Summary of Anshuman Yadav's profile<br/>
      • <span class="term-highlight">experience</span> : Recent roles at Concentrix & Teleperformance<br/>
      • <span class="term-highlight">skills</span>     : Core cloud, Linux, & networking stack<br/>
      • <span class="term-highlight">projects</span>   : Deployed cloud platforms & AI tools<br/>
      • <span class="term-highlight">certs</span>      : Certifications from Google & Microsoft<br/>
      • <span class="term-highlight">contact</span>    : Phone & email contact info<br/>
      • <span class="term-highlight">clear</span>      : Clear shell screen`,
    
    whoami: `<strong>Anshuman Yadav</strong> — Senior Cloud Engineer<br/>
      GCP, Azure & M365 Infrastructure | Python, CI/CD & Linux<br/>
      Specialized in Microsoft 365, OneDrive Cloud, Azure, GCP, and Linux administration.`,

    experience: `1. <strong>Cloud Support Engineer @ Concentrix</strong> (May 2024 - Present)<br/>
      &nbsp;&nbsp;• Microsoft 365, OneDrive, AVD, CLI Troubleshooting, RCA, 24/7 Monitoring.<br/>
      2. <strong>Technical Support Engineer @ Teleperformance</strong> (Apr 2023 - May 2024)<br/>
      &nbsp;&nbsp;• Server maintenance, access control, global user troubleshooting.`,

    skills: `Cloud & Infra : Azure, Microsoft 365, Render, GitHub CI/CD<br/>
      Linux & OS    : Debian/Linux CLI, NGINX, Windows CMD, SSL<br/>
      Networking    : TCP/IP, DNS, OSPF, VLAN, Gateways, Firewalls<br/>
      Languages     : Python, JavaScript, HTML5, CSS3, Tailwind, Bootstrap`,

    projects: `1. <strong>Cloud Infra Portfolio</strong> : https://anshuman160.github.io/my-portfolio/<br/>
      2. <strong>IAESCON 2026 Portal</strong> : [Classified as per client request]<br/>
      3. <strong>Sharda Foundation Site</strong> : https://sharda-foundation.onrender.com<br/>
      4. <strong>Cancer Medical AI Bot</strong> : https://medical-bot-on8l.onrender.com`,

    certs: `• Google Cloud Technical Series (April 2025)<br/>
      • Google Cloud Digital Leader Prep (LinkedIn, April 2024)<br/>
      • Microsoft System Administration Essentials (March 2024)<br/>
      • Linux Command Line Mastery (LinkedIn, March 2024)<br/>
      • Google Hash Code 2022 Round 1`,

    contact: `Email    : <a href="mailto:yadavanshoo123@gmail.com" class="term-highlight">yadavanshoo123@gmail.com</a><br/>
      Phone    : <a href="tel:7704867410" class="term-highlight">+91 7704867410</a><br/>
      Location : Jaunpur / Gurgaon, Uttar Pradesh, India`
  };

  function executeCommand(cmdStr) {
    const rawCmd = cmdStr.trim().toLowerCase();
    
    // Add command echo line
    const cmdLine = document.createElement('div');
    cmdLine.className = 'term-line';
    cmdLine.innerHTML = `<span class="term-prompt">anshuman@cloud-shell:~$</span> <span class="term-cmd">${rawCmd}</span>`;
    terminalOutput.appendChild(cmdLine);

    if (rawCmd === 'clear') {
      terminalOutput.innerHTML = '';
      return;
    }

    const response = document.createElement('div');
    response.className = 'term-response';

    if (COMMANDS[rawCmd]) {
      response.innerHTML = COMMANDS[rawCmd];
    } else if (rawCmd === '') {
      return;
    } else {
      response.innerHTML = `Command not recognized: '${rawCmd}'. Type <span class="term-highlight">'help'</span> for list of commands.`;
    }

    terminalOutput.appendChild(response);
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
  }

  terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      executeCommand(terminalInput.value);
      terminalInput.value = '';
    }
  });

  quickCmdBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const cmd = btn.dataset.cmd;
      executeCommand(cmd);
    });
  });
}

/* ==========================================================================
   2. Skills Filter Tabs
   ========================================================================== */
function initSkillsFilter() {
  const tabs = document.querySelectorAll('.filter-tabs .tab-btn');
  const cards = document.querySelectorAll('.skills-grid .skill-card');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.dataset.filter;

      cards.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   3. Real Email Contact Form Handling (FormSubmit & Mailto Fallback)
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const statusEl = document.getElementById('form-status');
  const submitBtn = document.getElementById('submit-btn');

  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    submitBtn.textContent = 'Sending Message...';
    submitBtn.disabled = true;

    const name = document.getElementById('form-name').value;
    const email = document.getElementById('form-email').value;
    const subject = document.getElementById('form-subject').value;
    const message = document.getElementById('form-message').value;

    const payload = {
      name: name,
      email: email,
      _subject: `[Portfolio Contact] ${subject}`,
      message: message,
      _captcha: 'false'
    };

    try {
      const response = await fetch('https://formsubmit.co/ajax/yadavanshoo123@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (response.ok || data.success === 'true') {
        statusEl.className = 'form-status success';
        statusEl.textContent = '✓ Message sent! Your note was delivered to Anshuman\'s inbox (yadavanshoo123@gmail.com).';
        statusEl.classList.remove('hidden');
        form.reset();
      } else {
        throw new Error('FormSubmit submission error');
      }
    } catch (err) {
      // Direct Mailto Fallback
      const mailtoUrl = `mailto:yadavanshoo123@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
      window.location.href = mailtoUrl;

      statusEl.className = 'form-status success';
      statusEl.textContent = '✓ Opening mail client to deliver your message to yadavanshoo123@gmail.com...';
      statusEl.classList.remove('hidden');
    } finally {
      submitBtn.textContent = 'Send Message';
      submitBtn.disabled = false;
      setTimeout(() => statusEl.classList.add('hidden'), 7000);
    }
  });
}

/* ==========================================================================
   5. Mobile Navigation Menu
   ========================================================================== */
function initMobileNav() {
  const toggleBtn = document.getElementById('mobile-toggle');
  const navLinks = document.getElementById('nav-links');

  if (!toggleBtn || !navLinks) return;

  toggleBtn.addEventListener('click', () => {
    const isOpen = navLinks.style.display === 'flex';
    navLinks.style.display = isOpen ? 'none' : 'flex';
    if (!isOpen) {
      navLinks.style.flexDirection = 'column';
      navLinks.style.position = 'absolute';
      navLinks.style.top = '100%';
      navLinks.style.left = '0';
      navLinks.style.width = '100%';
      navLinks.style.background = '#0b0f19';
      navLinks.style.padding = '1.5rem';
      navLinks.style.borderBottom = '1px solid rgba(255,255,255,0.08)';
    }
  });
}
