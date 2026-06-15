window.registerCase({
  id: 'vtach-unstable',
  category: 'V-Tach',
  title: 'Unstable V-Tach with a Pulse',
  meta: '8 decisions · High acuity',
  vitalsProgression: [
    { hr: '168', bp: '82/50', spo2: '91%', rr: '22', label: 'Notified by monitor tech' },
    { hr: '172', bp: '78/44', spo2: '89%', rr: '24', label: 'RRT activated' },
    { hr: '174', bp: '68/40', spo2: '87%', rr: '26', label: 'Team arriving' },
    { hr: '176', bp: '64/38', spo2: '86%', rr: '28', label: 'Device setup' },
    { hr: '176', bp: '64/38', spo2: '86%', rr: '28', label: 'Sync confirmed' },
    { hr: '176', bp: '64/38', spo2: '86%', rr: '28', label: 'Pre-shock check' },
    { hr: '174', bp: '62/36', spo2: '85%', rr: '28', label: 'Shock ×1 — no conversion' },
    { hr: '74',  bp: '98/62', spo2: '94%', rr: '18', label: 'Converted — sinus rhythm' },
  ],
  steps: [

    {
      phase: 'assess',
      phaseLabel: 'Recognition',
      narrative: `It's 0220. You're the nurse for a 61-year-old man in the cardiac stepdown unit — post-op day 2 from a CABG. Your monitor tech calls: <strong>"Room 7 just went into a wide complex tach at 168 — looks like V-tach."</strong> You head to the room. He's diaphoretic, eyes half-open. You grab his wrist. Pulse present — weak and fast. His telemetry monitor confirms the rhythm. BP on the last cycle: 82/50.`,
      prompt: 'What do you do first?',
      choices: [
        { text: 'Activate rapid response immediately', correct: true },
        { text: 'Call the attending physician first and wait for orders', correct: false, consequence: 'You call the attending. The line rings four times. You\'re on hold. His BP drops to 74/48 and his eyes close. You\'ve lost 90 seconds and he\'s getting worse — with no team on the way.' },
        { text: 'Grab the crash cart from the hallway', correct: false, consequence: 'You leave the room. He\'s alone and deteriorating with no one at the bedside. If he arrests in the next 60 seconds, there is no one there to start CPR.' },
        { text: 'Increase his oxygen and recheck the blood pressure', correct: false, consequence: 'You adjust the O2 and wait. Repeat BP: 78/44. This patient\'s problem is electrical, not respiratory. You\'ve spent two minutes without getting anyone on the way.' }
      ],
      correctFeedback: 'Right call. Rapid response comes first — you call for help before acting alone. The moment you recognized instability, the clock started. Getting the team moving is the most important first action.',
      wrongFeedback: 'Rapid response first, always. Any other opening move — calling the attending, leaving for equipment, adjusting oxygen — delays the most critical action: getting the right people to the bedside now.',
      pearl: 'Unstable means act now, not act alone. Calling for help and your bedside assessment happen simultaneously — one does not wait for the other.'
    },

    {
      phase: 'decide',
      phaseLabel: 'Bedside Setup',
      narrative: `Rapid response is activated. You're at the bedside. He says "what's happening" when you speak to him — grimacing, eyes opening to voice. BP now 78/44. The rapid response team is about 2 minutes out. The crash cart is in the room. He's still on the stepdown telemetry leads.`,
      prompt: 'What is the most important thing to do right now while you wait?',
      choices: [
        { text: 'Get the defibrillator on him and apply pads — transition off telemetry now', correct: true },
        { text: 'Wait for further recommendation from the incoming team — you are adequately monitoring the patient', correct: false, consequence: 'The team walks in. No pads, no defibrillator. The first two minutes go toward setup that could already be done. His BP is 72/40 and dropping.' },
        { text: 'Obtain IV access — he will likely need antiarrhythmics', correct: false, consequence: 'You spend 90 seconds on the IV. No order exists. The team arrives to a patient with no pads on and a nurse away from the bedside.' },
        { text: 'Call the charge nurse to pull sedation medications in case cardioversion is needed', correct: false, consequence: 'No order exists, no provider has assessed yet, and you\'ve sent someone for medications before any plan exists. Pads and the defibrillator are the priority — everything else follows.' }
      ],
      correctFeedback: 'Yes. Get the defibrillator on him and apply the pads now. Telemetry monitors — pads prepare you to act. The team should walk into a room where the patient is already on the defib and ready for whatever comes next.',
      wrongFeedback: 'Pads go on now. Telemetry tells you what\'s happening — pads let you do something about it. Transitioning to the defibrillator before the team arrives means they can focus on the decision, not the setup.',
      pearl: 'Pads are not a decision to shock — they are preparation for any outcome. Place them early, while the patient still has a pulse and you still have time to do it calmly.'
    },

    {
      phase: 'decide',
      phaseLabel: 'Provider Pushback',
      narrative: `Pads are on. The overnight resident arrives with the rapid response team. He assesses quickly: wide complex tachycardia, BP 68/40, diaphoretic. He turns to you: <strong>"He needs cardioversion. Let's give him 1mg of Versed and some fentanyl first — I don't want to shock him awake."</strong> You call the patient's name loudly. He moans. Eyes stay closed. Not following commands.`,
      prompt: 'How do you respond?',
      choices: [
        { text: '"He\'s not responding to voice right now — not following commands. He may not need sedation at this point."', correct: true },
        { text: 'Proceed to pull the Versed and fentanyl — a plan has been made', correct: false, consequence: 'You pull the medications. Versed in a patient with a BP of 68/40 drops an already marginal pressure further. His BP falls to 54/30. You\'ve added 3 minutes and introduced a real safety risk before anyone re-examined his LOC.' },
        { text: 'Say nothing — it\'s not your place to question the plan', correct: false, consequence: 'Sedation is given. His BP drops to 54/30. You knew he was already unresponsive. Speaking up was your responsibility — and the window to do it safely has passed.' },
        { text: 'Ask the charge nurse to call the attending for a second opinion before proceeding', correct: false, consequence: 'You\'ve escalated past the provider who is in the room and ready to act. This adds delay without addressing the real issue — his current LOC. That information is in your hands right now.' }
      ],
      correctFeedback: 'This is exactly the right move. You are not overriding the resident — you are giving him clinical information he may not have. He assessed a minute ago. You are telling him what the patient looks like right now. That is your job.',
      wrongFeedback: 'The nurse is the continuous assessor. When a provider\'s plan may not match current findings, speaking up is not insubordination — it is patient safety. Your observation about his LOC is a clinical input that changes the decision.',
      pearl: 'Sedation in a hemodynamically unstable patient carries real risk. A BP of 68/40 with benzodiazepines on board can deteriorate rapidly. Your bedside assessment is the most current data in the room — use it.'
    },

    {
      phase: 'act',
      phaseLabel: 'Device Mode',
      narrative: `The resident agrees: "You're right — let's go without sedation." He turns to the ZOLL. He pauses, looks back at you. "I'm not very comfortable with this device — can you run it?" The charge RN is with you. The ZOLL is currently in <strong>Monitor mode</strong>.`,
      prompt: 'Before you can cardiovert, the device needs to be in the right mode. What do you select?',
      choices: [
        { text: 'Switch to Defib mode — cardioversion requires the defibrillator, not the monitor', correct: true },
        { text: 'Leave it in Monitor mode — it will still deliver a shock when you press the button', correct: false, consequence: 'Monitor mode does not enable shock delivery. The device will not fire. You press the button. Nothing happens. The resident looks at you. Thirty seconds lost while the patient deteriorates.' },
        { text: 'Switch to Pacer mode — the rhythm needs electrical intervention', correct: false, consequence: 'Pacer mode delivers fixed-rate pacing stimuli — it does not cardiovert a tachyarrhythmia. Pacing is for bradycardia. This patient is in V-tach at 168. You need Defib mode.' },
        { text: 'Switch to AED mode — it will automatically detect the rhythm and advise', correct: false, consequence: 'AED mode is designed for cardiac arrest with an untrained operator. It delivers unsynchronized shocks and bypasses the sync function. This patient has a pulse — synchronized cardioversion requires manual Defib mode.' }
      ],
      correctFeedback: 'Correct. The ZOLL has three modes: Monitor, Defib, and Pacer. Cardioversion lives in Defib mode. Knowing to switch from Monitor is the first step before anything else on the device.',
      wrongFeedback: 'Monitor mode displays rhythm — it does not enable shock delivery. Defib mode is where cardioversion and defibrillation happen. This is the first thing you do when you approach the device for any shock delivery.',
      pearl: 'Know your device before you need it. Monitor → Defib → select sync for cardioversion. Pacer is a separate pathway for bradycardia. AED mode removes manual control — never use it on a patient with a pulse.'
    },

    {
      phase: 'act',
      phaseLabel: 'Sync Mode',
      narrative: `Device is in Defib mode. The charge RN is at your side. The resident is watching. The rhythm is still wide complex tachycardia — the patient is not following commands, BP 64/38. The ZOLL is showing his rhythm on the screen. <strong>You need to set up for synchronized cardioversion.</strong>`,
      prompt: 'What do you do next on the device?',
      choices: [
        { text: 'Press Sync — then confirm the sync markers are landing on the QRS complexes, not the T waves', correct: true },
        { text: 'Set the energy to 100J and charge immediately — sync can be confirmed after', correct: false, consequence: 'The device charges. Sync was never activated. When you press the shock button, it delivers an unsynchronized shock during a T wave. V-tach degrades to V-Fib. He just lost his pulse. You turned a shockable rhythm with perfusion into a cardiac arrest.' },
        { text: 'Charge to 200J — higher energy is safer for the first attempt', correct: false, consequence: 'Energy selection should follow the AHA protocol: 100J for the first synchronized attempt at monomorphic V-tach. And sync still hasn\'t been activated. Two problems, not one.' },
        { text: 'Ask the charge RN to confirm sync — they should verify the device settings', correct: false, consequence: 'You\'re running the device. You confirm sync. Delegating this step in a high-stakes moment without verifying it yourself introduces a gap in accountability. You press the button — you own the settings.' }
      ],
      correctFeedback: 'Right. Press Sync, then visually confirm — marker by marker — that each one is landing on an R wave. If any marker is sitting on a T wave, the device will deliver energy during the vulnerable period and can precipitate V-Fib. Adjust lead or gain until the markers are correct before charging.',
      wrongFeedback: 'Sync mode must be active before you charge. An unsynchronized shock to a patient with a pulse can trigger V-Fib. Press Sync first, confirm the markers are on the QRS complexes, then set energy and charge.',
      pearl: 'Sync markers should sit cleanly on every R wave. If they\'re floating or landing on T waves, do not charge — adjust the lead or gain first. This is a visual check, not an assumption.'
    },

    {
      phase: 'act',
      phaseLabel: 'Pre-Cardioversion Checklist',
      narrative: `Defib mode is active. Sync is on — markers confirmed on QRS complexes. Energy is set to 100J. The device is charged. The resident nods: <strong>"Ready when you are."</strong> Before you press that button, run your safety check.`,
      prompt: 'Complete the pre-cardioversion checklist.',
      isChecklist: true,
      checklistItems: [
        { id: 'mode',         text: 'Device confirmed in Defib mode' },
        { id: 'sync',         text: 'Sync mode active — markers verified on QRS complexes, not T waves' },
        { id: 'energy',       text: 'Energy at 100J — AHA first-attempt dose for monomorphic V-tach (provider selects; know the target)' },
        { id: 'o2',           text: 'Oxygen source redirected away from patient — fire risk during shock delivery' },
        { id: 'clear_verbal', text: 'Verbal clear announced — loudly enough for everyone in the room' },
        { id: 'clear_visual', text: 'Visual sweep complete — no contact with patient, bed rails, IV lines, or connected equipment' },
      ],
      pearl: 'Every item on this list exists because something went wrong when it was skipped. These are not formalities — they are the boundary between a controlled procedure and an incident report.'
    },

    {
      phase: 'act',
      phaseLabel: 'First Shock — No Conversion',
      narrative: `Shock delivered at 100J. The room goes quiet. Everyone looks at the monitor. The rhythm is unchanged — wide complex tachycardia, still 170 bpm. Next BP cycle: 62/36. <strong>No conversion.</strong> The resident turns to you: "We need to shock him again — let's go to 200J."`,
      prompt: 'The resident has confirmed 200J. What do you do next?',
      choices: [
        { text: 'Re-confirm sync mode is still active on the ZOLL, then set to 200J and prepare to cardiovert again', correct: true },
        { text: 'Call a code blue — failed cardioversion means he needs CPR now', correct: false, consequence: 'He still has a pulse. A failed shock is not cardiac arrest. Starting compressions on a perfusing patient is not appropriate — and triggering a code call resets the room when you need focused, deliberate action.' },
        { text: 'Set to 200J and charge immediately — the resident has already confirmed the plan', correct: false, consequence: 'You charge without re-confirming sync. The ZOLL dropped sync mode after the first shock — a known device behavior. You deliver an unsynchronized 200J shock. V-tach degrades to V-Fib. He just lost his pulse.' },
        { text: 'Give amiodarone and wait to see if the rhythm breaks', correct: false, consequence: 'Amiodarone has a role in refractory V-tach, but this patient is profoundly unstable at 62/36. The resident just directed you to shock again. Chemical cardioversion takes time he doesn\'t have — another shock comes first.' }
      ],
      correctFeedback: 'Correct — and the order matters. Re-confirm sync first, then escalate. Some devices drop sync mode after delivering a shock. If you charge to 200J without checking, you may be about to deliver an unsynchronized shock to a patient who still has a pulse. Check sync every time, before every charge.',
      wrongFeedback: 'Failed cardioversion is a decision point, not a crisis. He still has a pulse — you are still in cardioversion territory. Escalate the energy per the algorithm: 100J → 200J → 300J → 360J. And re-confirm sync before every charge — the device may have dropped it.',
      pearl: 'The ZOLL can drop sync mode after shock delivery. This is not a malfunction — it is a safety design to prevent accidental synchronized delivery in a post-shock patient. Re-confirm sync before every subsequent attempt. Always.'
    },

    {
      phase: 'manage',
      phaseLabel: 'Post-Conversion',
      narrative: `Sync re-confirmed. Energy at 200J. Clear called, visual sweep done. Shock delivered. The monitor flickers — then settles into a narrow, regular rhythm at 74 bpm. <strong>Conversion to sinus rhythm.</strong> The room exhales. Repeat BP: 98/62. He opens his eyes and looks around, confused.`,
      prompt: 'Cardioversion was successful. What is your immediate priority in the next 2 minutes?',
      choices: [
        { text: 'Reassess him fully — mental status, BP trend, rhythm stability — and keep the pads on', correct: true },
        { text: 'Remove the pads and get him comfortable — the emergency is resolved', correct: false, consequence: 'Pads come off. Four minutes later the wide complex tachycardia returns. You are starting from scratch — without pads on, with a patient who is now more fatigued and more hemodynamically tenuous than before.' },
        { text: 'Document the cardioversion event immediately while the details are fresh', correct: false, consequence: 'Documentation matters, but not in the 2 minutes after conversion. Your hands and eyes belong on this patient. A colleague or the charge RN documents while you assess.' },
        { text: 'Administer a fluid bolus to support his blood pressure', correct: false, consequence: 'His BP is 98/62 and improving. An unprompted bolus in a post-CABG patient without a specific indication — and without an order — is not the right move. Reassess first, then act on what you find.' }
      ],
      correctFeedback: 'Right. Conversion is not the finish line — it is a transition point. Post-cardioversion patients can re-deteriorate quickly. Pads stay on, rhythm monitoring stays continuous, and your reassessment starts now. The underlying substrate that caused this V-tach has not been treated.',
      wrongFeedback: 'Successful cardioversion does not mean the emergency is over. The rhythm was terminated — not the cause. Pads stay on, monitoring stays continuous, and you reassess immediately.',
      pearl: 'V-tach after CABG often reflects a structural or ischemic substrate. Conversion buys time — it does not fix the problem. Post-cardioversion care: continuous rhythm monitoring, trending hemodynamics, 12-lead EKG, and notification of the primary team for definitive management.'
    }

  ]
});
