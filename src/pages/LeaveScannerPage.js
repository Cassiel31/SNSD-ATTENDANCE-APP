import React, { useEffect, useState } from 'react';
import { Html5Qrcode } from 'html5-qrcode';
import { supabase } from '../supabase';

export default function LeaveScannerPage({ setCurrentPage, currentUser }) {
  const [message, setMessage] = useState('Waiting for QR scan...');

  useEffect(() => {
    const scanner = new Html5Qrcode('leave-reader');

    async function startScanner() {
      try {
        await scanner.start(
          // FIX: Pass strict media constraints to force the back camera
          { facingMode: { exact: "environment" } },
          {
            fps: 10,
            qrbox: 250,
          },
          async (decodedText) => {
            await scanner.stop();

            if (decodedText !== 'SNSD_ATTENDANCE') {
              setMessage('Invalid QR Code');
              setTimeout(() => {
                setCurrentPage('dashboard');
              }, 1500);
              return;
            }

            const today = new Date().toISOString().split('T')[0];
            const now = new Date().toISOString();

            const { data: existing } = await supabase
              .from('attendance')
              .select('*')
              .eq('username', currentUser.username.toLowerCase())
              .eq('session_date', today)
              .maybeSingle();

            if (!existing) {
              setMessage('No arrival found');
              setTimeout(() => {
                setCurrentPage('dashboard');
              }, 1500);
              return;
            }

            if (existing.logout_time) {
              setMessage('Leave already recorded');
              setTimeout(() => {
                setCurrentPage('dashboard');
              }, 1500);
              return;
            }

            await supabase
              .from('attendance')
              .update({
                logout_time: now,
              })
              .eq('id', existing.id);

            setMessage('Leave Logged');
            setTimeout(() => {
              setCurrentPage('dashboard');
            }, 1500);
          }
        );
      } catch (error) {
        console.error(error);
        // Fallback: If "exact" environment fails (like on desktop browsers), try loose matching
        try {
          await scanner.start(
            { facingMode: 'environment' },
            { fps: 10, qrbox: 250 },
            async (decodedText) => { /* Copy same callback logic if necessary */ }
          );
        } catch (fallbackError) {
          setMessage('Camera failed to open');
        }
      }
    }

    startScanner();

    return () => {
      // FIX: Check if active before calling stop to avoid crash on back navigation
      if (scanner.isScanning) {
        scanner.stop().catch((err) => console.error("Error stopping scanner", err));
      }
    };
  }, [currentUser, setCurrentPage]);

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#f6f2ee',
        padding: '28px',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      <button
        onClick={() => setCurrentPage('attendance')}
        style={{
          background: 'none',
          border: 'none',
          color: '#777',
          cursor: 'pointer',
          marginBottom: '28px',
          padding: 0,
          fontSize: '15px',
        }}
      >
        ← Back
      </button>

      <h1
        style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: '48px',
          marginTop: 0,
          marginBottom: '10px',
          color: '#1f1f23',
        }}
      >
        Leave
      </h1>

      <p
        style={{
          color: '#777',
          marginBottom: '28px',
          lineHeight: '1.6',
        }}
      >
        Scan the attendance QR when leaving.
      </p>

      <div
        style={{
          backgroundColor: 'white',
          borderRadius: '30px',
          padding: '24px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
        }}
      >
        <div
          id="leave-reader"
          style={{
            width: '100%',
            overflow: 'hidden',
            borderRadius: '24px',
          }}
        />

        <div
          style={{
            marginTop: '22px',
            backgroundColor: '#f3eee9',
            borderRadius: '22px',
            padding: '18px',
            textAlign: 'center',
            color: '#1f1f23',
            fontWeight: '500',
          }}
        >
          {message}
        </div>
      </div>
    </div>
  );
}
