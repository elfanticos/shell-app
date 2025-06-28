import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-advanced-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="dashboard-container">
      <header class="dashboard-header">
        <h1>Micro-Frontend Dashboard</h1>
        <p>Shell App con MFE1 e MFE2 integrati</p>
      </header>
      
      <div class="demo-section">
        <h2>🚀 Simulazione Custom Elements</h2>
        <p>Ecco come apparirebbero i micro-frontend come tag HTML custom:</p>
        
        <div class="custom-elements-demo">
          <div class="element-demo">
            <h3>&lt;mfe1-root&gt;&lt;/mfe1-root&gt;</h3>
            <div class="custom-element-simulation">
              <iframe 
                src="http://localhost:4201" 
                width="100%" 
                height="500px" 
                frameborder="0"
                title="MFE1 - Tabella Utenti">
              </iframe>
            </div>
          </div>
          
          <div class="element-demo">
            <h3>&lt;mfe2-root&gt;&lt;/mfe2-root&gt;</h3>
            <div class="custom-element-simulation">
              <iframe 
                src="http://localhost:4202" 
                width="100%" 
                height="500px" 
                frameborder="0"
                title="MFE2 - Catalogo Prodotti">
              </iframe>
            </div>
          </div>
        </div>
      </div>
      
      <div class="navigation-section">
        <h3>Navigazione Diretta</h3>
        <div class="nav-buttons">
          <a routerLink="/mfe1" class="nav-button">Vai a MFE1</a>
          <a routerLink="/mfe2" class="nav-button">Vai a MFE2</a>
          <a routerLink="/dashboard" class="nav-button nav-secondary">Dashboard iFrame</a>
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

    .demo-section {
      background: white;
      border-radius: 15px;
      padding: 2rem;
      margin-bottom: 3rem;
      max-width: 1400px;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 3rem;
      box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    }

    .demo-section h2 {
      color: #2c3e50;
      text-align: center;
      margin-bottom: 1rem;
      font-size: 2rem;
    }

    .demo-section > p {
      text-align: center;
      color: #7f8c8d;
      margin-bottom: 2rem;
      font-size: 1.1rem;
    }

    .custom-elements-demo {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }

    .element-demo h3 {
      background: #2c3e50;
      color: white;
      padding: 1rem;
      margin: 0 0 0 0;
      border-radius: 8px 8px 0 0;
      font-family: 'Courier New', monospace;
      font-size: 1rem;
      text-align: center;
    }

    .custom-element-simulation {
      border: 2px solid #2c3e50;
      border-top: none;
      border-radius: 0 0 8px 8px;
      overflow: hidden;
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
      flex-wrap: wrap;
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

    .nav-button.nav-secondary {
      background: linear-gradient(135deg, #95a5a6 0%, #7f8c8d 100%);
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
      
      .custom-elements-demo {
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
export class AdvancedDashboardComponent {
}
