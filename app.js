/* ═══════════════════════════════════════════════
   24 LOCKED BULLET SKELETONS
   verb pairs + sentence structure = FIXED forever
   only {{slot}} values change per JD run
   ═══════════════════════════════════════════════ */
const BULLET_BANK = [
  // ── Lead Cloud Infrastructure Architecture — Kyndryl-IBM (8) ──
  { id:'L1', job:'Lead Cloud Infrastructure Architecture', employer:'Kyndryl-IBM', meta:'Current',
    discipline:'Cloud Architecture', verbs:['Architected','directed'],
    skeleton:'Architected and directed {{strategy_scope}} across {{cloud_environment}}, owning {{ownership_scope}}.',
    slots:['strategy_scope','cloud_environment','ownership_scope'] },
  { id:'L2', job:'Lead Cloud Infrastructure Architecture', employer:'Kyndryl-IBM', meta:'Current',
    discipline:'Data Center', verbs:['Oversaw','modernized'],
    skeleton:'Oversaw and modernized {{datacenter_scope}}, directing {{datacenter_activity}} across {{environment_scale}}.',
    slots:['datacenter_scope','datacenter_activity','environment_scale'] },
  { id:'L3', job:'Lead Cloud Infrastructure Architecture', employer:'Kyndryl-IBM', meta:'Current',
    discipline:'Operations Administration', verbs:['Established','led'],
    skeleton:'Established and led {{monitoring_framework}} tracking {{monitored_metrics}}, ensuring {{operational_outcome}}.',
    slots:['monitoring_framework','monitored_metrics','operational_outcome'] },
  { id:'L4', job:'Lead Cloud Infrastructure Architecture', employer:'Kyndryl-IBM', meta:'Current',
    discipline:'Network Engineer', verbs:['Directed','standardized'],
    skeleton:'Directed and standardized {{network_architecture}} including {{network_components}} for {{platform_scope}}.',
    slots:['network_architecture','network_components','platform_scope'] },
  { id:'L5', job:'Lead Cloud Infrastructure Architecture', employer:'Kyndryl-IBM', meta:'Current',
    discipline:'Cybersecurity', verbs:['Defined','enforced'],
    skeleton:'Defined and enforced {{security_architecture}} governing {{security_controls}}, aligning with {{compliance_scope}}.',
    slots:['security_architecture','security_controls','compliance_scope'] },
  { id:'L6', job:'Lead Cloud Infrastructure Architecture', employer:'Kyndryl-IBM', meta:'Current',
    discipline:'DevOps', verbs:['Built','scaled'],
    skeleton:'Built and scaled {{devops_practice}} adopted across {{team_scope}}, reducing {{devops_outcome}}.',
    slots:['devops_practice','team_scope','devops_outcome'] },
  { id:'L7', job:'Lead Cloud Infrastructure Architecture', employer:'Kyndryl-IBM', meta:'Current',
    discipline:'Admin', verbs:['Managed','governed'],
    skeleton:'Managed and governed {{admin_scope}} across {{infra_environment}}, maintaining {{compliance_standard}}.',
    slots:['admin_scope','infra_environment','compliance_standard'] },
  { id:'L8', job:'Lead Cloud Infrastructure Architecture', employer:'Kyndryl-IBM', meta:'Current',
    discipline:'Software Engineer', verbs:['Led','reviewed'],
    skeleton:'Led and reviewed {{automation_artifact}}, mentoring {{mentee_scope}}.',
    slots:['automation_artifact','mentee_scope'] },

  // ── Senior Cloud Architect — Red Hat (6) ──
  { id:'R1', job:'Senior Cloud Architect', employer:'Red Hat', meta:'Past',
    discipline:'Cloud Architecture', verbs:['Designed','delivered'],
    skeleton:'Designed and delivered {{cloud_solution}} tailored to {{client_use_case}}, evaluating {{infra_decision}}.',
    slots:['cloud_solution','client_use_case','infra_decision'] },
  { id:'R2', job:'Senior Cloud Architect', employer:'Red Hat', meta:'Past',
    discipline:'Network Engineer', verbs:['Configured','optimized'],
    skeleton:'Configured and optimized {{network_layer}} using {{network_tooling}} for {{workload_scope}}.',
    slots:['network_layer','network_tooling','workload_scope'] },
  { id:'R3', job:'Senior Cloud Architect', employer:'Red Hat', meta:'Past',
    discipline:'Cybersecurity', verbs:['Implemented','validated'],
    skeleton:'Implemented and validated {{security_workflow}}, resolving {{security_constraint}}.',
    slots:['security_workflow','security_constraint'] },
  { id:'R4', job:'Senior Cloud Architect', employer:'Red Hat', meta:'Past',
    discipline:'Software Engineer/Dev', verbs:['Wrote','maintained'],
    skeleton:'Wrote and maintained {{iac_artifact}} to accelerate {{delivery_outcome}}.',
    slots:['iac_artifact','delivery_outcome'] },
  { id:'R5', job:'Senior Cloud Architect', employer:'Red Hat', meta:'Past',
    discipline:'DevOps', verbs:['Implemented','refined'],
    skeleton:'Implemented and refined {{cicd_pattern}} adapted to {{client_toolchain}}.',
    slots:['cicd_pattern','client_toolchain'] },
  { id:'R6', job:'Senior Cloud Architect', employer:'Red Hat', meta:'Past',
    discipline:'Cloud Architecture', verbs:['Advised','positioned'],
    skeleton:'Advised and positioned {{strategy_recommendation}} for {{stakeholder_scope}}, balancing {{tradeoff_factors}}.',
    slots:['strategy_recommendation','stakeholder_scope','tradeoff_factors'] },

  // ── Cloud/Data/AI Consultant — IBM (5) ──
  { id:'C1', job:'Cloud/Data/AI Consultant', employer:'IBM', meta:'Past',
    discipline:'AI/ML', verbs:['Developed','deployed'],
    skeleton:'Developed and deployed {{aiml_solution}} using {{aiml_tooling}}, automating {{automated_workflow}}.',
    slots:['aiml_solution','aiml_tooling','automated_workflow'] },
  { id:'C2', job:'Cloud/Data/AI Consultant', employer:'IBM', meta:'Past',
    discipline:'Data Scientist', verbs:['Built','trained'],
    skeleton:'Built and trained {{model_type}} for {{model_use_case}}, achieving {{model_outcome}}.',
    slots:['model_type','model_use_case','model_outcome'] },
  { id:'C3', job:'Cloud/Data/AI Consultant', employer:'IBM', meta:'Past',
    discipline:'Software Developer', verbs:['Coded','integrated'],
    skeleton:'Coded and integrated {{pipeline_component}} connecting {{integration_target}}.',
    slots:['pipeline_component','integration_target'] },
  { id:'C4', job:'Cloud/Data/AI Consultant', employer:'IBM', meta:'Past',
    discipline:'AI/ML', verbs:['Configured','applied'],
    skeleton:'Configured and applied {{nlp_tooling}}, surfacing {{insight_outcome}}.',
    slots:['nlp_tooling','insight_outcome'] },
  { id:'C5', job:'Cloud/Data/AI Consultant', employer:'IBM', meta:'Past',
    discipline:'Cloud/Data Integration', verbs:['Implemented','connected'],
    skeleton:'Implemented and connected {{integration_platform}} to unify {{unified_scope}}.',
    slots:['integration_platform','unified_scope'] },

  // ── Data Management — Deloitte (5) ──
  { id:'D1', job:'Data Management', employer:'Deloitte', meta:'Past',
    discipline:'Data Analytics', verbs:['Analyzed','reported'],
    skeleton:'Analyzed and reported {{dataset_scope}} to inform {{business_outcome}}.',
    slots:['dataset_scope','business_outcome'] },
  { id:'D2', job:'Data Management', employer:'Deloitte', meta:'Past',
    discipline:'Data Scientist', verbs:['Modeled','validated'],
    skeleton:'Modeled and validated {{data_model_type}} to improve {{quality_outcome}}.',
    slots:['data_model_type','quality_outcome'] },
  { id:'D3', job:'Data Management', employer:'Deloitte', meta:'Past',
    discipline:'Software Engineer', verbs:['Built','maintained'],
    skeleton:'Built and maintained {{etl_artifact}} to streamline {{ingestion_scope}}.',
    slots:['etl_artifact','ingestion_scope'] },
  { id:'D4', job:'Data Management', employer:'Deloitte', meta:'Past',
    discipline:'Data Analytics', verbs:['Audited','standardized'],
    skeleton:'Audited and standardized {{governance_framework}} ensuring {{compliance_scope}}.',
    slots:['governance_framework','compliance_scope'] },
  { id:'D5', job:'Data Management', employer:'Deloitte', meta:'Past',
    discipline:'Software Developer', verbs:['Developed','deployed'],
    skeleton:'Developed and deployed {{tooling_artifact}} to reduce {{efficiency_outcome}}.',
    slots:['tooling_artifact','efficiency_outcome'] }
];

