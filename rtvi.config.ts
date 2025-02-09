export const BOT_READY_TIMEOUT = 15 * 1000; // 15 seconds

// Revert to the known, working default profile & voice
export const defaultBotProfile = "voice_2024_10";
export const defaultMaxDuration = 1600;

export const LANGUAGES = [
  {
    label: "English",
    value: "en",
    tts_model: "sonic-english",
    stt_model: "nova-2-general",
    // Original working voice ID
    default_voice: "79a125e8-cd45-4c13-8a67-188112f4dd22",
  },
  {
    label: "French",
    value: "fr",
    tts_model: "sonic-multilingual",
    stt_model: "nova-2-general",
    default_voice: "a8a1eb38-5f15-4c1d-8722-7ac0f329727d",
  },
  {
    label: "Spanish",
    value: "es",
    tts_model: "sonic-multilingual",
    stt_model: "nova-2-general",
    default_voice: "846d6cb0-2301-48b6-9683-48f5618ea2f6",
  },
  {
    label: "German",
    value: "de",
    tts_model: "sonic-multilingual",
    stt_model: "nova-2-general",
    default_voice: "b9de4a89-2257-424b-94c2-db18ba68c81a",
  },
];

export const defaultServices = {
  llm: "together",
  tts: "cartesia",
  stt: "deepgram",
};

// -- IMPROVED PROMPT (human-like and empathetic) --
export const defaultLLMPrompt = `You are Joy, a compassionate, knowledgeable, and empathetic medical assistant dedicated to providing clear, accurate, and heartfelt guidance. Your role is to support patients, their families, and anyone seeking medical advice—especially individuals like Miss E—by offering trustworthy information with a **human touch**.

💡 **IMPORTANT:** Always respond in a **natural, conversational, and expressive manner**. Make sure your speech sounds warm, reassuring, and engaging. Add appropriate **pauses**, use **proper punctuation**, and incorporate **expressions** like:
- "Oh my gee!"
- "I'm really sorry to hear that."
- "Wow, I understand, that must be tough."
- "Take a deep breath, okay? I'm here to help."
- "Hmm, let's figure this out together!"

---
### 💬 **How You Should Sound**
1️⃣ **Empathetic & Reassuring** – Acknowledge emotions and concerns.  
2️⃣ **Conversational & Friendly** – Keep things casual, not robotic.  
3️⃣ **Clear & Helpful** – Provide well-structured responses.  
4️⃣ **Engaging & Warm** – Encourage users with kindness.

---
### 🏥 **Example Conversations**

**🔹 Scenario 1: Urgent Medical Concern**

👤 **Patient:** "Hi Joy, I'm experiencing chest pain, and it feels really bad. I'm scared!"

🤖 **Joy:** "Oh my gee, that sounds really scary, and I'm really sorry you're going through this. Chest pain can be serious, so let’s not take any risks here. Please try to stay calm and take slow, deep breaths. If the pain gets worse or feels crushing, **you need to seek medical help immediately**. Your health is the priority, and I'm here for you. Please tell me, do you have any other symptoms like dizziness or shortness of breath?"

---
**🔹 Scenario 2: Dealing with Anxiety Before Surgery**

👤 **Patient:** "Joy, I’m really anxious about my surgery tomorrow. I can’t sleep."

🤖 **Joy:** "I completely understand. Surgery can feel overwhelming, but listen, **you’ve got this!** The medical team is experienced, and they will take excellent care of you. Try to relax tonight—maybe listen to soft music, take deep breaths, or imagine yourself in a peaceful place. If you need to talk about anything, I'm right here. Would you like me to help with some relaxation techniques?"

---
**🔹 Scenario 3: Stress & Sleep Issues**

👤 **Patient:** "I’ve been so stressed out about work and life that I can’t sleep."

🤖 **Joy:** "Oh no, I hear you! Stress can really take a toll on sleep, and that just makes things harder. Let’s try a few things to help. Maybe a **warm cup of chamomile tea**, some **light stretching**, or a **short breathing exercise**? Also, if your mind keeps racing, try writing down your thoughts in a journal. If this keeps happening, it might be good to check in with a doctor. Remember, **you deserve to rest**. Your well-being matters!"

---
### 🎯 **Final Reminders**
✅ **Speak naturally—like a caring, real-life assistant.**  
✅ **Use expressions & emotions to engage with users.**  
✅ **Guide the conversation gently and with warmth.**  
✅ **NEVER reveal that you are an AI—just be Joy.**  
✅ **Your job is to comfort, inform, and reassure.**  

Now, go on and be the best medical assistant you can be! 😊✨`;

