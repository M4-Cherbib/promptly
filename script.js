/* ============================================================
   PromptGallery — script.js
   ============================================================ */

// ── DATA ─────────────────────────────────────────────────────
const prompts = [
  {
    id: 1,
    title: "Cinematic Black & White Portrait",
    model: "GPT",
    category: "Portrait",
    likes: 4821,
    tags: ["cinematic", "monochrome", "portrait", "film noir", "dramatic"],
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80",
    height: 380,
    prompt: "A dramatic black and white cinematic portrait of a woman with sharp facial features, studio lighting creating deep shadows, film grain texture, Leica camera aesthetic, 50mm lens, high contrast, inspired by Helmut Newton photography, moody and sophisticated atmosphere, professional model, dark background, chiaroscuro lighting technique, 8K resolution."
  },
  {
    id: 2,
    title: "Professional LinkedIn Headshot",
    model: "Gemini",
    category: "Portrait",
    likes: 3267,
    tags: ["professional", "headshot", "corporate", "natural light", "business"],
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80",
    height: 320,
    prompt: "Professional LinkedIn headshot of a confident executive, natural window light from the left, clean white or light grey background, business casual attire, warm smile, shallow depth of field, Sony A7R portrait lens 85mm f/1.4, sharp eyes, polished and approachable expression, corporate photography style, color graded for LinkedIn, photorealistic."
  },
  {
    id: 3,
    title: "Disney Pixar Style Portrait",
    model: "GPT",
    category: "Anime",
    likes: 7103,
    tags: ["disney", "pixar", "3d render", "cartoon", "animated"],
    image: "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=600&q=80",
    height: 420,
    prompt: "Disney Pixar style 3D animated portrait of a young girl with large expressive eyes, rosy cheeks, flowing auburn hair with magical sparkles, pastel color palette, soft subsurface scattering on skin, characteristic Disney lighting with warm rim light, studio rendering, highly detailed character design, whimsical and charming expression, ultra HD 4K render."
  },
  {
    id: 4,
    title: "Studio Ghibli Forest Spirit",
    model: "Nano Banana",
    category: "Ghibli",
    likes: 9540,
    tags: ["ghibli", "miyazaki", "forest", "spirit", "anime", "watercolor"],
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=80",
    height: 440,
    prompt: "Studio Ghibli style illustration of an ancient forest spirit surrounded by glowing kodama spirits, lush emerald green forest with dappled sunlight filtering through giant trees, hand-painted watercolor texture, Hayao Miyazaki aesthetic, soft pastel colors, magical realism, serene and mystical atmosphere, traditional Japanese art influence, cel-shaded style, 4K illustration."
  },
  {
    id: 5,
    title: "Cyberpunk Neon Portrait",
    model: "GPT",
    category: "Portrait",
    likes: 6234,
    tags: ["cyberpunk", "neon", "futuristic", "night city", "scifi"],
    image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=600&q=80",
    height: 360,
    prompt: "Cyberpunk style portrait of a woman with chrome cybernetic implants on her face, neon pink and electric blue light reflections, rain-slicked background with holographic advertisements in blurred background, sharp detailed skin texture with metallic augmentations, Blade Runner 2049 aesthetic, ultra-detailed 8K render, dramatic side lighting, futuristic fashion with LED accents."
  },
  {
    id: 6,
    title: "Fantasy Warrior Princess",
    model: "Gemini",
    category: "Fantasy",
    likes: 5892,
    tags: ["fantasy", "warrior", "armor", "epic", "medieval"],
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80",
    height: 480,
    prompt: "Epic fantasy portrait of a warrior princess in ornate golden armor with intricate engravings, flowing crimson cape, wielding a glowing enchanted sword, dramatic stormy sky background with lightning, photorealistic digital painting, cinematic lighting, Studio Artgerm style, extremely detailed armor design, battle-worn aesthetic, heroic pose, ultra-detailed fantasy illustration, 8K resolution."
  },
  {
    id: 7,
    title: "Luxury Modern Living Room",
    model: "Gemini",
    category: "Interior Design",
    likes: 4430,
    tags: ["interior", "luxury", "modern", "living room", "architecture"],
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80",
    height: 340,
    prompt: "Luxury modern living room interior design, floor-to-ceiling windows with panoramic city view, Minotti sofa in cream boucle fabric, Flos pendant lighting, travertine marble floors, curated art pieces on white walls, warm afternoon golden light, neutral palette with gold accents, styled by Kelly Wearstler, architectural photography with wide-angle lens, ultra-realistic render, 8K resolution."
  },
  {
    id: 8,
    title: "Artisan Coffee Shop Interior",
    model: "Nano Banana",
    category: "Interior Design",
    likes: 3814,
    tags: ["coffee shop", "interior", "cafe", "cozy", "artisan"],
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&q=80",
    height: 390,
    prompt: "Cozy artisan coffee shop interior with exposed brick walls, warm Edison bulb lighting, reclaimed wood counter with espresso machine, leather bar stools, plants hanging from ceiling, chalkboard menu, morning golden hour light streaming through large industrial windows, Nordic-Japanese aesthetic, soft bokeh background, editorial interior photography, Canon RF 24-70mm lens."
  },
  {
    id: 9,
    title: "Minimalist Modern Bedroom",
    model: "GPT",
    category: "Interior Design",
    likes: 2970,
    tags: ["bedroom", "minimal", "modern", "zen", "white"],
    image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600&q=80",
    height: 300,
    prompt: "Minimalist Japanese-Scandinavian bedroom interior, low platform bed with linen bedding in warm whites and sage green, paper lantern pendant light, bamboo flooring, floor-to-ceiling shoji screen windows, single sculptural bonsai tree, morning diffused light, ultra-clean composition, wide angle 24mm, architectural rendering with photorealistic detail, spa-like tranquility."
  },
  {
    id: 10,
    title: "Mediterranean Street Scene",
    model: "Nano Banana",
    category: "Architecture",
    likes: 6780,
    tags: ["mediterranean", "street", "architecture", "travel", "europe"],
    image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=600&q=80",
    height: 450,
    prompt: "Charming Mediterranean coastal village street, whitewashed buildings with blue shutters and terracotta roof tiles, bougainvillea flowers cascading over ancient stone archways, cobblestone alley, golden afternoon light creating long warm shadows, Santorini Greece aesthetic, travel photography style, Fujifilm X-Pro3 with 35mm lens, cinematic color grading, locals in distance."
  },
  {
    id: 11,
    title: "Futuristic Glass Architecture",
    model: "GPT",
    category: "Architecture",
    likes: 5100,
    tags: ["architecture", "futuristic", "glass", "modern", "scifi"],
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80",
    height: 370,
    prompt: "Futuristic skyscraper with organic parametric glass facade, bioluminescent green exterior cladding, sky bridge connecting towers, flying vehicles in background, dramatic sunset sky in pink and orange, Zaha Hadid inspired design, ultra-detailed architectural visualization, photorealistic CGI render, shot from low angle looking up, 8K resolution, cinematic atmosphere with volumetric fog."
  },
  {
    id: 12,
    title: "Cinematic Mountain Landscape",
    model: "Gemini",
    category: "Nature",
    likes: 8200,
    tags: ["landscape", "mountain", "cinematic", "nature", "golden hour"],
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
    height: 320,
    prompt: "Epic cinematic mountain landscape at golden hour, jagged snow-capped peaks reflected in mirror-still glacial lake, dramatic volumetric light rays cutting through storm clouds, lone pine tree in foreground for scale, Ansel Adams inspired black to color transition, National Geographic photography style, Nikon Z9 with 14-24mm ultra wide, polarizing filter, HDR tone mapping, 8K resolution."
  },
  {
    id: 13,
    title: "Tropical Paradise Beach",
    model: "Nano Banana",
    category: "Nature",
    likes: 7650,
    tags: ["beach", "tropical", "paradise", "ocean", "travel"],
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80",
    height: 360,
    prompt: "Pristine tropical paradise beach with crystal turquoise water, powdery white sand, overwater bungalows in background, lush palm trees swaying gently, dramatic cloud formations reflecting on wet sand, drone aerial perspective at sunrise, Maldives aesthetic, travel photography, Sony A1 with drone attachment, polarizing filter, color grade with teal and orange, ultra-wide composition."
  },
  {
    id: 14,
    title: "Luxury Skincare Product Shot",
    model: "GPT",
    category: "Product Photography",
    likes: 4100,
    tags: ["product", "skincare", "luxury", "studio", "advertising"],
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&q=80",
    height: 340,
    prompt: "Luxury skincare serum product photography, frosted glass bottle with gold cap on marble surface, fresh rose petals and eucalyptus leaves scattered artfully, soft diffused studio lighting with subtle reflections, white background with gentle shadow, CHANEL aesthetic, commercial product photography, phase one medium format camera, tack sharp with shallow depth of field, color corrected for print."
  },
  {
    id: 15,
    title: "Luxury Watch Advertisement",
    model: "Gemini",
    category: "Product Photography",
    likes: 5430,
    tags: ["watch", "luxury", "advertisement", "product", "rolex"],
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80",
    height: 380,
    prompt: "Ultra-luxury Swiss timepiece advertisement photo, rose gold watch with diamond bezel on dark slate surface, extreme macro close-up showing intricate dial details, dramatic side lighting with gold reflections, droplets of water nearby suggesting precision engineering, Rolex advertising aesthetic, Phase One IQ4 macro lens, 100% product sharpness, dark moody background, editorial quality output."
  },
  {
    id: 16,
    title: "Cinematic Car Commercial",
    model: "Nano Banana",
    category: "Cinematic",
    likes: 6890,
    tags: ["car", "commercial", "cinematic", "automotive", "advertising"],
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&q=80",
    height: 330,
    prompt: "Cinematic automotive advertisement photo of sleek matte black supercar drifting on wet mountain road at night, motion blur on wheels, neon city lights reflecting off body panels, low angle hero shot, rain streaks on windshield, dramatic under-car lighting in red, inspired by BMW M series commercial aesthetics, RED cinema camera, anamorphic lens flares, movie-grade color grading, 8K."
  },
  {
    id: 17,
    title: "Epic Movie Poster Design",
    model: "GPT",
    category: "Cinematic",
    likes: 7200,
    tags: ["movie poster", "cinematic", "epic", "Hollywood", "dramatic"],
    image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=600&q=80",
    height: 460,
    prompt: "Hollywood blockbuster movie poster composition, lone silhouette of a hero standing on cliff edge against massive alien mothership descending from stormy sky, God rays of light cutting through dark clouds, explosive disaster scene in background, deep orange and grey color palette, Photoshop composite photography with 3D CGI elements, stunning depth of field, Independence Day meets Dune aesthetic, print-ready 300 DPI resolution."
  },
  {
    id: 18,
    title: "Enchanted Fantasy Castle",
    model: "Gemini",
    category: "Fantasy",
    likes: 8900,
    tags: ["fantasy", "castle", "magic", "enchanted", "epic"],
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&q=80",
    height: 400,
    prompt: "Breathtaking fantasy castle perched on floating island in magical realm, waterfalls cascading off the edges into clouds below, bioluminescent flowers glowing in foreground, three moons visible in twilight sky, dragons circling distant towers, painted by Greg Rutkowski and Rhads, concept art style, volumetric fog and god rays, ultra-detailed fantasy painting, ArtStation quality, 8K resolution."
  },
  {
    id: 19,
    title: "Golden Hour Travel Photography",
    model: "Nano Banana",
    category: "Nature",
    likes: 9100,
    tags: ["travel", "golden hour", "landscape", "silhouette", "wanderlust"],
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&q=80",
    height: 350,
    prompt: "Stunning golden hour travel photography, silhouetted traveler with backpack standing at edge of breathtaking valley vista, sun setting behind distant mountain range, warm amber and rose sky reflected in river below, long lens compression, Fujifilm X-T5 with 50-140mm f/2.8, cinematic travel documentary aesthetic, National Geographic quality, color grade emphasizing golden warmth, rule of thirds composition."
  },
  {
    id: 20,
    title: "Anime Magical Girl Portrait",
    model: "GPT",
    category: "Anime",
    likes: 10340,
    tags: ["anime", "magical girl", "kawaii", "illustration", "manga"],
    image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=600&q=80",
    height: 420,
    prompt: "Anime magical girl character illustration, pastel pink and lavender color scheme, large sparkling eyes with star reflections, elaborate magical costume with ribbons and bows, cherry blossoms falling around her, magical girl transformation pose, glowing wand with heart crystal, detailed digital illustration inspired by Sailor Moon and Cardcaptor Sakura, clean line art, cel-shaded coloring, starry night background, 4K resolution."
  }
];

