// AeroNest Official Blog Dataset
// Shared across blog.html and blog-details.html

const AERONEST_BLOGS = [
  {
    id: 'luxury-real-estate-aerial-speed',
    title: 'How Aerial Perspectives Accelerate Luxury Real Estate Sales: A 2026 Deep Dive',
    category: 'Real Estate Photography',
    image: 'assets/gallery-realestate-1.jpg',
    desc: 'Properties showcasing 4K drone cinematography receive up to 68% more qualified inquiries and sell 30% faster. Here is how top real estate firms utilize altitude for high conversion.',
    date: 'Nov 12, 2026',
    readTime: '6 min read',
    author: 'Priya Sharma',
    authorRole: 'Senior Architectural Cinematographer',
    authorImg: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
    views: '16.4K reads',
    isFeatured: true,
    isPopular: true,
    isEditorsPick: true,
    isInsight: false,
    takeaways: [
      'Twilight golden-hour aerial sweeps increase buyer engagement duration on listings by 2.4x.',
      'Graphic property boundary line overlays eliminate parcel confusion for multi-acre estates.',
      'Continuous FPV interior-to-exterior one-take videos generate viral traction across Instagram Reels and TikTok.',
      'MLS compliance requires both branded marketing cuts and unbranded syndication-ready masters.'
    ],
    fullBody: `
      <p class="lead">In high-end real estate, buyers aren't merely purchasing square footage—they are investing in geography, privacy, and architectural grandeur. Traditional ground-level photography captures rooms, but aerial drone cinematography captures lifestyle and context.</p>

      <h2>The Shift to Elevated Visual Storytelling</h2>
      <p>Data from international luxury brokerages indicates that listings featuring cinema-grade aerial video receive up to 68% more qualified inquiries than listings with ground photos alone. By revealing a property's proximity to coastlines, private golf courses, and mountain backdrops, drones provide immediate spatial comprehension that static photos cannot match.</p>

      <div class="article-callout">
        <h5 class="fw-bold mb-2"><i class="bi bi-lightbulb-fill text-info me-2"></i>Key Industry Finding</h5>
        <p class="mb-0">Properties in the $2M+ bracket that incorporated twilight drone sweeps and continuous FPV walkthrough tours spent an average of 18 fewer days on market during the 2025–2026 season.</p>
      </div>

      <h2>Three Essential Aerial Shots Every Real Estate Film Requires</h2>
      <p>When our flight crew approaches a residential estate, we follow a carefully storyboarded shot progression designed to build emotional resonance:</p>
      <ul>
        <li><strong>The Grand Establishing Reveal:</strong> Starting from high altitude (300–400 ft AGL) and descending along an angled vector that reveals the home, grounds, and distant horizon in a single fluid motion.</li>
        <li><strong>The Architectural Orbit:</strong> A smooth 360-degree orbital sweep maintaining consistent distance and camera elevation to highlight cantilevered terraces, rooftop decks, and pool reflections.</li>
        <li><strong>The Twilight Horizon Transition:</strong> Filmed during civil twilight when interior warm lighting contrasts dramatically with the deep indigo evening sky.</li>
      </ul>

      <h2>The Role of Micro-FPV in High-End Listings</h2>
      <p>The newest frontier in architectural cinematography is the micro-FPV one-take fly-through. Using lightweight prop-guarded aircraft, skilled pilots glide seamlessly through grand atriums, past double-height living rooms, out sliding terrace glass, and over the infinity pool in one continuous unbroken shot. This creates immersive spatial continuity that allows prospective buyers to experience walking through the residence before their first physical showing.</p>

      <h2>Regulatory Compliance &amp; Turnaround Expectations</h2>
      <p>Commercial drone operations require strict FAA Part 107 certification and direct digital LAANC airspace authorization. At AeroNest, all residential flights include full airspace verification, neighboring property privacy buffers, and delivery within 24 to 48 hours in both branded formats and unbranded MLS-compliant versions.</p>
    `
  },
  {
    id: 'drone-cinematography-golden-hour',
    title: 'Cinematic Lighting for Golden Hour Drone Cinematography',
    category: 'Aerial Videography',
    image: 'assets/gallery-cinematic-1.jpg',
    desc: 'Mastering low-angle sun flare, ND filter selection, and dynamic range preservation to turn landscape video into high-value commercial art.',
    date: 'Nov 08, 2026',
    readTime: '7 min read',
    author: 'Marcus Vance',
    authorRole: 'Chief Flight Director & Pilot',
    authorImg: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
    views: '14.8K reads',
    isFeatured: false,
    isPopular: true,
    isEditorsPick: true,
    isInsight: true,
    takeaways: [
      'The 15-minute window right before sunset offers the lowest optical haze and longest shadow relief.',
      'Always shoot in 10-bit D-Log with exposure balanced to protect peak sky highlights.',
      'Pairing a 3-stop or 4-stop neutral density (ND) filter maintains the 180-degree cinema shutter angle.',
      'Flying towards the sun with the gimbal tilted 15 degrees down yields natural lens flare without sensor washout.'
    ],
    fullBody: `
      <p class="lead">Golden hour is universally celebrated by filmmakers, but at 300 feet above the ground, the physics of golden hour change dramatically. Horizon haze dissipates, long landscape shadows carve deep textural relief across mountains, and water bodies mirror the sky like liquid gold.</p>

      <h2>Managing Extreme Dynamic Range from the Air</h2>
      <p>The greatest challenge during golden hour drone flight is extreme contrast. The sun is directly in or near the camera frame, creating dynamic range spans exceeding 14 stops. Shooting in 8-bit Rec.709 will inevitably blow out skies or crush shadows to black. To capture the full spectrum, our crew locks into 10-bit Apple ProRes 422 HQ or 8K CinemaDNG in native D-Log.</p>

      <div class="article-callout">
        <h5 class="fw-bold mb-2"><i class="bi bi-camera-reels text-info me-2"></i>Cinema Shutter Rule</h5>
        <p class="mb-0">To achieve natural cinematic motion blur that looks organic to human eyes, the shutter speed must remain double the frame rate (e.g., 1/120s at 60fps). Quality ND/PL filters are essential to avoid overexposure without having to stop down past f/5.6.</p>
      </div>

      <h2>Camera Trajectories that Maximize Golden Light</h2>
      <p>Light changes character minute by minute during golden hour. Here are the three flight movements we prioritize:</p>
      <ul>
        <li><strong>Cross-Lit Parallax Passes:</strong> Flying perpendicular to the setting sun so ridges, trees, and buildings cast long, dramatic shadows across the frame.</li>
        <li><strong>Backlit Sun Crest Reveals:</strong> Starting the drone hidden behind a mountain peak or tree canopy, then slowly rising until the sun bursts over the crest with a radiant starburst flare.</li>
        <li><strong>Nadir Horizon Tilt-Up:</strong> Beginning with the gimbal pointed straight down at textured terrain, then slowly tilting up to reveal the glowing horizon over a 15-second sweep.</li>
      </ul>
    `
  },
  {
    id: 'drone-lidar-3d-mapping-architects',
    title: 'Urban Drone Mapping: Precision 3D Surveys for Architects & Civil Engineers',
    category: 'Drone Technology',
    image: 'assets/gallery-commercial-1.jpg',
    desc: 'How airborne LiDAR and high-resolution photogrammetry streamline site inspection, BIM modeling, and civil infrastructure planning milestones.',
    date: 'Oct 30, 2026',
    readTime: '5 min read',
    author: 'Elena Rostova',
    authorRole: 'GIS & Photogrammetry Lead',
    authorImg: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80',
    views: '11.2K reads',
    isFeatured: false,
    isPopular: false,
    isEditorsPick: true,
    isInsight: true,
    takeaways: [
      'Drone photogrammetry delivers sub-centimeter positional accuracy across multi-acre sites.',
      'Airborne LiDAR penetrates dense tree canopies to map true bare-earth ground elevation contours.',
      'Repeatable automated flight paths provide side-by-side monthly construction milestone comparisons.',
      'Direct CAD and BIM export allows engineering teams to import point clouds into Revit and Civil 3D.'
    ],
    fullBody: `
      <p class="lead">Traditional land surveying required weeks of ground crews walking uneven terrain with total stations. Today, dual-frequency RTK drones equipped with photogrammetric sensors and airborne LiDAR capture millions of data points in a single 30-minute flight mission.</p>

      <h2>Photogrammetry vs. LiDAR: Which Does Your Project Need?</h2>
      <p>Photogrammetry captures overlapping high-resolution RGB imagery and uses software algorithms to triangulate 3D point clouds and textured mesh models. It is ideal for visual inspection, stockpiling volume calculations, and architectural context.</p>
      <p>LiDAR, by contrast, fires hundreds of thousands of laser pulses per second, measuring the time of flight for each pulse. Because laser pulses slip between leaves and branches, LiDAR can map true bare-earth digital elevation models (DEM) even through dense forest cover.</p>

      <h2>Seamless BIM &amp; CAD Integration</h2>
      <p>All AeroNest geospatial deliverables are tied to surveyed ground control points (GCPs) and post-processed kinematic (PPK) correction networks, guaranteeing 1–2 centimeter horizontal and vertical accuracy ready for direct import into AutoCAD, Autodesk Civil 3D, and Bentley MicroStation.</p>
    `
  },
  {
    id: 'coastal-marine-drone-flight-safety',
    title: 'Navigating Coastal Winds & Marine Drone Flight Protocols',
    category: 'Tips & Tutorials',
    image: 'assets/gallery-nature-1.jpg',
    desc: 'Essential pre-flight checklists and flight safety maneuvers when operating over open oceans, salt spray fog, and high-altitude coastal bluffs.',
    date: 'Oct 22, 2026',
    readTime: '6 min read',
    author: 'Marcus Vance',
    authorRole: 'Chief Flight Director & Pilot',
    authorImg: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
    views: '12.5K reads',
    isFeatured: false,
    isPopular: true,
    isEditorsPick: false,
    isInsight: true,
    takeaways: [
      'Ocean winds increase velocity exponentially as altitude increases above coastal cliffs.',
      'Return-to-Home (RTH) altitude must be set above cliff heights and headland vegetation.',
      'Always fly upwind during the outbound flight leg so the battery works with the wind on return.',
      'Salt fog residue requires immediate lens cleaning and motor bearing inspection post-flight.'
    ],
    fullBody: `
      <p class="lead">Coastal environments offer some of the most spectacular aerial visuals on earth—turquoise surf breaks, rugged sea stacks, and dramatic marine fog layers. However, marine airspace is also one of the most unforgiving environments for multi-rotor aircraft.</p>

      <h2>The Wind Shear Effect on Coastal Bluffs</h2>
      <p>Ground-level wind speeds on the beach can be a deceptive 8 knots, while at 250 feet above the bluffs, compression wind sheer can reach 28 knots. Understanding how coastal topography compresses and accelerates airflow is vital for safe mission planning.</p>

      <div class="article-callout">
        <h5 class="fw-bold mb-2"><i class="bi bi-shield-exclamation text-info me-2"></i>Golden Marine Rule: Fly Upwind First</h5>
        <p class="mb-0">Never fly downwind on your outbound flight leg when operating over open ocean. If you fly with the wind, the drone will consume significantly more battery power fighting the headwind on the return leg, risking emergency water landings.</p>
      </div>

      <h2>Dealing with Compass Calibration near Magnetic Iron Bluffs</h2>
      <p>Many volcanic and basalt coastal cliffs contain high iron deposits that interfere with internal drone magnetometers. Our pilots always perform compass calibrations away from cliff edges on non-metallic surfaces before flight.</p>
    `
  },
  {
    id: 'fpv-drone-indoor-tours',
    title: 'The Rise of FPV Drone One-Take Indoor Facility Tours',
    category: 'Drone Technology',
    image: 'assets/gallery-nature-2.jpg',
    desc: 'Why corporate campuses, modern luxury hotels, and automotive manufacturing plants are hiring acrobatic FPV pilots for marketing reels.',
    date: 'Oct 14, 2026',
    readTime: '5 min read',
    author: 'Priya Sharma',
    authorRole: 'Senior Architectural Cinematographer',
    authorImg: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
    views: '13.1K reads',
    isFeatured: false,
    isPopular: true,
    isEditorsPick: true,
    isInsight: false,
    takeaways: [
      'Prop-guarded Cinewhoop aircraft allow safe flight inches away from artwork, walls, and people.',
      'Continuous one-take flight connects outdoor landscapes with interior spaces without jarring cuts.',
      'Custom 4K stabilized action cameras deliver cinema-grade color science inside compact airframes.',
      'Indoor flights demand specialized radio link frequencies that penetrate reinforced concrete.'
    ],
    fullBody: `
      <p class="lead">Traditional video tours rely on cutting between multiple static tripod shots. FPV (First Person View) cinematography throws that convention out the window, taking viewers on an exhilarating roller-coaster flight through buildings, manufacturing lines, and executive boardrooms in a single continuous breath.</p>

      <h2>What is a Cinewhoop?</h2>
      <p>Unlike standard DJI camera drones which feature open propeller blades and automated hover assistance, indoor FPV pilots fly custom-built "Cinewhoop" quads. These compact aircraft feature foam-padded duct guards encasing every propeller, ensuring that even in the unlikely event of an accidental brush against a wall or pillar, the aircraft bounces off harmlessly without causing damage.</p>

      <h2>Choreographing the One-Take Tour</h2>
      <p>A successful FPV showcase requires precise choreography between the pilot, lighting technicians, and on-screen staff. Every doorway passage, staircase spiral, and window reveal is timed down to the second.</p>
    `
  },
  {
    id: 'd-log-color-grading-masterclass',
    title: '10-Bit D-Log vs Standard Color Profiles in Aerial Video',
    category: 'Tips & Tutorials',
    image: 'assets/Drone Over Misty Mountain River.png',
    desc: 'Understanding sensor dynamic range, color bit-depth, and grading LUTs in DaVinci Resolve Studio to eliminate banding in sunset skies.',
    date: 'Oct 04, 2026',
    readTime: '8 min read',
    author: 'Marcus Vance',
    authorRole: 'Chief Flight Director & Pilot',
    authorImg: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
    views: '15.9K reads',
    isFeatured: false,
    isPopular: true,
    isEditorsPick: true,
    isInsight: true,
    takeaways: [
      '10-bit color records 1,024 shades per color channel (1.07 billion colors) vs 256 shades in 8-bit.',
      'D-Log logarithmic gamma curves prevent color banding across vast sky and cloud gradients.',
      'DaVinci Resolve Color Management (RCM) transforms D-Log to Rec.709 with accurate skin tone mapping.',
      'Always expose D-Log to the right (ETTR) to minimize sensor noise in shadow recovery.'
    ],
    fullBody: `
      <p class="lead">If you have ever shot a gorgeous sunset from a drone only to find blocky, jagged steps of color across the sky in post-production, you have fallen victim to 8-bit color banding. Here is why shooting 10-bit logarithmic video is non-negotiable for professional aerial video.</p>

      <h2>The Math Behind 8-Bit vs. 10-Bit Color</h2>
      <p>An 8-bit video file contains 256 brightness values per channel (Red, Green, Blue), totaling roughly 16.7 million possible colors. A 10-bit video file contains 1,024 brightness values per channel—over 1.07 billion colors. That 64-fold increase in color resolution provides the microscopic gradation steps required to render smooth, velvety sky horizons without artifacting.</p>

      <h2>Our DaVinci Resolve Workflow for AeroNest Footage</h2>
      <p>We grade all commercial deliverables in DaVinci Resolve Studio using a color-managed node structure:</p>
      <ol>
        <li><strong>Exposure &amp; White Balance Correction:</strong> Adjusting offset wheels before the color transform.</li>
        <li><strong>Color Space Transform (CST):</strong> Converting DJI D-Gamut / D-Log to timeline working space (DWG/Intermediate).</li>
        <li><strong>Contrast &amp; Split Toning:</strong> Enhancing midtone warmth while preserving deep navy shadows.</li>
        <li><strong>Gamut Mapping &amp; Output:</strong> Delivering in Rec.709 Gamma 2.4 for broadcast and web reproduction.</li>
      </ol>
    `
  },
  {
    id: 'faa-part-107-regulations-2026',
    title: 'FAA Part 107 Night Flight & Urban Airspace Clearances in 2026',
    category: 'Drone Technology',
    image: 'assets/gallery-commercial-1.jpg',
    desc: 'Everything commercial clients and production managers need to know regarding digital LAANC approvals, anti-collision strobes, and safety waivers.',
    date: 'Sep 24, 2026',
    readTime: '6 min read',
    author: 'Elena Rostova',
    authorRole: 'GIS & Photogrammetry Lead',
    authorImg: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80',
    views: '9.8K reads',
    isFeatured: false,
    isPopular: false,
    isEditorsPick: false,
    isInsight: true,
    takeaways: [
      'FAA Part 107 rules allow civil night operations provided aircraft have 3-mile visible strobe lights.',
      'Digital LAANC provides automated near-real-time airspace authorizations near major airports.',
      'Flights over non-participating people require FAA Category 1, 2, or 3 certified airframes with prop guards.',
      'Commercial clients must ensure pilot certificate verification to avoid joint liability penalties.'
    ],
    fullBody: `
      <p class="lead">Drone regulations have matured rapidly over recent years. What once required months of paper waiver applications with the Federal Aviation Administration can now frequently be cleared in seconds using digital airspace systems—if you know how to navigate the framework.</p>

      <h2>Night Operations Without Waivers</h2>
      <p>Under updated FAA Part 107 regulations, certified commercial remote pilots can fly at night without requesting a dedicated waiver, provided the aircraft is equipped with anti-collision lighting visible for at least 3 statute miles with a flash rate sufficient to avoid collision hazards.</p>

      <h2>Automated Airspace Clearances with LAANC</h2>
      <p>The Low Altitude Authorization and Notification Capability (LAANC) connects drone operators directly with FAA air traffic management facilities. AeroNest pilots submit flight coordinates digitally, receiving instant airspace authorization up to designated grid ceilings even within controlled Class B, C, D, and E surface airspaces.</p>
    `
  },
  {
    id: 'wedding-drone-cinematography-guide',
    title: 'Discreet Drone Cinematography for Luxury Weddings: Capturing Emotion Without Distraction',
    category: 'Events & Cinematic Stories',
    image: 'assets/gallery-events-1.jpg',
    desc: 'How our dual-pilot crews capture majestic ceremony entrances, sunset vows, and venue landscapes while maintaining complete reverence and silence.',
    date: 'Sep 16, 2026',
    readTime: '5 min read',
    author: 'Priya Sharma',
    authorRole: 'Senior Architectural Cinematographer',
    authorImg: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
    views: '14.2K reads',
    isFeatured: false,
    isPopular: true,
    isEditorsPick: true,
    isInsight: false,
    takeaways: [
      'Low-noise stealth propellers reduce acoustic decibels by up to 60% compared to standard drones.',
      'Maintaining a minimum 100-foot altitude buffer makes the drone virtually imperceptible to guests.',
      'Telephoto prime lenses allow intimate couple close-ups from hundreds of feet away.',
      'Close collaboration with the ground videographer guarantees seamless color science matching.'
    ],
    fullBody: `
      <p class="lead">A wedding is an intimate, once-in-a-lifetime ceremony. The biggest concern couples and event planners have when considering aerial coverage is noise. Here is how professional drone crews deliver breathtaking cinematic sweeps while remaining virtually invisible to guests.</p>

      <h2>The Stealth Acoustic Advantage</h2>
      <p>Standard consumer drones emit a high-pitched buzzing frequency. AeroNest utilizes enterprise aircraft equipped with swept-tip low-noise aerodynamic propellers and custom acoustic dampening. At our standard operating altitude of 120–150 feet, the aircraft is quieter than ambient outdoor wind rustling through trees.</p>

      <h2>Timing the Key Moments</h2>
      <p>We coordinate flight windows down to the minute with the wedding planner:</p>
      <ul>
        <li><strong>Guest Arrival &amp; Venue Establishing:</strong> 30 minutes prior to ceremony to capture floral installations and venue scale.</li>
        <li><strong>Ceremony Entrance &amp; Vows:</strong> High-altitude slow orbit capturing the procession and veil movement without moving overhead.</li>
        <li><strong>Golden Hour Couple Portraits:</strong> Dedicated 20-minute flight session immediately following the ceremony while guests enjoy cocktails.</li>
      </ul>
    `
  },
  {
    id: 'regatta-high-speed-marine-pursuit',
    title: 'Filming the Pacific Ocean Regatta: Tracking Racing Yachts at 50 Knots',
    category: 'Events & Cinematic Stories',
    image: 'assets/gallery-travel-1.jpg',
    desc: 'Inside the cockpit of a dual-operator high-speed pursuit tracking 50-foot racing catamarans rounding the Golden Gate buoy.',
    date: 'Sep 02, 2026',
    readTime: '7 min read',
    author: 'Marcus Vance',
    authorRole: 'Chief Flight Director & Pilot',
    authorImg: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
    views: '11.8K reads',
    isFeatured: false,
    isPopular: false,
    isEditorsPick: true,
    isInsight: false,
    takeaways: [
      'Dual-operator flight allows the pilot to focus 100% on boat clearance while the director tracks sails.',
      'Operating from a moving chase boat requires manual hand catches and dynamic home-point updating.',
      'High-velocity wind resistance requires aerodynamic carbon-fiber airframes capable of 60+ MPH.',
      'Uncompressed wireless HDMI downlinks stream live 1080p feeds directly to spectator jumbotrons.'
    ],
    fullBody: `
      <p class="lead">Filming high-speed competitive sailing is one of the most intense aerial disciplines in existence. Carbon-fiber foiling catamarans slice through open ocean swells at over 45 knots, changing heading in fractions of a second as skippers tack through wind shifts.</p>

      <h2>Operating from a Moving Chase Boat</h2>
      <p>When tracking an ocean regatta, the drone cannot return to a stationary launch point. Our pilot and camera director operate from the stern of a high-speed support chase boat. The drone's dynamic home point must continuously sync with the chase vessel's GPS coordinates to prevent emergency auto-landings in open water.</p>

      <h2>The Thrill of the Parallel Water Skim</h2>
      <p>Our favorite shot of the regatta was a low-altitude parallel chase skimming just 12 feet above the ocean surface alongside the lead catamaran as its leeward foil lifted out of the water, sending twin rooster tails of spray across the sunset.</p>
    `
  },
  {
    id: 'mastering-aerial-still-photography',
    title: 'Mastering High-Resolution Still Photography with Medium-Format Drone Sensors',
    category: 'Drone Photography',
    image: 'assets/gallery-nature-1.jpg',
    desc: 'Why 48MP and 100MP large sensors with mechanical shutters are revolutionizing fine-art landscape prints and commercial billboards.',
    date: 'Aug 20, 2026',
    readTime: '6 min read',
    author: 'Priya Sharma',
    authorRole: 'Senior Architectural Cinematographer',
    authorImg: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
    views: '13.7K reads',
    isFeatured: false,
    isPopular: true,
    isEditorsPick: false,
    isInsight: true,
    takeaways: [
      'Large medium-format sensors provide extreme resolving power for gallery-sized fine art prints.',
      'Mechanical leaf shutters eliminate rolling shutter distortion during high-velocity flight passes.',
      'Multi-image gigapixel stitching enables 360-degree interactive panoramic imagery.',
      'RAW DNG files allow post-processing exposure recovery across deep shadow crevices and bright snow.'
    ],
    fullBody: `
      <p class="lead">While aerial video commands immense attention, aerial still photography remains the cornerstone of fine art galleries, architectural portfolio books, and massive outdoor billboard campaigns.</p>

      <h2>Why Rolling Shutter Kills Still Sharpness</h2>
      <p>Standard electronic rolling shutters expose sensor pixels line by line. When an aircraft is moving or vibrating in turbulent air, this introduces subtle micro-skew and gelatin distortion that ruins fine detail. Medium-format drone payloads utilize mechanical leaf shutters capable of exposing the entire sensor simultaneously at up to 1/2000s, locking sharp geometric precision across every pixel.</p>
    `
  },
  {
    id: 'nd-filters-and-shutter-speed-rules',
    title: 'Essential ND Filters & Shutter Speed Rules for Silky Cinematic Drone Motion',
    category: 'Tips & Tutorials',
    image: 'assets/gallery-travel-1.jpg',
    desc: 'The complete beginner-to-advanced guide to using ND4 through ND64 filters, circular polarizers, and manual exposure in bright sky conditions.',
    date: 'Aug 11, 2026',
    readTime: '5 min read',
    author: 'Marcus Vance',
    authorRole: 'Chief Flight Director & Pilot',
    authorImg: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
    views: '10.5K reads',
    isFeatured: false,
    isPopular: false,
    isEditorsPick: false,
    isInsight: true,
    takeaways: [
      'Neutral density (ND) filters act as sunglasses for your camera sensor, cutting down incoming light.',
      'ND/PL hybrid filters cut through water reflections and enhance blue sky saturation simultaneously.',
      'Never stop your drone lens down past f/8 to avoid optical diffraction softening.',
      'Keep an ND8, ND16, ND32, and ND64 set in your flight bag for any daylight conditions.'
    ],
    fullBody: `
      <p class="lead">The number one mistake rookie drone videographers make is flying in auto mode on bright sunny days. The camera compensates for blinding sunlight by ramping up the shutter speed to 1/2000s, creating jittery, unnatural "staccato" footage that looks like home video rather than cinema.</p>

      <h2>The Solution: Neutral Density Filters</h2>
      <p>By attaching an optical ND filter to the drone lens, you mechanically reduce light entering the sensor, allowing you to lock your shutter speed at the magical 1/50s or 1/120s sweet spot while keeping your aperture at its sharpest setting (f/4 to f/5.6).</p>
    `
  },
  {
    id: 'future-of-drone-optics-zenmuse-inspire',
    title: 'The Future of Drone Optics: Dual-Operator Flight Decks & Remote Gimbal Wheels',
    category: 'Drone Technology',
    image: 'assets/about-hero-sunrise.jpg',
    desc: 'How cinema-grade full-frame payloads and wireless wheel consoles are bringing Hollywood studio camera movement to high-altitude flight.',
    date: 'Jul 28, 2026',
    readTime: '7 min read',
    author: 'Elena Rostova',
    authorRole: 'GIS & Photogrammetry Lead',
    authorImg: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80',
    views: '8.9K reads',
    isFeatured: false,
    isPopular: false,
    isEditorsPick: true,
    isInsight: true,
    takeaways: [
      'Master Wheels allow camera directors to operate gimbals with the exact physical feel of cinema cranes.',
      'Full-frame 8K sensors capture extraordinary low-light sensitivity with near-zero noise up to ISO 3200.',
      'Interchangeable DL mount prime lenses offer focal lengths from 18mm ultra-wide to 50mm telephoto.',
      'Dual wireless radio downlinks eliminate latency between pilot flight inputs and director framing.'
    ],
    fullBody: `
      <p class="lead">For years, drone camera operation was limited to small thumb joysticks on the pilot's remote controller. Today, high-end commercial cinema productions demand the tactile precision of weighted brass wheels and dedicated focus pullers.</p>

      <h2>Decoupling Flight from Framing</h2>
      <p>When a pilot is responsible for both navigating obstacle buffers and tracking a fast-moving actor or sports car, compromises must be made. On our dual-operator flight deck, the pilot dedicates 100% of their cognitive bandwidth to flight trajectory, speed, and safety, while our director uses professional wheels to execute micro-pan reveals and telephoto tracking with millimeter optical precision.</p>
    `
  }
];

