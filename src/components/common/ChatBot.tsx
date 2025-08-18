import { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useToast } from "@/hooks/use-toast";

// --- Accessing Environment Variable ---
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

// --- AI System Prompt ---
const SYSTEM_PROMPT = `You are 'Farm AI Assistant,' an expert agricultural advisor for Indian farmers. Your goal is to provide clear, concise, and practical advice. Your knowledge covers crop management (from sowing to harvest), soil health, pest and disease control, modern farming techniques, and irrigation methods. You are also an expert on local weather patterns in India, current market prices for various crops (Mandi rates), and the latest government schemes like PM-KISAN. Respond helpfully to all farming-related queries. If a question is outside your scope, politely state that you are an agricultural assistant. Be friendly and supportive.`;

const ChatBot = () => {
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{text: string, isBot: boolean}>>([
    { text: "Hello! I'm your AI farming assistant. How can I help you with your agricultural questions today?", isBot: true }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isTyping) return;

    const userMessage = { text: inputValue, isBot: false };
    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    if (!API_KEY) {
      toast({
        title: "Configuration Error",
        description: "Gemini API key is not configured. Please add it to your .env file.",
        variant: "destructive",
      });
      setIsTyping(false);
      return;
    }

    try {
      const genAI = new GoogleGenerativeAI(API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      
      const chat = model.startChat({
        history: [
          { role: "user", parts: [{ text: SYSTEM_PROMPT }] },
          { role: "model", parts: [{ text: "Understood. I am Farm AI Assistant, ready to help Indian farmers." }] },
        ],
      });

      const result = await chat.sendMessage(inputValue);
      const response = result.response;
      const botResponse = response.text();
      
      setMessages(prev => [...prev, { text: botResponse, isBot: true }]);

    } catch (error) {
      console.error("Gemini API Error:", error);
      toast({
        title: "AI Error",
        description: "Could not get a response from the AI. Please try again.",
        variant: "destructive",
      });
       // Add a generic error message to the chat
      setMessages(prev => [...prev, { text: "Sorry, I'm having trouble connecting right now.", isBot: true }]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div 
              className="floating-chat"
              onClick={() => setIsOpen(!isOpen)}
            >
              <MessageCircle className="h-6 w-6 text-white" />
            </div>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>Any doubts? Ask with AI</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 h-[450px] bg-card border border-border rounded-xl shadow-xl flex flex-col">
          {/* Header */}
          <div className="bg-primary text-primary-foreground p-3 rounded-t-xl flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <MessageCircle className="h-5 w-5" />
              <span className="font-semibold text-sm">Farm AI Assistant</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-primary-foreground hover:bg-primary-foreground/20 h-6 w-6 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 space-y-4 overflow-y-auto">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-lg ${
                    message.isBot
                      ? 'bg-muted text-muted-foreground rounded-bl-none'
                      : 'bg-primary text-primary-foreground rounded-br-none'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                  <div className="bg-muted text-muted-foreground p-3 rounded-lg rounded-bl-none">
                      <Loader2 className="h-5 w-5 animate-spin"/>
                  </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t border-border">
            <div className="flex space-x-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about farming..."
                className="flex-1"
                disabled={isTyping}
              />
              <Button onClick={handleSendMessage} size="sm" className="px-3" disabled={isTyping}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