/* ═══════════════════════════════════════════════
   JOB DISPLAY ORDER (resume order, current first)
   ═══════════════════════════════════════════════ */
const JOB_ORDER = [
  { job:'Lead Cloud Infrastructure Architecture', employer:'Kyndryl-IBM', meta:'Current' },
  { job:'Senior Cloud Architect',                 employer:'Red Hat',      meta:'Past'    },
  { job:'Cloud/Data/AI Consultant',               employer:'IBM',          meta:'Past'    },
  { job:'Data Management',                         employer:'Deloitte',     meta:'Past'    }
];

/* ═══════════════════════════════════════════════
   MASTER APPLICATION KEYWORD REGISTRY TREE
   9 Domains → Sub-Domains → exact leaf strings.
   Step 2 asks Claude to match the JD onto these
   exact leaves only — no invention allowed.
   ═══════════════════════════════════════════════ */
const REGISTRY_TREE = [
  { domain:'Cloud & Platform Engineering', subDomains:[
    { name:'Cloud Providers',
      keywords:['Amazon Web Services (AWS)','Google Cloud Platform (GCP)','Microsoft Azure','OCI Oracle Cloud','IBM Cloud'] },
    { name:'Containerization & Multi-Cluster Orchestration',
      keywords:['Cloud Computing','Containerization','Container Orchestration','OpenShift','Kubernetes','Docker','podman','quay','RHACM Red Hat Advance Cluster Management'] }
  ]},
  { domain:'Infrastructure & Operations', subDomains:[
    { name:'Core Data Center Engineering',
      keywords:['Infrastructure','Information Technology','Information Technology Infrastructure','IT Infrastructure Design','IT Infrastructure Management','Data Centers','Data Center Architecture','Data Center Infrastructure','Data Center Virtualization','Data Center Operations','Data Center Management','VMware'] },
    { name:'System Administration & OS',
      keywords:['Administration','System Administration','Linux','RedHat Enterprise Linux (RHEL)','Ubuntu','Fedora'] }
  ]},
  { domain:'Network & Cybersecurity', subDomains:[
    { name:'Network Engineering',
      keywords:['Network Design','Network Administration','Software Defined Networking (SDN)','Domain Name System (DNS)','DNS Administration','DNS Management'] },
    { name:'Security & Compliance',
      keywords:['Cybersecurity','Network Security','Cloud Security','SAMA','SAMA Compliance','Prisma','RHACS Red Hat Advance Cluster Security'] }
  ]},
  { domain:'DevOps & Automation', subDomains:[
    { name:'IaC & GitOps Automation',
      keywords:['DevOps','Automation','Ansible','Shell Scripting','ArgoCD'] },
    { name:'CI/CD Pipelines & Source Control',
      keywords:['CI/CD Pipeline','bitbucket','gitlab','github actions'] },
    { name:'Open Source Ecosystems',
      keywords:['Open Source Software','Open Source Integration'] }
  ]},
  { domain:'Enterprise Architecture & Management', subDomains:[
    { name:'Strategic Consulting & Leadership',
      keywords:['Architects','Technical Architecture','Solution Architecture','Enterprise Consulting','IT Consulting','Technology Management','Technical Project Leadership'] },
    { name:'Business Applications & Analytics',
      keywords:['Software Implementation','Customer Relationship Management (CRM)','Microsoft Excel'] }
  ]},
  { domain:'Artificial Intelligence & Cognitive Tech', subDomains:[
    { name:'Generative AI & NLP',
      keywords:['Generative AI','Natural Language Processing (NLP)','IBM Watson','Chatbots'] }
  ]},
  { domain:'Database & Storage Management', subDomains:[
    { name:'Relational Databases',
      keywords:['MySQL'] },
    { name:'Cloud & Hybrid Storage Systems',
      keywords:['IBM Cloud Object Storage','IBM Fusion','AWS S3 Storage'] }
  ]},
  { domain:'Observability & Monitoring', subDomains:[
    { name:'APM & Log Analytics',
      keywords:['Instana','Grafana','Dynatrace','Splunk'] }
  ]},
  { domain:'Software Development', subDomains:[
    { name:'Programming Languages & Frontend',
      keywords:['Python','Linux Scripting','HTML','CSS','JavaScript'] }
  ]}
];

