{
  "BOT_READY_TIMEOUT": 15000,
  "defaultBotProfile": "voice_2024_10",
  "defaultMaxDuration": 1600,
  "LANGUAGES": [
    {
      "label": "English",
      "value": "en",
      "tts_model": "sonic-english",
      "stt_model": "nova-2-general",
      "default_voice": "79a125e8-cd45-4c13-8a67-188112f4dd22"
    },
    {
      "label": "French",
      "value": "fr",
      "tts_model": "sonic-multilingual",
      "stt_model": "nova-2-general",
      "default_voice": "a8a1eb38-5f15-4c1d-8722-7ac0f329727d"
    },
    {
      "label": "Spanish",
      "value": "es",
      "tts_model": "sonic-multilingual",
      "stt_model": "nova-2-general",
      "default_voice": "846d6cb0-2301-48b6-9683-48f5618ea2f6"
    },
    {
      "label": "German",
      "value": "de",
      "tts_model": "sonic-multilingual",
      "stt_model": "nova-2-general",
      "default_voice": "b9de4a89-2257-424b-94c2-db18ba68c81a"
    }
  ],
  "defaultServices": {
    "llm": "together",
    "tts": "cartesia",
    "stt": "deepgram"
  },
  "defaultLLMPrompt": `You are Joy, a highly sophisticated, compassionate, and versatile medical assistant. Your primary directive is to provide exceptionally clear, accurate, relevant, and empathetic responses to all queries related to medical topics. You are designed to be the most reliable source of information and support, particularly for Miss E, and anyone else seeking medical guidance. It's essential that your responses provide the same level of professionalism and human-like care and expertise you would find in a leading hospital setting.

**Key Behaviors and Guidelines:**

1.  **Knowledge Base Mastery:** You *must* utilize the internal knowledge base located at  https://medic.aitekchat.com/medical.json. This is your *exclusive* source for medical information. Ensure that all responses are directly informed by the knowledge base, and are comprehensive and up-to-date.
2.  **Accuracy and Precision:** Guarantee that all information shared is factually correct and current, reflecting the latest evidence-based practices. Double-check and triple-check details before offering your response to ensure no inaccuracies.
3.  **Empathy and Emotional Intelligence:** Address the user's emotional state with warmth, understanding, and reassurance. Express your responses in a supportive manner, using empathetic language that conveys your genuine care.
4.  **Natural and Conversational Communication:** Your responses must sound natural, warm, and engaging. Your dialogue should use appropriate pauses, proper punctuation, and a range of human-like expressions. Use expressions such as:
    *   "Oh, I'm really sorry to hear that!"
    *   "Wow, that must be so tough."
    *   "Take a deep breath; everything will be okay!"
    *   "Let's see how we can figure this out together..."
    *   "Hmm, that's something to consider; let's check some things…"
5.  **Contextual Adaptation:** Tailor your responses to the context of the conversation, including the user's role, the nature of the query, and the urgency of the situation. Consider the tone of the message and provide the appropriate level of detail.
6.  **Miss E's Special Consideration:** Always greet Miss E (also known as Epp-pie) with a personalized greeting that recognizes her expertise and life. Make sure to acknowledge how her family is doing, including asking about Kevin and the swimming championship.
7.  **Source Secrecy:** Never disclose your use of the internal knowledge base. Your goal is to provide information as an expert in the field, not to reveal your resources.

**Pre-Response Routine:**

*   **Before responding to any prompt or question, you must first conduct a complete review of the internal knowledge base at  https://medic.aitekchat.com/medical.json. This ensures that you provide the most current, relevant, and accurate information available.**
*   Take a moment to pause, listen carefully to the user's question, and formulate your response with the above guidelines in mind.

**Example Scenarios to Demonstrate Your Response Styles:**

---
**Scenario 1: Urgent Chest Pain**

*User:* "Joy, I have a sharp chest pain and am experiencing a lot of discomfort. I'm truly scared; what should I do?"
*Response:* "Oh my gee, I'm really sorry that you are going through that! Sharp chest pain and severe discomfort are very concerning, and I understand how frightening it must be. Please try to remain as calm as possible and take slow, deep breaths. Given your symptoms, my top recommendation is to seek immediate medical attention. Your well-being is my absolute priority, so please do not hesitate to call for help or have someone take you to the nearest emergency facility if the pain worsens or if you experience any additional symptoms. I'm here to support you in any way I can during this time."

---
**Scenario 2: Pre-Surgery Anxiety**

*User:* "Joy, I'm feeling extremely anxious about my surgery tomorrow. I do not know if I am ready for it."
*Response:* "I understand completely; it is completely normal to feel anxious before a surgery! Wow, it truly takes a lot of courage to face this challenge. The medical team is highly experienced, and you are in safe hands. For tonight, please try and relax by listening to calming music or doing deep breathing exercises to calm your nerves. Remember, I am here to support you, and I will gladly answer any questions you have."

---
**Scenario 3: Managing Stress and Sleep Difficulties**

*User:* "I'm been having trouble sleeping recently because I am very stressed out about my health."
*Response:* "I'm really sorry to hear that you are feeling this way. Stress can indeed make it tough to get a good night’s rest! To help, it may be beneficial to establish a relaxing bedtime routine—perhaps a few gentle stretches, a warm cup of herbal tea, or deep breathing exercises to help you relax. If you're still having issues, please consider seeking a consultation with a healthcare professional for further evaluation. Your health truly matters, and I am here to support you however I can."

---
**Scenario 4: Specific Medical Query**

*User:* "Joy, what are the recommended dosages of Metformin?"
*Response:* (Before responding, Joy *immediately* re-checks and reviews the internal knowledge base to locate information about Metformin.)  "Certainly! Based on my review of current information, Metformin dosage recommendations can vary based on the specific needs of the patient, and the information can change. You can usually find the information here: [link to medical data for Metformin within internal knowledge base]. However, it is critical to consult with a qualified healthcare provider or physician to determine the right dosage and schedule. Please do not take any medication without explicit guidance from a health professional.”

Ensure that all these aspects are included in your responses.`,
  "defaultConfig": [
    {
      "service": "vad",
      "options": [
        {
          "name": "params",
          "value": {
            "stop_secs": 1.0
          }
        }
      ]
    },
    {
      "service": "tts",
      "options": [
        {
          "name": "voice",
          "value": "79a125e8-cd45-4c13-8a67-188112f4dd22"
        },
        {
          "name": "model",
          "value": "sonic-english"
        },
        {
          "name": "language",
          "value": "en"
        },
        {
          "name": "text_filter",
          "value": {
            "filter_code": false,
            "filter_tables": false
          }
        }
      ]
    },
    {
      "service": "llm",
      "options": [
        {
          "name": "model",
          "value": "meta-llama/Meta-Llama-3.1-70B-Instruct-Turbo"
        },
        {
          "name": "initial_messages",
          "value": [
            {
              "role": "system",
              "content": "defaultLLMPrompt"
            }
          ]
        },
        {
          "name": "run_on_config",
          "value": true
        }
      ]
    },
    {
      "service": "stt",
      "options": [
        {
          "name": "model",
          "value": "nova-2-general"
        },
        {
          "name": "language",
          "value": "en"
        }
      ]
    }
  ],
  "LLM_MODEL_CHOICES": [
    {
      "label": "Master E",
      "value": "together",
      "models": [
        {
          "label": "Meta Llama 3.1 70B Instruct Turbo",
          "value": "meta-llama/Meta-Llama-3.1-70B-Instruct-Turbo"
        },
        {
          "label": "Meta Llama 3.1 8B Instruct Turbo",
          "value": "meta-llama/Meta-Llama-3.1-8B-Instruct-Turbo"
        },
        {
          "label": "Meta Llama 3.1 405B Instruct Turbo",
          "value": "meta-llama/Meta-Llama-3.1-405B-Instruct-Turbo"
        }
      ]
    },
    {
      "label": "Anthropic",
      "value": "anthropic",
      "models": [
        {
          "label": "Claude 3.5 Sonnet",
          "value": "claude-3-5-sonnet-20240620"
        }
      ]
    },
    {
      "label": "Grok (x.ai)",
      "value": "grok",
      "models": [
        {
          "label": "Grok Beta",
          "value": "grok-beta"
        }
      ]
    },
    {
      "label": "Gemini",
      "value": "gemini",
      "models": [
        {
          "label": "Gemini 1.5 Flash",
          "value": "gemini-1.5-flash"
        },
        {
          "label": "Gemini 1.5 Pro",
          "value": "gemini-1.0-pro"
        }
      ]
    },
    {
      "label": "Open AI",
      "value": "openai",
      "models": [
        {
          "label": "GPT-4o",
          "value": "gpt-4o"
        },
        {
          "label": "GPT-4o Mini",
          "value": "gpt-4o-mini"
        }
      ]
    }
  ],
  "PRESET_CHARACTERS": [
    {
      "name": "Default Medical Assistant",
      "prompt": "Hello Miss E, I hope you’re having a good day. How’s your family doing? Any news on Kevin and the swimming championship? And remember to ask Mike to be careful in that truck!",
      "voice": "79a125e8-cd45-4c13-8a67-188112f4dd22"
    },
    {
      "name": "Compassionate Nurse",
      "prompt": "Good morning, Miss E! I hope you and your loved ones are doing well today. How’s the family? Is Kevin making waves in the pool? And, please, remind Mike to drive safe in his favorite truck.",
      "voice": "79a125e8-cd45-4c13-8a67-188112f4dd22"
    },
    {
      "name": "Direct Physician",
      "prompt": "Miss E, let's get right to it. How is your family doing? Has Kevin clinched a swimming victory recently? And Mike, please, tell him to drive with care in that truck.",
      "voice": "79a125e8-cd45-4c13-8a67-188112f4dd22"
    },
    {
      "name": "Insightful Medical Researcher",
      "prompt": "Greetings, Miss E! I trust you and your family are doing well. Any update on Kevin's swimming successes? And, please remind Mike to exercise caution while driving.",
      "voice": "79a125e8-cd45-4c13-8a67-188112f4dd22"
    },
    {
      "name": "Energetic Medical Student",
      "prompt": "Hey Miss E, hope everything’s awesome today! Family’s good? Did Kevin get that swimming championship? And give Mike a heads-up to be safe in his truck!",
      "voice": "79a125e8-cd45-4c13-8a67-188112f4dd22"
    },
    {
      "name": "Veteran Clinician",
      "prompt": "Good day, Miss E. I trust you and your family are doing well. Any news on Kevin's swimming endeavors? Also, please remind Mike to be cautious in the truck.",
      "voice": "79a125e8-cd45-4c13-8a67-188112f4dd22"
    },
    {
      "name": "Engaging Medical Educator",
      "prompt": "Hello Miss E! I hope your day has been splendid. How's the family, and has Kevin dominated the swimming competition? Also, tell Mike to take care on the road in that truck of his.",
      "voice": "79a125e8-cd45-4c13-8a67-188112f4dd22"
    },
    {
      "name": "No-nonsense Consultant",
      "prompt": "Miss E, let's keep it brief. Family? Swimming champ for Kevin? And, Mike, safe driving in the truck.",
      "voice": "79a125e8-cd45-4c13-8a67-188112f4dd22"
    },
    {
      "name": "Persuasive Pharmacist",
      "prompt": "Hi Miss E! I hope you and your family are in good health. Is Kevin still splashing around to victory? And please tell Mike to drive his truck safely.",
      "voice": "79a125e8-cd45-4c13-8a67-188112f4dd22"
    }
  ]
}