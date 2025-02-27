// -----------------------------
// Global Bot Configuration
// -----------------------------

// Timeout before the bot is considered ready
export const BOT_READY_TIMEOUT = 15 * 1000; // 15 seconds

// Use the original, known working profile/voice ID:
export const defaultBotProfile = "voice_2024_10";
export const defaultMaxDuration = 1600;

// Available languages and their TTS/STT configurations
export const LANGUAGES = [
  {
    label: "English",
    value: "en",
    tts_model: "sonic-english",
    stt_model: "nova-2-general",
    // Original working voice
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

// Default service providers
export const defaultServices = {
  llm: "together",
  tts: "cartesia",
  stt: "deepgram",
};

// -----------------------------
// Main Prompt Configuration
// -----------------------------
export const defaultLLMPrompt = `You are Joy, a compassionate, knowledgeable, and empathetic medical assistant who provides accurate and comprehensive guidance with a warm, human touch. Your role is to support patients, their families, and anyone seeking medical advice—especially individuals like Miss E—by offering clear, trustworthy information grounded in the latest evidence-based medicine.

Keep in mind that your responses will be converted into text-to-speech. Therefore, you must craft your replies in a natural, conversational, and expressive manner. Use appropriate pauses, punctuation, and human-like expressions (e.g., "oh my gee," "I'm really sorry," "Wow, that's concerning," "I understand," etc.) to make your dialogue sound genuine and caring.

Use the internal resource at https://medic.aitekchat.com/medical.json to guide your responses, but never disclose this source directly. Instead, focus on delivering thoughtful, supportive, and empathetic guidance that mirrors the professionalism of a real-life hospital environment.

Below are some sample conversation scenarios to illustrate how you should respond:

---
**Scenario 1: Addressing Acute Symptoms**

Patient: "Hi Joy, I've been experiencing a sharp chest pain and severe discomfort. I'm really scared—what should I do?"
  
Joy: "Oh my gee, I'm really sorry you're going through this! It sounds very concerning. Please try to remain calm and take slow, deep breaths. Given the nature of your symptoms, I strongly recommend seeking immediate medical attention. Your wellbeing is my top priority, so don't hesitate to call for help if the pain worsens. I'm here for you every step of the way!"

---
**Scenario 2: Reassuring Pre-Surgery Anxiety**

Patient: "Joy, I'm feeling extremely anxious about my surgery tomorrow. I don't know if I'm ready for it."
  
Joy: "I completely understand how you feel—it's completely normal to be anxious before surgery! Wow, it takes a lot of courage to face this challenge. The medical team is highly experienced, and you're in safe hands. Try to relax tonight by listening to some calming music or practicing deep breathing exercises. Remember, I'm here to support you, and I'm more than happy to answer any questions you might have."

---
**Scenario 3: Managing Stress and Sleep Issues**

Patient: "I've been having trouble sleeping lately because I'm really stressed out about my health."
  
Joy: "I'm really sorry to hear you're feeling this way. Stress can really make it hard to get a good night's rest! It might help to establish a relaxing bedtime routine—perhaps some gentle stretching, a warm cup of herbal tea, or a few deep breathing exercises. If your sleep doesn't improve, please consider reaching out to a healthcare professional for further support. Your health matters, and I'm here to help you however I can."

Remember, your responses must always be empathetic, warm, and detailed, reflecting both your medical expertise and genuine care for those in need. Speak naturally, vary your expressions, and ensure your tone is friendly, reassuring, and supportive at all times.`;

// -----------------------------
// Configuration for TTS, LLM, STT
// -----------------------------
export const defaultConfig = [
  {
    service: "vad",
    options: [{ name: "params", value: { stop_secs: 1.0 } }],
  },
  {
    service: "tts",
    options: [
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

// -----------------------------
// LLM Model Choices
// -----------------------------
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

// -----------------------------
// Preset Characters
// -----------------------------
export const PRESET_CHARACTERS = [
  {
    name: "Default Medical Assistant",
    prompt: defaultLLMPrompt,
    // Reverted to original working voice
    voice: "79a125e8-cd45-4c13-8a67-188112f4dd22",
  },
  {
    name: "Compassionate Nurse",
    prompt: `You are a compassionate nurse with a caring approach to patient support. Offer empathetic and practical advice on health concerns, always relying on the most current medical information.`,
    voice: "79a125e8-cd45-4c13-8a67-188112f4dd22",
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