/* bridge: which bullet disciplines live under which registry domain
   Observability has no dedicated discipline (monitoring bullets live
   under Operations Administration, already owned by Infra & Ops) so
   it is left empty — it renders in the tree but generates no
   diversity-pass API call. */
const DOMAIN_TO_DISCIPLINES = {
  'Cloud & Platform Engineering':            ['Cloud Architecture'],
  'Infrastructure & Operations':              ['Data Center','Admin','Operations Administration'],
  'Network & Cybersecurity':                  ['Network Engineer','Cybersecurity'],
  'DevOps & Automation':                      ['DevOps'],
  'Enterprise Architecture & Management':     ['Cloud/Data Integration'],
  'Artificial Intelligence & Cognitive Tech': ['AI/ML'],
  'Database & Storage Management':            ['Data Scientist','Data Analytics'],
  'Observability & Monitoring':               [],
  'Software Development':                     ['Software Engineer','Software Engineer/Dev','Software Developer']
};

/* ═══════════════════════════════════════════════
   STABLE PROFILE FACTS (never sent to LLM to
   rewrite — only the dynamic fields flex per JD)
   ═══════════════════════════════════════════════ */
const STABLE = {
  experience:    'over a decade of experience',
  stack:         'on-premise, cloud, and OpenShift environments',
  progression:   'Cloud Consultant at IBM, then Senior Cloud Architect at Red Hat, and currently Lead Cloud Infrastructure Architect at IBM',
  education:     "Master's in Computer Science from the Washington, D.C. area"
};
const DEFAULT_PITCH = 'Technology Infrastructure Leader';
const TIER4_ENUM    = ['Cloud Architecture','Data Center','Network','Cybersecurity','Operations'];

/* ═══════════════════════════════════════════════
   STATE
   ═══════════════════════════════════════════════ */
let slotValues     = {};   // { bulletId: { slotName: value } }
let tierLabels     = null; // { tier1, tier2, tier3, tier4Focus: [] }
let dynamicTitle   = null; // updated display title for current role
let proSummary     = '';   // assembled summary paragraph
let rawText        = '';   // final .txt export content
let matchedLeaves  = {};   // { domain: Set(leaf) }
let activeTab      = 'bullets';

/* ═══════════════════════════════════════════════
   DOM REFS
   ═══════════════════════════════════════════════ */
