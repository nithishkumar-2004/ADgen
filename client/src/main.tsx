import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { ClerkProvider } from '@clerk/clerk-react'
import { dark } from "@clerk/themes"
import React from 'react'

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
    throw new Error('Missing Publishable Key')
}

class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean, error: Error | null }> {
    constructor(props: any) {
        super(props);
        this.state = { hasError: false, error: null };
    }
    static getDerivedStateFromError(error: Error) {
        return { hasError: true, error };
    }
    render() {
        if (this.state.hasError) {
            return (
                <div style={{ padding: '2rem', color: 'white', background: '#0f172a', minHeight: '100vh' }}>
                    <h2 style={{ color: '#f87171' }}>Something went wrong</h2>
                    <pre style={{ color: '#fca5a5', fontSize: 13 }}>{this.state.error?.message}</pre>
                </div>
            );
        }
        return this.props.children;
    }
}

createRoot(document.getElementById('root')! as HTMLElement).render(
    <ErrorBoundary>
        <ClerkProvider
            appearance={{
                theme: dark,
                variables: {
                    colorPrimary: '#4f39f6',
                    colorTextOnPrimaryBackground: "#ffffff"
                }
            }}
            publishableKey={PUBLISHABLE_KEY}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ClerkProvider>
    </ErrorBoundary>
)