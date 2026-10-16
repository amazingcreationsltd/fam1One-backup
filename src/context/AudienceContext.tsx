import React, { createContext, useContext, useState } from 'react';

export type AudienceMode = 'brand' | 'creator';

interface AudienceContextType {
  audience: AudienceMode;
  setAudience: (mode: AudienceMode) => void;
}

const AudienceContext = createContext<AudienceContextType | undefined>(undefined);

export const AudienceProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [audience, setAudience] = useState<AudienceMode>('brand');

  return (
    <AudienceContext.Provider value={{ audience, setAudience }}>
      {children}
    </AudienceContext.Provider>
  );
};

export const useAudience = (): AudienceContextType => {
  const context = useContext(AudienceContext);
  if (!context) {
    throw new Error('useAudience must be used within an AudienceProvider');
  }
  return context;
};
