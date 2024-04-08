const Logo = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <span
      className={`font-atyp z-50 self-center text-3xl font-semibold transition-colors duration-1000 ease-in-out md:p-4 ${isOpen ? 'text-light' : 'text-dark'}`}
    >
      Damcom
    </span>
  );
};

export default Logo;
