const SUPABASE_URL = 'https://flxdnwwvwymfbpnecczi.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_N4s_9W72-wf5vCqxygHfcg_2wLVrriZ';

// GET requests — no Content-Type to avoid CORS preflight
const HEADERS = {
  'apikey': SUPABASE_ANON_KEY,
  'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
};
// POST/PATCH requests need Content-Type
const WRITE_HEADERS = {
  'apikey': SUPABASE_ANON_KEY,
  'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
  'Content-Type': 'application/json'
};

export async function fetchConditions() {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/conditions?enabled=eq.true&select=*&order=name.asc`, { headers: HEADERS });
  if (!res.ok) throw new Error(`Failed to fetch conditions: ${res.status}`);
  const rows = await res.json();
  // Normalize column names from snake_case to camelCase to match existing render code
  return rows.map(normalizeRow);
}

export async function fetchCondition(id) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/conditions?id=eq.${encodeURIComponent(id)}&select=*`, { headers: HEADERS });
  if (!res.ok) throw new Error(`Failed to fetch condition: ${res.status}`);
  const rows = await res.json();
  return rows.length ? normalizeRow(rows[0]) : null;
}

export async function fetchROMReference() {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/rom_reference?select=*&order=body_part.asc,id.asc`, { headers: HEADERS });
  if (!res.ok) throw new Error(`Failed to fetch ROM reference: ${res.status}`);
  return res.json();
}

export async function checkWhitelist(email) {
  const res = await fetch(
    `${SUPABASE_URL}/rest/v1/whitelist?email=eq.${encodeURIComponent(email)}&select=email&limit=1`,
    { headers: HEADERS }
  );
  if (!res.ok) throw new Error(`Whitelist check failed: ${res.status}`);
  const rows = await res.json();
  return rows.length > 0;
}

export async function saveQuizScore(email, conditionFilter, correct, total) {
  const res = await fetch(
    `${SUPABASE_URL}/rest/v1/quiz_scores`,
    {
      method: 'POST',
      headers: { ...WRITE_HEADERS, 'Prefer': 'return=minimal' },
      body: JSON.stringify({ user_email: email, condition_filter: conditionFilter, correct, total })
    }
  );
  if (!res.ok) throw new Error(`Failed to save score: ${res.status}`);
}

export async function fetchUserScores(email) {
  const res = await fetch(
    `${SUPABASE_URL}/rest/v1/quiz_scores?user_email=eq.${encodeURIComponent(email)}&select=condition_filter,correct,total,created_at&order=created_at.desc`,
    { headers: HEADERS }
  );
  if (!res.ok) throw new Error(`Failed to fetch scores: ${res.status}`);
  return res.json();
}

function normalizeRow(row) {
  return {
    id: row.id,
    name: row.name,
    region: row.region,
    tags: row.tags || [],
    causes: row.causes || [],
    contraindications: row.contraindications || { absolute: [], relative: [], massageSpecific: [] },
    muscleGroups: row.muscle_groups || [],
    specialTests: row.special_tests || [],
    treatmentHints: row.treatment_steps || { goals: [], techniques: [], positioning: '', frequency: '' },
    definition: row.definition || '',
    location: row.location || '',
    symptoms: row.symptoms || [],
    treatment_objectives: row.treatment_objectives || [],
    home_care: row.post_treatment || []
  };
}
