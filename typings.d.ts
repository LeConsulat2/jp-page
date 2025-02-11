declare module 'react-typed' {
  import * as React from 'react';

  export interface TypedProps {
    strings: string[];
    typeSpeed?: number;
    backSpeed?: number;
    loop?: boolean;
    startDelay?: number;
    backDelay?: number;
    smartBackspace?: boolean;
    shuffle?: boolean;
    fadeOut?: boolean;
    fadeOutClass?: string;
    fadeOutDelay?: number;
    showCursor?: boolean;
    cursorChar?: string;
    attr?: string;
    contentType?: 'html' | 'text';
    onComplete?: () => void;
    preStringTyped?: (arrayPos: number) => void;
    onStringTyped?: (arrayPos: number) => void;
    onLastStringBackspaced?: () => void;
    onTypingPaused?: (arrayPos: number) => void;
    onTypingResumed?: (arrayPos: number) => void;
    onReset?: () => void;
    onStop?: (arrayPos: number) => void;
    onStart?: (arrayPos: number) => void;
    onDestroy?: () => void;
  }

  export class Typed extends React.Component<TypedProps> {}
}
