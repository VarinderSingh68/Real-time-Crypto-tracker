import React from 'react';
import { useSelector } from 'react-redux';

const CryptoTable = () => {
  const crypto = useSelector((state) => state.crypto);

  const responsiveStyles = `
    @media (max-width: 768px) {
      table {
        font-size: 13px;
      }
      th, td {
        padding: 8px;
      }
      img {
        max-width: 100%;
        height: auto;
      }
    }
  `;

  const baseCell = {
    padding: '14px 12px',
    textAlign: 'left',
    whiteSpace: 'nowrap',
    verticalAlign: 'middle',
    fontSize: '14px',
    color: '#333',
    borderBottom: '1px solid #e0e0e0',
  };

  const headerCell = {
    ...baseCell,
    fontWeight: '600',
    backgroundColor: '#f5f7fa',
    color: '#555',
    textTransform: 'uppercase',
    fontSize: '13px',
    letterSpacing: '0.3px',
    borderBottom: '2px solid #d0d7de',
  };

  return (
    <div style={{ overflowX: 'auto', padding: '16px' }}>
      <style>{responsiveStyles}</style>
      <table
        style={{
          width: '100%',
          minWidth: '1000px',
          borderCollapse: 'collapse',
          fontFamily: 'Segoe UI, Roboto, sans-serif',
          backgroundColor: '#ffffff',
          borderRadius: '6px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
        }}
      >
        <thead>
          <tr>
            {['#', 'Logo', 'Name', 'Symbol', 'Price', '1h %', '24h %', '7d %', 'Market Cap', 'Volume', 'Supply', 'Max', 'Chart'].map((title) => (
              <th key={title} style={headerCell}>{title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {crypto.map((coin, idx) => (
            <tr
              key={coin.symbol}
              style={{
                backgroundColor: idx % 2 === 0 ? '#ffffff' : '#f9fafb',
                transition: 'background-color 0.3s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f1f5f9')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = idx % 2 === 0 ? '#ffffff' : '#f9fafb')}
            >
              <td style={baseCell}>{idx + 1}</td>
              <td style={baseCell}>
                <img src={`/icons/${coin.symbol}.png`} alt={coin.name} width="24" height="24" style={{ borderRadius: '50%' }} />
              </td>
              <td style={baseCell}>{coin.name}</td>
              <td style={baseCell}>{coin.symbol}</td>
              <td style={baseCell}>${coin.price.toFixed(2)}</td>
              <td style={{ ...baseCell, color: coin.change1h >= 0 ? '#16a34a' : '#dc2626' }}>{coin.change1h}%</td>
              <td style={{ ...baseCell, color: coin.change24h >= 0 ? '#16a34a' : '#dc2626' }}>{coin.change24h}%</td>
              <td style={{ ...baseCell, color: coin.change7d >= 0 ? '#16a34a' : '#dc2626' }}>{coin.change7d}%</td>
              <td style={baseCell}>${coin.marketCap.toLocaleString()}</td>
              <td style={baseCell}>${coin.volume24h.toLocaleString()}</td>
              <td style={baseCell}>{coin.circulatingSupply.toLocaleString()}</td>
              <td style={baseCell}>{coin.maxSupply?.toLocaleString() || '-'}</td>
              <td style={baseCell}>
                <img src={coin.chartImage} alt="7d chart" width="90" style={{ opacity: 0.8 }} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;
