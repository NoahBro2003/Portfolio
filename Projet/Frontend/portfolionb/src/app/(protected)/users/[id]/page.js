"use client";
import React, { useEffect, useState } from "react";
import "../../../rules.css";
import { useParams } from "next/navigation";
import { getUser, deleteUser, updateUser } from "@/api/services/userService";

import { useDispatch } from "react-redux";
import { LOGOUT_USER } from "@/stores/actions";

//Protected
function Profile() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({ nom: "", prenom: "", email: "" });
  const [editingField, setEditingField] = useState(null);
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();

  const fetchUser = async () => {
    if (!id) return;

    try {
      const data = await getUser(id);
      console.log(data);
      setUser(data);
      setFormData({ nom: data.nom, prenom: data.prenom, email: data.email });
      console.log("User fetched : ", data);
    } catch (err) {
      console.error("Erreur de lecture d'utilisateur.", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [id]);

  const logout = () => {
    try {
      dispatch({ type: LOGOUT_USER });
    } catch (err) {
      console.error("Logout error : ", err);
    }
  };

  const deleteAccount = async () => {
    if (!id) return;

    try {
      const data = await deleteUser(id);
      dispatch({ type: LOGOUT_USER });
    } catch (error) {
      console.error("Erreur de suppression de compte : ", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const saveField = async (field) => {
    const errors = {};
    if (field === "name") {
      const nomRegex = /^[A-Za-zÀ-ÿ\/]+$/;
      if (!nomRegex.test(formData.nom))
        errors.nomViolation =
          "Le nom doit seulement contenir des caractères (aucun espace).";
      console.log("Name violation");
      if (!nomRegex.test(formData.prenom))
        errors.prenomViolation =
          "Le prenom doit seulement contenir des caractères (aucun espace).";
      console.log("Prenom violation");
    }

    if (field === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email))
        errors.emailViolation = "Le courriel doit être un courriel.";
      console.log("Email violation");
    }

    if (Object.keys(errors).length > 0) {
      const result = setErrors(errors);
      return;
    }
    const updatedData = {
      nom: formData.nom,
      prenom: formData.prenom,
      email: formData.email,
    };

    try {
      const updatedUser = await updateUser(id, updatedData);
      console.log(updatedUser);
      setUser(updatedUser.data);
      setFormData({
        nom: updatedUser.data.nom,
        prenom: updatedUser.data.prenom,
        email: updatedUser.data.email,
      });
      fetchUser();
      setEditingField(null);
      setErrors({});
    } catch (error) {
      console.error("Erreur de mise-a-jour d'utilisateur : ", error);
      setErrors({ global: "Un erreur est survécu pendant la mise-a-jour." });
    }
  };

  if (loading) {
    return <div>Loading user profile...</div>;
  }

  return (
    <div className="content">
      {user ? (
        <div className="bg-gray-800 shadow-lg rounded-xl border border-gray-700">
          <div className="px-6 py-5 border-b border-gray-700">
            <h3 className="text-xl font-semibold text-white">Profil</h3>
            <p className="mt-1 text-sm text-gray-400">
              Information personnelles de l'utilisateur.
            </p>
          </div>
          <div className="px-6 py-6">
            <dl className="space-y-6">
              <div className="sm:grid sm:grid-cols-3 sm:gap-4">
                <dt className="text-sm font-medium text-gray-400">Full name</dt>
                <dd className="mt-1 text-sm text-gray-100 sm:mt-0 sm:col-span-2 max-w-full overflow-hidden">
                  {editingField === "name" ? (
                    <>
                      <input
                        name="nom"
                        value={formData.nom}
                        onChange={handleChange}
                        className="bg-gray-700 text-white border border-gray-600 rounded-md px-2 py-1"
                        placeholder="Nom"
                      />
                      <input
                        name="prenom"
                        value={formData.prenom}
                        onChange={handleChange}
                        className="bg-gray-700 text-white border border-gray-600 rounded-md px-2 py-1"
                        placeholder="Prenom"
                      />
                      <button onClick={() => saveField("name")} title="Save">
                        💾
                      </button>
                      {errors.nomViolation && (
                        <p className="text-xs text-red-400 leading-tight max-w-sm break-words">
                          {errors.nomViolation}
                        </p>
                      )}
                      {errors.prenomViolation && (
                        <p className="text-xs text-red-400 leading-tight max-w-sm break-words">
                          {errors.prenomViolation}
                        </p>
                      )}
                    </>
                  ) : (
                    <>
                      {user.nom}, {user.prenom}
                      <button
                        onClick={() => setEditingField("name")}
                        title="Edit"
                      >
                        ✏️
                      </button>
                    </>
                  )}
                </dd>
              </div>
              <div className="sm:grid sm:grid-cols-3 sm:gap-4">
                <dt className="text-sm font-medium text-gray-400">
                  Email address
                </dt>
                <dd className="mt-1 text-sm text-gray-100 sm:mt-0 sm:col-span-2 max-w-full overflow-hidden">
                  {editingField === "email" ? (
                    <>
                      <input
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-gray-700 text-white border border-gray-600 rounded-md px-2 py-1"
                        placeholder="Courriel"
                      />
                      <button onClick={() => saveField("email")} title="Save">
                        💾
                      </button>
                      {errors.emailViolation && (
                        <p className="text-xs text-red-400 leading-tight max-w-sm break-words">
                          {errors.emailViolation}
                        </p>
                      )}
                    </>
                  ) : (
                    <>
                      {user.email}
                      <button
                        onClick={() => setEditingField("email")}
                        title="Edit"
                      >
                        ✏️
                      </button>
                      {errors.global && (
                        <p className="text-xs text-red-400 mt-1 leading-tight">{errors.global}</p>
                      )}
                    </>
                  )}
                </dd>
              </div>
            </dl>
            <div className="flex flex-col sm:flex-row sm:justify-center sm:space-x-3 space-y-2 sm:space-y-0 px-6 py-4 border-b border-gray-700">
            <button
              onClick={logout}
              className="px-3 py-1.5 bg-red-600 text-white text-sm rounded-md hover:bg-red-700 transition focus:ring-2 focus:ring-red-400 cursor-pointer"
            >
              Logout
            </button>
          <button
            onClick={deleteAccount}
            className="px-3 py-1.5 bg-red-700 text-white text-sm rounded-md hover:bg-red-800 transition focus:ring-red-500 cursor-pointer"
          >
            Delete account
          </button>
          </div>
          </div>
          
        </div>
      ) : (
        <div className="text-white text-center mt-6">Loading user profile</div>
      )}
    </div>
  );
}

export default Profile;
