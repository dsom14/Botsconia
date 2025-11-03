import { useEffect, useState, useRef } from 'react';
import Vapi from '@vapi-ai/web';
import { Phone, PhoneOff } from 'lucide-react';

interface VapiButtonProps {
  assistantId?: string;
  publicKey?: string;
}

const VapiButton = ({
  assistantId = import.meta.env.VITE_VAPI_ASSISTANT_ID,
  publicKey = import.meta.env.VITE_VAPI_PUBLIC_KEY
}: VapiButtonProps) => {
  const [isCallActive, setIsCallActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const vapiRef = useRef<Vapi | null>(null);

  useEffect(() => {
    if (!publicKey) {
      console.warn('Vapi public key not found. Please set VITE_VAPI_PUBLIC_KEY in your .env file');
      return;
    }

    // Initialize Vapi
    vapiRef.current = new Vapi(publicKey);

    const vapi = vapiRef.current;

    // Event listeners
    vapi.on('call-start', () => {
      setIsCallActive(true);
      setIsLoading(false);
      console.log('Call started');
    });

    vapi.on('call-end', () => {
      setIsCallActive(false);
      setIsLoading(false);
      setIsSpeaking(false);
      console.log('Call ended');
    });

    vapi.on('speech-start', () => {
      setIsSpeaking(true);
      console.log('Assistant speaking');
    });

    vapi.on('speech-end', () => {
      setIsSpeaking(false);
      console.log('Assistant stopped speaking');
    });

    vapi.on('error', (error) => {
      console.error('Vapi error:', error);
      setIsLoading(false);
      setIsCallActive(false);
    });

    return () => {
      // Cleanup
      if (vapi) {
        vapi.stop();
      }
    };
  }, [publicKey]);

  const startCall = async () => {
    if (!vapiRef.current || !assistantId) {
      console.error('Vapi not initialized or assistant ID missing');
      return;
    }

    setIsLoading(true);
    try {
      await vapiRef.current.start(assistantId);
    } catch (error) {
      console.error('Error starting call:', error);
      setIsLoading(false);
    }
  };

  const endCall = () => {
    if (!vapiRef.current) return;

    vapiRef.current.stop();
    setIsCallActive(false);
    setIsLoading(false);
  };

  const handleClick = () => {
    if (isCallActive) {
      endCall();
    } else {
      startCall();
    }
  };

  if (!publicKey || !assistantId) {
    return null; // Don't render if credentials are missing
  }

  return (
    <button
      onClick={handleClick}
      disabled={isLoading}
      className={`
        fixed bottom-6 right-6 z-50
        flex items-center justify-center
        h-16 w-16 rounded-full
        bg-gradient-to-r from-accent-red to-accent-cyan
        text-white shadow-2xl
        transition-all duration-300
        hover:scale-110 hover:shadow-accent-cyan/50
        disabled:opacity-50 disabled:cursor-not-allowed
        ${isCallActive ? 'animate-pulse' : ''}
        ${isSpeaking ? 'ring-4 ring-accent-cyan ring-opacity-50' : ''}
      `}
      aria-label={isCallActive ? 'End call' : 'Start call with assistant'}
    >
      {isLoading ? (
        <div className="h-6 w-6 animate-spin rounded-full border-2 border-white border-t-transparent" />
      ) : isCallActive ? (
        <PhoneOff className="h-6 w-6" />
      ) : (
        <Phone className="h-6 w-6" />
      )}
    </button>
  );
};

export default VapiButton;
