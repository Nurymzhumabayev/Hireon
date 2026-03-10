import React, { useEffect, useState } from 'react';
import './App.css';

// --- Icons SVGs ---
const LightningIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
);
const BrainIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"></path><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"></path></svg>
);
const UsersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
);
const DatabaseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
);
const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
);
const TrendingDownIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 17 13.5 8.5 8.5 13.5 2 7"></polyline><polyline points="16 17 22 17 22 11"></polyline></svg>
);
const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
);

function DemoPage({ onBack }) {
  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        } else {
          entry.target.classList.remove('active');
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyItems: 'center', paddingTop: '10vh' }}>
      <nav className="navbar reveal" style={{ width: '100%', marginBottom: '4rem' }}>
        <div className="logo">
          <span className="text-primary">Job</span> Data Scraper
        </div>
        <button className="btn btn-outline" onClick={onBack}>На главную</button>
      </nav>

      <div className="section-header reveal delay-100" style={{ textAlign: 'center' }}>
        <h1 className="section-title">Демо Версия</h1>
        <p className="section-subtitle">
          Здесь будет интерфейс или форма для демо версии (сейчас страница пустая).
        </p>
      </div>
    </div>
  );
}

const mockEmployees = [
  { id: 1, name: "Александр Смирнов", role: "Frontend Разработчик", exp: "3 года", skills: ["React", "TypeScript", "Tailwind"], salary: "150 000 ₽" },
  { id: 2, name: "Елена Попова", role: "Data Scientist", exp: "5 лет", skills: ["Python", "ML", "SQL", "Pandas"], salary: "250 000 ₽" },
  { id: 3, name: "Дмитрий Иванов", role: "UX/UI Дизайнер", exp: "4 года", skills: ["Figma", "CJM", "Анимации"], salary: "120 000 ₽" },
  { id: 4, name: "Анна Серкова", role: "Backend Разработчик", exp: "2 года", skills: ["Node.js", "PostgreSQL", "Docker"], salary: "140 000 ₽" },
  { id: 5, name: "Максим Волков", role: "Product Manager", exp: "6 лет", skills: ["Agile", "CustDev", "Jira"], salary: "200 000 ₽" },
  { id: 6, name: "Ольга Новикова", role: "QA Инженер", exp: "1.5 года", skills: ["Postman", "Cypress", "Тест-кейсы"], salary: "80 000 ₽" }
];

