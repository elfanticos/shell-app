import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="dashboard-container">
      <header class="dashboard-header">
        <h1>Micro-Frontend Dashboard</h1>
        <p>Shell App che carica MFE1 e MFE2 come elementi HTML</p>
      </header>
      
      <div class="mfe-container">
        <div class="mfe-section">
          <h2>MFE1 - Tabella Utenti</h2>
          <div class="mfe-wrapper">
            <iframe 
              src="http://localhost:4201" 
              width="100%" 
              height="600px" 
              frameborder="0"
              title="MFE1 - Tabella Utenti">
            </iframe>
          </div>
        </div>
        
        <div class="mfe-section">
          <h2>MFE2 - Secondo Micro Frontend</h2>
          <div class="mfe-wrapper">
            <iframe 
              src="http://localhost:4202" 
              width="100%" 
              height="600px" 
              frameborder="0"
              title="MFE2 - Secondo Micro Frontend">
            </iframe>
          </div>
        </div>
      </div>
      
      <div class="navigation-section">
        <h3>Navigazione Diretta</h3>
        <div class="nav-buttons">
          <a routerLink="/mfe1" class="nav-button">Vai a MFE1</a>
          <a routerLink="/mfe2" class="nav-button">Vai a MFE2</a>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .dashboard-container {
      min-height: 100vh;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 2rem;
      font-family: 'Inter', sans-serif;
    }

    .dashboard-header {
      text-align: center;
      color: white;
      margin-bottom: 3rem;
    }

    .dashboard-header h1 {
      font-size: 3rem;
      font-weight: 700;
      margin-bottom: 1rem;
      text-shadow: 0 2px 10px rgba(0,0,0,0.2);
    }

    .dashboard-header p {
      font-size: 1.2rem;
      opacity: 0.9;
      font-weight: 300;
    }

    .mfe-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      max-width: 1400px;
      margin: 0 auto 3rem auto;
    }

    .mfe-section {
      background: white;
      border-radius: 15px;
      overflow: hidden;
      box-shadow: 0 10px 30px rgba(0,0,0,0.2);
      transition: transform 0.3s ease;
    }

    .mfe-section:hover {
      transform: translateY(-5px);
    }

    .mfe-section h2 {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      margin: 0;
      padding: 1.5rem;
      font-size: 1.5rem;
      font-weight: 600;
    }

    .mfe-wrapper {
      padding: 0;
      min-height: 600px;
      display: flex;
      align-items: stretch;
    }

    .mfe-wrapper iframe {
      border-radius: 0 0 15px 15px;
    }

    .navigation-section {
      background: white;
      border-radius: 15px;
      padding: 2rem;
      text-align: center;
      max-width: 600px;
      margin: 0 auto;
      box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    }

    .navigation-section h3 {
      color: #2c3e50;
      margin-bottom: 1.5rem;
      font-size: 1.5rem;
    }

    .nav-buttons {
      display: flex;
      gap: 1rem;
      justify-content: center;
    }

    .nav-button {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 12px 24px;
      border-radius: 8px;
      text-decoration: none;
      font-weight: 600;
      transition: all 0.3s ease;
      box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    }

    .nav-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(0,0,0,0.3);
    }

    /* Responsive design */
    @media (max-width: 768px) {
      .dashboard-container {
        padding: 1rem;
      }
      
      .dashboard-header h1 {
        font-size: 2rem;
      }
      
      .mfe-container {
        grid-template-columns: 1fr;
        gap: 1rem;
      }
      
      .nav-buttons {
        flex-direction: column;
        align-items: center;
      }
      
      .nav-button {
        width: 200px;
      }
    }
  `]
})
export class DashboardComponent {
}
