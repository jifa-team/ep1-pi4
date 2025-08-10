import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CadastroForm from '../components/CadastroForm';

const CadastroPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1 flex items-center justify-center">
        <CadastroForm />
      </main>
      <Footer />
    </div>
  );
};

export default CadastroPage;
