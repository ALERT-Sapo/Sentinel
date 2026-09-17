# Electrolyte reference strip manifest

Reference EKG strips with confirmed lab values, used to calibrate the
electrolyte-derangement waveform dials against real morphology rather than
textbook approximation. Ground/reference lead is lead II (bottom strip)
unless noted otherwise.

Status key: `verified` = calibrated against and matches current dial build.
`pending` = collected, not yet used to adjust the dial.

**Source:** all strips below are from Life in the Fast Lane (LITFL), consistent
with the ECG reference already listed in ways-of-working.

## Hyperkalemia

| Asset | K+ (mEq/L) | Lead II morphology | Status |
|---|---|---|---|
| `hyperk-1.png` | 9.3 | Full sine-wave merge — P/QRS/T indistinguishable, smooth wide oscillation | verified (v3 dial) |
| `hyperk-2.png` | 7.0 | Subtle — narrow QRS, small P still visible, no dramatic tenting in this lead | verified (v3 dial) |
| `hyperk-3.png` | 9.0 | Full sine-wave merge, matches `hyperk-1` severity | verified (v3 dial) |

**Working read so far:** in lead II specifically, the classic "peaked T" look
is much more prominent in precordial leads (V2/V3) than here — this lead
stays fairly unremarkable through the low-to-mid range, then compresses into
a fast, late transition straight to full sine-wave merge. Need more strips in
the 7.5–8.5 range to see how that transition actually looks in between —
right now the dial is interpolating that gap without a reference.

## Hypokalemia

| Asset | K+ (mEq/L) | Lead II morphology | Status |
|---|---|---|---|
| `hypok-1.png` | 1.7 | Regular sinus, narrow QRS, widespread ST depression, T wave inversion, prominent U waves. No ectopy. | pending — dial needs rework, see below |
| `hypok-2.png` | 1.9 | Same baseline pattern. HR 74, PVC 0 (annotated on strip). ST depression/T inversion best seen in inferior leads (II, III, aVF) — subtle on a single-lead monitor view, but U waves still prominent there. | pending — dial needs rework, see below |
| `hypok-3.png` | not specified — illustrates trigger mechanism, not baseline severity | Baseline shows narrow QRS with visible U waves (PVC 9, so ectopy already present, unlike `hypok-1`/`hypok-2`). A PVC lands directly on the preceding T wave (R-on-T) and that beat is what triggers the abrupt transition into sustained torsades — wide, twisting, polymorphic complexes. | pending — confirms trigger mechanism below |

**Confirmed:** the U wave IS clearly visible in lead II at severe
hypokalemia, alongside ST depression and T wave inversion (most pronounced
in the inferior leads, subtler on a single-lead monitor strip).

**Modeling problem found and mechanism confirmed:** the dial currently
auto-applies torsades-style chaotic distortion once severity crosses
~85/100, as if it were a continuous function of how low K+ gets. `hypok-1`
and `hypok-2` (K 1.7–1.9, about as severe as it gets) are both completely
regular with zero ectopy. `hypok-3` shows what actually triggers the switch:
an ectopic beat landing on the T wave (R-on-T). So the rebuild needs two
separate mechanics, not one slider:
1. Continuous severity axis — T flattening → ST depression/T inversion → U
   wave emergence and growth. This stays regular sinus rhythm throughout,
   never distorts into chaos on its own.
2. A separate, triggerable ectopic event (e.g. a button) that fires a PVC —
   landing on the T wave at higher severity is what should kick off a
   torsades run, independent of where the severity slider sits.

**Open question for next batch:** still nothing in the 2.5–3.4 range to see
how gradual the T-flattening/U-emergence transition actually looks there —
right now that stretch of the dial is still interpolated, not confirmed.

## Notes for future additions

- Confirm lead used for each strip (defaulting to II/ground lead per current
  convention) — flag if a strip only shows the change clearly in a different
  lead.
- One strip per roughly 1.0 mEq/L step would help fill in transition zones,
  especially 7.5–8.5 for hyperkalemia where nothing is confirmed yet.
- Filename convention: `hyperk-N.png` / `hypok-N.png`, sequential — K value
  lives in this manifest, not the filename.