const $ = id => document.getElementById(id);
const apiKeyEl   = $('apiKey');
const apiDotEl   = $('apiDot');
const jdEl       = $('jdText');
const genBtn     = $('genBtn');
const statusEl   = $('statusBar');
const kwStrip    = $('kw-strip');
const emptyEl    = $('empty');
const tiersEl    = $('out-tiers');
const summaryEl  = $('out-summary');
const treeEl     = $('out-tree');
const slotsEl    = $('out-slots');
const bulletsEl  = $('out-bullets');
const rawEl      = $('out-raw');
const btnCopy    = $('btnCopy');
const btnDl      = $('btnDl');

/* ═══════════════════════════════════════════════
   ENV DETECTION & API ROUTING
   ═══════════════════════════════════════════════ */
const IS_HTTPS  = location.protocol === 'https:';
const IS_LOCAL  = location.hostname === 'localhost' || location.hostname === '127.0.0.1';
const API_URL   = IS_HTTPS  ? 'https://api.anthropic.com/v1/messages'
                : IS_LOCAL  ? 'http://localhost:3001/proxy'
                : null;

(function initEnvBadge() {
  const el = $('env-badge');
  if (IS_HTTPS) {
    el.textContent = '🔒 GitHub Pages — Direct API';
    el.style.cssText = 'color:#34D399;border-color:#34D39940;background:#34D39908';
  } else if (IS_LOCAL) {
    el.textContent = '⚡ Local — Proxy';
    el.style.cssText = 'color:#FBBF24;border-color:#FBBF2440;background:#FBBF2408';
  } else {
    el.textContent = '⚠ Open via proxy server';
    el.style.cssText = 'color:#F87171;border-color:#F8717140;background:#F8717108';
  }
})();

/* ═══════════════════════════════════════════════
   API HELPER
   ═══════════════════════════════════════════════ */
async function callClaude(system, user, maxTokens = 2000) {
  if (!API_URL) throw new Error('Open via proxy server, not file://');
  const key = apiKeyEl.value.trim();
  if (!key.startsWith('sk-ant-')) throw new Error('Invalid API key');

  const headers = {
    'Content-Type':      'application/json',
    'x-api-key':         key,
    'anthropic-version': '2023-06-01'
  };
  if (IS_HTTPS) headers['anthropic-dangerous-direct-browser-access'] = 'true';

  const res = await fetch(API_URL, {
    method:'POST', headers,
    body: JSON.stringify({
      model:'claude-sonnet-4-6', max_tokens: maxTokens,
      system, messages:[{ role:'user', content: user }]
    })
  });

  if (!res.ok) {
    let msg = `HTTP ${res.status}`;
    try { msg = (await res.json())?.error?.message || msg; } catch(_){}
    if (res.status === 401) throw new Error('Invalid API key — check your sk-ant-… token');
    if (res.status === 429) throw new Error('Rate limit — wait a moment and retry');
    throw new Error(`API error: ${msg}`);
  }

  const data = await res.json();
  return data.content.map(b => b.text || '').join('');
}

function parseJSON(raw) {
  try { return JSON.parse(raw.replace(/```json|```/g,'').trim()); }
  catch(_) { return null; }
}

/* ═══════════════════════════════════════════════
   KEY VALIDATION
   ═══════════════════════════════════════════════ */
apiKeyEl.addEventListener('input', () => {
  const ok = apiKeyEl.value.trim().startsWith('sk-ant-');
  apiDotEl.className = 'api-dot' + (ok ? ' ok' : ' err');
  updateGenBtn();
});
jdEl.addEventListener('input', updateGenBtn);
function updateGenBtn() {
  genBtn.disabled = !(apiKeyEl.value.trim().startsWith('sk-ant-') && jdEl.value.trim().length > 30);
}

async function testApi() {
  setStatus('Testing…');
  try {
    await callClaude('You are a test bot.', 'Reply: OK', 10);
    setStatus('✓ API connection working!', 'ok');
    apiDotEl.className = 'api-dot ok';
  } catch(e) { setStatus('✗ ' + e.message, 'err'); apiDotEl.className = 'api-dot err'; }
}

/* ═══════════════════════════════════════════════
   PIPELINE STEP UI
   ═══════════════════════════════════════════════ */
function setStep(id, state) {
  const el = $(id);
  el.className = 'step' + (state ? ' ' + state : '');
  const iconSpan = el.querySelector('.step-icon');
  if (state === 'active') {
    const sp = document.createElement('div');
    sp.className = 'spinner';
    iconSpan.replaceWith(sp);
  } else if (iconSpan) {
    iconSpan.textContent = state === 'done' ? '✓' : state === 'error' ? '✗' : '⬡';
    iconSpan.style.color = state === 'done' ? 'var(--success)' : state === 'error' ? 'var(--err)' : '';
  }
}
function resetSteps() { ['s0','s1','s2','s3'].forEach(id => setStep(id,'')); }
function setStatus(msg, cls) {
  statusEl.textContent = msg;
  statusEl.className = 'status-bar' + (cls ? ' '+cls : '');
}

/* ═══════════════════════════════════════════════
   TAB SWITCHING
   ═══════════════════════════════════════════════ */
function switchTab(tab) {
  activeTab = tab;
  $('tabB').className = 'tab' + (tab === 'bullets' ? ' on' : '');
  $('tabT').className = 'tab' + (tab === 'text'    ? ' on' : '');
  if (rawText) {
    ['out-tiers','out-summary','out-tree','out-slots','out-bullets'].forEach(id => {
      $(id).style.display = tab === 'bullets' ? 'block' : 'none';
    });
    rawEl.className = tab === 'text' ? 'on' : '';
  }
}

