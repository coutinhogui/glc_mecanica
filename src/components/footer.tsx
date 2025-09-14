export default function Footer() {
  return (
    <footer className="py-8 bg-background border-t">
      <div className="container mx-auto px-4 text-center text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} GLC Mecânica. Todos os direitos reservados.</p>
        <p className="text-sm mt-2">Feito com ♥ em Curitiba/PR</p>
      </div>
    </footer>
  );
}
