"use client";

import { useChat } from "@ai-sdk/react";
import { TextStreamChatTransport } from "ai";
import { useRef, useEffect, useState, useMemo } from "react";
import ReactMarkdown from "react-markdown";
import type { Course } from "@/data/courses";

const programLabel = {
  BIT: "MBA Business & IT",
  PP: "MBA Public & Private",
};

export default function ChatInterface({ course }: { course: Course }) {
  const transport = useMemo(
    () =>
      new TextStreamChatTransport({
        api: "/api/chat",
        body: { courseSlug: course.slug },
      }),
    [course.slug]
  );

  const { messages, sendMessage, status, error } = useChat({
    transport,
  });

  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [showSidebar, setShowSidebar] = useState(false);

  const isLoading = status === "submitted" || status === "streaming";

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault?.();
    if (!input.trim() || isLoading) return;
    sendMessage({ text: input });
    setInput("");
  };

  const handleSuggestion = (text: string) => {
    sendMessage({ text });
  };

  const isEN = course.language === "en";

  const suggestions = isEN
    ? [
        "Let's start by reviewing the learning goals.",
        "What are the key changes needed for this module?",
        "Help me with the constructive alignment of this module.",
      ]
    : [
        "Laten we beginnen met het herzien van de leerdoelen.",
        "Wat zijn de belangrijkste veranderingen voor deze module?",
        "Help me met de constructive alignment van deze module.",
      ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar - Course Info */}
      <aside
        className={`${
          showSidebar ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-30 w-80 bg-white border-r border-gray-200 overflow-y-auto transition-transform duration-200 ease-in-out`}
      >
        <div className="p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
              {isEN ? "Module Details" : "Modulegegevens"}
            </h2>
            <button
              onClick={() => setShowSidebar(false)}
              className="lg:hidden text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
          </div>

          <h3 className="text-lg font-bold text-gray-900 mb-3">
            {course.name}
          </h3>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500">
                {isEN ? "Program" : "Programma"}
              </span>
              <span className="font-medium">
                {programLabel[course.program]}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">ECTS</span>
              <span className="font-medium">{course.ects}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">
                {isEN ? "Blocks" : "Blokken"}
              </span>
              <span className="font-medium">{course.blocks}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">
                {isEN ? "Contact hours" : "Contacturen"}
              </span>
              <span className="font-medium">{course.contactHours}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">
                {isEN ? "Coordinator" : "Coördinator"}
              </span>
              <span className="font-medium text-right">
                {course.coordinator}
              </span>
            </div>
          </div>

          <hr className="my-4" />

          <div>
            <h4 className="text-sm font-semibold text-gray-700 mb-2">
              {isEN ? "Current learning goals" : "Huidige leerdoelen"}
            </h4>
            <ol className="text-xs text-gray-600 space-y-2 list-decimal list-inside">
              {course.currentLearningGoals.map((goal, i) => (
                <li key={i} className="leading-relaxed">
                  {goal}
                </li>
              ))}
            </ol>
          </div>

          <hr className="my-4" />

          <div>
            <h4 className="text-sm font-semibold text-gray-700 mb-2">
              {isEN ? "Current assessment" : "Huidige toetsing"}
            </h4>
            <p className="text-xs text-gray-600">{course.currentAssessment}</p>
          </div>

          <hr className="my-4" />

          <div>
            <h4 className="text-sm font-semibold text-gray-700 mb-2">
              {isEN ? "Key topics" : "Kernonderwerpen"}
            </h4>
            <ul className="text-xs text-gray-600 space-y-1">
              {course.keyTopics.map((topic, i) => (
                <li key={i} className="flex items-start gap-1">
                  <span className="text-gray-400 mt-0.5">•</span>
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile sidebar */}
      {showSidebar && (
        <div
          className="fixed inset-0 bg-black/30 z-20 lg:hidden"
          onClick={() => setShowSidebar(false)}
        />
      )}

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="bg-white border-b border-gray-200 px-4 py-3 flex items-center gap-3 shadow-sm">
          <button
            onClick={() => setShowSidebar(true)}
            className="lg:hidden text-gray-500 hover:text-gray-700"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <a
            href="/"
            className="text-sm text-blue-600 hover:text-blue-800 font-medium"
          >
            {isEN ? "← Back to overview" : "← Terug naar overzicht"}
          </a>
          <span className="text-gray-300">|</span>
          <h1 className="text-sm font-semibold text-gray-800 truncate">
            {course.name}
          </h1>
          <span className="shrink-0 text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded font-medium">
            {course.ects} ECTS
          </span>
        </header>

        {/* Messages */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-6">
          <div className="max-w-3xl mx-auto space-y-4">
            {messages.length === 0 && (
              <div className="text-center py-16">
                <div className="text-4xl mb-4">🎓</div>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {isEN
                    ? "Welcome to the Module Redesign Assistant"
                    : "Welkom bij de Module Herontwerp Assistent"}
                </h2>
                <p className="text-gray-500 mb-6 max-w-md mx-auto">
                  {isEN
                    ? `Send a message to start the conversation. The assistant will guide you through the redesign of `
                    : `Stuur een bericht om het gesprek te starten. De assistent begeleidt je door het herontwerp van `}
                  <strong>{course.name}</strong>.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {suggestions.map((suggestion) => (
                    <button
                      key={suggestion}
                      onClick={() => handleSuggestion(suggestion)}
                      className="text-sm bg-white border border-gray-200 rounded-lg px-3 py-2 text-gray-700 hover:border-blue-400 hover:text-blue-600 transition-colors"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                    message.role === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-white border border-gray-200 text-gray-800 shadow-sm"
                  }`}
                >
                  <div
                    className={`text-sm leading-relaxed ${
                      message.role === "assistant"
                        ? "prose prose-sm max-w-none prose-headings:text-gray-800 prose-headings:text-base prose-headings:font-semibold prose-headings:mt-3 prose-headings:mb-1 prose-p:my-1.5 prose-ul:my-1.5 prose-ol:my-1.5 prose-li:my-0.5"
                        : "whitespace-pre-wrap"
                    }`}
                  >
                    {message.parts?.map((part, i) => {
                      if (part.type === "text") {
                        return message.role === "assistant" ? (
                          <ReactMarkdown key={i}>{part.text}</ReactMarkdown>
                        ) : (
                          <span key={i}>{part.text}</span>
                        );
                      }
                      return null;
                    })}
                  </div>
                </div>
              </div>
            ))}

            {status === "submitted" && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 rounded-2xl px-4 py-3 shadow-sm">
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                    <span
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    />
                    <span
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    />
                  </div>
                </div>
              </div>
            )}

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-sm text-red-700">
                {isEN
                  ? "An error occurred. Check that the ANTHROPIC_API_KEY is set and try again."
                  : "Er is een fout opgetreden. Controleer of de ANTHROPIC_API_KEY is ingesteld en probeer het opnieuw."}
              </div>
            )}
          </div>
        </div>

        {/* Input area */}
        <div className="border-t border-gray-200 bg-white p-4">
          <form
            onSubmit={handleSubmit}
            className="max-w-3xl mx-auto flex gap-3"
          >
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSubmit();
                }
              }}
              placeholder={
                isEN
                  ? "Ask a question or give a response..."
                  : "Stel een vraag of geef een reactie..."
              }
              rows={1}
              className="flex-1 resize-none rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="shrink-0 bg-blue-600 text-white rounded-xl px-5 py-3 text-sm font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isEN ? "Send" : "Verstuur"}
            </button>
          </form>
          <p className="max-w-3xl mx-auto mt-2 text-xs text-gray-400 text-center">
            {isEN
              ? "AI assistant powered by Claude. Always verify recommendations yourself."
              : "AI-assistent op basis van Claude. Controleer aanbevelingen altijd zelf."}
          </p>
        </div>
      </div>
    </div>
  );
}
