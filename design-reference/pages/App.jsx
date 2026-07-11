function App() {
  const [page, setPage] = React.useState('home');
  const [toast, setToast] = React.useState(null);
  const { Toast } = window.FPDIDesignSystem_ca687e;

  const showToast = (title, description) => {
    setToast({ title, description });
    setTimeout(() => setToast(null), 5000);
  };

  const navigate = (p) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });

  return (
    <div>
      <window.Nav page={page} onNavigate={navigate} overlay={page === 'home'} />
      {page === 'home' ? <window.Home onNavigate={navigate} /> : null}
      {page === 'about' ? <window.About onNavigate={navigate} /> : null}
      {page === 'program' ? <window.Program onNavigate={navigate} /> : null}
      {page === 'register' ? <window.Register showToast={showToast} onNavigate={navigate} /> : null}
      {page === 'volunteer' ? <window.Volunteer showToast={showToast} onNavigate={navigate} /> : null}
      <window.Footer onNavigate={navigate} />
      {toast ? (
        <div id="toast-host">
          <Toast variant="success" title={toast.title} description={toast.description} onClose={() => setToast(null)} />
        </div>
      ) : null}
    </div>
  );
}

function mount() {
  if (window.Nav && window.Footer && window.Home && window.About && window.Program && window.Register && window.Volunteer && window.FPDIDesignSystem_ca687e) {
    ReactDOM.createRoot(document.getElementById('root')).render(<App />);
  } else {
    setTimeout(mount, 20);
  }
}
mount();