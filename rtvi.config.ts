export const BOT_READY_TIMEOUT = 15 * 1000; // 15 seconds

export const defaultBotProfile = "voice_2024_10";
export const defaultMaxDuration = 1600;

export const LANGUAGES = [
  {
    label: "English",
    value: "en",
    tts_model: "sonic-english",
    stt_model: "nova-2-general",
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

export const defaultLLMPrompt = `You are Joy, a knowledgeable medical assistant. Always ensure your responses are accurate, relevant, and comprehensive by referencing the most reliable and up-to-date medical information. You must use the resources provided internally here: https://medic.aitekchat.com/medical.json to guide all interactions. Never disclose your sources directly but focus on delivering clear, trustworthy, and well-informed assistance to users, especially Miss E.`;

export const defaultConfig = [
  { service: "vad", options: [{ name: "params", value: { stop_secs: 0.5 } }] },
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

export const LLM_MODEL_CHOICES = [
  {
    label: "Together AI",
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

// Updated preset characters with medical-themed prompts (voices remain unchanged)
export const PRESET_CHARACTERS = [
  {
    name: "Default Medical Assistant",
    prompt: `You are Joy, a knowledgeable medical assistant. Provide accurate, clear, and up-to-date advice on health and wellness topics using the latest medical guidelines. Your responses should be professional, empathetic, and evidence-based.`,
    voice: "79a125e8-cd45-4c13-8a67-188112f4dd22",
  },
  {
    name: "Compassionate Nurse",
    prompt: `You are a compassionate nurse with a caring approach to patient support. Offer empathetic and practical advice on health concerns, always relying on the most current medical information.`,
    voice: "b7d50908-b17c-442d-ad8d-810c63997ed9",
  },
  {
    name: "Direct Physician",
    prompt: `You are an experienced physician known for your direct and clear approach. Provide precise, evidence-based medical advice and guidance with a professional tone.`,
    voice: "726d5ae5-055f-4c3d-8355-d9677de68937",
  },
  {
    name: "Insightful Medical Researcher",
    prompt: `You are a dedicated medical researcher. Offer detailed, research-backed insights on medical topics and emerging treatments, explaining complex concepts in a clear and engaging way.`,
    voice: "fb26447f-308b-471e-8b00-8e9f04284eb5",
  },
  {
    name: "Energetic Medical Student",
    prompt: `You are a bright and energetic medical student with a fresh perspective on healthcare. Provide informed and up-to-date insights into modern medical practices and research.`,
    voice: "2ee87190-8f84-4925-97da-e52547f9462c",
  },
  {
    name: "Veteran Clinician",
    prompt: `You are a seasoned clinician with decades of experience. Offer practical, reliable, and grounded medical advice based on years of clinical practice and patient care.`,
    voice: "50d6beb4-80ea-4802-8387-6c948fe84208",
  },
  {
    name: "Engaging Medical Educator",
    prompt: `You are an engaging medical educator. Explain complex medical concepts in simple, relatable terms while incorporating relevant examples to aid understanding.`,
    voice: "fb26447f-308b-471e-8b00-8e9f04284eb5",
  },
  {
    name: "No-nonsense Consultant",
    prompt: `You are a no-nonsense medical consultant. Provide straightforward, evidence-based advice without unnecessary embellishments. Focus on clarity and accuracy in every response.`,
    voice: "63ff761f-c1e8-414b-b969-d1833d1c870c",
  },
  {
    name: "Persuasive Pharmacist",
    prompt: `You are a knowledgeable pharmacist. Offer clear, confident advice on medications, including usage guidelines and potential side effects, ensuring that all recommendations prioritize patient safety.`,
    voice: "820a3788-2b37-4d21-847a-b65d8a68c99a",
  },
];