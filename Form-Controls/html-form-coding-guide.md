# HTML Form-Building Guide
*A personal reference on coding practice, validation, and accessibility — built from the Form Controls exercise.*

---

## 1. The Core Mental Model: Every Field Is a Pair

Almost every form field boils down to two connected elements:

```html
<label for="SAME_ID">What the user sees</label>
<input id="SAME_ID" ... />
```

**Why the connection matters:** `for` and `id` must match *exactly*. This is not cosmetic — it's what allows:
- Screen readers to announce "what is this field for" when it gets focus
- Clicking the label text itself to focus/activate the input (try it — improves usability for anyone with limited motor precision)
- Lighthouse to count the field as accessible

**Rule of thumb:** if you ever write an `<input>` without a matching `<label for>`, ask why — it should be the exception, not the norm.

---

## 2. Choosing the Right `type` / Element for the Job

The temptation is to default everything to `type="text"`. Resist this — HTML5 has purpose-built types that give you **validation and better UX for free**, with zero JavaScript:

| Need | Use | What you get for free |
|---|---|---|
| Free text | `type="text"` | Nothing special — plain box |
| Text with a custom rule | `type="text"` + `pattern="regex"` | Browser blocks submission if regex doesn't match |
| Email address | `type="email"` | Format validation (`@`, domain) + better mobile keyboard |
| Exactly one from a small fixed set | `type="radio"`, grouped by shared `name` | Only one selectable per group, no JS needed |
| Exactly one from a longer fixed set | `<select>` with `<option>`s | Compact, native dropdown, keyboard-navigable |
| Won't submit empty | `required` (boolean attribute — no `=value`) | Browser blocks submission, shows a native error hint |

**Chain of thought for picking a field type:** ask "does HTML already have a type built for this exact kind of data?" *before* reaching for generic `text` + your own validation. Native types are more accessible, better tested across browsers, and require less code.

---

## 3. Radio Buttons: The Grouping Concept

Radio buttons are the one pattern that trips people up, because correctness depends on an attribute that *isn't* `id`:

- **`name`** — must be **identical** across every radio in the same choice group. This is what tells the browser "these belong together, only one can be selected."
- **`id`** — must be **unique** per radio, because it's what connects *this specific* option to *its* label.
- **`value`** — what actually gets submitted if this option is chosen (the user never types it — you define it).

```html
<input type="radio" name="colour" id="red" value="Red" required />
<label for="red">Red</label>
```

**Chain of thought:** if two radios are meant to be mutually exclusive but nothing happens when you click one after the other, the first thing to check is whether their `name` values actually match exactly (typos, capitalization mismatches, etc. silently break grouping).

---

## 4. Validation: Thinking in Two Directions

Real validation testing means checking **both directions**, not just "does it work when I do it right":

- **Negative testing** — deliberately try to break it: leave fields empty, type 1 character where 2+ are required, type an email with no `@`. The browser should **block submission** and visibly flag the problem.
- **Positive testing** — fill in everything correctly and confirm nothing is blocked, no red/error state appears.

**Why both matter professionally:** a form that only ever gets tested with "happy path" correct data can silently ship broken validation — the bug only surfaces when a real user makes a real-world mistake (which is guaranteed to happen at scale).

**Practical habit:** add a temporary `<button type="submit">` even in a no-backend exercise like this — it's your only way to actually *trigger* browser-native validation and see it work, rather than assuming your `pattern`/`required` attributes are correct.

---

## 5. Two Different Checks, Two Different Questions

It's easy to conflate these — they check fundamentally different things:

| Tool | Question it answers | Example of what it catches |
|---|---|---|
| **W3C HTML Validator** | *Is this markup written correctly, per the HTML spec?* | Unclosed tags, invalid attribute/element combinations, broken nesting |
| **Lighthouse Accessibility** | *Can a real user — including one using a screen reader or keyboard-only — actually use this page?* | Missing labels, poor contrast, unreachable controls |

**Chain of thought:** valid HTML does **not** guarantee accessible HTML, and vice versa. A page can have zero validator errors and still be unusable with a screen reader (e.g., inputs with no labels at all — that's still "valid" markup, just bad practice). Always run both, treat them as answering separate questions, not redundant checks.

**Practical note:** Lighthouse needs an `http://` or `https://` URL — it can't audit a raw local file (`file://`). A local dev server (e.g., VS Code's "Live Server" extension) solves this by serving your file over `http://localhost`.

---

## 6. Reading Validator/Linter Output — A Severity Mental Model

Tools like the W3C validator report findings in **tiers**, and only some require action:

1. **Errors** — must fix; the markup is genuinely broken/non-compliant
2. **Warnings** — should review; often a real issue, sometimes a style choice
3. **Info / notices** — FYI only; describes a fact about your code with no functional consequence (e.g., "trailing slash on `<input />` has no effect in HTML5" — true, harmless, purely stylistic)

**Chain of thought when you see validator output:** read the *severity label* first, not just the message text — an "Info" note about a stylistic non-issue should not trigger the same concern as an "Error." Panic-fixing info-tier notices wastes time without improving the actual code.

---

## 7. Formatting & Editor Hygiene

- After pasting or hand-editing code, indentation often becomes inconsistent — don't fix this manually. Use the editor's auto-formatter (`Shift+Alt+F` in VS Code) to re-align everything instantly and consistently.
- **Comment-first drafting** is a genuinely useful practice for structured tasks: write a plain-English comment describing *what a section of code needs to do* before writing the code itself. This turns requirements into a checklist you code against, and doubles as documentation later.

---

## 8. Chain-of-Thought Checklist for Any Future Form-Building Task

1. **What data am I collecting, and does HTML have a native `type` built for it?** (email, date, number, url, etc. — check before defaulting to `text`)
2. **Does every input have a properly matched `<label for>`?**
3. **Which fields are truly required, and does `required` reflect that?**
4. **For fixed-choice fields:** radios (few options) or `<select>` (many options)? Are grouped radios sharing an identical `name`?
5. **Test negative paths** (break it on purpose) **and positive paths** (confirm valid data passes cleanly)
6. **Run the W3C validator** — is the markup itself spec-correct?
7. **Run Lighthouse Accessibility** — can this actually be used by someone relying on assistive tech?
8. **Re-check severity levels** on any tool output before reacting — Error/Warning vs. Info are not the same urgency.