// Helper functions for easy filtering & lookup
function getBlogById(id) {
  if (!id) return AERONEST_BLOGS[0];
  return AERONEST_BLOGS.find(b => b.id === id) || AERONEST_BLOGS[0];
}

function getBlogsByCategory(cat) {
  if (!cat || cat === 'all' || cat === 'All Articles') return AERONEST_BLOGS;
  return AERONEST_BLOGS.filter(b => b.category.toLowerCase() === cat.toLowerCase());
}

function getFeaturedBlog() {
  return AERONEST_BLOGS.find(b => b.isFeatured) || AERONEST_BLOGS[0];
}

function getPopularBlogs() {
  return AERONEST_BLOGS.filter(b => b.isPopular);
}

function getEditorsPickBlogs() {
  return AERONEST_BLOGS.filter(b => b.isEditorsPick);
}

function getInsightBlogs() {
  return AERONEST_BLOGS.filter(b => b.isInsight);
}

// Generate URL for blog-details.html
function getBlogDetailUrl(blog) {
  return `blog-details.html?id=${encodeURIComponent(blog.id)}&title=${encodeURIComponent(blog.title)}&image=${encodeURIComponent(blog.image)}&category=${encodeURIComponent(blog.category)}&date=${encodeURIComponent(blog.date)}&readTime=${encodeURIComponent(blog.readTime)}`;
}