// ── STATE ─────────────────────────────────────────────────────
let currentCategory = 'All';
let currentSearch   = '';
let currentPromptId = null;
let favorites       = JSON.parse(localStorage.getItem('pg_favorites') || '[]');

// ── HELPERS ───────────────────────────────────────────────────
function modelClass(model) {
  const m = model.toLowerCase().replace(/\s/g, '');
  if (m.includes('gpt'))    return 'model-gpt';
  if (m.includes('gemini')) return 'model-gemini';
  if (m.includes('nano'))   return 'model-nano';
  return 'model-other';
}

function isFav(id) { return favorites.includes(id); }

function saveFavs() {
  localStorage.setItem('pg_favorites', JSON.stringify(favorites));
}

function toggleFav(id) {
  if (isFav(id)) {
    favorites = favorites.filter(f => f !== id);
  } else {
    favorites.push(id);
  }
  saveFavs();
  updateFavButtons(id);
}

function updateFavButtons(id) {
  // card button
  const cardBtn = document.querySelector(`.card[data-id="${id}"] .fav-btn`);
  if (cardBtn) {
    cardBtn.classList.toggle('fav-active', isFav(id));
    cardBtn.title = isFav(id) ? 'Remove from saved' : 'Save';
  }
  // modal button
  if (currentPromptId === id) {
    const mBtn = document.getElementById('modalFavBtn');
    if (mBtn) mBtn.classList.toggle('fav-active', isFav(id));
  }
}

