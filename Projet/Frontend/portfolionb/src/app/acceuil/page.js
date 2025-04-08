import React from "react";
import "../rules.css";
function Acceuil() {
  return (
    <div className="content">
  <section className="flex flex-col items-center justify-center text-center py-24 px-4">
  <img
    src="guy.jpg"
    alt="Profile picture"
    className="w-30 h-44  sm:w-50 sm:h-64 rounded-full mb-6 shadow-lg border-4 border-white"
  />

    <h2 className="text-4xl font-extrabold mb-4">Bonjour! Je suis Noah 👋</h2>
    <p className="text-sm max-w-2xl mb-6 font-bold hover:text-white text-gray-300">
      Je suis un programmeur dans le programme de Programmation Informatique à LaCité collégiale. À présent, je suis en mesure de terminer ma dernière étape à l'école et j'envisage gradué à la fin du moi d'Avril 2025.
    </p>

    <p className="text-sm max-w-2xl mb-1 hover:text-white text-gray-300 font-bold">
      Dans ce site, vous retrouverez une page pour votre profil d'où vous pouvez manipuler vos détails comme vous le voulez;
    </p>
    <p className="text-sm max-w-2xl mb-1 hover:text-white text-gray-300 font-bold">
    Une page de témoignage pour laissez vos remarque, vos recommendations et vos intérêts par rapport à mon Portfolio;
    </p>
    <p className="text-sm max-w-2xl mb-1 hover:text-white text-gray-300 font-bold">
    Une page de projets démontrant ainsi les projets que j'ai participer dedans pendant mon parcours à l'école;
    </p>
    <p className="text-sm max-w-2xl mb-1 hover:text-white text-gray-300 font-bold">
      Et cette page d'acceuil!
    </p>

    <p className="text-sm max-w-2xl mb-6 text-yellow-300 font-bold">
    Donc n'hésiter pas et faite comme chez vous, explorez 😊! 
    </p>
  </section>

  <section id="projects" className="max-w-6xl mx-auto px-4 py-16">
    <h3 className="text-2xl font-bold">Projects</h3>
    <div className="p-1">
    <a href="https://github.com/noahbros/ProjetUA3Dev." className="text-gray-600 text-sm hover:text-blue-300">Application de gestion d’étudiant.</a>
    </div>
    <div className="p-1">
    <a href="https://github.com/noahbros/ProjetWebPt2" className="text-gray-600 text-sm hover:text-blue-300">Prototype de site web – Bibliothèque virtuelle.</a>
    </div>
  </section>
    </div>
  );
}

export default Acceuil;
