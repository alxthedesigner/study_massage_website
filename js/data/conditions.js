export const CONDITIONS = [
  {
    id: "rotator-cuff-strain",
    name: "Rotator Cuff Strain",
    region: "shoulder",
    tags: ["tendon", "impingement", "overhead athlete"],
    rom: [
      { movement: "Flexion", normal: "0–180°", affected: "Painful arc 60–120°" },
      { movement: "Abduction", normal: "0–180°", affected: "Painful arc 60–120°" },
      { movement: "External Rotation", normal: "0–90°", affected: "Possibly limited/painful" },
      { movement: "Internal Rotation", normal: "0–70°", affected: "Usually preserved" }
    ],
    arom: {
      summary: "Painful arc present on active abduction 60–120°. Full ROM may be present but painful. Significant weakness on resisted tests.",
      keyFindings: [
        "Painful arc 60–120° abduction",
        "May have full range but with pain",
        "Weakness with resisted abduction/ER"
      ]
    },
    prom: {
      summary: "Passive range often full or near-full. Pain may be provoked at end range. No capsular pattern (differentiates from frozen shoulder).",
      keyFindings: [
        "Full or near-full passive ROM",
        "End-range pain possible",
        "No capsular pattern"
      ]
    },
    mrt: [
      { muscle: "Supraspinatus", movement: "Resisted abduction 0–15°", result: "Weak and/or painful (positive)" },
      { muscle: "Infraspinatus", movement: "Resisted external rotation", result: "Weak and/or painful if involved" },
      { muscle: "Subscapularis", movement: "Resisted internal rotation", result: "Weak and/or painful if involved" },
      { muscle: "Teres Minor", movement: "Resisted ER arm at 90° abd", result: "Painful if teres minor involved" }
    ],
    endFeel: [
      { movement: "Flexion", type: "tissue-stretch-firm", note: "Normal capsular end-feel" },
      { movement: "Abduction", type: "tissue-stretch-firm", note: "Firm; may have pain before end range" },
      { movement: "External Rotation", type: "tissue-stretch-firm", note: "Firm capsular" },
      { movement: "Internal Rotation", type: "tissue-stretch-firm", note: "Firm capsular" }
    ],
    causes: [
      "Repetitive overhead activity (swimming, throwing, painting)",
      "Acute overload or fall on outstretched hand",
      "Age-related degeneration (>40 years)",
      "Muscle imbalance / scapular dyskinesis",
      "Subacromial impingement over time"
    ],
    contraindications: {
      absolute: ["Acute full-thickness tear with recent surgical repair — no direct work until physician clearance"],
      relative: [
        "Avoid deep friction over tendon insertion in acute phase",
        "No heat over acute inflammation",
        "Avoid aggressive stretching first 72 hours post-acute injury"
      ],
      massageSpecific: [
        "Cross-friction massage contraindicated in acute stage",
        "No direct pressure over subacromial bursa if bursitis co-exists"
      ]
    },
    muscleGroups: [
      { name: "Supraspinatus", role: "Primary — most commonly involved" },
      { name: "Infraspinatus", role: "Secondary; involved in full tears" },
      { name: "Subscapularis", role: "Internal rotation; anterior tears" },
      { name: "Teres Minor", role: "External rotation assist" },
      { name: "Deltoid", role: "Compensatory overactivation" },
      { name: "Upper Trapezius", role: "Compensatory elevation pattern" },
      { name: "Serratus Anterior", role: "Often inhibited — scapular stabilizer" }
    ],
    specialTests: [
      { name: "Empty Can Test (Jobe's)", procedure: "Arm at 90° abduction, 30° horizontal flexion, thumb down. Examiner resists downward pressure.", positive: "Pain and/or weakness", indicates: "Supraspinatus pathology" },
      { name: "Neer Impingement Sign", procedure: "Stabilize scapula, passively flex arm forward with elbow extended.", positive: "Pain in arc of 70–120°", indicates: "Subacromial impingement" },
      { name: "Hawkins-Kennedy Test", procedure: "Flex shoulder and elbow to 90°, passively internally rotate.", positive: "Pain", indicates: "Supraspinatus impingement under coracoacromial ligament" },
      { name: "Drop Arm Test", procedure: "Passively abduct arm to 90°, ask patient to slowly lower.", positive: "Arm drops uncontrolled", indicates: "Full-thickness supraspinatus tear" }
    ],
    treatmentHints: {
      goals: ["Reduce pain and inflammation", "Restore ROM", "Strengthen rotator cuff", "Correct scapular mechanics"],
      techniques: [
        { name: "Effleurage to deltoid and periscapular region", note: "" },
        { name: "Petrissage to upper trapezius", note: "" },
        { name: "Cross-fiber friction to supraspinatus tendon", note: "Subacute only" },
        { name: "MET to infraspinatus and teres minor", note: "" }
      ],
      positioning: "Side-lying (affected side up) or prone with arm supported",
      frequency: "2–3x/week initially, taper as ROM and strength improve"
    }
  },

  {
    id: "adhesive-capsulitis",
    name: "Adhesive Capsulitis (Frozen Shoulder)",
    region: "shoulder",
    tags: ["capsular pattern", "fibrosis", "diabetes risk"],
    rom: [
      { movement: "External Rotation", normal: "0–90°", affected: "Most restricted — may be 0–30°" },
      { movement: "Abduction", normal: "0–180°", affected: "Severely limited — often <90°" },
      { movement: "Internal Rotation", normal: "0–70°", affected: "Limited; least restricted in capsular pattern" },
      { movement: "Flexion", normal: "0–180°", affected: "Limited" }
    ],
    arom: {
      summary: "All planes restricted with ER most limited, then abduction, then IR (classic capsular pattern). Patient compensates with scapular elevation.",
      keyFindings: [
        "Global restriction — all planes limited",
        "ER > ABD > IR pattern of restriction",
        "Compensatory scapular hiking visible",
        "Pain at end range of all movements"
      ]
    },
    prom: {
      summary: "Hard capsular end-feel in all directions. Passive range matches active and is significantly restricted. No improvement with passive overpressure.",
      keyFindings: [
        "Hard end-feel in all planes",
        "Passive and active ROM closely matched",
        "Classical capsular pattern present"
      ]
    },
    mrt: [
      { muscle: "All Rotator Cuff", movement: "All resisted movements", result: "Diffusely weak and painful due to pain inhibition" },
      { muscle: "Deltoid", movement: "Resisted abduction", result: "Weak due to pain, not structural damage" }
    ],
    endFeel: [
      { movement: "External Rotation", type: "tissue-stretch-firm", note: "Hard/firm capsular — abnormally early" },
      { movement: "Abduction", type: "tissue-stretch-firm", note: "Hard capsular end-feel well before 90°" },
      { movement: "Internal Rotation", type: "tissue-stretch-firm", note: "Firm capsular" },
      { movement: "Flexion", type: "tissue-stretch-firm", note: "Firm capsular" }
    ],
    causes: [
      "Idiopathic (most common)",
      "Diabetes mellitus (strong association)",
      "Prolonged immobilization of shoulder",
      "Rotator cuff injury or surgery leading to disuse",
      "Thyroid dysfunction",
      "Dupuytren's contracture association",
      "Post-mastectomy or cardiac surgery"
    ],
    contraindications: {
      absolute: ["Aggressive forceful stretching — risk of fracture in osteoporotic patients", "Avoid deep heat in acute/freezing stage"],
      relative: [
        "Avoid aggressive ROM techniques in freezing stage (Stage 1)",
        "Corticosteroid injection recent — delay deep work 1–2 weeks"
      ],
      massageSpecific: [
        "Gentle techniques only in acute freezing stage",
        "No aggressive end-range stretching; work within pain-free range"
      ]
    },
    muscleGroups: [
      { name: "Subscapularis", role: "Primary capsular restriction; tightness limits ER" },
      { name: "Inferior Capsule", role: "Restricts abduction" },
      { name: "Posterior Capsule", role: "Limits IR and horizontal adduction" },
      { name: "Upper Trapezius", role: "Compensatory overactivation" },
      { name: "Levator Scapulae", role: "Compensatory scapular elevation" }
    ],
    specialTests: [
      { name: "Apley Scratch Test", procedure: "Ask patient to reach behind head (ER/ABD) and behind back (IR/ABD).", positive: "Asymmetry or inability to reach", indicates: "Shoulder ROM limitation — does not differentiate cause" },
      { name: "Passive ER Loss", procedure: "Compare passive ER bilaterally in supine.", positive: ">50% loss of ER vs. contralateral side", indicates: "Adhesive capsulitis (capsular pattern)" },
      { name: "Posterior Capsule Tightness Test", procedure: "Horizontal adduction — compare side to side.", positive: "Restricted horizontal adduction", indicates: "Posterior capsule tightness" }
    ],
    treatmentHints: {
      goals: ["Reduce pain and muscle guarding", "Gradually restore ROM — ER first", "Restore scapular mechanics", "Patient education on home stretching"],
      techniques: [
        { name: "Effleurage and petrissage to periscapular muscles", note: "" },
        { name: "Myofascial release to subscapularis (anterior shoulder)", note: "" },
        { name: "Gentle capsular stretching in thawing stage", note: "" },
        { name: "MET to posterior capsule", note: "" }
      ],
      positioning: "Supine or side-lying; support arm at all times",
      frequency: "2–3x/week through thawing stage; coordinate with physiotherapy"
    }
  },

  {
    id: "shoulder-impingement",
    name: "Shoulder Impingement Syndrome",
    region: "shoulder",
    tags: ["subacromial", "painful arc", "overhead"],
    rom: [
      { movement: "Abduction", normal: "0–180°", affected: "Painful arc 60–120°" },
      { movement: "Flexion", normal: "0–180°", affected: "Painful arc possible" },
      { movement: "External Rotation", normal: "0–90°", affected: "Usually preserved" },
      { movement: "Internal Rotation", normal: "0–70°", affected: "May be limited due to posterior capsule tightness" }
    ],
    arom: {
      summary: "Classic painful arc from 60–120° abduction. Pain worse at top of arc. Below and above arc relatively pain-free.",
      keyFindings: [
        "Painful arc 60–120° on active ABD",
        "Pain may resolve above 120°",
        "Overhead activities reproduce pain"
      ]
    },
    prom: {
      summary: "Passive range near-full. Neer impingement sign positive (passive forward flexion). Pain reproduced but no hard end-feel.",
      keyFindings: [
        "Near-full passive ROM",
        "Pain at end-range flexion and ABD",
        "No capsular pattern"
      ]
    },
    mrt: [
      { muscle: "Supraspinatus", movement: "Resisted abduction", result: "May be weak/painful" },
      { muscle: "Infraspinatus", movement: "Resisted ER", result: "May be weak if involved" }
    ],
    endFeel: [
      { movement: "Abduction", type: "tissue-stretch-firm", note: "Normal but pain provoked in arc" },
      { movement: "Flexion", type: "tissue-stretch-firm", note: "Normal; pain at end range" }
    ],
    causes: [
      "Repetitive overhead activities",
      "Rotator cuff weakness (especially supraspinatus)",
      "Scapular dyskinesis reducing subacromial space",
      "Posterior capsule tightness causing superior humeral migration",
      "Hooked (type III) acromion — anatomical predisposition",
      "AC joint osteophytes narrowing subacromial space"
    ],
    contraindications: {
      absolute: ["Post-surgical repair — no overhead movement until clearance"],
      relative: ["Avoid aggressive overhead stretching", "No deep work over subacromial bursa in acute inflammation"],
      massageSpecific: ["No direct pressure on inflamed subacromial bursa", "Avoid heat in acute bursitis stage"]
    },
    muscleGroups: [
      { name: "Supraspinatus", role: "Passes through subacromial space; primary structure impinged" },
      { name: "Subacromial Bursa", role: "Inflamed in bursitis presentation" },
      { name: "Posterior Rotator Cuff", role: "Tightness causes superior humeral head migration" },
      { name: "Lower Trapezius", role: "Often inhibited — fails to rotate scapula upward" },
      { name: "Serratus Anterior", role: "Often inhibited — reduces upward scapular rotation" }
    ],
    specialTests: [
      { name: "Neer Impingement Sign", procedure: "Stabilize scapula, passively forward flex arm with elbow straight.", positive: "Pain at 70–120°", indicates: "Subacromial impingement" },
      { name: "Hawkins-Kennedy Test", procedure: "Shoulder and elbow at 90°, passively internally rotate.", positive: "Pain", indicates: "Impingement of supraspinatus under coracoacromial ligament" },
      { name: "Yocum Test", procedure: "Patient places hand on contralateral shoulder, elevates elbow without raising shoulder.", positive: "Pain", indicates: "Subacromial impingement" }
    ],
    treatmentHints: {
      goals: ["Reduce inflammation and pain", "Restore rotator cuff strength balance", "Correct scapular position", "Improve posterior capsule flexibility"],
      techniques: [
        { name: "Effleurage to deltoid and rotator cuff region", note: "" },
        { name: "Soft tissue release to posterior capsule/infraspinatus", note: "" },
        { name: "Trigger point therapy to upper trapezius and levator scapulae", note: "" },
        { name: "Postural correction education", note: "" }
      ],
      positioning: "Side-lying or prone; arm in neutral/supported position",
      frequency: "1–2x/week; combine with strengthening program"
    }
  },

  {
    id: "thoracic-outlet-syndrome",
    name: "Thoracic Outlet Syndrome (TOS)",
    region: "shoulder",
    tags: ["nerve entrapment", "vascular", "brachial plexus"],
    rom: [
      { movement: "Cervical Lateral Flexion (away)", normal: "0–45°", affected: "May provoke symptoms" },
      { movement: "Shoulder Elevation", normal: "Full", affected: "Overhead positions reproduce symptoms" },
      { movement: "Shoulder Abduction/ER", normal: "0–180° / 0–90°", affected: "Sustained positions provoke symptoms" }
    ],
    arom: {
      summary: "ROM itself usually preserved. Sustained overhead positions reproduce numbness, tingling, or heaviness into arm. Symptoms often positional.",
      keyFindings: [
        "Symptoms reproduced with sustained overhead or elevated arm position",
        "Numbness/tingling into ulnar distribution (lower TOS) or radial (upper TOS)",
        "Possible vascular signs: pallor, cyanosis, swelling"
      ]
    },
    prom: {
      summary: "Full passive ROM. Compression tests (Adson's, Roos) during passive positioning reproduce symptoms.",
      keyFindings: [
        "Full passive ROM",
        "Positional compression tests positive",
        "Pulse changes possible with arm positioning"
      ]
    },
    mrt: [
      { muscle: "Hand Intrinsics", movement: "Grip strength, finger abduction", result: "Weakened in neurogenic TOS" },
      { muscle: "Forearm/Hand flexors", movement: "Resisted wrist/finger flexion", result: "May be weak with C8/T1 involvement" }
    ],
    endFeel: [
      { movement: "Shoulder ABD/ER", type: "tissue-stretch-firm", note: "Normal end-feel; symptoms provoked during motion" }
    ],
    causes: [
      "Scalene muscle hypertrophy or tightness (anterior/middle scalene)",
      "Cervical rib (anatomical anomaly)",
      "Poor posture — forward head, rounded shoulders",
      "First rib elevation or dysfunction",
      "Clavicular fracture malunion",
      "Repetitive overhead work or carrying heavy loads",
      "Trauma or whiplash"
    ],
    contraindications: {
      absolute: ["Active arterial or venous TOS — refer to physician before massage", "Do not work directly over subclavian vessels if vascular TOS"],
      relative: ["Avoid aggressive anterior neck work if arterial involvement suspected", "Cautious with deep scalene work near carotid artery"],
      massageSpecific: ["No direct compression over brachial plexus in scalene triangle", "Avoid sustained arm traction if vascular component present"]
    },
    muscleGroups: [
      { name: "Anterior Scalene", role: "Primary compressor — forms anterior border of scalene triangle" },
      { name: "Middle Scalene", role: "Forms posterior border of scalene triangle" },
      { name: "Subclavius", role: "Compresses costoclavicular space" },
      { name: "Pectoralis Minor", role: "Compresses axillary outlet in costoclavicular space" },
      { name: "Upper Trapezius", role: "Compensatory tension; elevates shoulder girdle" }
    ],
    specialTests: [
      { name: "Adson's Test", procedure: "Palpate radial pulse; patient extends and rotates head toward affected side, inhales, holds breath. Abduct and ER arm.", positive: "Pulse diminishes or symptoms reproduced", indicates: "Anterior scalene compression of subclavian artery" },
      { name: "Roos Test (EAST)", procedure: "Patient holds both arms at 90° abduction/ER, opens and closes fists for 3 minutes.", positive: "Inability to complete, arm fatigue, symptoms reproduced", indicates: "TOS — highly sensitive" },
      { name: "Halsted Maneuver", procedure: "Traction arm downward, rotate head contralaterally, palpate radial pulse.", positive: "Pulse diminishes", indicates: "Costoclavicular compression" },
      { name: "Wright's Hyperabduction Test", procedure: "Passively hyperabduct arm overhead, palpate radial pulse.", positive: "Pulse change or symptom reproduction", indicates: "Pectoralis minor compression" }
    ],
    treatmentHints: {
      goals: ["Release anterior and middle scalene", "Reduce pectoralis minor tension", "Restore first rib mobility", "Improve posture and ergonomics"],
      techniques: [
        { name: "Soft tissue release to scalenes (anterior, middle, posterior)", note: "Careful technique near carotid" },
        { name: "Myofascial release to pectoralis minor", note: "" },
        { name: "First rib mobilization prep — release scalenes and intercostals", note: "" },
        { name: "Postural re-education", note: "" }
      ],
      positioning: "Supine with small roll under thoracic spine to open anterior chest",
      frequency: "1–2x/week; reinforce with home stretching"
    }
  },

  {
    id: "lateral-epicondylitis",
    name: "Lateral Epicondylitis (Tennis Elbow)",
    region: "elbow",
    tags: ["tendinopathy", "overuse", "DOMS", "wrist extensors"],
    rom: [
      { movement: "Wrist Extension", normal: "0–70°", affected: "Painful, may be limited" },
      { movement: "Wrist Flexion", normal: "0–80°", affected: "Passive flexion stretches extensors — pain at end range" },
      { movement: "Elbow Flexion/Extension", normal: "0–145° / 0°", affected: "Usually full; pain with resisted extension with wrist flexed" }
    ],
    arom: {
      summary: "Active wrist extension against gravity or load is painful. Gripping activities reproduce lateral elbow pain.",
      keyFindings: [
        "Wrist extension against resistance painful",
        "Gripping reproduces lateral elbow pain",
        "Middle finger extension test positive (Maudsley)"
      ]
    },
    prom: {
      summary: "Full passive ROM typically preserved. Passive wrist flexion with elbow extended provokes pain by stretching extensor tendons.",
      keyFindings: [
        "Full passive ROM",
        "Passive wrist flexion + elbow extension stretches tendons — pain",
        "No capsular restriction"
      ]
    },
    mrt: [
      { muscle: "ECRB / ECRL", movement: "Resisted wrist extension", result: "Painful and may be weak" },
      { muscle: "Extensor Digitorum", movement: "Resisted middle finger extension", result: "Painful (Maudsley's test basis)" },
      { muscle: "Supinator", movement: "Resisted forearm supination", result: "May be painful" }
    ],
    endFeel: [
      { movement: "Wrist Extension", type: "tissue-stretch-firm", note: "Normal; pain may occur before end range" },
      { movement: "Wrist Flexion", type: "tissue-stretch-firm", note: "Stretches extensors; pain at end range" }
    ],
    causes: [
      "Repetitive wrist extension/gripping (tennis backhand, typing, plumbing, painting)",
      "Tendon micro-tearing at ECRB origin on lateral epicondyle",
      "Degeneration (tendinosis) rather than inflammation in chronic cases",
      "Sudden increase in activity level",
      "Weak shoulder and scapular stabilizers increasing elbow load"
    ],
    contraindications: {
      absolute: ["Recent injection site — avoid direct pressure for 1 week post-injection"],
      relative: ["Avoid deep friction in acute inflammatory stage", "No aggressive stretching in first week of acute injury"],
      massageSpecific: ["Cross-fiber friction contraindicated until subacute stage", "No percussion/tapotement over lateral epicondyle"]
    },
    muscleGroups: [
      { name: "ECRB (Extensor Carpi Radialis Brevis)", role: "Primary tendon involved — insertion on lateral epicondyle" },
      { name: "ECRL (Extensor Carpi Radialis Longus)", role: "Secondary involvement" },
      { name: "Extensor Digitorum Communis", role: "Often co-involved" },
      { name: "Supinator", role: "Deep layer; can compress radial nerve (PIN)" },
      { name: "Anconeus", role: "Elbow extensor; often hypertonic" }
    ],
    specialTests: [
      { name: "Cozen's Test", procedure: "Stabilize elbow; patient makes fist, pronates, and extends wrist against resistance.", positive: "Sharp pain at lateral epicondyle", indicates: "Lateral epicondylitis" },
      { name: "Mill's Test", procedure: "Passively flex wrist fully with elbow extended and forearm pronated.", positive: "Pain at lateral epicondyle", indicates: "Lateral epicondylitis" },
      { name: "Maudsley's Test (Middle Finger Test)", procedure: "Resist extension of middle finger (DIP joint) with elbow extended.", positive: "Pain at lateral epicondyle", indicates: "ECRB pathology" }
    ],
    treatmentHints: {
      goals: ["Reduce tendon irritation", "Restore extensor muscle flexibility", "Address proximal contributing factors (shoulder, posture)", "Progressive tendon loading"],
      techniques: [
        { name: "Effleurage to forearm extensors", note: "" },
        { name: "Deep transverse friction to ECRB at lateral epicondyle", note: "Subacute/chronic only" },
        { name: "Myofascial release to extensor compartment", note: "" },
        { name: "MET to wrist extensors", note: "" }
      ],
      positioning: "Seated or supine; arm on table, elbow slightly flexed and supported",
      frequency: "1–2x/week; eccentric loading exercises between sessions"
    }
  },

  {
    id: "medial-epicondylitis",
    name: "Medial Epicondylitis (Golfer's Elbow)",
    region: "elbow",
    tags: ["tendinopathy", "overuse", "wrist flexors", "golfer"],
    rom: [
      { movement: "Wrist Flexion", normal: "0–80°", affected: "Painful" },
      { movement: "Wrist Extension", normal: "0–70°", affected: "Passive extension stretches flexors — pain at medial elbow" },
      { movement: "Forearm Pronation", normal: "0–85°", affected: "May be painful" }
    ],
    arom: {
      summary: "Active wrist flexion and forearm pronation against resistance painful. Pain localized to medial epicondyle.",
      keyFindings: [
        "Resisted wrist flexion reproduces medial elbow pain",
        "Resisted pronation may reproduce pain",
        "Grip strength reduced"
      ]
    },
    prom: {
      summary: "Full passive ROM. Passive wrist extension with elbow extended stretches flexor tendons and provokes medial pain.",
      keyFindings: [
        "Full passive ROM",
        "Passive wrist extension + elbow extension provokes medial pain"
      ]
    },
    mrt: [
      { muscle: "FCR / FCU", movement: "Resisted wrist flexion", result: "Painful at medial epicondyle" },
      { muscle: "Pronator Teres", movement: "Resisted pronation", result: "Painful in some cases" },
      { muscle: "Palmaris Longus", movement: "Resisted wrist flexion", result: "May be involved" }
    ],
    endFeel: [
      { movement: "Wrist Flexion", type: "tissue-stretch-firm", note: "Normal" },
      { movement: "Wrist Extension", type: "tissue-stretch-firm", note: "Stretches flexor tendons — pain at end range" }
    ],
    causes: [
      "Repetitive wrist flexion and pronation (golf, baseball pitching, racquet sports)",
      "Micro-tears at flexor-pronator origin on medial epicondyle",
      "Sudden increase in activity",
      "Poor mechanics in throwing or swinging sports",
      "Occupational overuse (plumbing, carpentry)"
    ],
    contraindications: {
      absolute: ["Ulnar nerve involvement (cubital tunnel syndrome) — avoid direct compression over medial epicondyle groove"],
      relative: ["Avoid deep work in acute stage", "Check for ulnar nerve symptoms before medial elbow work"],
      massageSpecific: ["Do not compress ulnar nerve groove — nerve wraps posterior to medial epicondyle", "No aggressive stretching in acute phase"]
    },
    muscleGroups: [
      { name: "Flexor Carpi Radialis (FCR)", role: "Primary involvement at medial epicondyle origin" },
      { name: "Palmaris Longus", role: "Secondary involvement" },
      { name: "Flexor Carpi Ulnaris (FCU)", role: "Involved; overlies ulnar nerve" },
      { name: "Pronator Teres", role: "Originates at medial epicondyle; often co-involved" },
      { name: "Flexor Digitorum Superficialis", role: "Deeper involvement in severe cases" }
    ],
    specialTests: [
      { name: "Medial Epicondyle Palpation", procedure: "Direct palpation of medial epicondyle and proximal flexor-pronator mass.", positive: "Reproduction of patient's medial elbow pain", indicates: "Medial epicondylitis" },
      { name: "Resisted Wrist Flexion Test", procedure: "Resist wrist flexion with elbow extended.", positive: "Pain at medial epicondyle", indicates: "Medial epicondylitis" },
      { name: "Valgus Stress Test (to screen UCL)", procedure: "Apply valgus stress to elbow at 20–30° flexion.", positive: "Medial pain and/or laxity", indicates: "UCL sprain (differentiate from medial epicondylitis)" }
    ],
    treatmentHints: {
      goals: ["Reduce tendon irritation", "Restore flexor-pronator flexibility", "Screen for ulnar nerve involvement", "Progressive tendon loading"],
      techniques: [
        { name: "Effleurage and petrissage to forearm flexors", note: "" },
        { name: "Deep transverse friction to common flexor origin", note: "Subacute/chronic only" },
        { name: "Myofascial release to pronator teres", note: "" },
        { name: "Stretching — passive wrist extension", note: "Within pain tolerance" }
      ],
      positioning: "Seated or supine; forearm supinated on table",
      frequency: "1–2x/week; ergonomic assessment recommended"
    }
  },

  {
    id: "carpal-tunnel-syndrome",
    name: "Carpal Tunnel Syndrome (CTS)",
    region: "wrist-hand",
    tags: ["nerve entrapment", "median nerve", "repetitive strain"],
    rom: [
      { movement: "Wrist Flexion", normal: "0–80°", affected: "May be limited or pain-provoking" },
      { movement: "Wrist Extension", normal: "0–70°", affected: "Often provokes numbness/tingling; may be limited" }
    ],
    arom: {
      summary: "Wrist extension reproduces numbness/tingling in median nerve distribution (thumb, index, middle, radial ring finger). Grip strength reduced.",
      keyFindings: [
        "Wrist extension reproduces paraesthesia",
        "Grip strength reduced",
        "Fine motor deficits in advanced cases",
        "Symptoms worse at night"
      ]
    },
    prom: {
      summary: "Sustained passive wrist flexion reproduces symptoms (basis of Phalen's test). Full passive ROM usually preserved. No capsular restriction.",
      keyFindings: [
        "Sustained passive flexion reproduces symptoms (Phalen's)",
        "Full passive ROM",
        "No capsular pattern"
      ]
    },
    mrt: [
      { muscle: "Abductor Pollicis Brevis", movement: "Resisted thumb abduction", result: "Weak — most sensitive MRT finding" },
      { muscle: "Opponens Pollicis", movement: "Resisted thumb opposition", result: "Weak; thenar wasting in chronic cases" },
      { muscle: "Flexor Pollicis Brevis", movement: "Resisted thumb MCP flexion", result: "Weak in median nerve compression" }
    ],
    endFeel: [
      { movement: "Wrist Flexion", type: "tissue-stretch-firm", note: "Firm from dorsal capsule; may provoke symptoms" },
      { movement: "Wrist Extension", type: "tissue-stretch-firm", note: "Firm from palmar capsule; symptoms before end range" }
    ],
    causes: [
      "Repetitive wrist flexion/extension (keyboard use, assembly work)",
      "Pregnancy-related fluid retention",
      "Hypothyroidism / systemic conditions",
      "Wrist fracture or dislocation",
      "Hypertrophy of flexor tendons from overuse",
      "Space-occupying lesions within the carpal tunnel",
      "Obesity and diabetes (systemic risk factors)"
    ],
    contraindications: {
      absolute: ["Do not apply direct sustained compression over the carpal tunnel (palmar wrist crease)", "Post-surgical release — follow physician guidelines"],
      relative: ["Avoid aggressive joint mobilization in severe/surgical cases", "Cautious with hot packs over wrist — may increase swelling"],
      massageSpecific: ["No direct compression over carpal tunnel", "Avoid sustained wrist extension positioning during treatment"]
    },
    muscleGroups: [
      { name: "Flexor Digitorum Superficialis", role: "Passes through carpal tunnel; hypertrophy contributes to compression" },
      { name: "Flexor Digitorum Profundus", role: "Passes through carpal tunnel" },
      { name: "Flexor Pollicis Longus", role: "Passes through carpal tunnel" },
      { name: "Thenar Muscles (APB, OP)", role: "Median nerve innervated; weaken/waste in chronic CTS" },
      { name: "Pronator Teres", role: "Proximal median nerve compression contributor" }
    ],
    specialTests: [
      { name: "Phalen's Test", procedure: "Patient holds both wrists in full passive flexion for 60 seconds.", positive: "Paraesthesia in median nerve distribution", indicates: "Carpal tunnel compression" },
      { name: "Tinel's Sign", procedure: "Tap over carpal tunnel (palmar wrist crease) with fingertip.", positive: "Electric/tingling sensation into median nerve distribution", indicates: "Median nerve irritation at wrist" },
      { name: "Carpal Compression Test", procedure: "Apply direct thumb pressure over carpal tunnel for 30 seconds.", positive: "Paraesthesia reproduced", indicates: "CTS (high sensitivity)" },
      { name: "Reverse Phalen's (Prayer Test)", procedure: "Hold wrists in full extension for 60 seconds.", positive: "Paraesthesia reproduced", indicates: "CTS or proximal median nerve issue" }
    ],
    treatmentHints: {
      goals: ["Reduce soft tissue tension in forearm flexors", "Decompress carpal tunnel indirectly via proximal work", "Improve wrist mobility", "Patient education on ergonomics and splinting"],
      techniques: [
        { name: "Effleurage and petrissage to forearm flexors", note: "" },
        { name: "Myofascial release to flexor retinaculum (gentle)", note: "" },
        { name: "Lymphatic drainage to reduce edema", note: "If pregnancy-related" },
        { name: "Stretching of wrist flexors", note: "" }
      ],
      positioning: "Supine; arm supported on pillow at side",
      frequency: "1–2x/week; self-care stretching daily; night splinting recommended"
    }
  },

  {
    id: "de-quervains",
    name: "De Quervain's Tenosynovitis",
    region: "wrist-hand",
    tags: ["tendon", "thumb", "new mothers", "first dorsal compartment"],
    rom: [
      { movement: "Wrist Radial Deviation", normal: "0–20°", affected: "Painful; limited" },
      { movement: "Wrist Ulnar Deviation", normal: "0–30°", affected: "Stretches APL/EPB — reproduces pain (Finkelstein)" },
      { movement: "Thumb Extension/Abduction", normal: "Full", affected: "Painful against resistance or at end range" }
    ],
    arom: {
      summary: "Active thumb extension and abduction painful. Radial deviation painful. Swelling and crepitus over first dorsal compartment.",
      keyFindings: [
        "Pain at radial styloid over first dorsal compartment",
        "Active thumb movements painful",
        "Possible swelling/crepitus over tendon sheath"
      ]
    },
    prom: {
      summary: "Passive ulnar deviation with thumb adducted (Finkelstein's position) is the pathognomonic test. Passively full ROM otherwise.",
      keyFindings: [
        "Finkelstein position passively reproduces pain",
        "Full passive ROM in other planes"
      ]
    },
    mrt: [
      { muscle: "Abductor Pollicis Longus (APL)", movement: "Resisted thumb abduction", result: "Painful" },
      { muscle: "Extensor Pollicis Brevis (EPB)", movement: "Resisted thumb MCP extension", result: "Painful" }
    ],
    endFeel: [
      { movement: "Wrist Ulnar Deviation", type: "tissue-stretch-firm", note: "Stretches APL/EPB — pain at radial styloid" },
      { movement: "Thumb Abduction", type: "tissue-stretch-firm", note: "Normal end-feel; pain with overpressure" }
    ],
    causes: [
      "Repetitive thumb pinching and wrist radial deviation (new mothers lifting infant)",
      "Racquet sports, skiing (gripping pole)",
      "Occupational repetitive pinching/gripping",
      "Inflammatory arthritis (RA)",
      "Anatomical variation — septum in first dorsal compartment"
    ],
    contraindications: {
      absolute: ["Do not apply direct compression over inflamed tendon sheath in acute stage"],
      relative: ["Avoid deep friction in acute stage", "No corticosteroid injection site pressure for 1 week"],
      massageSpecific: ["No aggressive thumb or wrist mobilization in acute phase", "Gentle only over first dorsal compartment"]
    },
    muscleGroups: [
      { name: "Abductor Pollicis Longus (APL)", role: "Primary structure — runs through first dorsal compartment" },
      { name: "Extensor Pollicis Brevis (EPB)", role: "Primary structure — runs through first dorsal compartment" },
      { name: "Extensor Retinaculum", role: "Compartment roof; thickens in pathology" }
    ],
    specialTests: [
      { name: "Finkelstein's Test", procedure: "Patient tucks thumb in fist, then passively/actively ulnar deviate wrist.", positive: "Sharp pain at radial styloid over first dorsal compartment", indicates: "De Quervain's tenosynovitis" },
      { name: "Eichhoff's Test", procedure: "Examiner grasps thumb and ulnar deviates wrist passively.", positive: "Pain at radial styloid", indicates: "De Quervain's (variant of Finkelstein's)" }
    ],
    treatmentHints: {
      goals: ["Reduce tendon sheath inflammation", "Restore pain-free thumb and wrist motion", "Ergonomic modification"],
      techniques: [
        { name: "Effleurage proximal to distal along APL/EPB", note: "" },
        { name: "Myofascial release to abductor pollicis longus muscle belly in forearm", note: "" },
        { name: "Gentle cross-fiber friction to tendon sheath", note: "Subacute only" },
        { name: "Ice massage over first dorsal compartment", note: "Acute stage" }
      ],
      positioning: "Seated with forearm pronated on table; thumb in relaxed position",
      frequency: "1–2x/week; splinting between sessions in acute phase"
    }
  },

  {
    id: "cervical-strain-whiplash",
    name: "Cervical Strain / Whiplash (WAD)",
    region: "cervical",
    tags: ["trauma", "MVA", "muscle guarding", "WAD"],
    rom: [
      { movement: "Rotation", normal: "0–80° each", affected: "Limited bilaterally; most restricted toward side of impact" },
      { movement: "Lateral Flexion", normal: "0–45° each", affected: "Limited and painful" },
      { movement: "Flexion", normal: "0–50°", affected: "Limited; pain anteriorly" },
      { movement: "Extension", normal: "0–60°", affected: "Limited; pain posteriorly" }
    ],
    arom: {
      summary: "Global restriction in all planes with muscle guarding. Rotation and lateral flexion most limited. Patient holds head in protective posture.",
      keyFindings: [
        "Global cervical restriction",
        "Rotation and lateral flexion most limited",
        "Muscle guarding present",
        "Headache common (cervicogenic component)"
      ]
    },
    prom: {
      summary: "May reveal muscle guarding end-feel rather than capsular. Overpressure provokes pain. Passive range slightly exceeds active due to muscle relaxation.",
      keyFindings: [
        "Soft/muscle guarding end-feel",
        "Passive slightly exceeds active",
        "Overpressure provokes pain"
      ]
    },
    mrt: [
      { muscle: "Cervical Extensors (suboccipitals, semispinalis)", movement: "Resisted neck extension", result: "Weak and/or painful" },
      { muscle: "Deep Cervical Flexors (longus colli)", movement: "Cranio-cervical flexion test", result: "Often inhibited (poor activation)" },
      { muscle: "SCM", movement: "Resisted rotation/flexion", result: "May be tender or protective" }
    ],
    endFeel: [
      { movement: "Rotation", type: "tissue-stretch-soft", note: "Muscle guarding end-feel in acute phase" },
      { movement: "Lateral Flexion", type: "tissue-stretch-soft", note: "Muscle guarding; soft end-feel" },
      { movement: "Extension", type: "tissue-stretch-firm", note: "Firm/capsular in subacute-chronic; soft/guarding acutely" }
    ],
    causes: [
      "Motor vehicle accident (rear-end impact most common)",
      "Sports collision injury",
      "Fall or direct trauma to head/neck",
      "Acceleration-deceleration mechanism injuring muscles, ligaments, discs",
      "Postural strain (chronic low-grade)"
    ],
    contraindications: {
      absolute: ["Rule out fracture before treatment — C-spine precautions post-trauma", "Do not treat until vertebral artery and alar ligament integrity confirmed if high-velocity trauma", "Cervical spine instability is an absolute contraindication to mobilization or traction"],
      relative: ["Avoid aggressive cervical manipulation in acute phase", "No heat in first 72 hours post-injury", "Avoid prone neck rotation if vertebrobasilar insufficiency suspected"],
      massageSpecific: ["No high-velocity techniques", "Avoid direct pressure on anterior cervical triangle (carotid sinus)", "No deep suboccipital work until acute phase resolves"]
    },
    muscleGroups: [
      { name: "Suboccipitals (rectus capitis, obliquus)", role: "Commonly strained; refer pain to head" },
      { name: "Levator Scapulae", role: "Strained; refers pain to neck/angle of neck" },
      { name: "Upper Trapezius", role: "Hypertonic; headache referral" },
      { name: "SCM (Sternocleidomastoid)", role: "Strained in whiplash; dizziness referral pattern" },
      { name: "Deep Cervical Flexors (longus colli, capitis)", role: "Inhibited; loss of cervical stabilization" },
      { name: "Scalenes", role: "Often strained and hypertonic" }
    ],
    specialTests: [
      { name: "Sharp-Purser Test", procedure: "Seated; flex head slightly, examiner stabilizes axis and glides head posteriorly.", positive: "Clunk/reduction or symptom relief", indicates: "Atlantoaxial instability (rule out before treatment)" },
      { name: "Cervical Compression Test", procedure: "Apply downward pressure on top of head in neutral, flexion, extension, lateral flexion.", positive: "Pain or paresthesia into arm", indicates: "Cervical nerve root compression" },
      { name: "Cervical Distraction Test", procedure: "Axial traction applied to head.", positive: "Relief of pain or symptoms", indicates: "Foraminal compression — disc or facet origin" },
      { name: "VBI Screening (DeKleyn's)", procedure: "Passively extend and rotate head; hold 30 seconds.", positive: "Dizziness, nystagmus, diplopia, dysphagia", indicates: "Vertebrobasilar insufficiency — contraindication to manipulation" }
    ],
    treatmentHints: {
      goals: ["Reduce muscle guarding and pain", "Restore cervical ROM", "Activate deep cervical flexors", "Reduce headache component"],
      techniques: [
        { name: "Effleurage to cervical and periscapular region", note: "" },
        { name: "Gentle petrissage to upper trapezius and levator scapulae", note: "" },
        { name: "Trigger point therapy to suboccipitals", note: "Gentle; avoid overpressure" },
        { name: "Positional release / strain-counterstrain", note: "Acute phase preferred technique" }
      ],
      positioning: "Supine with head supported; avoid prone in acute phase",
      frequency: "2–3x/week initially; taper over 4–6 weeks"
    }
  },

  {
    id: "cervical-radiculopathy",
    name: "Cervical Radiculopathy",
    region: "cervical",
    tags: ["nerve root", "disc", "dermatomal", "radiating pain"],
    rom: [
      { movement: "Extension", normal: "0–60°", affected: "Provokes or increases arm symptoms" },
      { movement: "Ipsilateral Lateral Flexion", normal: "0–45°", affected: "Closes foramen — provokes symptoms (Spurling's)" },
      { movement: "Rotation", normal: "0–80°", affected: "Ipsilateral rotation toward symptomatic side provokes" }
    ],
    arom: {
      summary: "Extension and ipsilateral lateral flexion compress neural foramen — provokes radiating arm pain/numbness. Contralateral movements may relieve.",
      keyFindings: [
        "Arm pain/numbness in dermatomal pattern",
        "Extension + ipsilateral lateral flexion provokes symptoms",
        "Contralateral lateral flexion may relieve symptoms"
      ]
    },
    prom: {
      summary: "Passive Spurling's position (extension + ipsilateral lateral flexion + compression) reproduces radiating symptoms. Distraction relieves.",
      keyFindings: [
        "Spurling's position reproduces radicular symptoms",
        "Distraction relieves symptoms",
        "ULTT positive"
      ]
    },
    mrt: [
      { muscle: "C5 (Deltoid, biceps)", movement: "Resisted shoulder abduction, elbow flexion", result: "Weak C5 lesion" },
      { muscle: "C6 (Wrist extensors, biceps)", movement: "Resisted wrist extension, elbow flexion", result: "Weak C6 lesion; thumb/index numbness" },
      { muscle: "C7 (Triceps, wrist flexors)", movement: "Resisted elbow extension, wrist flexion", result: "Weak C7 lesion; middle finger numbness" },
      { muscle: "C8 (Finger flexors, hand intrinsics)", movement: "Grip, resisted finger flexion", result: "Weak C8 lesion; ring/little finger numbness" }
    ],
    endFeel: [
      { movement: "Cervical Extension", type: "tissue-stretch-firm", note: "Hard/bony in foraminal stenosis" },
      { movement: "Ipsilateral Lateral Flexion", type: "tissue-stretch-firm", note: "Provokes radicular symptoms before end range" }
    ],
    causes: [
      "Intervertebral disc herniation (younger patients)",
      "Foraminal stenosis from osteophytes (older patients)",
      "C5-C6 and C6-C7 most commonly affected",
      "Degenerative disc disease / spondylosis",
      "Acute trauma / whiplash"
    ],
    contraindications: {
      absolute: ["Cervical cord compression (myelopathy) — refer immediately", "Do not mobilize cervical spine with active myelopathic signs", "Signs of vertebrobasilar insufficiency — no manipulation"],
      relative: ["Avoid cervical extension and ipsilateral lateral flexion positioning during treatment", "No traction in acute disc herniation with severe radiculopathy"],
      massageSpecific: ["Position client in symptom-relieving position (contralateral lateral flexion)", "No deep transverse friction to cervical spine", "Avoid prone with neck rotation toward symptomatic side"]
    },
    muscleGroups: [
      { name: "Level-specific myotome muscles", role: "See MRT for specific levels C5-C8" },
      { name: "Cervical Extensors", role: "Often guarded/hypertonic protecting nerve root" },
      { name: "Scalenes", role: "May compress nerve roots proximally; often hypertonic" },
      { name: "Upper Trapezius", role: "Compensatory hypertonicity" }
    ],
    specialTests: [
      { name: "Spurling's Compression Test", procedure: "Extend and ipsilaterally laterally flex neck, apply downward compression.", positive: "Reproduction of arm pain/numbness in dermatomal pattern", indicates: "Cervical nerve root compression" },
      { name: "Cervical Distraction Test", procedure: "Apply axial traction to cervical spine.", positive: "Relief of arm symptoms", indicates: "Foraminal compression" },
      { name: "ULTT (Upper Limb Tension Test)", procedure: "Depress scapula, abduct shoulder, extend elbow, extend wrist, laterally flex cervical spine away.", positive: "Reproduction of symptoms; asymmetry", indicates: "Neural tissue mechanosensitivity — cervical origin" },
      { name: "Shoulder Abduction Relief Test (Bakody)", procedure: "Patient places hand on top of head (abducts shoulder).", positive: "Reduction in arm symptoms", indicates: "Cervical nerve root compression (typically C4-C5)" }
    ],
    treatmentHints: {
      goals: ["Reduce neural irritation", "Decrease muscle guarding", "Restore pain-free cervical ROM", "Neurodynamic mobilization when appropriate"],
      techniques: [
        { name: "Gentle effleurage to cervical region in side-lying", note: "" },
        { name: "Scalene and levator scapulae soft tissue release", note: "" },
        { name: "Cervical traction (gentle manual) — avoid in acute disc", note: "" },
        { name: "Neural mobilization (nerve gliding) — subacute stage", note: "" }
      ],
      positioning: "Side-lying — contralateral side down; position in symptom relief",
      frequency: "1–2x/week; refer to physiotherapist for cervical stabilization"
    }
  },

  {
    id: "lumbar-strain",
    name: "Lumbar Strain",
    region: "lumbar",
    tags: ["muscle", "back pain", "acute", "lifting injury"],
    rom: [
      { movement: "Flexion", normal: "0–60°", affected: "Painful and limited" },
      { movement: "Extension", normal: "0–25°", affected: "Painful; may be more limited than flexion in muscle strain" },
      { movement: "Lateral Flexion", normal: "0–25° each", affected: "Limited bilaterally or unilaterally" },
      { movement: "Rotation", normal: "0–30° each", affected: "Painful" }
    ],
    arom: {
      summary: "All planes restricted acutely. Flexion and extension most painful. Patient moves with guarded, stiff pattern. Pain localized to lumbar region without leg involvement.",
      keyFindings: [
        "Pain localized to lumbar spine — no leg radiation",
        "All planes restricted acutely",
        "Muscle guarding and protective posture visible",
        "Pain with movements loading paraspinals"
      ]
    },
    prom: {
      summary: "Passive overpressure painful. Lumbar spring testing reproduces local pain. SLR negative — differentiates from disc herniation.",
      keyFindings: [
        "Passive overpressure painful",
        "Negative SLR (no nerve root involvement)",
        "Spring testing of lumbar segments painful"
      ]
    },
    mrt: [
      { muscle: "Lumbar Paraspinals", movement: "Resisted extension", result: "Weak and painful" },
      { muscle: "Quadratus Lumborum", movement: "Resisted lateral flexion", result: "Painful unilaterally if QL strained" }
    ],
    endFeel: [
      { movement: "Flexion", type: "tissue-stretch-soft", note: "Muscle guarding in acute; firm/normal in subacute" },
      { movement: "Extension", type: "tissue-stretch-firm", note: "Firm capsular/bony in extension" }
    ],
    causes: [
      "Lifting with poor mechanics (flexed + rotated)",
      "Sudden unexpected load",
      "Prolonged sitting or postural strain",
      "Fatigue-related injury (end of work day)",
      "Weak core musculature",
      "Deconditioning"
    ],
    contraindications: {
      absolute: ["Cauda equina syndrome (bowel/bladder dysfunction + saddle anesthesia) — emergency referral"],
      relative: ["Avoid direct pressure on spinous processes acutely", "No prone positioning if painful; side-lying alternative", "Avoid deep lumbar work in first 48–72 hours"],
      massageSpecific: ["No deep transverse friction to lumbar spine acutely", "Avoid aggressive soft tissue release in acute phase", "Side-lying preferred over prone in acute lumbar pain"]
    },
    muscleGroups: [
      { name: "Erector Spinae (iliocostalis, longissimus, spinalis)", role: "Primary muscles strained" },
      { name: "Multifidus", role: "Deep stabilizer; often inhibited post-injury" },
      { name: "Quadratus Lumborum", role: "Lateral stabilizer; often strained in unilateral cases" },
      { name: "Gluteus Medius", role: "Stabilizer; often weak in lumbar dysfunction" },
      { name: "Hip Flexors (iliopsoas)", role: "Tightness increases lumbar lordosis and strain" }
    ],
    specialTests: [
      { name: "Straight Leg Raise (SLR)", procedure: "Patient supine, passively raise straight leg.", positive: "Radicular pain below knee at <70° (negative in pure strain)", indicates: "If negative: supports muscular strain diagnosis. If positive: nerve root involvement" },
      { name: "Kemp's Test (Quadrant Test)", procedure: "Standing; patient extends, laterally flexes, and rotates to affected side. Apply overpressure.", positive: "Local or referred pain", indicates: "Facet joint compression or foraminal narrowing" },
      { name: "Spring Test", procedure: "Prone; apply PA pressure to each lumbar spinous process.", positive: "Reproduction of local pain at specific segment", indicates: "Segmental lumbar dysfunction" }
    ],
    treatmentHints: {
      goals: ["Reduce muscle spasm and guarding", "Restore lumbar ROM", "Activate multifidus and core stabilizers", "Return to function"],
      techniques: [
        { name: "Effleurage and petrissage to lumbar paraspinals", note: "" },
        { name: "Trigger point release to QL and erector spinae", note: "" },
        { name: "MET to lumbar extensors", note: "" },
        { name: "Heat to relax muscle guarding", note: "Subacute — 72 hours post-injury" }
      ],
      positioning: "Side-lying with pillow between knees; prone if tolerated",
      frequency: "2–3x/week initially; taper over 3–4 weeks"
    }
  },

  {
    id: "lumbar-disc-herniation",
    name: "Lumbar Disc Herniation",
    region: "lumbar",
    tags: ["disc", "nerve root", "sciatica", "dermatome"],
    rom: [
      { movement: "Flexion", normal: "0–60°", affected: "Most limited; increases disc pressure and symptoms" },
      { movement: "Extension", normal: "0–25°", affected: "May relieve or provoke depending on herniation location" },
      { movement: "Lateral Flexion Away", normal: "0–25°", affected: "May increase symptoms; lateral shift visible in acute cases" }
    ],
    arom: {
      summary: "Flexion typically most limited and provokes radicular symptoms below knee. Lateral shift or antalgia often visible. Pain radiates into buttock and leg along dermatomal pattern.",
      keyFindings: [
        "Radicular pain below knee (true sciatica)",
        "Pain worse with flexion, sitting, coughing/sneezing",
        "Lateral antalgic shift visible in acute herniation",
        "Dermatomal sensory changes"
      ]
    },
    prom: {
      summary: "SLR positive — reproduces radicular symptoms below 70°. Passive lumbar flexion increases disc pressure. Compression provokes, distraction relieves.",
      keyFindings: [
        "Positive SLR (<70° reproduces radicular pain)",
        "Slump test positive",
        "Passive lumbar flexion provokes symptoms"
      ]
    },
    mrt: [
      { muscle: "L4 (Tibialis Anterior)", movement: "Resisted ankle dorsiflexion", result: "Weak L4 lesion" },
      { muscle: "L5 (EHL, hip abductors)", movement: "Resisted great toe extension, hip abduction", result: "Weak L5 lesion; lateral leg/dorsum foot numbness" },
      { muscle: "S1 (Gastrocnemius, gluteus maximus)", movement: "Single-leg calf raise, resisted hip extension", result: "Weak S1 lesion; heel/lateral foot numbness" }
    ],
    endFeel: [
      { movement: "Flexion", type: "tissue-stretch-firm", note: "Firm; radicular symptoms before end range" },
      { movement: "Extension", type: "tissue-stretch-firm", note: "Firm/bony; may relieve or provoke based on type" }
    ],
    causes: [
      "Repetitive lumbar flexion loading (L4-L5, L5-S1 most common)",
      "Acute flexion/rotation injury under load",
      "Degenerative disc disease progression",
      "Prolonged sitting increasing intradiscal pressure",
      "Smoking and obesity increase disc degeneration risk"
    ],
    contraindications: {
      absolute: ["Cauda equina syndrome — EMERGENCY referral (bilateral symptoms, bowel/bladder, saddle anesthesia)", "Do not apply traction or mobilization in cauda equina presentation", "Active myelopathy signs — refer immediately"],
      relative: ["Avoid lumbar flexion exercises/stretches in acute posterolateral herniation", "No prone lumbar massage if worsens neurological symptoms", "Avoid heat if significant inflammation"],
      massageSpecific: ["Position to minimize disc pressure (McKenzie-informed — extension bias often preferred)", "Avoid aggressive lumbar work that increases axial compression", "Side-lying preferred; avoid prone with pillowed flexion"]
    },
    muscleGroups: [
      { name: "Lumbar Multifidus", role: "Inhibited ipsilaterally post-herniation; needs re-activation" },
      { name: "Piriformis", role: "Hypertonic due to sciatic nerve irritation; compresses sciatic nerve" },
      { name: "Gluteus Maximus/Medius", role: "Inhibited due to pain; compensation by hamstrings" },
      { name: "Hamstrings", role: "Tight; neural tension along sciatic nerve" },
      { name: "Iliopsoas", role: "Tightness increases lumbar compression" }
    ],
    specialTests: [
      { name: "Straight Leg Raise (SLR)", procedure: "Supine; raise straight leg passively.", positive: "Radicular pain below knee at <70° on affected side", indicates: "L4-L5 or L5-S1 disc herniation with nerve root compression" },
      { name: "Slump Test", procedure: "Seated; slump thoracolumbar spine, flex neck, extend knee, dorsiflex ankle.", positive: "Reproduction of radicular symptoms, relieved by cervical extension", indicates: "Neural tissue mechanosensitivity — disc herniation" },
      { name: "Cross SLR (Well Leg Raise)", procedure: "Raise unaffected leg; watch for symptoms in affected leg.", positive: "Contralateral radicular symptoms reproduced", indicates: "Large central or paracentral disc herniation" },
      { name: "Bowstring Sign", procedure: "SLR to point of pain, then slightly lower leg; apply pressure to popliteal fossa.", positive: "Increase in radicular symptoms", indicates: "Sciatic nerve root irritation" }
    ],
    treatmentHints: {
      goals: ["Reduce neural irritation and pain", "Reduce muscle guarding", "Avoid postures that increase disc pressure", "Activate lumbar stabilizers"],
      techniques: [
        { name: "Effleurage to lumbar region in symptom-relieving position", note: "" },
        { name: "Piriformis release (prone or side-lying)", note: "" },
        { name: "Sciatic nerve mobilization / neural gliding", note: "Subacute stage" },
        { name: "Trigger point release to gluteus medius", note: "" }
      ],
      positioning: "Side-lying (neutral spine) or prone with pillow under abdomen for extension bias",
      frequency: "1–2x/week; McKenzie extension exercises daily; refer physiotherapy"
    }
  },

  {
    id: "piriformis-syndrome",
    name: "Piriformis Syndrome",
    region: "hip",
    tags: ["sciatic nerve", "pseudo-sciatica", "buttock pain", "hip rotators"],
    rom: [
      { movement: "Hip Internal Rotation", normal: "0–45°", affected: "Limited and painful — stretches piriformis" },
      { movement: "Hip Adduction", normal: "0–30°", affected: "Provokes pain when combined with IR (FAIR position)" },
      { movement: "Hip Flexion", normal: "0–120°", affected: "May be limited; reproduces buttock pain" }
    ],
    arom: {
      summary: "Hip IR and adduction provoke deep buttock pain. Sciatica-like symptoms down posterior leg but without true positive SLR. Pain with prolonged sitting.",
      keyFindings: [
        "Deep buttock pain with hip IR/ADD",
        "Pseudo-sciatica (posterior leg symptoms without true disc pathology)",
        "Pain with prolonged sitting (compresses sciatic nerve)",
        "Negative or atypical SLR"
      ]
    },
    prom: {
      summary: "FAIR test (Flexion, Adduction, Internal Rotation) passively stretches piriformis and compresses sciatic nerve — reproduces symptoms.",
      keyFindings: [
        "FAIR test provokes buttock/sciatic symptoms",
        "Passive hip IR limited and painful",
        "Palpation over piriformis reproduces symptoms"
      ]
    },
    mrt: [
      { muscle: "Piriformis", movement: "Resisted hip ER (at 0° hip flexion)", result: "Painful — may be weak" },
      { muscle: "Piriformis (reversed action)", movement: "Resisted hip ABD at 90° flexion", result: "Painful (reversal of piriformis action at 90°)" }
    ],
    endFeel: [
      { movement: "Hip IR", type: "tissue-stretch-firm", note: "Firm; limited and painful" },
      { movement: "Hip ADD + IR (FAIR)", type: "tissue-stretch-firm", note: "Firm; reproduces sciatic symptoms" }
    ],
    causes: [
      "Overuse in runners and cyclists",
      "Prolonged sitting (compresses sciatic nerve against piriformis)",
      "Anatomical variant — sciatic nerve passes through piriformis",
      "Trauma — direct blow to buttock",
      "SI joint dysfunction causing piriformis compensation",
      "Leg length discrepancy"
    ],
    contraindications: {
      absolute: ["Rule out true disc herniation before treating as piriformis syndrome"],
      relative: ["Avoid aggressive deep buttock work in acute inflammatory phase", "Caution with direct sciatic nerve compression"],
      massageSpecific: ["No direct sustained pressure on sciatic nerve", "Avoid bony landmarks — do not press on ischium or greater trochanter forcefully"]
    },
    muscleGroups: [
      { name: "Piriformis", role: "Primary — hypertonic; compresses sciatic nerve" },
      { name: "Obturator Internus/Externus", role: "Co-contracting hip external rotators" },
      { name: "Gemelli", role: "Co-contracting with piriformis" },
      { name: "Quadratus Femoris", role: "External rotator; may be involved" },
      { name: "Gluteus Medius/Minimus", role: "Commonly weak — compensatory piriformis overactivation" }
    ],
    specialTests: [
      { name: "FAIR Test", procedure: "Supine; passively flex, adduct, and internally rotate hip.", positive: "Reproduction of buttock/sciatic symptoms", indicates: "Piriformis compressing sciatic nerve" },
      { name: "Beatty's Test", procedure: "Side-lying (affected side up); patient lifts knee off table in FABERE position against gravity.", positive: "Deep buttock pain reproduced", indicates: "Piriformis syndrome" },
      { name: "Pace's Test", procedure: "Seated; patient abducts both legs against examiner resistance.", positive: "Pain and/or weakness in affected buttock", indicates: "Piriformis syndrome" },
      { name: "Freiberg's Sign", procedure: "Forceful passive IR of extended hip.", positive: "Deep buttock pain", indicates: "Piriformis stretching painful" }
    ],
    treatmentHints: {
      goals: ["Release piriformis hypertonicity", "Decompress sciatic nerve", "Strengthen gluteus medius", "Address SI joint if contributing"],
      techniques: [
        { name: "Deep tissue massage to piriformis", note: "Client prone or side-lying" },
        { name: "Trigger point therapy to piriformis (inferior to PSIS, superior to ischial tuberosity)", note: "" },
        { name: "Myofascial release to hip external rotators", note: "" },
        { name: "MET / post-isometric relaxation for piriformis", note: "" }
      ],
      positioning: "Prone with pillow under abdomen; or side-lying FAIR position for access",
      frequency: "1–2x/week; home stretching (FAIR/pigeon stretch) daily"
    }
  },

  {
    id: "it-band-syndrome",
    name: "IT Band Syndrome (ITBS)",
    region: "knee",
    tags: ["runner", "lateral knee", "overuse", "friction syndrome"],
    rom: [
      { movement: "Knee Flexion", normal: "0–140°", affected: "Pain at approximately 30° flexion (impingement zone)" },
      { movement: "Hip Abduction", normal: "0–45°", affected: "Ober's test — limited if IT band/TFL tight" },
      { movement: "Hip IR", normal: "0–45°", affected: "May be limited — TFL tightness" }
    ],
    arom: {
      summary: "Pain reproduced at approximately 30° knee flexion during running (footstrike). Pain on stairs (descending). No instability.",
      keyFindings: [
        "Lateral knee pain at 30° flexion (impingement zone)",
        "Pain with running, stairs, and cycling",
        "Point tenderness over lateral femoral epicondyle",
        "No instability or joint line tenderness"
      ]
    },
    prom: {
      summary: "Passive Ober's test shows restricted hip adduction with extended knee. Noble compression reproduces pain. Passive knee flexion to 30° provokes lateral knee pain.",
      keyFindings: [
        "Ober's test positive (limited hip ADD)",
        "Noble compression positive at 30° knee flexion",
        "Passive hip adduction limited"
      ]
    },
    mrt: [
      { muscle: "Hip Abductors (Gluteus Medius, TFL)", movement: "Resisted hip abduction", result: "Often weak — biomechanical contributing factor" },
      { muscle: "Knee Extensors", movement: "Resisted knee extension", result: "Usually normal" }
    ],
    endFeel: [
      { movement: "Hip Adduction (Ober's)", type: "tissue-stretch-firm", note: "Firm/tight — IT band restriction" },
      { movement: "Knee Flexion", type: "tissue-approximation", note: "Normal at full range; pain at 30° is impingement" }
    ],
    causes: [
      "Sudden increase in running mileage",
      "Downhill running",
      "Weak hip abductors (gluteus medius)",
      "Leg length discrepancy",
      "Overpronation of foot",
      "Running on cambered surfaces",
      "Tight TFL/IT band"
    ],
    contraindications: {
      absolute: [],
      relative: ["Avoid direct percussion/tapotement over lateral knee in acute phase", "No aggressive IT band stretching in acute stage"],
      massageSpecific: ["Do not roll or compress directly over lateral femoral epicondyle in acute phase", "Indirect release of TFL and gluteal region preferred"]
    },
    muscleGroups: [
      { name: "IT Band (iliotibial band)", role: "Non-contractile band; becomes compressive on lateral femoral epicondyle at 30° flexion" },
      { name: "TFL (Tensor Fasciae Latae)", role: "Feeds tension into IT band; often hypertonic" },
      { name: "Gluteus Maximus", role: "Upper fibers insert into IT band" },
      { name: "Gluteus Medius", role: "Often weak — primary biomechanical contributor" },
      { name: "Vastus Lateralis", role: "Lateral quadriceps; contributes to lateral knee tension" }
    ],
    specialTests: [
      { name: "Ober's Test", procedure: "Side-lying; passively abduct and extend hip, then lower (adduct) — support leg doesn't provide assistance.", positive: "Leg does not adduct to table — or pain on lowering", indicates: "IT band / TFL tightness" },
      { name: "Noble Compression Test", procedure: "Supine; flex knee to 30°, apply direct pressure over lateral femoral epicondyle.", positive: "Reproduction of lateral knee pain", indicates: "IT band syndrome" },
      { name: "Renne's Test", procedure: "Patient stands on affected leg at 30° knee flexion.", positive: "Lateral knee pain reproduced", indicates: "IT band impingement zone" }
    ],
    treatmentHints: {
      goals: ["Reduce IT band compression and pain", "Release TFL and gluteal complex", "Strengthen gluteus medius", "Correct training errors"],
      techniques: [
        { name: "Effleurage and petrissage to TFL and IT band from hip to knee", note: "" },
        { name: "Deep tissue release to TFL — avoid direct work over lateral epicondyle in acute", note: "" },
        { name: "Trigger point therapy to TFL and gluteus minimus", note: "" },
        { name: "Myofascial release to lateral retinaculum", note: "" }
      ],
      positioning: "Side-lying (affected side up) for IT band access",
      frequency: "1–2x/week; foam rolling TFL daily; hip abductor strengthening"
    }
  },

  {
    id: "patellofemoral-pain",
    name: "Patellofemoral Pain Syndrome (PFPS)",
    region: "knee",
    tags: ["runner's knee", "anterior knee", "overuse", "patellar tracking"],
    rom: [
      { movement: "Knee Flexion", normal: "0–140°", affected: "Painful through arc; worse squatting and stairs" },
      { movement: "Hip Abduction/ER", normal: "0–45° / 0–45°", affected: "Often weak — contributing factor" }
    ],
    arom: {
      summary: "Anterior knee pain with prolonged sitting (theater sign), stairs, squatting, and running. No instability or locking. Pain with patellar compression.",
      keyFindings: [
        "Anterior knee pain with squatting, stairs, prolonged sitting",
        "Theater sign — pain after prolonged knee flexion (cinema)",
        "No instability or locking",
        "Patellar crepitus possible"
      ]
    },
    prom: {
      summary: "Clarke's sign (resisted patellar glide) reproduces pain. Passive patellar compression painful. Patellar mobility may show lateral tracking.",
      keyFindings: [
        "Patellar compression test positive",
        "Lateral patellar tilt on assessment",
        "Full passive ROM with pain through arc"
      ]
    },
    mrt: [
      { muscle: "VMO (Vastus Medialis Oblique)", movement: "Resisted knee extension with attention to VMO", result: "Weak or delayed activation compared to VL" },
      { muscle: "Hip Abductors", movement: "Resisted hip abduction", result: "Often weak — allows dynamic valgus" },
      { muscle: "Hip External Rotators", movement: "Resisted hip ER", result: "Often weak — increases Q-angle stress" }
    ],
    endFeel: [
      { movement: "Knee Flexion", type: "tissue-approximation", note: "Normal end-feel; pain throughout arc" }
    ],
    causes: [
      "Weak VMO relative to vastus lateralis",
      "Weak hip abductors and external rotators (dynamic valgus)",
      "Tight lateral retinaculum and IT band",
      "Overpronation increasing Q-angle",
      "Sudden increase in running volume",
      "Training surface changes"
    ],
    contraindications: {
      absolute: [],
      relative: ["Avoid deep knee flexion loading until acute phase resolves", "No direct patellar compression in acute phase"],
      massageSpecific: ["Avoid direct pressure on inflamed synovial tissue of knee", "No aggressive IT band work at the lateral retinaculum in acute stage"]
    },
    muscleGroups: [
      { name: "VMO (Vastus Medialis Oblique)", role: "Medial patellar stabilizer; often inhibited" },
      { name: "Vastus Lateralis", role: "Lateral patellar pull; often overactive" },
      { name: "IT Band / Lateral Retinaculum", role: "Lateral tethering of patella" },
      { name: "Gluteus Medius", role: "Hip stabilizer; weakness causes dynamic valgus" },
      { name: "Hip External Rotators", role: "Control femoral IR; weakness increases lateral patellar stress" }
    ],
    specialTests: [
      { name: "Clarke's Test (Patellar Grind)", procedure: "Supine knee extended; compress patella inferiorly, ask patient to contract quads.", positive: "Pain under patella", indicates: "Patellofemoral joint irritation" },
      { name: "Patellar Tilt Test", procedure: "Supine; assess passive medial/lateral patellar tilt at 20–30° flexion.", positive: "Lateral tilt; medial border does not rise to horizontal", indicates: "Tight lateral retinaculum" },
      { name: "McConnell Test", procedure: "Apply medial patellar glide tape/manual correction during aggravating activity.", positive: "Reduction in pain with correction", indicates: "Faulty patellar tracking contributing to pain" }
    ],
    treatmentHints: {
      goals: ["Reduce patellar compression and irritation", "Correct lateral retinaculum tightness", "Strengthen VMO and hip abductors", "Patellar taping education"],
      techniques: [
        { name: "Effleurage to quadriceps", note: "" },
        { name: "Myofascial release to lateral retinaculum and IT band", note: "" },
        { name: "Trigger point therapy to vastus lateralis", note: "" },
        { name: "Patellar mobilization (medial glide)", note: "Within pain tolerance" }
      ],
      positioning: "Supine with knee supported in slight flexion",
      frequency: "1–2x/week; VMO and hip ABD strengthening essential"
    }
  },

  {
    id: "plantar-fasciitis",
    name: "Plantar Fasciitis",
    region: "foot",
    tags: ["heel pain", "fascia", "first step pain", "overuse"],
    rom: [
      { movement: "Ankle Dorsiflexion", normal: "0–20°", affected: "Often limited — tight gastrocnemius/soleus contributes" },
      { movement: "Great Toe Extension", normal: "0–70°", affected: "Passive extension provokes heel pain (Windlass mechanism)" }
    ],
    arom: {
      summary: "Classic first-step pain in the morning or after prolonged sitting. Heel pain with weight-bearing. Improves after 'warming up' then worsens with prolonged activity.",
      keyFindings: [
        "Worst pain with first morning steps",
        "Improves with activity then worsens",
        "Point tenderness at medial calcaneal tubercle",
        "Pain with prolonged standing"
      ]
    },
    prom: {
      summary: "Passive great toe extension (Windlass test) reproduces medial heel pain. Passive ankle dorsiflexion often limited due to gastro-soleus tightness.",
      keyFindings: [
        "Windlass test positive (passive great toe extension)",
        "Limited ankle dorsiflexion",
        "Palpation at medial calcaneal tubercle reproduces pain"
      ]
    },
    mrt: [
      { muscle: "Plantarflexors", movement: "Resisted plantarflexion", result: "Usually normal strength; may be painful" },
      { muscle: "Intrinsic foot muscles", movement: "Toe flexion and abduction", result: "Often weak — intrinsic weakness is a risk factor" }
    ],
    endFeel: [
      { movement: "Ankle Dorsiflexion", type: "tissue-stretch-firm", note: "Firm; limited by gastro-soleus tightness" },
      { movement: "Great Toe Extension", type: "tissue-stretch-firm", note: "Firm; provokes plantar fascia pain" }
    ],
    causes: [
      "Tight gastrocnemius/soleus complex reducing ankle DF",
      "Sudden increase in activity",
      "Flat feet (overpronation) or high arches (supination)",
      "Prolonged standing on hard surfaces",
      "Obesity (increases plantar fascia loading)",
      "Weak intrinsic foot muscles"
    ],
    contraindications: {
      absolute: [],
      relative: ["Avoid aggressive deep heel work in acute phase", "No direct percussion over heel in acute stage"],
      massageSpecific: ["Avoid deep transverse friction over calcaneal tubercle in acute phase", "Work proximal to distal (calf first) to reduce plantar fascia tension before direct work"]
    },
    muscleGroups: [
      { name: "Plantar Fascia", role: "Primary structure — fibrous band from calcaneus to metatarsal heads" },
      { name: "Gastrocnemius", role: "Tightness restricts DF and increases plantar fascia tension" },
      { name: "Soleus", role: "Tightness restricts DF; limits foot clearance" },
      { name: "Flexor Digitorum Brevis", role: "Runs alongside plantar fascia; intrinsic foot stabilizer" },
      { name: "Abductor Hallucis", role: "Medial intrinsic; often weak in plantar fasciitis" }
    ],
    specialTests: [
      { name: "Windlass Test", procedure: "Passive extension of the great toe (MTP joint) with patient standing or supine.", positive: "Reproduction of medial heel pain", indicates: "Plantar fasciitis" },
      { name: "Palpation of Medial Calcaneal Tubercle", procedure: "Direct palpation of medial tubercle on inferior heel.", positive: "Exact reproduction of patient's pain", indicates: "Plantar fasciitis" },
      { name: "Silfverskiöld Test", procedure: "Measure ankle DF with knee extended vs. knee flexed.", positive: "DF improves with knee flexed (gastrocnemius tight) vs. limited in both positions (soleus tight)", indicates: "Differentiates gastrocnemius vs. soleus tightness" }
    ],
    treatmentHints: {
      goals: ["Reduce plantar fascia tension", "Improve ankle dorsiflexion", "Strengthen intrinsic foot muscles", "Correct footwear and biomechanics"],
      techniques: [
        { name: "Deep tissue massage to gastrocnemius and soleus", note: "" },
        { name: "Myofascial release to plantar fascia (proximal to medial tubercle)", note: "" },
        { name: "Trigger point therapy to flexor digitorum brevis", note: "" },
        { name: "Stretching — plantar fascia stretch and calf stretches", note: "" }
      ],
      positioning: "Prone with foot off table end; or supine with knee extended",
      frequency: "1–2x/week; morning plantar fascia stretching protocol; night splinting if severe"
    }
  },

  {
    id: "achilles-tendinopathy",
    name: "Achilles Tendinopathy",
    region: "foot",
    tags: ["tendon", "posterior heel", "runners", "overuse"],
    rom: [
      { movement: "Ankle Dorsiflexion", normal: "0–20°", affected: "Limited; passive end-range DF stretches Achilles — painful" },
      { movement: "Plantarflexion", normal: "0–50°", affected: "Usually full; resisted painful" }
    ],
    arom: {
      summary: "Morning stiffness and pain along Achilles tendon. Pain worse with running, jumping. Improvement with warm-up. Palpable thickening of tendon.",
      keyFindings: [
        "Morning pain and stiffness in Achilles",
        "Pain worsens with loading (running, stairs)",
        "Palpable tendon thickening 2–6 cm above insertion",
        "Warm-up period may temporarily relieve pain"
      ]
    },
    prom: {
      summary: "Passive dorsiflexion at end range stretches Achilles — painful. Royal London Hospital Test (compressing tendon at different positions) distinguishes insertional vs. mid-portion.",
      keyFindings: [
        "End-range passive DF painful",
        "Tendon palpation reveals thickening and tenderness",
        "Crepitus possible"
      ]
    },
    mrt: [
      { muscle: "Gastrocnemius", movement: "Single-leg calf raise (most functional test)", result: "Painful; inability to perform >25 reps indicates significant tendinopathy" },
      { muscle: "Soleus", movement: "Single-leg calf raise with knee bent", result: "Painful; assesses soleus contribution" }
    ],
    endFeel: [
      { movement: "Ankle Dorsiflexion", type: "tissue-stretch-firm", note: "Firm; pain from Achilles stretch before end range" }
    ],
    causes: [
      "Sudden increase in training load",
      "Poor ankle dorsiflexion mobility",
      "Weakness of gastro-soleus complex",
      "Overpronation",
      "Fluoroquinolone antibiotics (tendon toxicity risk)",
      "Age-related collagen degeneration"
    ],
    contraindications: {
      absolute: ["Achilles tendon rupture — do not stretch or load; emergency referral", "Fluoroquinolone use — increased risk of rupture; avoid aggressive loading"],
      relative: ["Avoid aggressive stretching in acute insertional tendinopathy", "No deep friction in acute phase"],
      massageSpecific: ["Cross-fiber friction only in subacute-chronic mid-portion tendinopathy", "Avoid direct insertion work in insertional tendinopathy"]
    },
    muscleGroups: [
      { name: "Gastrocnemius", role: "Primary — contributes to Achilles; biarticular (crosses knee and ankle)" },
      { name: "Soleus", role: "Deeper; more important in walking than running" },
      { name: "Plantaris", role: "Small muscle; may be involved in medial Achilles pain" },
      { name: "Deep Posterior Compartment (FHL, FDL)", role: "Medial Achilles pain differential" }
    ],
    specialTests: [
      { name: "Royal London Hospital Test", procedure: "Palpate Achilles tendon in maximal plantarflexion, then dorsiflexion.", positive: "Pain decreases in dorsiflexion (differentiates mid-portion from peritendon)", indicates: "Mid-portion Achilles tendinopathy" },
      { name: "Single-Leg Calf Raise Test", procedure: "Count single-leg calf raises to fatigue. Compare bilaterally.", positive: "Significant asymmetry or pain before 25 reps", indicates: "Calf-Achilles complex weakness/pathology" },
      { name: "Thompson (Simmonds) Test", procedure: "Prone; squeeze gastrocnemius.", positive: "No plantarflexion occurs", indicates: "Achilles tendon rupture — differentiate from tendinopathy" }
    ],
    treatmentHints: {
      goals: ["Reduce tendon irritation", "Improve calf complex flexibility", "Introduce eccentric loading program", "Correct training errors"],
      techniques: [
        { name: "Effleurage and petrissage to gastrocnemius and soleus", note: "" },
        { name: "Deep transverse friction to Achilles tendon", note: "Mid-portion only; subacute-chronic" },
        { name: "Myofascial release to posterior compartment", note: "" },
        { name: "Stretching — gastroc and soleus", note: "" }
      ],
      positioning: "Prone with foot over table edge",
      frequency: "1–2x/week; eccentric calf loading protocol (Alfredson) daily"
    }
  },

  {
    id: "shin-splints",
    name: "Shin Splints (MTSS)",
    region: "foot",
    tags: ["tibial", "overuse", "runner", "medial tibial stress syndrome"],
    rom: [
      { movement: "Ankle Dorsiflexion", normal: "0–20°", affected: "May be limited; overpronation is a risk factor" },
      { movement: "Subtalar Eversion/Inversion", normal: "Normal", affected: "Overpronation (excessive eversion) is biomechanical risk" }
    ],
    arom: {
      summary: "Diffuse pain along posteromedial tibia during and after running. Pain improves with rest. No single point of maximum tenderness (differentiates from stress fracture).",
      keyFindings: [
        "Diffuse pain along posteromedial tibia — lower 1/3",
        "Pain during and after running; improves with rest",
        "No single point of maximum tenderness",
        "Bilateral in up to 50% of cases"
      ]
    },
    prom: {
      summary: "Full passive ROM. Passive dorsiflexion may be limited. Percussion test along tibia and hop test reproduce pain. No nerve root involvement.",
      keyFindings: [
        "Full passive ROM",
        "Percussion test along tibia reproduces pain (suggests stress fracture if focal — refer for imaging)",
        "Hop test painful"
      ]
    },
    mrt: [
      { muscle: "Tibialis Posterior", movement: "Resisted ankle inversion and plantarflexion", result: "May be painful or weak" },
      { muscle: "Flexor Digitorum Longus", movement: "Resisted toe flexion", result: "May be involved in posterior MTSS" },
      { muscle: "Tibialis Anterior", movement: "Resisted dorsiflexion", result: "Painful in anterior MTSS (anterior shin splints)" }
    ],
    endFeel: [
      { movement: "Ankle Dorsiflexion", type: "tissue-stretch-firm", note: "Firm; may be limited" }
    ],
    causes: [
      "Sudden increase in running volume or intensity",
      "Running on hard surfaces",
      "Overpronation increasing tibial stress",
      "Worn-out footwear",
      "Weak hip abductors causing dynamic valgus",
      "Female athlete triad risk"
    ],
    contraindications: {
      absolute: ["Tibial stress fracture — no activity until imaging clearance; no massage over fracture site"],
      relative: ["Rule out stress fracture before treating as MTSS — refer for imaging if focal point tenderness", "Avoid aggressive periosteal work in acute phase"],
      massageSpecific: ["No direct percussion or tapotement over tibia", "No aggressive deep tissue over posteromedial tibia acutely"]
    },
    muscleGroups: [
      { name: "Tibialis Posterior", role: "Traction on tibial periosteum during overpronation" },
      { name: "Flexor Digitorum Longus", role: "Traction on tibial periosteum" },
      { name: "Soleus", role: "Traction at tibial origin — posteromedial border" },
      { name: "Tibialis Anterior", role: "Anterior MTSS variant" }
    ],
    specialTests: [
      { name: "Hop Test", procedure: "Single-leg hop 10 times on affected leg.", positive: "Reproduction of shin pain with hopping", indicates: "MTSS or tibial stress fracture — if positive, refer for imaging" },
      { name: "Percussion Test (Tuning Fork)", procedure: "Strike tuning fork and apply to tibial shaft; move proximally and distally.", positive: "Focal point of pain reproduction", indicates: "Tibial stress fracture (refer for imaging if positive)" },
      { name: "Palpation Test", procedure: "Palpate along posteromedial tibial border.", positive: "Diffuse tenderness lower 1/3 tibia", indicates: "MTSS (vs. focal tenderness in stress fracture)" }
    ],
    treatmentHints: {
      goals: ["Reduce tibial periosteum irritation", "Release lower leg muscles", "Address biomechanical contributors (overpronation)", "Gradual return to running"],
      techniques: [
        { name: "Effleurage to lower leg posterior compartment", note: "" },
        { name: "Deep tissue massage to tibialis posterior and soleus", note: "" },
        { name: "Periosteal massage along tibial border (gentle)", note: "Subacute only" },
        { name: "Myofascial release to deep posterior compartment", note: "" }
      ],
      positioning: "Prone or side-lying; ankle off table edge",
      frequency: "1–2x/week; orthotics assessment; training load modification"
    }
  },

  {
    id: "ankle-sprain-lateral",
    name: "Lateral Ankle Sprain",
    region: "foot",
    tags: ["inversion", "ATFL", "ligament", "sprain"],
    rom: [
      { movement: "Ankle Inversion", normal: "0–35°", affected: "Excessive laxity or painful depending on grade" },
      { movement: "Ankle Dorsiflexion", normal: "0–20°", affected: "Limited due to swelling and pain in acute phase" },
      { movement: "Plantarflexion", normal: "0–50°", affected: "Painful in acute phase" }
    ],
    arom: {
      summary: "Acute lateral ankle pain after inversion mechanism. Swelling and bruising over lateral malleolus. Pain limits all ankle movements. Ottawa Ankle Rules guide imaging.",
      keyFindings: [
        "Mechanism: inversion/plantarflexion",
        "Swelling and bruising over lateral malleolus",
        "Point tenderness over ATFL (anterior talofibular ligament)",
        "Pain with weight-bearing (Grade II-III)"
      ]
    },
    prom: {
      summary: "Passive inversion and anterior drawer test painful and may show laxity. Anterior drawer assesses ATFL; talar tilt assesses CFL.",
      keyFindings: [
        "Passive inversion painful",
        "Anterior drawer test positive (ATFL laxity in grade II-III)",
        "Talar tilt test positive (CFL in severe sprain)"
      ]
    },
    mrt: [
      { muscle: "Peroneals (PL, PB)", movement: "Resisted eversion", result: "Weak and/or painful — peroneals are primary dynamic stabilizers" },
      { muscle: "Tibialis Anterior", movement: "Resisted dorsiflexion", result: "Usually normal" }
    ],
    endFeel: [
      { movement: "Ankle Inversion", type: "tissue-stretch-soft", note: "Soft/lax in Grade II-III sprain; painful" },
      { movement: "Ankle DF", type: "tissue-stretch-firm", note: "Firm normally; limited by swelling acutely" }
    ],
    causes: [
      "Inversion mechanism (foot rolling inward and plantarflexing)",
      "ATFL most commonly torn (plantarflexion + inversion)",
      "CFL involvement in more severe sprains",
      "Landing from jump on uneven surface",
      "Functional instability from prior sprain history",
      "Weak peroneals (primary dynamic stabilizers)"
    ],
    contraindications: {
      absolute: ["Fracture — refer if Ottawa Ankle Rules positive", "Do not apply direct massage over acute hematoma or fracture site"],
      relative: ["No aggressive joint mobilization in Grade III sprain until ligament integrity confirmed", "Avoid heat in acute (first 72 hours)"],
      massageSpecific: ["No direct pressure over torn ATFL/CFL in acute phase", "Effleurage only in acute; progress to deeper work in subacute", "No aggressive stretching in acute phase — risk of further ligament damage"]
    },
    muscleGroups: [
      { name: "Peroneus Longus", role: "Primary dynamic lateral stabilizer; often strained in conjunction" },
      { name: "Peroneus Brevis", role: "Dynamic lateral stabilizer; tendon can be avulsed" },
      { name: "ATFL (Anterior Talofibular Ligament)", role: "Primary restraint to ankle inversion in plantarflexion — most commonly torn" },
      { name: "CFL (Calcaneofibular Ligament)", role: "Involved in moderate-severe sprains" },
      { name: "PTFL (Posterior Talofibular Ligament)", role: "Rarely torn except in complete dislocation" }
    ],
    specialTests: [
      { name: "Anterior Drawer Test (Ankle)", procedure: "Supine; stabilize tibia, draw calcaneus anteriorly with ankle in 20° plantarflexion.", positive: "Excessive anterior translation and/or 'suction sign'", indicates: "ATFL injury" },
      { name: "Talar Tilt Test", procedure: "Stabilize distal tibia, invert/adduct calcaneus.", positive: "Excessive inversion compared to contralateral", indicates: "CFL injury" },
      { name: "Ottawa Ankle Rules", procedure: "Assess bone tenderness at posterior 6 cm of fibula or tibia, malleoli, navicular, 5th metatarsal base; inability to weight-bear 4 steps.", positive: "If any bone tender point or inability to bear weight", indicates: "Refer for X-ray to rule out fracture" }
    ],
    treatmentHints: {
      goals: ["Reduce swelling and pain (PRICE initially)", "Restore ROM", "Strengthen peroneals", "Restore proprioception/balance"],
      techniques: [
        { name: "Effleurage for lymphatic drainage (acute — proximal to distal)", note: "" },
        { name: "Petrissage to lower leg peroneals in subacute", note: "" },
        { name: "Cross-fiber friction to ATFL", note: "Subacute/chronic only — Grade I-II" },
        { name: "Joint mobilization (talocrural posterior glide for DF)", note: "Subacute" }
      ],
      positioning: "Supine with ankle supported; elevate limb in acute",
      frequency: "2–3x/week in acute/subacute; peroneal strengthening and balance training essential"
    }
  },

  {
    id: "hamstring-strain",
    name: "Hamstring Strain",
    region: "hip",
    tags: ["muscle strain", "sprinting", "posterior thigh", "grade I-III"],
    rom: [
      { movement: "Knee Extension with Hip Flexed (SLR)", normal: "Full", affected: "Limited — hamstring tightness and pain" },
      { movement: "Hip Flexion (knee extended)", normal: "0–90°", affected: "Limited by hamstring pain" }
    ],
    arom: {
      summary: "Acute posterior thigh pain during sprint or explosive movement. Palpable defect in Grade III. Pain with active knee flexion and hip extension.",
      keyFindings: [
        "Acute onset during sprinting or high-speed running",
        "Posterior thigh pain — distal 1/3 commonly involved",
        "Pain with active knee flexion and hip extension",
        "Palpable defect in Grade III tear"
      ]
    },
    prom: {
      summary: "SLR limited and painful. Passive knee extension with hip at 90° limited by hamstring pain. No nerve root pattern.",
      keyFindings: [
        "SLR limited by pain and hamstring tightness",
        "Passive stretch provokes reproduction of pain",
        "No dermatomal/radicular pattern"
      ]
    },
    mrt: [
      { muscle: "Biceps Femoris", movement: "Resisted knee flexion (knee flexed 30–40°)", result: "Painful and weak; Grade III very weak" },
      { muscle: "Semimembranosus/Semitendinosus", movement: "Resisted knee flexion with IR (ST/SM) vs. ER (BF)", result: "Identifies which hamstring involved" }
    ],
    endFeel: [
      { movement: "Straight Leg Raise", type: "tissue-stretch-firm", note: "Firm/tight — hamstring tension; pain before end range" },
      { movement: "Knee Extension (prone)", type: "tissue-stretch-firm", note: "Firm; painful at end range in hamstring strain" }
    ],
    causes: [
      "High-speed sprinting (eccentric overload during late swing phase)",
      "Inadequate warm-up",
      "Fatigue",
      "Previous hamstring strain (biggest risk factor)",
      "Strength imbalance (hamstring:quadriceps ratio <0.6)",
      "Reduced hamstring flexibility"
    ],
    contraindications: {
      absolute: ["Grade III complete rupture — refer for surgical assessment", "Proximal hamstring avulsion — no aggressive stretching; surgical referral"],
      relative: ["No aggressive stretching for 48–72 hours post-Grade II strain", "Avoid deep transverse friction in acute phase"],
      massageSpecific: ["No massage directly over acute hematoma (Grade II-III)", "Begin with effleurage only in first 48–72 hours", "Avoid aggressive work at ischial tuberosity attachment in acute"]
    },
    muscleGroups: [
      { name: "Biceps Femoris (long and short heads)", role: "Most commonly strained — lateral hamstring" },
      { name: "Semimembranosus", role: "Medial hamstring; proximal attachment more commonly injured" },
      { name: "Semitendinosus", role: "Medial hamstring; less commonly strained" },
      { name: "Gluteus Maximus", role: "Hip extensor compensation with proximal hamstring injury" }
    ],
    specialTests: [
      { name: "Active Knee Extension Test", procedure: "Patient supine, hip flexed to 90°, actively extends knee from 90° flexion.", positive: "Limited knee extension with pain or >20° asymmetry", indicates: "Hamstring strain or tightness" },
      { name: "Puranen-Orava Test", procedure: "Standing; patient flexes hip with knee extended by placing heel on high surface and leans forward.", positive: "Pain at proximal hamstring (ischial tuberosity)", indicates: "Proximal hamstring tendinopathy" },
      { name: "Askling's H-Test", procedure: "Patient supine; slump forward and extend one leg while examiner provides resistance.", positive: "Reproduction of hamstring pain", indicates: "Hamstring strain" }
    ],
    treatmentHints: {
      goals: ["Control acute hematoma (PRICE)", "Restore pain-free ROM", "Progress eccentric strength", "Return to sport criteria met"],
      techniques: [
        { name: "Gentle effleurage distal to injury (proximal to distal for edema)", note: "Acute" },
        { name: "Petrissage to hamstring belly", note: "Subacute" },
        { name: "Cross-fiber friction at healing site", note: "Subacute-chronic — stimulates collagen alignment" },
        { name: "MET to hamstrings", note: "" }
      ],
      positioning: "Prone with knee slightly flexed; or supine for SLR assessment",
      frequency: "2–3x/week; progressive eccentric loading protocol essential for return to sport"
    }
  },

  {
    id: "greater-trochanteric-bursitis",
    name: "Greater Trochanteric Bursitis",
    region: "hip",
    tags: ["bursitis", "lateral hip", "running", "overuse"],
    rom: [
      { movement: "Hip Adduction", normal: "0–30°", affected: "Stretches IT band/TFL over trochanteric bursa — provokes pain" },
      { movement: "Hip Abduction", normal: "0–45°", affected: "Resisted abduction compresses — may provoke pain" },
      { movement: "Hip Flexion/Extension", normal: "Full", affected: "Generally preserved; loading painful" }
    ],
    arom: {
      summary: "Lateral hip pain over greater trochanter. Pain with walking, crossing legs, sleeping on affected side. Tenderness to palpation over greater trochanter.",
      keyFindings: [
        "Lateral hip pain over greater trochanter",
        "Pain with walking and side-lying on affected side",
        "Pain crossing legs (hip adduction)",
        "Positive FABER test"
      ]
    },
    prom: {
      summary: "FABER (hip flexion, abduction, external rotation) provocative. Passive adduction with hip and knee flexed stretches IT band over bursa.",
      keyFindings: [
        "FABER test positive (lateral hip pain)",
        "Passive hip adduction provokes lateral hip pain",
        "Ober's test may reproduce symptoms"
      ]
    },
    mrt: [
      { muscle: "Gluteus Medius", movement: "Resisted hip abduction", result: "Painful; may be weak" },
      { muscle: "TFL", movement: "Resisted hip ABD/IR", result: "May be painful" }
    ],
    endFeel: [
      { movement: "Hip Adduction", type: "tissue-stretch-firm", note: "Firm; may provoke lateral hip pain" },
      { movement: "Hip ABD", type: "tissue-stretch-firm", note: "Normal end-feel; resisted ABD may provoke" }
    ],
    causes: [
      "Repetitive friction of IT band over greater trochanter",
      "Leg length discrepancy",
      "Weak gluteus medius — excessive hip adduction in gait",
      "Running on cambered surfaces",
      "Sudden increase in training load",
      "Female sex (wider pelvis increases Q-angle)"
    ],
    contraindications: {
      absolute: ["Infected bursitis (septic) — do not massage; medical emergency"],
      relative: ["Avoid direct compression over inflamed bursa in acute phase", "No heat over bursa in acute inflammation"],
      massageSpecific: ["No direct pressure over greater trochanteric bursa in acute", "Work proximal (TFL/glutes) before approaching trochanteric region"]
    },
    muscleGroups: [
      { name: "Trochanteric Bursa", role: "Inflamed bursa between IT band and greater trochanter" },
      { name: "TFL (Tensor Fasciae Latae)", role: "Primary friction source over bursa during hip flexion/extension" },
      { name: "Gluteus Medius", role: "Often weak; excessive hip drop increases IT band friction" },
      { name: "Gluteus Minimus", role: "Medial rotator and ABD; may co-contribute" },
      { name: "IT Band", role: "Compresses bursa with repeated hip movements" }
    ],
    specialTests: [
      { name: "FABER Test", procedure: "Supine; place ankle on contralateral knee (Figure 4), gently press knee toward table.", positive: "Lateral hip pain (also reproduces SI joint or hip joint pain)", indicates: "Greater trochanteric bursitis or hip joint pathology" },
      { name: "Ober's Test", procedure: "Side-lying; passively extend and abduct hip, release — assess for IT band tightness.", positive: "Leg does not fall to adduction; pain over trochanter", indicates: "IT band tightness contributing to bursitis" },
      { name: "Trochanteric Palpation", procedure: "Direct palpation over greater trochanter.", positive: "Exact reproduction of patient's lateral hip pain", indicates: "Trochanteric bursitis" }
    ],
    treatmentHints: {
      goals: ["Reduce bursal inflammation indirectly", "Release TFL and IT band tension", "Strengthen gluteus medius", "Correct gait mechanics"],
      techniques: [
        { name: "Effleurage to TFL and lateral thigh", note: "" },
        { name: "Deep tissue release to TFL — proximal to distal", note: "Avoid direct trochanteric pressure in acute" },
        { name: "Trigger point therapy to gluteus medius and TFL", note: "" },
        { name: "Myofascial release to lateral hip", note: "" }
      ],
      positioning: "Side-lying (unaffected side down) to access TFL and glutes",
      frequency: "1–2x/week; gluteus medius strengthening; avoid side-sleeping on affected side"
    }
  },

  {
    id: "si-joint-dysfunction",
    name: "SI Joint Dysfunction",
    region: "lumbar",
    tags: ["sacroiliac", "pelvis", "low back pain", "posterior pelvic pain"],
    rom: [
      { movement: "Hip Flexion (FABER)", normal: "Full", affected: "FABER position reproduces SI pain" },
      { movement: "Lumbar Rotation", normal: "0–30° each", affected: "Rotation loads SI joint — may be painful" },
      { movement: "Hip Extension", normal: "0–30°", affected: "Stork test positive — SI joint loads with hip extension" }
    ],
    arom: {
      summary: "Unilateral posterior pelvic pain at or near PSIS. Pain with transitions (sitting to standing), weight-bearing on one leg, stairs. No radiculopathy.",
      keyFindings: [
        "Unilateral posterior pelvic pain — PSIS/SI region",
        "Pain with transitions and unilateral weight-bearing",
        "Palpation over SI joint reproduces pain",
        "No dermatomal radiculopathy"
      ]
    },
    prom: {
      summary: "Cluster of SI joint provocation tests positive (FABER, FADIR, Gaenslen's, posterior shear). Three or more positive tests = high specificity for SI dysfunction.",
      keyFindings: [
        "Multiple SI provocation tests positive",
        "FABER positive (posterior SI pain)",
        "Posterior shear test positive"
      ]
    },
    mrt: [
      { muscle: "Gluteus Medius", movement: "Resisted hip abduction", result: "Often weak on affected side" },
      { muscle: "Piriformis", movement: "Resisted hip ER", result: "May be painful — often co-exists with piriformis syndrome" }
    ],
    endFeel: [
      { movement: "FABER (hip)", type: "tissue-stretch-firm", note: "Firm at end range; posterior pelvic pain provoked" }
    ],
    causes: [
      "Pregnancy — relaxin-induced ligament laxity",
      "Leg length discrepancy",
      "Lumbar fusion surgery (adjacent segment stress)",
      "Fall onto buttock",
      "Repetitive torsional loading",
      "Hypermobility",
      "Weak core and gluteal muscles"
    ],
    contraindications: {
      absolute: ["Fracture of sacrum or ilium — imaging required before treatment"],
      relative: ["Avoid aggressive manipulation in pregnancy", "Caution with inflammatory arthropathy affecting SI (AS, psoriatic) — avoid aggressive stretching"],
      massageSpecific: ["No direct pressure on posterior SI joint ligaments in acute phase", "Work gluteal and lumbar musculature first before approaching SI"]
    },
    muscleGroups: [
      { name: "Gluteus Maximus", role: "Compresses SI joint — sacrotuberous ligament attachment" },
      { name: "Piriformis", role: "Crosses sacrum to femur; directly loads SI joint" },
      { name: "Multifidus", role: "Lumbar-SI stabilizer; often inhibited" },
      { name: "Iliacus", role: "Anterior SI joint stabilizer" },
      { name: "Gluteus Medius", role: "Pelvic stabilizer; weakness increases SI loading" }
    ],
    specialTests: [
      { name: "FABER Test (Patrick's)", procedure: "Supine; Figure-4 position — flex, abduct, ER hip; press knee toward table.", positive: "Posterior pelvic/SI pain (not hip joint pain)", indicates: "SI joint dysfunction" },
      { name: "Gaenslen's Test", procedure: "Supine; flex one hip to chest, extend other hip off table into extension.", positive: "Posterior pelvic pain on extended side", indicates: "SI joint compression" },
      { name: "Posterior Shear (Thigh Thrust) Test", procedure: "Supine; flex hip to 90°, apply axial force down through femur.", positive: "Posterior pelvic pain", indicates: "SI joint dysfunction" },
      { name: "Gillet (Stork) Test", procedure: "Standing; patient flexes one hip and knee to 90°. Examiner monitors PSIS movement.", positive: "PSIS does not move inferiorly relative to S2 (ilium does not nod forward)", indicates: "SI joint hypomobility" }
    ],
    treatmentHints: {
      goals: ["Reduce SI joint irritation", "Release gluteal and piriformis tension", "Restore lumbopelvic stability", "Address leg length discrepancy"],
      techniques: [
        { name: "Effleurage and petrissage to gluteal region", note: "" },
        { name: "Trigger point therapy to piriformis and gluteus medius", note: "" },
        { name: "MET to piriformis and hip external rotators", note: "" },
        { name: "Myofascial release to thoracolumbar fascia", note: "" }
      ],
      positioning: "Side-lying or prone; support pelvis symmetrically",
      frequency: "1–2x/week; core and glute stabilization exercises; refer for SI belt if hypermobile"
    }
  },

  {
    id: "hip-flexor-strain",
    name: "Hip Flexor Strain (Iliopsoas)",
    region: "hip",
    tags: ["iliopsoas", "groin", "anterior hip", "muscle strain"],
    rom: [
      { movement: "Hip Extension", normal: "0–30°", affected: "Limited and painful — stretches iliopsoas" },
      { movement: "Hip Flexion", normal: "0–120°", affected: "Painful against resistance; full passive usually preserved" }
    ],
    arom: {
      summary: "Anterior hip/groin pain with active hip flexion. Stairs, running, kicking painful. Thomas Test positive (hip flexion contracture).",
      keyFindings: [
        "Anterior hip/groin pain with hip flexion",
        "Weakness of hip flexion against resistance",
        "Thomas Test may show hip flexion contracture",
        "Snapping hip (coxa saltans) possible in iliotibial variant"
      ]
    },
    prom: {
      summary: "Passive hip extension stretches iliopsoas and provokes anterior hip pain. Full passive flexion usually preserved.",
      keyFindings: [
        "Passive hip extension provokes anterior hip pain",
        "Thomas Test positive",
        "Full passive flexion generally preserved"
      ]
    },
    mrt: [
      { muscle: "Iliopsoas", movement: "Resisted hip flexion (seated)", result: "Painful and/or weak" },
      { muscle: "Rectus Femoris", movement: "Resisted hip flexion + knee extension", result: "May be co-involved" }
    ],
    endFeel: [
      { movement: "Hip Extension", type: "tissue-stretch-firm", note: "Firm; painful at end range in hip flexor strain" },
      { movement: "Hip Flexion", type: "tissue-approximation", note: "Normal at full range" }
    ],
    causes: [
      "Sudden explosive hip flexion (sprinting, kicking)",
      "Eccentric overload during hip extension (late swing phase)",
      "Overuse in cyclists and runners",
      "Prolonged sitting leading to adaptive shortening",
      "Weak hip flexors with sudden high demand"
    ],
    contraindications: {
      absolute: ["Iliopsoas abscess — do not massage; urgent medical referral"],
      relative: ["No aggressive stretching in acute Grade II-III strain", "Avoid deep anterior hip work near femoral artery/nerve"],
      massageSpecific: ["Careful technique working iliopsoas through abdomen — inform client; position and drape appropriately", "No direct pressure on femoral triangle (femoral nerve/vessel)"]
    },
    muscleGroups: [
      { name: "Iliopsoas (Iliacus + Psoas Major)", role: "Primary hip flexor; strained in acute injury" },
      { name: "Rectus Femoris", role: "Hip flexor and knee extensor; biarticular — often co-strained" },
      { name: "Tensor Fasciae Latae", role: "Accessory hip flexor" },
      { name: "Sartorius", role: "Accessory hip flexor; may be involved" }
    ],
    specialTests: [
      { name: "Thomas Test", procedure: "Supine; bring both knees to chest then lower one leg to table.", positive: "Lowered leg remains in hip flexion (knee doesn't fully extend if RF involved)", indicates: "Hip flexor tightness/contracture" },
      { name: "Ely's Test", procedure: "Prone; passively flex knee to heel.", positive: "Hip rises off table", indicates: "Rectus femoris tightness" },
      { name: "Resisted Hip Flexion Test", procedure: "Seated; resist hip flexion at 90°.", positive: "Pain and/or weakness in anterior hip", indicates: "Iliopsoas strain or tendinopathy" }
    ],
    treatmentHints: {
      goals: ["Reduce anterior hip pain and guarding", "Restore hip extension ROM", "Strengthen iliopsoas and core", "Address contributing posture"],
      techniques: [
        { name: "Effleurage and petrissage to iliopsoas via abdomen (with consent)", note: "" },
        { name: "Myofascial release to anterior hip and hip flexor complex", note: "" },
        { name: "MET to iliopsoas and rectus femoris", note: "" },
        { name: "Stretching — Thomas position stretch", note: "Subacute" }
      ],
      positioning: "Supine with knees supported (reduces hip flexor tension); side-lying for posterior approach to psoas",
      frequency: "1–2x/week; hip flexor stretching and core strengthening daily"
    }
  }
];