function MainPage({ onBack }) {
  // --- State for Backend Integration ---
  const [employees, setEmployees] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // --- Mock API Fetch (Ready for real Backend) ---
  // In the future, replace the mock url with your real backend API route (e.g. "https://api.yourdomain.com/candidates")
  const fetchCandidates = async (query = '') => {
    setIsLoading(true);
    setError(null);
    try {
      // -- REAL BACKEND CODE EXAMPLE --
      /*
      const response = await fetch(`https://your-backend-api.com/v1/candidates?search=${query}`);
      if (!response.ok) throw new Error('Ошибка загрузки данных');
      const data = await response.json();
      setEmployees(data);
      */

      // -- MOCK DELAY TO SIMULATE NETWORK REQUEST --
      await new Promise(resolve => setTimeout(resolve, 800)); // 800ms fake delay

      // Applying search logic on the frontend temporarily
      if (query.trim() === '') {
        setEmployees(mockEmployees);
      } else {
        const filtered = mockEmployees.filter(emp => {
          const matchStr = `${emp.name} ${emp.role} ${emp.skills.join(' ')}`.toLowerCase();
          return matchStr.includes(query.toLowerCase());
        });
        setEmployees(filtered);
      }
    } catch (err) {
      console.error("Ошибка при получении кандидатов:", err);
      setError("Не удалось загрузить базу кандидатов. Пожалуйста, попробуйте позже.");
    } finally {
      setIsLoading(false);
    }
  };

  // Run on initial mount
  useEffect(() => {
    fetchCandidates();
  }, []);

  // Handle manual search button click
  const handleSearch = (e) => {
    e.preventDefault();
    fetchCandidates(searchQuery);
  };


  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        } else {
          entry.target.classList.remove('active');
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyItems: 'center', paddingTop: '10vh' }}>
      <nav className="navbar reveal" style={{ width: '100%', marginBottom: '4rem' }}>
        <div className="logo">
          <span className="text-primary">Job</span> Data Scraper
        </div>
        <button className="btn btn-outline" onClick={onBack}>На главную</button>
      </nav>

      <div className="section-header reveal delay-100" style={{ textAlign: 'left', marginBottom: '2rem' }}>
        <h1 className="section-title text-primary">База Кандидатов</h1>
        <p className="section-subtitle" style={{ margin: '0' }}>
          Найдите идеального сотрудника в нашей актуальной базе данных.
        </p>
      </div>

      <div className="main-layout reveal delay-200">
        {/* Sidebar Filters */}
        <aside className="sidebar-filters">
          <div className="filter-section">
            <h3 className="filter-title">Сортировка</h3>
            <select className="filter-select">
              <option>Сначала новые</option>
              <option>По релевантности</option>
              <option>Зарплата (по возрастанию)</option>
              <option>Зарплата (по убыванию)</option>
            </select>
          </div>

          <div className="filter-section">
            <h3 className="filter-title">Специализация</h3>
            <label className="filter-checkbox">
              <input type="checkbox" defaultChecked /> Frontend
            </label>
            <label className="filter-checkbox">
              <input type="checkbox" defaultChecked /> Backend
            </label>
            <label className="filter-checkbox">
              <input type="checkbox" defaultChecked /> Data Science
            </label>
            <label className="filter-checkbox">
              <input type="checkbox" defaultChecked /> QA
            </label>
            <label className="filter-checkbox">
              <input type="checkbox" defaultChecked /> UI/UX
            </label>
          </div>

          <div className="filter-section">
            <h3 className="filter-title">Опыт работы</h3>
            <label className="filter-checkbox">
              <input type="radio" name="exp" /> Нет опыта
            </label>
            <label className="filter-checkbox">
              <input type="radio" name="exp" /> От 1 года до 3 лет
            </label>
            <label className="filter-checkbox">
              <input type="radio" name="exp" defaultChecked /> От 3 до 6 лет
            </label>
            <label className="filter-checkbox">
              <input type="radio" name="exp" /> Более 6 лет
            </label>
          </div>

          <button className="btn btn-outline" style={{ width: '100%', marginTop: '1rem' }}>Сбросить фильтры</button>
        </aside>

        {/* Content Area */}
        <div className="content-area">
          <form className="search-container" onSubmit={handleSearch}>
            <div className="search-input-wrapper">
              <SearchIcon />
              <input
                type="text"
                className="search-input"
                placeholder="Поиск по навыкам, должности или имени..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="btn btn-primary search-btn" disabled={isLoading}>
                {isLoading ? "Поиск..." : "Найти"}
              </button>
            </div>
            {!isLoading && !error && (
              <div className="results-count">
                Найдено: <strong>{employees.length}</strong> резюме
              </div>
            )}
          </form>

          {/* Error Message */}
          {error && (
            <div className="error-message" style={{ color: '#ef4444', backgroundColor: '#fef2f2', padding: '1rem', borderRadius: '12px', border: '1px solid #f87171', marginBottom: '2rem' }}>
              {error}
            </div>
          )}

          {/* Loading Skeleton Mockup */}
          {isLoading ? (
            <div className="employee-grid">
              {[1, 2, 3, 4, 5, 6].map(skeleton => (
                <div key={skeleton} className="employee-card skeleton-card" style={{ opacity: 0.6, animation: 'pulse 1.5s infinite ease-in-out' }}>
                  <div className="employee-header" style={{ marginBottom: '1.5rem' }}>
                    <div style={{ width: '50px', height: '50px', background: '#e5e7eb', borderRadius: '50%' }}></div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', width: '60%' }}>
                      <div style={{ height: '1.2rem', width: '100%', background: '#e5e7eb', borderRadius: '4px' }}></div>
                      <div style={{ height: '0.9rem', width: '60%', background: '#e5e7eb', borderRadius: '4px' }}></div>
                    </div>
                  </div>
                  <div style={{ height: '3rem', width: '100%', background: '#e5e7eb', borderRadius: '8px', marginBottom: '1rem' }}></div>
                  <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
                    <div style={{ height: '1.5rem', width: '30%', background: '#e5e7eb', borderRadius: '12px' }}></div>
                    <div style={{ height: '1.5rem', width: '25%', background: '#e5e7eb', borderRadius: '12px' }}></div>
                  </div>
                  <div style={{ height: '2.5rem', width: '100%', background: '#e5e7eb', borderRadius: '8px', marginTop: 'auto' }}></div>
                </div>
              ))}
            </div>
          ) : (
            <>
              <div className="employee-grid reveal delay-300">
                {employees.map(emp => (
                  <div className="employee-card" key={emp.id}>
                    <div className="employee-header">
                      <div className="employee-avatar">
                        {emp.name.charAt(0)}
                      </div>
                      <div className="employee-info">
                        <h3>{emp.name}</h3>
                        <span className="employee-role">{emp.role}</span>
                      </div>
                    </div>

                    <div className="employee-details">
                      <div className="detail-item">
                        <span className="detail-label">Опыт:</span> {emp.exp}
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">Зарплата:</span> {emp.salary}
                      </div>
                    </div>

                    <div className="employee-skills">
                      {emp.skills.map(skill => (
                        <span className="skill-tag" key={skill}>{skill}</span>
                      ))}
                    </div>

                    <div className="employee-actions">
                      <button className="btn btn-primary" style={{ width: '100%' }}>Показать контакты</button>
                    </div>
                  </div>
                ))}
                {employees.length === 0 && !error && (
                  <div className="no-results" style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '3rem', color: 'var(--text-muted)' }}>
                    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔍</div>
                    <h3 style={{ color: 'var(--text-main)', marginBottom: '0.5rem' }}>Кандидаты не найдены</h3>
                    <p>Попробуйте изменить параметры поиска или сбросить фильтры.</p>
                  </div>
                )}
              </div>

              {/* Pagination Mock */}
              {employees.length > 0 && (
                <div className="pagination">
                  <button className="btn btn-outline" disabled>Предыдущая</button>
                  <div className="page-numbers">
                    <button className="page-num active">1</button>
                    <button className="page-num" disabled>2</button>
                    <button className="page-num" disabled>3</button>
                  </div>
                  <button className="btn btn-outline" disabled>Следующая</button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function LandingPage({ onGoToDemo, onGoToMain }) {
  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        } else {
          entry.target.classList.remove('active');
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-container">
      {/* Navbar */}
      <nav className="navbar reveal">
        <div className="logo">
          <span className="text-primary">Job</span> Data Scraper
        </div>
        <button className="btn btn-primary" onClick={onGoToDemo}>Запросить демо</button>
      </nav>

      {/* Hero / Features Section */}
      <section className="reveal delay-100">
        <div className="section-header">
          <h1 className="section-title">Всё для эффективного поиска вакансии и работников</h1>
          <p className="section-subtitle">
            Быстрый поиск вакансий и сбор данных о работниках и работадателях
          </p>
        </div>

        <div className="features-grid">
          {/* Card 1 */}
          <div className="feature-card reveal delay-200">
            <span className="badge">NEXT STEP</span>
            <div className="feature-icon-wrapper">
              <LightningIcon />
            </div>
            <h3 className="feature-title">Универсальный парсинг</h3>
            <p className="feature-desc">
              Сбор вакансий и контактов с различных платформ. Сейчас интегрирован HH, скоро добавятся LinkedIn и Хабр.
            </p>
          </div>

          {/* Card 2 */}
          <div className="feature-card reveal delay-300">
            <div className="feature-icon-wrapper">
              <BrainIcon />
            </div>
            <h3 className="feature-title">Умный анализ данных</h3>
            <p className="feature-desc">
              Извлечение ключевых навыков, зарплатных вилок и контактной информации за доли секунды.
            </p>
          </div>

          {/* Card 3 */}
          <div className="feature-card reveal delay-400">
            <div className="feature-icon-wrapper">
              <UsersIcon />
            </div>
            <h3 className="feature-title">Обогащение профилей</h3>
            <p className="feature-desc">
              Получайте полную картину по каждому кандидату или компании благодаря автоматическому поиску дополнительных данных.
            </p>
          </div>

          {/* Card 4 */}
          <div className="feature-card reveal delay-200">
            <div className="feature-icon-wrapper">
              <DatabaseIcon />
            </div>
            <h3 className="feature-title">Структурированная база</h3>
            <p className="feature-desc">
              Сохраняйте собранные данные в удобном формате: Excel, CSV или напрямую в вашу CRM.
            </p>
          </div>

          {/* Card 5 */}
          <div className="feature-card reveal delay-300">
            <div className="feature-icon-wrapper">
              <SearchIcon />
            </div>
            <h3 className="feature-title">Глубокий поиск</h3>
            <p className="feature-desc">
              Мгновенный поиск по вашей собственной собранной базе данных с помощью сложных фильтров.
            </p>
          </div>

          {/* Card 6 */}
          <div className="feature-card reveal delay-400">
            <div className="feature-icon-wrapper">
              <TrendingDownIcon />
            </div>
            <h3 className="feature-title">Снижение затрат на поиск</h3>
            <p className="feature-desc">
              Экономия часов рутинной работы ресечеров и ускорение процесса найма или лидогенерации.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="reveal delay-300">
        <div className="section-header">
          <h2 className="section-title">Competitive <span className="text-primary">Analysis</span></h2>
          <p className="section-subtitle">
            Как мы выглядим на фоне существующих решений
          </p>
        </div>

        <div className="comparison-table-wrapper">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Функция</th>
                <th>Ручной поиск</th>
                <th>Обычные парсеры</th>
                <th>API платформ</th>
                <th className="highlight">Job Data Scraper ✦</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Скорость</td>
                <td>Дни / Недели</td>
                <td>Часы</td>
                <td>Секунды (с лимитами)</td>
                <td className="highlight text-green"><CheckIcon /> Минуты (без лимитов)</td>
              </tr>
              <tr>
                <td>Чистота данных</td>
                <td>С ошибками</td>
                <td>Сырой HTML</td>
                <td>Структурированные</td>
                <td className="highlight text-green"><CheckIcon /> Очищенные и обогащенные</td>
              </tr>
              <tr>
                <td>Мультиплатформенность</td>
                <td>Низкая</td>
                <td>Обычно 1 сайт</td>
                <td className="text-red">× Только своя база</td>
                <td className="highlight text-green"><CheckIcon /> Интеграция любых источников</td>
              </tr>
              <tr>
                <td>Удобство выгрузки</td>
                <td>Копипаст</td>
                <td>Сложные CSV</td>
                <td>Требует разработчика</td>
                <td className="highlight text-green"><CheckIcon /> В один клик (Excel, CRM)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="comparison-footer">
          Job Data Scraper объединяет лучшие практики сбора данных: от обхода сложных защит до автоматической классификации навыков и очистки контактов. Никакого кодинга для начала работы.
        </p>
      </section>

      {/* CTA Section */}
      <section className="cta-section reveal delay-300">
        <div className="cta-badge">
          <LightningIcon />
          Профессиональный Парсер
        </div>
        <h2 className="cta-title">
          Собирайте данные, получайте <span className="text-primary">готовые контакты</span> и находите лучших сотрудников
        </h2>
        <p className="section-subtitle" style={{ maxWidth: '700px' }}>
          Единый инструмент для сбора вакансий и резюме с любых площадок. Начните экономить время прямо сейчас.
        </p>
        <div className="cta-buttons">
          <button className="btn btn-primary" onClick={onGoToMain}>Получить доступ</button>
          <button className="btn btn-outline" onClick={onGoToDemo}>Демо-отчет</button>
        </div>
      </section>
    </div>
  );
}

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  if (currentPage === 'demo') {
    return <DemoPage onBack={() => setCurrentPage('home')} />;
  }

  if (currentPage === 'main') {
    return <MainPage onBack={() => setCurrentPage('home')} />;
  }

  return <LandingPage onGoToDemo={() => setCurrentPage('demo')} onGoToMain={() => setCurrentPage('main')} />;
}

export default App;
