import React from "react";
import "../../rules.css";

function Details() {
  return (
    <div className="content">
      <div className="px-4 py-20 max-w-4xl mx-auto">
        <h1 className="text-4xl font-semibold mb-12 text-center">
          Portfolio – Projects
        </h1>

        <article className="mb-16">
          <img
            src="projetbib.png"
            alt="Project Title"
            className="w-full rounded-2xl mb-6 object-cover shadow-md"
          />
          <h2 className="text-2xl font-bold mb-2 text-gray-200">
            Application de gestion d’étudiant
          </h2>
          <div>
            <h3 className="font-bold text-gray-400">Description</h3>
            <p className="text-gray-500 text-sm mb-4">
              Ce projet a été réalisé pour organiser les étudiants, les
              programmes et leurs relations entre les deux. Un peu comme un
              logiciel de recherche d’étudiants. Vous pouvez utiliser toutes les
              opérations CRUD sur chaque objet tel que : « les étudiants » et «
              les programmes ». Ce projet a été développé par trois personnes
              différentes.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="font-bold text-gray-400 mb-1">Mes tâches</h3>
            <ul className="list-disc list-inside text-sm text-gray-500 space-y-2">
              <li>
                Créée la base de données et la liée à l’application à l’aide de
                XAMPP et WPF.
              </li>
              <li>
                Développé la section “programmes” de l’application :
                <ul className="list-disc list-inside pl-5 space-y-1">
                  <li>
                    Permet aux utilisateurs de créer un programme avec certaines
                    contraintes à respecter.
                  </li>
                  <li>
                    Autoriser les utilisateurs à utiliser chaque opération CRUD
                    sur l’objet « Programme ».
                  </li>
                </ul>
              </li>
            </ul>

            <section className="mt-12">
              <h3 className="text-2xl font-semibold mb-6 text-center text-gray-300">
                Langages maîtrisés
              </h3>
              <div className="space-y-6">

                <div className="flex items-center">
                  <span className="text-gray-400 font-medium w-1/4">
                    C#
                  </span>
                  <div className="w-3/4 bg-gray-300 rounded-full h-2.5">
                    <div
                      className="bg-green-600 h-2.5 rounded-full"
                      style={{ width: "95%" }}
                    ></div>
                  </div>
                </div>

                <div className="flex items-center">
                  <span className="text-gray-400 font-medium w-1/4">WPF</span>
                  <div className="w-3/4 bg-gray-300 rounded-full h-2.5">
                    <div
                      className="bg-violet-600 h-2.5 rounded-full"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <hr className="border-gray-300" />
        </article>

        <article className="mb-16">
          <img
            src="projetbib.png"
            alt="Project Title"
            className="w-full rounded-2xl mb-6 object-cover shadow-md"
          />
          <h2 className="text-2xl font-bold mb-2 text-gray-300">
            Prototype de site web – Bibliothèque virtuelle
          </h2>
          <div>
            <h3 className="font-bold text-gray-400">Description</h3>
            <p className="text-gray-500 text-sm mb-4">
              Ce projet était un projet de deux, qui a été développé dans le bût
              de créer une bibliothèque en ligne d’où les utilisateurs peuvent
              commander des livres et les emprunter via site web.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="font-bold text-gray-400 mb-1">Mes tâches</h3>
            <ul className="list-disc list-inside text-sm text-gray-500 space-y-2">
              <li>
                Pris le rôle d’un développeur Web full-stack.
                <ul className="list-disc list-inside pl-5 space-y-1">
                  <li>
                    Développer le “frontend” en utilisant Vue.js, Sass et HTML.
                    <ul className="list-disc list-inside pl-5 space-y-1">
                      <li>
                        Concevoir la plupart des pages web présentes sur le
                        site.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Développer le “backend” en utilisant JavaScript, XAMPP et
                    Postman.
                    <ul className="list-disc list-inside pl-5 space-y-1">
                      <li>
                        {" "}
                        Lié la base de données SQL au site web à l’aide de XAMPP
                        et Postman.
                      </li>
                      <li>
                        {" "}
                        Développer la plupart des routes et relations entre la
                        base de données et le site web via JavaScript et
                        Postman.
                      </li>
                      <li>
                        {" "}
                        Créer le certificat pour sécuriser le site (HTTPS)
                      </li>
                      <li>
                        {" "}
                        Développer l’intégralité du système de gestion de compte
                        avec l’utilisation de jetons web JSON.
                        <ul className="list-disc list-inside pl-5 space-y-1">
                          <li> Validation, vérification</li>
                          <li> Permissions</li>
                          <li> Reconnaissance de compte</li>
                          <li> Cryptage des mots de passes</li>
                          <li> Pages de connexion et d’inscription</li>
                        </ul>
                      </li>
                      <li>
                        Développé une grande majorité d’opérations CRUD pour
                        chaque objet.
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>

            <section className="mt-12">
              <h3 className="text-2xl font-semibold mb-6 text-center text-gray-300">
                Langages maîtrisés
              </h3>
              <div className="space-y-6">

                <div className="flex items-center">
                  <span className="text-gray-400 font-medium w-1/4">
                    JavaScript
                  </span>
                  <div className="w-3/4 bg-gray-300 rounded-full h-2.5">
                    <div
                      className="bg-yellow-600 h-2.5 rounded-full"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>

                <div className="flex items-center">
                  <span className="text-gray-400 font-medium w-1/4">
                    Vue.js
                  </span>
                  <div className="w-3/4 bg-gray-300 rounded-full h-2.5">
                    <div
                      className="bg-green-600 h-2.5 rounded-full"
                      style={{ width: "50%" }}
                    ></div>
                  </div>
                </div>

                <div className="flex items-center">
                  <span className="text-gray-400 font-medium w-1/4">
                    HTML & CSS
                  </span>
                  <div className="w-3/4 bg-gray-300 rounded-full h-2.5">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full"
                      style={{ width: "65%" }}
                    ></div>
                  </div>
                </div>

                <div className="flex items-center">
                  <span className="text-gray-400 font-medium w-1/4">SQL & Postman</span>
                  <div className="w-3/4 bg-gray-300 rounded-full h-2.5">
                    <div
                      className="bg-red-600 h-2.5 rounded-full"
                      style={{ width: "25%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <hr className="border-gray-300" />
        </article>
      </div>
    </div>
  );
}

export default Details;