// ── RENDER CARDS ──────────────────────────────────────────────
function filteredPrompts() {
  return prompts.filter(p => {
    const matchCat = currentCategory === 'All' || p.category === currentCategory;
    const q = currentSearch.toLowerCase().trim();
    const matchSearch = !q ||
      p.title.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.model.toLowerCase().includes(q) ||
      p.prompt.toLowerCase().includes(q) ||
      p.tags.some(t => t.includes(q));
    return matchCat && matchSearch;
  });
}

function renderCards() {
  const grid = document.getElementById('masonryGrid');
  const noResults = document.getElementById('noResults');
  const data = filteredPrompts();

  grid.innerHTML = '';

  if (data.length === 0) {
    grid.style.display = 'none';
    noResults.style.display = 'block';
    return;
  }

  grid.style.display = '';
  noResults.style.display = 'none';

  data.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.id = p.id;
    card.style.animationDelay = `${i * 0.04}s`;

    card.innerHTML = `
      <div class="card-image-wrap">
        <img src="${p.image}" alt="${p.title}" loading="lazy" />
        <span class="model-badge ${modelClass(p.model)}">${p.model}</span>
        <div class="card-overlay">
          <div class="card-overlay-actions">
            <button class="card-action-btn fav-btn ${isFav(p.id) ? 'fav-active' : ''}"
              title="${isFav(p.id) ? 'Remove from saved' : 'Save'}"
              onclick="event.stopPropagation(); toggleFav(${p.id})">
              <svg viewBox="0 0 24 24" fill="${isFav(p.id) ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" width="15" height="15">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </button>
            <button class="card-action-btn" title="View prompt" onclick="event.stopPropagation(); openModal(${p.id})">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="15" height="15">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="card-body">
        <h3 class="card-title">${p.title}</h3>
        <div class="card-footer">
          <span class="card-category">${p.category}</span>
          <span class="card-likes">
            <svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
            ${p.likes.toLocaleString()}
          </span>
        </div>
      </div>
    `;

    card.addEventListener('click', () => openModal(p.id));
    grid.appendChild(card);
  });
}

