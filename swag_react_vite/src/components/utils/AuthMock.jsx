const STORAGE_KEY = "swag_users";
const SESSION_KEY = "swag_current_user";

function loadUsers() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

function saveUsers(users) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
}

function saveCurrentUser(user) {
    localStorage.setItem(SESSION_KEY, JSON.stringify(user));
}

export function registerUser({ name, email, password }) {
    const users = loadUsers();

    if (users.some(u => u.email === email)) {
        return { success: false, message: "Email already registered." };
    }

    const newUser = { name, email, password };
    users.push(newUser);
    saveUsers(users);
    saveCurrentUser(newUser);

    return { success: true, message: "Account created successfully 🎉", user: newUser };
}

export function loginUser({ email, password }) {
    const users = loadUsers();
    const found = users.find(u => u.email === email && u.password === password);

    if (!found) {
        return { success: false, message: "Invalid email or password." };
    }

    saveCurrentUser(found);
    return { success: true, message: "Welcome back 👟🔥", user: found };
}

export function getCurrentUser() {
    return JSON.parse(localStorage.getItem(SESSION_KEY));
}

export function updateUser(updates) {
    const users = loadUsers();
    const current = getCurrentUser();
    if (!current) return null;

    const updatedUser = { ...current, ...updates };

    const newUsers = users.map(u =>
        u.email === current.email ? updatedUser : u
    );

    saveUsers(newUsers);
    saveCurrentUser(updatedUser);

    return updatedUser;
}

export function logout() {
    localStorage.removeItem(SESSION_KEY);
}