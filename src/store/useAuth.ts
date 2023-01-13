import create from "zustand";

interface AuthState {
  username: string;
  password: string;
  isAuthenticated: boolean;

  setUsername: (username: string) => void;
  setPassword: (password: string) => void;

  login: () => void;
  logout: () => void;
}

const useAuth = create<AuthState>((set, get) => ({
  username: "",
  password: "",
  isAuthenticated: false,

  setUsername: (username) => set({ username }),
  setPassword: (password) => set({ password }),

  login: () => {
    const state = get();
    const { password } = state;

    if (password.length) return;

    set({ isAuthenticated: true });
  },

  logout: () => {
    set({ isAuthenticated: false });
  },

  // End of Create
}));

export default useAuth;