// ── MODAL ─────────────────────────────────────────────────────
function openModal(id) {
  const p = prompts.find(x => x.id === id);
  if (!p) return;
  currentPromptId = id;

  document.getElementById('modalImage').src = p.image.replace('w=600', 'w=900');
  document.getElementById('modalImage').alt = p.title;
  document.getElementById('modalTitle').textContent = p.title;
  document.getElementById('modalCategory').textContent = p.category;
  document.getElementById('modalLikes').textContent = p.likes.toLocaleString();
  document.getElementById('modalPrompt').textContent = p.prompt;

  const badge = document.getElementById('modalModelBadge');
  badge.textContent = p.model;
  badge.className = 'modal-model-badge ' + modelClass(p.model);

  const tagsEl = document.getElementById('modalTags');
  tagsEl.innerHTML = p.tags.map(t => `<span class="tag">#${t}</span>`).join('');

  const favBtn = document.getElementById('modalFavBtn');
  favBtn.classList.toggle('fav-active', isFav(id));

  const copyBtn = document.getElementById('copyBtn');
  copyBtn.classList.remove('copied');
  copyBtn.innerHTML = `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
    </svg>
    Copy Prompt`;

  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(e) {
  if (e && e.target !== document.getElementById('modalOverlay') && !e.target.closest('.modal-close')) return;
  if (e && e.target === document.getElementById('modal')) return;
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
  currentPromptId = null;
}

// Close modal on Escape key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.getElementById('modalOverlay').classList.remove('open');
    document.body.style.overflow = '';
    currentPromptId = null;
  }
});