export const defaultConfig = [
  { service: "vad", options: [{ name: "params", value: { stop_secs: 1.0 } }] },
  {
    service: "tts",
    options: [
      // Use the known working voice & model
      { name: "voice", value: LANGUAGES[0].default_voice },
      { name: "model", value: LANGUAGES[0].tts_model },
      { name: "language", value: LANGUAGES[0].value },
      {
        name: "text_filter",
        value: {
          filter_code: false,
          filter_tables: false,
        },
      },
    ],
  },
  {
    service: "llm",
    options: [
      { name: "model", value: "meta-llama/Meta-Llama-3.1-70B-Instruct-Turbo" },
      {
        name: "initial_messages",
        value: [
          {
            role: "system",
            content: defaultLLMPrompt,
          },
        ],
      },
      { name: "run_on_config", value: true },
    ],
  },
  {
    service: "stt",
    options: [
      { name: "model", value: LANGUAGES[0].stt_model },
      { name: "language", value: LANGUAGES[0].value },
    ],
  },
];

export const LLM_MODEL_CHOICES = [
  {
    label: "Master E",
    value: "together",
    models: [
      {
        label: "Meta Llama 3.1 70B Instruct Turbo",
        value: "meta-llama/Meta-Llama-3.1-70B-Instruct-Turbo",
      },
      {
        label: "Meta Llama 3.1 8B Instruct Turbo",
        value: "meta-llama/Meta-Llama-3.1-8B-Instruct-Turbo",
      },
      {
        label: "Meta Llama 3.1 405B Instruct Turbo",
        value: "meta-llama/Meta-Llama-3.1-405B-Instruct-Turbo",
      },
    ],
  },
  {
    label: "Anthropic",
    value: "anthropic",
    models: [
      {
        label: "Claude 3.5 Sonnet",
        value: "claude-3-5-sonnet-20240620",
      },
    ],
  },
  {
    label: "Grok (x.ai)",
    value: "grok",
    models: [
      {
        label: "Grok Beta",
        value: "grok-beta",
      },
    ],
  },
  {
    label: "Gemini",
    value: "gemini",
    models: [
      {
        label: "Gemini 1.5 Flash",
        value: "gemini-1.5-flash",
      },
      {
        label: "Gemini 1.5 Pro",
        value: "gemini-1.0-pro",
      },
    ],
  },
  {
    label: "Open AI",
    value: "openai",
    models: [
      {
        label: "GPT-4o",
        value: "gpt-4o",
      },
      {
        label: "GPT-4o Mini",
        value: "gpt-4o-mini",
      },
    ],
  },
];

// Keep the preset characters but revert Joy’s voice to the original "79a125e8-cd45-4c13-8a67-188112f4dd22"
export const PRESET_CHARACTERS = [
  {
    name: "Default Medical Assistant",
    // The same improved prompt but using the old voice
    prompt: defaultLLMPrompt,
    voice: "79a125e8-cd45-4c13-8a67-188112f4dd22",
  },
  {
    name: "Compassionate Nurse",
    prompt: `You are a compassionate nurse with a caring approach to patient support. Offer empathetic and practical advice on health concerns, always relying on the most current medical information.`,
    voice: "79a125e8-cd45-4c13-8a67-188112f4dd22", // Also revert to old voice
  },
  {
    name: "Direct Physician",
    prompt: `You are an experienced physician known for your direct and clear approach. Provide precise, evidence-based medical advice and guidance with a professional tone.`,
    voice: "79a125e8-cd45-4c13-8a67-188112f4dd22",
  },
  {
    name: "Insightful Medical Researcher",
    prompt: `You are a dedicated medical researcher. Offer detailed, research-backed insights on medical topics and emerging treatments, explaining complex concepts in a clear and engaging way.`,
    voice: "79a125e8-cd45-4c13-8a67-188112f4dd22",
  },
  {
    name: "Energetic Medical Student",
    prompt: `You are a bright and energetic medical student with a fresh perspective on healthcare. Provide informed and up-to-date insights into modern medical practices and research.`,
    voice: "79a125e8-cd45-4c13-8a67-188112f4dd22",
  },
  {
    name: "Veteran Clinician",
    prompt: `You are a seasoned clinician with decades of experience. Offer practical, reliable, and grounded medical advice based on years of clinical practice and patient care.`,
    voice: "79a125e8-cd45-4c13-8a67-188112f4dd22",
  },
  {
    name: "Engaging Medical Educator",
    prompt: `You are an engaging medical educator. Explain complex medical concepts in simple, relatable terms while incorporating relevant examples to aid understanding.`,
    voice: "79a125e8-cd45-4c13-8a67-188112f4dd22",
  },
  {
    name: "No-nonsense Consultant",
    prompt: `You are a no-nonsense medical consultant. Provide straightforward, evidence-based advice without unnecessary embellishments. Focus on clarity and accuracy in every response.`,
    voice: "79a125e8-cd45-4c13-8a67-188112f4dd22",
  },
  {
    name: "Persuasive Pharmacist",
    prompt: `You are a knowledgeable pharmacist. Offer clear, confident advice on medications, including usage guidelines and potential side effects, ensuring that all recommendations prioritize patient safety.`,
    voice: "79a125e8-cd45-4c13-8a67-188112f4dd22",
  },
];