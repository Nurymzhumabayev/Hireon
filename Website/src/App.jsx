import React, { useEffect, useRef, useState } from 'react';
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
const ChevronDownIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
);

const SunIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
);
const MoonIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
);

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
      setIsDark(true);
      document.body.setAttribute('data-theme', 'dark');
    }
  }, []);

  const toggle = () => {
    const newTheme = isDark ? 'light' : 'dark';
    setIsDark(!isDark);
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <button className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.4rem', borderRadius: '50%', width: '36px', height: '36px', marginRight: '0.5rem' }} onClick={toggle} title="Сменить тему">
      {isDark ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}

function CustomSelect({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="custom-select-container">
      <div
        className={`custom-select-header ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{value}</span>
        <ChevronDownIcon />
      </div>
      {isOpen && (
        <>
          <div className="custom-select-overlay" onClick={() => setIsOpen(false)} />
          <ul className="custom-select-dropdown">
            {options.map((opt) => (
              <li
                key={opt}
                className={`custom-select-item ${value === opt ? 'active' : ''}`}
                onClick={() => {
                  onChange(opt);
                  setIsOpen(false);
                }}
              >
                {opt}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

function DemoPage({ onBack }) {
  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    };
    const observerOptions = { threshold: 0.02 };
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Заявка успешно отправлена! Наш эксперт свяжется с вами в ближайшее время.");
    onBack();
  };

  return (
    <div className="app-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '10vh' }}>
      <nav className="navbar reveal" style={{ width: '100%', marginBottom: '4rem' }}>
        <div className="logo" onClick={onBack} style={{ cursor: 'pointer' }}>
          Hire<b>On</b>
        </div>
        <div className="nav-links">
          <ThemeToggle />
          <button className="btn btn-outline" onClick={onBack}>На главную</button>
        </div>
      </nav>

      <div className="demo-layout reveal delay-100">
        <div className="demo-info">
          <h1 className="demo-title">Модернизируйте свой процесс найма.</h1>
          <p className="demo-subtitle">Закажите индивидуальную демонстрацию платформы. Эксперт HireOn свяжется с вами, чтобы обсудить возможности интеграции и ваши процессы рекрутинга.</p>

          <ul className="demo-benefits">
            <li>
              <div className="demo-benefit-icon"><CheckIcon /></div>
              <div>
                <strong>Персональный тур</strong>
                <p>Покажем инструменты, которые решают именно ваши задачи без лишней воды.</p>
              </div>
            </li>
            <li>
              <div className="demo-benefit-icon"><TrendingDownIcon /></div>
              <div>
                <strong>Анализ метрик</strong>
                <p>Покажем, как использование HireOn снижает ваш CPH (Cost Per Hire) на реальных кейсах.</p>
              </div>
            </li>
            <li>
              <div className="demo-benefit-icon"><DatabaseIcon /></div>
              <div>
                <strong>Ответы на вопросы и API</strong>
                <p>Встреча с инженерами для обсуждения деталей интеграции с вашим текущим ATS.</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="demo-form-card reveal delay-200">
          <form onSubmit={handleSubmit} className="demo-form">
            <h3 style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>Заявка на Демо</h3>
            <div className="form-row">
              <div className="form-group">
                <label>Имя</label>
                <input type="text" className="form-input" placeholder="Иван" required />
              </div>
              <div className="form-group">
                <label>Фамилия</label>
                <input type="text" className="form-input" placeholder="Иванов" required />
              </div>
            </div>
            <div className="form-group">
              <label>Корпоративный Email</label>
              <input type="email" className="form-input" placeholder="ivan@company.ru" required />
            </div>
            <div className="form-group">
              <label>Номер телефона</label>
              <input type="tel" className="form-input" placeholder="+7 (999) 000-00-00" required />
            </div>
            <div className="form-group">
              <label>Название компании</label>
              <input type="text" className="form-input" placeholder="ООО Инновации" required />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Размер штата</label>
                <select className="form-input" required>
                  <option value="">Выберите...</option>
                  <option>1-50 чел.</option>
                  <option>51-200 чел.</option>
                  <option>201-1000 чел.</option>
                  <option>1000+ чел.</option>
                </select>
              </div>
              <div className="form-group">
                <label>Должность</label>
                <input type="text" className="form-input" placeholder="HR Директор" required />
              </div>
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem', padding: '1rem', fontSize: '1.05rem', justifyContent: 'center' }}>
              Получить доступ
            </button>
            <p className="demo-terms">
              Нажимая кнопку, вы соглашаетесь с нашей <br /><a href="#">Политикой конфиденциальности</a>.
            </p>
          </form>
        </div>
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
  { id: 6, name: "Ольга Новикова", role: "QA Инженер", exp: "1.5 года", skills: ["Postman", "Cypress", "Тест-кейсы"], salary: "80 000 ₽" },
  { id: 7, name: "Иван Сергеев", role: "DevOps Инженер", exp: "4 года", skills: ["Kubernetes", "CI/CD", "AWS", "Terraform"], salary: "220 000 ₽" },
  { id: 8, name: "Мария Клюева", role: "HR Biz Partner", exp: "7 лет", skills: ["Рекрутинг", "Адаптация", "1C: ЗУП"], salary: "160 000 ₽" },
  { id: 9, name: "Сергей Петров", role: "iOS Разработчик", exp: "3 года", skills: ["Swift", "Combine", "CoreData"], salary: "180 000 ₽" },
  { id: 10, name: "Наталья Смирнова", role: "Android Разработчик", exp: "2 года", skills: ["Kotlin", "Coroutines", "Dagger"], salary: "150 000 ₽" },
  { id: 11, name: "Денис Морозов", role: "Fullstack Разработчик", exp: "5 лет", skills: ["Vue.js", "PHP", "Laravel", "MySQL"], salary: "170 000 ₽" },
  { id: 12, name: "Алина Белова", role: "Системный Аналитик", exp: "3.5 года", skills: ["UML", "BPMN", "REST API", "Jira"], salary: "130 000 ₽" },
  { id: 13, name: "Виктор Тарасов", role: "C++ Backend Разработчик", exp: "6 лет", skills: ["C++17", "Boost", "Linux"], salary: "280 000 ₽" },
  { id: 14, name: "Екатерина Ильина", role: "Marketing Manager", exp: "4 года", skills: ["B2B", "SEO", "Google Analytics"], salary: "110 000 ₽" },
  { id: 15, name: "Кирилл Николаев", role: "SRE Инженер", exp: "5 лет", skills: ["Prometheus", "Grafana", "Go"], salary: "240 000 ₽" },
];

function MainPage({ onBack, onGoToProfile }) {
  // --- State for Backend Integration ---
  const [employees, setEmployees] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortOption, setSortOption] = useState("Сначала новые");

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
      threshold: 0.02,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyItems: 'center', paddingTop: '10vh' }}>
      <nav className="navbar reveal" style={{ width: '100%', marginBottom: '4rem' }}>
        <div className="logo" onClick={onBack} style={{ cursor: 'pointer' }}>
          <span className="text-primary">Hire</span>On
        </div>
        <div className="nav-links" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <ThemeToggle />
          <button className="btn btn-outline" onClick={onBack}>На главную</button>
          <button className="btn btn-primary" onClick={onGoToProfile}>Профиль</button>
        </div>
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
            <CustomSelect
              options={["Сначала новые", "По релевантности", "Зарплата (по возрастанию)", "Зарплата (по убыванию)"]}
              value={sortOption}
              onChange={setSortOption}
            />
          </div>

          <div className="filter-section">
            <h3 className="filter-title">Специализация</h3>
            <label className="custom-checkbox">
              <input type="checkbox" defaultChecked />
              <span className="checkmark"></span>
              Frontend
            </label>
            <label className="custom-checkbox">
              <input type="checkbox" defaultChecked />
              <span className="checkmark"></span>
              Backend
            </label>
            <label className="custom-checkbox">
              <input type="checkbox" defaultChecked />
              <span className="checkmark"></span>
              Data Science
            </label>
            <label className="custom-checkbox">
              <input type="checkbox" defaultChecked />
              <span className="checkmark"></span>
              QA
            </label>
            <label className="custom-checkbox">
              <input type="checkbox" defaultChecked />
              <span className="checkmark"></span>
              UI/UX
            </label>
          </div>

          <div className="filter-section">
            <h3 className="filter-title">Опыт работы</h3>
            <label className="custom-radio">
              <input type="radio" name="exp" />
              <span className="radiomark"></span>
              Нет опыта
            </label>
            <label className="custom-radio">
              <input type="radio" name="exp" />
              <span className="radiomark"></span>
              От 1 года до 3 лет
            </label>
            <label className="custom-radio">
              <input type="radio" name="exp" defaultChecked />
              <span className="radiomark"></span>
              От 3 до 6 лет
            </label>
            <label className="custom-radio">
              <input type="radio" name="exp" />
              <span className="radiomark"></span>
              Более 6 лет
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

function CharacteristicsSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: "Продвинутый AI-Скрининг",
      description: "Система автоматически оценивает и ранжирует кандидатов на основе требований вакансии, экономя до 80% времени HR-специалиста на первичный отбор.",
      icon: <BrainIcon />,
      color: "#8b5cf6"
    },
    {
      title: "Кросс-платформенный парсинг",
      description: "Один клик для сбора профилей с профессиональных сетей. Автоматическое создание единого профиля кандидата с контактными данными.",
      icon: <SearchIcon />,
      color: "#3b82f6"
    },
    {
      title: "Прогнозная Аналитика",
      description: "Дашборды в реальном времени показывают узкие места воронки найма, прогнозируют сроки закрытия позиций и помогают оптимизировать бюджет.",
      icon: <TrendingDownIcon />,
      color: "#10b981"
    },
    {
      title: "Бесшовная интеграция",
      description: "Enterprise-уровня API для мгновенной синхронизации с вашими текущими ATS (Huntflow, Potok, E-Staff) и внутренними ERP-системами.",
      icon: <DatabaseIcon />,
      color: "#f59e0b"
    },
    {
      title: "Командная работа",
      description: "Вовлекайте нанимающих менеджеров в процесс. Оставляйте комментарии, ставьте оценки и принимайте решения о найме прямо в платформе.",
      icon: <UsersIcon />,
      color: "#ec4899"
    },
    {
      title: "Надежность и Безопасность",
      description: "Мы гарантируем защиту персональных данных (152-ФЗ). Гибкая настройка ролей и доступов для каждого участника процесса найма.",
      icon: <LightningIcon />,
      color: "#14b8a6"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="characteristics-section reveal delay-200" style={{ padding: '6rem 0' }}>
      <div className="section-header">
        <h2 className="section-title">Ключевые характеристики платформы</h2>
        <p className="section-subtitle">
          Технологии, которые меняют подход к найму
        </p>
      </div>
      <div style={{ position: 'relative', maxWidth: '900px', margin: '0 auto' }}>
        <button className="slider-arrow prev" onClick={prevSlide} aria-label="Previous slide">&#8592;</button>
        <button className="slider-arrow next" onClick={nextSlide} aria-label="Next slide">&#8594;</button>

        <div className="slider-viewport">
          <div className="slider-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {slides.map((slide, idx) => (
              <div className="slide-item" key={idx}>
                <div className="slide-card">
                  <div className="slide-icon" style={{ backgroundColor: slide.color + '15', color: slide.color }}>
                    {slide.icon}
                  </div>
                  <h3 className="slide-title">{slide.title}</h3>
                  <p className="slide-description">{slide.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="slider-controls">
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`slider-dot ${currentSlide === idx ? 'active' : ''}`}
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

function LandingPage({ onGoToDemo, onGoToMain, onGoToProfile }) {
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
      threshold: 0.02,
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
        <div className="logo" style={{ cursor: 'pointer' }}>
          Hire<b>On</b>
        </div>
        <div className="nav-links">
          <ThemeToggle />
          <button className="btn btn-outline" onClick={onGoToMain}>Обзор платформы</button>
          <button className="btn btn-primary" onClick={onGoToProfile}>Профиль</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section reveal delay-100">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Автоматизация рекрутинга для HR-команд
            </h1>
            <p className="hero-subtitle">
              Интеллектуальная B2B-платформа для поиска, умного скрининга и парсинга талантов. Сократите время закрытия вакансий в 3 раза.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary btn-large" onClick={onGoToMain}>
                Начать работу
              </button>
              <button className="btn btn-outline btn-large" onClick={onGoToDemo}>
                Запросить демо
              </button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="mock-dashboard">
              <div className="mock-dashboard-header">
                <div className="mock-tab active">
                  <DatabaseIcon style={{ width: 14, height: 14 }} /> Кандидаты
                </div>
                <div className="mock-tab">
                  <TrendingDownIcon style={{ width: 14, height: 14 }} /> Аналитика
                </div>
              </div>
              <div className="mock-dashboard-body">
                <div className="mock-search-wrapper">
                  <SearchIcon />
                  Поиск по всей базе (React, Node.js)...
                </div>
                <table className="mock-table">
                  <thead>
                    <tr>
                      <th>Кандидат</th>
                      <th>Скорринг AI</th>
                      <th>Статус</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="mock-table-name">Александр С. <br /><span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 'normal' }}>Senior Frontend</span></td>
                      <td>98% совпадение</td>
                      <td><span className="mock-status status-green">Новый отклик</span></td>
                    </tr>
                    <tr>
                      <td className="mock-table-name">Елена П. <br /><span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 'normal' }}>Fullstack Engineer</span></td>
                      <td>92% совпадение</td>
                      <td><span className="mock-status status-blue">Интервью</span></td>
                    </tr>
                    <tr>
                      <td className="mock-table-name">Иван С. <br /><span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 'normal' }}>DevOps Инженер</span></td>
                      <td>87% совпадение</td>
                      <td><span className="mock-status status-blue">Интервью</span></td>
                    </tr>
                    <tr>
                      <td className="mock-table-name">Виктор Т. <br /><span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 'normal' }}>C++ Разработчик</span></td>
                      <td>85% совпадение</td>
                      <td><span className="mock-status" style={{ background: '#f3f4f6', color: '#374151' }}>Резерв</span></td>
                    </tr>
                    <tr>
                      <td className="mock-table-name">Алина Б. <br /><span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 'normal' }}>Системный Аналитик</span></td>
                      <td>95% совпадение</td>
                      <td><span className="mock-status status-green">Новый отклик</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Characteristics Slider */}
      <CharacteristicsSlider />

      {/* Features Section */}
      <section className="features-section reveal delay-200">
        <div className="section-header">
          <h2 className="section-title">Единая экосистема рекрутинга</h2>
          <p className="section-subtitle">
            Инструменты enterprise-уровня для работы с талантами
          </p>
        </div>
        <div className="features-grid">
          <div className="feature-card reveal delay-200">
            <div className="feature-icon-wrapper"><DatabaseIcon /></div>
            <h3 className="feature-title">Интеграция с ATS</h3>
            <p className="feature-desc">Бесшовная передача кандидатов в Huntflow, Potok и E-Staff.</p>
          </div>
          <div className="feature-card reveal delay-300">
            <div className="feature-icon-wrapper"><BrainIcon /></div>
            <h3 className="feature-title">AI-скрининг резюме</h3>
            <p className="feature-desc">Автоматическая оценка релевантности опыта и навыков с помощью ИИ.</p>
          </div>
          <div className="feature-card reveal delay-400">
            <div className="feature-icon-wrapper"><UsersIcon /></div>
            <h3 className="feature-title">База талантов</h3>
            <p className="feature-desc">Собственное облачное хранилище для вашей исторической базы кандидатов.</p>
          </div>
          <div className="feature-card reveal delay-200">
            <div className="feature-icon-wrapper"><LightningIcon /></div>
            <h3 className="feature-title">Агрегация площадок</h3>
            <p className="feature-desc">Поиск по HH, Хабр Карьера и LinkedIn в одном интерфейсе без лимитов.</p>
          </div>
          <div className="feature-card reveal delay-300">
            <div className="feature-icon-wrapper"><SearchIcon /></div>
            <h3 className="feature-title">Авто-поиск контактов</h3>
            <p className="feature-desc">Обогащение профиля ссылками на соцсети, почтами и телефонами.</p>
          </div>
          <div className="feature-card reveal delay-400">
            <div className="feature-icon-wrapper"><TrendingDownIcon /></div>
            <h3 className="feature-title">Снижение CPH</h3>
            <p className="feature-desc">Уменьшение стоимости найма (Cost Per Hire) за счет автоматизации рутины.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer reveal delay-200">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="logo">Hire<b>On</b></div>
            <p className="footer-desc">B2B платформа автоматизации рекрутинга и управления талантами.</p>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h4>Продукт</h4>
              <a href="#">Возможности</a>
              <a href="#">AI-Скрининг</a>
              <a href="#">Интеграции</a>
              <a href="#">Безопасность</a>
            </div>
            <div className="footer-column">
              <h4>Ресурсы</h4>
              <a href="#">Кейсы клиентов</a>
              <a href="#">Блог</a>
              <a href="#">API Документация</a>
            </div>
            <div className="footer-column">
              <h4>Компания</h4>
              <a href="#">О нас</a>
              <a href="#">Контакты</a>
              <a href="#">Конфиденциальность</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 HireOn Technologies. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}

const Identicon = () => (
  <svg viewBox="0 0 5 5" width="296" height="296" style={{ borderRadius: '50%', background: '#ffffff', border: '1px solid #d0d7de' }}>
    <rect x="1" y="1" width="1" height="1" fill="#dfb36b" />
    <rect x="3" y="1" width="1" height="1" fill="#dfb36b" />

    <rect x="0" y="2" width="1" height="1" fill="#dfb36b" />
    <rect x="1" y="2" width="1" height="1" fill="#dfb36b" />
    <rect x="3" y="2" width="1" height="1" fill="#dfb36b" />
    <rect x="4" y="2" width="1" height="1" fill="#dfb36b" />

    <rect x="0" y="3" width="1" height="1" fill="#dfb36b" />
    <rect x="1" y="3" width="1" height="1" fill="#dfb36b" />
    <rect x="2" y="3" width="1" height="1" fill="#dfb36b" />
    <rect x="3" y="3" width="1" height="1" fill="#dfb36b" />
    <rect x="4" y="3" width="1" height="1" fill="#dfb36b" />

    <rect x="1" y="4" width="1" height="1" fill="#dfb36b" />
    <rect x="3" y="4" width="1" height="1" fill="#dfb36b" />
  </svg>
);

const RepoIcon = () => (
  <svg style={{ marginRight: '8px' }} aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" fill="currentColor">
    <path fillRule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8a1 1 0 00-1 1v1.5a1.5 1.5 0 01-1.5-1.5v-9a1 1 0 011-1h8.5zM5 12.25a.25.25 0 01.25-.25h3.5a.25.25 0 01.25.25v3.25a.25.25 0 01-.4.21L7 14.62l-1.6 1.09a.25.25 0 01-.4-.21v-3.25z"></path>
  </svg>
);

const GitCommitIcon = () => (
  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" fill="currentColor">
    <path fillRule="evenodd" d="M10.5 7.75a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm1.43.75a4.002 4.002 0 01-7.86 0H.75a.75.75 0 110-1.5h3.32a4.001 4.001 0 017.86 0h3.32a.75.75 0 110 1.5h-3.32z"></path>
  </svg>
);

function ProfilePage({ onGoToHome, onGoToMain }) {
  const [activeTab, setActiveTab] = useState('overview');
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'Nurymzhumabayev',
    role: 'IT Рекрутер',
    company: 'HireOn Agency',
    location: 'Алматы, Казахстан',
    bio: '',
    avatarDataUrl: ''
  });

  const [tempData, setTempData] = useState({ ...profileData });
  const fileInputRef = useRef(null);

  useEffect(() => {
    const savedAvatar = localStorage.getItem('profileAvatar');
    if (savedAvatar) {
      setProfileData((prev) => ({ ...prev, avatarDataUrl: savedAvatar }));
    }
  }, []);

  useEffect(() => {
    setTempData({ ...profileData });
  }, [profileData]);

  const openAvatarPicker = () => {
    fileInputRef.current?.click();
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type?.startsWith('image/')) {
      alert('Пожалуйста, выберите файл изображения (png/jpg/webp и т.д.).');
      e.target.value = '';
      return;
    }

    const maxBytes = 3 * 1024 * 1024; // 3MB
    if (file.size > maxBytes) {
      alert('Файл слишком большой. Выберите изображение до 3MB.');
      e.target.value = '';
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = typeof reader.result === 'string' ? reader.result : '';
      if (!dataUrl) return;
      localStorage.setItem('profileAvatar', dataUrl);
      setProfileData((prev) => ({ ...prev, avatarDataUrl: dataUrl }));
      e.target.value = '';
    };
    reader.readAsDataURL(file);
  };

  const handleSave = () => {
    setProfileData({ ...tempData });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setTempData({ ...profileData });
    setIsEditing(false);
  };

  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    };
    const observer = new IntersectionObserver(observerCallback, { threshold: 0.02 });
    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [activeTab]);

  return (
    <div className="app-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '4vh' }}>
      <nav className="navbar reveal" style={{ width: '100%', marginBottom: '2rem' }}>
        <div className="logo" onClick={onGoToHome} style={{ cursor: 'pointer' }}>
          Hire<b>On</b>
        </div>
        <div className="nav-links">
          <ThemeToggle />
          <button className="btn btn-outline" style={{ marginRight: '1rem' }} onClick={onGoToHome}>На главную</button>
          <button className="btn btn-primary" onClick={onGoToMain}>На базу кандидатов</button>
        </div>
      </nav>

      <div className="gh-layout reveal delay-100">

        {/* Left Sidebar */}
        <aside className="gh-sidebar">
          <div className="gh-avatar-wrapper">
            <button type="button" className="gh-avatar-button" onClick={openAvatarPicker} aria-label="Загрузить фото профиля">
              {profileData.avatarDataUrl ? (
                <img className="gh-avatar-img" src={profileData.avatarDataUrl} alt="Фото профиля" />
              ) : (
                <Identicon />
              )}
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="gh-avatar-input"
              onChange={handleAvatarChange}
            />
            <div className="gh-status-circle">💼</div>
          </div>

          {!isEditing ? (
            <>
              <h1 className="gh-vcard-names">
                <span className="gh-vcard-fullname">{profileData.name}</span>
              </h1>
              {profileData.bio && <p className="gh-text-muted" style={{ fontSize: '16px', marginBottom: '1rem' }}>{profileData.bio}</p>}

              <button className="gh-btn-block" onClick={() => { setTempData({ ...profileData }); setIsEditing(true); }}>Редактировать профиль</button>

              <div className="gh-stats-row" style={{ marginBottom: '0.5rem', marginTop: '1rem' }}>
                <UsersIcon style={{ width: 16, height: 16, opacity: 0.7 }} />
                <span>{profileData.role}</span>
              </div>
              <div className="gh-stats-row" style={{ marginBottom: '0.5rem' }}>
                <span style={{ marginLeft: '20px' }}>🏢 {profileData.company}</span>
              </div>
              {profileData.location && (
                <div className="gh-stats-row">
                  <span style={{ marginLeft: '20px' }}>📍 {profileData.location}</span>
                </div>
              )}
            </>
          ) : (
            <div className="modern-profile-form">
              <div className="modern-form-group">
                <label htmlFor="edit-name" className="modern-form-label">Имя</label>
                <input type="text" id="edit-name" className="modern-form-input" required value={tempData.name} onChange={(e) => setTempData({ ...tempData, name: e.target.value })} />
              </div>
              <div className="modern-form-group">
                <label htmlFor="edit-bio" className="modern-form-label">О себе</label>
                <textarea id="edit-bio" className="modern-form-input" required value={tempData.bio} onChange={(e) => setTempData({ ...tempData, bio: e.target.value })} />
              </div>
              <div className="modern-form-group">
                <label htmlFor="edit-role" className="modern-form-label">Должность</label>
                <input type="text" id="edit-role" className="modern-form-input" required value={tempData.role} onChange={(e) => setTempData({ ...tempData, role: e.target.value })} />
              </div>
              <div className="modern-form-group">
                <label htmlFor="edit-company" className="modern-form-label">Компания</label>
                <input type="text" id="edit-company" className="modern-form-input" required value={tempData.company} onChange={(e) => setTempData({ ...tempData, company: e.target.value })} />
              </div>
              <div className="modern-form-group">
                <label htmlFor="edit-location" className="modern-form-label">Город / Страна</label>
                <input type="text" id="edit-location" className="modern-form-input" required value={tempData.location} onChange={(e) => setTempData({ ...tempData, location: e.target.value })} />
              </div>

              <div className="modern-form-actions">
                <button className="modern-btn modern-btn-save" onClick={handleSave}>Сохранить</button>
                <button className="modern-btn modern-btn-cancel" onClick={handleCancel}>Отмена</button>
              </div>
            </div>
          )}
        </aside>

        {/* Main Content */}
        <main className="gh-main">
          {/* Navigation Tabs */}
          <div className="gh-tabs">
            <div className={`gh-tab ${activeTab === 'overview' ? 'active' : ''}`} onClick={() => setActiveTab('overview')}>
              <RepoIcon /> Обзор
            </div>
            <div className={`gh-tab ${activeTab === 'vacancies' ? 'active' : ''}`} onClick={() => setActiveTab('vacancies')}>
              <RepoIcon /> Вакансии <span className="gh-counter">4</span>
            </div>
            <div className={`gh-tab ${activeTab === 'candidates' ? 'active' : ''}`} onClick={() => setActiveTab('candidates')}>
              Кандидаты
            </div>
            <div className={`gh-tab ${activeTab === 'analytics' ? 'active' : ''}`} onClick={() => setActiveTab('analytics')}>
              Аналитика
            </div>
            <div className={`gh-tab ${activeTab === 'stars' ? 'active' : ''}`} onClick={() => setActiveTab('stars')}>
              Избранное
            </div>
          </div>

          {activeTab === 'overview' && (
            <div className="reveal">
              <div className="gh-section-header">
                <span>Активные вакансии</span>
                <span className="gh-link-muted">Настроить виджеты</span>
              </div>

              {/* Repositories Grid */}
              <div className="gh-repos-grid">

                {/* Repo 1 */}
                <div className="gh-repo-card">
                  <div className="gh-repo-top">
                    <a href="#" className="gh-repo-title">Frontend Developer</a>
                    <span className="gh-repo-badge">Открыта</span>
                  </div>
                  <p className="gh-repo-desc">Продукт HireOn. В поисках сильного React разработчика.</p>
                  <div className="gh-repo-bottom">
                    <span className="gh-lang-dot" style={{ backgroundColor: '#f1e05a' }}></span> React / TypeScript
                  </div>
                </div>

                {/* Repo 2 */}
                <div className="gh-repo-card">
                  <div className="gh-repo-top">
                    <a href="#" className="gh-repo-title">Data Scientist</a>
                    <span className="gh-repo-badge">Открыта</span>
                  </div>
                  <p className="gh-repo-desc">Отдел AI-инноваций. Создание алгоритмов скоринга резюме.</p>
                  <div className="gh-repo-bottom">
                    <span className="gh-lang-dot" style={{ backgroundColor: '#3572A5' }}></span> Python / ML
                  </div>
                </div>

                {/* Repo 3 */}
                <div className="gh-repo-card">
                  <div className="gh-repo-top">
                    <a href="#" className="gh-repo-title">DevOps Engineer</a>
                    <span className="gh-repo-badge">Открыта</span>
                  </div>
                  <p className="gh-repo-desc">Поддержка SaaS платформы.</p>
                  <div className="gh-repo-bottom">
                    <span className="gh-lang-dot" style={{ backgroundColor: '#e34c26' }}></span> Docker / Kubernetes
                  </div>
                </div>

                {/* Repo 4 */}
                <div className="gh-repo-card">
                  <div className="gh-repo-top">
                    <a href="#" className="gh-repo-title">UI/UX Designer</a>
                    <span className="gh-repo-badge" style={{ color: '#8b949e', borderColor: '#d0d7de' }}>Закрыта</span>
                  </div>
                  <span className="gh-repo-fork">Кандидат найден 2 недели назад</span>
                  <p className="gh-repo-desc">Редизайн мобильной версии продукта.</p>
                  <div className="gh-repo-bottom">
                    <span className="gh-lang-dot" style={{ backgroundColor: '#b072e9' }}></span> Figma, Design Systems
                  </div>
                </div>

              </div>

              {/* Contribution Graph Header */}
              <div className="gh-section-header" style={{ marginTop: '2.5rem' }}>
                <span>11 нанятых кандидатов за последний год</span>
                <span className="gh-link-muted">Настройки активности ▼</span>
              </div>

              {/* Graph Card */}
              <div className="gh-graph-card">
                <div className="gh-graph-scroll">
                  <div className="gh-graph-grid">
                    {/* Generating 53x7 grid, with only a few green squares mimicking the screenshot */}
                    {Array.from({ length: 53 * 7 }).map((_, i) => {
                      let level = 0;
                      // March area around index 350+
                      if (i === 355 || i === 362) level = 2; // Mid green
                      if (i === 363) level = 4; // Dark green
                      return (
                        <div key={i} className={`gh-graph-cell level-${level}`}></div>
                      );
                    })}
                  </div>
                </div>

                <div className="gh-graph-footer">
                  <span className="gh-link-muted">Как мы считаем метрики найма</span>
                  <div className="gh-graph-legend">
                    Меньше
                    <div className="gh-graph-cell level-0"></div>
                    <div className="gh-graph-cell level-1"></div>
                    <div className="gh-graph-cell level-2"></div>
                    <div className="gh-graph-cell level-3"></div>
                    <div className="gh-graph-cell level-4"></div>
                    Больше
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div className="gh-section-header" style={{ marginTop: '2rem' }}>
                <span>Активность рекрутера</span>
              </div>

              <div className="gh-timeline">
                <div className="gh-timeline-month">Март 2026</div>

                <div className="gh-timeline-item">
                  <div className="gh-timeline-icon">
                    <GitCommitIcon />
                  </div>
                  <div className="gh-timeline-content">
                    <div className="gh-timeline-title">
                      Успешно закрыта 1 вакансия за месяц
                    </div>
                    <div className="gh-timeline-details">
                      <div className="gh-timeline-repo-row">
                        <a href="#">HireOn / Frontend Developer</a>
                        <span className="gh-timeline-count">1 кандидат нанят</span>
                        <div className="gh-timeline-progress"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'vacancies' && (
            <div className="reveal">
              <div className="gh-filters" style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                <input type="text" placeholder="Поиск вакансий..." className="form-input" style={{ flex: 1, padding: '0.4rem 0.8rem', borderRadius: '6px', border: '1px solid #d0d7de' }} />
                <button className="gh-btn-block" style={{ width: 'auto', margin: 0, backgroundColor: '#2ea043', color: 'white', border: '1px solid rgba(27,31,36,0.15)', fontWeight: 600 }}>Новая вакансия</button>
              </div>

              <div className="gh-panel">
                <div className="gh-panel-row">
                  <div>
                    <a href="#" className="gh-repo-title" style={{ fontSize: '20px', display: 'inline-block', marginBottom: '0.2rem' }}>Frontend Developer</a>
                    <span className="gh-repo-badge" style={{ marginLeft: '0.5rem' }}>Открыта</span>
                    <p className="gh-text-muted" style={{ fontSize: '14px', margin: '0.25rem 0 1rem' }}>Продукт HireOn. В поисках сильного React разработчика.</p>
                    <div className="gh-repo-bottom">
                      <span className="gh-lang-dot" style={{ backgroundColor: '#f1e05a' }}></span> React / TypeScript <span className="gh-text-muted" style={{ marginLeft: '1rem' }}>Обновлено 2 дня назад</span>
                    </div>
                  </div>
                  <div>
                    <button className="gh-btn-block" style={{ width: 'auto', margin: 0 }}>Изменить</button>
                  </div>
                </div>
                <div className="gh-panel-row gh-panel-row--last">
                  <div>
                    <a href="#" className="gh-repo-title" style={{ fontSize: '20px', display: 'inline-block', marginBottom: '0.2rem' }}>Data Scientist</a>
                    <span className="gh-repo-badge" style={{ marginLeft: '0.5rem' }}>Открыта</span>
                    <p className="gh-text-muted" style={{ color: '#57606a', fontSize: '14px', margin: '0.25rem 0 1rem' }}>Отдел AI-инноваций. Создание алгоритмов скоринга резюме.</p>
                    <div className="gh-repo-bottom">
                      <span className="gh-lang-dot" style={{ backgroundColor: '#3572A5' }}></span> Python / ML <span className="gh-text-muted" style={{ marginLeft: '1rem' }}>Обновлено 5 дней назад</span>
                    </div>
                  </div>
                  <div>
                    <button className="gh-btn-block" style={{ width: 'auto', margin: 0 }}>Изменить</button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'candidates' && (
            <div className="reveal">
              <div className="gh-filters" style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                <input type="text" placeholder="Поиск кандидатов по имени, навыкам..." className="form-input" style={{ flex: 1, padding: '0.4rem 0.8rem', borderRadius: '6px', border: '1px solid #d0d7de' }} />
              </div>

              <div className="gh-panel">
                <div className="gh-panel-row">
                  <div style={{ width: 48, height: 48, borderRadius: '50%', background: '#e1e4e8', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>👨‍💻</div>
                  <div style={{ flex: 1 }}>
                    <a href="#" className="gh-repo-title" style={{ fontSize: '16px' }}>Александр Иванов</a>
                    <p className="gh-text-muted" style={{ fontSize: '14px', margin: '0.2rem 0 0' }}>Middle React Developer • Москва • Ожидания: 200k ₽</p>
                  </div>
                  <button className="gh-btn-block" style={{ width: 'auto', margin: 0 }}>Пригласить</button>
                </div>
                <div className="gh-panel-row gh-panel-row--last">
                  <div style={{ width: 48, height: 48, borderRadius: '50%', background: '#e1e4e8', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>👩‍💻</div>
                  <div style={{ flex: 1 }}>
                    <a href="#" className="gh-repo-title" style={{ fontSize: '16px' }}>Елена Смирнова</a>
                    <p className="gh-text-muted" style={{ fontSize: '14px', margin: '0.2rem 0 0' }}>Senior Backend (Python) • Remote • Ожидания: 350k ₽</p>
                  </div>
                  <button className="gh-btn-block" style={{ width: 'auto', margin: 0 }}>Написать</button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="reveal">
              <div className="gh-section-header">
                <span>Отчеты по найму</span>
              </div>
              <div className="gh-repos-grid">
                <div className="gh-repo-card" style={{ padding: '2rem' }}>
                  <h3 className="gh-text-muted" style={{ margin: 0, fontSize: '14px', fontWeight: 'normal' }}>Время закрытия (Time to fill)</h3>
                  <p className="gh-text-main" style={{ fontSize: '32px', fontWeight: 600, margin: '1rem 0' }}>14 дней</p>
                  <span style={{ color: '#2ea043', fontSize: '12px', fontWeight: 600 }}>↓ 2 дня с прошлого месяца</span>
                </div>
                <div className="gh-repo-card" style={{ padding: '2rem' }}>
                  <h3 className="gh-text-muted" style={{ margin: 0, fontSize: '14px', fontWeight: 'normal' }}>Конверсия оферов</h3>
                  <p className="gh-text-main" style={{ fontSize: '32px', fontWeight: 600, margin: '1rem 0' }}>85%</p>
                  <span style={{ color: '#2ea043', fontSize: '12px', fontWeight: 600 }}>↑ 5% с прошлого месяца</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'stars' && (
            <div className="reveal">
              <div style={{ textAlign: 'center', padding: '6rem 1rem', border: '1px dashed #d0d7de', borderRadius: '6px' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⭐</div>
                <h3 className="gh-text-main" style={{ marginBottom: '0.5rem', fontWeight: 600 }}>Пока нет избранных кандидатов</h3>
                <p className="gh-text-muted">Сохраняйте профили лучших специалистов, чтобы быстро вернуться к ним позже.</p>
              </div>
            </div>
          )}

        </main>
      </div>
    </div>
  );
}

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  if (currentPage === 'demo') {
    return <DemoPage onBack={() => setCurrentPage('home')} />;
  }

  if (currentPage === 'main') {
    return <MainPage onBack={() => setCurrentPage('home')} onGoToProfile={() => setCurrentPage('profile')} />;
  }

  if (currentPage === 'profile') {
    return <ProfilePage onGoToHome={() => setCurrentPage('home')} onGoToMain={() => setCurrentPage('main')} />;
  }

  return <LandingPage onGoToDemo={() => setCurrentPage('demo')} onGoToMain={() => setCurrentPage('main')} onGoToProfile={() => setCurrentPage('profile')} />;
}

export default App;
