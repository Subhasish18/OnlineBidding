"use client";

import React, { useState } from 'react';
import { Button } from '@mui/material';
import { TextField } from '@mui/material';
import { toast } from "sonner";

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      toast.error('Please enter your email address');
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setEmail('');
      toast.success('Thank you for subscribing to our newsletter!');
    }, 1000);
  };

  return (
    <section className="bg-blue-500 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-3">Stay Updated</h2>
          <p className="text-blue-100 mb-8">
            Subscribe to our newsletter for the latest auction alerts, exclusive deals, and bidding tips
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <TextField
              type="email"
              placeholder="Enter your email address"
              variant="outlined"
              InputProps={{
                style: {
                  backgroundColor: 'rgba(2, 2, 2, 0.1)',
                  borderColor: 'rgba(0, 0, 0, 0.2)',
                  color: 'black',
                },
              }}
              InputLabelProps={{
                style: { color: 'rgba(36, 33, 33, 0.6)' },
              }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
            />
           <Button
            type="submit"
            variant="contained"
            color="error"
            disabled={isLoading}
            sx={{
                px: 4,
                py: 1.5,
                fontWeight: 'bold',
                borderRadius: '9999px',
                boxShadow: 3,
                textTransform: 'none',
            }}
            >
            {isLoading ? (
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    ></circle>
                    <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                </svg>
                Subscribing...
                </span>
            ) : (
                'Subscribe'
            )}
            </Button>

          </form>

          <p className="text-xs text-blue-100/80 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;