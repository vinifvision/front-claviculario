import React from 'react';

export default function ButtonPage() {
  const handleAlertClick = () => {
    alert('🚨 ALERTA: O botão de emergência foi acionado!');
  };

  return (
    <div style={{
      width: '100%',
      minHeight: '70vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      fontFamily: 'sans-serif'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '400px',
        backgroundColor: '#ffffff',
        padding: '40px 30px',
        borderRadius: '16px',
        boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
        textAlign: 'center',
        border: '1px solid #f0f0f0'
      }}>
        <h1 style={{ fontSize: '26px', color: '#111827', margin: '0 0 10px 0', fontWeight: '800' }}>
          Painel de Emergência
        </h1>
        
        <p style={{ fontSize: '14px', color: '#6b7280', margin: '0 0 30px 0', lineHeight: '1.5' }}>
          Se houver qualquer irregularidade ou problema crítico com o claviculário, acione o botão abaixo imediatamente.
        </p>

        {/* Botão Vermelho Grande */}
        <button 
          onClick={handleAlertClick} 
          style={{
            width: '100%',
            backgroundColor: '#dc2626',
            color: '#ffffff',
            padding: '20px 0',
            fontSize: '24px',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            border: 'none',
            borderRadius: '12px',
            cursor: 'pointer',
            boxShadow: '0 10px 20px rgba(220, 38, 38, 0.3)'
          }}
        >
          🚨 Alerta
        </button>
      </div>
    </div>
  );
}