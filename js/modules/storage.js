const KEY = 'mcts_progress';

export function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(KEY)) || {};
  } catch {
    return {};
  }
}

export function saveProgress(progress) {
  localStorage.setItem(KEY, JSON.stringify(progress));
}

export function markStudied(conditionId) {
  const p = loadProgress();
  if (!p[conditionId]) p[conditionId] = {};
  p[conditionId].studied = true;
  p[conditionId].lastSeen = new Date().toISOString();
  saveProgress(p);
}

export function recordChallengeResult(conditionId, correct, total) {
  const p = loadProgress();
  if (!p[conditionId]) p[conditionId] = {};
  const pct = Math.round((correct / total) * 100);
  if (!p[conditionId].bestScore || pct > p[conditionId].bestScore) {
    p[conditionId].bestScore = pct;
  }
  p[conditionId].lastChallenged = new Date().toISOString();
  saveProgress(p);
}

export function getStudiedIds() {
  const p = loadProgress();
  return Object.entries(p).filter(([, v]) => v.studied).map(([k]) => k);
}

export function clearProgress() {
  localStorage.removeItem(KEY);
}
