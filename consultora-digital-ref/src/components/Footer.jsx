function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-4 mt-5">
      <div className="container">
        <p className="mb-3">&copy; {new Date().getFullYear()} Consultora Digital Ref</p>

        <div className="d-flex justify-content-center mb-3 gap-4">

          {/* Instagram */}
          <a href="https://www.instagram.com/consultoradigitalref/" target="_blank" rel="noopener noreferrer" className="text-white">
            <i className="bi bi-instagram" style={{ fontSize: '2rem' }}></i>
          </a>

          {/* Linkedin */}
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-white">
            <i className="bi bi-linkedin" style={{ fontSize: '2rem' }}></i>
          </a>

          {/* Facebook */}
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-white">
            <i className="bi bi-facebook" style={{ fontSize: '2rem' }}></i>
          </a>

        </div>

        <p className="mb-0">Todos Los Derechos Reservados</p>
      </div>
    </footer>
  );
}

export default Footer;