// Prevent modal close when clicking inside modal
document.getElementById('modal').addEventListener('click', e => e.stopPropagation());

// ── MODAL ACTIONS ─────────────────────────────────────────────
function copyPrompt() {
  const text = document.getElementById('modalPrompt').textContent;
  navigator.clipboard.writeText(text).then(() => {
    const btn = document.getElementById('copyBtn');
    btn.classList.add('copied');
    btn.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="16" height="16">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
      Copied!`;
    showToast('✓ Prompt copied to clipboard');
    setTimeout(() => {
      btn.classList.remove('copied');
      btn.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
        </svg>
        Copy Prompt`;
    }, 2500);
  }).catch(() => {
    // Fallback
    const ta = document.createElement('textarea');
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    showToast('✓ Prompt copied to clipboard');
  });
}

function toggleFavFromModal() {
  if (!currentPromptId) return;
  toggleFav(currentPromptId);
  const isSaved = isFav(currentPromptId);
  showToast(isSaved ? '✦ Saved to favorites' : 'Removed from favorites');
}

function sharePrompt() {
  const p = prompts.find(x => x.id === currentPromptId);
  if (!p) return;
  if (navigator.share) {
    navigator.share({
      title: `PromptGallery — ${p.title}`,
      text: p.prompt,
      url: window.location.href
    }).catch(() => {});
  } else {
    navigator.clipboard.writeText(window.location.href).then(() => {
      showToast('🔗 Link copied to clipboard');
    });
  }
}

// ── FILTERS ───────────────────────────────────────────────────
document.querySelectorAll('.cat-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentCategory = btn.dataset.cat;
    renderCards();
  });
});

// SEARCH
const searchInput = document.getElementById('searchInput');
const searchClear = document.getElementById('searchClear');

searchInput.addEventListener('input', () => {
  currentSearch = searchInput.value;
  searchClear.classList.toggle('visible', currentSearch.length > 0);
  renderCards();
});

function clearSearch() {
  searchInput.value = '';
  currentSearch = '';
  searchClear.classList.remove('visible');
  renderCards();
  searchInput.focus();
}

function resetFilters() {
  currentCategory = 'All';
  currentSearch   = '';
  searchInput.value = '';
  searchClear.classList.remove('visible');
  document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
  document.querySelector('.cat-btn[data-cat="All"]').classList.add('active');
  renderCards();
}

// ── SCROLL TO TOP ─────────────────────────────────────────────
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
  scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
}, { passive: true });

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── TOAST ─────────────────────────────────────────────────────
let toastTimeout;

function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove('show'), 2800);
}

// ── STICKY HEADER SHADOW ──────────────────────────────────────
window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  header.style.boxShadow = window.scrollY > 10
    ? '0 4px 24px rgba(0,0,0,0.08)'
    : '0 1px 0 rgba(0,0,0,0.07)';
}, { passive: true });

// ── INIT ──────────────────────────────────────────────────────
renderCards();
