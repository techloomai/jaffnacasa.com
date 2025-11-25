export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <p className="text-neutral-light">
            © {currentYear} Jaffna Casa – Fine Stay. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

