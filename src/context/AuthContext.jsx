import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);
const USER_KEY = "kinara_user";
const USERS_KEY = "kinara_users";

function readUsers() {
  try {
    const storedUsers = localStorage.getItem(USERS_KEY);
    return storedUsers ? JSON.parse(storedUsers) : [];
  } catch {
    return [];
  }
}

function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function buildUserRecord({ name, email, password }) {
  return {
    id: crypto.randomUUID(),
    name: name.trim(),
    email: email.trim().toLowerCase(),
    password,
  };
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem(USER_KEY);
      setUser(storedUser ? JSON.parse(storedUser) : null);
    } catch {
      localStorage.removeItem(USER_KEY);
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  async function login(credentials) {
    const email = credentials.email.trim().toLowerCase();
    const users = readUsers();
    const matchedUser = users.find(
      (storedUser) =>
        storedUser.email === email && storedUser.password === credentials.password
    );

    if (!matchedUser) {
      throw new Error("Invalid email or password.");
    }

    const sessionUser = {
      id: matchedUser.id,
      name: matchedUser.name,
      email: matchedUser.email,
    };

    localStorage.setItem(USER_KEY, JSON.stringify(sessionUser));
    setUser(sessionUser);
    return { user: sessionUser };
  }

  async function signup(credentials) {
    if (credentials.password.length < 6) {
      throw new Error("Password must be at least 6 characters.");
    }

    const users = readUsers();
    const normalizedEmail = credentials.email.trim().toLowerCase();
    const existingUser = users.find((storedUser) => storedUser.email === normalizedEmail);

    if (existingUser) {
      throw new Error("An account with that email already exists.");
    }

    const newUser = buildUserRecord(credentials);
    const nextUsers = [...users, newUser];
    const sessionUser = {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
    };

    saveUsers(nextUsers);
    localStorage.setItem(USER_KEY, JSON.stringify(sessionUser));
    setUser(sessionUser);
    return { user: sessionUser };
  }

  function logout() {
    localStorage.removeItem(USER_KEY);
    setUser(null);
  }

  function setUserData(userData) {
    localStorage.setItem(USER_KEY, JSON.stringify(userData));
    setUser(userData);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        isAuthenticated: Boolean(user),
        login,
        signup,
        logout,
        setUserData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
}