/* ═══════════════════════════════════════════════
   HELPERS
   ═══════════════════════════════════════════════ */
function esc(s) {
  return String(s)
    .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function resolveTitle(baseJob, meta) {
  return (meta === 'Current' && dynamicTitle) ? dynamicTitle : baseJob;
}

/* Build a full bullet line with LaTeX markup.
   Format: \item \textbf{FirstVerb} and secondVerb [filled slots...]
   The skeleton's {{slot}} placeholders are replaced with slot values;
   if no value was found for a slot, a bracketed placeholder appears. */
function buildLine(b, vals) {
  const v = vals || {};
  let line = b.skeleton;
  b.slots.forEach(slot => {
    const fill = v[slot] && v[slot].trim() ? v[slot].trim() : `[${slot.replace(/_/g,' ')}]`;
    line = line.replace(`{{${slot}}}`, fill);
  });
  const first = b.verbs[0];
  if (line.startsWith(first)) {
    line = `\\textbf{${first}}` + line.slice(first.length);
  }
  return `\\item ${line}`;
}

/* ═══════════════════════════════════════════════
   RENDERING FUNCTIONS
   ═══════════════════════════════════════════════ */

function showOutputLayers() {
  emptyEl.style.display = 'none';
  ['out-tiers','out-summary','out-tree','out-slots','out-bullets'].forEach(id => {
    $(id).style.display = activeTab === 'bullets' ? 'block' : 'none';
  });
  rawEl.className = activeTab === 'text' ? 'on' : '';
}

/* A — Tier labels */
function renderTiers(t) {
  tiersEl.classList.add('out-layer');
  tiersEl.innerHTML = `
    <div class="tier-row">
      <div class="tier-cell">
        <div class="tier-cell-lbl">Tier 1 — Job title</div>
        <div class="tier-cell-val">${esc(t.tier1)}</div>
      </div>
      <div class="tier-cell">
        <div class="tier-cell-lbl">Tier 2 — Organization</div>
        <div class="tier-cell-val">${esc(t.tier2)}</div>
      </div>
      <div class="tier-cell">
        <div class="tier-cell-lbl">Tier 3 — Industry domain</div>
        <div class="tier-cell-val">${esc(t.tier3)}</div>
      </div>
      <div class="tier-cell">
        <div class="tier-cell-lbl">Tier 4 — Technical pillars</div>
        <div class="tier-chips">
          ${(t.tier4Focus||[]).map(p=>`<span class="tier-chip">${esc(p)}</span>`).join('')}
        </div>
      </div>
    </div>`;
}

/* B — Professional summary */
function renderSummary(pitch, body) {
  summaryEl.classList.add('out-layer');
  summaryEl.innerHTML = `
    <div class="summary-card">
      <div class="summary-lbl">Professional Summary</div>
      <div class="summary-pitch">${esc(pitch)}</div>
      <div class="summary-body">${esc(body)}</div>
    </div>`;
}

/* C — Registry tree (Domain → Sub-Domain → matched/unmatched leaves) */
function renderTree(matched) {
  treeEl.classList.add('out-layer');
  let html = '<div class="tree-sec-lbl">Keyword registry — domain coverage</div>';
  REGISTRY_TREE.forEach(({domain, subDomains}) => {
    const mSet = matched[domain] || new Set();
    const hits = subDomains.reduce((n, sd) =>
      n + sd.keywords.filter(k => mSet.has(k)).length, 0);
    html += `<div class="tree-domain${hits ? ' hit' : ''}">
      <div class="tree-dom-hdr">
        <span class="tree-dom-name">${esc(domain)}</span>
        <span class="tree-dom-badge ${hits ? 'has' : 'zero'}">${hits} matched</span>
      </div>`;
    subDomains.forEach(sd => {
      html += `<div class="tree-sd">
        <div class="tree-sd-name">${esc(sd.name)}</div>
        <div class="tree-leaves">
          ${sd.keywords.map(k =>
            `<span class="leaf${mSet.has(k) ? ' hit' : ''}">${esc(k)}</span>`
          ).join('')}
        </div>
      </div>`;
    });
    html += '</div>';
  });
  treeEl.innerHTML = html;
}

/* D — Slot extraction panel (per job, per discipline, per slot) */
function renderSlots(vals) {
  slotsEl.classList.add('out-layer');
  let html = '<div class="slots-sec-lbl">Extracted keywords — by job &amp; discipline</div>';
  JOB_ORDER.forEach(({job, employer, meta}) => {
    const bullets = BULLET_BANK.filter(b => b.job === job);
    const displayTitle = resolveTitle(job, meta);
    html += `<div class="slot-job-group">
      <div class="slot-job-hdr">
        <span class="slot-job-title">${esc(displayTitle)}</span>
        <span class="slot-job-emp">${esc(employer)}</span>
      </div>
      <div class="slot-rows">`;
    bullets.forEach(b => {
      const bv = vals[b.id] || {};
      html += `<div class="slot-row">
        <div class="slot-disc">${esc(b.discipline)}</div>
        <div class="slot-chips">
          ${b.slots.map(slot => {
            const val = bv[slot];
            const filled = val && val.trim();
            return `<span class="slot-chip ${filled ? 'filled' : 'empty'}">
              <span class="slbl">${esc(slot.replace(/_/g,' '))}</span>${esc(filled ? val : '(no match)')}
            </span>`;
          }).join('')}
        </div>
      </div>`;
    });
    html += '</div></div>';
  });
  slotsEl.innerHTML = html;
}

/* E — 24 bullets, grouped by job title, with LaTeX formatting */
function renderBullets(vals) {
  bulletsEl.classList.add('out-layer');
  let html = '';
  JOB_ORDER.forEach(({job, employer, meta}) => {
    const bullets = BULLET_BANK.filter(b => b.job === job);
    const dt = resolveTitle(job, meta);
    html += `<div class="bullet-job-block">
      <div class="bjb-title">${esc(dt)}</div>
      <div class="bjb-meta">${esc(employer)} — ${esc(meta)}</div>`;
    bullets.forEach(b => {
      const line = buildLine(b, vals[b.id]);
      html += `<div class="bullet-line">
        <span class="bdis">${esc(b.discipline)}</span>
        <span class="btext">${esc(line)}</span>
      </div>`;
    });
    html += '</div>';
  });
  bulletsEl.innerHTML = html;
}

/* Build raw .txt — output order: A → B → C → D → E */
function buildRawText(vals) {
  const L = [];
  const hr = '='.repeat(60);
  const hr2 = '-'.repeat(60);

  L.push('TAMIM AL FAIZ — CV TAILOR OUTPUT');
  L.push(hr);
  L.push('');

  if (tierLabels) {
    L.push('TARGET ROLE CLASSIFICATION');
    L.push(hr2);
    L.push(`Tier 1 (Job Title):    ${tierLabels.tier1}`);
    L.push(`Tier 2 (Organization): ${tierLabels.tier2}`);
    L.push(`Tier 3 (Domain):       ${tierLabels.tier3}`);
    L.push(`Tier 4 (Pillars):      ${(tierLabels.tier4Focus||[]).join(' | ')}`);
    L.push('');
  }

  if (proSummary) {
    L.push('PROFESSIONAL SUMMARY');
    L.push(hr2);
    L.push(proSummary);
    L.push('');
  }

  L.push('MATCHED KEYWORDS — REGISTRY TREE');
  L.push(hr2);
  REGISTRY_TREE.forEach(({domain, subDomains}) => {
    const mSet = matchedLeaves[domain] || new Set();
    const hits = [...mSet];
    if (hits.length) L.push(`${domain}: ${hits.join(', ')}`);
  });
  L.push('');

  L.push('EXPERIENCE BULLETS');
  L.push(hr2);
  JOB_ORDER.forEach(({job, employer, meta}) => {
    const bullets = BULLET_BANK.filter(b => b.job === job);
    const dt = resolveTitle(job, meta);
    L.push(`\n${dt} — ${employer} (${meta})`);
    bullets.forEach(b => {
      const line = buildLine(b, vals[b.id]);
      L.push(`• [${b.discipline}] ${line}`);
    });
  });

  return L.join('\n');
}

/* ═══════════════════════════════════════════════
   MAIN PIPELINE
   ═══════════════════════════════════════════════ */
async function generate() {
  const jd = jdEl.value.trim();
  if (!jd) return;

  genBtn.disabled = true;
  resetSteps();
  kwStrip.innerHTML = '';
  emptyEl.style.display = 'flex';
  ['out-tiers','out-summary','out-tree','out-slots','out-bullets'].forEach(id => {
    $(id).innerHTML = ''; $(id).style.display = 'none'; $(id).classList.remove('out-layer');
  });
  rawEl.className = ''; rawEl.innerHTML = '';
  btnCopy.disabled = btnDl.disabled = true;
  slotValues = {}; tierLabels = null; dynamicTitle = null; proSummary = ''; rawText = ''; matchedLeaves = {};

  try {
    /* ─────────────────────────────────────────────
       STEP 1 — Classify role & build summary
       ───────────────────────────────────────────── */
    setStep('s0','active');
    setStatus('Classifying target role…');

    const classifyRes = await callClaude(
      `You classify job descriptions into a 4-tier taxonomy and generate a tailored career summary opening.
Return ONLY valid JSON, no markdown, no backticks, no preamble.`,
      `Analyze this job description. Return JSON with exactly these keys:
{
  "tier1_title": "the target role's normalized job title",
  "tier2_org": "the hiring org name, or its type if not named",
  "tier3_domain": "industry domain + any compliance context (e.g. 'Banking / SAMA Compliance', 'Telecommunications (Telco)')",
  "tier4_pillars": ["array of 1-5 items from EXACTLY this list: Cloud Architecture, Data Center, Network, Cybersecurity, Operations"],
  "pitch_phrase": "2-5 word seniority-matched opening (e.g. 'Principal Cloud Infrastructure Leader')",
  "domain_sentence": "one sentence fragment: 'delivering X across Y environment' — use the target industry/domain"
}

CANDIDATE STABLE FACTS (never change these — only use them to populate the summary template):
- Experience: ${STABLE.experience}
- Core stack: ${STABLE.stack}
- Progression: ${STABLE.progression}
- Education: ${STABLE.education}

Job description:
${jd}`,
      900
    );

    let cls = parseJSON(classifyRes) || {};
    tierLabels = {
      tier1:     cls.tier1_title || 'Lead Cloud Infrastructure Architecture',
      tier2:     cls.tier2_org   || '—',
      tier3:     cls.tier3_domain || '—',
      tier4Focus: (cls.tier4_pillars || []).filter(p => TIER4_ENUM.includes(p))
    };
    dynamicTitle = tierLabels.tier1;

    const pitch = cls.pitch_phrase || DEFAULT_PITCH;
    proSummary = `${pitch} with ${STABLE.experience} architecting, implementing, and managing `
      + `${STABLE.stack}. Career: ${STABLE.progression}. `
      + (cls.domain_sentence ? `Brings expertise ${cls.domain_sentence}. ` : '')
      + `Holds a ${STABLE.education}.`;

    renderTiers(tierLabels);
    renderSummary(pitch, proSummary);
    setStep('s0','done');

    /* ─────────────────────────────────────────────
       STEP 2 — Extract keywords into registry tree
       The model receives the FULL list of 83 exact
       leaf strings and returns ONLY those that are
       genuinely evidenced in the JD text.
       No invention. No paraphrasing of leaf names.
       ───────────────────────────────────────────── */
    setStep('s1','active');
    setStatus('Matching JD onto keyword registry…');

    const allLeaves = REGISTRY_TREE.flatMap(d =>
      d.subDomains.flatMap(sd => sd.keywords)
    );

    const treeRes = await callClaude(
      `You match job description text against a fixed keyword dictionary.
You ONLY return leaf strings that are genuinely evidenced in the JD (mentioned directly or as a clear technical synonym, e.g. "K8s" matches "Kubernetes", "IaC" matches "Ansible" only if Ansible is specifically mentioned, not just IaC in general).
Do NOT invent keywords. Do NOT paraphrase leaf names — return the EXACT string from the dictionary.
Return ONLY valid JSON. No markdown, no backticks.`,
      `Fixed keyword dictionary (${allLeaves.length} items — use exact strings only):
${allLeaves.map((k,i) => `${i+1}. ${k}`).join('\n')}

Job description:
${jd}

Return: { "matched": ["exact leaf string", ...] }
Only include a leaf if its concept is clearly and specifically evidenced in the JD.`,
      1400
    );

    const treeParsed = parseJSON(treeRes) || {};
    const matchedSet = new Set(treeParsed.matched || []);

    REGISTRY_TREE.forEach(({domain, subDomains}) => {
      const s = new Set();
      subDomains.forEach(sd => sd.keywords.forEach(k => { if (matchedSet.has(k)) s.add(k); }));
      matchedLeaves[domain] = s;
    });

    const flatMatched = [...matchedSet];
    kwStrip.innerHTML = flatMatched.slice(0,20).map(k =>
      `<span class="kw-chip">${esc(k)}</span>`
    ).join('');

    renderTree(matchedLeaves);
    setStep('s1','done');

    /* ─────────────────────────────────────────────
       STEP 3 — Fill 24-bullet bank (one call)
       Skeletons + verb pairs are FIXED.
       Only {{slot}} values are filled.
       The model returns slot values as JSON only.
       ───────────────────────────────────────────── */
    setStep('s2','active');
    setStatus('Filling 24-bullet bank…');

    const bankForPrompt = BULLET_BANK.map(b => ({
      id: b.id, job: b.job, employer: b.employer, discipline: b.discipline,
      skeleton: b.skeleton, slots: b.slots
    }));

    const fillRes = await callClaude(
      `You are a precise keyword-slotting engine. You receive a bank of locked resume bullet skeletons.
Each skeleton's sentence structure and verb pair are permanently fixed — you MUST NOT rewrite, rephrase, or add to them.
Your ONLY task is to find the most relevant keyword, tool, or short phrase (2-8 words) from the job description for each {{slot}} placeholder.
Prefer terms that appeared in the extracted keyword list. If a slot has no credible match, return "".
Return ONLY valid JSON: { "BULLET_ID": { "slot_name": "value", ... }, ... } — no markdown, no backticks.`,
      `Target role (Tier 1): ${tierLabels.tier1}
Organization (Tier 2): ${tierLabels.tier2}
Industry domain (Tier 3): ${tierLabels.tier3}
Matched registry keywords: ${flatMatched.join(', ')}

Candidate background (use ONLY to fill slots not covered by JD — never override JD-driven matches):
Infra/cloud: OpenShift, Kubernetes, VMware, RHACM, RHACS, Ansible, Quay, air-gapped image pulls, DNS, load balancers, firewall whitelisting, datacenter deployment, health-check scripting (CPU/memory/disk/RAM), Prisma Cloud, Instana, Grafana, Dynatrace, Splunk.
Data/AI: IBM Watson Assistant/Discovery/AutoAI, Cloud Pak for Data, Cloud Pak for Integration, image classification, Python pipelines, NLP models.

Bullet skeleton bank (sentence structure = FIXED, only fill the {{slots}}):
${JSON.stringify(bankForPrompt, null, 2)}

Job description:
${jd}

Return the slot-fill JSON now.`,
      4096
    );

    const fillParsed = parseJSON(fillRes) || {};
    BULLET_BANK.forEach(b => {
      slotValues[b.id] = fillParsed[b.id] || {};
    });

    setStep('s2','done');

    /* ─────────────────────────────────────────────
       STEP 4 — Domain diversity pass
       Groups the 24 filled bullets by Parent Domain
       using the bridge table. Iterates with for…of
       (sequential, not parallel) so each domain call
       receives a full log of phrases already committed
       by every prior domain — guaranteeing no reuse.
       ───────────────────────────────────────────── */
    setStep('s3','active');

    const domainGroups = Object.entries(DOMAIN_TO_DISCIPLINES)
      .map(([domain, disciplines]) => ({
        domain,
        bullets: BULLET_BANK.filter(b => disciplines.includes(b.discipline))
      }))
      .filter(g => g.bullets.length > 0);

    let usedPhrases = [];
    let domainIdx = 0;

    for (const { domain, bullets } of domainGroups) {
      domainIdx++;
      setStatus(`Domain diversity pass — ${domain} (${domainIdx}/${domainGroups.length})…`);

      const domainMatchedKws = [...(matchedLeaves[domain] || new Set())];
      const subDomsObj = (REGISTRY_TREE.find(d => d.domain === domain) || {}).subDomains || [];

      const domainBulletsPayload = bullets.map(b => ({
        id: b.id,
        discipline: b.discipline,
        skeleton: b.skeleton,
        slots: b.slots,
        currentSlotValues: slotValues[b.id] || {}
      }));

      const diversifyPrompt =
`You are an expert enterprise IT Resume Writer. Your task is to REWORD the slot values of the bullets in this domain so they read distinctly from phrases already used in other domains.

[CONTEXT INPUT]
- Target Seniority / Title: ${tierLabels.tier1}
- Active Focus Domain: ${domain}
- Active Sub-Focus Areas: ${JSON.stringify(subDomsObj.map(sd => ({ name: sd.name })))}
- Required Keywords to Prefer: ${domainMatchedKws.join(', ') || '(none matched in JD — use candidate background knowledge for this domain)'}

[ALREADY-COMMITTED PHRASES from prior domains — DO NOT reuse these exact words/phrases]:
${usedPhrases.length ? usedPhrases.join(', ') : '(none yet — this is the first domain)'}

[STRICT RULES]
1. NEVER change the skeleton sentence structure or the action verb pair — those are locked.
2. ONLY reword the slot VALUES (the words that fill the {{slot}} placeholders).
3. Keep each slot value 2-8 words — a concise phrase, not a sentence.
4. Prefer terms from the "Required Keywords" list where credible.
5. Keep context strictly bounded to this domain — do not mention technologies from other domains unless explicitly in the keyword list.
6. If a slot value is already distinct and strong, you may leave it unchanged.
7. Return ONLY valid JSON: { "BULLET_ID": { "slot_name": "reworded value", ... }, ... } — no markdown.

[BULLETS FOR THIS DOMAIN]
${JSON.stringify(domainBulletsPayload, null, 2)}

Return the reworded slot-value JSON now.`;

      try {
        const divRes = await callClaude(
          'You are a precise resume-bullet wording-diversification engine. Return only valid JSON.',
          diversifyPrompt,
          2000
        );
        const divParsed = parseJSON(divRes) || {};

        bullets.forEach(b => {
          if (divParsed[b.id]) {
            Object.assign(slotValues[b.id], divParsed[b.id]);
          }
          Object.values(slotValues[b.id]).forEach(v => { if (v) usedPhrases.push(v); });
        });
      } catch(divErr) {
        console.warn(`Diversity pass failed for ${domain}:`, divErr);
        bullets.forEach(b => {
          Object.values(slotValues[b.id]).forEach(v => { if (v) usedPhrases.push(v); });
        });
      }
    }

    setStep('s3','done');

    /* ─────────────────────────────────────────────
       RENDER ALL OUTPUT LAYERS (A → B → C → D → E)
       ───────────────────────────────────────────── */
    renderSlots(slotValues);
    renderBullets(slotValues);
    rawText = buildRawText(slotValues);
    rawEl.innerHTML = `<pre>${esc(rawText)}</pre>`;
    showOutputLayers();
    switchTab(activeTab);
    setStatus('✓ 24 bullets generated and diversified!', 'ok');
    btnCopy.disabled = btnDl.disabled = false;

  } catch(err) {
    console.error(err);
    setStatus('✗ ' + err.message, 'err');
    ['s0','s1','s2','s3'].forEach(id => {
      if ($(id).classList.contains('active')) setStep(id,'error');
    });
  } finally {
    genBtn.disabled = false;
    updateGenBtn();
  }
}

/* ═══════════════════════════════════════════════
   EXPORT ACTIONS
   ═══════════════════════════════════════════════ */
async function copyTxt() {
  if (!rawText) return;
  await navigator.clipboard.writeText(rawText);
  const orig = btnCopy.textContent;
  btnCopy.textContent = '✓ Copied!';
  setTimeout(() => { btnCopy.textContent = orig; }, 1800);
}

function dlTxt() {
  if (!rawText) return;
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([rawText], {type:'text/plain'}));
  a.download = 'tamim-alfaiz-cv-bullets.txt';
  a.click();
  URL.revokeObjectURL(a.href);
}
