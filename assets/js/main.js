(() => {
  const body = document.body;
  const html = document.documentElement;
  const themeToggles = document.querySelectorAll('#themeToggle, #mobileThemeToggle');
  const themeIcons = document.querySelectorAll('#themeIcon, .mobileThemeIcon');
  const directionToggles = document.querySelectorAll('#directionToggle, #mobileDirectionToggle');
  const nav = document.querySelector('.site-nav');
  const year = document.getElementById('year');

  if (year) year.textContent = new Date().getFullYear();

  // ----------------------------------------------------
  // Theme Switching: Sun icon in light, Moon in dark + Pop animation
  // ----------------------------------------------------
  const updateThemeUI = (isDark, animate = false) => {
    if (isDark) {
      document.documentElement.classList.add('dark-mode');
      document.body.classList.add('dark-mode');
      themeIcons.forEach(icon => {
        icon.className = 'bi bi-moon';
      });
      themeToggles.forEach(toggle => {
        toggle.setAttribute('aria-label', 'Switch to light mode');
        toggle.setAttribute('title', 'Switch to light mode');
      });
    } else {
      document.documentElement.classList.remove('dark-mode');
      document.body.classList.remove('dark-mode');
      themeIcons.forEach(icon => {
        icon.className = 'bi bi-sun';
      });
      themeToggles.forEach(toggle => {
        toggle.setAttribute('aria-label', 'Switch to dark mode');
        toggle.setAttribute('title', 'Switch to dark mode');
      });
    }

    if (animate) {
      themeToggles.forEach(toggle => {
        toggle.classList.remove('pop');
        void toggle.offsetWidth; // Reflow
        toggle.classList.add('pop');
        setTimeout(() => toggle.classList.remove('pop'), 400);
      });
    }
  };

  const savedTheme = localStorage.getItem('aeronest-theme');
  const isInitialDark = savedTheme === 'dark';
  updateThemeUI(isInitialDark, false);

  themeToggles.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const isCurrentlyDark = document.documentElement.classList.contains('dark-mode') || document.body.classList.contains('dark-mode');
      const nextIsDark = !isCurrentlyDark;
      updateThemeUI(nextIsDark, true);
      localStorage.setItem('aeronest-theme', nextIsDark ? 'dark' : 'light');
    });
  });

  // ----------------------------------------------------
  // Direction Switching: LTR / RTL Persistence Across All Pages
  // ----------------------------------------------------
  const updateDirectionUI = (dir, animate = false) => {
    const cleanDir = (dir && dir.toLowerCase() === 'rtl') ? 'rtl' : 'ltr';
    html.setAttribute('dir', cleanDir);

    directionToggles.forEach(btn => {
      const dirText = btn.querySelector('.direction-text');
      if (dirText) dirText.textContent = cleanDir.toUpperCase();
      btn.setAttribute('aria-label', `Switch text direction. Current: ${cleanDir.toUpperCase()}`);
      btn.setAttribute('title', `Switch to ${cleanDir === 'rtl' ? 'LTR' : 'RTL'}`);

      if (animate) {
        btn.classList.remove('pop');
        void btn.offsetWidth;
        btn.classList.add('pop');
        setTimeout(() => btn.classList.remove('pop'), 400);
      }
    });
  };

  const savedDirection = localStorage.getItem('aeronest-direction') || 'ltr';
  updateDirectionUI(savedDirection, false);

  directionToggles.forEach(btn => {
    btn.addEventListener('click', () => {
      const currentDir = html.getAttribute('dir') || 'ltr';
      const nextDir = currentDir.toLowerCase() === 'ltr' ? 'rtl' : 'ltr';
      localStorage.setItem('aeronest-direction', nextDir);
      updateDirectionUI(nextDir, true);
    });
  });

  // ----------------------------------------------------
  // Navbar Scrolled State
  // ----------------------------------------------------
  const onScroll = () => {
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 25);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ----------------------------------------------------
  // Nav Links Active State based on Current Page URL
  // ----------------------------------------------------
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href) {
      const linkFile = href.split('#')[0];
      if (
        (currentPath === '' && linkFile === 'index.html') ||
        (currentPath === 'index.html' && (linkFile === 'index.html' || linkFile === '' || linkFile === '#home')) ||
        (currentPath !== '' && currentPath === linkFile) ||
        (currentPath.includes('blog-detail') && linkFile === 'blog.html')
      ) {
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      }
    }

    link.addEventListener('click', () => {
      const menu = document.getElementById('mainNav');
      if (menu && menu.classList.contains('show') && window.bootstrap) {
        bootstrap.Collapse.getOrCreateInstance(menu).hide();
      }
    });
  });

  // ----------------------------------------------------
  // Gallery Filtering (for gallery.html)
  // ----------------------------------------------------
  const filterBtns = document.querySelectorAll('.gallery-filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-grid-item');

  if (filterBtns.length > 0 && galleryItems.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-filter');

        galleryItems.forEach(item => {
          if (filter === 'all' || item.getAttribute('data-category') === filter) {
            item.style.display = 'block';
            item.style.opacity = '0';
            setTimeout(() => { item.style.opacity = '1'; }, 50);
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }

  // ----------------------------------------------------
  // Demo Reel Modal (Cinematic Mountain Drone Flight Simulation)
  // ----------------------------------------------------
  const modal = document.getElementById('demoModal');
  const watchDemoBtn = document.getElementById('watchDemo');
  const closeDemoBtn = document.getElementById('closeDemo');

  if (modal) {
    const flightBg = document.getElementById('droneFlightBg');
    const playPauseBtn = document.getElementById('reelPlayPauseBtn');
    const playIcon = document.getElementById('reelPlayIcon');
    const centerPlayBtn = document.getElementById('reelCenterPlay');
    const centerPlayIcon = document.getElementById('centerPlayIcon');
    const currentTimeEl = document.getElementById('reelCurrentTime');
    const hudTimeEl = document.getElementById('reelHudTime');
    const progressFill = document.getElementById('reelProgressFill');
    const progressHandle = document.getElementById('reelProgressHandle');
    const progressContainer = document.getElementById('reelProgressContainer');
    const hudAlt = document.getElementById('hudAlt');
    const hudSpeed = document.getElementById('hudSpeed');
    const hudGimbal = document.getElementById('hudGimbal');
    const hudLocation = document.getElementById('hudLocation');
    const sceneBtn1 = document.getElementById('sceneBtn1');
    const sceneBtn2 = document.getElementById('sceneBtn2');
    const expandBtn = document.getElementById('reelExpandBtn');
    const expandIcon = document.getElementById('reelExpandIcon');
    const demoDialog = document.getElementById('demoDialog');
    const audioBtn = document.getElementById('reelAudioToggle');
    const audioIcon = document.getElementById('reelAudioIcon');

    const TOTAL_DURATION = 30; // 30-second flight showreel
    let elapsedSeconds = 0;
    let isPlaying = false;
    let playInterval = null;
    let audioCtx = null;
    let noiseNode = null;
    let gainNode = null;
    let isAudioActive = false;

    // Helper: format MM:SS
    const formatTime = (secs) => {
      const m = Math.floor(secs / 60);
      const s = Math.floor(secs % 60);
      return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    };

    // Update Telemetry Display
    const updateTelemetry = () => {
      if (currentTimeEl) currentTimeEl.textContent = formatTime(elapsedSeconds);
      if (hudTimeEl) hudTimeEl.textContent = formatTime(elapsedSeconds);

      const pct = (elapsedSeconds / TOTAL_DURATION) * 100;
      if (progressFill) progressFill.style.width = `${pct}%`;
      if (progressHandle) progressHandle.style.left = `${pct}%`;

      // Subtle dynamic telemetry based on flight timeline
      if (hudAlt) {
        const baseAlt = 412;
        const altVar = Math.round(baseAlt + Math.sin(elapsedSeconds * 0.4) * 18);
        hudAlt.textContent = `${altVar} FT`;
      }
      if (hudSpeed) {
        const baseSpeed = 34.2;
        const speedVar = (baseSpeed + Math.cos(elapsedSeconds * 0.3) * 2.4).toFixed(1);
        hudSpeed.textContent = `${speedVar} MPH`;
      }
      if (hudGimbal) {
        const gimbalVar = (-18.5 + Math.sin(elapsedSeconds * 0.25) * 4).toFixed(1);
        hudGimbal.textContent = `${gimbalVar}°`;
      }
    };

    // Synthesize subtle drone/wind flight audio via Web Audio API (zero external audio file dependencies)
    const initFlightAudio = () => {
      if (audioCtx) return;
      try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!AudioContext) return;
        audioCtx = new AudioContext();

        const bufferSize = 2 * audioCtx.sampleRate;
        const noiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        let lastOut = 0.0;
        for (let i = 0; i < bufferSize; i++) {
          const white = Math.random() * 2 - 1;
          output[i] = (lastOut + 0.02 * white) / 1.02; // Brown noise (deep wind rumble)
          lastOut = output[i];
          output[i] *= 3.5;
        }

        noiseNode = audioCtx.createBufferSource();
        noiseNode.buffer = noiseBuffer;
        noiseNode.loop = true;

        const filter = audioCtx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = 240;

        gainNode = audioCtx.createGain();
        gainNode.gain.value = 0.0;

        noiseNode.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        noiseNode.start(0);
      } catch (err) {
        console.warn('Flight audio synth unavailable', err);
      }
    };

    const setFlightAudio = (enable) => {
      initFlightAudio();
      isAudioActive = enable;
      if (gainNode && audioCtx) {
        if (audioCtx.state === 'suspended' && enable) {
          audioCtx.resume();
        }
        gainNode.gain.setTargetAtTime(enable && isPlaying ? 0.18 : 0, audioCtx.currentTime, 0.2);
      }
      if (audioIcon) {
        audioIcon.className = enable ? 'bi bi-volume-up text-info' : 'bi bi-volume-mute';
      }
    };

    // Playback state control
    const setPlayState = (playing) => {
      isPlaying = playing;
      if (flightBg) {
        if (playing) {
          flightBg.classList.add('is-playing');
        } else {
          flightBg.classList.remove('is-playing');
        }
      }

      if (playIcon) {
        playIcon.className = playing ? 'bi bi-pause-fill' : 'bi bi-play-fill';
      }
      if (centerPlayBtn) {
        if (playing) {
          centerPlayBtn.classList.add('is-hidden');
        } else {
          centerPlayBtn.classList.remove('is-hidden');
        }
      }
      if (centerPlayIcon) {
        centerPlayIcon.className = playing ? 'bi bi-pause-fill' : 'bi bi-play-fill';
      }

      if (playing) {
        if (!playInterval) {
          playInterval = setInterval(() => {
            elapsedSeconds += 0.25;
            if (elapsedSeconds >= TOTAL_DURATION) {
              elapsedSeconds = 0; // Loop flight seamlessly
            }
            updateTelemetry();
          }, 250);
        }
        if (isAudioActive && gainNode && audioCtx) {
          gainNode.gain.setTargetAtTime(0.18, audioCtx.currentTime, 0.2);
        }
      } else {
        if (playInterval) {
          clearInterval(playInterval);
          playInterval = null;
        }
        if (gainNode && audioCtx) {
          gainNode.gain.setTargetAtTime(0, audioCtx.currentTime, 0.2);
        }
      }
    };

    const togglePlay = () => {
      setPlayState(!isPlaying);
    };

    // Seek via progress bar
    if (progressContainer) {
      progressContainer.addEventListener('click', (e) => {
        const rect = progressContainer.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const pct = Math.max(0, Math.min(1, clickX / rect.width));
        elapsedSeconds = pct * TOTAL_DURATION;
        updateTelemetry();
      });
    }

    if (playPauseBtn) playPauseBtn.addEventListener('click', (e) => { e.stopPropagation(); togglePlay(); });
    if (centerPlayBtn) centerPlayBtn.addEventListener('click', (e) => { e.stopPropagation(); togglePlay(); });

    // Scene switchers (Misty River Canyon vs Alpine Summit Pass)
    if (sceneBtn1 && sceneBtn2 && flightBg) {
      sceneBtn1.addEventListener('click', (e) => {
        e.stopPropagation();
        sceneBtn1.classList.add('active');
        sceneBtn2.classList.remove('active');
        flightBg.classList.remove('is-alpine');
        if (hudLocation) hudLocation.textContent = 'ALPINE RIVER CANYON';
      });
      sceneBtn2.addEventListener('click', (e) => {
        e.stopPropagation();
        sceneBtn2.classList.add('active');
        sceneBtn1.classList.remove('active');
        flightBg.classList.add('is-alpine');
        if (hudLocation) hudLocation.textContent = 'ALPINE SUMMIT PASS';
      });
    }

    // Theater/Expanded width toggle
    if (expandBtn && demoDialog) {
      expandBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isExp = demoDialog.classList.toggle('is-expanded');
        if (expandIcon) {
          expandIcon.className = isExp ? 'bi bi-arrows-angle-contract' : 'bi bi-arrows-angle-expand';
        }
      });
    }

    // Audio toggle
    if (audioBtn) {
      audioBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        setFlightAudio(!isAudioActive);
      });
    }

    const openModal = () => {
      modal.classList.add('show');
      modal.setAttribute('aria-hidden', 'false');
      elapsedSeconds = 0;
      updateTelemetry();
      setPlayState(true);
    };

    const closeModal = () => {
      modal.classList.remove('show');
      modal.setAttribute('aria-hidden', 'true');
      setPlayState(false);
      if (gainNode && audioCtx) {
        gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
      }
    };

    if (watchDemoBtn) watchDemoBtn.addEventListener('click', openModal);
    if (closeDemoBtn) closeDemoBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && modal.classList.contains('show')) closeModal(); });
  }

  // ----------------------------------------------------
  // Booking Form & Newsletter Submissions
  // ----------------------------------------------------
  const shootForm = document.getElementById('shootForm');
  if (shootForm) {
    shootForm.addEventListener('submit', e => {
      e.preventDefault();
      if (!shootForm.reportValidity()) return;
      const msg = document.getElementById('formMessage');
      if (msg) {
        msg.textContent = 'Thanks! Your aerial shoot enquiry has been received. Our flight coordinator will contact you within 24 hours.';
        msg.className = 'text-info fw-bold';
      }
      shootForm.reset();
    });
  }

  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', e => {
      e.preventDefault();
      const msg = document.getElementById('newsletterMessage');
      if (msg) {
        msg.textContent = 'Thanks for subscribing! Check your inbox for aerial updates.';
        msg.className = 'text-info';
      }
      newsletterForm.reset();
    });
  }

  // ----------------------------------------------------
  // Back to Top Smooth Scroll to Top / Hero Section
  // ----------------------------------------------------
  document.querySelectorAll('a[href="#top"], .back-to-top-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
      const hero = document.querySelector('.hero-section, .sd-hero, #home, [id$="-hero"]');
      if (hero) {
        hero.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      if (window.history && window.history.replaceState) {
        window.history.replaceState(null, null, window.location.pathname + window.location.search);
      }
    });
  });
})();
