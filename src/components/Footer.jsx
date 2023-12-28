const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-4 bottom-0 w-full">
      <div className="container mx-auto text-center">
        <p>Phreddy &copy; {currentYear}. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
